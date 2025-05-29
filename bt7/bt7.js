// let promise = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log("1")
//         resolve()
//     })
// },2000)
// promise.then(()=>{
//     console.log("2")
// })
let btn = document.getElementById("button")
let result = document.getElementById("ketqua")
btn.addEventListener("click", async () => {
  try {
    let respose = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let users = await respose.json()
    console.log(users)

    result.innerHTML = `Ten: ${users.name} <br/>
                             Email: ${users.email}<br/>
                            Phone: ${users.phone}<br/>
                            Address: City ${users.address.city} Street ${users.address.street} `
  } catch (error) {
    result.innerHTML = "loi khi lay du lieu"
    console.error(error)
  }
})
