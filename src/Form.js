import React from 'react';
import {
  Input,
  Icon,
  Fab,
  Page,
  TextArea,
  Toolbar,
  BackButton
} from 'react-onsenui';

import { loadLocalData } from './utils';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      date: null,
      completed: false
    };
  }

  handleAdd() {
    // Get old data and update with new item.
    let tasks = loadLocalData('tasks') || [];
    tasks.push(this.state);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Go back to home screen.
    this.props.navigator.popPage({data: this.state});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton />
        </div>

        <div className='center'>Adicionar Tarefa</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className='center form'>
          <Input
            className='form-group'
            value={this.state.name} float
            onChange={(e) => { this.setState({ name: e.target.value }) }}
            placeholder='Nome' 
          />
          
          <Input 
            className='form-group'
            type='date'
            value={this.state.date} float
            onChange={(e) => { this.setState({ date: e.target.value }) }}
            placeholder='Data'
          />
        </div>

        <Fab position='bottom right' onClick={this.handleAdd.bind(this)}>
          <Icon icon='fa-check' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
      </Page>
    );
  }
}

export default Form;
