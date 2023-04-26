const containerElem = document.querySelector('.container')
const leftClass = 'left'
const rightClass = 'right'

const handleClick = (e) => {
    console.log(e.target.parentNode)
}

containerElem.addEventListener('click', handleClick)