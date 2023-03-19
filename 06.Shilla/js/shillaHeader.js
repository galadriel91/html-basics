(()=>{
    // 헤더 스크롤
    const header = document.querySelector('.header')
    const fixed = "fixed";

    const fixedHeader = () => {
        if(scrollY >= 150){
            header.classList.add(fixed);
        }else{
            header.classList.remove(fixed);
        }
    }

    document.addEventListener('scroll' , fixedHeader);

    // 헤더 메뉴 버튼
    const menuBtn = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobileGnb')
    const handleMenu = () =>{ 
        if(menuBtn.classList.contains('xi-bars')){
            menuBtn.classList.remove('xi-bars')
            menuBtn.classList.add('xi-close')
            mobileMenu.classList.add('on')
        }else{
            menuBtn.classList.remove('xi-close')
            menuBtn.classList.add('xi-bars')
            mobileMenu.classList.remove('on')
        }
    }
    menuBtn.addEventListener('click' , handleMenu)

    const initMenu = () => {
        if(window.innerWidth > 900){
            menuBtn.classList.remove('xi-close')
            menuBtn.classList.add('xi-bars')
            mobileMenu.classList.remove('on')
        }
    }
    initMenu()
    console.log(window.innerWidth)
    window.addEventListener('resize' , initMenu)
})();