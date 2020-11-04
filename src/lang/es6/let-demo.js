function foo() {
    let x = 10;
    if(true) {
        let x = 5;
        console.log("01.Printing the value of x =>",x);
        // let x = 15;  // x already defined in the scope, so this will throw an error.
        console.log("02.Printing the value of x =>",x);
    }
    console.log("03.Printing the value of x =>",x);
}

foo();