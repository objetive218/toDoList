import "./css/listTask.css";
import printTask, { addTask } from "./addTask";
import formAdd from "./formAdd";
import { closeForm, formId } from ".";

// export default function listTask(name) {
//   const main = document.querySelector("#content");
//   let seccion = document.createElement("seccion");
//   let title = document.createElement("h3");
//   let div = document.createElement("div");
//   let add = document.createElement("button");
//   add.textContent = "add";
//   add.addEventListener("click", () => {
//     console.log(formId);
//     formId.classList.toggle("active");
//   });
//   add.setAttribute("id", "btnAddTask");
//   title.setAttribute("id", "titleText");
//   div.setAttribute("id", "taskContent");

//   title.textContent = name ? name : "All";

//   switch (title.textContent) {
//     case "All":
//       console.log("all");
//       seccion.appendChild(title);
//       seccion.appendChild(div);

//       //printTask("All");
//       // create without button to create
//       break;
//     case "Today":
//       console.log("today");
//       seccion.appendChild(title);
//       seccion.appendChild(div);

//       // create without button to create
//       break;
//     case "This week":
//       console.log("week");

//       seccion.appendChild(title);
//       seccion.appendChild(div);

//       // create without button to create
//       break;
//     default:
//       console.log("default");
//       seccion.appendChild(title);
//       seccion.appendChild(div);
//       seccion.appendChild(add);

//       //create with the name project
//       break;
//   }

//   seccion.setAttribute("id", "secTask");

//   return seccion;
// }
let seccion = document.createElement("seccion");
let title = document.createElement("h2");
let div = document.createElement("div");
let add = document.createElement("button");
add.setAttribute("id", "btnAddTask");
title.setAttribute("id", "titleText");
div.setAttribute("id", "taskContent");
seccion.setAttribute("id", "secTask");
export function createListTask() {
  add.textContent = "Add Task";
  add.addEventListener("click", () => {
    console.log(formId);
    formId.classList.toggle("active");
  });

  title.textContent = "All Task";
  seccion.appendChild(title);
  seccion.appendChild(div);
  seccion.appendChild(add);
  add.setAttribute("class", "active");

  return seccion;
}

export function listTask(name) {
  const main = document.getElementById("content");
  let secTask = document.getElementById("secTask");
  let taskContent = document.getElementById("taskContent");
  let title = document.getElementById("titleText");
  let btnAddList = document.getElementById("btnAddTask");

  title.textContent = name;
  console.log(name);

  switch (title.textContent) {
    case "All Task":
      console.log("all");
      btnAddList.classList.add("active");

      // create without button to create
      break;
    case "Today":
      console.log("today");
      btnAddList.classList.add("active");

      // create without button to create
      break;
    case "This week":
      console.log("week");
      btnAddList.classList.add("active");

      // create without button to create
      break;
    default:
      console.log("default");
      btnAddList.classList.remove("active");
      //create with the name project
      break;
  }
}
// falta estilos y agregar boton de borrar y modificar a las tareas
