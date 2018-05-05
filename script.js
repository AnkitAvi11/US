"use restrict";
document.getElementById("drop").addEventListener("click",function(){
    document.getElementById("account").classList.toggle("foraccount");
    document.getElementsByClassName("fa-sort-down")[0].classList.toggle("rotate");
});

document.getElementById("menu").addEventListener("click",function(){
    document.getElementsByClassName("nav-content")[0].classList.add("fornav");
    document.getElementById("body-over").classList.add("forbody");
});

document.getElementById("body-over").addEventListener("click",function(){
    document.getElementsByClassName("nav-content")[0].classList.remove("fornav");
    document.getElementById("body-over").classList.remove("forbody");
});