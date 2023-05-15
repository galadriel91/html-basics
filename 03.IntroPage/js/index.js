(()=>{
    const wallWrap = document.querySelector('.introWallWrap')
    let maxScrollValue

    const checkMaxScrollValue = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    const handleScroll = () => {
        const scrollPer = window.scrollY / maxScrollValue
        wallWrap.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    checkMaxScrollValue()
    window.addEventListener('resize' , checkMaxScrollValue)
    window.addEventListener('scroll' , handleScroll)
})()