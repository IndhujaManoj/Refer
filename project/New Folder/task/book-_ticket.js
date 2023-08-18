let seet=document.querySelectorAll('.book')

let selectedBoxes=[];
seet.forEach(box=>{
    box.addEventListener('click',()=>{
        let clickvalue=box.innerHTML;
        console.log(clickvalue,'c')
        box.style.backgroundColor='pink'
        if(!selectedBoxes.includes(clickvalue)){
          selectedBoxes.push(clickvalue)
          let total=selectedBoxes.length
          

          //document.getElementById('para').innerHTML="total",total
          let num=document.getElementById('num').value=total
          let para=document.getElementById('para').value=selectedBoxes

          document.getElementById('code').textContent='selected seets:'+selectedBoxes//.join(',')       
           }
    })
})
