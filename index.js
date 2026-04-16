let deleteButton = document.querySelector('.delete-button');
let editButton = document.querySelector('.edit-button');
let title = document.querySelector('.task-title');
let status = document.querySelector('.status');
let checkBox = document.querySelector('.checkbox');
deleteButton.addEventListener("click" , () => {
    alert('Delete button clicked');
});
editButton.addEventListener("click" , () => {
    alert('Edit button clicked');
});
checkBox.addEventListener('click', () => {
    if (status.style.color ===  'green' &&
    status.innerText === 'Done') {
        status.style.color =  'orange';
    status.innerText = 'In Progress';
    title.innerHTML = 'Read a Novel'; 

    } else {
    status.style.color =  'green';
    status.innerText = 'Done';
    title.innerHTML = '<strike>Read a Novel</strike>';
    }
});