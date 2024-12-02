document.getElementById("delete_admin_form").addEventListener("submit",(e) => {
    e.preventDefault();
    const admin_id = document.getElementById("admin_id").value;
    const data = {
        admin_id,
    };

    fetch('deleteadmin.php', {
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
        alert('Sub-admin created successfully!');
        // Optionally, you can clear the form or redirect
        document.getElementById('create-admin-form').reset();
    })
    .catch((error) => {
        // Handle error response
        console.error('Error:', error);
        alert('There was an error creating the sub-admin. Please try again.');
    })
})