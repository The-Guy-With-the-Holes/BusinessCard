
/* Local */

const LS_Name = function (s) {
    if (s == '' || s == undefined){ return localStorage.getItem('name'); }
    else{localStorage.setItem('name', s);}
}
function allowDrop(event) { event.preventDefault(); }

// console

function log(l){console.log(l);}
// Numer
function randomNum(min = 0, max = 17) { return Math.floor(Math.random() * (max - min)) + min; }
function isNeg(x) { if (!isNaN(x) && x < 0) { return true; } }
function isEven(num) {if ( !num && num!==0 || isNaN(num) ) return console.error(`Num required, ${num} is NaN`);
    return (num % 2 == 0) ? true : false;
}

function setRange(i, min, max) {
    if (i < min) i = min;
    else if (i > max) i = max;
    return i;
}

function inRange(num, min, max) { if (num <= max && num >= min) return true; }

function randomHex(bits) {
    if (!bits) { bits = 8; }
    let hexRes = ''; let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < bits; i++) { hexRes += hex[(randomNum(0, 9))]; }
    return hexRes;
}

function createHexchain(hexlength) {
    if (!hexlength) { return console.error('Hex length not defined'); }
    let hlen = hexlength; let hexchain = [];
    for (let i = 0; i < hlen; i++) { hexchain.push("#" + randomHex()); }
    return hexchain;
}



//Date 
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
const CheckAge = function (DOB) {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDif = today.getMonth() - birthDate.getMonth();
    if (monthDif < 0 || (monthDif === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Over declared age adjusted here 
    }
    return age;
}

function getDatearr() {
    let today = new Date();
    let currentDay = new Date(today.getFullYear() + "," + (today.getMonth() + 1) + ',' + today.getDate());
    return currentDay;
}

let timeDif = function (time) {
    let today = new Date();
    let iTime = time.split(':');
    let curTime = toString(today.getHours(), ":" + today.getMinutes() + ":", today.getSeconds());

    if (time > curTime) { return "Not >24hrs"; }
    else { return "<24hrs" + (time - curTime); }
    let Dif = [
        second = curTime[2] - iTime[2],
        minute = curTime[1] - iTime[1],
        hour = curTime[0] - iTime[0]]

    if (Dif.second < 0) { Dif.minute - 1; Dif.second = 5555; }

    return "InputTIme:" + time + " curTime:" + curTime + "\n Dif:" + [hourDif, minuteDif, secondDif > 0 ? secondDif : 60 + secondDif];
}
function DateDif(date) {
    date.split('/'); let time = date[0] + date[1];
    let d1 = date.slice(9);
    let month = d1[3] + d1[4]; let day = d1[0] + d1[1];
    let year = 20 + d1[6] + d1[7];

    const date1 = new Date(year + ',' + month + ',' + day);
    const date2 = new Date();

    let DIfference = [(date1.getFullYear() - date2.getFullYear()), (date1.getMonth() - date2.getMonth()), (date1.getDay() - date2.getDay())];
    return "Y/M/D:" + DIfference;
}
let daysUntil = function (date) {
    const today = new Date();
    let diff = date - today; return Math.floor(diff / (1000 * 60 * 60 * 24));
}    

// Page maninpulation

function ScrollHome(dir, target) {let WindowFrame = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY; // Catch all devices
    if (WindowFrame > 0){window.requestAnimationFrame(ScrollHome);
        window.scrollTo(0, WindowFrame - (WindowFrame / 5));
    }
}
let reloadPage = function () { window.location.reload(true); return false; }
let importURL = function(url){document.head+=`<script type="text/javascript" src="${url}"></script>`;}
// Check Page
let isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
let isPHP = function () { return window.location.href.includes('php') ? true : false; }
//Select elements
const dQ = function(e){return document.querySelector(e);}

//Edit Element display
const TeD = function (element, DisplayType, enforce) { let x = element||document.querySelector(element); if (enforce === true || x.style.display == "none") { x.style.display = DisplayType; } else x.style.display = "none"; }
const CToggle_Ele = function (arr) { for (e in arr) { let a = arr[e]; TeD(a[0], a[1], a[2] ?? null) } }

// Styles and elements

let createElement = function (element, properties) {
    let el = document.createElement(element);
    for (var prop in properties) { el[prop] = properties[prop]; }
    return el;
}

let tNode = function (t) { return document.createTextNode(t); }
let BR = function () { return createElement('br'); }

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function createStyleRule(name, rules) { var style = createElement('style',{type:'text/css'});
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}

//Images
function appendFixedLogo (text, size, time, subtext, kill,location='/') {
    console.log('add dialog');    
    if (kill && location == '') { location = document.body; }
        if (!size || size == '') { size = 'min(40vw,40vh)'; }
        if (!time || time == '') { time = 0; }
        let img = `<img id="fiex_BWEB" src="/i/BloodWeb/BWEB_Yin.png" alt="BWEB_Fixed_LOGO" style="max-height:${size}; max-width:${size};"/>`;
        let dialog = createElement('dialog', { innerHTML: (!text || text == '') ? img : `<p style="font-size:large;">${text}</p> <br> ${img} <br> ${(!subtext || subtext == '') ? '' : `<p style="font-size:medium;">${subtext}</p>`}` });
        document.body.append(dialog); dialog.showModal();
        if(time!=0){
            console.log(`Removing dialog in ${time/100} seconds`);
            setTimeout(() => { dialog.close(); dialog.remove(); kill===true?window.location.href=location:false; }, time);
        }
}

//Tasklist
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
//Imports
const Import_File =function(url,type){ 
    let S = '';
    if(!url||url==''){return console.error('Need valid URL');}
    
    ImportCSS=function(url){S = createElement('link',{rel:'stylesheet',type:"text/css",href:url});}
    type==="CSS"||url.includes('.css')?ImportCSS(url):false;
    
    ImportJavaScript = function(url) {S = createElement('script',{type:"text/javascript",src:url});}
    type==="JS"||url.includes('js')?ImportJavaScript(url):false;

    document.head.appendChild(S);
}

function Tag_Images(words){
    function getKeywordsForImage(image) {    // This function returns a static array of keywords
        return words||KeyWord_Array; //[keywords];
    }
    var images = document.getElementsByTagName('img'); // Get all the <img> elements
  
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
  
      // Get or generate the keywords for the image 
      var keywords = getKeywordsForImage(image);
  
      // Create a container element for the keywords
      var keywordContainer = document.createElement('div');
      keywordContainer.classList.add('keyword-overlay');
      keywordContainer.innerHTML = keywords.join(', '); // Set the keywords as the container's text content
  
      // Position the container element over the image
      keywordContainer.style.top = image.offsetTop + 'px';
      keywordContainer.style.left = image.offsetLeft + 'px';
      keywordContainer.style.width = image.width + 'px';
      keywordContainer.style.height = image.height + 'px';
  
      // Append the container element to the image's parent element
      image.parentNode.appendChild(keywordContainer);
    } console.log('Images have been Tagged');
}

const createFooter=function(type,socials,branding){

   //socials=[ ['name','link','image'] ]
    let content=createElement('div',{className:'Boxes upper'});     
    for(let i=0; i<socials.length; i++){
        let x=socials[i];

        let container=createElement('div',{
            className:`balls${isEven(i)?'x':'y'} Rotern`});
            container_content=createElement('a',{href:x[1], target:'blank_',
            innerHTML:`${type=="balls"&&x[2]?`<img src="${x[2]}" class="balls">`:tNode(x[0])}`
        });

        container.append(container_content);
        content.append(container);	
    }

    let wrapper=createElement('div',{id:'IconBox',className:'box-grid'})//,innerHTML:content});
    wrapper.append(content);
    buildFooter(wrapper,branding);
}
const append_foot_brand=function(location_to_append){
    // let container=createElement('div',{});

    let container = createElement('p',{id:'Bloodworks',
        innerHTML:
        //<p> Some rights reserved under the creative commons <a href="http://www.bloodweb.net/Internal/License.txt">License</a> </p>
        `
        <p style="text-align:right; margin-right:min(2vw,16px)">Powered by &#127341;<a href="http://www.bloodweb.net">Bloodweb.net<img src="http://www.bloodweb.net/favicon.ico"></img></a></p>
        `
    });
    
    //let img = createElement('img',{src:'http://www.bloodweb.net/favicon.ico'});  
    // container.append(p);

    return location_to_append?location_to_append.append(container):document.querySelector('footer').append(container);
}

 const buildFooter=function(content,branding) {
    footer=createElement('footer',{style:'background-color:salmon;'});
    footer.append(content)
    document.body.append(footer);  
    if (branding===true){append_foot_brand();}
}

const setCookie=function(name,val,exdays=365){const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = `${name}=${val};${expires};path=/`;
}
const getCookie=function(name){
    let n = name+'=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i<ca.length; i++){ let c = ca[i];
        while(c.charAt(0)==' '){c = c.substring(1);}
        if(c.indexOf(n) == 0){return c.substring(n.length,c.length);}
    }
    return "";
}
