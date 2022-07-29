const Debug = {
    T:false,
    Developer:false,
    User:false,
    Hex:false,
    Icon:false,
    List:false,
    Recom:true,
}

const TODO=[
    '//3 CSS Page refactoring',
    ' Rec Refactoring',
    ' Fix Certificates',
    ' cleaner Bcard.js'
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
const About = { lists:['Hobbies','Passions'], 
                MainTXT:[' Hi there! my name is Jack,',
                'I was born & live in australia, my interests include coding, business management, investing and traveling'],
// To be made into links
              Hobbies:['Body-Modification',
                       'Coding','Philosophy'],
              Passions:['Advocating equal rights',
                        'Reducing carbon footprint',
                        'Fighting for Data Protection'],
              Goals:[''],
              Projects:['CryptoKorns','Gardner Family Farms',
                        'The Rand Dumb'],
    ContactIntro:'Thanks for visiting my site!'+
    ' You can find my contact deets and more on this page.',
    Contact:{
    Outro:'--Y\'all are Awesome!',
        Methods:['Email','Phone'],
        Address:['Webmaster@JackEwers.com','+(61) 479 000 429']
    },
}

const Recommendations={
    intro:'Welcome to the Recommendation section, A list of the businesess and services that are best in class!',
    Types:['All','Consumables','Bling','Artists','Tradies','Finance'],
}

const sponsors = [
    test=['Name','Link','About','ImageURL','Tags(Types)[F/C/B/A/T]'],
    GF=['Gardener FamilyFarms','https://gardnerfamilyfarm.com.au','Award Winning, Pesticide Free Olive Oil, Farm to table','i/Sponsors/GFicon.ico','C'],
    KL=['Kilns Cafe','https://www.kilnscafe.com.au','A heart warming Cafe, Run by a kind soul','i/Sponsors/Kilns.jpg','CA'],
    JT=['Opal Heart','https://www.OpalHeart.com.au','Profesional Piercing, with talented staff and a world renowned Owner','https://www.opalheart.com.au/wp-content/uploads/2021/09/logo.png','B'],
    JT=['Stone Heart','https://www.stoneheart.com.au', 'Professional Piercing, Tattooing and Laser', 'https://www.stoneheart.com.au/wp-content/uploads/2021/10/cropped-header-768x616.png', 'B'],
    SC=['Spectrum Ceilings','https://hipages.com.au/connect/spectrumceilings','Specialists in the installation of commercial interior wall and ceiling finishes','https://mediacache.homeimprovementpages.com.au/creative/sites/2585001_2590000/2585637/thumbnail.gif','T'],
    DJ=['DJ Bronia','http://www.djbronia.com.au','Dj & Mood Enhancement Technician, brings the beats and wonderful atmosphere','http://www.djbronia.com.au/wp-content/themes/r2d2-modified/images/DJBronia_logo_610px.png','A'],
    HH=['Hellish Hair','https://www.facebook.com/hellishhairdesign/','Wonderful and Friendly Salon in the heart of freo','i/Sponsors/Hellish.png','T/A/C'],
    CC=['Crypto.com','https://www.crypto.com/app/hv5zfaygn9','Crypto Currency and NFT platforms, use referall code hv5zfaygn9 for $25USD in CRO when staking for a ruby or higher','i/Sponsors/cryptocom.jfif', 'F/A']
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

const Social={
Names:['Linkedin','Twitter','Facebook','Instagram'],

Address:['https://www.linkedin.com/in/jack-ewers-14a155212/',
'https://www.twitter.com/Jack_S_Ewers',
'https://www.facebook.com/BloodWorks.Jack/',
'https://instagram.com/the_guy_with_the_holes'],
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

// Utility functions
function testQ(t){ let x="C";
    if(x.includes(t)&& t){return true;}
}


function randomHex(bits){ if(!bits){bits =8;} let hexRes='';
let hex = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
for(let i=0; i<bits; i++){hexRes+= hex[(randomNum(0,9))]; }
return hexRes;
}

function randomNum(min,max){
    if(min==undefined||max==undefined){min =0; max = 17;}
  return Math.floor(Math.random() * (max - min) ) + min;
}


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