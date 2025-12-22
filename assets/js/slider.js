const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active", "prev"));
    slides[i].classList.add("active");
}

setInterval(() => {
    slides[index].classList.add("prev");
    index = (index + 1) % slides.length;
    showSlide(index);
}, 7000);
