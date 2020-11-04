function foo() {
    const x = 10;
    if(true) {
        // x = 5; // [Error] Assignment to const variable.
        const x = 5;
        console.log("01.Printing the value of x =>",x);
    }
    console.log("02.Printing the value of x =>",x);
}

foo();

//////////////////////////////////////////////////////////////////////////////////
function bar() {
    const x = {
        name : 'Bob'
    };
    if(true) {
        // x.name = 'Alice'; // [Error] x is not defined.
        // console.log("01.Printing the value of x =>",x.name); // [Error] x is not defined.
        const x = {
            name : 'Tim'
        };
        console.log("02.Printing the value of x =>",x.name); 
    }
    console.log("03.Printing the value of x =>",x.name);
}

bar();