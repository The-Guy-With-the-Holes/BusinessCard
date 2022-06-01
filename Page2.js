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
        Img.setAttribute('src', BlockIndex+name+'/'+BlockName+'.jpg' )
        text.innerText=BlockName;
        Div.appendChild(text);
        Div.appendChild(Img);
        setAttributes(Div, {'id': 'Div'+i,'name':BlockName,
        'class':'Block'+' '+Classname+'certfield',
        'style':' color: green;'});
        CertField.appendChild(Div);
       }
}






