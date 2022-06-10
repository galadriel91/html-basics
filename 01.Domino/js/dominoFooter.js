const footer = new Vue({
    el:'#footer',
    data:{
        close:true,
        state:'',
    },
    methods:{
        onClickClose(){
            this.close = false
        },
        onClickUp(){
            window.scroll({
                behavior: 'smooth',
                top:document.body.offsetTop
           })
        },
        onScroll(){
            if(window.pageYOffset >= 150){
                this.state = "scroll"
            }else{
                this.state = ""
            }
        }
    },
    mounted(){
        window.addEventListener('scroll' , this.onScroll)
    }
})