window.onload = function(){
    "use strict";

    let txtArea = document.getElementById("animAreaTxtA");
    let listOfFont = document.getElementById("fontSizeSelect");
    let listOfAnimation = document.getElementById("animSelect");
    let timer;
    let animations = ANIMATIONS;
    let currentMovie = animations[listOfAnimation.value];
    let moviePixels = currentMovie.split("=====\n");
    let turboCheckbox = document.getElementById("turbo");
    let speed = 250;
    let stopBtn = document.getElementById("stopBtn");
    let startBtn = document.getElementById("startBtn");
    
    
    turboCheck();
    stopOnClick(); 
    startOnClick();
    chooseAnimation();
    changeFontSize();

    stopBtn.disabled = true;
    startBtn.disabled = true;

function stopOnClick(){
    document.getElementById("stopBtn").onclick = function(){
        clearInterval(timer);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    };
}

function startOnClick(){
    document.getElementById("startBtn").onclick = function(){
        startMovie();
        if(listOfAnimation.value !== "blank"){
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }
    };
}

function chooseAnimation(){
    listOfAnimation.onchange = function(){
        let val = listOfAnimation.value;
        switch(val){
            case "exercise":
                txtArea.value = animations.EXERCISE;
                break;
            case "bike":
                txtArea.value = animations.BIKE;
                break;
            case "dive":
                txtArea.value = animations.DIVE;
                break;
            case "juggler":
                txtArea.value = animations.JUGGLER; 
                break;
            default:
                txtArea.value = animations.BLANK;   
        }

    
        currentMovie = animations[listOfAnimation.value];
        // moviePixels = currentMovie.split("=====\n");
        clearInterval(timer);

        startBtn.disabled = false;
        stopBtn.disabled = true;
    };
}



function turboCheck(){

    turboCheckbox.onchange = function(){
        if(turboCheckbox.checked){
            speed = 50;
            clearInterval(timer);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }else{
            speed = 250;
            clearInterval(timer);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
    };
}

function changeFontSize(){
    listOfFont.onchange = function(){
        let val = listOfFont.value;
        switch(val){
            case "tiny":
                txtArea.style.fontSize = "7pt";
                // window.alert("tiny clicked")
                break;
            case "medium":
                txtArea.style.fontSize = "12pt";
                break;
            case "small":
                txtArea.style.fontSize = "10pt";
                break;
            case "large":
                txtArea.style.fontSize = "16pt";
                break;
            case "exLarge":
                txtArea.style.fontSize = "24pt";
                break;
            case "xxl":
                txtArea.style.fontSize = "32pt";
                break;
        }
    };
}


function startMovie(){
    let pixel = 0;
    timer = setInterval(() => {
        if(pixel == moviePixels.length){
            pixel = 0;
        }
        showPixelX(pixel);
        pixel++;
    }, speed);
}


function showPixelX(x){
    txtArea = document.getElementById("animAreaTxtA");
    listOfAnimation = document.getElementById("animSelect");
    
    currentMovie = animations[listOfAnimation.value];
    moviePixels = currentMovie.split("=====\n");
    txtArea.value = moviePixels[x];
}
};