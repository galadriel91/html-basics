(()=>{
    const visualOn = "on"
    const firstSlide = document.querySelector('.visualItem:first-child')
    const changeSlide = () => {
        const currentSlide = document.querySelector('.on')
        if(currentSlide){
            currentSlide.classList.remove(visualOn)
            const nextSlide = currentSlide.nextElementSibling
            if(nextSlide){
                nextSlide.classList.add(visualOn)
            }else{
                firstSlide.classList.add(visualOn)
            }
        }
    }
    setInterval(changeSlide , 3000)
})()