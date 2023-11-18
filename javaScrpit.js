// js for btn
let clic = 0;
let h5 = document.querySelector("h5");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    if(clic == 0){
        h5.innerHTML = "Friends";
        h5.style.color = "green";
        btn.innerHTML = "Remove";
        clic = 1;
    }
    else{
        h5.innerHTML = "Friend Removed";
        h5.style.color = "red";
        btn.innerHTML = "Add again";
        clic = 0;
    }
})

// #js for custome cursor

let karsar = document.querySelector("#cursur");
let body = document.querySelector("body");
body.addEventListener("mousemove", function(dtails){
karsar.style.top = dtails.y+"px";
karsar.style.left = dtails.x+"px";
})

// js for instagram dblclick like feature
let img = document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick",function(){
    i.style.transform = "translate(-50%,-50%) scale(1)";
    i.style.opacity = 0.8;
    setTimeout(() => {
        i.style.transform = "translate(-50%,-50%) scale(0)";
    i.style.opacity = 0;
    }, 2000);
})