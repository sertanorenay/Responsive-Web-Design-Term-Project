// If form clicked, hidden form will open
$(document).ready(function () {
  $(".form-container").hide();

  $("#form-header").click(function () {
    $(".form-container").slideToggle("slow");
  });
});

// Checks the validity of the filled data
$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    var isValid = true;

    var email = $("#email").val();
    if (!email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    var name = $("#name").val();
    if (name.length === 0) {
      alert("Please enter your name.");
      isValid = false;
    }

    var message = $("#message").val();
    if (message.length === 0) {
      alert("Please enter your message.");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevents submitting the form
    }
  });
});
