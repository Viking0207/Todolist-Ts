"use strict";
//Pilih element
const btnConfirm = document.querySelector(".todo-btn");
const inputList = document.querySelector(".todo-input");
const formTodo = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-List");
const btnDelete = document.querySelector(".todo-dltall");
//Mengatur Tombol Submit
const handleSubmit = (e) => {
    e.preventDefault();
    //Membuat objek baru
    const newTodo = {
        id: Date.now(),
        todo: inputList.value,
        completed: false
    };
    //Penyimpanan Todo ke local storage
    todos.push(newTodo);
    //Menyimpanan ke local storage
    saveTodos();
    //Menambahkan todo baru
    appendTodo(newTodo);
    //Reset Input
    inputList.value = "";
};
//Simpan todos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
//Todo array
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
//Menambahkan todos baru ke DOM untuk memulai
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(todo => appendTodo(todo));
});
//menambahkan fungsi Todo
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    checkB.checked = newTodo.completed;
    //Tambahkan checkbox EvLi
    checkB.addEventListener('change', () => {
        console.log("Checked");
        newTodo.completed = checkB.checked;
        //simpan todos
        saveTodos();
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
//menambahkan form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
//Hapus semua
const clearTodos = () => {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = "";
};
btnDelete.onclick = () => clearTodos();
