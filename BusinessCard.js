function debug(type,word,action){ 
    if(Debug[type]==true){
        console.log(word+' Has been '+action+'ed');  
    }
}

function getval(start,end){
    let v = [];

    for(let i =start; i<end+1; i++){
let arr= i+'%{background:linear-gradient('+i*3.65+'deg,salmon,lightpink);}';
    v.push(arr);
}console.log(v.join(' '))
}

function checkPagestoclear(){
for (let i=0; i<Get.Pages.length; i++){
    let item = Get.Pages[(i)]
    if(document.getElementById((item))){
console.error('xe'); clearPage((item)); }
}}

function clearPage(item){
    let getItem=document.getElementById(item);
    if(!getItem){console.error(item+':: No item to clear // Clear page');
    }

    if(getItem.style.display=="none"){return;}
    else {getItem.style.display="none";}
}

function flip(page , sub){
let GM = Get.Page.Home; let GH = Get.Page.About; let GC = Get.Page.Cert; let GT=Get.Title; let GP =Get.Page.Projects
let GCi = Get.Page.Contact;
//Checks page is specified and page2 isnt open
    if(!page) return alert('When flipping, please specify page to flip');
    if (Get.Page.Page2.style.display!="none") closeExtProfile();
    if(page=="Extend"){if(!sub){sub='Basic'}return extendProfile(sub);}    
    checkPagestoclear(); 
    if (GT.innerText=="Certificates"){clearCerts()}
    GT.innerText=page; LoadNewNavBar(page);
    if(page=="About" && GH.style.display=="none"){ return GH.style.display = "" ;}
    if(page=="Home" &&  GM.style.display=="none") {return GM.style.display = "" ;}
    if(page=="Certificates" && GC.style.display=="none"){return createCertTable();}
    if(page=="Contact" && GCi.style.display=="none"){return GCi.style.display='';}
    if(page=="Projects" && GP.style.display=="none"){return CreateSpecial(GP); }
    Log('Flip completed full function, page was probably already open', 'FLip LL')
}


//Page 1 Main

// Sets New rotation & Background for .Balls
function IconHovered(e,callfrom){
    if (!e || !callfrom) return console.error('%cICON Hover ERROR',"color:Green; font-size:4vw;");
    let H1=(generateHex(2,6)); let H2 =generateHex(2,8);
    let colorarray=  ('#'+H1+',')+('#'+H2+','); 
    let Background= (((randomNum(0,255))+'deg,')+colorarray+colorarray+('#'+H1+',')+('#'+H2));
  
    if(document.documentElement.style.getPropertyValue('--rotation-direction')=="360deg"){  document.documentElement.style.setProperty('--rotation-direction', (-360+'deg'));}
    else{ document.documentElement.style.setProperty('--rotation-direction', (360+'deg')); }
    document.documentElement.style.setProperty('--icon-background', Background ); 
    
    if(Debug.Hex==false) return;    
    console.log(callfrom+': Caller Created >> Hex :'+(Background));   
}







// Page 1(f) #About


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


//Page2

//Extend Profile
function extendProfile(name){
  Get.Extndbtn.style.transform="rotate(180deg)";    
  if (!name) {console.warn('Please Use name when extending');
      return CreatePage2("The Homies",true);
    }
CreatePage2(name)
}

