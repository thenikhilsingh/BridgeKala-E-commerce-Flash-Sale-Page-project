const countdownDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.querySelector(".timer").innerHTML = "SALE ENDED";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const format = (num) => String(num).padStart(2, "0");

  const setDigits = (selector, value) => {
    const digits = format(value).split("");
    const container = document.querySelector(`.${selector}`).firstElementChild;
    container.children[0].innerText = digits[0];
    container.children[1].innerText = digits[1];
  };

  setDigits("days", days);
  setDigits("hours", hours);
  setDigits("minutes", minutes);
  setDigits("seconds", seconds);
};

updateTimer();
setInterval(updateTimer, 1000);

const images = [
  "assets/productimg1.webp",
  "assets/productimg2.webp",
  "assets/productimg3.webp",
];

let currentIndex = 0;

const productImg = document.querySelector(".product-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

function showImage(index) {
  productImg.src = images[index];
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  const decreaseBtn = document.querySelector(".qty-decrease");
  const increaseBtn = document.querySelector(".qty-increase");
  const qtyValue = document.querySelector(".qty-value");

  let quantity = parseInt(qtyValue.textContent);

  decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtyValue.textContent = quantity;
    }
  });

  increaseBtn.addEventListener("click", () => {
    quantity++;
    qtyValue.textContent = quantity;
  });
});
const darkToggle = document.getElementById("darkModeToggle");

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add("dark-mode");
    darkToggle.src = "assets/sun.png";
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    darkToggle.src = "assets/moon.png";
    localStorage.setItem("darkMode", "disabled");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const darkPref = localStorage.getItem("darkMode");
  setDarkMode(darkPref === "enabled");
});

darkToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
});
