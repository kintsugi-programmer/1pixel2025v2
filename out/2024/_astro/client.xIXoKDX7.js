import{a as h,r as o}from"./index._omJ3pAY.js";var l,f,d=h;f=d.createRoot,l=d.hydrateRoot;const u=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return o.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};u.shouldComponentUpdate=()=>!1;function T(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function m(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return o.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?m(e):void 0).filter(e=>!!e))}function N(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let s of a.content.children)e.push(m(s));return e}else return t?o.createElement(u,{value:t}):void 0}const _=t=>(r,e,{default:a,...s},{client:E})=>{if(!t.hasAttribute("ssr"))return;const p={identifierPrefix:t.getAttribute("prefix")};for(const[n,y]of Object.entries(s))e[n]=o.createElement(u,{value:y,name:n});const i=o.createElement(r,e,N(a,t.hasAttribute("data-react-children"))),c=T(t);if(c&&delete t[c],E==="only")return o.startTransition(()=>{const n=f(t);n.render(i),t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0})});o.startTransition(()=>{const n=l(t,i,p);n.render(i),t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0})})};export{_ as default};
