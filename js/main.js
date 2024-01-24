// Load Screen
$(function () {
  setTimeout(() => {
    $(".loader").fadeOut(600, () => {
      $(".loaderLayer").slideUp(600, () => {
        $("body").css("overflow", "auto");
      });
    });
  }, 600);
});

// Navbar Section
$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");
  let sectionOffset = $(href).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset }, 600);
});

$(".navbar-toggle").on("click", function () {
  let navbarContentWidth = $(".navbar-content").outerWidth();
  $(".navbar-left").css("left", "0");
  $(".navbar-toggle").css("left", navbarContentWidth);
  $(".header-tagLine").css("marginLeft", navbarContentWidth - 20);
  if ($(".navbar-left").css("left") == "0px") {
    $(".navbar-left").css("left", -navbarContentWidth);
    $(".navbar-toggle").css("left", "0px");
    $(".header-tagLine").css("marginLeft", "0px");
  }
});

$(".navbar-icon").on("click", function () {
  let navbarContentWidth = $(".navbar-content").outerWidth();
  $(".navbar-left").css("left", -navbarContentWidth);
  $(".navbar-toggle").css("left", "0");
  $(".header-tagLine").css("marginLeft", "0px");
});

// Details Section
$(".singer-item p").on("click", function (e) {
  let currentElement = $(e.target);
  let singerDsc = $(currentElement).next();
  let singerDscDisplay = currentElement
    .parent()
    .siblings()
    .children(".singer-desc");

  console.log(currentElement.parent().siblings().children(".singer-desc"));

  if (
    singerDscDisplay.hasClass("d-none") ||
    singerDscDisplay.css("display") == "none" ||
    singerDscDisplay.css("display") != "none"
  ) {
    currentElement.parent().siblings().children(".singer-desc").slideUp(500);
  }

  if (singerDsc.hasClass("d-none")) {
    singerDsc.removeClass("d-none").slideUp(1).slideToggle(500);
  } else {
    singerDsc.slideToggle(500);
  }
});

// Count Down timer
const countDown = new Date("2025-01-1").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDown - dateNow;
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Textarea Counter Down
let textareaVal = $("#floatingTextarea");
textareaVal.on("keyup", function () {
  let hundredSpan = $(".hundred");
  let characterRemaining = $(".characterRemaining");
  let availableChar = $(".availableChar");

  hundredSpan.html(100 - textareaVal.val().length);

  if (textareaVal.val().length >= 100) {
    hundredSpan.addClass("d-none");
    characterRemaining.text(" ");
    availableChar.removeClass("d-none");
  } else {
    hundredSpan.removeClass("d-none");
    characterRemaining.text("Character Remaining");
    availableChar.addClass("d-none");
  }
});
