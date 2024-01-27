export default function listTask(name) {
  let seccion = document.createElement("seccion");
  let title = document.createElement("h3");
  let div = document.createElement("div");
  let add = document.createElement("button");
  add.textContent = "add";
  title.setAttribute("id", "titleText");
  div.setAttribute("id", "taskContent");
  title.textContent = name ? name : "All";
  switch (title.textContent) {
    case "All":
      seccion.appendChild(title);
      seccion.appendChild(div);
      // create without button to create
      break;
    case "Today":
      seccion.appendChild(title);
      seccion.appendChild(div);
      // create without button to create
      break;
    case "This week":
      seccion.appendChild(title);
      seccion.appendChild(div);
      // create without button to create
      break;
    default:
      seccion.appendChild(title);
      seccion.appendChild(div);
      seccion.appendChild(add);
      //create with the name project
      break;
  }
  
  seccion.setAttribute("id", "secTask");

  return seccion;
}
