let dropStatus="none"; let Drops=[1,0];
let lastDrop = 0;
function toggleAboutDropdown(c){
  let drop = document.querySelectorAll('.Aboutdropdown-content');  
  
  if (c==0||lastDrop==1) {dropStatus="none";}  
  else if(lastDrop==0 || c==1  ){dropStatus="block"; }
   
  for(let i = 0; i<drop.length; i++){
  //Checks cls var || drop is open 
  let x = drop[i];
  x.style.display=dropStatus;
  }if(!c){c=Drops[lastDrop];}
  lastDrop=c;
} 

function createPage(t){
let target = document.getElementById(t);
if (!Get.Pages.includes(t)){return console.error('Cannot Create page not refr');}
if(target.style.display=="none"){target.style.display="";}
if (t=="Home"){return;}  
if (t=="Certificates"){ return createCertTable();}
if (t=="Recommends"){return CreateRecommendationpage();}
if (t=="Projects"){ return createProjectsPage();}     
if(t=="About"){Get.Page.About.style.display=""; toggleAboutDropdown(0);}
if(t=="Contact"){ CreateContactpage(t); toggleAboutDropdown(0);}
}

function CreateRecommendationpage(){
  let target = Get.Page.Recommends;
 target.innerHTML="";
  let title= document.createElement('p');title.append(document.createTextNode('Recommendations:'));
  title.setAttribute('class','RecTitle');
  target.append(title);
  for(let i =1; i < sponsors.length; i++){let a =document.createElement('a'); let div = document.createElement('div'); let btn =document.createElement('button');
   let img = document.createElement('img'); let p = document.createElement('p'); let about = document.createElement('p'); 

   setAttributes(a,{'href':sponsors[i][1]});
   a.append((document.createTextNode('>Visit Site!<')))
   btn.append(a); 
   p.setAttribute('class','RecomName');
    p.append((document.createTextNode(sponsors[i][0])));
    setAttributes(img,{'src':sponsors[i][3]});
    about.append((document.createTextNode(sponsors[i][2])));
    about.setAttribute('class','RecomAbout');

    div.append(p,img,about,btn);
    setAttributes(div,{'class':'Recommendations'});
target.append(div);  }

}

function CreateContactpage(t){
let d = document.createElement('div');
let s = document.createElement('span');
let target = document.getElementById(t);
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
}   


