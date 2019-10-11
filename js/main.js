document.addEventListener("DOMContentLoaded", function () {


  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    autoPlay: true
  });


  const emailForm = document.getElementById("emailForm");
  const userEmail = document.getElementById("user-email");
  const button = document.getElementById("submit-button");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (userEmail.value == "") {
      alert("Please enter a valid email address!");
    } else {
      alert("Thank you for subscribing!");
    }


  });




});