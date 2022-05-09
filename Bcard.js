//###################################//

function submitName(){

    let name = document.getElementById('myinput').innerText;

    if(!name){return console.log('critical name error');
    }
    if(name == "DoyoufeelitMRKrabs"){ return uLDevMode();}
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
        var username = document.getElementById('myinput').value;
        document.cookie += username ;
        
        console.log('input:' + document.cookie + username + ':');     
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
// Cycle imgs and links//
function rotate() {
    var al = document.getElementById('links') ;
    var be = document.getElementById('scale') ;
    var ch = document.getElementById('PbCertSelectionotate');
    var de = document.getElementById('proT') ;
    var de1 = document.getElementById('proT').innerText = "🚀";
    //Had to add background adjust to each & font alteration//
    if (ch.value == 0){
     al.href="https://coinmarketcap.com";
     be.style.background= "url(i/Pint.png)";
     be.style.backgroundSize="contain"
     de1;
     
     ch.value = 1;
     console.log('parse1-coinMc');   
    }
    else if (ch.value == 1){
    al.href="https://www.coinspot.com.au/my/wallets";
    be.style.background= "url(../../Pictures/Data/eggspot.png)";
    be.style.backgroundSize="cover";

    ch.value = 2;
    de1; 
    de.style.color ="#fff";
    de.style.fontFamily="Lobster";
    console.log('parse2-Coins-fontchange');   
   }
    //Added text color change to meet background//
    else if (ch.value == 2){
    al.href="https://github.com/Blood-web";

    be.style.background= "url(i/jj.jpg)";
    be.style.backgroundSize="contain";
    be.style.backgroundRepeat="no-repeat";
    
    ch.value = 3;
    de1;
    de.style.color ="#fff" ;
    
    console.log('parse3-Crypt');   
   }
}
// Creating canvas over Bcard//
function Canvas() {
    var x = document.createElement("CANVAS");
    var ctx = x.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 50, 200);
    document.body.appendChild(x);
  }

// Javascript for business card//
// Compile me nice please <3 //
function flip(){
    var TB = document.getElementById('hiden');
    if(TB.style.opacity==0){
    TB.style.opacity = 1 ;
    TB.style.zIndex = 1 ;
    }
    else {
        TB.style.opacity = 0 ;
        TB.style.zIndex = -1 ;
    }
}


//  COMPLETE me, func for all div balls calling to console   //
var namo = 
function (){ namo +'has been called '};

    if (Boolean = true) {
    console.log(Boolean) 
    }
   
//  IMG main on hover func//

function hoverimg(name){
    if(!name) return alert('Name is needed');
    if(document.documentElement.style.getPropertyValue('--rotation-direction')=="360deg"){  document.documentElement.style.setProperty('--rotation-direction', (-360+'deg'));}
    else{ document.documentElement.style.setProperty('--rotation-direction', (360+'deg')); }

    console.log(name+' Image  Has been hovered');

}

function startDrag(e) {
    // determine event object
    if (!e) {
      var e = window.event;
    }
  
    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;
  
    if (targ.className != 'dragme') {
      return
    };
    // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;
  
    // assign default values for top and left properties
    if (!targ.style.left) {
      targ.style.left = '0px'
    };
    if (!targ.style.top) {
      targ.style.top = '0px'
    };
  
    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;
  
    // move div element
    document.onmousemove = dragDiv;
    return false;
  }
  
  function dragDiv(e) {
    if (!drag) {
      return
    };
    if (!e) {
      var e = window.event
    };
    var targ = e.target ? e.target : e.srcElement;
    // move div element
    targ.style.left = coordX + e.clientX - offsetX + 'px';
    targ.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
  }
  
  function stopDrag() {
    drag = false;
  }
  window.onload = function() {   
      document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
  }


let MainRotations=0;
function mainimgRotate(){
    MainRotations++;
    document.documentElement.style.setProperty('--Mainro', (180+(MainRotations*90)+'deg'));
}
/*function DevilOut(){
    document.getElementById('locko').src="i/p1.jpg";
    console.log('IMG main has been hovered');
}*/



// Shiftery ; Shifts profile images, with Dout, reverts and repeats//
function Profile() {
var locko = document.getElementById('locko');
var bard = document.getElementById('Probar');
    if (bard.value == 0) {
        locko.src="i/pumpkin.png";
        console.log('Shift1');
        bard.value = 1;
    }
    else if (bard.value == 1) {
        locko.src="i/penguino wmark.png";
        console.log('Shift1');
        bard.value = 2;
    }
    else if (bard.value == 2) {
        locko.src="i/organs.jfif";
        console.log('Shift1');
        bard.value = 3;
    }
    else if (bard.value == 3) {
        locko.src= "i/nuke.jfif ";
        
        console.log('Shift1');
        bard.valued =0;
    }
}

//  Test logger for undefined values//
function test(t){

if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}
var testo = ('consolelogger')
let aa = testo;





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
//   UPPER BOX    ///
function Blood() {
    tbox.innerText="The hidden link..";
    tbox.style.fontFamily="'Jim Nightshade', cursive";
    console.log('Blood has been spilled');
    return plus5();
}
function Duo(){
    tbox.innerText="Come Learn a second (Or third) language with me :)";
    console.log("Duo call");
    return plus5();
}
function Git(){
    tbox.innerText="GIT... the source of the matrix, enjoy the crawl.";
    tbox.style.fontFamily='lobster', cursive;
    console.log('Git has been called')
    return plus5();
}
function Linkd() {
    tbox.innerText="I don't know what to tell you. Go here to look at my certificates, i guess.";
    console.log('LinkedIn has been called')
    return plus5();
}
function Mail() {
    tbox.innerText="Email me (opens your mail app)"
    console.log('Mail has been called')
    return plus5();
}
function Red() {
    tbox.innerText="Conspiracies, Collusion && Consumerism"
    console.log('Reddit has been called')
    return plus5();
}
function Stack(){
    tbox.innerText="Why you would want to see this, i do not know."
    console.log('Stack has been called')
    return plus5();
}

//   Lower box ////

function Fb() {
    tbox.innerText="that's so meta";
    tbox.style.textDecoration="underline";
    console.log('Fb has been called')
    return plus5();
}
function Igg() {
    tbox.innerText="Photo whore galore (it's me , i'm photo whore)";
    console.log('Instagram has been called')
    return plus5();
}
function Pint() {
    tbox.innerText="Random pretty pictures that mean nothing";
    console.log('Pintrest has been called')
    return plus5();
}
function Tik() {
    console.log('TikTok has been called')
    return plus5();
}
function Twit() {
    console.log('Twit has been called')
    return plus5();
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

// Background shifter - SHIFTREY //
//Else if LOOP, 0-5-0//
let g = 0;
function shiftery() {

var L = document.getElementById('boxmain');



    if (g == 0) {
    L.style.background = "linear-gradient( 40deg, #ddaadd, #11ffad)";
    g+=1;
    console.log(' Shiftery changing backgrounds1');
    }
    else if (g == 1){
    L.style.background = ('linear-gradient( 240deg, #11aa55, #29ace0)');
    console.log('Second background');
    g+=1 ;      
    }
    else if (g == 2) {
        L.style.background = ('linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)');
        g += 1 ;
        console.log('Third background');
    }
    else if (g == 3) {
        L.style.background = ('radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)');
        console.log('fourth background');
        g += 1;
    } 
    else if (g == 4) {
        L.style.background = ('repeating-conic-gradient(red 10%, yellow 20%)');
        g += 1;
        console.log('Fifth background');
    }
    else if (g == 5){
        L.style.background = ('linear-gradient(to bottom, #6666ff 0%, #3333ff 90%, transparent 100%)');
        console.log('Sixth background');
        g+=1 ;      
        }
        else if (g == 6) {
            L.style.background = ('linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)');
            g += 1 ;
            console.log('background7-g='+g);
        }
        else if (g == 7) {
            L.style.background = ('radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)');
            g += 1;
           console.log('background8-g='+g); 
        } 
        else if (g == 8) {
            L.style.background = ('repeating-conic-gradient(red 10%, yellow 20%)');
            g += 1;
            console.log('background9-g='+g);
        } 
    else if (g ==9) {
        L.style.background = ('repeating-radial-gradient( #0bd3d3, #f890e7, #ffffff, #d0d0d0, #000000)');
        g = 0;
        console.log('ShifteryCircuit reset-bck10-g='+g);
    }
}