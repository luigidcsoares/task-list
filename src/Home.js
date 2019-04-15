import React from 'react';
import { 
  Fab, 
  Icon, 
  Navigator, 
  Page, 
  Toolbar, 
  List,
  ListHeader
} from 'react-onsenui';

import Form from './Form';
import { loadLocalData } from './utils';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Home extends React.Component {
  componentDidMount() {
    this.state = { tasks: loadLocalData('tasks') };
    
    console.log('Adding event listener');
    console.log(this.state);

    document.addEventListener('postpop', e => {
      if (e.enterPage.matches('#home')) {
        console.log('updatado');
        this.state = { tasks: loadLocalData('tasks') }; 
        console.log(this.state);
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
      <ListItem key={`aaabbb-${index}`}>
      {/* <div className='left'>
        <img className='list__item__thumbnail'  />
      </div>
      <div className='center'>
        "aaa"
      </div> */}
    </ListItem>
    )
  }
  render () {
    return (
      <Page renderToolbar={this.renderToolbar} id='home'>

        <List position='center'
          dataSource={this.state.ta}
          renderHeader={() => <ListHeader>Pull down to refresh</ListHeader>}
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
