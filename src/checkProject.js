export default function checkProject(main) {
  if (JSON.parse(localStorage.getItem("arrayTask"))) {
      listTask("default");
      printTask("All Task");
    } else {
      
    }
}
