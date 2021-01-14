'use strict';

let todoList = document.querySelector('.todolist__items');
let items = todoList.children;
let emptyListMessage = document.querySelector('.empty_tasks');
let newItemForm = document.querySelector('.add__form');
let newItemTitle = newItemForm.querySelector('.add__task');
let taskTemplate = document.querySelector('#text__template').content;

console.log(taskTemplate);
let newItemTemplate = taskTemplate.querySelector('.todolist__item');
console.log(newItemTemplate);

let addCheckHandler = function(item) {
    let checkbox = item.querySelector('.todolist__input');
    checkbox.addEventListener('change', function() {
        console.log(items);
        item.remove();
        toggleEmptyListMessage();
    });
};
for (let i=0; i < items.length; i++) {
    addCheckHandler(items[i]);
}
newItemForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    let taskText = newItemTitle.value;
    let task = newItemTemplate.cloneNode(true);
    let taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;  
    addCheckHandler(task);
    todoList.appendChild(task);
    toggleEmptyListMessage();
    newItemTitle.value = '';    
});
let toggleEmptyListMessage = function() {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    } else {
        emptyListMessage.classList.add('hidden');
    }
};
