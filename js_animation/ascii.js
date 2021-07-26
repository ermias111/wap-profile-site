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

    stopBtn.disabled = true;
    startBtn.disabled = true;
    txtArea.disabled = true;

    document.getElementById("stopBtn").onclick = function(){
        clearInterval(timer);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        txtArea.disabled = true;
    };

    document.getElementById("startBtn").onclick = function(){
        startMovie();
        if(listOfAnimation.value !== "blank"){
            startBtn.disabled = true;
            stopBtn.disabled = false;
            txtArea.disabled = false;
        }
    };

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
        clearInterval(timer);

        startBtn.disabled = false;
        stopBtn.disabled = true;
    };


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

    listOfFont.onchange = function(){
        let val = listOfFont.value;
        switch(val){
            case "tiny":
                txtArea.style.fontSize = "7pt";
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