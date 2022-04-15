var a = 10;

function b(){
    var x = 15;
}

console.log(a);
console.log(window.a);
console.log(this.a);

// error
console.log(x)