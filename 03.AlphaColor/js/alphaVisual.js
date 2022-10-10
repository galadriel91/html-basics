$('.visualWrap').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    accessibility:false,
    pauseOnDotsHover:true
});

const slickDots = $('.slick-dots li')
slickDots.on('click' , ()=>{
    $('.visualWrap').slick('slickPause')
    setTimeout(()=>{
        $('.visualWrap').slick('slickPlay')
    },2000)
})