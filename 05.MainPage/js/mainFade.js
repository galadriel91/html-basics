(()=>{
    const fadeTargets = document.querySelectorAll('.fateTarget')
    const FADEON = "fadeOn"
    const heightCheck = () => {
        for(let i = 0; i <fadeTargets.length ; i++){
            if(pageYOffset > fadeTargets[i].getBoundingClientRect().top * .9){
                fadeTargets[i].classList.add(FADEON)
            }
        }
    }
    document.addEventListener('scroll' , heightCheck)
})()