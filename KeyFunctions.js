/*
 * KeyFunctions.js
 * 
 * Index:
 * 0. Debugging
 *    0.1 Create Debugging Area
 * 1. Date Functions
 *    1.1 calculateDaysLeft
 * 2. Page Manipulation Functions
 *    2.0 dQ (document query selector)  
 *    2.1 ToggleElementDisplay (C=toggle_array)
 *    2.2 loadHTML
 *    2.3 smoothScroll
 *    2.4 ScrollHome
 *    2.5 toggleFullScreen
 *    2.6 reloadPage
 *    2.7 importURL
 *    2.8 isLocalhost
 *    2.9 checkVisibility
 *    2.10 fetchAndDisplayFile
 * 3. Image Functions
 *    3.1 getKeywordsForImage
 *    3.2 addKeywordOverlay
 *    3.3 Tag_Images
 *    3.3 isValidImage
 *    3.4 replace_img_src
 * 4. HTML Escape Functions
 *    4.1 escapeHtml
 * 5. Cookie Functions
 *    5.1 setCookie
 *    5.2 getCookie
 * 6. HTML Loading Function
 *    6.1 loadHTML
 * 7. Numerical Functions
 *   7.1 randomNum
 *  7.2 isNeg
 * 7.3 isEven
 * 7.4 setRange
 * 7.5 inRange
 * 7.6 randomHex
 * 7.7 createHexchain
 */

/* ================================
 * 0. Debugging Functions
 * ================================ */

/* 0.1 Debugging
    Debugging Categories

Priority	Description	When to Use
  1	Verbose (Low Priority)	Use for detailed debug information, such as variable states, function entry/exit points, or general program flow.
  2	Debug (Medium-Low Priority)	Use for debugging non-critical operations or confirming expected behaviors (e.g., "function X executed successfully").
  3	Info (Medium Priority)	Use for important informational messages that show significant actions or milestones (e.g., "User successfully authenticated").
  4	Warning (High Priority)	Use for unexpected but non-breaking issues (e.g., "API response delay detected"). These help identify areas that need attention but do not stop the system.
  5	Critical (Highest Priority)	Use for critical errors or issues that require immediate attention (e.g., "Database connection failed", "Unhandled exception occurred").

*/
function debug(message, level, category) {
  // Global debugging variables
  const debuggingPriority = 3; // Example priority threshold
  const debuggingCategory = 'ui'; // UI,Data,API,Network

  // Check if the message passes the debugging filters
  if (level >= debuggingPriority && (!debuggingCategory || debuggingCategory === category)) {
    console.log(`[${category.toUpperCase()}][PRIORITY ${level}] ${message}`);
  }
}

if (typeof debugging !== 'undefined' && debugging  === true 
  && (!window.location.href.includes('jackewers.com') || !window.location.href.includes('bloodweb.net')
  )) {
  debugging_section = `
  <div id="debugging_area" style="font-size:min(.8rem,6vw); padding:1%; background-color:#ffaffa55; display:flex; justify-content:flex-end; overflow:hidden; height:1.5em;">
      <p style="white-space: nowrap;"></p>
      <button onclick="window.location.reload()" style="margin-left:auto;"><p>RELOAD</p></button>
  </div>`;
  document.body.innerHTML = debugging_section + document.body.innerHTML;
}

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

/* ================================
 * 1. Date Functions
 * ================================ */

/**
 * 1.1 calculateDaysLeft
 * Function to calculate the days left to complete a task.
 */
function calculateDaysLeft(dateAdded, daysToComplete) {
  const currentDate = new Date();
  const dateAddedObj = new Date(dateAdded);                              // Parse the dateAdded string to a Date object
  const timeDifference = currentDate - dateAddedObj;                     // Calculate the difference in time (in milliseconds)
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert time difference from milliseconds to days
  const daysLeft = daysToComplete - daysPassed;                          // Calculate the days left to complete the task                         
  return daysLeft < 0 ? 0 : daysLeft;
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

function dateCountdown(dateAdded, daysToComplete) {
  const currentDate = new Date();
  const dateAddedObj = new Date(dateAdded);                              // Parse the dateAdded string to a Date object
  const timeDifference = currentDate - dateAddedObj;                     // Calculate the difference in time (in milliseconds)
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert time difference from milliseconds to days
  const daysLeft = daysToComplete - daysPassed;                          // Calculate the days left to complete the task                         
  return daysLeft < 0 ? 0 : daysLeft;
}
/* ================================
 * 2. Page Manipulation Functions
 * ================================ */
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
/**
 * 2.1 createStyleRule
* Function to create a style rule.
*/
function createStyleRule(name, rules) { var style = createElement('style',{type:'text/css'});
  document.getElementsByTagName('head')[0].appendChild(style);
  if (!(style.sheet || {}).insertRule)
      (style.styleSheet || style.sheet).addRule(name, rules);
  else
      style.sheet.insertRule(name + "{" + rules + "}", 0);
}


/**
 * 2.2 smoothScroll
 * Function to smoothly scroll to an element.
 */
function smoothScroll(element) {
  document.querySelector(element)?.scrollIntoView({
      behavior: 'smooth'
  });
}

/**
 * 2.3 ScrollHome
 * Function to smoothly scroll to the top of the page.
 */
function ScrollHome() {
  let WindowFrame = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY; // Catch all devices
  if (WindowFrame > 0){
      window.requestAnimationFrame(ScrollHome);
      window.scrollTo(0, WindowFrame - (WindowFrame / 5));
  }
}

/**
 * 2.4 toggleFullScreen
 * Function to toggle full screen mode.
 */
function toggleFullScreen() {
  if (!document.fullscreenElement) { document.documentElement.requestFullscreen();} 
  else {
      if (document.exitFullscreen) {document.exitFullscreen();}
  }
}

/**
 * 2.5 reloadPage
 * Function to reload the page.
 */
const reloadPage = function () { window.location.reload(true); return false; }

/**
 * 2.6 importURL
 * Function to import a script from a URL.
 */
let importURL = function(url){document.head+=`<script type="text/javascript" src="${url}"></script>`;}

/**
 * 2.7 isLocalhost
 * Function to check if the URL contains "localhost".
 */
function isLocalhost() {
  return window.location.hostname === 'localhost';
}

/**
 * 2.8 checkVisibility
 * Function to check the visibility of an element.
 */
function checkVisibility(elem) {
  // Implementation here...
}

async function fetchAndDisplayFile(filePath, elementId) {
  try {
      const response = await fetch(filePath);
      const text = await response.text();
      document.getElementById(elementId).textContent = text;
  } catch (error) {
      console.error('Error fetching the JS file:', error);
  }
}

/* ================================
 * 3. Keyword Overlay Functions
 * ================================ */

/**
 * 3.1 getKeywordsForImage
 * Function to get keywords for an image.
 */
function getKeywordsForImage(image) {
  // Implementation here...
}

/**
 * 3.2 addKeywordOverlay
 * Function to add keyword overlay to an image.
 */
function addKeywordOverlay(image) {
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
  console.log('Images have been Tagged');
}
/**
 * 3.3 Tag_Images
 * Function to tag images with keywords.
 */
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

/**
 * 3.3 isValidImage
 * Function to check if an image URL is valid.
 */


function isValidImage(url) {
  return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
  });
}

/**
 * 3.4 replace_img_src
 */
function replace_img_src(target,new_src){ 
  if(!target||!new_src){return console.log('Provide target / new src')}
  target.setAttribute('src',new_src);
}


/* ================================
 * 4. HTML Escape Functions
 * ================================ */

/**
 * 4.1 escapeHtml
 * Function to escape HTML characters.
 */
function escapeHtml(html) {
  return html
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

/* ================================
 * 5. Cookie Functions
 * ================================ */

/**
 * 5.1 setCookie
 * Function to set a cookie.
 */
const setCookie = function(name, val, exdays = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${val};${expires};path=/`;
}

/**
 * 5.2 getCookie
 * Function to get a cookie by name.
 */
const getCookie = function(name) {
  let n = name + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(n) == 0) {
      return c.substring(n.length, c.length);
    }
  }
  return "";
}

/* ================================
 * 6. HTML Loading Function
 * ================================ */

/**
 * 6.1 loadHTML
 * Function to load HTML content.
 */
// Page maninpulation
function loadHTML(e, t) {
  return new Promise((n, o) => {
    const i = new XMLHttpRequest();
    i.open("GET", t, !0),
      (i.onreadystatechange = function () {
        4 === i.readyState &&
          (200 === i.status
            ? ((document.querySelector(e).innerHTML = i.responseText), n())
            : o(`Failed to load HTML from ${t}`));
      }),
      i.send();
  });
}

/* ================================
  * 7. Numerical Functions
  * ================================ */
 /* 7.1 randomNum
  * Function to generate a random number within a range.
  */
function randomNum(min = 0, max = 17) { return Math.floor(Math.random() * (max - min)) + min; }
/* 7.2 isNeg
 * Function to check if a number is negative.
 */
function isNeg(x) { if (!isNaN(x) && x < 0) { return true; } }
/* 7.3 isEven
  * Function to check if a number is even.
  */
function isEven(num) { if ( !num && num!==0 || isNaN(num) ) return console.error(`Num required, ${num} is NaN`);
  return (num % 2 == 0) ? true : false;
}
/* 7.4 setRange
 * Function to set a number within a range.
 */
function setRange(i, min, max) {
  if (i < min) i = min;
  else if (i > max) i = max;
  return i;
}
/* 7.5 inRange
  * Function to check if a number is within a range.
  */
function inRange(num, min, max) { if (num <= max && num >= min) return true; }
/* 7.6 randomHex
  * Function to generate a random hexadecimal number.
  */
function randomHex(bytes=8) {
  if (typeof bytes !== 'number' || !Number.isInteger(bytes)){ throw new TypeError('bytes must be an integer'); }

  let result = '';    
  const chars = 'abcdef0123456789';
  for (let i = 0; i < bytes * 2; i++) { result += chars.charAt(randomNum(0, 9)); }
  return result;
}
/* 7.7 createHexchain
  * Function to create a chain of hexadecimal numbers.
*/
function createHexchain(chainlength,hexlength=8) {
  if (!chainlength) { return console.error('Hex length not defined'); }
  let hlen = chainlength; let hexchain = [];
  for (let i = 0; i < hlen; i++) { hexchain.push("#" + randomHex(hexlength)); }
  return hexchain;
}

