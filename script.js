const toDoField = document.querySelector('.to-do-field')
const toDoSend = document.querySelector('.to-do-send')
const toDoList = document.querySelector('.to-do-list')

toDoSend.addEventListener('click', function(e) {
    const li = document.createElement('li');
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Deletar'
    li.innerText = toDoField.value;
    li.appendChild(buttonClear)
    toDoList.appendChild(li);
    buttonClear.className = 'buttonClear'
    li.className = "list-li"
});

addEventListener('click', function(e){
   const el = e.target;
   if(el.classList.contains('buttonClear')){
       el.parentElement.remove()
   }
})
