//###################################//

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


 let BackgroundZ = document.documentElement.style.getPropertyValue('--Home-Background');
   
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
document.documentElement.style.setProperty('--Home-Background', palletes[SC.Loop]);
console.log(' Shiftery changing backgrounds to #:'+SC.Loop);
SC.Loop++; callshiftery();                                     
if (SC.Loop > 9) return SC.Loop=0;
   

}