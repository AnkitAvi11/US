var menuref=document.getElementById("ham");
menuref.addEventListener("click",function(){
    document.getElementById("ham-content").style.width="75%";
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("ham-content").style.width="0";
});