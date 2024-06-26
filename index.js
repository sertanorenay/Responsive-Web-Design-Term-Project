// If form clicked, hidden form will open.
$(document).ready(function () {
  $(".form-container").hide();

  $("#form-header").click(function () {
    $(".form-container").slideToggle("slow");
  });
});

// Checks the validity of the filled data.
$(document).ready(function () {
  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
  });

  $("#info-btn").click(function() {
    $("#dialog").dialog("open");
  });

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

// Daily random tips for index.html
$(document).ready(function () {
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
    "Choose fish high in omega-3 fatty acids, like salmon or mackerel, for heart health.",
  ];

  var currentTipIndex = Math.floor(Math.random() * tips.length);
  $("#tipContent").text(tips[currentTipIndex]);

  $("#nextTip").click(function () {
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    $("#tipContent").fadeOut(function () {
      $(this).text(tips[currentTipIndex]).fadeIn();
    });
  });
});

// Animation rules
 $(document).ready(function () {
  $(".home-services-section ul li").each(function (index) {
    $(this)
      .delay(200 * index)
      .animate({ opacity: 1, left: 0 }, 1000);
  });
});

$(document).ready(function () {
  $(".hidden").each(function (index) {
    $(this)
      .delay(400 * index)
      .animate({ opacity: 1 }, 1000);
  });
});

$(document).ready(function () {
  $(".hero-content").animate({ opacity: 1 }, 1500);
});

// Commentization on recipes page.
$('.add-comment').click(function () {
  var commentText = $(this).siblings(".new-comment").val();
  var commenterName = "Anonymous";
  if (commentText.trim() !== "") {
    var $commenterNameInput = $(this).siblings(".commenter-name");
    if ($commenterNameInput.length && $commenterNameInput.val().trim() !== "") {
      commenterName = $commenterNameInput.val();
    }

    var commentHTML =
      "<div class='comment'><strong>" +
      commenterName +
      ":</strong> " +
      commentText +
      "</div>";
    $(this).siblings(".comment-section").append(commentHTML);
    $(this).siblings(".new-comment").val("");
    $commenterNameInput.val("");
  }
});

// Accordion Jquery Widget
$(document).ready(function() {
  $("#accordion").accordion();
});

// BxSlider plugin in home page to slideshow the background images.
$(document).ready(function () {
  $(".bxslider").bxSlider({
    auto: true,
    pause: 5000,
    mode: "fade",
    pager: false,
    controls: false,
  });

  $(".hero-content").animate({ opacity: 1 }, 1500);
});

// Datepicker that shows the available days on the calendar
$(document).ready(function() {
  $('#date').datepicker({
      beforeShowDay: function(date) {
          var day = date.getDay();
          var dateString = $.datepicker.formatDate('mm/dd/yy', date);
          
          if (day === 0 || day === 6) {
              return [false, "", "Weekends are not available"];
          }      
          return [true, "", "Available"];
      }
  });
});

// AJAX FEATURE 1 - Reading recipes texts from .json
$(document).ready(function () {
  $.ajax({
      url: 'data/recipes.json',
      dataType: 'json',
      success: function (data) {
          var recipesContent = $('.recipe-details');
          recipesContent.empty();
          $.each(data, function (index, recipe) {
              var recipeHtml = `
              <div class="recipe">
                  <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" />
                  <h2>${recipe.title}</h2>
                  <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                  <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                  <div class="comments">
                      <h3>Comments</h3>
                      <div class="comment-section"></div>
                      <input type="text" class="commenter-name" placeholder="Your Name">
                      <textarea class="new-comment" placeholder="Add a comment..."></textarea>
                      <button class="btn add-comment">Add Comment</button>
                  </div>
              </div>`;
              recipesContent.append(recipeHtml);
          });

          // Bind the click event for the add-comment buttons
          $('.add-comment').click(function () {
              var commentText = $(this).siblings(".new-comment").val();
              var commenterName = "Anonymous";
              if (commentText.trim() !== "") {
                  var $commenterNameInput = $(this).siblings(".commenter-name");
                  if ($commenterNameInput.length && $commenterNameInput.val().trim() !== "") {
                      commenterName = $commenterNameInput.val();
                  }

                  var commentHTML =
                      "<div class='comment'><strong>" +
                      commenterName +
                      ":</strong> " +
                      commentText +
                      "</div>";
                  $(this).siblings(".comment-section").append(commentHTML);
                  $(this).siblings(".new-comment").val("");
                  $commenterNameInput.val("");
              }
          });
      },
      error: function () {
          alert('Failed to load recipes.');
      }
  });
});

// AJAX FEATURE 2 - Get food data from National Agricultural Library
document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'TZvveaZk2AOJxYTJeIRf1vIiL6XxGUPsqBQpUnbX';
  const apiUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';

  function fetchNutritionalInfo(food) {
      $.ajax({
          url: apiUrl,
          method: 'GET',
          data: {
              query: food,
              pageSize: 1,
              api_key: apiKey
          },
          success: function(response) {
              if (response.foods && response.foods.length > 0) {
                  const foodData = response.foods[0];
                  const nutrients = foodData.foodNutrients;
                  $('#nutrition-info').html(`
                      <h2>${foodData.description}</h2>
                      <p>Calories: ${getNutrientValue(nutrients, 1008)} kcal</p>
                      <p>Proteins: ${getNutrientValue(nutrients, 1003)} g</p>
                      <p>Fat: ${getNutrientValue(nutrients, 1004)} g</p>
                      <p>Carbohydrates: ${getNutrientValue(nutrients, 1005)} g</p>
                  `);
              } else {
                  $('#nutrition-info').html('<p>No results found</p>');
              }
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.error('Error fetching data:', textStatus, errorThrown);
              $('#nutrition-info').html('<p>Error fetching data</p>');
          }
      });
  }

  function getNutrientValue(nutrients, nutrientId) {
      const nutrient = nutrients.find(n => n.nutrientId === nutrientId);
      return nutrient ? nutrient.value : 'N/A';
  }

  $('#search-button').on('click', function() {
      const food = $('#food-input').val();
      if (food) {
          fetchNutritionalInfo(food);
      } else {
          $('#nutrition-info').html('<p>Please enter a food name</p>');
      }
  });
});