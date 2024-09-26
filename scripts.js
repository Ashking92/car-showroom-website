let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Automatic sliding every 5 seconds
setInterval(() => changeSlide(1), 5000);


function buyCar(carName, carPrice) {
    alert(`You selected to buy the ${carName} for ${carPrice}. Redirecting to payment page...`);
    // In a real application, you could redirect to a payment or checkout page like this:
    // window.location.href = `/checkout?car=${carName}&price=${carPrice}`;
}
