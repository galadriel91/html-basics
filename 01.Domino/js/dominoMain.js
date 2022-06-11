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
        slideState: 'currentLeft',
        disable:true,

        // MainProducts

        bestUpperArray:[
            {src:"./images/c_potato.jpg" , alt:"포테이토 피자" , title:"포테이토" , price1:"26,900원" , price2:"20,000원", order:"바로주문" , number:1 , rank:'best' , top:true},
            {src:"./images/c_bulgogi.jpg" , alt:"불고기 피자" , title:"리얼 불고기" , price1:"28,900원" , price2:"22,000원", order:"바로주문" , number:2 , rank:'normal' , },
            {src:"./images/c_goguma.jpg" , alt:"베스트 콰트로" , title:"우리 고구마" , price1:"29,900원" , price2:"23,000원", order:"바로주문" , number:3 , rank:'normal'}
        ],
        bestBottomArray:[
            {src:"./images/c_peper.jpg" , alt:"페퍼로니 피자" , title:"페퍼로니" , price1:"24,900원" , price2:"18,000원", order:"바로주문" , number:4 , rank:'normal'},
            {src:"./images/c_shirimp.jpg" , alt:"하와이안 슈림프" , title:"하와이안 슈림프" , price1:"28,900원" , price2:"22,000원", order:"바로주문" , number:5 , rank:'normal'},
            {src:"./images/c_bacon.jpg" , alt:"베이컨 체더치즈" , title:"베이컨 체더치즈" , price1:"26,900원" , price2:"20,000원", order:"바로주문" , number:6 , rank:'normal'}
        ],
        premiumUpperArray:[
            {src:"./images/p_best.jpg" , alt:"베스트 콰트로" , title:"베스트 콰트로" , price1:"35,900원" , price2:"29,000원", order:"바로주문" , number:1, rank:'best' ,top:true},
            {src:"./images/p_black.jpg" , alt:"블랙 앵거스 스테이크" , title:"블랙 앵거스 스테이크" , price1:"34,900원" , price2:"29,000원", order:"바로주문" , number:2 , rank:'normal'},
            {src:"./images/p_block.jpg" , alt:"블록버스터4" , title:"블록버스터4" , price1:"35,900원" , price2:"29,000원", order:"바로주문" , number:3 , rank:'normal'}
        ],
        premiumBottomArray:[
            {src:"./images/p_cheese.jpg" , alt:"치즈 퐁듀 파이어 미트" , title:"치즈 퐁듀 파이어 미트" , price1:"34,900원" , price2:"29,000원", order:"바로주문" , number:4 , rank:'normal'},
            {src:"./images/p_master.jpg" , alt:"마스터 트리플 코스" , title:"마스터 트리플 코스" , price1:"33,900원" , price2:"28,000원", order:"바로주문" , number:5 , rank:'normal'},
            {src:"./images/p_shirimp.jpg" , alt:"블랙타이거 슈림프" , title:"블랙타이거 슈림프" , price1:"35,900원" , price2:"29,500원", order:"바로주문" , number:6 , rank:'normal'}
        ],
        toggle:false,
        state:'present'
    },
    methods:{
        // MainEvent
        onClickLeft(){
            if(this.slideState != 'currentLeft'){
                this.slideState = 'currentLeft'
                this.disable = true
            }
        },
        onClickRight(){
            this.slideState = "moveRight"
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