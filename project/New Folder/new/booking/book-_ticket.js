let seet = document.querySelectorAll('.book')
let sname=document.getElementById('name').value;




ArrayBoxes=[]
seet.forEach(box => {
    box.addEventListener('click', () => {
        let clickvalue = box.innerHTML;

        box.style.backgroundColor = 'yellow'
        if (!ArrayBoxes.includes(clickvalue)) {
            ArrayBoxes.push(clickvalue)
            let total = Number(ArrayBoxes.length)
            document.getElementById('num').value = total
            document.getElementById('para').value = ArrayBoxes
            var fname = document.getElementById('name').value
            let rec=Number(document.getElementById('rec').value)
            if(rec==total){
                return ArrayBoxes
            }
            document.getElementById('final').innerHTML = "Hi " + fname + " you are selcected " + total + " tickets.Your seat numbers are" + ArrayBoxes

        }
    })
})
