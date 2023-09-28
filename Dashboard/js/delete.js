// window.addEventListener('load', ()=> {
    console.log('inside delete fucntion')

const cardDelete = document.querySelectorAll('.delete-card');
console.log('card element')
console.log(cardDelete)
cardDelete.forEach( btn =>{


btn.addEventListener('click', (e) => {
    e.preventDefault()
    alert('deleting..')
 let parent = e.target.parentElement;
 parent.classList.add('fade-out')
 console.log(parent)
    parent.style.display = 'none'
    parent.remove;
});


})

