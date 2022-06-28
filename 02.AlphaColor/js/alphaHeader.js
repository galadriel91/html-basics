(()=>{
    const NavList = document.querySelectorAll('.nav-list')
    const On = 'on'
    
    NavList.forEach((v)=>{
        v.addEventListener('click' , ()=>{
            let classTarget = null
            NavList.forEach(v=>v.classList.remove(On))
            classTarget = v
            classTarget.classList.add(On)
        })
    })

    const responsiveButton = document.querySelector('.responsiveButton')
    const headerBottom = document.querySelector('.headerWrapBottom')
    const responsiveButtonClick = () => {
        headerBottom.classList.toggle('open')
    }
    responsiveButton.addEventListener('click' , responsiveButtonClick)
})()
