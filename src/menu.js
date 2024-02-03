import { btnAddTask, taskContent } from ".";
import printTask from "./addTask";
import { listTask } from "./listTask";

export function createLi(name, list) {
  let li = document.createElement("li");
  li.textContent = name;
  li.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("lista action");
    listTask(name);
    printTask(name);
  });
  list.appendChild(li);
}

export default function menu() {
  const div = document.createElement("nav");
  const listNav = document.createElement("ul");
  const labelP = document.createElement("h2");
  labelP.textContent = "Projects";
  const listPorject = document.createElement("ul");
  listPorject.setAttribute("id", "listProject");
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Add Project";
  btnAdd.setAttribute("id", "btnAdd");
  createLi("All Task", listNav);
  createLi("Today", listNav);
  createLi("This week", listNav);
  div.appendChild(listNav);
  div.appendChild(labelP);
  div.appendChild(listPorject);
  div.appendChild(btnAdd);
  div.setAttribute("id", "naveg");

  return div;
}
