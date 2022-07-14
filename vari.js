const Debug = {
    T:false,
    Developer:false,
    User:true,
    Hex:false,
    Icon:true,
    List:true,
}

const TODO=[
    'Update Dlink to Farms work',
    ' JS & CSS Page refactoring',
    ' check HTML links'
];

// Variables
const Get = {
    Title:document.querySelector('title'),
    Extndbtn : document.getElementById('ExtendButton'),
    Pages:['Home' ,'About','Contact','Recommends','Certificates'
        ],
    AboutPages:['About','Contact',],
    Page:{
    Home: document.getElementById('Home'),     
    Page2 : document.getElementById('secondBox'),
    About :document.getElementById('About'),
    Recommends:document.getElementById('Recommends'),
    Contact:document.getElementById('Contact'),
    Projects: document.getElementById('Projects'),
    Cert: document.getElementById('Certificates') ,},
    Rev : {
        Form : document.getElementById('ReviewForm') ,
        Btn :document.getElementById("RevBTNX01"),
    },   
}
const About ={ lists:['Hobbies','Passions'], 
                MainTXT:[' Hi there! my name is Jack,',
                'I was born & live in australia, my interests include coding, business management, investing and traveling'],

              Hobbies:['Body-Modification',
                       'Coding','Philosophy'],
              Passions:['Advocating equal rights',
                        'Protecting our planet',
                        'Fighting for Data Protection'],
              Goals:[''],
              Projects:['CryptoKorns','Gardner Family Farms',
                        'The Rand Dumb'],}

const Recommendations={
    intro:'Welcome to the Recommendation section, A list of the businesess and services that are best in class!',
    Types:['Consumables','Bling','Artists','Tradies'],
}

const sponsors = [
    test=['Name','Link','About','ImageURL','Tags[C/B/A]'],
    GF=['Gardener FamilyFarms','https://gardnerfamilyfarm.com.au','Award Winning, Pesticide Free Olive Oil, Farm to table','i/im1.jpg','C'],
    KL=['Kilns Cafe','https://www.kilnscafe.com.au','A heart warming Cafe, Run by a kind soul','i/Icons/Kilns.jpg','CA'],
    JT=['Opal Heart','https://www.OpalHeart.com.au','Profesional Piercing, with talented staff and a world renowned Owner','https://www.opalheart.com.au/wp-content/uploads/2021/09/logo.png','B'],
    SC=['Spectrum Ceilings','https://hipages.com.au/connect/spectrumceilings','Specialists in the installation of commercial interior wall and ceiling finishes','https://mediacache.homeimprovementpages.com.au/creative/sites/2585001_2590000/2585637/thumbnail.gif','T'],
    DJ=['DJ Bronia','http://www.djbronia.com.au','Dj & Mood Enhancement Technician, brings the beats and wonderful atmosphere','http://www.djbronia.com.au/wp-content/themes/r2d2-modified/images/DJBronia_logo_610px.png','A'],
]

let Create = {
    Div : document.createElement('div'),
    Img : document.createElement('img'),
    Btn : document.createElement('button'),  
    H5 : document.createElement('h5'),

    Carousel : {
        Leftbtn:document.createElement('button'),
        Rightbtn:document.createElement('button'),
    },
}


//Quotes of the day
const QOTD = [
    'The one who plants a tree, knowing they wil never sit in it\'s shade has at least come close to understanding the meaning of life',
    'Think like an Investor, Buying something doesn\'t just cost you, it costs you the potential profit you would of made investing it',
    'You need to believe that you can Achieve anything that you dream',
    'Never lose sight of your mission, be driven, this life is a prison if you don\'t have vision. You\'re in it to win it. so.. GO GET IT!',
    'They are all looking for someone to save them, instead of looking inside to see what they gave them, A strong Will, strong Mind, causes mayhem',
    'Sometimes, when you are a in a dark place, you think you have been buried, but actually, You have been planted.', 
    'The best views come after the hardests climbs',
    'The man who loves walking will walk farther than a man who loves the destination'
]


//Outdated Get References
const H5 = document.createElement('h5');
const P = document.createElement('p');
const Page2 = document.getElementById('secondBox');
const TB = document.getElementById('about');
const Main = document.getElementById("home");


// Utility functions
function testQ(t){ let x="C";
    if(x.includes(t)&& t){return true;}
}
function randomHex(bits){ if(!bits){bits =8;}
let hex = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
for(i in bits){hexRes+= hex[(randomNum(0,9))]; }
return hexRes;
}

function randomNum(min,max){
    if(min==undefined||max==undefined){min =0; max = 17;}
  return Math.floor(Math.random() * (max - min) ) + min;
}




//Balls
let MainRotations=0;
function mainimgRotate(){
    MainRotations++;countforbitcoin(1);
    document.documentElement.style.setProperty('--Mainro', (180+(MainRotations*90)+'deg')); }

//Suprisingly Simple Ball-Event Handler
document.querySelectorAll('.Rotern').forEach(item => {
item.addEventListener('mouseenter', e => {
let Child = e.target.querySelector('.balls').id;    
    IconHovered(e,Child);
    }) 
})

//  Certificate Variables
const Blocks = {

    'Program Hub':
    ['Fundamentals','DevOps','HTML','HTML Advanced','CSS','JavaScript','TypeScript',
    'JavaScript Advanced','Node-JS','Meteor-JS','jQuery','React Native', 'WordPress',
    'Growth Hacking','Google Display Ads','GitHub','Python','SQL','SEO','Ethical Hacking',
    'Linux','Docker','BootStrap','PHP','NLP', 
    'CryptoCurrency','BlockChain','Solidity', 'NFTS'
    ],

    'Solo Learn':
    ['HTML','CSS','JavaScript','Web-Dev Fundamentals','Responsive Web-Design',
    'React+Redux',
    'JS Game Development','Coding for Marketers','JQUERY', 'Python for Beginners',
     'Python Core','SQL','C'
    ],

    'Grasshopper': //Completed
    ['Coding Fundamentals-I','Coding Fundamentals-II', 'Intro to Interviewing',
     'Array Methods','Debugging', 'Animations', 'Animations II'
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