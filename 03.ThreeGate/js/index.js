(()=>{
    const container = document.querySelector('.container')
    let currentTarget = null

    const removeClass = () => {
        if(currentTarget){
            currentTarget.classList.remove('open')
        }
    }

    const addClass = (elem) => {
        elem.classList.add('open')
        currentTarget = elem
    }

    const handleClick = (e) => {
        removeClass()
        const targetElem = e.target.parentNode
        if(targetElem !== document.body){
            addClass(targetElem)
        }
    }

    container.addEventListener('click' , handleClick)
})();
