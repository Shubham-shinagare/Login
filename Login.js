async function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!userid || !password) {
        showErrorMessage('Please enter both username and password.');
        return;
    }

    // Show a loading message (you can customize this)
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Logging in...';
    loadingMessage.id = 'loadingMessage'; // Set an ID for easy reference
    document.body.appendChild(loadingMessage);

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userid, // assuming userid is the email
                password: password
            }),
        });

        // Hide loading message
        const loadingElement = document.getElementById('loadingMessage');
        if (loadingElement) {
            document.body.removeChild(loadingElement);
        }

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('jwtToken', data.jwtToken); // Store the token
            window.location.href = 'Dashboard.html'; // Redirect
        } else {
            // Handle specific errors
            const errorData = await response.json();
            showErrorMessage('Login failed: ' + (errorData.message || response.statusText));
        }
    } catch (error) {
        // Hide loading message
        const loadingElement = document.getElementById('loadingMessage');
        if (loadingElement) {
            document.body.removeChild(loadingElement);
        }
        showErrorMessage('Invalid password !!!');
    }
}

// Function to show error message
function showErrorMessage(message) {
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block'; // Show the error message
}
