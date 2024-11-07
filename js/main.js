// add active class to navbar
let header = document.querySelector("header");
window.onscroll = function(){
    if(this.scrollY >= 50){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
} 
let links = document.getElementById("links");

function control_menu(){
    links.classList.toggle("active");
}