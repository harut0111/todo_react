import './App.css';
import React from 'react';
import Input from './components/Input.js';
import Todolist from './components/Todolist.js';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todolist: ['asd', 'adf88'],
    };
  }

  imputChangeHandler = (value) => {
      this.setState({input: value})
  }
//add new Items
  addTodoItems = () => {
    const {input} = this.state;

    this.setState((state) => ({
      todolist: state.todolist.concat(input)
    }));
  }

  itemRomoveHandler = (index) => {
    const newList = [...this.state.todolist];
    newList.splice(index, 1);
    
    this.setState({todolist: newList});
  }

  render() {
    const {input, todolist} = this.state;
    return (
      <div className="App">
        <h1>To Do List</h1>

        <div className="inputAndButton">
          <Input inputVal={input} onInputChange={this.imputChangeHandler}/>
          <button onClick={this.addTodoItems}>add to do</button>
        </div>

        <Todolist todoItems={todolist} onItemRemove={this.itemRomoveHandler}/>
      </div>
   )
  }
}

export default App; 
