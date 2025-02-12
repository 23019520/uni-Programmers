// Fetch identities data (simulate local file reading)
const identities = [
    { "name": "JohnDoe", "pin": "1234" },
    { "name": "JaneSmith", "pin": "5678" }
  ];
  

  
  // Handle form submission
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the entered username and pin
    const username = document.getElementById("name").value;
    const pin = document.getElementById("pin").value;
  
    // Check if the credentials match
    const user = identities.find(identity => identity.name === username && identity.pin === pin);
  
    if (user) {
      // Redirect to first.html on successful login
      window.location.href = "first.html";
    } else {
      // Show error message if credentials are incorrect
      alert("Incorrect username or pin. Please try again.");
    }
  });
  