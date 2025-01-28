let box = document.querySelector(".box")
// box.innerHTML = "Hello Aidai";
let content = document.querySelector(".content")

let number = document.querySelector(".number")
let bbb = document.querySelector(".bbb")
let jjj = document.querySelector(".jjj")
let mmm = document.querySelector(".mmm")



let timer = 15;

function getTimer(){
    timer--;
    number.innerHTML = timer;

    if(timer == 0){
        jjj.style.backgroundColor = jjj.style.backgroundColor == "black" ? "red": "black"
       timer = 16;
   
     

     mmm.style.backgroundColor = mmm.style.backgroundColor == "green" ? "black": "green" 
    }
    if(mmm.style.backgroundColor = mmm.style.backgroundColor == "green"
    ){
        ttt.style.color = "green" 
    }
     
}
setInterval(getTimer, 200)
