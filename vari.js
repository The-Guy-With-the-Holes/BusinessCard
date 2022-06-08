const Debug = {
    T:false,
    Hex:true,
    Icon:true,
    List:true,
}



// Variables
const Get = {
    Title:document.querySelector('title'),
    Extndbtn : document.getElementById('ExtendButton'),
   
    Page:{
    Main : document.getElementById('boxmain'),  
   
    Hidden: document.getElementById('hiden'),
    Page2 : document.getElementById('secondBox'),
    About : document.getElementById('About'),
    Projects:document.getElementById('Projects'),
    Cert: document.getElementById('Cert_Wrapper') ,},
    Rev : {
        Form : document.getElementById('ReviewForm') ,
        Btn :document.getElementById("RevBTNX01"),
    },
   
}
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
const str = {
    B:'Basic'
}
const QOTD = [
    'The one who plants a tree, knowing they wil never sit in it\'s shade has at least come close to understanding the meaning of life',
    'Wake up, it\'s me. Are you going to follow your dreams, or just be another cog in the machine?',
    'You need to believe that you can Achieve anything that you dream',
    'Never lose sight of your mission, be driven, this life is a prison if you don\'t have vision. You\'re in it to win it. so.. GO GET IT!',
    'They are all looking for someone to save them, instead of looking inside to see what they gave them, A strong Will, strong Mind, causes mayhem',
    'I got a clear view, We\'re going to make it soon, Just keep pushing through, What have you go to lose?',
    'SATURDAY PLACEHOLDER'
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
        Img : {
            
            Basic: [0,'Alpha','Banane','Smiles','Game','GFoil',
            'Oilstand','Luke-T-Emma','ProfSeb','Rocksit','SebSwing',
            'FireMirror','SebBucket','SebPool','TScult','SebLongShirt',
            'PoolParty','SebBday','Rockstand','ProfSeb','Rocksit',
            'WestCoast','Walking'
    ],
            Love:[0,],
        },

    }
const Sponsors=[
        Joeltron=["Joeltron",
            'OpalHeart.com.au',
            'https://www.opalheart.com.au/wp-content/uploads/2021/09/logo.png',
            'CooolDude',
        ],

   DJBronia=[img='Dj', site="facebook.com/DJBronia", desc="Great Beats"],
]

//Outdated Get References
const H5 = document.createElement('h5');
const P = document.createElement('p');
const Page2 = document.getElementById('secondBox');
const TB = document.getElementById('hiden');
const Main = document.getElementById("boxmain");


//Utility functions
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


}) })

