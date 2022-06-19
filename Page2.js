
function CreateSpecial(t){

    if (!Get.Pages.includes(t)){return console.error('Cannot Create page not refr');
    } else {
        
        if (t=="Certificates"){ return createCertTable();}
        if (t=="Projects"){ return createProjectsPage();}
        if (t=="About"){ return}
        if (t=="Contact"){return createPage(t)}        
    }
}
function createPage(t){
let d = document.createElement('div');
let s = document.createElement('span');
let target = document.getElementById(t);

if(t=="Contact"){let x = ['Jack.ewers@protonmail.com','+(61) 479 000 429']
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
    setAttributes(img,{'class':'ContactBtns'+' CtBtnsx'+(el)});
    a.setAttribute('href',contactBtns[el]+':'+x[el]);
    a.append(img);
    d.append(a)
    }

  target.append(d);
return;}   
}

