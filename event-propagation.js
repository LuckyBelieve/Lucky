//event propagation

window.addEventListener('click',function(){
     console.log('wondow');
},false)

document.addEventListener('click',function(){
    console.log("document");
},false)

document.querySelector('.div1').addEventListener('click',function(){
    console.log('div1');
},false)
document.querySelector('.div2').addEventListener('clicks',function(){
    console.log('div2');
},false)
document.querySelector('.btn').addEventListener('click',function(e){
    // e.target.innerText = 'click me again';
    console.log(e.target.innerText = 'clicked');
},false)