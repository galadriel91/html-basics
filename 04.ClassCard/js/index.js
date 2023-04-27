(()=>{
    const container = document.querySelector('.container')
    const bgColor = ['crimson' , 'peru' , 'dodgerblue' , 'royalblue' , 'yellowgreen']

    class Card{
        constructor(number, bgColor){
            this.number = number
            this.bg = bgColor
            this.elem = document.createElement('div')
            this.init()
        }
        init(){
            const cardElem = this.elem
            cardElem.classList.add('card')
            cardElem.style.backgroundColor = this.bg
            cardElem.innerHTML = this.number
            container.appendChild(cardElem)
        }
    }
    
    container.addEventListener('click' , ()=>{
        new Card(Math.ceil(Math.random() * 20) , bgColor[Math.floor(Math.random() * 5)])
    })
})()