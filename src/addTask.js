import task from "./task";

let arrTask = [];

export default function printTask(proj) {
  let content = document.querySelector(`#taskContent`);
  content.innerHTML = "";
  let test = function (actualP) {
    arrTask
      .filter((e) => e.project === actualP)
      .map((e, i) => {
        let box = document.createElement("div");
        let name = document.createElement("h6");
        let descrip = document.createElement("p");
        let date = document.createElement("h6");
        name.textContent = e.title;
        descrip.textContent = e.description;
        descrip.textContent = e.description;
        date.textContent = e.date;
        box.appendChild(name);
        box.appendChild(descrip);
        box.appendChild(date);
        box.setAttribute("id", `box${i}`);

        content.appendChild(box);
      });
  };
  // agregar una validacion para que el map solo imprima segun el proyecto
  switch (proj) {
    case "All":
      arrTask.filter((e) =>e.project === proj)
      // view all task
      break;
    case "Today":
     test(proj)
      // view only today task
      break;
    case "This week":
   
      // only view all week task
      break;
    default:
     
      //map with the project name
      break;
  }
 
  arrTask.map((e, i) => {
    let box = document.createElement("div");
    let name = document.createElement("h6");
    let descrip = document.createElement("p");
    let date = document.createElement("h6");
    name.textContent = e.title;
    descrip.textContent = e.description;
    descrip.textContent = e.description;
    date.textContent = e.date;
    box.appendChild(name);
    box.appendChild(descrip);
    box.appendChild(date);
    box.setAttribute("id", `box${i}`);

    content.appendChild(box);
  });
}

export function addTask(e) {
  e.preventDefault();
  let contentTitle = document.getElementById("titleText");
  let val = contentTitle.textContent;
  console.log(e);
  let name = document.getElementById("name");
  let date = document.getElementById("date");
  let description = document.getElementById("description");
  let newTask = task(name.value, description.value, date.value, val);
  arrTask.push(newTask);
  console.log(arrTask);
  printTask(val);
  return arrTask;
}
