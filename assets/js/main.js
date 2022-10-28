const addInput = document.getElementById("add-input");
const tasksList = document.getElementById("order-tasks");
const btnEl = document.getElementById("add-btn")
const formEl = document.getElementById("form")
let localInfo = JSON.parse(localStorage.getItem("tasks")) 
let infoArr =  localInfo || [] 
formEl.addEventListener('submit', (e) => {
    e.preventDefault()  
    tasksList.classList.add("list-order")

    let infoTask = {
    id: infoArr.length,
title: addInput.value,
isCompleted: false
}
infoArr.push(infoTask)
window.localStorage.setItem("tasks", JSON.stringify(infoArr))

const boxTask = document.createElement("div")
const liEl = document.createElement("li")
const checkBoxInput = document.createElement("input")
checkBoxInput.setAttribute("type", "checkbox")
tasksList.appendChild(boxTask)
boxTask.appendChild(liEl)
const choiceElements = document.createElement("div")
boxTask.appendChild(choiceElements)
choiceElements.appendChild(checkBoxInput)
const btnDelete = document.createElement("button")
choiceElements.appendChild(btnDelete)
boxTask.className = "added-box-task"
btnDelete.className = "btn-delete"
choiceElements.className = "box-choice"
btnDelete.innerHTML = "Delete"

infoArr.forEach(n => {

btnDelete.setAttribute("data-btn-delete", n.id)
liEl.innerHTML = n.title
})
})