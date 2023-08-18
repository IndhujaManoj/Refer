//fetch("https://Jsonplaceholder.typicode.com/posts").then((response)=>(response.json()).then((res)=>console.log(res)))
var tbody=document.getElementById('tbody')
var table=document.getElementById('table')
row=document.createElement('tr')
userId=document.createElement('th')
id=document.createElement('th')
title=document.createElement('th')
body=document.createElement('th')

userId.textContent = 'userId'
row.appendChild(userId)
table.appendChild(row)

id.textContent = "id"
row.appendChild(id)
table.appendChild(row)

title.textContent = "title"
row.appendChild(title)
table.appendChild(row)

body.textContent = "body"
row.appendChild(body)
table.appendChild(row)
fetch("https://Jsonplaceholder.typicode.com/posts").then((response)=>(response.json()).then((res)=>{
for(i=0;i<res.length;i++){
    let per=res[i]
    var row = document.createElement('tr')

    var usercell = document.createElement('td')
    usercell.textContent = per.userId
    row.appendChild(usercell)

    var idcell = document.createElement('td')
    idcell.textContent = per.id
    row.appendChild(idcell)

    var titlecell = document.createElement('td')
    titlecell.textContent = per.title
    row.appendChild(titlecell)

    var bodycell = document.createElement('td')
    bodycell.textContent = per.body
    row.appendChild(bodycell)

    table.appendChild(row)
}

}))
