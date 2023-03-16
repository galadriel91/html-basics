(()=>{
    
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
})();