const values = [5,10, 12, 15, 18];

for(var i = 0; i < values.length; i++) {
    setTimeout(function(){
       // console.log("Printing values, index ->",i," and the value is ", values[i]);
    });
}
// ***** Output *****
// Printing values, index -> 5  and the value is  undefined
// Printing values, index -> 5  and the value is  undefined
// Printing values, index -> 5  and the value is  undefined
// Printing values, index -> 5  and the value is  undefined
// Printing values, index -> 5  and the value is  undefined

// Solution-01
// change var to let
for(let i = 0; i < values.length; i++) {
    setTimeout(function(){
       // console.log("Printing values, index ->",i," and the value is ", values[i]);
    });
}


// Solution-02
// Using Closure
for(let i = 0; i < values.length; i++) {
    setTimeout(function(x){
        return () => console.log("Printing values, index ->",x," and the value is ", values[x]);
    }(i),3000);
}

// Output
// Printing values, index -> 0  and the value is  5
// Printing values, index -> 1  and the value is  10
// Printing values, index -> 2  and the value is  12
// Printing values, index -> 3  and the value is  15
// Printing values, index -> 4  and the value is  18

// Solution-03
// Using Anonymous function
for(let i = 0; i < values.length; i++) {
    setTimeout(function(){
        (function(){
            console.log("[Anonymous function] - Printing values, index ->",i," and the value is ", values[i]);
        })()
    },3000);
}

// [Anonymous function] - Printing values, index -> 0  and the value is  5
// [Anonymous function] - Printing values, index -> 1  and the value is  10
// [Anonymous function] - Printing values, index -> 2  and the value is  12
// [Anonymous function] - Printing values, index -> 3  and the value is  15
// [Anonymous function] - Printing values, index -> 4  and the value is  18