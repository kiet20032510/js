let inputTitle = document.getElementById("title")
inputTitle.innerHTML ="Tieu de da thay doi"
let changeClass = document.querySelector(".desc")
changeClass.style.color = "red"
let inforLi = document.querySelectorAll("li")
console.log(inforLi)
console.log(inforLi[0])
console.log(inforLi[1])
console.log(inforLi[2])
console.log("do dai: " + inforLi.length)
let firstLi = document.querySelector("ul")
console.log("day la muc dau tien" +firstLi.firstChild)