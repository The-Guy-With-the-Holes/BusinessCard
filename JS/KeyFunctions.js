/* Local */
const LS_Name = function (s){
  if (s=='' || s==undefined) return localStorage.getItem('name');
  localStorage.setItem('name',s); 
}


const weekDay= ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

function isNeg(x) { if (!isNaN(x) && x < 0) { return true; } }

function setRange(i, min, max) {
    if (i < min) return  min;
    if (i > max) return max;
    return i;
}
function inRange(num,min,max){if(num<=max&&num>=min)return true;}

let log = function (t) {console.log(t);}

function allowDrop(event) {event.preventDefault();}

//Date
const CheckAge = function(DOB){
  let today = new Date();
  let birthDate = new Date(DOB);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDif = today.getMonth() - birthDate.getMonth();
  if (monthDif < 0 || (monthDif===0 && today.getDate() < birthDate.getDate())){
    age--; // Over declared age adjusted here 
  }
  return age;
}

function getDatearr() {
  let today = new Date();
  let currentDay = new Date(today.getFullYear()+"," + (today.getMonth() + 1) + ',' +today.getDate()  );
  return currentDay;
}

let timeDif = function(time){let today = new Date();
  let iTime = time.split(':'); 
  let curTime = toString( today.getHours(),":"+today.getMinutes()+":",today.getSeconds());
 
if(time>curTime){
  return "Not >24hrs";
}
else{return "<24hrs"+(time-curTime)}
let Dif=[ 
  second = curTime[2]-iTime[2],
 minute = curTime[1]-iTime[1],
hour = curTime[0]-iTime[0] ]

if(Dif.second<0){Dif.minute-1; Dif.second = 5555; }

 return "InputTIme:"+time+" curTime:"+curTime+"\n Dif:"+[hourDif,minuteDif,secondDif>0?secondDif:60+secondDif];
}
function DateDif(date) {
  date.split('/'); let time = date[0] + date[1];
  let d1 = date.slice(9);
  let month =d1[3]+d1[4]; let day =d1[0]+d1[1];
  let year = 20+d1[6]+d1[7];

  const date1 = new Date(year+','+month+','+day);
  const date2 = new Date();

let DIfference =[(date1.getFullYear()-date2.getFullYear()),(date1.getMonth()-date2.getMonth()),(date1.getDay()-date2.getDay())];
  return "Y/M/D:"+DIfference;
}
let daysUntil = function(date){ const today = new Date();
  let diff = date - today;return Math.floor(diff/(1000*60*60*24));
}

let isPHP = function(){ if(window.location.href.includes('php')){return true;}
  return false;
}

// Page maninpulation
let isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);

function ScrollHome(dir,target){ 
  let WindowFrame =  document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
 
    if( WindowFrame > 0 ){
        window.requestAnimationFrame(ScrollHome);
        window.scrollTo(0,WindowFrame-(WindowFrame/5));
        console.log('Window Scroll location = '+WindowFrame);
    }  
}

function ScrollTarget(dir,target){
  let Frame = document.getElementById(target).scrollTop;

  if(Frame > 0  && dir!='V' ){}

}

let reloadPage = function(){ window.location.reload(true); return false; }

//Edit Elements
const Toggle_Ele_Display=function(element,DisplayType,enforce){let x = element; if(enforce===true||x.style.display=="none"){x.style.display=DisplayType;}else x.style.display="none";}
const CToggle_Ele=function(arr){for(e in arr){let a = arr[e];Toggle_Ele_Display(a[0],a[1],a[2]??null)}}



let sWL = function (t){  if(Social.Links.hasOwnProperty(t)){ return window.location=Social.Links[t]['href'];}
  window.location='/';
}



// Utility functions
function randomNum(min, max) { if (min == undefined || max == undefined) { min = 0; max = 17; }
  return Math.floor(Math.random() * (max - min)) + min;
}

let isEven = function (num){ if(!num || isNaN(num)) return console.error('Num required');
  if(num % 2 == 0)return true;
  return false;
}
function randomHex(bits) {if (!bits) { bits = 8; } 
  let hexRes = ''; let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < bits; i++) { hexRes += hex[(randomNum(0, 9))]; }
  return hexRes;
}

function createHexchain(hexlength){ 
  if (!hexlength){return console.error('Hex length not defined');}
  let hlen=hexlength; let hexchain=[];
  for (let i =0; i < hlen; i++){ hexchain.push("#"+randomHex()); }
  return hexchain;
}

// Styles and elements

let createElement = function(element, properties) { let el = document.createElement(element);
  for (var prop in properties) {el[prop] = properties[prop];}
  return el;
}
let tNode = function (t){ return document.createTextNode(t);}
let BR = function(){return createElement('br');}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
    
function createStyleRule(name, rules) {
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



//#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#%#%#%
//              Tools
//#%#%#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#

if(document.title=-'sassa'){
const Tools = [ 
  ['Return to top',requestRoot('BusinessCard')+'i/Templates/RThome.png','ScrollHome();'],
  ['Shiftery',requestRoot('BusinessCard')+'i/Templates/Shiftplay.png','ToggleShiftery();'],
]
}
// Required
let appendTool = function(name,img,func){ if ( !img || !name){ console.error('cannot append tool');}
  let E = document.getElementById('Tools-Extended');
  
  let ele = document.createElement('img');
  setAttributes(ele,{'name':name,'alt':name,'src':img,'class':'tool-icons','onclick':func});
 document.getElementById('Tools-Extended').append(ele);
}

function appendToolbar(){
      let ToolBar = createElement('div',{id:'Tools'}); 
      let span = createElement('span',{id:'Tools-Extended',classList:'HiddenTools'});
      
      let i = createElement('img',{src:requestRoot('BusinessCard')+'i/Templates/Tools.png',id:'Tools-Switch',classList:'tool-icons',});
      i.setAttribute('onclick',"switchTools('open')");
      
      ToolBar.append(i,span);
      document.body.append(ToolBar);
      for(ele in Tools){appendTool(Tools[(ele)][0],Tools[(ele)][1],Tools[(ele)][2],);}
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

if(Root=="BusinessCard"){  Tools.push(['Funny hat','i/Templates/Crazyhat.png','ToggleCrazyHat();']);}
if (Get.DT=="Working Directory" || isPHP()===true ){
  Tools.push(
    ['CallTaskList',requestRoot('BusinessCard')+'i/Templates/TL.png',''],
    ['OpenFinance',requestRoot('BusinessCard')+'i/Templates/PiGraph.png','']
  );
 if (Get.DT!="Working Directory" && isPHP()===true )Tools.splice(1,0,['Home',requestRoot('BusinessCard')+'i/BloodW.png',"sWL('localhost')"]); 
}

document.body.addEventListener('click', function(e) {
  if(e.target.classList.contains('tool-icons')){
    console.warn("Tools interaction "+e.target.name+'/'+e.target);
    switch (e.target.name) {
      case 'OpenFinance': break;
      case 'CallTaskList': break;
    }  
    return window[(e.target.name)]();
  }
})


// ### Load In Functions ###


const ColorShifter = {
  colors:{ light_A:'salmon', dark_A:'black',
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
  let sich = createElement('div',{id:'LD-icon',className:'Light-icon'});
  let slider = createElement('span',{id:'LD-slider',className:'Light-slider'});
  slider.setAttribute('onclick',"LDswitch();");
  
  slider.append(sich);
  document.getElementById('Tools-Extended').append(slider);
  Get.Body.setAttribute('class','Light-Body');
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


//Appenders


function AddMainNav(){
  let nav = document.createElement('nav');
  let target = createElement('hr',{id:'hr1'});
  let item = document.createElement('a'); setAttributes(item,{'id':'NavSwitch','class':'NavListitem','onclick':'AddNavBar()'});
  item.append(document.createTextNode('☰'));

  nav.append(item);
  target.append(nav); 
  
  document.querySelector('header').parentNode.insertBefore(target, document.querySelector('header').nextSibling);
}



function AddNavBar() {
  let Nav = document.querySelector('.NavBar');
  if (Nav) {
    Get.Nav.Switch.innerText="⚞";
    setAttributes(Get.Nav.Switch,{'onclick':'clearNavBar()','style':'border:.42vmin double gold;'});
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

function NavSwitch(type){ if(!type){return error;}
let Nav = document.querySelector('.NavBar');

if(Nav){
  
  switch (type) {
      case 'Open':
        Get.Nav.Switch.innerText="⚞";
        break;
  
      case 'Close':
       // 'onclick':'AddNavBar()','style':'border:.42vmin double gray;'
       break;
  }
}
}


function AppendFooter(){
  let footer = createElement('footer');
  let p = createElement('p',{id:'Bloodworks'}); 
  let text1 = document.createTextNode(Get.Footer[0]); 
  let text2=createElement('a',{'href':'http://bloodweb.net',innerText:Get.Footer[1]}); 

  let img = createElement('img',{src:'favicon.ico'});  
  let cc = createElement('p',{id:'cc'});
  let license = createElement('a',{href:'LICENSE'});
 
  p.append(text1,text2,tNode(Get.Footer[3]),license,tNode(Get.Footer[4])); 
footer.append(p,img);
document.body.append(footer);

}





// Color Funcs

const Crazy_Hat = {
  on:false,
  target:document.getElementsByClassName('Crazy_Hat'),
};

function replaceCrazyHat (string,type){ 
  if (!string || isNaN(type)){ return console.error('X-CH str:'+string+' type:'+type);}
  let res; 
  if(string.includes('BusinessCard')){string = string.split('BusinessCard/'); string = string[1]; }
  if(type == 0){ res = string.replace('.png','_Crazy_Hat.png');  }
  if(type > 0 ){res = string.replace('_Crazy_Hat.png','.png');}
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
let setShiftargs = function(a,b){
  ShifteryAttr.targets[0]=document.querySelector(a);
  ShifteryAttr.targets[1]=document.querySelector(b);
  Get.Nav.Switch = document.getElementById('NavSwitch');}

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
  AddMainNav();
  appendToolbar();

  AppendFooter();
  setShiftargs('nav','footer');
  changeShifteryState(false,64);
  AddLightDarkSwitcher();
  checkShiftery();
  dev();
}
