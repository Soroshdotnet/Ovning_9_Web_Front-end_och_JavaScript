// Bish Bosh Bish-Bosh

// showMessage("HEEEEEEEJJJ");

// const p = document.querySelector('#test')
// document.getElementById("test").innerHTML

const form = document.querySelector('#divisionForm')
const output = document.querySelector('#output')


//---------- Variabler -----------

let bish = '"Bish"';
let bosh = '"Bosh"';
let bibo = '"Bish-Bosh"';

let loopTalVar = 100;
let divisionsTal1Var = 3;
let divisionsTal2Var = 4;

let test = document.getElementById('test');
function showMessage(message) {
    test.innerHTML += message;
    /* document.getElementById('test2').innerHTML = message; */
}



// ------ LÄS ANVÄNDARE ----------
// form.addEventListener('submit', (e) => {
// e.preventDefault();

// output.innerHTML += `<p>${e.target[0].value}</p>`
// e.target.reset(); //eller form.reset(); återställer fält 
// })

form.addEventListener('submit', function(e) {
    e.preventDefault();
    output.innerHTML = '';

    let loopTalVar = document.getElementById("loopTal").value
    let divisionsTal1Var = document.getElementById("divisionsTal1").value
    let divisionsTal2Var = document.getElementById("divisionsTal2").value

  let res = []; 
    for (i = 1; i <= loopTalVar; i++) {
        if (i % divisionsTal1Var == 0 && i % divisionsTal2Var === 0)
            res.push(bibo + ' ');
        else if (i % divisionsTal1Var == 0)
            res.push(bish + ' ');
        else if (i % divisionsTal2Var == 0)
            res.push(bosh + ' ');
            else
        res.push(i + ' ');
    }

    output.innerHTML += res.map(n => `<span>${n}</span>`);
    // test.innerHTML = res;

    e.target.reset();
    
});


// --------  BISHBOSH ON CARD --------
function bishBosh() {

    let res = []; 
    for (i = 1; i <= loopTalVar; i++) {
        if (i % divisionsTal1Var == 0 && i % divisionsTal2Var === 0)
            res.push(bibo + ' ');
        else if (i % divisionsTal1Var == 0)
            res.push(bish + ' ');
        else if (i % divisionsTal2Var == 0)
            res.push(bosh + ' ');
            else
        res.push(i + ' ');
    }

    test.innerHTML += res.map(n => `<span>${n}</span>`);
    // test.innerHTML = res;

    e.target.reset();
}
bishBosh();






// form['loopTal'].addEventListener('change', (e) => {
//     console.log(e.target(loopTalVar).value);
// })
// form['divisionsTal1'].addEventListener('change', (e) => {
//     console.log(e.target(divisionsTal1Var).value);
// })
// form['divisionsTal2'].addEventListener('change', (e) => {
//     console.log(e.target(divisionsTal2Var).value);
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     output.innerHTML += `<p>${e.target[0].value}</p>`
//     e.target.reset(); //eller form.reset(); återställer fält 
// })

// ------ END LÄS ANVÄNDARE ----------



// form['loopTal'].addEventListener('focus', function(e){
//     console.log('focus');
//     this.classList.add('focus');
// })

// form['loopTal'].addEventListener('blur', function(e){
//     console.log('blur');
//     this.classList.add('blur');
// })

// form['loopTal'].addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     output.innerHTML += `<p>${e.target[0].value}</p>`
//     e.target.reset(); //eller form.reset(); återställer fält 
// })



//----- START Räknar klick & tar bort output ---
// let counter = 1;

// form.addEventListener('click', (e) => {
//    output.innerHTML += `
//    <div>
//    <p>Hej: ${counter++} </p>
//  </div>
   
//    `
// })

// output.addEventListener('click', (e) => {
//      console.log(e.target);
//      e.target.remove();
// })
//----- END Räknar klick & tar bort output ---


// --------  BISHBOSH ON CONSOLE --------

// for (i = 0; i <= 100; i++) {
//     if (i % 3 == 0)
//         console.log(bish)
//     if (i % 4 == 0)
//         console.log(bosh)
//     if (i % 3 == 0 && i % 4 == 0)
//         console.log(bibo)
//     console.log(i)
// }
