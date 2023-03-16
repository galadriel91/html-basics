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
    const handleMenu = () =>{ 
        if(menuBtn.classList.contains('xi-bars')){
            menuBtn.classList.remove('xi-bars')
            menuBtn.classList.add('xi-close')
        }else{
            menuBtn.classList.remove('xi-close')
            menuBtn.classList.add('xi-bars')
        }
    }
    menuBtn.addEventListener('click' , handleMenu)
})();