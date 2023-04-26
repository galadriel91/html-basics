(()=>{
    const container = document.querySelector('.container')

    const handleClick = (e) => {
        if(e.target.classList.contains('target')){
            container.removeChild(e.target)
        }else{
            return
        }
    }

    // 이벤트 위임을 적용.
    container.addEventListener('click' , handleClick)
})()