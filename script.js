const status=
document.getElementById("shopStatus");


const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 19) {
   status.innerHTML = "We are open today(8:00 AM - 7:00 PM)!";
}else {
    status.innerHTML = "We are closed now(Opens at 8:00 AM)!";
}

const quoteButton = document.getElementById("quoteButton");
quoteButton.addEventListener("click", function() {
    alert("Thank you for contacting Solai Saw Mills!");
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you for contacting Solai Saw Mills! We will get back to you soon.");

});

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const phoneInput = document.getElementById("phone");

const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event){

});

form.addEventListener("submit", function(event){

    event.preventDefault();

});

const name = nameInput.value.trim();

const email = emailInput.value.trim();

const phone = phoneInput.value.trim();

const message = messageInput.value.trim();

if(

name === "" ||

email === "" ||

phone === "" ||

message === ""

){

    formMessage.textContent =

    "Please fill all required fields.";

    return;

}

formMessage.textContent =

`Thank you, ${name}! We received your enquiry.`;

formMessage.style.color = "green";

form.reset();

