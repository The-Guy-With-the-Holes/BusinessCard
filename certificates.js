

//Certificates
var BlockIndex = 0 ;
var MainTitle = document.querySelector('#MainTitle');
var CertField = document.getElementById('CertField');

function incBlock(Direction){
    let Max = 4;
    if(!Direction) return alert('Inc Block needs a direction to run');

    if (Direction=='Fowards'){BlockIndex+=1;}
    else if(Direction=='Reverse'){BlockIndex-=1;}

    if(BlockIndex>Max){BlockIndex=0;}
    if(BlockIndex<0){BlockIndex=Max;}
    createCertTable(true);
}

function createCertTable(neu){
Get.Title.innerText="Certificates";
   let certwrap = document.getElementById('Cert_Wrapper'); 
   if(certwrap.style.display=="none"){certwrap.style.display="";}

   if(neu){console.log('BlockIndex has a new value, creating new Certifcates'); CertField.innerHTML='';}
 
    var Block = Object.entries(Blocks)[BlockIndex];
    let name = Block[0];
    let Classname = name.split(" ")[0];
    MainTitle.innerText =  name;
    CertField.setAttribute('class',Classname+'Certfield');
    MainTitle.setAttribute('class',Classname);

    for (let i = 0; i <Block[1].length; i++){
        // Generate Elements
        let BlockName = Block[1][i];
        let Div = document.createElement('div');
        let Img = document.createElement('img');
        let text = document.createElement('p');
        let Para = document.createTextNode(BlockName);

        //Build and place
        //  text.apppendChild(Para)
        setAttributes(Img,{'src' : "Certificates/"+BlockIndex+name+'/'+BlockName+'.jpg'
                            , 'class':'BlockImg'} )
        text.innerText=BlockName;
        Div.appendChild(text);
        Div.appendChild(Img);
        setAttributes(Div, {'id': 'Div'+i,'name':BlockName,
        'class':'Certificate_Block'+' '+Classname+'certfield',
        'style':''});
        CertField.appendChild(Div);
       }
   }
   function clearCerts(){
       Get.Page.Cert.style.display="none";
   }