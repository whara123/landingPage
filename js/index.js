const subBtn = document.querySelector(".btn-sub");
const modal =document.querySelector(".modal"); 
const modalClose = document.querySelector(".btn-modal");
const dimd = document.querySelector(".dimd");
const inputEmail = document.querySelector(".inp-email");
const bodyScroll = document.querySelector(".body");


const reg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;


//미디어쿼리일때
const headMenuOpen = document.querySelector(".btn-head-menu-media");
const navMenu = document.querySelector(".list-nav-menu");
const navMenuClose = document.querySelector(".btn-bar-close");

const slider = document.querySelector(".wrap-img-list.media")

const moveSlider = slider.animate([

    {transform: 'translateX(0px)'},
    {transform: 'translateX(0px)'},
    {transform: `translateX(${-325}px)`},
    {transform: `translateX(${-325}px)`},

    ],{
        duration: 2000,
    });

moveSlider.onfinish = function(){
    let firstItem = slider.removeChild(slider.firstElementChild);

    slider.appendChild(firstItem);

    moveSlider.play();
}

headMenuOpen.addEventListener("click",()=>{
    navMenu.classList.add("on");
})

navMenuClose.addEventListener("click",()=>{
    navMenu.classList.remove("on");
})

//------------------------------- 

subBtn.addEventListener("click",()=>{
    let eMail = inputEmail.value;
    if(eMail.match(reg)!==null){
        dimd.classList.add("modal-on");
        modal.classList.add("modal-on");
        bodyScroll.classList.add("modal-on");
    }else{
        window.alert("이메일을 입력하세요");
    }
});

modalClose.addEventListener("click",()=>{
    modal.classList.remove("modal-on");
    dimd.classList.remove("modal-on");
    bodyScroll.classList.remove("modal-on");
})

