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
        /* {id: Math.random(), value: "I'm gonna do...", done: false}, 
        {id: Math.random(), value: "I've already done it", done: true} */
      ]
    };
  }



  /* ---- STORE INPUT VALUE ON STATE ---- */
  imputChangeHandler = (value) => {
      this.setState({input: value})
  }


  
  /* ---- ADD NEW ITEMS ON LIST ---- */
  addTodoItems = () => {

    const {input} = this.state;
    const randomNum = String( new Date().getTime() );
    if(input.trim()) {
      
      // Add a new document in collection "listItem" on firebase
      this.db.collection("listItem").doc(randomNum ).set({
        value: input, 
        done: false
      })
      .then(() => { 
        //here we sure that data has been set on firebase
        this.setState(state => ({
          todolist: state.todolist.concat({
            id: randomNum, 
            value: input, 
            done: false
          }),
          input: ""
        }));
        /////
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }
  }


  /* ---REMOVE ITEM FROM LIST--- */
  itemRomoveHandler = (key) => {

    //filter removed item
    const newList = this.state.todolist.filter(item => {
      return item.id !== key;
    }); 

    //delete from firebase then change "todolist" state
    this.db.collection("listItem").doc(key).delete().then(() => {
      this.setState({todolist: newList});
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }



  /* --- MARK ITEM AS DONE ---- */
  itemDoneHandler = (key) => {
    
    const newList = [...this.state.todolist]
    let itemDone = false;
    newList.forEach(item => {
      if(item.id === key) itemDone = item.done = !item.done
    })

    // at first change on firebase for sure then "todolist" state
    this.db.collection("listItem").doc(key).set({
      done: itemDone
    },{ merge: true })
    .then(() => {
      this.setState({todolist: newList});
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });    
  }


  /* this method called after createing component
  so it is the best place to get data from firebase */

  componentDidMount() {
    
    /* const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore"); */

    const firebase = require('firebase/app');
    require('firebase/firestore');

    firebase.initializeApp({
      apiKey: 'AIzaSyA-NlEgvbcRcsOT_ZP1j24kbZTKIsViHA4',
      authDomain: 'todoapp-harut.firebaseapp.com',
      projectId: 'todoapp-harut'
    });
    
    this.db = firebase.firestore();
    // get date then set it on state which lead on re-render
    this.db.collection("listItem").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          this.setState(state => ({
            todolist: state.todolist.concat({
              id: doc.id, 
              value: doc.data().value, 
              done: doc.data().done
            }),
          }));
          
      /* console.log(`${doc.id} => ${doc.data().value} => ${doc.data().done}`); */
      });
    });
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
          onItemDone={this.itemDoneHandler}
        />
      </div>
   )
  }
}

export default App; 
