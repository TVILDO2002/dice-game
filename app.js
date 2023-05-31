
function roll(){

    var randomNum = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    if( randomNum === 1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    } else if(randomNum === 2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }else if(randomNum === 3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }else if(randomNum === 4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }else if(randomNum === 5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }else {
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
    
    if( randomNum2 === 1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    } else if(randomNum2 === 2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }else if(randomNum2 === 3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }else if(randomNum2 === 4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }else if(randomNum2 === 5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }else {
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }

    if(randomNum > randomNum2){
        document.querySelector(".winner").textContent = "Player 1 Won ";
    } else if(randomNum < randomNum2) {
        document.querySelector(".winner").textContent = "Player 2 Won ";
    } else {
        document.querySelector(".winner").textContent = "Draw ";
    }
}

