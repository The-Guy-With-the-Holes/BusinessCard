/* Debugging
    Create the debug area if debugging===true and page not live
    otherwise, debugging will be done through the console.log method
*/
if (typeof debugging !== 'undefined' && debugging  === true 
    && (!window.location.href.includes('jackewers.com')
    || !window.location.href.includes('bloodweb.net')
    )
) {
    debugging_section = `
    <div id="debugging_area" style="font-size:min(.8rem,6vw); padding:1%; background-color:#ffaffa55; display:flex; justify-content:flex-end; overflow:hidden; height:1.5em;">
        <p style="white-space: nowrap;"></p>
        <button onclick="window.location.reload()" style="margin-left:auto;"><p>RELOAD</p></button>
    </div>`;
    document.body.innerHTML = debugging_section + document.body.innerHTML;
}

/* Local */
const LS_Name = function (s) {
    if (s == '' || s == undefined){ return localStorage.getItem('name'); }
    localStorage.setItem('name', s);
}
function allowDrop(event) { event.preventDefault(); }

// console

function log(x) {
    console.log(x);
    let z = document.getElementById('debugging_area');
    if (!!z) {
        let p = z.querySelector('p');
        p.innerText = x + "\n" + p.innerText; // Prepend new log
    } else {
        console.log("'log' called, but the logging area is unavailable.. caller:", x);
    }
}

log("Debugging area initialised.")

// Numer
function randomNum(min = 0, max = 17) { return Math.floor(Math.random() * (max - min)) + min; }
function isNeg(x) { if (!isNaN(x) && x < 0) { return true; } }
function isEven(num) { if ( !num && num!==0 || isNaN(num) ) return console.error(`Num required, ${num} is NaN`);
    return (num % 2 == 0) ? true : false;
}

function setRange(i, min, max) {
    if (i < min) i = min;
    else if (i > max) i = max;
    return i;
}

function inRange(num, min, max) { if (num <= max && num >= min) return true; }

function randomHex(bytes=8) {
    if (typeof bytes !== 'number' || !Number.isInteger(bytes)){ throw new TypeError('bytes must be an integer'); }

    let result = '';    
    const chars = 'abcdef0123456789';
    for (let i = 0; i < bytes * 2; i++) { result += chars.charAt(randomNum(0, 9)); }
    return result;
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

let daysUntil = function (date) { const today = new Date();
    let diff = date - today; return Math.floor(diff / (1000 * 60 * 60 * 24));
}    

// Page maninpulation
function smoothScroll(element) {
    document.querySelector(element)?.scrollIntoView({
        behavior: 'smooth'
    });
}
function ScrollHome() {
    let WindowFrame = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY; // Catch all devices
    if (WindowFrame > 0){
        window.requestAnimationFrame(ScrollHome);
        window.scrollTo(0, WindowFrame - (WindowFrame / 5));
    }
}
function toggleFullScreen() {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen();} 
    else {
        if (document.exitFullscreen) {document.exitFullscreen();}
    }
}
let reloadPage = function () { window.location.reload(true); return false; }
let importURL = function(url){document.head+=`<script type="text/javascript" src="${url}"></script>`;}
// Check Page
function checkVisibility(elem) {
    if (!elem || !dQ(elem)) { return false }
    var rect = elem.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
let isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
let isPHP = function () { return window.location.href.includes('php') ? true : false; }


//Select elements
const dQ = function(e){return document.querySelector(e);}

//Edit Element display
const ToggleElementDisplay = function (element, DisplayType, enforce) { let x = element||document.querySelector(element); if (enforce === true || x.style.display == "none") { x.style.display = DisplayType; } else x.style.display = "none"; }
const CToggle_Ele = function (arr) { for (e in arr) { let a = arr[e]; ToggleElementDisplay(a[0], a[1], a[2] ?? null) } }

// Styles and elements
const createElement = function (element, properties) {
    let el = document.createElement(element);
    for (var prop in properties) { el[prop] = properties[prop]; }
    return el;
}

let tNode = function (t) { return document.createTextNode(t); }
let BR = function () { return createElement('br'); }

function setAttributes(el, attrs) {
    for (var key in attrs) { el.setAttribute(key, attrs[key]); }
}

function createStyleRule(name, rules) { var style = createElement('style',{type:'text/css'});
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name + "{" + rules + "}", 0);
}

// Function , functions..
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let args = arguments, context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

//Images
function isValidImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}
function replace_img_src(target,new_src){ 
    if(!target||!new_src){return console.log('Provide target / new src')}
    target.setAttribute('src',new_src);
}

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

function escapeHtml(html) {
    return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
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