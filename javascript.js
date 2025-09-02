document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        // close others
        document.querySelectorAll(".faq-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });
        // toggle clicked
        item.classList.toggle("active");
    });
});


const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        992: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 20 }
    }
});


const reviewSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
});