import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: '리엑트 복습', checked: false },
      { id: 1, text: 'Koa react 연결', checked: false },
      { id: 2, text: 'Mongoose 익히기', checked: false },
    ],
    color: "#343a40"
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };
  
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const removedTodos = todos.filter(todo => todo.id !== id);

    this.setState({
      todos: removedTodos
    });
  }

  handleSelected = (color) => {
    this.setState({
      color
    });
  }

  render() {
    const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];
    const { input, todos, color } = this.state;
    const {handleChange, handleCreate, handleKeyPress, 
      handleToggle, handleRemove, handleSelected} = this;
    return (
      <TodoListTemplate
        palette={
          <Palette 
            colors={colors}
            selected={color}
            onSelect={handleSelected}
          />}
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
      }>
        <TodoItemList todos={todos} 
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
