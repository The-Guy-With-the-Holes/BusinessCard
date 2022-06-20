function toggleAboutDropdown(close){
  let drop = document.querySelectorAll('.Aboutdropdown-content');
  for(let i = 0; i<drop.length; i++){
  //Checks cls var || drop is open 
  if(close==true || drop[i].style.display=="block"){ drop[i].style.display="none";}
  else if(close==false || drop[i].style.display=="none") {drop[i].style.display="block";} 
  }
} 

function createPage(t){
 if (!Get.Pages.includes(t)){return console.error('Cannot Create page not refr');}
  
let d = document.createElement('div');
let s = document.createElement('span');
let target = document.getElementById(t);

if (t=="Home"){if(Get.Page.Home.style.display=="none"){Get.Page.Home.style.display="";}return;}  
if (t=="Certificates"){ return createCertTable();}
if (t=="Projects"){ return createProjectsPage();}     
if(t=="About"){Get.Page.About.style.display="";}
if(t=="Contact"){
  if( Get.Page.Contact.style.display=="none"){Get.Page.Contact.style.display=''; }

  let x = ['Jack.ewers@protonmail.com','+(61) 479 000 429']
    let h5 = document.createElement('h5')
    let contactBtns =['tel','mailto']
    
    target.innerHTML = "";
    h5.append(document.createTextNode(t));
    d.append(h5);
    
    for(el in x){ let p = document.createElement('p');
      if(el==0){ Cont = document.createTextNode("Email: "+x[el]);}  
      else{ Cont = document.createTextNode("Phone: "+x[el]);}  
      p.append(Cont);d.append(p);
    };
    for(el in contactBtns){let a = document.createElement('a');
    let img = document.createElement('img');
    let ph = document.createElement('p');
    setAttributes(img,{'class':'ContactBtns'+' CtBtnsx'+(el)});
    a.setAttribute('href',contactBtns[el]+':'+x[el]);
    if(el==0){ph.append((document.createTextNode('Email:')))}
    if(el==1){ph.append((document.createTextNode('Call:')))}

    a.append(ph,img);
    d.append(a)
    }
  target.append(d);
  return;}   
}

