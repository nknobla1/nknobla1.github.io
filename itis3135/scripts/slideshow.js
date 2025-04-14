let slideIndex = 0;
let slides;

function showSlide(index) {
  slides.hide();
  slides.eq(index).fadeIn();
  $('.thumbnails img').removeClass("active");
  $('.thumbnails img').eq(index).addClass("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

$(document).ready(function () {
  slides = $(".slide");
  showSlide(slideIndex);

  $("#next").click(nextSlide);
  $("#prev").click(prevSlide);

  slides.each(function (i) {
    let thumbSrc = $(this).find('img').attr('src');
    $(".thumbnails").append(`<img src="${thumbSrc}" data-index="${i}">`);
  });

  $(".thumbnails").on("click", "img", function () {
    slideIndex = parseInt($(this).attr("data-index"));
    showSlide(slideIndex);
  });

  setInterval(nextSlide, 5000);

  $('[data-include]').each(function () {
    const file = $(this).attr('data-include') + '.html';
    $(this).load(file);
  });
});
