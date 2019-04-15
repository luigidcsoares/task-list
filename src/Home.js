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
      if (e.enterPage.matches('#home')) {
        this.setState({ tasks: loadLocalData('tasks') }); 
      }
    });
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

  renderRow(data, index) {
    return (
      <ListItem key={`task-${index}`} modifier='longdivider'>
        <div className='left'>
          <Checkbox onChange={e => console.log(e)} />
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

        <Fab position='bottom right' onClick={this.pushPage.bind(this)}>
          <Icon icon='fa-plus' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
      </Page>
    );
  }

}

export default Home;
