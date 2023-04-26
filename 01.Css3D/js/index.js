const containerElem = document.querySelector('.container')


const handleClick = (e) => {
    const targetElem = e.target
    if(targetElem.parentNode.classList.contains('firstCard')){
        targetElem.parentNode.classList.add('open')
    }
    if(targetElem.parentNode.classList.contains('lastCard')){
        targetElem.parentNode.classList.add('open')
    }
    if(targetElem.classList.contains('closeBtn')){
        const openElem = document.querySelectorAll('.open')
        openElem[1].classList.remove('open')
        setTimeout(()=>{
            openElem[0].classList.remove('open')
        },500)
    }
}

containerElem.addEventListener('click', handleClick)