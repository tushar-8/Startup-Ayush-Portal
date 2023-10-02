const thumbnailContainer = document.querySelector('.thumbnail-container');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;

function changeMainImage() {
    mainImage.src = thumbnails[currentIndex].src;
    mainImage.alt = thumbnails[currentIndex].alt;

    currentIndex = (currentIndex + 1) % thumbnails.length;
}

function autoChangeMainImage() {
    setInterval(changeMainImage, 5000); // Change every 5 seconds
}

function autoScrollThumbnails() {
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
        scrollAmount += 2; // Adjust the scrolling speed as needed
        thumbnailContainer.scrollTop = scrollAmount;

        if (scrollAmount >= thumbnailContainer.scrollHeight - thumbnailContainer.clientHeight) {
            clearInterval(scrollInterval);
            setTimeout(autoScrollThumbnails, 5000); // Restart scrolling after 5 seconds
        }
    }, 100); // Adjust the interval as needed (in milliseconds)
}

autoChangeMainImage();
autoScrollThumbnails();



const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show the button when the user scrolls down the page
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

