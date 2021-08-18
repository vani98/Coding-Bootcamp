const iconoMenu = document.querySelector('.menuHam')
console.log(iconoMenu)
const menu = document.querySelector('.listas')


iconoMenu.addEventListener('click',() =>{
    menu.classList.toggle('activado');
});
