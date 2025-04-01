import u from"./BBEG2tYl.js";import{_ as m}from"./BJKuFic_.js";import{i as p,e as f,j as g,f as _,k as h,l as w,c as L,o as v,b as r,a as x,r as y,u as $}from"./DQecliwX.js";import"./CZdxVhXb.js";import"./DSs4FR-t.js";const k={class:"flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]"},S={class:"flex-1 mx-auto w-full"},b=p({__name:"default",setup(j){const{t:a,locale:o}=f(),l=h(),n=g(),c=e=>{try{const t=require(`~/locales/${e}.json`);o.value=e,console.log(`Locale loaded: ${e}`)}catch(t){console.error("Failed to load locale:",e,t)}},s=()=>{const e=o.value;$({title:a("meta.title"),meta:[{name:"description",content:a("meta.description")},{name:"keywords",content:a("meta.keywords")}],link:[{rel:"alternate",hreflang:e,href:`${window.location.origin}${n("/")}`},{rel:"canonical",href:`${window.location.origin}${n("/")}`}],script:[{innerHTML:`
          (function() {
            var script = document.createElement('script');
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-RVXSFT7SXL";
            script.async = true;
            document.head.appendChild(script);
            script.onload = function() {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RVXSFT7SXL');
            };
          })();
        `,type:"text/javascript"}]})};return _(()=>{const e=l.currentRoute.value.path.split("/")[1],t=localStorage.getItem("userLocale");e&&e!==o.value?(c(e),localStorage.setItem("userLocale",e)):t&&t!==o.value&&c(t),s()}),w(o,s),(e,t)=>{const i=u,d=m;return v(),L("div",k,[r(i),x("main",S,[y(e.$slots,"default")]),r(d)])}}});export{b as default};
