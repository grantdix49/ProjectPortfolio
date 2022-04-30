const gallery = document.getElementById('imageGallery');

const images = ["./images/IMG_1374.JPG", "./images/IMG_1790.JPG", "./images/IMG_4129.JPG", "./images/IMG_4689.JPG", "./images/IMG_5003.JPG"]

const nextButton = document.getElementById('next');

const previousButton = document.getElementById('previous');

let currentImage = 0;

gallery.style.backgroundImage = "url("+images[currentImage]+")";

const imageUp = () => {
    if (currentImage >= 0 && currentImage < 4) {
        currentImage++;
    } else {
        currentImage = 0;
    }
}

const imageDown = () => {
    if (currentImage > 0 && currentImage <= 4) {
        currentImage--;
    } else {
        currentImage = 4;
    }
}

const toggleImageUp = () => {
    imageUp();
    gallery.style.backgroundImage = "url("+images[currentImage]+")";
}

const toggleImageDown = () => {
    imageDown();
    gallery.style.backgroundImage = "url("+images[currentImage]+")";
}

nextButton.addEventListener('click', toggleImageUp);
previousButton.onclick = toggleImageDown;