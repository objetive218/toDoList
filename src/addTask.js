import { endOfWeek, format, isWithinInterval, startOfWeek } from "date-fns";
import task from "./task";
import { form, formId } from ".";
import close from "./images/close.svg";

export let arrTask = JSON.parse(localStorage.getItem("arrayTask"))
  ? JSON.parse(localStorage.getItem("arrayTask"))
  : [];

export function saveLocal() {
  localStorage.setItem("arrayTask", JSON.stringify(arrTask));
}

export default function printTask(proj) {
  let content = document.querySelector(`#taskContent`);
  content.innerHTML = "";
  let test = function (actualP, b) {
    switch (b) {
      case null:
        arrTask.map((e, i) => {
          let box = document.createElement("div");
          let name = document.createElement("h3");
          let descrip = document.createElement("p");
          let date = document.createElement("h5");
          let closeImg = document.createElement("img");
          let cir = document.createElement("span");
          cir.textContent = "";
          closeImg.src = close;
          name.textContent = e.title;
          descrip.textContent = e.description;
          descrip.textContent = e.description;
          date.textContent = e.date;
          box.appendChild(cir);
          box.appendChild(name);
          box.appendChild(descrip);
          box.appendChild(date);
          box.appendChild(closeImg);
          box.setAttribute("id", `box${i}`);
          box.setAttribute("class", `boxTask`);
          box.addEventListener("click", () => {
            name.classList.toggle("complete");
            descrip.classList.toggle("complete");
            cir.classList.toggle("completeSpan");
          });
          closeImg.addEventListener("click", () => {
            arrTask.splice(i, 1);
            saveLocal();
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
            let cir = document.createElement("span");
            cir.textContent = "";
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(cir);
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
              cir.classList.toggle("completeSpan");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              saveLocal();
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
            let cir = document.createElement("span");
            cir.textContent = "";
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(cir);
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
              cir.classList.toggle("completeSpan");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              saveLocal();
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
            let cir = document.createElement("span");
            cir.textContent = "";
            closeImg.src = close;
            name.textContent = e.title;
            descrip.textContent = e.description;
            descrip.textContent = e.description;
            date.textContent = e.date;
            box.appendChild(cir);
            box.appendChild(name);
            box.appendChild(descrip);
            box.appendChild(date);
            box.appendChild(closeImg);
            box.setAttribute("id", `box${i}`);
            box.setAttribute("class", `boxTask`);
            box.addEventListener("click", () => {
              name.classList.toggle("complete");
              descrip.classList.toggle("complete");
              cir.classList.toggle("completeSpan");
            });
            closeImg.addEventListener("click", () => {
              arrTask.splice(i, 1);
              saveLocal();
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

  switch (proj) {
    case "All Task":
      test(null, null);
      
      break;
    case "Today":
      test(format(new Date(), "MM/dd/yyyy"), "Today");
      
      break;
    case "This week":
      test(proj, "This week");
      
      break;
    default:
      test(proj, "Project");
      
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
  saveLocal();
  console.log(JSON.parse(localStorage.getItem("arrayTask")));
  console.log(format(new Date(), "MM/dd/yyyy"));
  console.log(arrTask);
  printTask(titleValue);
  form.reset();
  formId.classList.toggle("active");
  return arrTask;
}
