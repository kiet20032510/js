let inputClick = document.querySelectorAll("input")
let result = document.querySelector("p")
inputClick.forEach (function(input){
    input.addEventListener("click" , function(){
        if (input.value ==="Ha Noi"){
            result.innerHTML = "chinh xac"
            result.style.color = "green"
        }
        else {
            result.innerHTML = "sai roi"
            result.style.color = "red"
        }
    })
})

