(()=>{
    const responsiveButton = document.querySelector('.responsiveButton')
    const headerBottom = document.querySelector('.headerWrapBottom')
    const responsiveButtonClick = () => {
        headerBottom.classList.toggle('open')
    }
    responsiveButton.addEventListener('click' , responsiveButtonClick)
})()