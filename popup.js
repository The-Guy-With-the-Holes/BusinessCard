

function Log(message, callLocation){
  if(!message || !callLocation){return alert('Missing message || CallLocation')}
  console.log(message+':\n Caller:'+callLocation);
}

//document.querySelector("body").style.display="none";
//popUp('💖Thankyou💖 for Leaving a review!!', 'I feel bad i can\'t offer you anything in return but heres some sites i use that have rewards that might benefit you');
function popUp( Name, message){

  if(!Name){return console.error('PopUp needs Name');}
  if(!message){message="Placeholder Message"}
  let text = document.createTextNode('for Leaving a review!!'); let DIV = document.createElement('div');
  let p = document.createElement('P'); let PopUpMessage= document.createTextNode(message);
  let button = document.createElement('button'); Name = Name.toUpperCase();

  //Thanks!
  DIV.appendChild((document.createTextNode('💖Thankyou💖'))); DIV.appendChild((document.createElement('br')));
  DIV.appendChild((document.createTextNode(Name)));  DIV.appendChild((document.createElement('br')));
  DIV.appendChild(text);   

  p.appendChild(PopUpMessage); DIV.appendChild(p);
  
  setAttributes(button,{"id":"ExitButton", 'onclick': 'closePopUP()',
  'style':'position:absolute; right:0; top:0; height:content; width:content;'+
  'font-size:4vmin; font-family:\'Akronim\', cursive; color:red;'+
''})
  setAttributes(DIV,{"id": "PopUP", 
    "style":"margin:auto;position:absolute;top:0;left:0;right:0;margin-top:1vh;text-align:center;"+
    "height:min-content; "+
    "max-width:80vw; width:80%; backGround-Color:green;  font-Size:10vmin;"+
    "border:2vmin double dodgerblue;"} )
  button.appendChild(document.createTextNode('X'));
  DIV.appendChild(button);      
  document.body.appendChild(DIV);
  document.querySelector('footer').style.display="none";
} 
function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }

function closePopUP(){
document.getElementById('PopUP').remove();
}
function OpenReview(){
  Get.revForm.style.display=''; document.getElementById('RevBTNX01').remove();
}