(()=>{
    const wallWrap = document.querySelector('.spaceWallWrap')
    let maxScrollValue;

    const checkScrollValue = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }
    

    const handleScroll = () => {
        const scrollPer = window.scrollY / maxScrollValue
        wallWrap.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    checkScrollValue()
    window.addEventListener('scroll' , handleScroll)
})();