function validateForm() {
    var form = document.getElementById("softwareEngineerForm");
    var errorDiv = document.getElementById("error-message");
  
    if (!form.checkValidity()) {
      errorDiv.innerHTML = "Please fill out all fields correctly.";
      return false;
    }
  
    // Additional custom validation logic can be added here
  
    errorDiv.innerHTML = "";
    alert("Application submitted successfully!"); // Replace this with your actual form submission logic
    return true;
  }
  