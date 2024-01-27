import formAdd from "./formAdd";
import { addTask } from "./addTask";
import listTask from "./listTask";

const main = document.querySelector("#content");
main.appendChild(formAdd());
let form = document.querySelector("#formAddTask");

main.appendChild(listTask());


form.addEventListener("submit", addTask);


function changeProject() {
  let taskRem = document.getElementById("secTask");
  main.removeChild(taskRem);
  main.appendChild(listTask("newName"));
}
