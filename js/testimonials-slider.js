
$(document).ready(function() {
    function updateTestimonialContent(slide) {
      const testimonial = $(slide).data('testimonial');
      const author = $(slide).data('author');
      const role = $(slide).data('role');
  
      $('.testimonial-content p').text(testimonial);
      $('.testimonial-author').text(author);
      $('.testimonial-role').text(role);
    }
  
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '0',
      arrows: false,
      dots: true,
      appendDots: $('.slider-nav'),
      centerMode: false,
      autoplay: true,
      speed: 2500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }).on('afterChange', function(event, slick, currentSlide) {
      const currentSlideElement = $(slick.$slides[currentSlide]);
      updateTestimonialContent(currentSlideElement);
    });
  
    //initialize withfirst slide content
    updateTestimonialContent($('.slide').first());
  });
  