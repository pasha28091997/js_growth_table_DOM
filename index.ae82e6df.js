var e=document.querySelector(".field"),r=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),o=e.rows.length,i=e.rows[0].cells.length;function c(){r.disabled=o>=10,t.disabled=o<=2,n.disabled=i>=10,l.disabled=i<=2}r.addEventListener("click",function(){if(o<10){for(var r=e.insertRow(),t=0;t<i;t++)r.insertCell();o++,c()}}),t.addEventListener("click",function(){o>2&&(e.deleteRow(-1),o--,c())}),n.addEventListener("click",function(){if(i<10){var r=!0,t=!1,n=void 0;try{for(var l,o=e.rows[Symbol.iterator]();!(r=(l=o.next()).done);r=!0)l.value.insertCell()}catch(e){t=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(t)throw n}}i++,c()}}),l.addEventListener("click",function(){if(i>2){var r=!0,t=!1,n=void 0;try{for(var l,o=e.rows[Symbol.iterator]();!(r=(l=o.next()).done);r=!0)l.value.deleteCell(-1)}catch(e){t=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(t)throw n}}i--,c()}}),c();
//# sourceMappingURL=index.ae82e6df.js.map
