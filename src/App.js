import React, { Component } from 'react';
import { Page, Fab, Icon } from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
  
  render () {
    return (
      <Page>
        <Fab position='bottom right' onClick={() => console.log('TESTE')}>
          <Icon icon='fa-plus' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
      </Page>
    );
  }

}

export default App;
