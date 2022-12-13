

const form = document.querySelector('#todoForm')
const todoOut = document.querySelector('#todoOut')

let toDoVar = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    todoOut.innerHTML = '';

    let toDoVar = document.getElementById("todoNote").value

    let res = []; 
    res.push(toDoVar + ' ');
    todoOut.innerHTML += res.map(n => `<span>${n}</span>`);

    e.target.reset();
});

todoOut.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove();
});





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
//     todoOut.innerHTML += `
//    <div>
//    <p>Hej: ${counter++} </p>
//  </div>
   
//    `
// })

// todoOut.addEventListener('click', (e) => {
//      console.log(e.target);
//      e.target.remove();
// })
//----- END Räknar klick & tar bort output ---
