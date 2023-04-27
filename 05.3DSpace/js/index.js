(()=>{
    const progress = document.querySelector('.progress')
    const house = document.querySelector('.house')
    let maxScrollValue;

    const handleResize = () => {
        maxScrollValue = document.body.offsetHeight - window.innerHeight
    }

    const handleProgress = (e) => {
        const scrollPer = window.scrollY / maxScrollValue
        progress.style.width = `${scrollPer * 100}%`
        house.style.transform = `translateZ(${scrollPer * 980 - 490}vw)`
    }

    window.addEventListener('scroll' , handleProgress)
    window.addEventListener('resize' , handleResize)
    handleResize()
})()