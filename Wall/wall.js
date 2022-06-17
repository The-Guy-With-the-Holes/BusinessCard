//wall.js
function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
function getrandomNum(min, max) {
    if (min == undefined || max == undefined) { XeX('Missing Min/Max', 'GetrandomNum') }
    return Math.floor(Math.random() * (max - min)) + min;
}

const GetWall = {
    Main: document.getElementById('MainIMG')
}

const Wall = {
    Debug: true,
    tester: ['blank', 'test.png'],
    Get:document.getElementById('MainIMG'),

    Units: {
        Totalmax: 10000,
        maxSpecial: [7650,//2350,
            1000, 500, 500, 250, 100],
        Types: ['1x1', '1x2', '2x1', '2x2', '2x4', '4x4'],
    }
}

function XeX(Message, Location) {
    if (Wall.Debug != true) { return }
    if (!Location) { Location = "Sent without Location"; }
    console.log(Message, '\nCalled-From:', Location);
}

let SpecUnit = Wall.Units.maxSpecial;
function Ean(){
    for (let i=0; i<500; i++){
    getrandomUnit();}
}
function getrandomUnit() {
    let num = Math.round(Math.random(0, 1));
    checkunit();

    if (num == 0 && Wall.Units.Types.includes('1x1') || Wall.Units.Totalmax>=8999) {
        XeX('Failed Special Random Roll, unit=1x1;','GetrandomUnit()');
        unit = '1x1'; }
    else {
        let x = getrandomNum(0, SpecUnit.length); let t = Wall.Units.Types[(x)];
        XeX("Unit == " + t , 'Final GetrandomUnit()');
        unit=t; }

    let remo = Wall.Units.Types.indexOf(unit);
        SpecUnit[remo]--;
        Wall.Units.Totalmax--;
    return unit; }

function checkunit() {
    for (let i = 0; i < SpecUnit.length; i++) {
        //console.log
        if (SpecUnit[i] == 0) {
            XeX(Wall.Units.Types[i] + ':Status = Empty\nRemoving from array, value is 0', 'GetUnit');
            SpecUnit.splice(i, 1);
            Wall.Units.Types.splice(i, 1);
            i--;}
        else { XeX(Wall.Units.Types[i] + ':Status = Nominal', 'GetUnit'); }}
    let arr = [[Wall.Units.Types], [SpecUnit]];
    XeX("Units-Left:" + arr[1] + '\nTypes-Left:' + arr[0]);
}


function BuildWall() {
document.querySelector('h1').innerText="Building Wall ";
for (let i = 0; i < Wall.Units.Totalmax/100; i++) {
        let d = document.createElement('div');    
        let a = document.createElement('a');
        let x = getrandomUnit();
        //Checks available Units   
        a.innerText=x;
        //setAttributes(a, { 'class':'Blxs'+' '+'B'+x }); 
        setAttributes(d,{ 'class':'B'+x+' '+'Blxs' });
        d.append(a);
        if(i==10||i==20||i==30){
            d.append((document.createElement('br')));
        }
        GetWall.Main.append(d);
        XeX("Unit has been placed"+x);
    }
    document.querySelector('h1').innerText="Wall Built";

}

function ClearWall(){
    document.getElementById('MainIMG').innerHTML="";
}