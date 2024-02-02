import { endOfWeek, format, isWithinInterval, startOfWeek } from "date-fns";
import task from "./task";
import { btnAddTask, form, formId } from ".";
import close from "./images/close.svg";
import dot_vertical from "./images/dot_vertical.svg";
import edit from "./images/edit.svg";

let arrTask = [];

export default function printTask(proj) {
  let content = document.querySelector(`#taskContent`);
  content.innerHTML = "";
  let test = function (actualP, b) {
    // agregar segundo parametro a la funcion que se remplace con el projecto
    switch (b) {
      case null:
        arrTask.map((e, i) => {
          let box = document.createElement("div");
          let name = document.createElement("h3");
          let descrip = document.createElement("p");
          let date = document.createElement("h5");
          let closeImg = document.createElement("img");
          closeImg.src = close;
          name.textContent = e.title;
          descrip.textContent = e.description;
          descrip.textContent = e.description;
          date.textContent = e.date;
          box.appendChild(name);
          box.appendChild(descrip);
          box.appendChild(date);
          box.appendChild(closeImg);
          box.setAttribute("id", `box${i}`);
          box.setAttribute("class", `boxTask`);
          box.addEventListener("click", () => {
            name.classList.toggle("complete");
            descrip.classList.toggle("complete");
          });
          closeImg.addEventListener("click", () => {
            arrTask.splice(i, 1);
            document.getElementById(`box${i}`).classList.add("active");
          });
          content.appendChild(box);
        });
        break;
      case "Today":
        arrTask
          .filter((e) => e.date === actualP)
          .map((e, i) => {
            let box = document.createElement("div");
            let name = document.createElement("h3");
            let descrip = document.createElement("p");
            let date = document.createElement("h5");
            let closeImg = document.createElement("img");
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              document.getElementById(`box${i}`).classList.add("active");
            });
            content.appendChild(box);
          });
        break;
      case "This week":
        let firtsDay = startOfWeek(format(new Date(), "MM/dd/yyyy"));
        let lastDay = endOfWeek(format(new Date(), "MM/dd/yyyy"));
        arrTask.map((e, i) => {
          if (
            isWithinInterval(e.date, {
              start: firtsDay,
              end: lastDay,
            })
          ) {
            let box = document.createElement("div");
            let name = document.createElement("h3");
            let descrip = document.createElement("p");
            let date = document.createElement("h5");
            let closeImg = document.createElement("img");
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              document.getElementById(`box${i}`).classList.add("active");
            });
            content.appendChild(box);
          } else {
            ("");
          }
        });
        break;
      case "Project":
        console.log("project");
        arrTask
          .filter((e) => e.project === actualP)
          .map((e, i) => {
            let box = document.createElement("div");
            let name = document.createElement("h3");
            let descrip = document.createElement("p");
            let date = document.createElement("h5");
            let closeImg = document.createElement("img");
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              document.getElementById(`box${i}`).classList.add("active");
            });
            content.appendChild(box);
          });
        break;
      default:
        console.log("error");
        console.log(b);
        break;
    }
  };

  // agregar una validacion para que el map solo imprima segun el proyecto
  switch (proj) {
    case "All":
      test(null, null);
      // view all task
      break;
    case "Today":
      test(format(new Date(), "MM/dd/yyyy"), "Today");
      // view only today task
      break;
    case "This week":
      test(proj, "This week");
      // only view all week task
      break;
    default:
      test(proj, "Project");
      //map with the project name
      break;
  }
}

export function addTask(e) {
  e.preventDefault();
  let contentTitle = document.getElementById("titleText");
  let titleValue = contentTitle.textContent;
  let name = document.getElementById("name");
  let date = document.getElementById("date");
  let description = document.getElementById("description");
  let val = String(date.value.split("-"));
  let newTask = task(
    name.value,
    description.value,
    format(new Date(val), "MM/dd/yyyy"),
    titleValue
  );
  arrTask.push(newTask);
  console.log(format(new Date(), "MM/dd/yyyy"));
  console.log(arrTask);
  printTask(titleValue);
  form.reset();
  formId.classList.toggle("active");
  return arrTask;
}
