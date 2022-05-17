const Debug = {
    Hex:true,
    Icon:true,
}

// Variables
const H5 = document.createElement('h5');

const P = document.createElement('p')


//Get References
const Page2 = document.getElementById('secondBox');


//Balls
let MainRotations=0;
function mainimgRotate(){
    MainRotations++;countforbitcoin(1);
    document.documentElement.style.setProperty('--Mainro', (180+(MainRotations*90)+'deg')); }

//Suprisingly Simple Ball-Event Handler
document.querySelectorAll('.Rotern').forEach(item => {
item.addEventListener('mouseenter', e => {
    IconHovered(e);

if(Debug.Icon==false) return;
    let Child = e.target.querySelector('.balls').id;
    console.log(Child+' Ball Hover ');    
   // DIV (x.parentElement.parentElement);
}) })

function IconHovered(e){
    if (!e) return console.error('%cICON Hover ERROR',"color:Green; font-size:4vw;");
    let id = e.target.id; let Hex =  generateHex(2,8); let Hex2 =generateHex(2,8);
    let colorarray=  ('#'+Hex+',')+('#'+Hex2+',')+('#'+Hex+',');
    let colorarray2= ('#'+Hex2+',')+('#'+Hex+',')+('#'+Hex2+'');
    let degree= ((randomNum(0,255))+'deg,'); let Background= (degree+colorarray+colorarray2 );
  
    if(document.documentElement.style.getPropertyValue('--rotation-direction')=="360deg"){  document.documentElement.style.setProperty('--rotation-direction', (-360+'deg'));}
    else{ document.documentElement.style.setProperty('--rotation-direction', (360+'deg')); }
    
    if(Debug.Hex==false) return;    
    console.log(id+': id <> redhe x :'+(Hex)+'\n HexType:');
    console.warn(Background);  console.warn(colorarray);
    document.documentElement.style.setProperty('--icon-background', Background ); 
   
}

