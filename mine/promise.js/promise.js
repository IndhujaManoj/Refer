/*let takalBook=new Promise((resolve,reject)=>{
    let bookingSuccess=true
    if(bookingSuccess){
        resolve(850)
    }
    else{
        reject()
    }
})
takalBook.then((amt)=>console.log(`thanks friend i have transfer Rs${amt}`))

.catch(()=>console.log("thanks for trying!! i will book a bus"))

*/
/*
    let tossCoin=new Promise((head,tail)=>{
        let toss=true
        if(toss){
            head()
        }
        else{
            tail()
        }
    })

tossCoin.then(()=>console.log("i got head"))
.catch(()=>console.log("i got tail"))*/

function tossCoin(){
    return new Promise((resolve,reject))
}