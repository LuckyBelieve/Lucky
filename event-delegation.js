//event delegation

document.querySelector('#football').addEventListener('click',function(e){
    console.log('football is clicked!');
    const target = e.target;
    // if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    // }
})
document.querySelector('#basketball').addEventListener('click',function(e){
    console.log('basketball is clicked!');
    const target = e.target;
    // if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    // }
})
document.querySelector('#boxing').addEventListener('click',function(e){
    console.log('boxing is clicked!');
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgray'
    }
})
document.querySelector('#tennis').addEventListener('click',function(e){
    console.log('tennis is clicked!');
    const target = e.target;
    // if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    // }
})
document.querySelector('#golf').addEventListener('click',function(e){
    console.log('golf is clicked!');
    const target = e.target;
    // if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    // }
})


//the use of very few codes to function the same task as the above codes


document.querySelector('#sports').addEventListener('click',function(e){
   console.log(e.target.getAttribute('id') + ' is clicked well !');
    
   const target = e.target;
   target.style.backgroundColor = 'white';
})