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

//Extend Profile
function extendProfile(name){
    if (name==undefined) {name ="BloodWorks© Development";}
    Get.Extndbtn.style.transform="rotate(180deg)";
    CreatePage2(name);
}



//Page2
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', e => { 
        let ListText = e.target.innerText.split(' ');      
        test(e);                 
        debug('List',ListText[0],'Click');    
       // DIV (x.parentElement.parentElement);
    }) 
    item.addEventListener('mouseenter', e => {
        let ListText = e.target.innerText.split(' '); 
        debug('List',ListText[0],'Hover'); 
    })
})
