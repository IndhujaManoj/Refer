let seatElements = document.querySelectorAll('.book');
        let selectedSeats = [];

        seatElements.forEach(seat => {
            seat.addEventListener('click', () => {
                let seatNumber = seat.innerHTML;//clicked seats num
                if (selectedSeats.length < Number(document.getElementById('requiredSeats').value)) {
                    if (!selectedSeats.includes(seatNumber)) {
                        seat.style.backgroundColor = 'yellow';
                        selectedSeats.push(seatNumber);
                    } else {
                        seat.style.backgroundColor = 'green';
                      selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);//start,len
                    }

                    let totalTickets = selectedSeats.length;
                    document.getElementById('num').value = totalTickets;
                    document.getElementById('para').value = selectedSeats
                }
            });
        });
        
            

        
        

        document.getElementById('confirmBtn').addEventListener('click', () => {
            let firstName = document.getElementById('name').value;
            let requiredSeats = Number(document.getElementById('requiredSeats').value);
            let totalTickets = selectedSeats.length;
            firstName.reset()
            //.reset()


            if (requiredSeats === totalTickets) {
                document.getElementById('final').innerHTML = "Hi " + firstName + ", you have selected " + requiredSeats + " tickets. Your seat numbers are " + selectedSeats.join(', ');
            } else if (requiredSeats > totalTickets) {
                document.getElementById('final').innerHTML = "Please select " + requiredSeats + " seats.";
            }
        });