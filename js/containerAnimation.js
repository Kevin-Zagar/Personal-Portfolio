var percentToGetWindow = 50;

// Personal Projekts variables
var personalProjektContainer = $(".projektsContainer");


// Contact variables
var contactContainer = $(".contactContainer");


// About variables
var aboutContainer = $(".aboutContainer");


// TODO: Maybe an on load effect
// TODO: Problems when reszising the page bigger 

// --- Personal Projekts ---
$(document).ready(function () {
  // Id of the Button
  $("#flipPersonalProjekts").click(function () {
    // Getting the perfect with size every time
    var currWindowWidth = $(window).width();
    var wantedAboutWidth = (currWindowWidth / 100) * percentToGetWindow * 2 + 32;
    var getWindowHeight = $(window).height() + 100;

    // Get it to the front
    personalProjektContainer.css('z-index', 50);

    // Animaion Starts Here...
    personalProjektContainer.animate({
      left: "-16",
      height: getWindowHeight,
      width: wantedAboutWidth
    }, "slow", function () {
      // After Animation here...

      // Removing the Bootstrap Border Class. It will be added again when closeing
      // TODO: aboutContainer.removeClass("border-bottom-0");
    });

    // Let the Button disapear and the Card appear
    $(".carousel").fadeOut(400);
    $("#flipPersonalProjekts").fadeOut(400);
    $(".closePersonalProjektss").fadeIn(400);
    $(".hide-WorkPage").fadeIn(400);
  });
});

// Close Personal Projekts 
$(document).ready(function () {
  $("#closePersonalProjekts").click(function () {

    personalProjektContainer.animate({
      height: "80%",
      bottom: "20%",
      width: "100%"
    }, "slow", function () {
      personalProjektContainer.css('z-index', 10);
      contactContainer.css('z-index', 50);
      aboutContainer.css('z-index', 50);
    });
    $(".carousel").fadeIn(400);
    $("#flipPersonalProjekts").fadeIn(400);
    $(".closePersonalProjektss").fadeOut(400);
    $(".hide-WorkPage").fadeOut(400);
  });
});

// --- Open About Page  Animation ---
$(document).ready(function () {
  // Id of the Button
  $("#flipAboutPage").click(function () {

    // Getting the perfect with size every time
    var currWindowWidth = $(window).width();
    var wantedAboutWidth = (currWindowWidth / 100) * percentToGetWindow;

    // Animaion Starts Here...
    aboutContainer
      .animate({
        height: "150%",
        bottom: "-25%",
        width: wantedAboutWidth + "px",
        borderTopLeftRadius: 0,
        borderTopRightRadius: "50%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: "50%"
      }, "slow", function () {
        // After Animation here...

        // Removing the Bootstrap Border Class. It will be added again when closeing
        aboutContainer.removeClass("border-bottom-0");
      });
    // Let the Button disapear and the Card appear
    $("#flipAboutPage").fadeOut(400);
    $(".hide-before-showing-AboutPage").fadeIn(400);

  });
});

// Close About Page
$(document).ready(function () {
  $("#closeAboutPage").click(function () {

    aboutContainer.animate({
      width: "30%",
      height: "50%",
      bottom: "0%",
      borderTopLeftRadius: 0,
      borderTopRightRadius: "100%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }, "slow", function () {
      // after Animation...

    });
    aboutContainer.addClass("border-bottom-0");
    $("#flipAboutPage").fadeIn(400);
    $(".hide-before-showing-AboutPage").fadeOut(400);
    // TODO: $("#section-B-phrase").fadeOut(2000);

  });
});

// Open Contact Page Animation 
$(document).ready(function () {
  // Id of the Button
  $("#flipContactPage").click(function () {

    // Getting the perfect with size every time
    var currWindowWidth = $(window).width();
    var wantedAboutWidth = (currWindowWidth / 100) * percentToGetWindow;

    // Animation Starts Here...
    contactContainer.animate({
      height: "150%",
      bottom: "-25%",
      width: wantedAboutWidth + "px",
      borderTopLeftRadius: "50%",
      borderTopRightRadius: 0,
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: 0
    }, "slow", function () {
      // After Animation here...

      // Removing the Bootstrap Border Class. It will be added again when closeing
      contactContainer.removeClass("border-bottom-0");
    });
    // Let the Close Button disapear 
    $("#flipContactPage").fadeOut(400);
    $(".hide-befor-showing-ContactPage").fadeIn(400);
  });
});

// Close Contact Page
$(document).ready(function () {
  $("#closeContactPage").click(function () {

    contactContainer.animate({
      width: "30%",
      height: "50%",
      bottom: "0%",
      borderTopLeftRadius: "100%",
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }, "slow", function () {
      // after Animation...

    });

    contactContainer.addClass("border-bottom-0");
    $("#flipContactPage").fadeIn(400);
    $(".hide-before-showing-ContactPage").fadeOut(400);
  });
});


/*

*/


