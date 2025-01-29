document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
      // Display custom popup
      Swal.fire({
          title: "Olashubomi says:",
          text: `Thank you, ${name}! Your message has been received.`,
          icon: "success",
          confirmButtonText: "OK"
      });

      // Optionally reset the form after submission
      document.getElementById("contactForm").reset();
  } else {
      Swal.fire({
          title: "Olashubomi says:",
          text: "Please fill in all fields before submitting.",
          icon: "error",
          confirmButtonText: "OK"
      });
  }
});





  



  


const textElement = document.getElementById("typing-text"); 
const text = "Hi there, I'm Olashubomi";
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    textElement.innerHTML = text.slice(0, index) + "|"; // Add cursor
    index++;

    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 800); // Pause for 0.8s before deleting
      return;
    }
  } else {
    textElement.innerHTML = text.slice(0, index) + "|"; // Add cursor
    index--;

    if (index < 0) {
      isDeleting = false;
      setTimeout(typeEffect, 5200); // Pause for 5.2s before typing again (Total 6s cycle)
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed (faster delete)
}

typeEffect(); // Start animation 
  







    
