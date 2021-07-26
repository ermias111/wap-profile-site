window.onload = setup;

let txtArea;
let listOfFont;
let listOfAnimation;
let timer;
let currentMovie;
let moviePixels;
let turboCheckbox;
let speed;

let stopBtn;
let startBtn;

function setup(){
    "use strict";
    
    turboCheckbox = document.getElementById("turbo");
    txtArea = document.getElementById("animAreaTxtA");
    listOfFont = document.getElementById("fontSizeSelect");
    listOfAnimation = document.getElementById("animSelect");
    currentMovie = ANIMATIONS[listOfAnimation.value];
    moviePixels = currentMovie.split("=====\n");
    stopBtn = document.getElementById("stopBtn");
    startBtn = document.getElementById("startBtn");
    speed = 250;
    
    turboCheck();
    stopOnClick(); 
    startOnClick();
    chooseAnimation();
    changeFontSize();

    stopBtn.disabled = true;
}




function stopOnClick(){
    // let txtArea = document.getElementById("animAreaTxtA");
    document.getElementById("stopBtn").onclick = function(){
        clearInterval(timer);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        
    }
}

function startOnClick(){
    document.getElementById("startBtn").onclick = function(){
        startMovie();
        if(listOfAnimation.value !== "blank"){
            
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }
        
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

        startBtn.disabled = false;
        stopBtn.disabled = true;
        // speed = 250;
    }
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


