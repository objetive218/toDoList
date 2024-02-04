import printTask from "./addTask";
import { listTask } from "./listTask";
import { projects } from "./projects";

export default function checkProject() {
  if (
    JSON.parse(localStorage.getItem("arrayTask")) &&
    JSON.parse(localStorage.getItem("arrayProjects"))
  ) {
    //idMain.appendChild(createListTask());
    //listTask("default");
    printTask("All Task");
    projects();
  } else {
    //idMain.appendChild(createListTask());
    ("");
  }
}

// export function createProject() {
//   let create = document.createElement("form");
//   create.innerHTML = `<input type="text" placeholder="Enter project name" id="newProject">
//         `;
//   //asign to button function projects()
//   let btnc = document.createElement("button");
//   let btnd = document.createElement("button");
//   btnc.setAttribute("id", "createP");
//   btnc.textContent = "Create";
//   btnd.setAttribute("id", "cancelP");
//   btnd.textContent = "Cancel";

//   create.appendChild(btnc);
//   create.appendChild(btnd);
//   create.setAttribute("id", "boxCreate");
//   create.setAttribute("class", "active");
//   btnc.addEventListener("click", (e) => {
//     e.preventDefault();
//     projects();
//     document.getElementById("boxCreate").classList.toggle("active");
//   });
//   btnd.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.getElementById("boxCreate").classList.toggle("active");
//   });
//   return create;
// }
