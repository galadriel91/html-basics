(()=>{
    const upBtn = document.querySelector('.upBtn')
    const show = "show";

    const showBtn = () => {
        if(scrollY >= 150){
            upBtn.classList.add(show);
        }else{
            upBtn.classList.remove(show);
        }
    }

    document.addEventListener('scroll' , showBtn);


    upBtn.addEventListener('click' , function(){
        window.scroll({
            behavior:'smooth',
            left:0,
            top:0
        })
    }) 
})()