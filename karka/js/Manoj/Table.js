
function submit(){
    let name=document.getElementById('name').value
    let age=document.getElementById('age').value;
    let field=document.getElementById('field').value
   console.log(name)
   console.log(age)
   console.log(field)

   var obj={
    name:name,
    age:age,
    field:field
   }
   console.log(obj)
}
