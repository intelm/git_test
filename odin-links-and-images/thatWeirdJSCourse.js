console.log("hello, javascript world!");
console.log("thats great");
var x = "great";

var expression = "cat";

switch (expression) {
    case 'dog':
        console.log('🐈')
        break;

    case 'cat':
        console.log('🐕')
        break;

}

function outer() {

    const fish = 'Fishy';
    let count = 0;

    function inner() {
        count++
        return `${count} ${fish}`
    }

    return inner

}

const fun = outer()
console.log(fun())

const clown = {
    face: '🤡'
}

const ghost = {
    face: '👻'
}

function hello() {
    return this.face;
}

const result = hello();

console.log (result)