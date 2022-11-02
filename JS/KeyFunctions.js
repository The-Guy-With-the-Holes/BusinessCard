

//Get Objects 
let log = function (t) {console.log(t);}

function allowDrop(event) {event.preventDefault();}

function getDatearr() {
  let today = new Date();
  let currentDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDay;
}

let DT = document.title;

// Utility functions
function randomNum(min, max) {
  if (min == undefined || max == undefined) { min = 0; max = 17; }
  return Math.floor(Math.random() * (max - min)) + min;
}
let isEven = function (num){
  if(!num || isNaN(num)) return console.error('Num required');
  if(num % 2 ==0)return true;
  return false;
}
function randomHex(bits) {
  if (!bits) { bits = 8; } 
  
  let hexRes = '';
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

let createElement = function(element, properties) { let el = document.createElement(element);
  for (var prop in properties) {el[prop] = properties[prop];}
  return el;
}
let tNode = function (t){ return document.createTextNode(t);}

//Tasklist
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



//#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#%#%#%
//              Tools
//#%#%#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#

let Root = '';
if (DT=="Working directory"){Root = 'WD'};
if (DT.includes("jackewers.com")){Root = 'BusinessCard'};
if (DT.includes("Free Chess")){Root = '../../../WD'};

let requestRoot = function (targ) {
  if (Root == targ){return '';}
  else if(Root.includes('WD')){return targ+'/';} 
  else return '../'+targ+'/';
}


const Tools = [ 
  ['Shiftery',requestRoot('BusinessCard')+'i/Templates/Shiftplay.png','ToggleShiftery();'],
  ['Funny hat',requestRoot('BusinessCard')+'i/Templates/Crazyhat.png','ToggleCrazyHat();'],
]

// Required
function appendTools(){
      let ToolBar = createElement('div',{id:'Tools'}); 
      let span = createElement('span',{id:'Tools-Extended',classList:'HiddenTools'});
      
      let i = createElement('img',{src:requestRoot('BusinessCard')+'i/Templates/Tools.png',id:'Tools-Switch',classList:'tool-icons',});
      i.setAttribute('onclick',"switchTools('open')");
      
      ToolBar.append(i,span);
      document.body.append(ToolBar);
}

function switchTools(arg){
  let M = document.getElementById('Tools-Switch');
  let E = document.getElementById('Tools-Extended');
  
  switch (arg) {    
      case 'open':
          M.src=requestRoot('BusinessCard')+"i/Templates/X.png";
          M.setAttribute('onclick',"switchTools('close')");
          E.setAttribute('class','VisibileTools'); break;
      case 'close':
          M.src=requestRoot('BusinessCard')+'i/Templates/Tools.png';
          M.setAttribute('onclick',"switchTools('open')");
          E.setAttribute('class','HiddenTools'); break;
  }
}

let appendTool = function(name,img,func){ if ( !img || !func ){ console.error('cannot append tool');}
  let E = document.getElementById('Tools-Extended');
  
  let ele = document.createElement('img');
  setAttributes(ele,{'name':name,'alt':name,'onclick':func,'src':img,'class':'tool-icons'});
  E.append(ele);
}

if (DT=="Working Directory"){
  Tools.push(['Tasklist',requestRoot('BusinessCard')+'i/Templates/TL.png','CallTaskList()'])
}

appendTools();
for (ele in Tools){
  appendTool(Tools[ele][0],Tools[ele][1],Tools[ele][2]);
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
  document.getElementById('Tools-Extended').append(slider);
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



//#### EO TOOLS
//#%%#%#%#%#%#%#%#%#%#%#%#%#%%#%#


function appendHeader(){
  let header = createElement("header",{className:'box-main ColorShifter'});
  
  let mainImg = createElement('span',{id:'Mainimg'}); mainImg.append((createElement('img',{src:PageState.header.img,id:'locko',className:'mainx Crazy_Hat',onmouseenter:'mainimgRotate()'})));

  let j = createElement('u'); j.append((tNode('J')));
  let Ewers = createElement('strong'); Ewers.append((tNode('ack Ewers')));
  let ST1 = createElement('strong'); ST1.append(tNode(" "+PageState.header.superText[1]));
 
  let b = createElement('b'); b.append(tNode(PageState.header.superText[3]+" ")) 
  let ST2 = createElement('span',{className:'Together'});  ST2.append(b);

  let h1 = createElement('h1',{name:'h1'}); h1.append(j,Ewers,tNode(','),createElement('br'),tNode(PageState.header.text1)); 
  let h2 = createElement('h2',{name:'h2'}); h2.append(tNode(PageState.header.superText[0]," "),ST1,createElement('br'),tNode(PageState.header.superText[2]+" "),ST2);
  
  header.append(mainImg,h1,h2);
  document.body.prepend(header);
}



function AddMainNav(){
  let nav = document.createElement('nav');
  let target =document.getElementById('hr1');
  let item = document.createElement('a');

  setAttributes(item,{'id':'NavSwitch','class':'NavListitem','onclick':'AddNavBar()'});
  item.append(document.createTextNode('☰'));
  nav.append(item);
  target.append(nav);
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

AppendFooter();




// Color Funcs

const Crazy_Hat = {
  on:false,
  target:document.getElementsByClassName('Crazy_Hat'),
};

function replaceCrazyHat (string,type){ 
  if (!string || isNaN(type)){ return console.error('X-CH str:'+string+' type:'+type);}
  let res; 
  if(string.includes('BusinessCard')){string = string.split('BusinessCard/'); string = string[1]; }
  if(type == 0){ res = string.replace('.','_Crazy_Hat.');  }
  if(type > 0 ){res = string.replace('_Crazy_Hat.','.');}
  console.log('RP Crazy_hat :'+res);
  return res;  
}

let ToggleCrazyHat = function ( ){
    
  console.log("toggling CrazyHat to :"+!Crazy_Hat.on);
  Crazy_Hat.on = Crazy_Hat.on? false : true

  for (e in Crazy_Hat.target){ 
    let i = Crazy_Hat.target[(e)];
    if( i == "[object HTMLImageElement]"){
      if (Crazy_Hat.on==true){ i.src=replaceCrazyHat( i.src , 0); } 
      if (Crazy_Hat.on==false){ i.src=replaceCrazyHat( i.src , 1); }
    }  

  }
  return console.log(Crazy_Hat.on);
}


/*########################
//      Shiftery
########################## 
*/
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
const ShifteryAttr = {
  default:true,
  debug:false,
  running:false, 
  speed:200,
  shape:'conic',
  deg:40,
  incDeg:false,
  colors:lShift,
 
  targets:
    [ document.querySelector('nav'), document.querySelector('footer'),
  ],
  
}





let shifteryInterval ;

//Beta

function ShiftSwitch(type){
  if(ShifteryAttr.default==true){
    switch (type) {
      case 'Light': ShifteryAttr.colors = lShift; break;
      case 'Dark': ShifteryAttr.colors = dShift; break;
    }
    if(ShifteryAttr.running==false){ changeShifteryState(false,64,ShifteryAttr.colors); }
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

let checkShiftery = function (){
  if (ShifteryAttr.incDeg == true) { Shiftery(); 
    setTimeout(() => { 
      checkShiftery(); 
    }, 1000); 
  }
}

let ToggleShiftery = function () {
  let S_tool = document.getElementsByName('Shiftery');
    ShifteryAttr.incDeg = !ShifteryAttr.incDeg; 
    
    if(ShifteryAttr.incDeg!=true){ S_tool[0].src=requestRoot('BusinessCard')+'i/Templates/Shiftplay.png';}
    else { S_tool[0].src=requestRoot('BusinessCard')+'i/Templates/Shiftpause.png';} 
    S_tool[0].alt='Shiftery'+ShifteryAttr.incDeg;

    return checkShiftery(); 

}


let OL = function(){
  changeShifteryState(false,64);
  AddLightDarkSwitcher();
  checkShiftery();
}
