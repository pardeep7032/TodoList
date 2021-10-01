import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=> {
        e.preventDefault();      //This is used to No reloading page
        if (!title || !desc) {
            alert("Title or Description cannot blank")
        }
        else {
          props.addtodo(title,desc);
          setDesc("");
          setTitle("");
        }
    }   
  return (
    <div className="container">
        <h3 >Add a Todo</h3>
      <form className="my7" onSubmit={submit} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-sm">
            Add Todo
        </button>
      </form>
    </div>
  );
};
