import React from 'react';
import { 
  Fab, 
  Icon, 
  Navigator, 
  Page, 
  Toolbar, 
} from 'react-onsenui';

import Form from './Form';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Home extends React.Component {
  componentDidMount() {
    console.log('Adding event listener');
    document.addEventListener('postpop', e => {
      if (e.enterPage.matches('#home')) {
        // Update data.
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

  render () {
    return (
      <Page renderToolbar={this.renderToolbar} id='home'>

        <Fab position='bottom right' onClick={this.pushPage.bind(this)}>
          <Icon icon='fa-plus' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
      </Page>
    );
  }

}

export default Home;
