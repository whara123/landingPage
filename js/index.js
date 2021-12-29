const subBtn = document.querySelector(".btn-sub");
const modal =document.querySelector(".modal"); 
const modalClose = document.querySelector(".btn-modal");
const dimd = document.querySelector(".dimd");
const inputEmail = document.querySelector(".inp-email");
const bodyScroll = document.querySelector(".body");


const reg = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;


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