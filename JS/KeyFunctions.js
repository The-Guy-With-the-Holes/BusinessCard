//#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#%#%#%
//              Tools
//#%#%#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#

function log(x){
  console.log(x);
  let z = document.getElementById('debugging_area');
  if (!!z){z.querySelector('p').innerText+=x}
}
log("Debugging area initialised.")

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
function customQuerySelectorAll(...selectors) {
  const combinedSelector = selectors.join(', ');
  return document.querySelectorAll(combinedSelector);
}
gcs=getComputedStyle(document.documentElement);

const ColorShifter = {
  colors:{ 
    light_A:gcs.getPropertyValue('--light-color-theme-A'),
    light_B:gcs.getPropertyValue('--light-color-theme-B'),
    dark_A:'black',
    dark_B:'gray',
  },
  
  targets:"header,.ColorShifter,#about-projects",// Basic elements to be used
  hvt:"main,footer,.Socials_Container", // High value targets (rotates in reverse if enabled
  alt_color_targets:'body,.Vertical_NavBar',     // Render in different color

  icons:['☼' , '☽'], // light / dark  
  type:'Light', // default state
  mode:"a", // Use alpha / beta colour mode
  deg:0, // starting deg
  inc:0.9, // how many deg to inc each interval

  inc_deg:function(){ // inc cur_deg via deg + inc
    this.deg+=this.inc;
    if(this.deg>365){this.deg = 0;}
  },
  // timer:setInterval(ColorShift,20)  
}


// Light/Dark mode
// Append the light Dark switch to the body

function AddLightDarkSwitcher(){
  let slider = createElement('span',{id:'LD-slider',className:'Light-slider',innerHTML:`<div id="LD-icon" class="Light-icon"></div>`});
  slider.setAttribute('onclick',"LDswitch()");
  document.body.prepend(slider);
  Get.Body.setAttribute('class','Light-Body');
}

// Main content background
function ColorShift(){
  let t = document.querySelectorAll(ColorShifter.targets);
  let hvt=document.querySelectorAll(ColorShifter.hvt);
  let alt=document.querySelectorAll(ColorShifter.alt_color_targets)
  let color_ref="--"+ColorShifter.type.toLocaleLowerCase()+"-color-theme-";
  let color=gcs.getPropertyValue(color_ref+ColorShifter.mode.toLocaleUpperCase());
  let c = ColorShifter.colors;
  let x ='-';

  for(let i=0; i<t.length; i++) {
    if(ColorShifter.type=="Light"){ t[i].style.background="linear-gradient("+ColorShifter.deg+"deg,"+color+")"; }
    else{t[i].style.background="linear-gradient("+ColorShifter.deg+"deg,"+color+")"; }
  }

  for(let i=0; i<hvt.length; i++) {
    if(i < 0){x = '' ;}
    if(ColorShifter.type=="Light"){ hvt[i].style.background="linear-gradient("+x+ColorShifter.deg+"deg,"+color+")"; }
    else{hvt[i].style.background="linear-gradient("+x+ColorShifter.deg+"deg,"+color+")";} 
  }
  for(let i=0; i<alt.length; i++) {
    ColorShifter.mode!="a"?color=gcs.getPropertyValue(color_ref+"A"):color=gcs.getPropertyValue(color_ref+"B");
    if(i < 0){x = '' ;}
    if(ColorShifter.type=="Light"){ alt[i].style.background="linear-gradient("+x+ColorShifter.deg+"deg,"+color+")"; }
    else{alt[i].style.background="linear-gradient("+x+ColorShifter.deg+"deg,"+color+")";} 
  }
  ColorShifter.inc_deg();
}

// SHiftery Replacement Change relevant targets to Light / dark background
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
  ColorShift()
}

Nav_Settings={
  // The positions of items in the arrays
    name:1, //"Home","About"    
    icon:0, // “⌂"
    ref:2, // http://www.bloodweb.net
    // Optional
    js:3, // console.log('do this')
}

function Create_Nav(nav_pages){
  AddMainNav(nav_pages);
  AddVerticalNav(nav_pages);
}

function AddMainNav(nav_pages){
 
  let Nav_Switch =createElement('a',{id:'Vertical_Nav_Switch',className:'Nav_Switch NavListitem',href:"javascript:Toggle_Vertical_Nav('Open')",innerHTML:"☰ Menu"});
  let nav_img=createElement('img',{'style':'float:right;','id':"banner_img",'src':"favicon.ico",'alt':"Favicon Image"});
  // let nav_banner=createElement('h1',{ id:'Nav_Heading','innerHTML:'<img id="banner_img" src="favicon.ico" alt="Favicon Image"/> <p> Jackewers.com</p>'})
  let main_nav=createElement('nav',{className:"Horizontal_NavBar"}) 
  main_nav.append(nav_img,Nav_Switch);

  for (let i = nav_pages.length; i--;){
    let n = nav_pages[i];
    let a = createElement('a',{className:"NavListitem",href:n[Nav_Settings.ref],name:n[Nav_Settings.name],innerHTML:n[Nav_Settings.name]})
    main_nav.prepend(a);
  }

  // header.append(nav_banner,main_nav);
  // document.body.prepend(main_nav);
  document.body.insertBefore(main_nav,dQ('header').nextSibling)
}

function AddVerticalNav(nav_pages){
  // Create the main navwithe embedded the close button
  let nav=createElement('div',{className:'Vertical_NavBar',innerHTML:`<button id="Nav-Close-btn" onclick="Toggle_Vertical_Nav('Close')" > </button>`})
  for (let i = 0; i<nav_pages.length; i++ ){ let x = nav_pages[i];
    let li=createElement('li',{className:'NavListitem'});
    let a =createElement('a',{href:x[Nav_Settings.ref],innerHTML:`<i>${x[Nav_Settings.icon]}</i>${x[Nav_Settings.name]}`}); 
    if (x[Nav_Settings.js]) a.setAttribute('onclick',x[Nav_Settings.js]);
    li.append(a);
    nav.append(li);
  }

  document.body.append(nav);
  // Close the newely created Nav
  Toggle_Vertical_Nav('Close');
}

function Toggle_Vertical_Nav(type){ 
  if(!type){return error;} else{type = type.toLocaleLowerCase();}
   console.log("toggling Nav")
  let Nav = document.querySelector('.Vertical_NavBar');
  let Get_Nav_Switch=document.getElementById('Vertical_Nav_Switch'); 

  if(Nav){
    switch (type) {
        case 'close':
          Get_Nav_Switch.setAttribute('href',"javascript:Toggle_Vertical_Nav('Open')")
          Nav.style.display="none";    
        break;
        case 'open':
          Get_Nav_Switch.setAttribute('href',"javascript:Toggle_Vertical_Nav('Close')")
          Nav.style.display="block";
        break;
    }
  }
}

// after page load check window is root and nav exists

function attach_nav_listener() {
  if (window == window.top && dQ('nav') !== null){
    console.log(' Nav listener attached');
    
    window.addEventListener('scroll',function(){
      let header=document.querySelector('header');
      let nav=document.querySelector('nav');
      
      if(this.scrollY > header.clientHeight-header.clientHeight/2){
        nav.classList.add('sticky_nav')
      }
      else{nav.classList.remove('sticky_nav')}
    })
  }
  else{console.log('No nav to attach listener to')}
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


// function createDialog(){
//   element=createElement('div',{id:"iframeDialog",innerHTML:
// `    <p id="iframeTitle">Sample</p>
//     <button onclick="closeIframeDialog">x</button>
//     <iframe src="" id="dialog_iframe" width="100%" height="70dvh"></iframe>
//     <button> <a href="">Take me there!</a></button> 


//   `});
//   document.body.append(element);
// }
// createDialog();




function call_IframeDialog(title,src){
  let iframeDialog=document.getElementById('iframeDialog');
  var iframeTitle=document.getElementById('iframeTitle');
  var dialog_iframe=document.getElementById('dialog_iframe');
  var iframe_href=document.getElementById('takemetherelink');

  if(!!title && !!src){
    iframeDialog.showModal();
    iframeTitle.innerHTML=title;
    dialog_iframe.src=src;
  }
  else {iframeDialog.close(); }
}


document.body.addEventListener('click', ele => { let e=ele.target;
  
  if (document.querySelector('.Vertical_NavBar') && document.querySelector('.Vertical_NavBar').style.display!='none'){
    // target click came from inside nav and should not close vertical nav
    let click_inside_nav=false 
    // the targets to check for the nav class
    vert_targets=[e,e.parentElement,e.parentElement.parentElement]
  
    vert_targets.forEach(element => {
      if(element && element.classList.contains('Vertical_NavBar')){click_inside_nav=true; return console.log('Click came from inside the vertical_navbar:'+element.classList);} 
    });
    //main body was clicked > close nav
    if(click_inside_nav!==true){null;Toggle_Vertical_Nav('Close')}
    //reset
    click_inside_nav=false;
  }
  
  if (e.parentElement){
    //reset rainbow wave when name is pressed
    if ( e.parentElement.id=='intro-text-profile-name'){ let x=e.parentElement.querySelectorAll('span');
      x.forEach((element) => element.classList=""); //remove class
      setTimeout(() => {x.forEach((element) => element.classList="RT");}, 1); // add class
    }
    if (e.parentElement.classList=="refs"){
      let title=e.innerText.replace(' ','<br>');
      //title
      let src=e.getAttribute('data-src');
      call_IframeDialog(title,src); console.log(`opnened dialog ${title},${src}`)
      // console.log('e has data of '+a)
    }
}
})

let OL = function(){
  console.log("Beginning OL");
  
   //let ColorShiftertimer =
  // setInterval(ColorShift,250) ;
  ScrollHome(); //Scroll to top (Helps with js created elements)
  attach_nav_listener(); 
  AddLightDarkSwitcher();
  ColorShift(); // Set the initial colors to the DOM
}
