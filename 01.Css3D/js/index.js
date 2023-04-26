(()=>{
    const containerElem = document.querySelector('.container')

    const handleClose = () => {
        const openElem = document.querySelectorAll('.open')
        openElem[1].classList.remove('open')
        setTimeout(()=>{
            openElem[0].classList.remove('open')
        },500)
    }

    const handleOpenCard = (elem, className) => {
        if(elem.parentNode.classList.contains(className)){
            elem.parentNode.classList.add('open')
        }
    }

    const handleClick = (e) => {
        const targetElem = e.target

        handleOpenCard(e.target, 'onOpen')

        if(targetElem.classList.contains('closeBtn')){
            handleClose()
        }
    }

    containerElem.addEventListener('click', handleClick)
})();