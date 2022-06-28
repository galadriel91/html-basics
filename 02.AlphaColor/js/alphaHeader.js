(()=>{
    const NavList = document.querySelectorAll('.nav-list')
    const On = 'on'

    const checkWindowSize = () =>{
        if(window.innerWidth <= 1000){
            NavList.forEach((v)=>{
                v.addEventListener('click' , ()=>{
                    let classTarget = null
                    NavList.forEach(v=>v.classList.remove(On))
                    classTarget = v
                    classTarget.classList.add(On)
                })
            })
        }else{
            NavList.forEach(v=>{
                v.classList.remove(On)
                v.addEventListener('click' , ()=>{
                    v.classList.remove(On)
                })
            })
        }
    }
    checkWindowSize()
    window.addEventListener('resize' , checkWindowSize)

    const responsiveButton = document.querySelector('.responsiveButton')
    const headerBottom = document.querySelector('.headerWrapBottom')
    const responsiveButtonClick = () => {
        headerBottom.classList.toggle('open')
    }
    responsiveButton.addEventListener('click' , responsiveButtonClick)
})()
