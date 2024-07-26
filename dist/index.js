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
    //Menambahkan todo baru
    appendTodo(newTodo);
    //Reset Input
    inputList.value = "";
};
//menambahkan fungsi Todo
const appendTodo = (newTodo) => {
    const newLi = document.createElement('li');
    const checkB = document.createElement('input');
    checkB.type = "checkbox";
    //Tambahkan checkbox EvLi
    checkB.addEventListener('change', () => {
        console.log("Checked");
        newTodo.completed = checkB.checked;
    });
    newLi.append(newTodo.todo, checkB);
    todoList.prepend(newLi);
};
//menambahkan form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
