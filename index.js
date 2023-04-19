
const x=Math.floor(Math.random*(10)+1);
let guesses=0;
document.getElementById("mybutton").onclick=function(){
    let y=document.getElementById("guess").value;
    if(x==y){
        ++guesses;
        alert(`You guessed the number in ${guesses} guess`);
    }
    else{
        ++guesses;
        alert(`you didn't guess the number`);
    }
}