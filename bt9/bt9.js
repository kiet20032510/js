let table = document.querySelector("table.table.table-dark.table-striped tbody")
async function getAPI() {
    try {
        const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt`)
        const data = await response.json()
        console.log(data)
        let content = ""
        data.forEach(element => {
            content += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.country}</td>
                    <td><img style="width: 50px; height: 50px" src="${element.avatar}" /></td>
                    <td><button class="btn_update" onclick = "getUserById(${element.id})">Update this</button></td>
                    <td><button class="btn_delete" onclick="deleteUser(${element.id})">Delete this</button></td>
                </tr>`
        })
        table.innerHTML = content
    } catch (error) {
        console.error(error)
    }
}

getAPI()
document.getElementById("submit").onclick = async function (e) {
    e.preventDefault()
    const name = document.querySelector("input[name='name']").value
    const country = document.querySelector("input[name='country']").value
    const avatar = document.querySelector("input[name='avatar']").value
    let isVaLid = checkValidate(name,country,avatar)
    if (!isVaLid){
        alert("data is invalid")
        return
    }
    try {
        const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                country: country,
                avatar: avatar,
            })
        })
        getAPI()
    }

    catch (error) {
        console.error(error)
    }
}
async function getUserById(id) {
    console.log(id)
    const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt/` + id)

    const data = await response.json()
    console.log(data)
    const formUpdate = document.getElementById("form_update").getElementsByTagName("input")

    formUpdate.name.value = data.name
    formUpdate.country.value = data.country
    formUpdate.avatar.value = data.avatar
    formUpdate.id.value = data.id

}

document.getElementById("submit_update").onclick = async function (e) {
    e.preventDefault()

    const form = document.getElementById("form_update")

    const id = form.querySelector("input[name='id']").value
    const name = form.querySelector("input[name='name']").value
    const country = form.querySelector("input[name='country']").value
    const avatar = form.querySelector("input[name='avatar']").value
    let isVaLid = checkValidate(name,country,avatar)
    if (!isVaLid){
        alert("data is invalid")
        return
    }

    try {
        const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt/` + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                country: country,
                avatar: avatar,
            })
        }).then((e)=>{
            alert("update succes")
            
        }).catch((e)=>{
            alert("UPDATE false")
        })

        getAPI()
    } catch (error) {
        console.error(error)
    }
}
async function deleteUser(id){
    try {
        const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt/` + id, {
            method: "DELETE" 
            
           
        }).then((e) =>{
            
            alert("delete succes")
        }).catch((e)=>{
            alert("delete false")
        })

        getAPI()
    } catch (error) {
        console.error(error)
    }

}
function checkValidate(name,country,avatar){
    if (name.trim().length == 0){
        return false
    }if (country.trim().length == 0){
        return false
    }if (avatar.trim().length == 0){
        return false
    }
    return true
}





































