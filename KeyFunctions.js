//Date
function getDatearr(){
  let today = new Date();
  let currentDay = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  return currentDay;
}

//Storage
function removeQOTD(){document.getElementById('QuoteBox').remove();}
let todaysDate=(getDatearr());

//User
const User = {
  New:localStorage.getItem('newUser'),
  LastLogin: localStorage.getItem('UserLastLogin'),
  id:localStorage.getItem('UserID'),
}
const isnewUser=localStorage.getItem('newUser');
const UserLastLogin= localStorage.getItem('UserLastLogin')
const Stamp= 'UserId:'+todaysDate;

function getUser(){
if(Debug.User==true){console.warn(UserLastLogin+" last :: new "+Stamp)}
//first login
if(User.New==null){ //console.warn('is new user');
  localStorage.setItem('newUser',false); getQOTD(); 
  return localStorage.setItem('UserLastLogin','FirstLogin:1010');}
//else
if(User.New == 'false'){ //console.warn('Not a new user');
    if(UserLastLogin.includes(todaysDate)){}
    else{getQOTD();}
  }
  localStorage.setItem('UserLastLogin',todaysDate);
}

// Number


// Styles
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}


//Elements

//NavBAR
const NavBarElements =['Home','About',
//'Contact',
//'Projects',
'Certificates'];
function AddNavBar(title){
    console.log('Adding nav bar');

if(!title){title = document.querySelector('title').innerText;}
if(title=="Home") {}//{NavBarElements.push('Extend');}

  let body = document.body;  
  let NavBar =  document.createElement('nav');

createClass('.NavBar',"display:block; background:linear-gradient(200deg, #aaaaff,#888,#888,#888, gray, #aaaaff,#aaaaff); border: 1vmin groove gray;padding:1%;font-size: 4vw; color:white;   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);");
setAttributes(NavBar, { 'class':'NavBar' });
createClass('.NavListitem','cursor:pointer; display:inline-block; -webkit-text-stroke:0.03vmin black; margin:1px; padding:1%; border-radius: 10%; border: 2px double gray; background-color: #88888855;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);')
  for (let i = 0; i < NavBarElements.length; i++){
      let Name = NavBarElements[i]; console.log(Name);
      
      let a = document.createElement('a'); a.append((document.createTextNode(Name))); 
      let li = document.createElement('li'); 
      li.append(a);
      setAttributes(li,{'class':'NavListitem', 'name':Name ,'onclick':'flip(\''+Name+ '\')'})
      if (Name == title || false && Name != NavBarElements[0]) {
      li.setAttribute('id','NavBar_Selected');
      }
//Float last element
      if ( i ==(NavBarElements.length-1) ){ setAttributes(li,{'style':'float:right;'}); }
      NavBar.append(li);
  }
  body.prepend(NavBar);
  //clean up
  if(NavBarElements.includes('Extend')){NavBarElements.pop();}
}

function clearNavBar(){
  let Nav = document.querySelector('.NavBar');
  if(Nav){Nav.remove() ;}
}

function LoadNewNavBar(t){
  clearNavBar();
  AddNavBar(t);
}
AddNavBar();


//Quote of the day
function getQOTD(){
let day = new Date().getDay();
let Quote = QOTD[(day)]
createQOTDbox(Quote,day);
}


function createQOTDbox(Quote,Day){
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  
let div = document.createElement('div'); let p = document.createElement('p');
let closebtn=document.createElement('button');
let time=document.createElement('p');
let currentDay = getDatearr();

closebtn.append(document.createTextNode('X'));
setAttributes(closebtn,{'onclick':'removeQOTD()','id':'CloseQuoteBox'})

time.append((document.createTextNode(days[Day]+' '+(currentDay))),(document.createElement('br')),)
setAttributes(time,{'id':'TimeQuoteBox'})

p.append((" of the day: "),time)
p.append(document.createElement('br'),"\" ",document.createTextNode(Quote)," \"");
setAttributes(p, {'id':'QuoteBoxP','style':'color:gold; font-size:3vw; font-weight:700; -webkit-text-stroke:0.1vmin #000;'});

div.append(closebtn);
div.append(p);  
setAttributes(div,{'id':'QuoteBox'});


console.warn(Quote);
document.querySelector('nav').after(div);
  }

