//
let CP='Home';
const Pages =['Home','Store','Contact'];


function setAttributes(el, attrs) {
  for (var key in attrs) { el.setAttribute(key, attrs[key]); }
}


const Farms = {
  Desc:' founded in 2007 by Michelle Gardner, The Gardner Family Farm is committed to providing the highest quality Olive Oil from GMO and pesticide free olives, we don\'t compromise on quality or taste ',
}

const items = {
  items: [i1 = 'Oil', i2 = 'Corks'],
  sizes: ['Small', 'Medium', 'Large'],

  OilSizes: [S = ['Small', '250ml', 25, 'https://user-images.githubusercontent.com/84670867/149896106-e01b47ff-adf2-40c4-8b82-86d80748e978.jpg'],
  M = ['Medium', '500ml', 35, 'https://user-images.githubusercontent.com/84670867/149896098-99ceaa28-cdad-4b0c-af2d-62d196d1d09b.jpg'],
  L = ['Large', '750ml', 55, ' https://user-images.githubusercontent.com/84670867/149896090-8897355f-b991-4816-820c-53a5b6ff7993.jpg'],
    //  XL=[''] 
  ],
  OilVarieties:{ names:['New Norcia Mission', 'Hardys Mammoth', 'Manzanillo', 'Mission', 'Mediterranean', 'Barnea', 'Correggiola'],
                desc:['Smooth tasting and creamy like butter, works well with everything',
                      'A uniquely Australian Olive, \'Lovely, Large & Sweet\' -The Diggers Club',
                      'Commonly used for table olives, Manzanilla(o) are the perfect all rounders!',
                      'Mission, like its family olive \"NewNorcia\" has a buttery flavour',                          
                      'Med',
                      'Barnea',
                      'Corregello'],
                    },
}

// Page Orientation
function FlipPage(page){ if(!page){return console.error('Specifiy Page');}
cp=page;  resetNav(page);
let main = document.querySelector('main');
  let h2 = document.createElement('h2'); setAttributes(h2,{'class':'oiltitle',});
  let div=document.createElement('div');div.setAttribute('id','item_area');
  main.innerHTML="";  
  
  switch(page){  
    case 'Home':// h2.append(document.createTextNode("Home"));       
      break;
    case 'Store': h2.append(document.createTextNode("Premium Oil"));
      break;
  }
main.append(h2,div);
if(Pages.includes(page)){appendItems(page);}
}

function appendItems(type) {
switch(type){
  case 'Store': appendOil(); appendOilInfo(); break;
  case 'Home': appendHome(); break; 
  }
}






let selectoil = "";
function selectOil(s) {
  if (selectoil == "") { selectoil = 0; }
  if (!s) { return; }
  selectoil = s;
}

function setOilSize(s) {

  selectOil(s);
  let img = document.getElementById('Oilimg');
  img.setAttribute('src', items.OilSizes[selectoil][3]);
}

function setChecked(id) {
  if (!id) return alert('Set checked needs a name');
  document.getElementById(id).checked = true;
}

function updateOILInfo(){
let S = getSelectedOilSize();
let V = getSelectedOilVariety();
let title =document.getElementById("OilNameTitle");
let desc =document.getElementById("OilDescription");
let img = document.getElementById("OliveImage");

title.innerText=V; img.setAttribute('src','pic/Olive/'+V+'.png')
desc.innerText=(items.OilVarieties.desc[(items.OilVarieties.names.indexOf(V))]);
return S+V;
}


function getSelectedOilVariety(){
  let x = document.getElementById('OilVarCH');

  return x.value;
}
function getSelectedOilSize() {
  let x = document.querySelectorAll('.OilSizes');
  for (let i = 0; i < x.length; i++) {
    if (x[i].checked == true) {
      return (x[i].id);
    }
    if (i == x.length - 1) { return 'Large'; }
  }
}

function updateOIL(text) {
  let x = getSelectedOilSize();
  let arr = items.OilSizes[(items.sizes.indexOf(x))];
  let ML = arr[1]; let price = arr[2]; let blend = document.getElementById('OilVarCH').value;

  let endText = blend + " in " + ML + " has a value of" + price;
  if (text == true) { return endText; }
  let parent = document.getElementById("form");
  let before = document.querySelector('.s');
  let div = document.createElement('p');
  div.append(document.createTextNode(endText));
  parent.insertBefore(div, before);
}


function MakePurchase() {

}


//Appending Items
//Home

function appendHome(){ if(document.getElementById('Hcontact').style.display="none"){document.getElementById('Hcontact').style.display=""}
  let targ = document.getElementById('item_area');
  let div=document.createElement('div');
  let title = document.createElement('p'); title.setAttribute('class','title');
  let desc = document.createElement('p'); desc.append(document.createTextNode(Farms.Desc));
  title.append((document.createTextNode('Gardner Family Farm')));

  div.append(title,desc);
  targ.append(div);
}


//Store

function appendOilInfo() {
  let targ = document.getElementById('item_area');
  let oilDiv = document.createElement('div'); setAttributes(oilDiv, { 'class': 'OilDiv' });
  let oilDescription = document.createElement('div'); setAttributes(oilDescription,{'class':'item_wrapper', 'style':'height:60%;'});
  let title = document.createElement('p'); setAttributes(title,{'class':'OilTitle','id':'OilNameTitle'});
  let p = document.createElement('p'); setAttributes(p,{'id':'OilDescription'})
  let OliveImg = document.createElement('img');setAttributes(OliveImg,{'src':'pic/Olive/New Norcia Mission.png','id':'OliveImage','class':'Oilimgs item_wrapper'})
  //Desc
  p.append(document.createTextNode(items.OilVarieties.desc[0]));
  title.append(document.createTextNode('New Norcia Mission'));
  
  oilDescription.append(title,p);

  oilDiv.append(oilDescription, OliveImg);
  targ.append(oilDiv);
}

function appendOil() {  if(document.getElementById('Hcontact').style.display!="none"){document.getElementById('Hcontact').style.display="none";}
  let targ = document.getElementById('item_area'); 
  let oilDiv = document.createElement('div'); setAttributes(oilDiv, { 'class': 'OilDiv' });
  let oilImg = document.createElement('img'); setAttributes(oilImg, { 'id': 'Oilimg', 'class': 'Item_wrapper' });
  oilDiv.append(oilImg);
  let form = document.createElement('div');
  let sizetext = document.createElement('p'); sizetext.append(document.createTextNode('Sizes :'));
  form.append(sizetext);
  //Oil Sizes
  for (let i = 0; i < items.OilSizes.length; i++) {
    let char = items.OilSizes[i][0][0]; let item = items.OilSizes[i][0];
    let sizeRadio = document.createElement('input');
    let radioLabel = document.createElement('label');
    setAttributes(radioLabel, { 'for': item })
    setAttributes(sizeRadio, {
      'type': 'radio', 'name': 'Sizes', 'id': item, 'value': char, 'class': 'OilSizes',
      'onclick': 'setChecked(' + item + ')'
    })
    radioLabel.append((document.createTextNode(char)));
    //setfirst
    if (i == 0) { sizeRadio.setAttribute('checked', true); }
    form.append(sizeRadio, radioLabel);
  }
  let varText = document.createElement('p'); varText.append(document.createTextNode('Varieties:'));
  form.append(varText);
  //Varieties
  let select = document.createElement('select'); setAttributes(select, { 'id': 'OilVarCH', 'name': 'Varieties','onchange':'updateOILInfo()' });
  for (let i = 0; i < items.OilVarieties.names.length; i++) {
    let item = items.OilVarieties.names[i]//.split(' ','');
    let option = document.createElement('option');
    setAttributes(option, {
      'name': 'Varieties', 'id': item, 'value': item, 'class': 'OilVarieties',
      'onclick': 'setChecked(' + item + ')'
    });
    option.append(document.createTextNode(item));
    select.append(option);
  }
  form.append(select);

  let descText = 'Quantity:'//updateOIL(true);
  let descp = document.createElement('p');
  descp.append((document.createTextNode(descText)));
/*  let sbtn = document.createElement('button'); sbtn.setAttribute('class', 's');
  sbtn.append(document.createTextNode('Add to Cart'));
 */

  let Qinput = document.createElement('input'); setAttributes(Qinput,{'id':'','type':'number','min':1})
 form.append(descp,Qinput);

  setAttributes(form, { 'class': 'Item_wrapper', 'id': 'form', });
  oilDiv.append(form)//,sbtn);
  targ.prepend(oilDiv); setOilSize();

}

//Nav
function resetNav(page){if(!page){page=cp;}
let navHome=document.getElementById('NavHome'); navHome.innerText='≡ '+page+" ";
let i = document.createElement('i'); i.setAttribute('class','fa fa-caret-down');
let navlist = document.querySelector('.NavDropContent')
navHome.append(i);

navlist.innerHTML="";
for (var key in Pages){
  
  let a = document.createElement('a'); a.setAttribute('onclick','FlipPage(\''+Pages[key]+'\')');
  a.append((document.createTextNode(Pages[key])));
 if(Pages[key]!=page){ navlist.append(a);}
}
}


const Ref = [
  'https://www.diggers.com.au/products/olive-hardys-mammoth'
]