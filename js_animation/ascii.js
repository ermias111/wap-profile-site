window.onload = setup;

let txtArea;
let listOfFont;
let listOfAnimation;
let timer;
let currentMovie;
let moviePixels;
let turboCheckbox;
let speed;

function setup(){
    "use strict";

    stopOnClick(); 
    startOnClick();
    chooseAnimation();
    changeFontSize();
    turboCheck();

    txtArea = document.getElementById("animAreaTxtA");
    listOfFont = document.getElementById("fontSizeSelect");
    listOfAnimation = document.getElementById("animSelect");
    currentMovie = ANIMATIONS[listOfAnimation.value];
    moviePixels = currentMovie.split("=====\n");
    turboCheckbox = document.getElementById("turbo");
    speed = 250;
}




function stopOnClick(){
    // let txtArea = document.getElementById("animAreaTxtA");
    document.getElementById("stopBtn").onclick = function(){
        clearInterval(timer);
        // window.alert("stop clicked");
        // txtArea.value = ANIMATIONS["exercise"];
    }
}

function startOnClick(){
    document.getElementById("startBtn").onclick = function(){
        // window.alert("start clicked");
        startMovie();
    }
}

function chooseAnimation(){
    txtArea = document.getElementById("animAreaTxtA");
    listOfAnimation = document.getElementById("animSelect");
    listOfAnimation.onchange = function(){
        let val = listOfAnimation.value;
        switch(val){
            // case "blank":
            //     txtArea.value = ANIMATIONS["blank"];
            case "exercise":
                txtArea.value = ANIMATIONS["exercise"];
                break;
            case "bike":
                txtArea.value = ANIMATIONS["bike"];
                break;
            case "dive":
                txtArea.value = ANIMATIONS["dive"];
                break;
            case "juggler":
                txtArea.value = ANIMATIONS["juggler"]; 
                break;   
        }

    
        currentMovie = ANIMATIONS[listOfAnimation.value];
        moviePixels = currentMovie.split("=====\n");
        clearInterval(timer);
        speed = 250;
    }
}



function changeFontSize(){
    // txtArea = document.getElementById("animAreaTxtA");
    // listOfFont = document.getElementById("fontSizeSelect");
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
    }
}


function startMovie(){
    // let listOfAnimation = document.getElementById("animSelect");
    
    // let currentMovie = ANIMATIONS[listOfAnimation.value];
    // let moviePixels = currentMovie.split("=====\n");

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
    
    currentMovie = ANIMATIONS[listOfAnimation.value];
    moviePixels = currentMovie.split("=====\n");
    txtArea.value = moviePixels[x];
}


function turboCheck(){
    window.alert("hello world");
    if (!turboCheckbox.checked) {
        window.alert("hello");
        speed = 50;
    } else {
      speed = 250;
    }
}

