// signup.js

// 👉 Function to validate email
function isValidEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
  }
  
  // 👉 Submit event handler
  function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!isValidEmail(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }
  
    alert(`Verification email sent to ${email}. Please check your inbox.`);
    event.target.reset();
  }
  
  // 👉 Attach listener after DOM loads
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupForm").addEventListener("submit", handleSignup);
  });
  