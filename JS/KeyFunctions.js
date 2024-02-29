//#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#%#%#%
//              Tools
//#%#%#%#%#%#%#%#%#%#%#%#%##%%#%#%#%#


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

// if(Root=="BusinessCard"){  Tools.push(['Funny hat','i/Templates/Crazyhat.png','ToggleCrazyHat();']);}
// if (Get.DT=="Working Directory" || isPHP()===true ){
//   Tools.push(
//     ['CallTaskList',requestRoot('BusinessCard')+'i/Templates/TL.png',''],
//     ['OpenFinance',requestRoot('BusinessCard')+'i/Templates/PiGraph.png','']
//   );
//  if (Get.DT!="Working Directory" && isPHP()===true )Tools.splice(1,0,['Home',requestRoot('BusinessCard')+'i/BloodW.png',"sWL('localhost')"]); 
// }

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
gcs=getComputedStyle(document.documentElement);

const ColorShifter = {
  colors:{ 
    light_A:gcs.getPropertyValue('--light-color-theme-A'),
    light_B:gcs.getPropertyValue('--light-color-theme-B'),
  //'salmon','lightpink'
    dark_A:'black',
    dark_B:'gray',
  },
  
  targets:document.querySelectorAll(".ColorShifter"),// Basic elements to be used
  hvt:"header,footer", // High value targets (rotates in reverse if enabled
  alt_color_targets:'.Vertical_NavBar',

  icons:['☼' , '☽'], // light / dark  
  type:'Light', // default state
  mode:"a", // Use alpha / beta colour mode
  deg:0, // starting deg
  inc:0.9, // how many deg to inc each interval

  inc_deg:function(){ // inc cur_deg via deg + inc
    this.deg+=this.inc;
    if(this.deg>365){this.deg = 0;}
  },
  //timer:setInterval(ColorShift,20)  
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
  let t =ColorShifter.targets;
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



//#### EO TOOLS
//#%%#%#%#%#%#%#%#%#%#%#%#%#%%#%#

//Appenders


function Create_Nav(nav_pages){
AddMainNav(nav_pages);
AddVerticalNav(nav_pages);
}


function AddMainNav(nav_pages){
  let header = document.createElement('header');
  //let target = createElement('hr',{id:'hr1'}); // item to attach to
 
  let Nav_Switch =createElement('a',{id:'Vertical_Nav_Switch',className:'Nav_Switch NavListitem',href:"javascript:Toggle_Vertical_Nav('Open')",innerHTML:"☰ Menu"});
 
  let nav_banner=createElement('h1',{ id:'Nav_Heading',
    innerHTML:'<img id="banner_img" src="favicon.png" alt="Favicon Image"/> <p> Jackewers.com</p>'
  })
  let main_nav=createElement('nav',{className:"Horizontal_NavBar"}) 
  main_nav.append(Nav_Switch);

  for (let i = nav_pages.length; i--;){
    let n = nav_pages[i];
    // Make the Nav items
    let a = createElement('a',{className:"NavListitem",href:n[1],name:n[0],innerHTML:n[0]})

    main_nav.prepend(a);
  }

  header.append(nav_banner,main_nav);

  document.body.prepend(header);
  //document.querySelector('header').parentNode.insertBefore(target, document.querySelector('header').nextSibling);
}

function AddVerticalNav(nav_pages){
  // Create the main nav and the close button
  let nav=createElement('div',{className:'Vertical_NavBar',innerHTML:`<button id="Nav-Close-btn" onclick="Toggle_Vertical_Nav('Close')">X</button>`})

  for (let i = 0; i<nav_pages.length; i++ ){
    let x = nav_pages[i];
    let li=createElement('li',{className:'NavListitem'});
   
    let a =createElement('a',{href:x[1],innerHTML:x[0]}) 
    if (x[2]) a.setAttribute('onclick',x[2]);
    li.append(a);
    nav.append(li);
    console.log('x'+x[0]+x[1])
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

if (window.location.pathname.split('/').pop().includes('index.html')){
  window.addEventListener('scroll',function(){
    let header=document.querySelector('header');
    let nav=header.querySelector('nav');
    let scrollPosition=window.scrollY;

    if(scrollPosition > header.clientHeight-header.clientHeight/2){
      nav.classList.add('sticky_nav')
    }
    else{nav.classList.remove('sticky_nav')}
  })
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

let Socials={   // If social links exist, create Footer function will run
   settings:{
       type:'balls', // the icon shape
      branding:true, // Made by Bweb
  },   
  // links:[ // NAME / LINK / IMG-LINK
  //     ['Twitter', 'https://www.twitter.com/', 'https://www.twitter.com/favicon.ico'],
  //     ['LinkedIn', 'https://www.linkedin.com/in/jack-ewers-14a155212/', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEUAfrv///8AerkAcLUpgbzE2urI2OnR4u4Adbfs9PlUksUAeLgAbbPN3+30+PuQt9fk7vVpoMtHjsK0z+RAhr8AZbC+1ejb6PIAarKXvdqFs9Z9rtNspc1Xm8ktisGlxt+AqdBjmMfy32DQAAAFJElEQVR4nO2d2ZKjIBRAEckEJcGFjlsW0///k6OxZ5JOFOwBK1znnpepmipbTi67LCQYaAQBi2i+JMjwz5G/O0U28OODjEzou9NjB03kXxnFoMsw9UemzAEXmAGRl4OMbEAXmAHeyJvMHnxcesS+l5GnFQSmC81JdjLp7t3pcMMu7WSSVQSmC03SyayixPSIgKSHdyfCFYeUqPDdiXBFqMgaGpkB3pDzesrMmVyAd8vu0Mu7U4AgCBCo6KArqP06ERZ/ZlkW54TDbppoeLnWaptGUVTuVZJRwN0GzpJNFNwp1UlAjU542gdPRMUFZHCoaOWzS0d6AjhCFcOU1Cuyqd6dtp9Cp1z6+WlwsWknXYIA2LyOOGpcggjU+IHmkU4m+AVJhusyWR8aSJ9CmN4lCAr27iTOhtcmmQhOHXAYay2/U8Pp1hhdggLKLAI/mWXKGEiFFhrqsh6ZAclnYWGWCa5AZHYvPf8xGSDV2bpk1pTN5lQAEZQKYFVVM6VmmQLMKKDSDwB6aiDlf1ZHE0qR6eAmGQUlk3WINQ3OKNOXGgXIpbM56YY0aQynxPQwTUaTULoyf6Bsuk8DqcAMTE7PQpsCvCFYMlZuyk+ALqRfALl9cWkZrLJ/h4bn9JuK+oAZlgFRkXobyZ6oOPEdoIZ/lLCq6OVyEYcQclQeoAJ6SBAEQZD/DkopYezjC8b6/4DZnFFB8vhUq66vdBvvReVGNf06sCVWGt0WzE0y9gNqn3h6gNP42r52yQO5ba8xcd5tijMd51cbdtY98G3+k9OsLSfHsWV7ZW6X9jOVaoheZ2doXmgeKB9G2kKcVDqpcotPkTCX0WEb7et+vfx0dGQg95C8+2Ydnivz5K/cH7m7umApGcoTfVT+PuFwHLiQjDD83UfSsyubZWT4xZzDHjg6qgcWkeHnn6h01G5slpARMz7IPds4yWkLyOjX403ZuOgPuJcRR/PqohFc7CZzLlNlPyr79yczexvXMs3HdP9Fz9Z+a7xrmXrG0oIJWu9k9v9UYG5E1hnNsYwVynY9qE8yge1neq9kbEPjlUzwaRcav2RqKxfPZCK7fOaXTPBpNez0TMau4fRMRlq1m57JBFaFxjcZq0UhC8ukG9WqYju/w7ax2ea2nIzc1vmu2oUdVcWacp5QarMDcSkZucnC8F41UX7I5sXHQ5my4c+Zn4tkzhiUWLQ0y8hs8rG5I3GcMclpcxjLIjKbielwejTHxqY6W0Jm+zH161LzoNpmPnABGTndkRcX4y/R+iWj68eHo+v0HrE5Wsq9TKldcUtNM1E2raZ7mURbHRl3uex9kkn1sxIiN+Qzr2RM+4d3hrbGKxlT1RpOn6XgnUxkWqTODR88fJIx7uqiORyZjfGNhi07PskUxjbPsNPdJxlzA17pqzOfZMxdq52+NvRIRpo/Gxv2IPskYz7o1rDVHWVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQBmVQZg0yKtIgX5cp03yjeSA1n4UTKql7pXlhtIY81pH/9Anz3VvU8EabTfRUz0+fsH+lhQuCIKsGzJ1LRuiFjJy4ChR6Ji7Op/MD3hCbzcJ+ESoSHd6dCFccImJ1kINP0E4F0LVrenjdyaQrKTRh2slIeFcvjcGPspMJtqsoNLQb4ZJZY1n/4f2BFf3VzGUM3obH/XkVt3umCwY8p33dxjZcml1Dlxnuyvy6ATwBbUOTweI3D+SEwl4CpEIAAAAASUVORK5CYII='],
  //     // ['Instagram', 'https://www.instagram.com', 'https://www.instagram.com/favicon.ico'],
  //     ['Github', 'https://github.com/The-Guy-With-the-Holes', 'https://github.com/favicon.ico'],
  //     ['Doulingo', 'https://www.duolingo.com/profile/Spike.edu', 'https://d35aaqx5ub95lt.cloudfront.net/favicon.ico'],
  //     ['Crypto.com', 'https://crypto.com/nft/profile/spikedeathcore?tab=collectibles', 'https://crypto.com/__assets/favicon-32x32.png?v=0f6f06777a5d4bc338bfeca412628e1c']   
  // ],
  createFooter:function(){
      let content=createElement('div',{className:'Boxes upper'});     
      for(let i=0; i<Socials.links.length; i++){
          let x=Socials.links[i];

          let container=createElement('div',{className:`balls${isEven(i)?'x':'y'} Rotern`});
              container_content=createElement('a',{href:x[1], target:'blank_',innerHTML:`${Socials.settings.type=="balls"&&x[2]?`<img src="${x[2]}" class="balls" alt="${x[0]} link">`: `<img src="${x[2]}"` }`
          });
          container.append(container_content);
          content.append(container);	
      }

      let deets= createElement('div',{id:'contact_deets',innerHTML:`
          <p><i>📧</i>Email:<a href="mailto:webmaster@jackewers.com">webmaster@jackewers.com</a></p>
          <p><i>📱</i>PhoneNumber:<a href="tel:+61479000429">+61 479 000 429</a></p>
          `
      });

      let wrapper=createElement('div',{id:'IconBox',className:'box-grid'})//,innerHTML:content});
      wrapper.append(content);

      footer=createElement('footer',{id:'footer',style:'background-color:salmon;'});
      footer.append(content,deets);
      document.body.append(footer);  
      
      if (Socials.settings.branding===true){
          let container = createElement('p',{id:'Bloodworks',innerHTML://<p> Some rights reserved under the creative commons <a href="http://www.bloodweb.net/Internal/License.txt">License</a> </p>
              `<p style="text-align:right; margin-right:min(2vw,16px)">Powered by &#127341;<a href="http://www.bloodweb.net">Bloodweb.net<img src="http://www.bloodweb.net/favicon.ico"></img></a></p>`
          });    
          footer.append(container);
      }

  }

}



let OL = function(){
  console.log("Beginning OL");
AddLightDarkSwitcher();
  

// Add Header and Footer
  //appendToolbar();

  if('links' in Socials && Socials.links.length>0){
    Socials.createFooter();
  }

  //let ColorShiftertimer =
  setInterval(ColorShift,100) ;
  //Scroll page to top (Helps with js created elements)
  ScrollHome();


}
