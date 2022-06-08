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

function generateHex(hexWidth,hexLength){
let hexArray= "0123456789abcdef";  
let hexResult=[[],[],[]];  
if(!hexLength || !hexWidth){hexLength = 6; hexWidth=1; console.warn('Use Hex length and width when generating hex ');}
let hex;   
for(let i = 0; i< hexWidth; i++){
    hex = [];
    hex.push(randomNum(0,9)); 
   for(let x=1; x < (hexLength); x++){
    let Res= hexArray[(randomNum(0,16))];
    hex.push(Res);
}
   hexResult = hex.join('')

   }
//Hex Debug
if (Debug.Hex==true){   
    console.log('First Hex: '+hexResult[0]+':  Final hex: '+hexResult[hexResult.length-1]+":  Length: "+[(hexResult.length)]
    +"\n:last HASH: "+hex.join('')+'\n::>Hex Result<:: '+hexResult);
}

return [hexResult]
}

/*
Test Results: 
1. Args can be passed through multiple functions
2. Args can be thrown with symbols {num = (num)+(-num2)= num-num2}

*/

function test(arg1,arg2){
    arg1=arg1+arg2;
    test2(arg1);
}
function test2(arg1){
    alert(arg1);
}

let lBTN = Create.Carousel.Leftbtn;
let rBTN = Create.Carousel.Rightbtn;

function CreatePage2(name, ref){
if(!name || !Carousel.Names.includes((name)))return console.error('Create Page 2 ran without a name');
//Elements and text nodes
let DIV = Create.Div; let IMG = Create.Img; 
let H5 = document.createElement('h5'); let x = document.createTextNode(name); 

setAttributes(DIV, {'class': 'PictureBox', 'id':'PictureBox'});
setAttributes(IMG,{'class': 'PictureBoxImg', 'id': 'PictureBoxImg', });
 
    lBTN.append((document.createTextNode('Prev')));
    lBTN.append((document.createElement('br')),(document.createTextNode('<<')));
    setAttributes(lBTN,{'id':'Left-Carousel', 'onclick' : "imageCaro(-1)", 'style': 'left:12%'});

    rBTN.appendChild((document.createTextNode('Next'))); 
    rBTN.append((document.createElement('br')),(document.createTextNode('>>')));
    setAttributes(rBTN,{'id':'Right-Carousel','onclick' : "imageCaro(1)", 'style': 'right:12%'});

H5.appendChild(x); DIV.appendChild(H5); 
DIV.appendChild(IMG);
DIV.appendChild(lBTN);
DIV.appendChild(rBTN);

if(ref){ let name = document.createTextNode(Sponsors[0][0]);
let x = Carousel.Index; 
H5.append((document.createElement('br')),(name))
//DIV.prepend((document.createTextNode('PREPENDED')))
DIV.appendChild((document.createTextNode('Replace')))
}

Get.Page.Page2.appendChild(DIV);
Get.Page.Page2.style.display=""; 
setExtendTarget();
}

function setExtendTarget(param){
// if no func/def extBTN = Closepage2
if(!param){ return Get.Extndbtn.setAttribute('onclick',"closeExtProfile()");
    }
Get.Extndbtn.setAttribute('onclick',"extendProfile"+"('"+param+"')");
}

function closeExtProfile(){
let p2 =Get.Page.Page2;
   Get.Extndbtn.style.transform="rotate(0deg)"; 
   p2.querySelectorAll("*").forEach(p2 =>{p2.innerHTML=""; p2.remove();})
   p2.style.display="none"; 
   
    if(p2.style.display == "none"){
        setExtendTarget('THE BLOODWORKS');
    }
    setExtendTarget('Basic'); 
    
}
  

function Rotate(type){
let PBR = 'PBrotate'; let PB = document.getElementById('PictureBoxImg');    
   //Checks
if(type=="QR"){ 
    if(PB.classList.contains(PBR)){PB.classList.remove(PBR);}
    PB.classList.add(PBR);
    PB.src="i/BusinessImages/BwebQR.png";
    document.querySelector("h5").innerText="The BloodWorks©";
    document.getElementById("QRbtn").innerHTML="";
    return document.getElementById("QRbtn").remove();}

    //Carousel Function                    
}

function imageCaro(direction){
let min = Carousel.Min; let max = Carousel.Max;
let PB = document.getElementById('PictureBoxImg');
   
Carousel.Index = Carousel.Index + direction;
//check range
if(Carousel.Index > max || Carousel.Index < min){MinMaxCaro(min,max);}

let n=Carousel.Index; let target = Carousel.Target
let img = Carousel.Img.Basic[(n)];
PB.src= ('i/CarouselImages/'+target+'/'+img+'.png'); 

}
function MinMaxCaro(min, max){
let n = Carousel.Index;
if (n > max) return Carousel.Index = min ;
if (n < min) return Carousel.Index = max ;
        
}
// DLink debugging only,//
//eventually compile me to a single function,this is messy AF//

//******************************//



function masterunlock(){
    document.getElementById("HT").style.opacity=1; 
    document.getElementById("HB").style.opacity=1;    
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