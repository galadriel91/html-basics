$('.eventSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility:false,
    pauseOnDotsHover:true,
    responsive: [
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});
