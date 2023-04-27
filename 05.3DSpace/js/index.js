(()=>{
    const progress = document.querySelector('.progress')
    const stage = document.querySelector('.stage')
    const house = document.querySelector('.house')
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue;

    const handleResize = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    const handleProgress = (e) => {
        const scrollPer = window.scrollY / maxScrollValue
        progress.style.width = `${scrollPer * 100}%`
        house.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    const handleMousemove = (e) => {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2
        stage.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
    }

    window.addEventListener('scroll' , handleProgress)
    window.addEventListener('resize' , handleResize)
    window.addEventListener('mousemove', handleMousemove)
    handleResize()
})()