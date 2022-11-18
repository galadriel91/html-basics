(function(){
    let targetIndex = 0;
    let textNumber = 0;

    const textArray = ["LEE MOON SEOB.", "WEB DEVELOPER."];
    const textSpeed = 200;
    const textTarget = document.querySelector('.mainTyping');

    function textIndex(){
        if(textNumber === textArray.length - 1){
            textNumber = 0
        }else{
            textNumber++
        }
    }
        
    function typing() {
        if(targetIndex < textArray[textNumber].length){
            textTarget.innerHTML += textArray[textNumber].charAt(targetIndex);
            targetIndex++;
            setTimeout(typing , textSpeed)
        }else{
            remove();
        }
    }
        
    function remove() {
        if(0 <= targetIndex){
            textTarget.innerHTML = textTarget.innerHTML.slice(0 , targetIndex);
            targetIndex--;
            setTimeout(remove , textSpeed);
        }
        else{
            textIndex();
            typing();
        }
    }

    typing();    
})();
