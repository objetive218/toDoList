export default function header(name){
    const head = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = name;
    head.appendChild(title);
    return head
}