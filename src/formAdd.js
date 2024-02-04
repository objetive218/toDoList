import "./css/formAdd.css"
export default function formAdd() {
  const container = document.createElement("div");
  container.innerHTML = `<h3>New Task</h3>
            <button id="closeForm">X</button>
        <form action="#" id="formAddTask">
            <label for="name">Task Name</label>
            <input placeholder="Task Name" type="text" id="name" name="name">
            <label for="date">Due Date</label>
            <input type="date" id="date" name="date">
            <label for="">Description</label>
            <textarea placeholder="Description of your Project" name="description" id="description" cols="30" rows="6"></textarea>
            <button type="submit">Submit</button>
        </form>`;
  container.setAttribute("id", "containerForm")
  container.setAttribute("class", "active");
  return container;
}
