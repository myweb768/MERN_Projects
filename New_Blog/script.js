const header = document.querySelector('.header_Section');
document.documentElement.style.setProperty(
    '--header-height', 
    header.offsetHeight + 'px'
);


let mainMenu = document.querySelector("#main_Menu");
let mainOpen = document.querySelector("#main-Open");

mainOpen.addEventListener("click", ()=>{
    mainMenu.classList.toggle("hidden")
});



let barOpen = document.querySelector("#sidebarOpen");
let icon = document.querySelector(".sidbar_Open i");
let sideBar = document.querySelector(".SideMenu");

barOpen.addEventListener("click", ()=>{
sideBar.classList.toggle("-translate-x-full");

  let svg = barOpen.querySelector("svg");
    if(svg.getAttribute("data-icon") === "circle-right") {
        svg.setAttribute("data-icon", "circle-left");
    } else {
        svg.setAttribute("data-icon", "circle-right");
    }

});

const UL = document.querySelector(".submenu ul");

let scrollTop = 0;
let isHover = false;
UL.addEventListener("mouseenter", ()=> isHover = true);
UL.addEventListener("mouseleave", ()=> isHover = false);

function autoScroll(){
     if(!isHover){
        scrollTop += 1;

        if(scrollTop >= UL.scrollHeight-UL.clientHeight){
            scrollTop = 0
        }

         UL.scrollTop = scrollTop
     }
     requestAnimationFrame(autoScroll)
}

autoScroll();



let searchBox =document.querySelector("#searchSection");
let  searchBoxButton= document.querySelector("#SearchBtn");

searchBoxButton.addEventListener("click", ()=>{
 searchBox.classList.toggle("hidden");
  })