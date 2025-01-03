document.getElementById("alertButton").addEventListener("click", function() {
    alert("Welcome to my website.");
});



document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();
});