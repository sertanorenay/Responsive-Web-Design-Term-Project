$(document).ready(function () {
  // Validate Contact Form
  $("#contactForm").submit(function (event) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      event.preventDefault(); // Prevent form from submitting
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });

  // Validate Reservation Form
  $("#reservationForm").submit(function (event) {
    var fullName = $("#fullName").val();
    var resEmail = $("#resEmail").val();
    var date = $("#date").val();
    if (!fullName || !resEmail || !date) {
      alert("Please fill out all fields.");
      event.preventDefault();
    } else if (!validateEmail(resEmail)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }
  });

  // Validate Comment Form
  $("#commentForm").submit(function (event) {
    var productId = $("#productId").val();
    var commentText = $("#commentText").val();
    if (!productId || !commentText) {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});

$(document).ready(function() {
  // Initially hide the form container
  $('.form-container').hide();

  // Toggle form visibility on header click
  $('#form-header').click(function() {
    $('.form-container').slideToggle('slow');
  });
});
