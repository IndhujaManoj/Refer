var tbody = document.getElementById('tbody');
var table = document.getElementById("table")
var data = [{
    name: "indhu",
    age: 23,
    city: "ngl"
},
{
    name: "pavithra",
    age: 24,
    city: "vadasery"
},
{

    name: "nandhu",
    age: 25,
    city: "chennai"
}
];

//creating table heading
row = document.createElement('tr')
names = document.createElement('th')
age = document.createElement('th')
city = document.createElement('th')
//named as name,age,city
names.textContent = 'name'
row.appendChild(names)
table.appendChild(row)

age.textContent = "age"
row.appendChild(age)
table.appendChild(row)

city.textContent = "city"
row.appendChild(city)
table.appendChild(row)
//ittrate al values from object
for (i = 0; i < data.length; i++) {
    let per = data[i]
    var row = document.createElement('tr')

    var namecell = document.createElement('td')
    namecell.textContent = per.name
    row.appendChild(namecell)

    var agecell = document.createElement('td')
    agecell.textContent = per.age
    row.appendChild(agecell)

    var citycell = document.createElement('td')
    citycell.textContent = per.city
    row.appendChild(citycell)

    table.appendChild(row)
}
