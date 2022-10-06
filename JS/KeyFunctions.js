//Date
function getDatearr() {
  let today = new Date();
  let currentDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDay;
}



// Utility functions
function randomNum(min, max) {
  if (min == undefined || max == undefined) { min = 0; max = 17; }
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomHex(bits) {
  if (!bits) { bits = 8; } let hexRes = '';
  let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < bits; i++) { hexRes += hex[(randomNum(0, 9))]; }
  return hexRes;
}

function createHexchain(hexlength){ 
  if (!hexlength){return console.error('Hex length not defined');}
  let hlen=hexlength; let hexchain=[];
  for (let i =0; i < hlen; i++){ hexchain.push("#"+randomHex()); }
  return hexchain;
}

// Styles
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
    
function createClass(name, rules) {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule)
    (style.styleSheet || style.sheet).addRule(name, rules);
  else
    style.sheet.insertRule(name + "{" + rules + "}", 0);
}
//Tasklist
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
// ### Load In Functions ###
const ColorShifter = {
  colors:{
  light_A:'salmon', dark_A:'black',
  light_B:'lightpink', dark_B:'gray',
  },
  icons:['☼' , '☽'],
  type:'Light',
  deg:0,
  inc:0.9,
  timer:setInterval(ColorShift,20),
}

//Main content background
function ColorShift(){
  let t =document.querySelectorAll('.ColorShifter');
  let deg = ColorShifter.deg; let c = ColorShifter.colors;
  let x ='-';
  
  for(let i=0; i<t.length; i++) {
    if(i > 0){x = '' ;}
    if(ColorShifter.type=="Light"){ t[i].style.background="linear-gradient("+x+deg+"deg,"+c.light_A+','+c.light_B+")"; }
    else{t[i].style.background="linear-gradient("+x+deg+"deg,"+c.dark_A+','+c.dark_B+")";} 
}
  deg+=ColorShifter.inc;
  if(deg>365){deg = 0;}
  ColorShifter.deg=deg;
}
let ColorShiftertimer =setInterval(ColorShift,80) ;


// Light/Dark mode

function AddLightDarkSwitcher(){
  let sich= document.createElement('div'); setAttributes(sich,{'id':'LD-icon','class':'Light-icon'});
  let slider=document.createElement('span'); setAttributes(slider,{'id':'LD-slider','class':'Light-slider','onclick':'LDswitch()'});

  
  slider.append(sich);
  Get.Body.append(slider);
  Get.Body.setAttribute('class','LB');
}

function LDswitch(type){
  let slider = document.getElementById('LD-slider');
  let Switch = document.getElementById('LD-icon');  
  let symbol = ColorShifter.icons;
 
  if(slider.classList.contains('Light-slider')){type="Dark"; }
  else{ type="Light"; }

    ColorShifter.type=type;
    slider.setAttribute('class',type+'-slider');
    Switch.setAttribute('class',type+'-icon');
    Get.Body.setAttribute('class',type+'-Body');
     ShiftSwitch(type);
}




function AddMainNav(){
  let nav = document.createElement('nav');
  let target =document.getElementById('hr1');
  let item = document.createElement('a');

  setAttributes(item,{'id':'NavSwitch','class':'NavListitem','onclick':'AddNavBar()'});
  item.append(document.createTextNode('☰'));
  nav.append(item);
  target.prepend(nav);
}

AddMainNav();
Get.Nav.Switch = document.getElementById('NavSwitch');

function AddNavBar() {
  let Nav = document.querySelector('.NavBar');
  if (Nav) {
    Get.Nav.Switch.innerText="⚞";
    setAttributes(Get.Nav.Switch,{
      'onclick':'clearNavBar()','style':'border:.42vmin double gold;'
    });
    Nav.style.display="";
  }
}

function clearNavBar() {
  let Nav = document.querySelector('.NavBar');
  if (Nav) {
    Get.Nav.Switch.innerText="☰";
    setAttributes(Get.Nav.Switch,{
      'onclick':'AddNavBar()','style':'border:.42vmin double gray;'
    });
   
    Nav.style.display="none";
  }
}





function AppendFooter(){
  let t = document.getElementById('hr2'); let footer=document.createElement('footer');
  let span = document.createElement('span');
  let p = document.createElement('p'); let text1 = document.createTextNode(Get.Footer[0]); 
  let text2=document.createElement('a'); text2.appendChild((document.createTextNode(Get.Footer[1])));
  setAttributes(p,{'id':'Bloodworks'});
  setAttributes( text2,{'href':'http://bloodweb.net'});

  let img = document.createElement('img'); img.setAttribute('src',Get.Footer[2]);  
  let cc = document.createElement('p'); cc.setAttribute('id','cc');
  let license = document.createElement('a'); setAttributes(license,{'href':'LICENSE'});
 p.append(text1,text2); 
 license.append(document.createTextNode(Get.Footer[4]));
  cc.append((document.createTextNode(Get.Footer[3])),license);
span.append(p,img);
footer.append(span,cc);
t.append(footer);
}


/*########################
//      Shiftery
########################## 
*/
const ShifteryAttr = {
  default:true,
  debug:false,
  running:false, 
  speed:200,
  shape:'conic',
  deg:40,
  incDeg:false,
  colors:(createHexchain((randomNum(10,99)))),
 
  targets:
    [ document.querySelector('nav'), document.querySelector('footer'),
  ],
  
}

let lShift = [
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd'];

let dShift = [
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
  '#020', '#2a2','#303','#000',
];



let shifteryInterval ;

//Beta

function ShiftSwitch(type){
  let nav = document.querySelector('.NavBar');
  if(ShifteryAttr.default==true){
    switch (type) {
      case 'Light':
        ShifteryAttr.colors = lShift; break;
      case 'Dark':
        ShifteryAttr.colors = dShift; break;
    }

    if(ShifteryAttr.running==false){
      changeShifteryState(false,64,ShifteryAttr.colors);
    }
  }
}

function Shiftery() {
shifterychain = ShifteryAttr.colors;
let deg = ShifteryAttr.deg; let shape = ShifteryAttr.shape;
let Shiftargs = ShifteryAttr.targets;
let build1; let build2;
switch (shape) {
  case 'radial':
    build1="radial-gradient("+shifterychain + ")";
    build2="radial-gradient("+shifterychain + ")";
    break;
  case 'conic':
    build1="conic-gradient("+shifterychain + ")";
    build2="conic-gradient("+shifterychain + ")";
    break;
  default:
    build1="linear-gradient(-"+deg+'deg,'+shifterychain + ")";
    build2="linear-gradient("+deg+'deg,'+shifterychain + ")";
    break;
}
  for (let i = 0; i< Shiftargs.length; i++){
    if(i<1){Shiftargs[i].style.background = build1; continue;}
    Shiftargs[i].style.background = build2;
}
  
  
  if(ShifteryAttr.incDeg==true){ deg++; 
    if (deg>360){deg=0;}
    ShifteryAttr.deg=deg;
  }
  shifterychain.push(shifterychain[0]);
  shifterychain.shift();

  if(ShifteryAttr.debug==true){console.log('Shiftery cycle');}
}


function changeShifteryState (running,speed,colors,shape,deg,incDeg){
  ShifteryAttr.running=running; ShifteryAttr.speed=speed
  if (colors){ShifteryAttr.colors=colors;}
  if(shape){ShifteryAttr.shape=shape;}

  if (deg){ShifteryAttr.deg=deg;
    if(incDeg){ShifteryAttr.incDeg=incDeg;}
  }
  clearInterval(shifteryInterval);
  if(running==false)return Shiftery();
  if(running==true){shifteryInterval=setInterval(Shiftery,speed);}
}






AddLightDarkSwitcher();
AppendFooter();
changeShifteryState(false,64,lShift);
