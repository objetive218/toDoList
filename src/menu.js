import listTask from "./listTask";

export function createLi(name, list) {
  let li = document.createElement("li");
  li.textContent = name;
  li.addEventListener("click", listTask(name));
  list.appendChild(li);
  return li;
}

export default function menu() {
  const div = document.createElement("div");
  const listNav = document.createElement("ul");
  const labelP = document.createElement("h3");
  labelP.textContent = "Projects";
  const listPorject = document.createElement("ul");
  listPorject.setAttribute("id", "listPorject");
  const btnAdd = document.createElement("button");
  btnAdd.textContent = "Add project";
  //asign the function to the btn to view form toggle

  createLi("All", listNav);
  createLi("Today", listNav);
  createLi("This week", listNav);

  div.appendChild(listNav);
  div.appendChild(labelP);
  div.appendChild(listPorject);
  div.appendChild(btnAdd);
  div.setAttribute("id", "navegation");
  return menu;
}
