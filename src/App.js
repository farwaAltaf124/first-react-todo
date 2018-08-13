import React, { Component } from 'react';

import './App.css';

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      todo : [],
      task: '',
  } 
  }

//   inputbox;
  onChangeHandler = (ev) => {
        // console.log(ev.target.name);
        console.log(ev.target.value);
        // this.inputbox = ev.target.value;
        // this.setState({'task': ev.target.value});
        this.setState({ task:ev.target.value});
        
  }

  submitHandler = (ev) => {
    
      this.state.todo.push(this.state.task)
      console.log('todo length =', this.state.todo)
     
      this.setState({task:''});
      ev.preventDefault();

  }


  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <form >
            <div>
                <input type="text"  value={this.state.task} onChange={this.onChangeHandler} />
            </div>
           {/*  */}
            <div>
                {/* <input type="submit" name="add" value="Add" onClick={this.submitHandler}/> */}
                <button value='Add' onClick={this.submitHandler}>Add</button>
            </div>
             <div>
            {this.state.todo.map((list)=>
            // <ul key={'list_'+i}>
            <li key={list.toString()}>{list}</li>
            
           )}
             </div>
        </form>

       
      </div>
    );

  }
}

export default App;
 