export default function formAdd() {
  const container = document.createElement("div");
  container.innerHTML = `<h3>New Task</h3>
        <form action="#" id="formAddTask">
            <label for="name">Task Name</label>
            <input type="text" id="name" name="name">
            <label for="date">Due Date</label>
            <input type="date" id="date" name="date">
            <label for="">Description</label>
            <textarea name="description" id="description" cols="30" rows="6"></textarea>
            <button type="submit">Submit</button>
        </form>`;

  return container;
}
