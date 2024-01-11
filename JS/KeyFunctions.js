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
  document.body.prepend(slider);
  Get.Body.setAttribute('class','Light-Body');
}

function LDswitch(type){
  let slider = document.getElementById('LD-slider');
  let Switch = document.getElementById('LD-icon');  
  //let symbol = ColorShifter.icons;
 
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


function AddMainNav(nav_pages){
  let header = document.createElement('header');
  let target = createElement('hr',{id:'hr1'}); // item to attach to
 
  let Nav_Switch =createElement('li',{id:'Vertical_Nav_Switch',className:'Nav_Switch NavListitem',innerHTML:`<a href="javascript:Toggle_Vertical_Nav('Open')">☰ Menu</a>`});
 
  let nav_banner=createElement('h1',{id:'Nav_Heading',innerHTML:'<img id="banner_img" src="https://www.joeltron.com/wp-content/uploads/2022/06/cropped-joeltron_dot_com-1536x318.png">'})
  let main_nav=createElement('nav',{className:"Horizontal_NavBar"}) 
  main_nav.append(Nav_Switch);

  for (let i = nav_pages.length; i--;){
    let n = nav_pages[i];
    nav_item=createElement("li",{className:"NavListitem",name:n[0],innerHTML:`<a href='${n[1]}'> ${n[0]} </a>`})
    main_nav.prepend(nav_item);
  }

  header.append(nav_banner,main_nav);
  target.append(header); 
  document.body.prepend(target);
  //document.querySelector('header').parentNode.insertBefore(target, document.querySelector('header').nextSibling);
}


function Toggle_Vertical_Nav(type){ 
  if(!type){return error;}
  
  let Nav = document.querySelector('.NavBar');
  let Get_Nav_Switch=document.getElementById('Vertical_Nav_Switch'); 


  if(Nav){
    switch (type) {
        case 'Close':
          Get_Nav_Switch.innerHTML=`<a href="javascript:Toggle_Vertical_Nav('Open')">☰ Menu</a>`;
          Nav.style.display="none";    
          break;
    
        case 'Open':
          Get_Nav_Switch.innerHTML=`<a href="javascript:Toggle_Vertical_Nav('Close')">⚞ Menu</a>`;
          Nav.style.display="block";
        break;
    }
  }
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
  Get_Nav_Switch = document.getElementById('NavSwitch');}

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
  console.log("Beginning OL");
  AddMainNav([["Home","/"],['About','/About']]);
  //appendToolbar();

  //AppendFooter();
  setShiftargs('header','footer');
 // changeShifteryState(false,64);
  AddLightDarkSwitcher();


 // checkShiftery();
 // dev();
}
