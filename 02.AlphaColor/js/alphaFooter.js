(()=>{
    const goTopContainerBtn = document.querySelector('.goTopContainerBtn')
    goTopContainerBtn.addEventListener('click' , function(){
        window.scroll({
            behavior:'smooth',
            left:0,
            top:0
        })
    }) 
})()