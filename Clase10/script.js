const navButton = document.querySelector('button[aria-expanded]');
// del evento quiero el target, el target es el click 
function toggleNav({target}){
    // el tipo de dato es string pero necesito un bool 
    const expandir = target.getAttribute('aria-expanded') === "true" || false;
    navButton.setAttribute('aria-expanded',!expandir)
}
navButton.addEventListener('click',toggleNav);
