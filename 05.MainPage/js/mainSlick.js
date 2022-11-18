$('.projectsList').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    accessibility:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
          }
        },
        {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows:false,
            }
          },
      ]
});

//전체버튼
$('.wholeBtn').on('click', function(e){
  e.preventDefault()
  $('.active').removeClass('active');
  $('.wholeBtn').addClass('active');
  $('.projectsList').slick('slickUnfilter');
});

// 마크업 버튼
$('.markupBtn').on('click', function(e){
  e.preventDefault()
  $('.active').removeClass('active');
  $('.markupBtn').addClass('active');
  $('.projectsList').slick('slickUnfilter');
  $('.projectsList').slick('slickFilter','.markup');
});

// Vue 버튼
$('.vueBtn').on('click', function(e){
  e.preventDefault()
  $('.active').removeClass('active');
  $('.vueBtn').addClass('active');
  $('.projectsList').slick('slickUnfilter');
  $('.projectsList').slick('slickFilter','.vue');
});
