console.log("Animation script loaded");
const text = "We are online 😎";
const text2 = "We will be online Tomorrow";
const text3 = "We are closed for now 😔";
const switchh = "On";
let index = 0;
const speed = 100;

const el = document.getElementById("typing-test");
const dot = document.getElementById("dot");



function fadeOut() {
  el.style.transition = "opacity 1s";
  el.style.opacity = "0";

  setTimeout(() => {
    el.innerHTML = "";
    el.style.opacity = "1";
    index = 0;
    const newMessage = updateStatus();
    type(newMessage);
  }, 1000);
}
function orderNow(product, price) {
  const phone = "919045469325";

  let message = `I want to order ${product} for ₹${price}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
// Function to update the status message based on the current time
function updateStatus() {
  const el = document.getElementById("typing-test");

  const now = new Date();
  const hour = now.getHours(); // gets current hour (0–23)

  if (switchh == "off") {
    dot.style.background = "red"; // Show the red dot for offline status
     return text2;//"We will be online soon😔"
  } 
  else if (switchh=="on") {
    dot.style.background = "limegreen"; // Show the green dot for online status
    return text; // "We are online 😎"
  } 
  else if (hour >= 3 && hour < 17) {
     // Show the green dot for online status betweeen 3am to 5pm
    return text; //"We are closed for now 😔"
  }
}


function type(message) {
  if (index < message.length) {
    el.innerHTML += message.charAt(index);
    index++;
    setTimeout(() => type(message), speed);
  } else {
    setTimeout(fadeOut, 10000); // wait 10 sec
  }
}
const statusMessage = updateStatus();
type(statusMessage);

