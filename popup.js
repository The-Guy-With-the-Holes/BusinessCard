//document.querySelector("body").style.display="none";
popUp('Test');
function popUp( Header){
    if(!Header){return console.error('PopUp needs header');}
    
    let text = document.createTextNode( Header);
    var DIV = document.createElement('div');
    DIV.appendChild(text);
   setAttributes(DIV,{"name": "PopUP", "style": "position:absolute; height:10vh; backGround-Color:green; text-align:center; font-Size:10vmin;"} )      
    document.body.appendChild(DIV);
} 
function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      }