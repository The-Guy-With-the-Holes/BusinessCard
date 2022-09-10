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
function randomHex(bits) {
  if (!bits) { bits = 8; } let hexRes = '';
  let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < bits; i++) { hexRes += hex[(randomNum(0, 9))]; }
  return hexRes;
}

function randomNum(min, max) {
  if (min == undefined || max == undefined) { min = 0; max = 17; }
  return Math.floor(Math.random() * (max - min)) + min;
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
  let NavBar = document.createElement('nav');
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
  body.prepend(NavBar);
  //clean up
  if (Nav.e.includes('Extend')) { Nav.e.pop(); }
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
  let t = document.body; let footer=document.createElement('footer');
  let p = document.createElement('p'); let text1 = document.createTextNode(Get.Footer[0]); 
  let text2=document.createElement('a'); text2.appendChild((document.createTextNode(Get.Footer[1])));
  setAttributes(p,{'id':'Bloodworks'});
  setAttributes( text2,{'href':'http://bloodweb.net'});

  let img = document.createElement('img'); img.setAttribute('src',Get.Footer[2]);  
  let cc = document.createElement('p'); cc.setAttribute('id','cc');
  let license = document.createElement('a'); setAttributes(license,{'href':'LICENSE'});
 p.append(text1,text2,img); 
 license.append(document.createTextNode(Get.Footer[4]));
  cc.append((document.createTextNode(Get.Footer[3])),license);

footer.append(p,cc);
t.append(footer);
}

//Shiftery
let shifterychain = ['#ddaa00', '#ff11ff', '#11ffad','#aadddd','#ddaa00', '#ff11ff', '#11ffad','#aadddd', '#ddaa00', '#ff11ff', '#11ffad','#aadddd','#ddaa00', '#ff11ff', '#11ffad'
,'#ddaa00', '#ff11ff', '#11ffad','#aadddd','#ddaa00', '#ff11ff', '#11ffad','#aadddd', '#ddaa00', '#ff11ff', '#11ffad','#aadddd','#ddaa00', '#ff11ff', '#11ffad'];


function ShifteryPush (){
    
    shifterychain.push(shifterychain[0]);
    shifterychain.shift();
    Shiftery();
}

function Shiftery(){
 
  let nav = document.querySelector('.NavBar'); 
  let footer=document.querySelector('footer');
  
  nav.style.background="linear-gradient(-40deg,"+shifterychain+")";
  footer.style.background="linear-gradient(40deg,"+shifterychain+")";
   
}

//Quote of the day
function getQOTD() {
  let day = new Date().getDay();
  let Quote = QOTD[(day)]
  createQOTDbox(Quote, day);
}


function createQOTDbox(Quote, Day) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let div = document.createElement('div'); let p = document.createElement('p');
  let closebtn = document.createElement('button');
  let time = document.createElement('p');
  let currentDay = getDatearr();

  closebtn.append(document.createTextNode('X'));
  setAttributes(closebtn, { 'onclick': 'removeQOTD()', 'id': 'CloseQuoteBox' })

  time.append((document.createTextNode(days[Day] + ' ' + (currentDay))), (document.createElement('br')),)
  setAttributes(time, { 'id': 'TimeQuoteBox' })

  p.append((" of the day: "), time)
  p.append(document.createElement('br'), "\" ", document.createTextNode(Quote), " \"");
  setAttributes(p, { 'id': 'QuoteBoxP', 'style': 'color:gold; font-size:3vw; font-weight:700; -webkit-text-stroke:0.1vmin #000;' });

  div.append(closebtn);
  div.append(p);
  setAttributes(div, { 'id': 'QuoteBox' });


  console.warn(Quote);
  document.querySelector('nav').after(div);
}

//Tasklist
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
