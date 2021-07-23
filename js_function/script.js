function max(a, b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else{
        return 0;
    }
}

function maxOfThree(a, b, c){
    let arr = [];
    let max = 0;
    arr.push(a, b, c);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}


function isVowle(a){
    let vowles = ["a", "e", "i", "o", "u"];
    if(vowles.includes(a)){
        return true;
    }else{
        return false;
    }
}

function sum(arr){
    let sum_ = 0;
    for(let i = 0; i < arr.length; i++){
        sum_ += arr[i];
    }

    return sum_;
}

function multiple(arr){
    let mult = 1;
    for(let i = 0; i < arr.length; i++){
        mult *= arr[i];
    }

    return mult;
}


function reverse(str) {
    let splitStr = str.split("");

    let reverseStr = splitStr.reverse();

    return reverseStr.join("");
    
}


function findLongestWord(arr){
    let max = 0;
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        let len = arr[i].split("").length;
        if(len > max){
            max = len;
            result = i;
        }

    }

    return arr[result];
}


function findLongestWords(arr, min){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let len = arr[i].split("").length;
        if(len > min){
            result.push(arr[i]);
        }

    }

    return result;
}


function multiplyEachElementBy10(arr){
    let result = [];
    result = arr.map(function(elem, i, array){
        return elem * 10;
    });

    return result;
}

function elementsEqualTo3(arr){
    let result = [];
    result = arr.filter(function(elem, i, array){
        return elem === 3;
    });

    return result;
}

function productOfAllElements(arr){
    let result = [];
    result = arr.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });

    return result;
}


function myFunctionTest(expected, test){
    if(expected === test){
        return " TEST SUCCEEDED ";
    } else{
        return " TEST FAILED EXPECTED " + expected + " FOUND " + test;
    }
}


function myFunctionTestForArrays(expected, test){
    if(JSON.stringify(expected)==JSON.stringify(test)){
        return " TEST SUCCEEDED ";
    } else{
        return " TEST FAILED EXPECTED " + expected + " FOUND " + test;
    }
}



console.log("Expected output of max(10, 20) is 20: " + myFunctionTest(20, max(10, 20)));
console.log("Expected output of maxOfThree(10, 20, 30) is 30: " + myFunctionTest(30, maxOfThree(10, 20, 30)));
console.log("Expected output of isVowle(\"i\") is true: " + myFunctionTest(true, isVowle("i")));
console.log("Expected output of sum([3, 5, 2, 6]) is 16: " + myFunctionTest(16, sum([3, 5, 2, 6])));
console.log("Expected output of multile([3, 5, 2, 6]) is 180: " + myFunctionTest(180, multiple([3, 5, 2, 6])));
console.log("Expected output of reverse(\"hello\") is : \"olleh\"" + myFunctionTest("olleh", reverse("hello")));
console.log("Expected output of findLongestWord([\"Texas\", \"Newyork\", \"California\"]) is \"California\": " + myFunctionTest("California", findLongestWord(["Texas", "Newyork", "California"])));
console.log("Expected output of findLongestWords([\"Texas\", \"Newyork\", \"California\, \"DC\"], 7) is [\"California\"]: " + myFunctionTestForArrays(["California"], findLongestWords(["Texas", "Newyork", "California", "DC"], 7)));
console.log("Expected output of multiplyEachElementBy10([1, 2, 3, 4]) is [10, 20, 30, 40]: " + myFunctionTestForArrays([10, 20, 30, 40], multiplyEachElementBy10([1, 2, 3, 4])));
console.log("Expected output of elementsEqualTo3([1, 2, 3, 4, 3, 5]) is [3, 3]: " + myFunctionTestForArrays([3, 3], elementsEqualTo3([1, 2, 3, 4, 3, 5])));
console.log("Expected output of productOfAllElements([1, 2, 3, 4, 5]) is 120: " + myFunctionTest(120, productOfAllElements([1, 2, 3, 4, 5])));




