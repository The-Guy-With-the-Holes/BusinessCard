//Date
function getDatearr() {
  let today = new Date();
  let currentDay = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return currentDay;
}

//Storage
function removeQOTD() { document.getElementById('QuoteBox').remove(); }
let todaysDate = (getDatearr());

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


//NavBAR
function AddNavBar(title) {

  if (Debug.Developer == true && !Nav.e.includes('DEV')) { Nav.e.unshift('DEV') }
  if (!title) { title = document.querySelector('title').innerText; }
  if (title == "Home") { }//{Nav.e.push('Extend');}

  let body = document.body;
  let NavBar = document.createElement('div');
  setAttributes(NavBar, { 'class': 'NavBar' });

  for (let i = 0; i < Nav.e.length; i++) {
    let Name = Nav.e[i]; if (Debug.Nav == true) { console.log('Creating Nav' + Name); }
    let Adr = Name + '/' + Nav[Name] + '.html';
    let a = document.createElement('a'); a.append((document.createTextNode(Name)));
    let li = document.createElement('li');

    //Fixes Links
    if (Name == "Home") { Adr = "index.html"; }
    if (title != "Home") { Adr = "../" + Adr; }

    setAttributes(a, { 'href': Adr });
    setAttributes(li, { 'class': 'NavListitem', 'name': Name });
    li.append(a);
    if (Name == title || false && Name != Nav.e[0]) {
      a.setAttribute('href', '#');
      li.setAttribute('id', 'NavBar_Selected');
    }

    if (Name == "About") {
      let s = document.createElement('span');
      let ABTdrops = Get.AboutPages;
      a.removeAttribute('href'); a.setAttribute('onclick', 'toggleAboutDropdown()');

      for (let d = 0; d < ABTdrops.length; d++) {
        let list = document.createElement('a');
        let text = ABTdrops[(d)].split(' ', 1);
        if (title == "Home") {
          setAttributes(list, { 'href': "About/" + text + '.html', 'class': 'Aboutdropdown-content' });
        }
        else {
          setAttributes(list, { 'href': "../About/" + text + '.html', 'class': 'Aboutdropdown-content' });
        }
        list.innerText = text;
        s.append(list);
      }
      s.setAttribute('class', 'Aboutdropdown');
      li.append(s);
    }
    //Debug
    if (Name == "DEV") { li.setAttribute('onclick', 'UnlockDEVtools()'); UnlockDEVtools(); }
    //Float last element
    if (i == (Nav.e.length - 1)) { setAttributes(li, { 'style': 'float:right;' }); }
    NavBar.append(li);
  }
  let header = document.querySelector('#hr1');
header.prepend(NavBar);
/*  body.prepend(NavBar);
*/
  
  AppendFooter();
}

function clearNavBar() {
  let Nav = document.querySelector('.NavBar');
  if (Nav) { Nav.remove(); }
}

function LoadNewNavBar(t) {
  clearNavBar();
  AddNavBar(t);
}
AddNavBar();


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
  colors:(createHexchain((randomNum(10,99)))),
  speed:200,
  deg:40,
  incDeg:false,
  shape:'conic',
  targets:
    [ document.querySelector('.NavBar'), document.querySelector('footer')
  ],
  debug:false,
  running:false,
}

let shifterydef = [
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd',
  '#ddaa00', '#ff11ff', '#11ffad', '#aadddd'];



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
  if(i<1){Shiftargs[i].style.background = build1;}
  else{Shiftargs[i].style.background = build2;}
}
  
  
  if(ShifteryAttr.incDeg==true){ deg++; 
    if (deg>360){deg=0;}
    ShifteryAttr.deg=deg;
  }
  shifterychain.push(shifterychain[0]);
  shifterychain.shift();
  if(ShifteryAttr.debug==true){console.log('Shiftery cycle');}
}

let shifteryInterval ;

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

changeShifteryState(false,64,shifterydef);

//Tasklist
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
