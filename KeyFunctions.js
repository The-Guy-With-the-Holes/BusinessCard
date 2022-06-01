
// Numbers

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
//'Projects',
'Certificates'];
function AddNavBar(title){
    console.log('Adding nav bar');

if(!title){title = document.querySelector('title').innerText;}
if(title=="Home") {NavBarElements.push('Extend');}
else{NavBarElements[0]="Home";}
  let body = document.body;  
  let NavBar =  document.createElement('nav');

createClass('.NavBar',"display:block; background:linear-gradient(200deg, #aaaaff,#888,#888,#888, gray, #aaaaff,#aaaaff); border: 1vmin groove gray;padding:1%;font-size: 6vw; color:white;   box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);");
setAttributes(NavBar, { 'class':'NavBar'});
createClass('.NavListitem','cursor:pointer; display:inline-block; -webkit-text-stroke:0.1vmin black; margin:1px; padding:1%; border-radius: 10%; border: 2px double gray; background-color: #88888855;box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);')

  for (let i = 0; i < NavBarElements.length; i++){
      let Name = NavBarElements[i]; console.log(Name);
      
      let a = document.createElement('a'); a.append((document.createTextNode(Name))); 
      let li = document.createElement('li'); 
      li.append(a);
      setAttributes(li,{'class':'NavListitem', 'name':Name ,'onclick':'flip(\''+Name+ '\')'})
      if (Name == title || false && Name != NavBarElements[0]) {
      li.setAttribute('id','NavBar_Selected');
      }
        //Float last ele
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


