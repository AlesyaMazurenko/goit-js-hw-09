const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){e.removeAttribute("disabled"),t.disabled=!0;setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.disabled=!0,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.94c017ab.js.map
