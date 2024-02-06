import printTask from "./addTask";
import { projects } from "./projects";

export default function checkProject() {
  if (
    JSON.parse(localStorage.getItem("arrayTask")) &&
    JSON.parse(localStorage.getItem("arrayProjects"))
  ) {
    printTask("All Task");
    projects(true);
  } else {
    ("");
  }
}

