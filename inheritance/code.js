String.prototype.filter = function(arr){
    let words = this.split(" ");
    let filteredResult = words.filter((word) => {
        return !(arr.includes(word));
    });

    return filteredResult.join(" ");
}


Array.prototype.bubbleSort = function(){
    
for(var i = 0; i < this.length; i++){
    
    // Last i elements are already in place  
    for(var j = 0; j < ( this.length - i -1 ); j++){
        
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(this[j] > this[j+1]){
            // If the condition is true then swap them
            var temp = this[j]
            this[j] = this[j + 1]
            this[j+1] = temp
        }
    }
    }
    // Print the sorted array
    return this;
}



