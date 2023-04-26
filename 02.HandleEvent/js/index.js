const targets = document.querySelectorAll('.target')
const container = document.querySelector('.container')

const handleClick = (e) => {
    container.removeChild(e.currentTarget)
}

// 개별 태그에 전부 이벤트를 걸어 주었다.
for(let i = 0 ; i < targets.length; i++){
    targets[i].addEventListener('click' , handleClick)
}