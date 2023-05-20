(()=>{

    const bg = document.querySelector('.bg')
    const moon = document.querySelector('.moon')
    const mountain = document.querySelector('.mountain')
    const road = document.querySelector('.road')
    const text = document.querySelector('.text')

    const handleScroll = () => {
        const value = window.scrollY
        bg.style.top = `${value * .5}px`
        moon.style.left = `-${value * .5}px`
        mountain.style.top = `-${value * .2}px`
        road.style.top = `${value * .15}px`
        text.style.top = `${value * 1}px`
    }

    window.addEventListener('scroll' , handleScroll)
})()