import { listTask } from "./listTask";
import "./css/projects.css";
import printTask from "./addTask";
import close from "./images/close.svg";

export function createProject() {
  let create = document.createElement("form");
  create.innerHTML = `<input type="text" placeholder="Enter project name" id="newProject">
        `;
  //asign to button function projects()
  let btnc = document.createElement("button");
  let btnd = document.createElement("button");
  btnc.setAttribute("id", "createP");
  btnc.textContent = "Create";
  btnd.setAttribute("id", "cancelP");
  btnd.textContent = "Cancel";

  create.appendChild(btnc);
  create.appendChild(btnd);
  create.setAttribute("id", "boxCreate");
  create.setAttribute("class", "active");
  btnc.addEventListener("click", (e) => {
    e.preventDefault();
    projects();
    document.getElementById("boxCreate").classList.toggle("active");
  });
  btnd.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("boxCreate").classList.toggle("active");
  });
  return create;
}
let count = 0;
export function projects() {
  //const main = document.querySelector("#content");
  let listP = document.getElementById("listProject");
  let inputP = document.getElementById("newProject");
  if (inputP.value === "") {
    alert("Enter a name for the project");
  } else {
    let nameProject = inputP.value;
    //let taskRem = document.getElementById("secTask");
    let boxProject = document.createElement("div");
    let h3 = document.createElement("h3");
    let closeImgP = document.createElement("img");
    closeImgP.src = close;
    h3.textContent = nameProject;
    closeImgP.setAttribute("class", "active");
    boxProject.setAttribute("class", "boxProject");
    boxProject.setAttribute("id", `boxPro${count}`);
    h3.addEventListener("click", (e) => {
      e.preventDefault();
      listTask(nameProject);
      printTask(nameProject);
    });
    boxProject.addEventListener("mouseenter", () => {
      closeImgP.classList.toggle("active");
    });
    boxProject.addEventListener("mouseleave", () => {
      closeImgP.classList.toggle("active");
    });
    closeImgP.addEventListener("click", () => {
      document.getElementById("listProject").removeChild(boxProject);
    });
    boxProject.appendChild(h3);
    boxProject.appendChild(closeImgP);
    listP.appendChild(boxProject);
    listTask(nameProject);
    count += 1;
  }
}
// añadir evento boton eleminar, y evento mouseenter a la caja
