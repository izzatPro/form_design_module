const btn = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');
const a = document.querySelector('a');
// btn.addEventListener('click',(e)=>{
//     console.log(e.target);
// });
// overlay.addEventListener('click',(e)=>{
//     console.log(e.currentTarget);
//     console.log(e.type);
// });
// a.addEventListener('click', (e)=>{
//     e.preventDefault();
// });
let i = 0;
const deleteFunc = (e) =>{
    i++;
    alert('Zdarova Zaebal');
    if( i == 1) {
        e.target.removeEventListener('click',deleteFunc);
        i--
    }

}
btn.forEach(item =>{
    item.addEventListener('click',deleteFunc);
});