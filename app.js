const container = document.querySelector('.task-container')
const addBtn = document.querySelector('.btn')
const input = document.querySelector('.input')

addBtn.addEventListener('click',function(){
    const p = input.value
    if(p != ""){
        container.innerHTML += `<div class="task">
    <p class="para">${p}</p><button class="complete"><i class="fa-solid fa-check"></i></button><button class="delete"><i class="fas fa-trash"></i></button>
</div>`;
    }
    trash()
    checkedTasks()
})


function trash(){
    const deleteBtn = document.querySelectorAll('.delete')
    console.log(deleteBtn)
    deleteBtn.forEach(function(deletebtn){
        deletebtn.addEventListener('click',function(){
            deletebtn.parentElement.remove()
        })
    })
}

function checkedTasks(){
    const completeBtn = document.querySelectorAll('.complete')
    completeBtn.forEach(function(completebtn){
        completebtn.addEventListener('click',function(){
            const el = completebtn.parentElement
            el.classList.toggle('active')
        })
    })
}