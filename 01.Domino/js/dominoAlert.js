const responsiveAlert = document.querySelector('.responsiveAlert')
const alert = 'alert'

const onScrollAlert = () => {
    if(window.innerWidth >= 1250){
        responsiveAlert.classList.remove(alert)
    }else{
        responsiveAlert.classList.add(alert)
    }
}

onScrollAlert()

window.addEventListener('resize' , onScrollAlert)