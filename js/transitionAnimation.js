const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider-about");
const logo = document.querySelector("#logo");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");
const phone = document.querySelector("#phone");
const headline = document.querySelector(".headline");

// Sliding Effekt when the about page is being i
var sliderOne = $(".slider-one");
var sliderTwo = $(".slider-two");
var sliderThree = $(".slider-three");

const tl = new TimelineMax();

tl.fromTo(hero, 1, {
    height: "0%"
  }, {
    height: "90%",
    ease: Power2.easeInOut
  }) 
  .fromTo(hero, 1, {
    width: "100%"
  }, {
    width: "90%",
    ease: Power2.easeInOut
  })
  /*
  .fromTo(slider, 1, {
    x: "100%"
  }, {
    x: "0%",
    ease: Power2.easeInOut
  }, "-=1")
  */
  .fromTo(logo, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.6")
  .fromTo(home, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.5")
  .fromTo(about, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.4")
  .fromTo(work, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.3")
  .fromTo(contact, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.2")
  .fromTo(phone, 0.2, {
    opacity: 0,
    x: 30
  }, {
    opacity: 1,
    x: 0
  }, "-=0.1");


// Open Contact Page Animation 
$(".openHomePage").click(function () {
  // Get the Page full height
  var pageHeight = $(document).height();
  // Changing the slider height
  sliderOne.height(pageHeight);
  sliderTwo.height(pageHeight);
  sliderThree.height(pageHeight);
  // Changing the color of the slider
  sliderOne.css("background-color", "#282828");
  sliderTwo.css("background-color", "#767676");
  sliderThree.css("background-color", "#EFF9F0");
  // Animation Starts Here...
  sliderOne.animate({
    width: "100%",
    left: 0
  }); 
  sliderTwo.delay(100).animate({
    width: "100%",
    left: 0
  });
  sliderThree.delay(200).animate({
      width: "100%",
      left: 0
    }, function () {
      window.location.href = 'index.html';
    });
});


// Open About Page Animation 
$(".openAboutPage").click(function () {
    // Get the Page full height
    var pageHeight = $(document).height();
    // Changing the slider height
    sliderOne.height(pageHeight);
    sliderTwo.height(pageHeight);
    sliderThree.height(pageHeight);
  // Animation Starts Here...
  sliderOne.css("background-color", "#97c58e");
  sliderTwo.css("background-color", "rgb(203, 225, 185)");
  sliderThree.css("background-color", "#EFF9F0");
  sliderOne.animate({
    width: "100%",
    left: 0
  });
  sliderTwo.delay(100).animate({
    width: "100%",
    left: 0
  });
  sliderThree.delay(200).animate({
    width: "100%",
    left: 0
  }, function () {
    // After Animation here...
    window.location.href = 'about.html';

  });
});

// Open Work Page Animation 
$(".openWorkPage").click(function () {
    // Get the Page full height
    var pageHeight = $(document).height();
    // Changing the slider height
    sliderOne.height(pageHeight);
    sliderTwo.height(pageHeight);
    sliderThree.height(pageHeight);
  // Changing the color of the slider
  sliderOne.css("background-color", "#CA96F9");
  sliderTwo.css("background-color", "rgb(223, 205, 243)");
  sliderThree.css("background-color", "#EFF9F0");
  // Animation Starts Here...
  sliderOne.animate({
    width: "100%",
    left: 0
  }); 
  sliderTwo.delay(100).animate({
    width: "100%",
    left: 0
  });
  sliderThree.delay(200).animate({
      width: "100%",
      left: 0
    }, function () {
      window.location.href = 'work.html';
    });
});

// Open Contact Page Animation 
$(".openContactPage").click(function () {
      // Get the Page full height
      var pageHeight = $(document).height();
      // Changing the slider height
      sliderOne.height(pageHeight);
      sliderTwo.height(pageHeight);
      sliderThree.height(pageHeight);
  // Changing the color of the slider
  sliderOne.css("background-color", "#282828");
  sliderTwo.css("background-color", "#767676");
  sliderThree.css("background-color", "#EFF9F0");
  // Animation Starts Here...
  sliderOne.animate({
    width: "100%",
    left: 0
  }); 
  sliderTwo.delay(100).animate({
    width: "100%",
    left: 0
  });
  sliderThree.delay(200).animate({
      width: "100%",
      left: 0
    }, function () {
      window.location.href = 'contact.html';
    });
});