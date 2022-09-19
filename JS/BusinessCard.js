function debug(type,word,action){ 
    if(Debug[type]==true){
        console.log(word+' Has been '+action+'ed');  
    }
}

function getval(start,end){let v = [];
    for(let i =start; i<end+1; i++){
        let arr= i+'%{background:linear-gradient('+i*3.65+'deg,salmon,lightpink);}';
        v.push(arr);
    }
console.log(v.join(' '))
}


/* Page Management */

function checkPagestoclear(){
for (let i=0; i<Get.Pages.length; i++){
    let item = Get.Pages[(i)]
    if(document.getElementById(item).style.display!="none"){
console.error(item+"Is now Cleared"); clearPage((item)); }
}}

function clearPage(item){
    let getItem=document.getElementById(item);
    if(!getItem){console.error(item+':: No item to clear // Clear page');}
    if(getItem.style.display=="none"){return;}
    else {getItem.style.display="none";}
}

function flip(page,sub){
let GT = document.title;

//Checks page is specified 
if(!page) return alert('When flipping, please specify page to flip');
LoadNewNavBar(page);

//Check About is a true flip & sub exists
if(page=="About"){
    if (!Get.AboutPages.includes(sub)) {return  toggleAboutDropdown();}
    else { page = sub; toggleAboutDropdown();}
}
if (GT.innerText=="Certificates"){clearCerts();}   
if(Get.Pages.includes(page)){
    checkPagestoclear(); 
    GT.innerText=page;
    createPage(page);
}
console.log('Flip completed full function, About was probably clicked --called from Flip ');
}


/*########################
 Main Image/img Slider
//########################*/

let radio = document.querySelectorAll('.radio-main');   

let slider = document.querySelectorAll('.slider-main');

class MainImageSlider{
    constructor(position, max){
        this.position = position;
        this.max = max;
        this.img = document.getElementById('image-main');
    }

    setPosition(inc){
        for(let i=0; i<radio.length; i++){radio[(i)].checked=false};
        
        if(inc){
            if (inc==">"){this.position++; }
            if (inc=="<"){this.position--; }
          
            if (!isNaN(inc)){ this.position=inc;}
        }
        if(this.position > this.max){ this.position=0;}
        else if (this.position<0){this.position=this.max;}
        
        radio[(this.position)].checked=true;
        this.img.src='i/Personal/mainimg'+this.position+'.png';
    }
    
}

let mainimg = new MainImageSlider(0,2);
mainimg.setPosition();

for (let i=0; i<slider.length; i++){ 
    let arrow= slider[(i)].innerText;
    slider[(i)].setAttribute('onclick','mainimg.setPosition(\''+arrow+'\'); unlockQOTD();');
} 

radio.forEach(el => el.addEventListener('click', event => {
    mainimg.setPosition(event.target.getAttribute("value"));
    
}));

/*###################################################################
  h3 and quote of the day
*/

let QuoteoftheDay = getQOTD();

//Quote of the day
function getQOTD(day) {
  if(!day){ day = new Date().getDay(); }
  return QOTD[(day)];  
  //createQOTDbox(Quote, day);
}

function unlockQOTD(){ // runs on right image scroll
  let flipbtn = document.getElementById('main-desc-flip');
  if(flipbtn.style.opacity==0){flipbtn.style.opacity=0.8; flipmainText();}
}

function setDefaultmainText(){
let a = document.getElementById('main-desc');
a.innerText = Get.Main.main_desc;
a.style.fontSize="2.6vw";
}

function flipmainText(){ let m = document.getElementById('main-desc');
    if(m.innerText.includes(QuoteoftheDay)){setDefaultmainText();}
    else{replaceMainDesc();}
    m.classList.add('Lister');
    setTimeout(() => {
        m.classList="";
    },1000 );
}


function replaceMainDesc(Quote){
    let desc = document.getElementById('main-desc');
    let quoteFont;
    let x = getQOTD(); 
    if(Quote){ let x=Quote; }
    
    if(x.length>50 && x.length<99){ quoteFont='10vw';}
    else if(x.length>100){ quoteFont='2vw';}
    
    desc.style.fontSize=quoteFont;
    desc.innerText= x+'\n\n-- Quote of the day';
}

function switchIconBox(show){
let IconBoxMaster = document.getElementById('IconBox');
let IconSwitch = document.getElementById('Home-Icon-Button');

    switch (show) {
        case true:
            IconBoxMaster.style.display="block";
            IconSwitch.innerText="⇪"; 
            IconSwitch.setAttribute('onclick',"switchIconBox(false)");
            break;
        case false:
            IconBoxMaster.style.display="none";
            IconSwitch.innerText="⇩";
            IconSwitch.setAttribute('onclick',"switchIconBox(true)");
            break;
    }
}





/* Home Specific Functions*/
//IDLE TIMER
function idleclass(clss){ 
let targ = document.getElementById('locko');
    if(targ.classList.contains('idle')&&clss==false){
        targ.classList="mainx";iconidle(false);
    }
    if(!targ.classList.contains('idle')&&clss==true){
    targ.classList="mainx idle"; iconidle(true);
    } return;
}

function iconidle(remove){
    let targ =document.querySelectorAll('.balls');
for(let i =0; i<targ.length; i++){ let key = targ[i];
    if(remove ==true){ 
        if(i%2==0){key.setAttribute('class','balls iconidleF');
        continue;}
    key.setAttribute('class','balls iconidleR');
    }
    if(remove==false){key.setAttribute('class','balls');}
    }
}

let MainRotations=0;
function mainimgRotate(){
    MainRotations++;
    document.documentElement.style.setProperty('--Main-Img-Rotation', (180+(MainRotations*90)+'deg')); 
}

//Suprisingly Simple Ball-Event Handler
document.querySelectorAll('.Rotern').forEach(item => {
item.addEventListener('mouseenter', e => {
let Child = e.target.querySelector('.balls').id;    
    IconHovered(e,Child);
    }) 
})

// Sets New rotation & Background for .Balls
function IconHovered(e,callfrom){
    if (!e || !callfrom) return console.error('%cICON Hover ERROR',"color:Green; font-size:4vw;");
    let H1=(randomHex()); let H2 =randomHex();
    let colorarray=  ('#'+H1+',')+('#'+H2+','); 
    let Background= (((randomNum(0,255))+'deg,')+colorarray+colorarray+('#'+H1+',')+('#'+H2));
  
    if(document.documentElement.style.getPropertyValue('--rotation-direction')=="360deg"){  document.documentElement.style.setProperty('--rotation-direction', (-360+'deg'));}
    else{ document.documentElement.style.setProperty('--rotation-direction', (360+'deg')); }
    document.documentElement.style.setProperty('--icon-background', Background ); 
    
    if(Debug.Hex==false) return;    
    console.log(callfrom+': Caller Created >> Hex :'+(Background));   
}


/* About Specific functions  */

document.querySelectorAll('ul>li').forEach(item => {
    item.addEventListener('click', e => { 
        let ListText = e.target.innerText.split(' ');      
        test(e); CreatePage2(ListText);               
        debug('List',ListText[0],'Click');    
       // DIV (x.parentElement.parentElement);
    }) 
    item.addEventListener('mouseenter', e => {
        let ListText = e.target.innerText.split(' '); 
        debug('List',ListText[0],'Hover'); 
    })
})