const Debug = {
    T:false,
    User:true,
    Hex:true,
    Icon:true,
    List:true,
}



// Variables
const Get = {
    Title:document.querySelector('title'),
    Extndbtn : document.getElementById('ExtendButton'),
   Pages:['Home' ,'About','Contact','Recommends','Certificates'
],AboutPages:['About','Contact',],
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

const sponsors = [
    test=['Name','Link','About','Image'],
    GF=['Gardener FamilyFarms','link','Award Winning, Pesticide Free Olive Oil, Farm to table','i/im1.jpg'],
    JT=['Opal Heart','https://www.OpalHeart.com.au','Profesional Piercing, with talented staff and a world renowned Owner','https://www.opalheart.com.au/wp-content/uploads/2021/09/logo.png'],
    DJ=['DJ Bronia','http://www.djbronia.com.au','Dj & Mood Enhancement Technician, brings the beats and a wonderful atmosphere','http://www.djbronia.com.au/wp-content/themes/r2d2-modified/images/DJBronia_logo_610px.png'],
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
    'I got a clear view, We\'re going to make it soon, Just keep pushing through, What have you go to lose?',
    'The best views come after the hardests climbs'
]

const Carousel = {
        Target:'Basic',
        Index:0,
        Max:22,
        Min:0,

        Names:[ 'Basic','The Homies', 'Love', 'test','lorren', 'BloodWorks©',
                'Body-Modification', 'Coding', 'Philosophy',
                ' All ' , 'EqualRights!', 'DataProtection', 
                '  '],

    }

//Outdated Get References
const H5 = document.createElement('h5');
const P = document.createElement('p');
const Page2 = document.getElementById('secondBox');
const TB = document.getElementById('about');
const Main = document.getElementById("home");


// Utility functions
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