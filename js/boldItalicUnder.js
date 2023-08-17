function getArea(){
    const getTextArea = document.getElementById('main-text-area');
    return getTextArea;
}

let boldCount = 2;
let italicCount = 2;
let underLineCount = 2;


//bold-action function
document.getElementById('bold-btn').addEventListener('click', function(){
    
    
    if(boldCount%2 == 0){
       const targetText = getArea();
       targetText.style.fontWeight = 'bold';
       boldCount++;
    }
    else{
        const targetText = getArea();
        targetText.style.fontWeight = 'normal';
        boldCount++
    }
})


//italic-action function
document.getElementById('italic-btn').addEventListener('click', function(){
    
    
    if(italicCount%2 == 0){
       const targetText = getArea();
       targetText.style.fontStyle = 'italic';
       italicCount++;
    }
    else{
        const targetText = getArea();
        targetText.style.fontStyle = 'normal';
        italicCount++;
    }
})

//Underline action function

document.getElementById('underline-btn').addEventListener('click', function(){
    
    
    if(underLineCount%2 == 0){
       const targetText = getArea();
       targetText.style.textDecoration = 'underline';
       underLineCount++;
    }
    else{
        const targetText = getArea();
        targetText.style.textDecoration = 'none';
        underLineCount++;
    }
})