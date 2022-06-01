//Number
function getrandom(){
    let min =parseInt(document.getElementById('RNmin').value);
    let max =parseInt(document.getElementById('RNmax').value);
    if(!min || !max) return console.error('Specifiy min/max')
    let Result=GetRandomNumber(min, max);

    spindie(Result);
}
let die = document.getElementById('DiceContainer');

function spindie(end, spintime){ 
    die.classList.add('DiceSpin');
    changedieNumber(end);
}

let dieInt= 1000;
function changedieNumber(end){
 //6 Die Int   
        setTimeout(() => {
            die.innerText=GetRandomNumber(1,6);
            setTimeout(() => {
                die.innerText=GetRandomNumber(1,6); 
                setTimeout(() => {
                    die.innerText=GetRandomNumber(1,6); 
                    setTimeout(() => {
                        die.innerText=GetRandomNumber(1,6); 
                        setTimeout(() => {
                            die.innerText=GetRandomNumber(1,6); 
                            setTimeout(() => {
                                die.innerText=GetRandomNumber(1,6); 
                                die.innerText=end;
                                die.style.border="2vmin double goldenrod";
                                die.classList.remove('DiceSpin');
                            }, dieInt);
                        }, dieInt);
                    }, dieInt);
                }, dieInt);
            }, dieInt);
        },dieInt);
}
function GetRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Hex

function GetHex(){
let hex="#"+GetRandomHex();

let container=document.getElementById('HexContainer');
container.style.backgroundColor=hex;
document.getElementById("Hex").innerText=hex;
console.log("Hex has been Generated: #"+hex);


}

function GetRandomHex(){
let hex =[]; let hexResult=[];
let hexArray= "0123456789abcdef";

if(document.getElementById('Hex8').checked){HexLength = 8;}
else {HexLength=6;}
    
for(let x=0; x < (HexLength); x++){
    let Res= hexArray[(GetRandomNumber(0,16))];
    hex.push(Res);
}

    hexResult=hex.join('');
    return hexResult;
}
