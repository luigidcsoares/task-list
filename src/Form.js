import React from 'react';
import {
  Icon,
  Input,
  Page,
  Toolbar,
  BackButton
} from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Form extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton>
            <Icon icon='fa-arrow-left' />
          </BackButton>
        </div>

        <div className='center'>Adicionar Tarefa</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Input placeholder='Nome' float />
      </Page>
    );
  }
}

export default Form;
