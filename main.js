let buttonId = document.querySelector("#button-id"); 
let body = document.querySelector("body");


buttonId.addEventListener("click", function(){

    if(body.classList.contains("bg-yellow")){
        body.classList.remove("bg-yellow");
    }else{
        body.classList.add("bg-yellow");
    }
})

buttonId.addEventListener("mouseover", function(){
    body.classList.add("bg-red")
})

buttonId.addEventListener("mouseout", function(){
    body.classList.remove("bg-red")
})


let elementInput = document.querySelector("#password"); 

elementInput.addEventListener("keydown", function(){

   if(elementInput.value.length <=8){
      elementInput.classList.add("bg-red");
   }else{
    elementInput.classList.remove("bg-red");
    elementInput.classList.add("bg-yellow");
   }
})

let arr = ["one", "two", "three"];
let html = ""; 

arr.forEach(function(el){

    html += `<button class='button-tag'>${el}</button>`;

})

let buttonsContainer = document.querySelector(".buttons"); 

console.log(html);

buttonsContainer.innerHTML = html;

let buttons = document.querySelectorAll(".button-tag"); 
 
let num = 1;

buttons.forEach(function(button){

    button.addEventListener("click", function(){


        console.log(button.value);
        alert(`I am a button ${num}`)

        num++
    })
})













