// Initialize carousel for gallery
$(document).ready(function () {
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
  });
});

// Open lightbox function
function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = element.src;
}

// Close lightbox function
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
