const slider2 = $('.mainProductVisual').bxSlider({
    auto: true,
    slideWidth:278,
    slideMargin: 29,
    speed:1000,
    minSlides:1,
    maxSlides:4,
    moveSlides: 1,
    autoHover : true,
    responsive : true,
    pager: false,
    stopAutoOnClick: false,
});

// const prevBtn = $('.bx-prev')
// prevBtn.on('click' , ()=> {
//     slider.stopAuto(false)
//     timeout = setTimeout(()=>{
//         slider.startAuto(false)
//     },3000)
// })


// const nextBtn = $('.bx-next')
// nextBtn.on('click' , ()=> {
//     slider.stopAuto(false)
//     timeout = setTimeout(()=>{
//         slider.startAuto(false)
//     },3000)
// })