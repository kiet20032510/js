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
                    <td><img style="width: 50px; height: 50px;" src="${element.avatar}" /></td>
                </tr>`
        });
        table.innerHTML = content
    } catch (error) {
        console.error(error)
    }
}

getAPI()
document.getElementById("submit").onclick = async function (e) {
    e.preventDefault ()
     const name = document.querySelector("input[name='name']").value
    const country = document.querySelector("input[name='country']").value
    const avatar = document.querySelector("input[name='avatar']").value
    try {
        const response = await fetch(`https://683da81f199a0039e9e65a43.mockapi.io/bt` , {
            method : "POST",
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
   
    catch(error){
        console.error(error)
    }
}
   
    


