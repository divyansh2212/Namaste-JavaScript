console.log(x);  
console.log(getName);
console.log(getName2);
getName();

// will throw a error
// getName2()

var x = 7;

function getName(){
    console.log("Namaste JS!");
}

var getName2 = () => {
    console.log("Second Namaste!");
}

// will not throw a error
getName2()

// console.log(x);
// console.log(getName);
// getName();