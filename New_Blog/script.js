const header = document.querySelector('.header_Section');
document.documentElement.style.setProperty(
    '--header-height', 
    header.offsetHeight + 'px'
);




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