

const form = document.querySelector('#todoForm');
const todoOut = document.querySelector('#todoOut');
const square = document.querySelector('#square');

let toDoVar;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // todoOut.innerHTML = '';

    let toDoVar = document.getElementById("todoNote").value

    let res = []; 
    res.push(toDoVar);
    todoOut.innerHTML += res.map(n => `<span>${n}</span>`);

    e.target.reset();
});


todoOut.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.style.background = `rgb(175, 164, 8)`
    e.target.style.textDecoration = `line-through`
});

todoOut.addEventListener('dblclick', (e) => {
    console.log(e.target);
    e.target.style.background = ``
    e.target.style.textDecoration = ``
});

//--------- FUNGERAR TAR BORT OUTPUT -------------
todoOut.addEventListener('contextmenu', (e) => {
    console.log(e.target);
    e.target.remove();
});


// ------------------square----------------------
// square.addEventListener('mousemove', e => {
//     // console.log(e);
//     // console.log(e.offsetX);
//      square.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`
// })




// form['todoNote'].addEventListener('focus', function(e){
//     console.log('focus');
//     this.classList.add('focus');
// })

// form['todoNote'].addEventListener('blur', function(e){
//     console.log('blur');
//     this.classList.add('blur');
// })



// form['todoNote'].addEventListener('change', (e) => {
//     console.log(e.target.value);
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     todoOut.innerHTML += `<p>${e.target[0].value}</p>`
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
