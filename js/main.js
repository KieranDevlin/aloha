document.addEventListener("DOMContentLoaded", function () {


  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    autoPlay: true
  });

  // EMAIL ALERT
  const emailForm = document.getElementById("emailForm");
  const userEmail = document.getElementById("user-email");
  const button = document.getElementById("submit-button");
  // ADD TO CART COUNTER
  const buyNow = document.getElementsByClassName("buy-now");
  const counter = document.getElementById("counter");
  let clicks =0;


  // this creates an alert if the user input is empty or 
  // doesnt follow the default html email structure validator
  // and provides a  different alert when user submits a proper
  // email
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (userEmail.value === "") {
      alert("Please enter a valid email address!");
    } else {
      alert("Thank you for subscribing!");
      userEmail.value = "";
    }

  });


  // This applies the click function to all 
  //the buy now buttons in the array
  // and adds 1 to the click counter beside the 
  // cart img in html - mimicing a real user ecommerce cart
  for (let i=0; i < buyNow.length; i++){
  buyNow[i].addEventListener("click", function (event) {
    event.preventDefault();
    clicks += 1;
    counter.innerHTML = clicks;
    console.log(clicks);

  });
  };





});