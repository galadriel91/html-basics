(()=>{
    const wallWrap = document.querySelector('.spaceWallWrap')
    const spaceWrap = document.querySelector('.spaceWrap')
    const progress = document.querySelector('.progress')
    const mousePos={
        x:0,
        y:0
    }
    let maxScrollValue;

    const checkScrollValue = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    const handleScroll = () => {
        const scrollPer = window.scrollY / maxScrollValue
        progress.style.width = `${scrollPer * 100}%`
        wallWrap.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    const handleMousemove = (e) => { 
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2
        spaceWrap.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
    }   

    checkScrollValue()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMousemove)
    window.addEventListener('resize', checkScrollValue)
})();