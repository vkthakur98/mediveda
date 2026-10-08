export function bookAppointment() {
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get input values
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const isd = document.getElementById("isd-code").value;       
        const phone_number = document.getElementById('phone').value;
        const phone = isd +" "+ phone_number;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        const message = document.getElementById('message').value;
        const fullDate = new Date();
        const date = fullDate.getFullYear() + "-" + (fullDate.getMonth() + 1) + "-" + fullDate.getDate();


        console.log(phone)

    
        // Create a data object to send
        const data = {
            FirstName: first_name,
            LastName: last_name,
            Email: email,
            PhoneNumber: phone,
            State: state,
            Country: country,
            Message: message,
            Date: date
        };
    
        console.log(data);
    
        // Send a POST request using Fetch API
        fetch('SaveAppointment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert data object to JSON string
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse JSON response
        })
        .then(data => {
            // Handle success response
            console.log('Success:', data);
            // alert('Your appointment has been booked successfully!');
            // Optionally, you can clear the form or redirect
            if(data.errors)
            {
                document.getElementById("err-message-window").classList.remove("hidden");
                document.getElementById("err-message-window").classList.add("block");
                document.getElementById("err-message-content").innerHTML = data.errors;
            }
            else
            {
                document.getElementById('appointment-form').reset();
                document.getElementById("appointment-window").classList.add("hidden");
                document.getElementById("message-window").classList.remove("hidden");
                document.getElementById("message-window").classList.add("block");
                setTimeout(() => {
                   document.getElementById("message-window").classList.remove("block");
                   document.getElementById("message-window").classList.add("hidden"); 
                }, 5000);
            }
            
        })
        .catch((error) => {
            // Handle error response
            console.error('Error:', error);
            alert('There was an error creating the sub-admin. Please try again.');
        });
    });   

    document.getElementById("err-message-window-closer").addEventListener("click", () => {
        document.getElementById('err-message-window').classList.add("hidden");
        document.getElementById('err-message-window').classList.remove("block");         
    })
}


