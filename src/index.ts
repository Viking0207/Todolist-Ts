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
	const newTodo ={
		id: Date.now(),
		todo: inputList.value,
		completed: false
	};
	//Penyimpanan Todo ke local storage

	//Menambahkan todo baru
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

	//Reset Input
	inputList.value = "";
};

//menambahkan form event listener
formTodo.addEventListener('submit', e => handleSubmit(e));
