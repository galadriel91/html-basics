(function(){

    const scrollWrap = document.querySelector('.headerMainScroll');
    const FIXED = "fixed";
    
    const wholeMenu = document.querySelector('.wholeMenu');
    const wholeBtn = document.querySelector('.whole');
    const SHOWING = "showing";
    const BURGER  = "burger";
    const LINK = document.querySelectorAll('.link')

    const menu = document.querySelector('.menu');
    const MARGIN = "margin";

    
    // 전체메뉴 클릭시 헤더 SHOWING
    function showingHeader(){
        scrollWrap.classList.toggle(SHOWING);
        wholeBtn.classList.toggle(BURGER);
    }
    wholeMenu.addEventListener('click' , showingHeader);
    // 전체메뉴 클릭시 헤더 SHOWING
    
    // 전체메뉴 스크롤시 헤더 FIXED
    function scrollFixed(){
        if(scrollWrap.classList.contains(SHOWING)){
            if(window.innerWidth > 960){
                scrollWrap.classList.remove(SHOWING);
                wholeBtn.classList.remove(BURGER);
            }
        }
        if(pageYOffset > 300){
            scrollWrap.classList.add(FIXED);
            menu.classList.add(MARGIN);
        }else{
            scrollWrap.classList.remove(FIXED);
            menu.classList.remove(MARGIN);
        }
    }
    document.addEventListener('scroll',scrollFixed);
    // 전체메뉴 스크롤시 헤더 FIXED

    for(let i = 0 ; i < LINK.length; i++){
        LINK[i].addEventListener('click' , function(){
            if(scrollWrap.classList.contains(SHOWING)){
               scrollWrap.classList.remove(SHOWING)
               wholeBtn.classList.remove(BURGER);
            }
        } )
    }
})()
