(()=>{
    const gates = document.querySelectorAll('.gate')
    let currentTarget = null

    const handleClick = (e) => {
        if(currentTarget){
            currentTarget.classList.remove('open')
        }
        console.log(e.currentTarget)
        e.currentTarget.classList.add('open')
        currentTarget = e.currentTarget
    }

    for(let i=0; i<gates.length; i++){
        gates[i].addEventListener('click' , handleClick)
    }

})();
