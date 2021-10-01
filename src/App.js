import './App.css';
import Header from "./My component/Header";
import { Footer } from "./My component/Footer";
import { Todos } from "./My component/Todos";
import { Addtodo } from "./My component/Addtodo";
import { About } from "./My component/About";
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo
  if (localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo)

 
  const ondelete= (todo)=>{
    // console.log("I am ondelete" ,todo);
    
    // This method of deleting is not valid in reactjs
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addtodo=(title,desc)=>{
    // console.log("I am adding todo",title,desc);
    let srno;
    if (todos.length===0) {
      srno = 1
    }
    else{
      srno = todos[todos.length-1].srno + 1;
    }
    const mytodo = {
      srno : srno,
      title : title,
      desc : desc
    }
    setTodos([...todos,mytodo]);
    // console.log(mytodo);
   
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  ;
  return (
    <>
    <Router>
    <Header title="My Todos" searchbar={true}/>
    <Switch>
          <Route exact path="/" render={()=>{
            return (
            <>
            <Addtodo addtodo={addtodo}/>
            <Todos todos={todos} ondelete={ondelete}/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        
        </Switch>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
