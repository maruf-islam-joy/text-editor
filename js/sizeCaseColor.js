
//size action function
document.getElementById('size-btn').addEventListener('click', function(){
    const targetArea = getArea();
    const currentSize = document.getElementById('size-btn').value;
    targetArea.style.fontSize = currentSize+"px";
})


// case changer function
let caseCount = 2;

document.getElementById('case-btn').addEventListener('click', function(){
    const targetArea = getArea();
    if(caseCount%2 == 0){
        targetArea.style.textTransform = "uppercase";
        caseCount++;
    }
    else{
        targetArea.style.textTransform = "none";
        caseCount++;
    }
    
})


// color changer function 
document.getElementById('color-btn').addEventListener('change',function(e){
    const targetArea = getArea();
    let colorNow = e.target.value;
    targetArea.style.color = colorNow;
})


//Enter button enabled for text size
let btn = document.getElementById('size-btn');
document.addEventListener('keypress', function(e){
    let keyCode = e.keyCode? e.keyCode: e.which;
    if(keyCode === 13){
        btn.click();
    }
   
})