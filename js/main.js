let hover=document.querySelector("div.hover-me")

hover.addEventListener("mousemove",function(e){
    console.log(e.x-e.target.offsetLeft,e.y-e.target.offsetTop);
    e.target.style.borderRadius=e.offsetY+"px";
    e.target.parentElement.style.backgroundColor=`rgb(${e.x-e.target.offsetLeft},20,${e.y-e.target.offsetTop})`,
    e.target.parentElement.style.transition="0ms"
})

hover.addEventListener("mouseleave",function(e){
    e.target.style.borderRadius=e.offsetY+"px";
    e.target.parentElement.style.backgroundColor="rgb(24, 24, 24)",
    e.target.parentElement.style.transition="500ms"
})
