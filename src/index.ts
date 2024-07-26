//Pilih element
const btnConfirm = document.querySelector(".todo-btn") as HTMLButtonElement;
const inputList = document.querySelector(".todo-input") as HTMLInputElement;
const formTodo = document.querySelector(".todo-form") as HTMLFormElement;
const todoList = document.querySelector(".todo-List") as HTMLLIElement;
const btnDelete = document.querySelector(".todo-dltall") as HTMLButtonElement;

//Mengatur Tombol Submit
const handleSubmit = (e: Event) =>{
  e.preventDefault();
	//Membuat objek baru
	const newTodo: Todo ={
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
const saveTodos = ()=>{
	localStorage.setItem('todos', JSON.stringify(todos));
}

// Tampilan Todo
interface Todo {
	id:number,
	todo:string,
	completed:boolean
}

//Todo array
 const todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
 console.log(todos);
//Menambahkan todos baru ke DOM untuk memulai
window.addEventListener('DOMContentLoaded', ()=>{
	todos.forEach(todo => appendTodo(todo));
})

//menambahkan fungsi Todo
const appendTodo = (newTodo: Todo) =>{
	const newLi = document.createElement('li');
	const checkB = document.createElement('input');
	checkB.type = "checkbox";
	checkB.checked = newTodo.completed;
	//Tambahkan checkbox EvLi
	checkB.addEventListener('change', ()=>{
		console.log("Checked");
		newTodo.completed = checkB.checked;

		//simpan todos
		saveTodos();
	});
	newLi.append(newTodo.todo, checkB);
	todoList.prepend(newLi);
}

//menambahkan form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
