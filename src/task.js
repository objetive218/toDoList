// title, description, dueDate and priority. You might also want to include notes or even a checklist.
export default function task(title, description, date, project) {
  return {
    title: title,
    description: description,
    date: date,
    project: project
  };
}
