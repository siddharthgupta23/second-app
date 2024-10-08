import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
 

  let taskContainer 
   // =document.querySelector(".content > div");
  let contentDiv;
  let taskInput;

  // const createInputField = () => {
    
  //   const inputField = document.createElement("input");
  //   inputField.setAttribute("type", "text");
  //   inputField.setAttribute("placeholder", "Enter a task");
  //   inputField.classList.add("task-input");
  //   taskContainer.appendChild(inputField);
  //   console.log(taskContainer)
  //   console.log(inputField)
  // };
  let taskInputs = [];

const createInputField = () => {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "Enter a task");
  inputField.classList.add("task-input");
  contentDiv.appendChild(inputField)
  taskInputs.push(inputField); 
  console.log(taskContainer)
  console.log(inputField)
};

  const createTaskElement = (task) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
      <input type="text" class="task-input" value="${task}" />
      <input type="checkbox" />
      <button class="deletee">Delete button</button>
      <button class="editt">Edit button</button>
    `;

    const deleteButton = todoItem.querySelector(".deletee");
    const editButton = todoItem.querySelector(".editt");

    deleteButton.addEventListener("click", deletee);
    editButton.addEventListener("click", edit);

    contentDiv.appendChild(todoItem);
  };

  const saveTasksToLocalStorage = () => {
    const tasks = Array.from(contentDiv.querySelectorAll(".task-input")).map(
      (input) => input.value
    );
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  };

//   const handleAddTask = () => {
//     let taskInput = document.querySelector(".task-input");
    
//  if(!taskInput)
//     {
//       createInputField();
//       taskInput=document.querySelector(".task-input")
//     }
//     const inputData = taskInput.value.trim();

   
//     if (inputData) {
//       createTaskElement(inputData);
//       taskInput.value = "";
//       saveTasksToLocalStorage();
//     } else {
//       alert("Please enter a task."); 
//     }
//   };
// const handleAddTask = () => {
//   let taskInput = contentDiv.querySelector(".task-input");
  
//   if(!taskInput)
//   {
//     createInputField();
//     taskInput = contentDiv.querySelector(".task-input")
//   }
//   const inputData = taskInput.value.trim();

//   if (inputData) {
//     createTaskElement(inputData);
//     taskInput.value = "";
//     saveTasksToLocalStorage();
//   } else {
//     alert("Please enter a task."); 
//   }
// };
// const handleAddTask = () => {
//   let taskInput = taskInputs[taskInputs.length - 1]; 
  
//   if(!taskInput)
//   {
//     createInputField();
//     taskInput = taskInputs[taskInputs.length-1];
//   }
//   const inputData = taskInput.value.trim();

//   if (inputData) {
//     createTaskElement(inputData);
//     taskInput.value = "";
//     saveTasksToLocalStorage();
//   } else {
//     alert("Please enter a task."); 
//   }
// };
const handleAddTask = () => {
  if (taskInputs.length === 0) {
    createInputField();
    taskInput = taskInputs[taskInputs.length -1];
  } else {
    taskInput = taskInputs[taskInputs.length-1 ];
  }
  const inputData = taskInput.value.trim();

  if (inputData) {
    createTaskElement(inputData);
    taskInput.value = "";
    saveTasksToLocalStorage();
  } else {
    alert("Please enter a task."); 
  }
};

  // const edit = (event) => {
  //   event.stopPropagation();
  //   const edit_button = event.target.parentElement.querySelector(".task-input");
  //   const abcgf = prompt("enter the new value", edit_button.value);
  //   if (abcgf !== null) {
  //     edit_button.value = abcgf;
  //   }
  //   saveTasksToLocalStorage();
  // };
  // const deletee = (event) => {
  //   event.stopPropagation();
  //   const delete_button =
  //     event.target.parentElement.querySelector(".task-input");
  //   if (!delete_button.value.trim()) {
  //     alert("Please enter a task.");
  //   } else {
  //     event.target.parentElement.remove();
  //   }
   
  //   saveTasksToLocalStorage();
  //    if(!contentDiv.querySelector(".task-input"))
  //   {
  //     createInputField();

  //   }
  // };
  const edit = (event) => {
    event.stopPropagation();
    const edit_button = event.target.parentElement.querySelector(".task-input");
    const abcgf = prompt("enter the new value", edit_button.value);
    if (abcgf !== null) {
      edit_button.value = abcgf;
    }
    saveTasksToLocalStorage();
  };
  
  const deletee = (event) => {
    event.stopPropagation();
    const delete_button = event.target.parentElement.querySelector(".task-input");
    if (!delete_button.value.trim()) {
      alert("Please enter a task.");
    } else {
      event.target.parentElement.remove();
    }
    saveTasksToLocalStorage();
    if(!contentDiv.querySelector(".task-input"))
    {
      createInputField();
    }
  };

  const anbghr=()=>{
    contentDiv=document.querySelector(".content")
    taskContainer = document.querySelector(".content > div")
    if(!document.querySelector(".task-input"))
    {
      createInputField()
    }

  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();

  }
  setTimeout(anbghr,0)

  
  return (
    <div>
      <form onSubmit={handleSubmit} name="myform">
      <div
          class="content"
          ref={(div) => {
            contentDiv = div;
          }}
        >
          <div className="task-container"> 
            <label for="task" name="task"></label>
            <input
              type="text"
              name="task"
              
              placeholder="Enter the task you want to add"
              class="task-input"
            />
            <input type="checkbox" class="task" name="task" value="task" />

            <button type="button" className="deletee" onClick={deletee}>
              Delete button
            </button>
            <button type="button" class="editt" onClick={edit}>
              Edit button
            </button>
          </div>
        </div>
        
      </form>
      <button id="add-button" onClick={handleAddTask}>
        Add Button
      </button>

      {/* <button type="button" class="editt" onClick={savetolocal}>SavetoLocal</button>
      <button type="button" class="deletee" onClick={retrievefromLocal}>Retrivefromlocal</button> */}
    </div>
  )
};
export default App;