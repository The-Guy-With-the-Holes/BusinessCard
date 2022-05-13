

function Log(message, callLocation){
  if(!message || !callLocation){return alert('Missing message || CallLocation')}
  console.log(message+':\n Caller:'+callLocation);
}

//document.querySelector("body").style.display="none";
//popUp('💖Thankyou💖 for Leaving a review!!', 'I feel bad i can\'t offer you anything in return but heres some sites i use that have rewards that might benefit you');
function popUp( Header, message){

    if(!Header){return console.error('PopUp needs header');}
    if(!message){message="Placeholder Message"}
    let text = document.createTextNode(Header); let DIV = document.createElement('div');
    let p = document.createElement('P'); let PopUpMessage= document.createTextNode(message);
  
    DIV.appendChild(text); DIV.appendChild((document.createElement('br')));  
    p.appendChild(PopUpMessage); DIV.appendChild(p);
    setAttributes(
      DIV,{
      "name": "PopUP", 
      "style":"margin:auto;position:absolute;top:0;left:0;right:0;margin-top:1vh;text-align:center;"+
      "height:min-content; "+
      "max-width:80vw; width:80%; backGround-Color:green;  font-Size:10vmin;"+
      "border:2vmin double dodgerblue;"} )      
    document.body.appendChild(DIV);
} 
function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }