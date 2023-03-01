$('.instaSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility:false,
    pauseOnDotsHover:true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});
