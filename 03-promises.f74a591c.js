!function(){document.querySelector('[name="delay"]'),document.querySelector('[name="step"]');var e=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]').addEventListener("click",(function(o){o.preventDefault();for(var n=0;n<parseInt(e.value);n++)Math.random()>.3?(new Promise).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})):(new Promise).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}))}();
//# sourceMappingURL=03-promises.f74a591c.js.map
