//###################################//
let bitcoinRun=false; 



function submitName(){ 
let name = document.getElementById('myinput').value;
  if(!name){return console.log('critical name error');}
    if(name == "DoyoufeelitMRKrabs"){ return uLDevMode();}
popUp(name, 'I feel bad i can\'t offer you anything in return'+
' but my undying love and gratidue <3');

  
}

function uLDevMode(){
    Document.getElementById('DevArea').style.display="";
}
//Cookie//
//While working on input, break inputs first befor log//
var tbox = document.getElementById("flip");

var web= document.getElementById("Bweb");
var ref=document.getElementById("Dhands");


function logCookie() {
    setCookie();
    submit();
}
        function setCookie() {
        let username = document.getElementById('myinput').value;
        if (username == ("XXX")){return extendProfile();}
        document.cookie += username ;
        
        console.log('input:' +  username + ':');     
        }
     
        function submit() {
        Boolean = false;
        var username = document.getElementById('myinput').value; 
        const CertSelection = [ "a", "b", "c", "sample" ];
        if (username.includes = CertSelection ){
            
            console.log(Boolean);
            console.log(setCookie, username, { expires: 7, path: ''});
            return false;
            }
        else  {  
            console.log('Confrimed.username=:' + username + ':');
            console.log(Boolean);
            return true;
        }
    } 

//************************//
// Change Id of balls//
var bt1 = document.getElementById("Git");
var bt2 = document.getElementById("Stack");

var bl1 = document.getElementById("Twit");
var bl2 = document.getElementById("FB");
let y = 0;

function allLinks(){
if (y==0) {
    bt1.id = "reverse";
    bt2.id = "reverse2";
    y+=1;
}
else if (y==1){
    bt1.id="Git";

    bl2.id="FB";

    y-=1;
}
}

function countforbitcoin(){

if( bitcoinRun=true)return Log('BTC already running', 'Ko');
    bitcoinRun=true;

   setTimeout(() => { 
    
    let img = document.getElementById("locko");  
    let x =img.backgroundImage;
    if(img.style.backgroundImage){
        x='url(i/₿.png)';
        console.warn('Profile Image has been helf for five seconds')
    }
    else {  
        Log(('Background not held for five second'+x),'count for ₿');
        }
return bitcoinRun=false;  }, 5000);

}

// Javascript for business card//
// Compile me nice please <3 //

function randomNum(min,max){
    if(min==undefined||max==undefined){min =0; max = 17;}
  return Math.floor(Math.random() * (max - min) ) + min;
}

function generateHex(hexWidth,hexLength){
let hexArray= "0123456789abcdef";  
let hexResult=[[],[],[]];  
if(!hexLength || !hexWidth){hexLength = 8; hexWidth=1; console.warn('Use Hex length and width when generating hex ');}
 let hex;   
for(let i = 0; i< hexWidth; i++){
  hex = []   ;
        hex.push(randomNum(0,9)); 
   for(let x=1; x < (hexLength); x++){
    let Res= hexArray[(randomNum(0,16))];
    hex.push(Res);
   
    }
   hexResult = hex.join('')

   }
   
console.log('First Hex: '+hexResult[0]+':  Final hex: '+hexResult[hexResult.length-1]+":  Length: "+[(hexResult.length)]
+"\n:last HASH: "+hex.join('')+'\n::>Hex Result<:: '+hexResult);

return [hexResult]
}
function test(arg1){
    test2(arg1);
}
function test2(arg1){
    alert(arg1);
}

function CreatePage2(name){
 
//Elements and text nodes
 let DIV = document.createElement('div');let IMG =document.createElement('img');
 let H5 = document.createElement('h5'); let x = (document.createTextNode(name)); 

 DIV.setAttribute('class', 'PictureBox');
 setAttributes(IMG,{'class': 'PictureBoxImg', 'id': 'PictureBoxImg', });

H5.appendChild(x); DIV.appendChild(H5); 
DIV.appendChild(IMG); 

if(name.includes("BloodWorks")){
    let QR = document.createElement('button'); QR.appendChild((document.createTextNode('Generate QR')));
    setAttributes(QR,{'id': 'QRbtn', 'onclick' : "RotatePB(\'QR\')"});
    IMG.setAttribute('src', 'i/BusinessImages/BloodWebM.png');
    DIV.appendChild(QR);}

    IMG.setAttribute('src', 'i/BusinessImages/BloodWebM.png');
   
Get.Page2.appendChild(DIV);
Get.Page2.style.display=""; setExtendTarget('Def');
}

function setExtendTarget(func, param){
    if(!func || func == 'Def'){ return Get.Extndbtn.setAttribute('onclick',"closeExtProfile()");
}
Get.Extndbtn.setAttribute('onclick',func+"('"+param+"')");

}

function closeExtProfile(){
    Get.Page2.style.display="none";
    Get.Page2.innerHTML="";
    Get.Extndbtn.style.transform="rotate(0deg)";
    
    if(Get.Main.style.display == "none"){
        setExtendTarget('extendProfile', 'THE BLOODWORKS');
        return
    }
    setExtendTarget('extendProfile','The Journey So far..'); 
}
  
function RotatePB(type, direction){
let PBR = 'PBrotate'; let PB = document.getElementById('PictureBoxImg');
    if(PB.classList.contains(PBR)){PB.classList.remove(PBR);}
    PB.classList.add(PBR);
    
    if(type=="QR"){ PB.src="i/BusinessImages/BwebQR.png";
    document.querySelector("h5").innerText="The BloodWorks©";
    return document.getElementById("QRbtn").remove();}
    
}


// DLink debugging only,//
//eventually compile me to a single function,this is messy AF//

//******************************//
// PROGRESS BAR//
var Hbar = document.getElementById('BarH');
var Zbar = document.getElementById('BarZ');



function plus5() {
    
    Zbar.value += 5 ;
    
    if (Zbar.value == 50) {
        console.log('!Value has reached 50!')
        Hbar.innerText = 'Hey, stop that' ;
    }
    if (Zbar.value == 100) {
        console.log('!Value has reached 100!')
        Hbar.innerText = 'I said STOP' ;
    }
    if (Zbar.value == 200) {
        console.log('!Value has reached 200!')
        Hbar.innerText = 'BRO...' ;
        surprise.id = "Surprise";
        surp.id="surp";
    }
    if (Zbar.value == 300) {
        console.log('!Value has reached 300!')
        Hbar.innerText = ' You"re such a cuck' ;
    }
    if (Zbar.value == 400) {
        console.log('!Value has reached 400!')
        Hbar.innerText = 'What do you think is going to happen?' ;
    }
    if (Zbar.value == 500) {
        console.log('!Value has reached 500!')
        Hbar.innerText = 'Im not talking to you anymore';
        gama.id = "Game";
        gameim.id="Game"
    }
    if (Zbar.value >= 750 ){
        console.log('!Value has reached 750!')
        Hbar.innerText = 'Ok, im begging you, please stop.. you need to halt this infraction' ;
    } 
    if (Zbar.value >= 1000) {
        console.log('!Value has reached 1000, should probs level up!')
        Hbar.innerTex = '(Delete the World)' ;
        masterunlock();
    }
}
function masterunlock(){
    document.getElementById("HT").style.opacity=1; 
    document.getElementById("HB").style.opacity=1; 
    
   
}
function resetbox(){
    tbox.innerText=" I thouroghly enjoy coding as it allows for digital freedom of expression";
    tbox.style.fontFamily="'Akronim', cursive"; tbox.style.textDecoration="";
    tbox.style.fontSize="3.5vh";
}



// Master catalugoe   swaps targets and backgrounds//
var alpha = document.getElementById('image-slide1');
//Beta - prog bar removed fo easier code //
var charlie = document.getElementById('href-link1');
var delta = document.getElementById('href-link1');
let x = 0;

console.log("SHitrey Master has started, --4seconds");
function shifteryMast() {
    if (x == 0) {
      alpha.style.backgroundImage = "url(../../Pictures/speed.png)";
      charlie.href = "https://coinmarketcap.com" ; 
      delta.innerText = "CoinMarketCap";
      
      console.log("Shiftrey Master -1");
    }
   else if (x == -1) {
       x = 0;
   }
    else if (x == 1) {
        alpha.style.backgroundImage = "url(i/Hwiki.jfif)";        charlie.href = "https://wikipedia.org";
        delta.innerText = "WikiPedia";  
        console.log("Shiftery Master - 2");
    }
    else if (x == 2) {
        alpha.style.background = "url(i/11.jfif)";
        charlie.href = "../../" ; 
        delta.innerText = "no3";
        console.log("Shiftery Master -3");
    }
    else if (x == 3) {
        alpha.style.background = "url(i/git.png)";
        charlie.href = "https://github.com/blood-web" ; 
        delta.innerText = "Github";
        console.log("Github");
    }
    else if ( x == 4) {
        alpha.style.background = "url(i/anon.png)";
        charlie.href = "https://coinmarketcap.com" ; 
        delta.innerText = "no5";
        console.log("Shiftrey Master -5");
    }
    else if ( x == 5) {
        alpha.style.background = "url(i/pumpkin.png)";
        charlie.href = "https://coinmarketcap.com" ; 
        delta.innerText = "Inner text swap - Omega";
        console.log("Shiftery Master -Omega");
        x = 5;
    }


}

//Timing function for shiftery script//

/*setInterval(myTimer, 4000)
function myTimer() {
    shiftery();
    console.log('4S - Shiftrey');
}*/
 let BackgroundZ = document.documentElement.style.getPropertyValue('--BoxMain-Background');
   
// Background shifter - SHIFTREY //
//Else if LOOP, 0-5-0//
const SC={'key':'notrunning',
            'Loop': 0}
 

function shifteryCount(){
if (SC.key=='running') return;
    SC.key='running';
    const x=SC.Loop;
    setTimeout(() => {
        callshiftery();
    if(!x<SC.Loop){SC.key='notrunning'
        console.warn('Shift'); 
        SC.Loop=0; callshiftery(1);  }
    else { SC.key='Xnotrunning';
     callshiftery(); }
     console.log(SC.key);
}, 5000);
}
function callshiftery(n){
    if(n)return shiftery();
    setTimeout(() => {
        shifteryCount();
    }, 50);
}

function shiftery() {
let palletes =[ 
   
    "linear-gradient( 40deg, #ddaadd, #11ffad)",
    "linear-gradient( 240deg, #11aa55, #29ace0)",
    "linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)",
    "radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)",
    "repeating-conic-gradient(red 10%, yellow 20%) ",
    "linear-gradient(to bottom, #6666ff 0%, #3333ff 90%, transparent 100%) ",
    "linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96) ",
    "radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)",
    "repeating-conic-gradient(red 10%, yellow 20%)",                                                      
    "repeating-radial-gradient( #0bd3d3, #f890e7, #ffffff, #d0d0d0, #000000)"
]
document.documentElement.style.setProperty('--BoxMain-Background', palletes[SC.Loop]);
console.log(' Shiftery changing backgrounds to #:'+SC.Loop);
SC.Loop++; callshiftery();                                     
if (SC.Loop > 9) return SC.Loop=0;
   

}