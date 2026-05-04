console.log("Animation script loaded");
const text = "We are online 😎";
let index = 0;
const speed = 100;

const el = document.getElementById("typing-test");

function type() {
  if (index < text.length) {
    el.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  } else {
    setTimeout(fadeOut, 10000); // wait 10 sec
  }
}

function fadeOut() {
  el.style.transition = "opacity 1s";
  el.style.opacity = "0";

  setTimeout(() => {
    el.innerHTML = "";
    el.style.opacity = "1";
    index = 0;
    type();
  }, 1000);
}
function orderNow(product, price) {
  const phone = "919045469325";

  let message = `I want to order ${product} for ₹${price}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

type();
