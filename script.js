const images = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg"];

const maxLength = images.length;
let currentIndex = 0;
const slide = document.getElementById("slide");

const updateIndex = (n) => {
	currentIndex = (currentIndex + n + maxLength) % maxLength;
	slide.src = "Images/" + images[currentIndex];
};
