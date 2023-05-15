(()=>{
    const wallWrap = document.querySelector('.introWallWrap')
    const world = document.querySelector('.introWorld')
    const mousePos = {
        x:0,
        y:0
    }
    let maxScrollValue

    const checkMaxScrollValue = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    const handleScroll = () => {
        const scrollPer = window.scrollY / maxScrollValue
        wallWrap.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    const handleMousemove = (e) => {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2
        world.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
    }

    checkMaxScrollValue()
    window.addEventListener('resize' , checkMaxScrollValue)
    window.addEventListener('scroll' , handleScroll)
    window.addEventListener('mousemove' , handleMousemove)
})()