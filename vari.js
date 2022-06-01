const Debug = {
    T:false,
    Hex:true,
    Icon:true,
    List:true,
}



// Variables
const Get = {
    Title:document.querySelector('title'),

    Main : document.getElementById('boxmain'),
    Extndbtn : document.getElementById('ExtendButton'),
    Hidden: document.getElementById('hiden'),
    Page2 : document.getElementById('secondBox'),
    About : document.getElementById('About'),
    Projects:document.getElementById('Projects'),
    Cert: document.getElementById('Cert_Wrapper') ,
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
const Carousel = {
        Target:'Basic',
        Index:0,
        Max:22,
        Min:0,

        Names:[ 'Basic', 'Love', 'test','lorren', 'BloodWorks©',
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

