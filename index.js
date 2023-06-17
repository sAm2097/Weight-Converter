const kgbtn=document.getElementById('kg')
const pdbtn=document.getElementById('pound')
const input=document.getElementById('input')
let output=document.getElementById('output')

kgbtn.addEventListener('click',()=>{
   output.value =(input.value/2.205).toFixed(2) +'kg'
   console.log(output);
})
pdbtn.addEventListener('click',()=>{
   output.value =(input.value*2.205).toFixed(2)+'pound'
   console.log(output);
})