let dropStatus="none"; 
let lastDrop = 0;
function toggleAboutDropdown(c){ let Drops=[1,0];
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

switch (t) {
  
  case "Home": break;
  case "About": CreateAboutPage(); return toggleAboutDropdown(0);
  case "Contact": CreateContactpage(t); toggleAboutDropdown(0); break;
  case "Certificates": createCertTable(); break; 
  case "Recommendations": CreateRecommendationpage(); break;
  case "Projects": createProjectsPage(); break;
  
  default: return console.error('createPage didnt match case');
  }

}

function CreateAboutPage(){
  let targ = Get.Page.About;
  targ.innerHTML="";
  let title=document.createElement('h4'); title.append((document.createTextNode('About Me')))
  let abouttext=document.createElement('p'); abouttext.setAttribute('id','about');
  abouttext.append((document.createTextNode(About.MainTXT[0])),(document.createTextNode(About.MainTXT[1])))  ;
  targ.append(title,abouttext);

  for(let i=0;  i<About.lists.length; i++){
    appendAboutLists(About.lists[i],i);
  }
}

function appendAboutLists(t,idx){if(!About.lists.includes(t))return;
  let targ=Get.Page.About;
  let div = document.createElement('div'); div.setAttribute('class','projects');
  let ul = document.createElement('ul'); let label = document.createElement('label'); label.append((document.createTextNode(About['lists'][idx])));
  ul.append(label);
  for(key in About[t]){
    let li = document.createElement('li'); li.append((document.createTextNode(About[t][key])))
  ul.append(li);
  }
  div.append(ul);
  targ.append(div);
}

function CreateRecommendationpage(){
  let target = Get.Page.Recommends;
 
  let title= document.createElement('p');title.append(document.createTextNode('Recommendations:'));
  title.setAttribute('class','RecTitle');
  let para=document.createElement('p'); para.setAttribute('class','RecommendationsParagraph');
//  para.append(document.createTextNode(Recommendations.intro));
  let search = document.createElement('div'); search.setAttribute('class','RecommendationsSearch');
  let recfield = document.createElement('div'); recfield.setAttribute('id','RecommendationsField');
  let select = document.createElement('select'); setAttributes(select,{'id':'SelectRecType','onchange':'SwapRecType()'});
  for (key in Recommendations.Types){ let RZ = Recommendations.Types[key];
      let option = document.createElement('option'); 
      setAttributes(option,{'class':'RecommendationsType'});
    option.append((document.createTextNode(RZ)));
     select.append(option);
  }
  search.append(select); 
  target.innerHTML="";
  target.append(title,para,search,recfield);
  AppendSponsors();
}

function SwapRecType(){let t=document.getElementById('SelectRecType');
if(Debug.Recom==true){console.log('Changing Rec type: newval='+t.value)}
if(t.value == "All") {return AppendSponsors();}
AppendSponsors((t.value[0]));
}


function AppendSponsors(type){

  let target = document.getElementById('RecommendationsField');
  target.innerHTML="";
  for(let i =1; i < sponsors.length; i++){let a =document.createElement('a'); let div = document.createElement('div'); let btn =document.createElement('button');
   let img = document.createElement('img'); let p = document.createElement('p'); let about = document.createElement('p'); 

   if(type&&!sponsors[i][4].includes(type)){continue;}
   
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

function CreateContactpage(t){ let target = document.getElementById(t);
let d = document.createElement('div'); d.setAttribute('id','ContactWrapper');
let h5 = document.createElement('h5'); let contactBtns =['tel','mailto'];
  
  target.innerHTML = "";

let introText = document.createElement('p'); introText.setAttribute('class','ContactNotes');
introText.append((document.createTextNode(About.ContactIntro))); 
  h5.append(document.createTextNode(t));
  target.append(h5,introText);
    
  for(el in About.Contact.Methods){ let p = document.createElement('p'); let span = document.createElement('span');
    span.append((document.createTextNode(About.Contact.Methods[el]+': '))); span.setAttribute('class','ContactKeys')
      let  Address = document.createTextNode(About.Contact.Address[el]);  
    p.append(span,Address);target.append(p);
  };
  
    for(el in contactBtns){let a = document.createElement('a');
    let img = document.createElement('img');
    let ph = document.createElement('p');
    setAttributes(img,{'class':'ContactBtns'+' CtBtnsx'+(el)});
    a.setAttribute('href',contactBtns[el]+':'+About.Contact.Address[el]);
    if(el==0){ph.append((document.createTextNode('Email:')))}
    if(el==1){ph.append((document.createTextNode('Call:')))}

    a.append(ph,img);
    target.append(a);
  }

let contactFinal = document.createElement('p'); setAttributes(contactFinal,{'id':'ContactFinal','class':'ContactNotes'});
contactFinal.append((document.createTextNode(About.Contact.Outro)))
target.append(contactFinal);  
//Bottom icons
    let wrap = document.createElement('div'); wrap.setAttribute('id','ContactIconWrapper');
    for (key in Social.Names){let name =Social.Names[key];
      let a = document.createElement('a'); let img = document.createElement('img');
      setAttributes(img,{'id':name,'src':'../i/Icons/64BIT(GRAY)/'+name+'.png','class':'ContactIcon'});
      setAttributes(a,{'href':Social.Address[(key)],'target':'_blank'});
      a.append(img);
      wrap.append(a);
    }
  target.append(wrap);
}   


