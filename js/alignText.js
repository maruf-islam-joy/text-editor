//alignMent Boss function
function alignMe(alignStyle){
    const targetText = getArea();
    targetText.style.textAlign = alignStyle;
}


//align-left function
document.getElementById('aLeft-btn').addEventListener('click', function(){
   alignMe('left');
})


//align-center function
document.getElementById('aCenter-btn').addEventListener('click', function(){
    alignMe('center');
})

//align-right function

document.getElementById('aRight-btn').addEventListener('click', function(){
    alignMe('right');
})

//align-justify function
document.getElementById('aJustify-btn').addEventListener('click', function(){
   alignMe('justify');
})