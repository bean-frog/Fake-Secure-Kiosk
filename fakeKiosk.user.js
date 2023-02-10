// ==UserScript==
// @name         Fake Secure Kiosk
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pausd.schoology.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    window.onload = function() {
  var link1 = document.createElement("link");
  link1.rel = "stylesheet";
  link1.href = "https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css";
  document.head.appendChild(link1);

        var link2 = document.createElement("link");
  link2.rel = "stylesheet";
  link2.href = "https://site-assets.fontawesome.com/releases/v6.3.0/css/sharp-solid.css";
  document.head.appendChild(link2);
};
    setTimeout(allDaShit, 50)
function allDaShit() {
    let fakebar = document.createElement("div");
    let body = document.body
    let left = document.createElement('i');
    let right = document.createElement('i');
    let home = document.createElement('i');
    let reload = document.createElement('i');
    let logoff = document.createElement('span');
    body.style.marginTop = '25px'
    fakebar.style.width = '100vw';
    fakebar.style.height = '30px';
    fakebar.style.backgroundColor = '#32CD32';
    fakebar.style.zIndex = '99';
    fakebar.style.position = 'fixed'
    left.classList.add('fa-sharp')
    left.classList.add('fa-solid')
    left.classList.add('fa-triangle')
    left.classList.add('fa-lg')
    left.style.transform = "rotate(90deg)";
    left.style.marginLeft = '25px'
     right.classList.add('fa-sharp')
    right.classList.add('fa-solid')
    right.classList.add('fa-triangle')
    right.classList.add('fa-lg')
    right.style.transform = "rotate(-90deg)";
    right.style.marginLeft = '7px'

    home.classList.add('fa-regular')
    home.classList.add('fa-house-blank')
    home.classList.add('fa-lg')
    home.style.marginLeft = '25px'

    reload.classList.add('fa-regular')
    reload.classList.add('fa-rotate-right')
    reload.classList.add('fa-lg')
    reload.style.marginLeft = '25px'

    logoff.style.marginTop = '5px'
    logoff.style.marginLeft = '25px'
    logoff.style.fontSize = '16px'
    logoff.style.display = 'inline-block'
    logoff.innerHTML = 'Log Off'

    body.parentNode.insertBefore(fakebar, body)
        fakebar.insertAdjacentElement('afterbegin', logoff)

    fakebar.insertAdjacentElement('afterbegin', left)
    fakebar.insertAdjacentElement('afterbegin', right)
    left.insertAdjacentElement('afterend', home)
    home.insertAdjacentElement('afterend', reload)
}

    // Your code here...
    // Your code here...
})();
