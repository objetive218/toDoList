import listTask from "./listTask";

export function createProject() {
  let create = document.createElement("div");
  create.innerHTML = `<input type="text" placeholder="Enter project name" id="newProject">
        <buttton id="createP">Create</buttton>
        <buttton id="cancelP">Cancel</buttton>`;
        //asign to button function projects()
  create.setAttribute("id", "boxCreate");
  return create;
}

export function projects() {
  let btnCreate = document.getElementById("createP");
  let btnCancel = document.getElementById("cancelP");
  let inputP = document.getElementById("newProject");
  if ((inputP.value = "")) {
    alert("Enter a name for the project");
  } else {
    let nameProject = inputP.value;
    let taskRem = document.getElementById("secTask");
    main.removeChild(taskRem);
    main.appendChild(listTask(nameProject));
  }
  return;
}

// create ul with de function to call listTask and checkProject
