const container =document.querySelector('.container');
const  seat=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');



function updateselectedcount(){
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    const selectedseatscount = selectedseats.length;
    count.innerText = selectedseatscount;
}
container.addEventListener('click',(e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');}
    updateselectedcount();
})
