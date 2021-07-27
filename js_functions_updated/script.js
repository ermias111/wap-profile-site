window.onload = function(){
    'use strict';

    function sum(arr){
        return arr.reduce(function(accumulator, currentValue){
            return accumulator + currentValue;
        }, 0);
    }

    function multiply(arr){
        return arr.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        }, 1);
    }

    function reverse(arr){
        return arr.map((arg) => {
            return arg.split("").reverse().join("");
        })
    }

    function filterLongWords(arr, i){
        return arr.filter((str) => {
            return  str.length > i;  
        });
    }
}