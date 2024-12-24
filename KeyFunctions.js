"undefined" == typeof debugging ||
  !0 !== debugging ||
  (window.location.href.includes("jackewers.com") &&
    window.location.href.includes("bloodweb.net")) ||
  ((debugging_section =
    '\n    <div id="debugging_area" style="font-size:min(.8rem,6vw); padding:1%; background-color:#ffaffa55; display:flex; justify-content:flex-end; overflow:hidden; height:1.5em;">\n        <p style="white-space: nowrap;"></p>\n        <button onclick="window.location.reload()" style="margin-left:auto;"><p>RELOAD</p></button>\n    </div>'),
  (document.body.innerHTML = debugging_section + document.body.innerHTML));
const LS_Name = function (e) {
  if ("" == e || null == e) return localStorage.getItem("name");
  localStorage.setItem("name", e);
};
function allowDrop(e) {
  e.preventDefault();
}
function log(e) {
  let t = document.getElementById("debugging_area");
  if (t) {
    let n = t.querySelector("p");
    n.innerText = e + "\n" + n.innerText;
  }
}
function randomNum(e = 0, t = 17) {
  return Math.floor(Math.random() * (t - e)) + e;
}
function isNeg(e) {
  if (!isNaN(e) && e < 0) return !0;
}
function isEven(e) {
  if ((e || 0 === e) && !isNaN(e)) return e % 2 == 0;
}
function setRange(e, t, n) {
  return e < t ? (e = t) : e > n && (e = n), e;
}
function inRange(e, t, n) {
  if (e <= n && e >= t) return !0;
}
function randomHex(e = 8) {
  if ("number" != typeof e || !Number.isInteger(e))
    throw new TypeError("bytes must be an integer");
  let t = "";
  for (let n = 0; n < 2 * e; n++)
    t += "abcdef0123456789".charAt(randomNum(0, 9));
  return t;
}
function createHexchain(e) {
  if (!e) return;
  let t = e,
    n = [];
  for (let e = 0; e < t; e++) n.push("#" + randomHex());
  return n;
}
log("Debugging area initialised.");
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  CheckAge = function (e) {
    let t = new Date(),
      n = new Date(e),
      o = t.getFullYear() - n.getFullYear(),
      i = t.getMonth() - n.getMonth();
    return (i < 0 || (0 === i && t.getDate() < n.getDate())) && o--, o;
  };
function getDatearr() {
  let e = new Date();
  return new Date(
    e.getFullYear() + "," + (e.getMonth() + 1) + "," + e.getDate()
  );
}
let timeDif = function (e) {
  let t = new Date(),
    n = e.split(":"),
    o = toString(t.getHours(), ":" + t.getMinutes() + ":", t.getSeconds());
  return e > o ? "Not >24hrs" : "<24hrs" + (e - o);
  let i = [
    (second = o[2] - n[2]),
    (minute = o[1] - n[1]),
    (hour = o[0] - n[0]),
  ];
  return (
    i.second < 0 && (i.minute, (i.second = 5555)),
    "InputTIme:" +
      e +
      " curTime:" +
      o +
      "\n Dif:" +
      [hourDif, minuteDif, secondDif > 0 ? secondDif : 60 + secondDif]
  );
};
function DateDif(e) {
  e.split("/"), e[0], e[1];
  let t = e.slice(9),
    n = t[3] + t[4],
    o = t[0] + t[1],
    i = 20 + t[6] + t[7];
  const r = new Date(i + "," + n + "," + o),
    l = new Date();
  return (
    "Y/M/D:" +
    [
      r.getFullYear() - l.getFullYear(),
      r.getMonth() - l.getMonth(),
      r.getDay() - l.getDay(),
    ]
  );
}
let daysUntil = function (e) {
  let t = e - new Date();
  return Math.floor(t / 864e5);
};
function dateCountdown(e, t) {
  const n = new Date() - new Date(e),
    o = t - Math.floor(n / 864e5);
  return o < 0 ? 0 : o;
}
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
function smoothScroll(e) {
  document.querySelector(e)?.scrollIntoView({ behavior: "smooth" });
}
function ScrollHome() {
  let e =
    document.body.scrollTop ||
    document.documentElement.scrollTop ||
    window.scrollY;
  e > 0 &&
    (window.requestAnimationFrame(ScrollHome), window.scrollTo(0, e - e / 5));
}
function toggleFullScreen() {
  document.fullscreenElement
    ? document.exitFullscreen && document.exitFullscreen()
    : document.documentElement.requestFullscreen();
}
let reloadPage = function () {
    return window.location.reload(!0), !1;
  },
  importURL = function (e) {
    document.head += `<script type="text/javascript" src="${e}"><\/script>`;
  };
function isLocalhost() {
  return "localhost" === window.location.hostname;
}
function checkVisibility(e) {
  if (!e || !dQ(e)) return !1;
  var t = e.getBoundingClientRect();
  return (
    t.top >= 0 &&
    t.left >= 0 &&
    t.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    t.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let isSafari = /.*Version.*Safari.*/.test(navigator.userAgent),
  isPHP = function () {
    return !!window.location.href.includes("php");
  };
const dQ = function (e) {
    return document.querySelector(e);
  };
  ToggleElementDisplay = function (e, t, n) {
    let o = e || document.querySelector(e);
    !0 === n || "none" == o.style.display
      ? (o.style.display = t)
      : (o.style.display = "none");
  },
  CToggle_Ele = function (t) {
    for (e in t) {
      let n = t[e];
      ToggleElementDisplay(n[0], n[1], n[2] ?? null);
    }
  },
  SwapDisplays = function (e, t) {
    let n = dQ(e).style.display;
    (dQ(e).style.display = dQ(t).style.display), (dQ(t).style.display = n);
  },
  createElement = function (e, t) {
    let n = document.createElement(e);
    for (var o in t) n[o] = t[o];
    return n;
  };
let tNode = function (e) {
    return document.createTextNode(e);
  },
  BR = function () {
    return createElement("br");
  };
function setAttributes(e, t) {
  for (var n in t) e.setAttribute(n, t[n]);
}
function createStyleRule(e, t) {
  var n = createElement("style", { type: "text/css" });
  document.getElementsByTagName("head")[0].appendChild(n),
    (n.sheet || {}).insertRule
      ? n.sheet.insertRule(e + "{" + t + "}", 0)
      : (n.styleSheet || n.sheet).addRule(e, t);
}
function throttle(e, t) {
  let n;
  return function () {
    let o = arguments,
      i = this;
    n || (e.apply(i, o), (n = !0), setTimeout(() => (n = !1), t));
  };
}
function isValidImage(e) {
  return new Promise((t, n) => {
    const o = new Image();
    (o.onload = () => t(!0)), (o.onerror = () => t(!1)), (o.src = e);
  });
}
function replace_img_src(e, t) {
  e && t && e.setAttribute("src", t);
}
function appendFixedLogo(e, t, n, o, i, r = "/") {
  i && "" == r && (r = document.body),
    (t && "" != t) || (t = "min(40vw,40vh)"),
    (n && "" != n) || (n = 0);
  let l = `<img id="fiex_BWEB" src="/i/BloodWeb/BWEB_Yin.png" alt="BWEB_Fixed_LOGO" style="max-height:${t}; max-width:${t};"/>`,
    c = createElement("dialog", {
      innerHTML:
        e && "" != e
          ? `<p style="font-size:large;">${e}</p> <br> ${l} <br> ${
              o && "" != o ? `<p style="font-size:medium;">${o}</p>` : ""
            }`
          : l,
    });
  document.body.append(c),
    c.showModal(),
    0 != n &&
      setTimeout(() => {
        c.close(), c.remove(), !0 === i && (window.location.href = r);
      }, n);
}
function insertAfter(e, t) {
  e.parentNode.insertBefore(t, e.nextSibling);
}
const Import_File = function (e, t) {
  let n = "";
  e &&
    "" != e &&
    ((ImportCSS = function (e) {
      n = createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: e,
      });
    }),
    ("CSS" === t || e.includes(".css")) && ImportCSS(e),
    (ImportJavaScript = function (e) {
      n = createElement("script", { type: "text/javascript", src: e });
    }),
    ("JS" === t || e.includes("js")) && ImportJavaScript(e),
    document.head.appendChild(n));
};
async function fetchAndDisplayJSFile(e, t) {
  try {
    const n = await fetch(e),
      o = await n.text();
    document.getElementById(t).textContent = o;
  } catch (e) {}
}
function Tag_Images(e) {
  for (var t = document.getElementsByTagName("img"), n = 0; n < t.length; n++) {
    var o = t[n],
      i = e || KeyWord_Array,
      r = document.createElement("div");
    r.classList.add("keyword-overlay"),
      (r.innerHTML = i.join(", ")),
      (r.style.top = o.offsetTop + "px"),
      (r.style.left = o.offsetLeft + "px"),
      (r.style.width = o.width + "px"),
      (r.style.height = o.height + "px"),
      o.parentNode.appendChild(r);
  }
}
function escapeHtml(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const setCookie = function (e, t, n = 365) {
  const o = new Date();
  o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
  let i = "expires=" + o.toUTCString();
  document.cookie = `${e}=${t};${i};path=/`;
};
getCookie = function (e) {
  let t = e + "=",
    n = decodeURIComponent(document.cookie).split(";");
  for (let e = 0; e < n.length; e++) {
    let o = n[e];
    for (; " " == o.charAt(0); ) o = o.substring(1);
    if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
  }
  return "";
};
