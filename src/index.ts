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

	//Menambahkan todo baru
	appendTodo(newTodo);

	//Reset Input
	inputList.value = "";
};

// Tampilan Todo
interface Todo {
	id:number,
	todo:string,
	completed:boolean
}

//menambahkan fungsi Todo
const appendTodo = (newTodo: Todo) =>{
	const newLi = document.createElement('li');
	const checkB = document.createElement('input');
	checkB.type = "checkbox";
	//Tambahkan checkbox EvLi
	checkB.addEventListener('change', ()=>{
		console.log("Checked");
		newTodo.completed = checkB.checked;
	});
	newLi.append(newTodo.todo, checkB);
	todoList.prepend(newLi);
}

//menambahkan form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
