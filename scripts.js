
const images = [
    "./img/image1.jpg",
    "./img/image2.jpg",
    "./img/image3.png",
    "./img/image4.jpg",
    "./img/image5.png",
    "./img/image6.png",
    "./img/image7.png",
    "./img/image8.png",
    "./img/image9.png"
];


function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = images[index];
}


function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
