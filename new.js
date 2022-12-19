function myWord(word){
    let newlife=''
    for(let i=0;i<word.length;i++){
        let myworld=word[i].toLowerCase();
            if(myworld=='a' || myworld=='i' || myworld=='u' || myworld=='e' || myworld=='o'){
                continue;

            }
            else{
             newlife+=word[i];   
            }
    }
    return newlife;
}
console.log(myWord('believe'))

console.log("we're going to reverse the string ")

function reverseIt(word){
    let reversedone='';
    for(let i=word.length-1;i>=0;--i){
        reversedone+=word[i];
    }
    return reversedone;
}
console.log(reverseIt('believe'))

function allCombined(word){
    let re=myWord(word);
    let we=reverseIt(re);
    return we;
}
console.log(allCombined('academy'));

for(let i=0;i<3;i++){
    console.log('lucky believe');
}

console.log('finding the longest sentense in many words');

 function bigone(word){
    let myarray=word.split(" ");
    let biglength=0;
    let bigword;

    for(let i=0;i<myarray.length;i++){
        if(myarray[i].length>biglength){
            biglength=myarray[i].length;
            bigword=myarray[i];
        }
    }
     return bigword;
 }
 console.log(bigone('there are many things in there '));

  let newboy={
    name:'Ineza Lucky Believe',
    mother:'MPATSWENIMANA Marie Jeanne',
    father:'HABIMANA Slyvain',
    sister:'ABEZA Mary Reply Hpappiness',
    brother:'NEZA Allain Frank',
    location:'HUYE district',
    displayinfo:function easy(){
        console.log( `my favorite Name is ${newboy.name.split(" ")[1]}`)
        // console.log(`my names are ${newboy.name},my mother's names are ${newboy.mother},my father's names are ${newboy.father}, my sister's names are ${newboy.sister} and my brother's names are ${newboy.brother} , we as a family; we live in ${newboy.location} thank you `)
    }
  }
  newboy.displayinfo();

  const metime= new Object();
  metime.name='ineza lucky believe';
  metime.birth='13/7/2005';
  metime.displayinfo=function here(){
    console.log(`my names are ${metime.name} and I was born in ${metime.birth} thank you very much`);
  }

  metime.displayinfo();