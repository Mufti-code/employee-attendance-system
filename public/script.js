const API = "http://localhost:3000"

function checkin(){

const name = document.getElementById("name").value

fetch(API + "/checkin",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name})
})
.then(res=>res.json())
.then(data=>{
alert(data.message)
loadData()
})

}

function loadData(){

fetch(API + "/attendance")
.then(res=>res.json())
.then(data=>{

let rows=""

data.forEach(item=>{

rows+=`
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.checkin}</td>
</tr>
`

})

document.getElementById("tableData").innerHTML=rows
document.getElementById("total").innerText=data.length

})

}

loadData()