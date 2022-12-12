// Bish Bosh Bish-Bosh

// showMessage("HEEEEEEEJJJ");

// const p = document.querySelector('#test')
// document.getElementById("test").innerHTML


let bish = 'Bish';
let bosh = 'Bosh';
let bibo = 'Bish-Bosh';

//-- bisBish function få upp den till card


document.getElementById('test');
// document.getElementById('test2').innerHTML;
for (i = 0; i <= 100; i++) {
    if (i % 3 == 0)
        document.writeln(bish);
    else if (i % 4 == 0)
        document.writeln(bosh);
    else if (i % 3 == 0 && i % 4 == 0)
        document.writeln(bibo);
    document.writeln(i);
}





function bishBosh() {

    // kod här
}

bishBosh();



// --------  BISHBOSH ON CARD --------

function showMessage(message) {
    document.getElementById('test').innerHTML = message;
    /* document.getElementById('test2').innerHTML = message; */
}

for (i = 0; i <= 100; i++) {
    if (i % 3 === 0) 
    showMessage(bish);
    else if (i % 4 === 0) 
    showMessage(bosh);
    else if (i % 3 === 0 && i % 4 === 0) 
    showMessage(bibo);
    showMessage(i);
}



// --------  BISHBOSH ON CONSOLE --------

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0)
        console.log(bish)
    if (i % 4 == 0)
        console.log(bosh)
    if (i % 3 == 0 && i % 4 == 0)
        console.log(bibo)
    console.log(i)
}


// FUNGERAR

// const test = document.querySelector('#test')
// document.getElementById("test").innerHTML

// let bish = 'Bish'
// let bosh = 'Bosh'
// let bibo = 'Bish-Bosh'

// for (i = 1; i < 101; i++) {
//     if (i % 3 == 0) 
//     document.writeln(bish)
//     if (i % 4 == 0) 
//     document.writeln(bosh)
//     if (i % 3 == 0 && i % 4 == 0) 
//     document.writeln(bibo)
//     document.writeln(i)
// }


const form = document.querySelector('#loginForm')

form['firstName'].addEventListener('focus', function (e) {
    console.log('focus');
    this.classList.add('focus');
})

