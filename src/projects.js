import { listTask } from "./listTask";
import "./css/projects.css";
import printTask, { arrTask, saveLocal } from "./addTask";
import close from "./images/close.svg";

export let arrProjects = JSON.parse(localStorage.getItem("arrayProjects"))
  ? JSON.parse(localStorage.getItem("arrayProjects"))
  : [];
export function saveLocalProjects() {
  localStorage.setItem("arrayProjects", JSON.stringify(arrProjects));
}

export function createProject() {
  let create = document.createElement("form");
  create.innerHTML = `<input type="text" placeholder="Enter project name" id="newProject" required>
        `;
  //asign to button function projects()
  let btnc = document.createElement("button");
  let btnd = document.createElement("button");
  let inputP = document.getElementById("newProject");
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
    addProject();
    projects();
    document.getElementById("boxCreate").classList.toggle("active");
  });
  btnd.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("boxCreate").classList.toggle("active");
  });
  return create;
}

export function projects(validation) {
  let listP = document.getElementById("listProject");
  let inputP = document.getElementById("newProject");
  listP.innerHTML = "";
  console.log(inputP.value);

  arrProjects.map((element, index) => {
    let boxProject = document.createElement("div");
    let h3 = document.createElement("h3");
    let closeImgP = document.createElement("img");
    closeImgP.src = close;
    h3.textContent = element;
    closeImgP.setAttribute("class", "active");
    boxProject.setAttribute("class", "boxProject");
    boxProject.setAttribute("id", `boxPro${index}`);
    h3.addEventListener("click", (e) => {
      e.preventDefault();
      listTask(element);
      printTask(element);
    });
    boxProject.addEventListener("mouseenter", () => {
      closeImgP.classList.toggle("active");
    });
    boxProject.addEventListener("mouseleave", () => {
      closeImgP.classList.toggle("active");
    });
    closeImgP.addEventListener("click", () => {
      for (const key of arrProjects) {
        arrTask.map((e, i) => {
          if (e.project === key) {
            arrTask.splice(i, 1);
          }
        });
      }
      saveLocal();
      arrProjects.splice(index, 1);
      saveLocalProjects();
      boxProject.classList.add("active");
    });
    boxProject.appendChild(h3);
    boxProject.appendChild(closeImgP);
    listP.appendChild(boxProject);
  });
}
export function addProject() {
  let listP = document.getElementById("listProject");
  let inputP = document.getElementById("newProject");
  let nameProject = inputP.value;
  if (inputP.value === "") {
    alert("project need a name");
  } else {
    arrProjects.push(nameProject);
  }
  saveLocalProjects();
}
