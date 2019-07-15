import './App.css';
import React from 'react';
import Input from './components/Input.js';
import Todolist from './components/Todolist.js';


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todolist: [
        {id: Math.random(), value: "I'm gonna do...", done: false}, 
        {id: Math.random(), value: "I've already done it", done: true}
      ]
    };
  }

  // store input value
  imputChangeHandler = (value) => {
      this.setState({input: value})
  }

  //add new Items 
  addTodoItems = () => {
    const {input} = this.state;

    this.setState(state => ({
      todolist: state.todolist.concat({id: Math.random(), value: input, done: false}),
      input: ""
    }));
  }


  // remove item from list 
  itemRomoveHandler = (key) => {
    console.log(key)
    const newList = this.state.todolist.filter(item => {
      return item.id !== +key;
    });  
    console.log(newList)
    this.setState({todolist: newList});
  }

  // mark item as done
  itemDoneHandler = (key) => {
    const newList = [...this.state.todolist]
    newList.forEach(item => {
      if(item.id === +key) item.done = !item.done
    })

    this.setState({todolist: newList});
  }

  
  render() {
    const {input, todolist} = this.state;
    return (
      <div className="App">
        <h1>To Do List...</h1>

        <div className="inputAndButton">
          <Input 
            inputVal={input} 
            onInputChange={this.imputChangeHandler}
            onEnterPress={this.addTodoItems}
            onBtnClick={this.addTodoItems}
            />
        </div>

        <Todolist 
          todoItems={todolist} 
          onItemRemove={this.itemRomoveHandler}
          onItemDone={this.itemDoneHandler}/>
      </div>
   )
  }
}

export default App; 
