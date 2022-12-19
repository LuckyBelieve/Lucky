
function mynonvowel(word){
    let anyletters=''
    for(let x=0;x<word.length;x++){
        if(word[x].toLowerCase()=='a' || word[x].toLowerCase()=='o' || word[x].toLowerCase()=='i' || word[x].toLowerCase()=='u' || word[x].toLowerCase()=='e' ){
            continue;
        }
        else{
            anyletters+=word[x];
            
        }
    }
    return anyletters;
}
console.log(mynonvowel('believe'))

function reversing(word){
    let myreversed=''
    for(let i=word.length-1;i>=0;--i){
        myreversed+=word[i];

    }
    return myreversed;
}
console.log(reversing('believe'))

function myreversedwith(word){
    let mymona=mynonvowel(word);
    let myreverdo=reversing(mymona);
    return myreverdo
}
console.log(myreversedwith('academy'))

function easythings(word) {
    let myintel=''
    for(let i=word.length-1;i>=0;--i){
        myintel+=word[i];
    }
    return myintel;

}
 console.log(easythings('academy'));

 console.log('how to find the longest word among others');

 function mytricks(sentensetwo){

    let mysentense=sentensetwo.split(" ");
    let maxleng=0;
    let maxword;

    for(let i=0;i<mysentense.length;i++){
        if(mysentense[i].length>maxleng){
            maxleng=mysentense[i].length;
            maxword=mysentense[i];
        }
    }
    return maxword;

 }
 console.log(mytricks('this is very intresting'))

 let newObject={
    name:'ineza lucky believe',
    location:'Huye district',
    birthdate:'13/7/2005',
    displayinfo:function myabout(){
        console.log(`my names are ${newObject.name}, I'm from ${newObject.location} and i was born on ${newObject.birthdate} thank you that was my introduction`)
    }
 }
newObject.displayinfo(); 