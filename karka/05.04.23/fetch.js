//fetch("https://Jsonplaceholder.typicode.com/posts").then((response)=>(response.json()).then((res)=>console.log(res))).catch((error)=>console.error(("error")));

const result=new Promise((resolve,reject)=>{
    let final=true
    if(final){
      resolve("success")
    }else{
      reject("failure")
    }
    });
    result.then((res)=>console.log(res)).catch((err)=>console.log((err)))
