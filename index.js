const incDec = document.querySelector('#counter');

let decrement = ()=>{
    let value = parseInt(incDec.innerText);
    value = value -1;
    incDec.innerText = value;
}
let increment = ()=>{
    let value = parseInt(incDec.innerText);
    value =value +1
    incDec.innerText =value;
    // console.log(value);

}