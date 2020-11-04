var a = 10;

function foo() {
    console.log("01.Printing value of a =>",a);
    var a = 5;
    console.log("02.Printing value of a =>",a);
}

foo();