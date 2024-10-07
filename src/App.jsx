import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  let contentDiv;

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

  const handleAddTask = () => {
    const taskInput = document.querySelector(".task-input");

    const inputData = taskInput.value.trim();
    if (inputData) {
      createTaskElement(inputData);
      taskInput.value = "";
      saveTasksToLocalStorage();
    } else {
      alert("Please enter a task."); 
    }
  };

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
    const delete_button =
      event.target.parentElement.querySelector(".task-input");
    if (!delete_button.value.trim()) {
      alert("Please enter a task.");
    } else {
      event.target.parentElement.remove();
    }
    saveTasksToLocalStorage();
  };
  let oj = { 1: "abc", 2: "sd", 3: "poij", 4: "mlpi", 5: "qweik" };
  let arr = ["1", "2", "3", "4", "5"];
  let score = 0;
  function savetolocal() {
    score = 0;
    arr.forEach((value) => {
      const selected_value = document.querySelector(
        `input[name="${value}"]:checked`
      );

      if (selected_value && selected_value.value == oj[value]) {
        score += 1;
      }
    });
    console.log(score);

    localStorage.setItem("score", score);

    window.alert(score);
  }

  function Increment() {
    setValue(value + 1);
  }

  function Decrement() {
    setValue(value - 1);
  }
  function Reset() {
    setValue(0);
  }

  function retrievefromLocal() {
    const storedValue = localStorage.getItem("score");
    document.getElementById("output").innerText = storedValue
      ? storedValue
      : "No Value Stored";
    window.alert(storedValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="myform">
        <fieldset>
          <legend>enter the question 1</legend>
          <div>
            <input
              type="radio"
              id="inputBox1"
              placeholder="1 question"
              value="abc"
              name="1"
            />
            <label for="abc">abc</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox12"
              placeholder="1 question"
              value="abcd"
              name="1"
            />
            <label for="def">abcd</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox123"
              placeholder="1 question"
              value="abcde"
              name="1"
            />
            <label for="ghi">abcde</label>
          </div>
          <legend>enter the question 2</legend>
          <div>
            <input
              type="radio"
              id="inputBox21"
              placeholder="1 question"
              value="sde"
              name="2"
            />
            <label for="abc">sde</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox212"
              placeholder="1 question"
              value="sd"
              name="2"
            />
            <label for="def">sd</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox213"
              placeholder="1 question"
              value="sdj"
              name="2"
            />
            <label for="ghi">sdj</label>
          </div>
          <legend>enter the question 3</legend>
          <div>
            <input
              type="radio"
              id="inputBox31"
              placeholder="1 question"
              value="poi"
              name="3"
            />
            <label for="abc">poi</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox321"
              placeholder="1 question"
              value="poij"
              name="3"
            />
            <label for="def">poij</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox313"
              placeholder="1 question"
              value="poijk"
              name="3"
            />
            <label for="ghi">poijk</label>
          </div>
          <legend>enter the question 4</legend>
          <div>
            <input
              type="radio"
              id="inputBox41"
              placeholder="1 question"
              value="mlp"
              name="4"
            />
            <label for="abc">mlp</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox421"
              placeholder="1 question"
              value="mlpi"
              name="4"
            />
            <label for="def">mlpi</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox413"
              placeholder="1 question"
              value="mlpik"
              name="4"
            />
            <label for="ghi">mlpik</label>
          </div>
          <legend>enter the question 5</legend>
          <div>
            <input
              type="radio"
              id="inputBox5"
              placeholder="1 question"
              value="qwe"
              name="5"
            />
            <label for="abc">qwe</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox512"
              placeholder="1 question"
              value="qweik"
              name="5"
            />
            <label for="def">qweik</label>
          </div>
          <div>
            <input
              type="radio"
              id="inputBox531"
              placeholder="1 question"
              value="qweikm"
              name="5"
            />
            <label for="ghi">qweikm</label>
            <button className="editt" onClick={savetolocal}>
              Save
            </button>
            <button className="deletee" onClick={retrievefromLocal}>
              RetrivefromLocal retrive from local storage
            </button>
            <p id="output"></p>
          </div>
          <label htmlfor="enter the value"></label>

          <button type="button" className="editt" onClick={Increment}>
            Increment
          </button>
          <button type="button" className="editt" onClick={Decrement}>
            Decrement
          </button>
          <button type="button" className="editt" onClick={Reset}>
            Reset
          </button>
          <div>
            <p>You Pressed {value} times </p>
          </div>
        </fieldset>

        <div
          class="content"
          ref={(div) => {
            contentDiv = div;
          }}
        >
          <div class="todo-item">
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
  );
};

export default App;
