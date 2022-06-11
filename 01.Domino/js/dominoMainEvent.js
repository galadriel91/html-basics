const mainSectionEvent = new Vue({
    el:'#mainSectionEvent',
    data:{
        eventBannerArray:[
            {src:"./images/main_card1.png" , alt:"회원가입 즉시 20% 할인"},
            {src:"./images/main_card2.gif" , alt:"도미노 매니아만의 혜택보기"},
            {src:"./images/main_card3.png" , alt:"희망나눔 캠페인 20%할인"},
            {src:"./images/main_card4.png" , alt:"나만의 피자 먹고싶은 그날 !"}
        ],
        state: 'currentLeft',
        disable:true
    },
    methods:{
        onClickLeft(){
            if(this.state != 'currentLeft'){
                this.state = 'currentLeft'
                this.disable = true
            }
        },
        onClickRight(){
            this.state = "moveRight"
            this.disable = false
        }
    }
})