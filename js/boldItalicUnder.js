function getArea(){
    const getTextArea = document.getElementById('main-text-area');
    return getTextArea;
}

let boldCount = 2;

document.getElementById('bold-btn').addEventListener('click', function(){
    
    
    if(boldCount%2 == 0){
       const targetText = getArea();
       console.log("I'm inside");
       targetText.style.fontWeight = 'bold';
       boldCount++;
    }
    else{
        const targetText = getArea();
        targetText.style.fontWeight = 'normal';
        boldCount++
    }
    console.log("I'm inside",boldCount);
})