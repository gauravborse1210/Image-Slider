const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".image");

let curslide = 0;
const maxSlide = images.length;
let intervalId;

// Function to show only the current slide
function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Move to next slide
function nextSlide() {
  curslide = (curslide + 1) % maxSlide;
  showSlide(curslide);
}

// Move to previous slide
function prevSlide() {
  // curslide = (curslide - 1 + maxSlide) % maxSlide;
  // showSlide(curslide);
  curslide = curslide === 0 ? images.length - 1 : curslide - 1;
  showSlide(curslide);
}

// Start auto-slide
function startAutoSlide() {
  intervalId = setInterval(nextSlide, 2000); // Change every 3 seconds
}

// Reset auto-slide timer
function resetAutoSlide() {
  clearInterval(intervalId);
  startAutoSlide();
}

// Button event listeners
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Initialize
showSlide(curslide);
startAutoSlide();
