//Selectors
const toDoInput = document.getElementById('todo-input');
const toDoButton = document.getElementById('todo-btn');
const toDoList = document.querySelector('.todo-list');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');

const searchResult = [];






//Functions

//adding todo's

const addToDo = (event) => {
event.preventDefault();

//Creating separate div with li's
const toDoDivEl = document.createElement('div');
toDoDivEl.classList.add('todo-div');
toDoList.appendChild(toDoDivEl);

//Completed button
const completedBtn = document.createElement('button');
completedBtn.innerHTML = '<i class="fas fa-check-square"></i>'
completedBtn.classList.add('completed-btn');
toDoDivEl.appendChild(completedBtn);

const createLi = document.createElement('li');
createLi.classList.add('todo');
toDoDivEl.appendChild(createLi);



createLi.innerText = toDoInput.value;
toDoInput.value = '';
disabledButton();
}

//disable button
const disabledButton = () => {
   
    if (toDoInput.value.trim() === '') {
toDoButton.disabled = true;

    }
    else toDoButton.disabled = false;
    
}


//checked

const checked = (e) => {
const item = e.target;

if(item.classList[0] === 'completed-btn') {
const completed = item.parentElement;
completed.classList.toggle('completed');

}
}

//clear button

const clearBtnRvl = () => {
    if(searchInput.value.length > 0) {
    clearBtn.style.visibility = 'visible';
    errorMsg.style.display = 'none';
}
else {
    clearBtn.style.visibility = 'hidden';
}

 
};

const error = document.createElement('div');
toDoList.appendChild(error);
const errorMsg = document.createElement('li');
errorMsg.setAttribute('id', 'error');
error.appendChild(errorMsg);
errorMsg.innerText = 'Items not found';
errorMsg.style.display = 'none';

const clearInput = () => {
searchInput.value = '';
clearBtn.style.visibility = 'hidden';
errorMsg.style.display = 'none';
displayTodos();

if(searchResult.length === 0) {
    errorMsg.style.display = 'none';
}
else {
    displayTodos;
}
};

//display on search

const displayTodos = () => {
    const searchString = searchInput.value.toLowerCase();
    const toDo = document.querySelectorAll('.todo-div');
    let itemsAvailable = false;
    toDo.forEach(todo => {
        if(todo.innerText.toLowerCase().includes(searchString)) {
            todo.style.display = 'flex';
            itemsAvailable = true;
            return searchResult.push(todo);
            
        }
        else {
            todo.style.display = 'none'; 
    
    } });
    
    if(itemsAvailable) {
    errorMsg.style.display = 'none';
    }
    else {
    errorMsg.style.display = 'inline'
    }
};



//Event Listeners
toDoButton.addEventListener('click', addToDo);
toDoInput.addEventListener('keyup', disabledButton);
toDoList.addEventListener('click', checked);
searchInput.addEventListener('keyup', clearBtnRvl);
clearBtn.addEventListener('click', clearInput);
searchInput.addEventListener('keyup', displayTodos);
