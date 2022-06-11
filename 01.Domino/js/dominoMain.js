const main = new Vue({
    el:'#main',
    data:{
        // MainEvent
        eventBannerArray:[
            {src:"./images/main_card1.png" , alt:"회원가입 즉시 20% 할인"},
            {src:"./images/main_card2.gif" , alt:"도미노 매니아만의 혜택보기"},
            {src:"./images/main_card3.png" , alt:"희망나눔 캠페인 20%할인"},
            {src:"./images/main_card4.png" , alt:"나만의 피자 먹고싶은 그날 !"}
        ],
        state: 'currentLeft',
        disable:true,

        // MainProducts

        bestUpperArray:[
            {src:"./images/potato.jpg" , alt:"포테이토 피자" , title:"포테이토" , price1:"27,900원" , price2:"21,000원", order:"바로주문" , number:1 , rank:'best' , top:true},
            {src:"./images/bulgogi.jpg" , alt:"불고기 피자" , title:"리얼 불고기" , price1:"27,900원" , price2:"21,000원", order:"바로주문" , number:2 , rank:'normal' , },
            {src:"./images/best_quatro.jpg" , alt:"베스트 콰트로" , title:"베스트 콰트로" , price1:"34,900원" , price2:"27,000원", order:"바로주문" , number:3 , rank:'normal'}
        ],
        bestBottomArray:[
            {src:"./images/goguma.jpg" , alt:"우리 고구마" , title:"우리 고구마" , price1:"29,900원" , price2:"23,000원", order:"바로주문" , number:4 , rank:'normal'},
            {src:"./images/cheese.jpg" , alt:"치즈 가든" , title:"치즈가든" , price1:"27,900원" , price2:"21,000원", order:"바로주문" , number:5 , rank:'normal'},
            {src:"./images/bisteka.jpg" , alt:"와규 앤 비스테카" , title:"와규 앤 비스테카" , price1:"33,900원" , price2:"28,000원", order:"바로주문" , number:6 , rank:'normal'}
        ],
        premiumUpperArray:[
            {src:"./images/moonbomb.jpg" , alt:"문어밤 슈림프 피자" , title:"문어밤 슈림프" , price1:"34,900원" , price2:"29,000원", order:"바로주문" , number:1, rank:'best' ,top:true},
            {src:"./images/meatmeat.jpg" , alt:"미트 미트 미트" , title:"미트 미트 미트" , price1:"33,900원" , price2:"28,000원", order:"바로주문" , number:2 , rank:'normal'},
            {src:"./images/best_quatro.jpg" , alt:"베스트 콰트로" , title:"베스트 콰트로" , price1:"34,900원" , price2:"27,000원", order:"바로주문" , number:3 , rank:'normal'}
        ],
        premiumBottomArray:[
            {src:"./images/bisteka.jpg" , alt:"와규 앤 비스테카" , title:"와규 앤 비스테카" , price1:"33,900원" , price2:"28,000원", order:"바로주문" , number:4 , rank:'normal'},
            {src:"./images/p_blacktiger.jpg" , alt:"치즈케이크 블랙타이거" , title:"치즈케이크 블랙타이거" , price1:"35,900원" , price2:"29,000원", order:"바로주문" , number:5 , rank:'normal'},
            {src:"./images/shirimp.jpg" , alt:"블랙타이거 슈림프" , title:"블랙타이거 슈림프" , price1:"33,900원" , price2:"28,000원", order:"바로주문" , number:6 , rank:'normal'}
        ],
        toggle:false,
        state:'present'
    },
    methods:{
        // MainEvent
        onClickLeft(){
            if(this.state != 'currentLeft'){
                this.state = 'currentLeft'
                this.disable = true
            }
        },
        onClickRight(){
            this.state = "moveRight"
            this.disable = false
        },

        // MainProducts
        onClickToggle(e){
            if(e.target.className !== "on"){
                this.toggle = !this.toggle
            }
        }
    }
})