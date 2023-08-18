//pgm 22

function assignGrade(mark){
    if (mark>=90){
        console.log("A")
    }
    else if(mark>=80 && mark<=89){
        console.log("B")
    }
    
    else if(mark>=70 && mark<=79){
        console.log("C")
    }
    else if(mark>=60 && mark<=69){
        console.log("D")
    }
    else{
        console.log("FAIL")
    }


}
assignGrade(85)

//pgm 23

function performArithmeticOperation(n1,n2,operator){
    if(operator=="+"){
        console.log(n1+n2)
        return result
    }
    else if(operator=="-"){
        console.log(n1-n2)
    }
    else if(operator=="*"){
        console.log(n1*n2)
    }
    else if(operator=="/"){
        console.log(n1/n2)
    }
    else{
        console.log("invalid operator")
    }


}
let result=performArithmeticOperation(5,10,"+")


