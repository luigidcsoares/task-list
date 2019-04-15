import React from 'react';
import { 
  Checkbox,
  Fab, 
  Icon, 
  Navigator, 
  Page, 
  Toolbar, 
  List,
  ListItem,
} from 'react-onsenui';

import Form from './Form';
import { loadLocalData } from './utils';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: loadLocalData('tasks') };
    
    document.addEventListener('postpop', e => {
      // Update this component data when returning to it.
      if (e.enterPage.matches('#home')) {
        this.setState({ tasks: loadLocalData('tasks') }); 
      }
    });

    // Binding event handlers in the constructor for better performance.
    this.pushPage = this.pushPage.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  pushPage() {
    this.props.navigator.pushPage({ component: Form });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Tarefas</div>
      </Toolbar>
    );
  }

  updateTask(e) {
    let index = e.target.id;
    let tasks = this.state.tasks;
    tasks[index].completed = e.target.checked;

    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  renderRow(data, index) {
    return (
      <ListItem modifier='longdivider'>
        <div className='left'>
          <Checkbox onChange={this.updateTask} input-id={index} checked={data.completed}/>
        </div>
        <div className='center'>
          {data.name}
        </div>
        <div className='right'>
          {data.date}
        </div>
    </ListItem>
    );
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar} id='home'>

        <List position='center'
          dataSource={this.state.tasks}
          renderRow={this.renderRow}
        /> 

        <Fab position='bottom right' onClick={this.pushPage}>
          <Icon icon='fa-plus' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
      </Page>
    );
  }

}

export default Home;
