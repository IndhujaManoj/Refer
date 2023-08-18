const age=15;
const result=age>18?"eligible":"not eligible"
console.log(result)
//handling null values

function welcome(name){
    const result=name?name:"no name";
    console.log("welcome:",result);
}
welcome("indhuja")
welcome()

user={"name":"nathan",'age':18}
console.log(user.name)

const greating=(user)=>{
    const name=user?user.name:"no name"
    return "hello "+  name
}
console.log(greating(user))
//conditional chain
/*
avarage>=90 A
average>=80 B
other C grede
*/
const average=8N;
const grade=average>=90?"A grade":average>=80?"B grade":"C grade";
console.log(grade)