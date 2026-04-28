let menu = document.getElementById("mainMenu");
let menuBtn = document.getElementById("navBtn");
if(window.innerWidth <= 830){
menu.style.display = "none";
}
menuBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
if(menu.style.display ==="none"){
menu.style.display = "block";
}
else{
menu.style.display = "none";
}
});


window.addEventListener("click", ()=>{
    if(window.innerWidth <= 830){
menu.style.display = "none";
    }
})