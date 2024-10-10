document.getElementById("bar").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
})



 // Initialize EmailJS with your public key
 emailjs.init("YOUR_USER_ID");

 // Handle form submission
 document.getElementById("contact-form").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent the default form submission

     // Collect form data
     var templateParams = {
         from_name: document.getElementById("name").value,
         from_email: document.getElementById("email").value,
         message: document.getElementById("message").value,
     };

     // Send email using EmailJS
     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
         .then(function(response) {
             document.getElementById("response").innerText = "Email sent successfully!";
             console.log("SUCCESS!", response.status, response.text);
             // Optionally clear the form fields
             document.getElementById("contact-form").reset();
         }, function(error) {
             document.getElementById("response").innerText = "Failed to send email.";
             console.log("FAILED...", error);
         });
});