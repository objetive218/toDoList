import "./css/index.css";
import formAdd from "./formAdd";
import { addTask } from "./addTask";
import { createListTask } from "./listTask";
import menu from "./menu";
import header from "./header";
import { createProject } from "./projects";
import checkProject from "./checkProject";

const main = document.querySelector("#content");
main.appendChild(formAdd());
main.appendChild(header("To Do List"));

export let form = document.querySelector("#formAddTask");

form.addEventListener("submit", addTask);
// form toggle display
export const formId = document.getElementById("containerForm");
const closeForm = document.getElementById("closeForm");
closeForm.addEventListener("click", () => {
  formId.classList.toggle("active");
});


main.appendChild(createListTask());
main.appendChild(menu());
let navegation = document.getElementById("naveg");
navegation.appendChild(createProject());
let boxId = document.getElementById("boxCreate");
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  boxId.classList.toggle("active");
  boxId.reset();
});
checkProject();

