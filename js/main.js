const row = document.querySelector('.contenedor-carrousel');
const movies = document.querySelector('.movie');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

//------ Event Listener for rightArrow //

rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
})

//------ Event Listener for leftArrow //

leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;
})