'use strict';



/* */
const GITHUB_USER = "LauM25";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const listCheckbox = document.querySelector(".js-list-checkbox");
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));
const taskList = document.querySelector(".js-list");

fetch("https://dev.adalab.es/api/todo")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const tasks = data.results;
        for (const task of tasks) {
            /*  if (task.completed === true) {
                  taskList.innerHTML += `<li class="list completed js-list-checkbox">
                      <input type="checkbox">
                      <p>${task.name}</p>
                  </li>`;
  
              } else if (task.completed === false) {
                  taskList.innerHTML += `<li class="list js-list-checkbox">
                      <input type="checkbox">
                      <p>${task.name}</p>
                  </li>`;
                  */
            if (tasksLocalStorage !== null) {
                taskList.innerHTML = `<li class="list completed js-list-checkbox">
                    <input type="checkbox">
                    <p>${task.name}</p>
                </li>`;

            } else {
                fetch(SERVER_URL)
                    .then((response) => response.json())
                    .then((data) => {

                    })
                    .catch((error) => {
                        console.error(error);
                    });

            }
        }
    });



