var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("iQIUW");const i=document.querySelector("form"),l=i.querySelector('[name="delay"]'),u=i.querySelector('[name="step"]'),a=i.querySelector('[name="amount"]');function s(e,r){const t=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{t?n(`✅ Fulfilled promise ${e} in ${r}ms`):o(`❌ Rejected promise ${e} in ${r}ms`)}),r)}))}i.addEventListener("submit",(function(e){e.preventDefault();let r=Number(l.value);const t=Number(u.value),n=Number(a.value);for(let e=0;e<=n;e+=1)s(e,r).then((e=>o.Notify.success(e))).catch((e=>o.Notify.failure(e))),r+=t}));
//# sourceMappingURL=03-promises.c3a98dcd.js.map
