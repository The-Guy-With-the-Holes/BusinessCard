function debug(type,word,action){ 
    if(Debug[type]==true){
        console.log(word+' Has been '+action+'ed');  
    }
}

function flip(page){
    //Checks page is specified and page2 isnt open
    if(!page) return alert('When flipping, please specify page to flip');
    if (Get.Page2.style.display!="none") closeExtProfile();

    if(page=="about"){
    Get.Hidden.style.display = "" ;
    return Get.Main.style.display = "none" ;
    }
    if(page=="main") {
        Get.Hidden.style.display = "none" ;
        Get.Main.style.display = "" ;
    }
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




//Extend Profile
function extendProfile(name){
    if (name==undefined) {name ="BloodWorks© Development";}
    Get.Extndbtn.style.transform="rotate(180deg)";
    CreatePage2(name);
}


// Page 1(f) #About


document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', e => { 
        let ListText = e.target.innerText.split(' ');      
        test(e);  CreatePage2(ListText);               
        debug('List',ListText[0],'Click');    
       // DIV (x.parentElement.parentElement);
    }) 
    item.addEventListener('mouseenter', e => {
        let ListText = e.target.innerText.split(' '); 
        debug('List',ListText[0],'Hover'); 
    })
})


//Page2