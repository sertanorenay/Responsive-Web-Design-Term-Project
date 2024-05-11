// If form clicked, hidden form will open.
$(document).ready(function () {
  $(".form-container").hide();

  $("#form-header").click(function () {
    $(".form-container").slideToggle("slow");
  });
});

// Checks the validity of the filled data.
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
      event.preventDefault(); // Prevents submitting the ivalid form.
    }
  });
});

// Daily tips 
$(document).ready(function() {
  var tips = [
    "Drink at least 8 glasses of water each day.",
    "Incorporate two fruits or vegetables in every meal.",
    "Start your day with a healthy breakfast to boost your metabolism.",
    "Avoid processed foods to cut down on sodium and sugar intake.",
    "Plan your meals ahead of time to maintain a balanced diet.",
    "Replace sugary drinks with water or herbal teas.",
    "Include a lean protein source in every meal to help you feel full longer.",
    "Choose whole grains instead of refined grains for better digestion.",
    "Limit red meat consumption and opt for fish or poultry.",
    "Cook with healthy fats like olive oil or avocado oil instead of butter.",
    "Snack on nuts and seeds instead of chips or candy.",
    "Eat slowly to better recognize your body’s fullness signals.",
    "Use smaller plates to help control portion sizes.",
    "Limit your intake of alcohol and high-calorie cocktails.",
    "Increase your fiber intake to help with digestion and satiety.",
    "Avoid eating late at night to give your body time to digest before bedtime.",
    "Reduce your salt intake to lower blood pressure and improve heart health.",
    "Incorporate fermented foods into your diet to boost gut health.",
    "Balance your meals with carbohydrates, proteins, and fats to stabilize energy levels.",
    "Keep a food diary to monitor and improve your eating habits.",
    "Prepare healthy snacks ahead of time to avoid unhealthy choices.",
    "Opt for low-fat dairy options to reduce saturated fat intake.",
    "Try new recipes to keep healthy eating exciting and varied.",
    "Use herbs and spices to flavor foods instead of salt or high-fat sauces.",
    "Make sure to get a good variety of colorful fruits and vegetables daily.",
    "Include magnesium-rich foods like almonds, spinach, and black beans to support muscle and nerve function.",
    "Eat regular meals to prevent binge eating and maintain steady blood sugar levels.",
    "Choose dark chocolate over milk chocolate for a healthier treat.",
    "Incorporate plant-based proteins like lentils, chickpeas, and tofu into your diet.",
    "Stay active to complement your healthy eating habits.",
    "Make half your plate vegetables for a nutrient-packed meal.",
    "Swap soda for sparkling water with a splash of fruit juice for a refreshing drink.",
    "Cook meals at home more often to better control what you eat.",
    "Opt for air-popped popcorn instead of oil-popped as a low-calorie snack.",
    "Choose fish high in omega-3 fatty acids, like salmon or mackerel, for heart health."
];

  var currentTipIndex = Math.floor(Math.random() * tips.length);
  $('#tipContent').text(tips[currentTipIndex]);

  $('#nextTip').click(function() {
      currentTipIndex = (currentTipIndex + 1) % tips.length;
      $('#tipContent').fadeOut(function() {
          $(this).text(tips[currentTipIndex]).fadeIn();
      });
  });
});


$(document).ready(function() {
  $(".home-services-section ul li").each(function(index) {
    $(this).delay(200 * index).animate({ opacity: 1, left: 0 }, 1000);
  });
});

$(document).ready(function() {
  $('.hidden').each(function(index) {
    $(this).delay(400 * index).animate({opacity: 1}, 1000);
  });
});

$(document).ready(function() {
  $(".hero-content").animate({ opacity: 1 }, 1500);
});

$(document).ready(function () {
  $(".add-comment").click(function () {
    var commentText = $(this).siblings(".new-comment").val();
    var commenterName = "Anonymous"; // Varsayılan olarak "Anonymous" ismini kullan
    if (commentText.trim() !== "") {
      // Kullanıcının ismini aldığımız input alanı varsa onu kullan
      var $commenterNameInput = $(this).siblings(".commenter-name");
      if ($commenterNameInput.length && $commenterNameInput.val().trim() !== "") {
        commenterName = $commenterNameInput.val();
      }
      // Yorumu oluştur ve ekle
      var commentHTML = "<div class='comment'><strong>" + commenterName + ":</strong> " + commentText + "</div>";
      $(this).siblings(".comment-section").append(commentHTML);
      // Yorum ve isim inputlarını temizle
      $(this).siblings(".new-comment").val("");
      $commenterNameInput.val("");
    }
  });
});


$(document).ready(function() {
  var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"];
  var currentIndex = 0;
  var delay = 3000;

  function changeImage() {
    $(".hero-image").attr("src", "images/" + images[currentIndex]);
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeImage();

  setInterval(changeImage, delay);
});