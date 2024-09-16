const menuOpenBtn  = document.querySelector('.menu__icon');
const menu =  document.querySelector('.menu');
menuOpenBtn.addEventListener('click' , () =>{
    menu.classList.toggle('menu-open');
    blockBody()
})



function blockBody() {
    document.body.classList.toggle('locked');
}