'use strict';

console.log('>> Ready :)');

// Hacer enunciado

const taskList = document.querySelector(".js_taskList");

const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
        id: 4,
    },
];

/*Pasos:
cuando la tarea sea completa, la frase sale tachada.
*/

// const completed = document.querySelector("completed");

// La condición if no está funcionando.

for (const task of tasks) {
    console.log(task.name);
    if (task.completed === false) {
        remove.classList(completed);    
    } else {
        add.classList(completed);
    }
    taskList.innerHTML += `<li class="list">
                    <input type="checkbox">
                    <p>${task.name}</p>
                </li>`;
   
            
};




