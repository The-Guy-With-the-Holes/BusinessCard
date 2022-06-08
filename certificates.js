


var BlockIndex = 0 ;
var MainTitle = document.querySelector('#MainTitle');
var CertField = document.getElementById('CertField');

const Blocks = {

    'Program Hub':
    ['Fundamentals','HTML','HTML Advanced','CSS','JavaScript','TypeScript',
    'Javascript Advanced','Node-JS','Meteor-JS','Jquery','React Native', 'WordPress',
    'Growth Hacking','GitHub','Python','SQL','SEO','Ethical Hacking',
    'Linux','Docker','BootStrap','PHP','NLP', 
    'CryptoCurrency','BlockChain','Solidity', 'NFTS'
    ],

    'Solo Learn':
    ['HTML','CSS','JavaScript','Web-Dev Fundamentals','Responsive Web-Design',
    'React+Redux',
    'JS Game Development','Coding for Marketers','JQUERY', 'Python for Beginners',
     'Python Core','SQL','C'
    ],

    'Grasshopper':
    ['Coding Fundamentals-I','Coding Fundamentals-II', 'Intro to Interviewing',
     'Array Methods','Debugging', 'Animations'
    ],

    'Ethical Hacker': //Completed
    ['Certified Ethical Hacker',
    'Intro','Threats & Attack-Vectors', 'Concepts, Types & Phases',
    'FootPrinting & Recon', 'Scanning-Networks & Enumerations',
    'System Hacking', 'Malware, Trojans, Worms','Network Sniffing',
    'Social Engineering', 'Denial of Service', 'Session Hijacking',
    'WebServer Hacking'
    ],

    'HackerX': //Completed 
    ['HackerX Master',
    'Know the OS', 'Hack the MAC', 'Gathering Information', 'Anonymous Surfing',
    'Hiding Messages', 'Social-Media Hacking', 'Credit,Debit-Card Fraud',
    'Keyboard Spying', 'WEP-Cracking', 'WPA,WPA2-Cracking', 'Network Spying', 
    'Database Hacking', 'Android Hacking', 'Bringing Down a Website',
    'XSS,Cross-Site-Scripting', 'Making data safe', 'Hacking Passwords', 
    'WordPress Scanning', 'Vunerability Scanning & Reporting' ]
}


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