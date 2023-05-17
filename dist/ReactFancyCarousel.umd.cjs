(function(r,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],e):(r=typeof globalThis!="undefined"?globalThis:r||self,e(r.ReactFancyCarousel={},r.React))})(this,function(r,e){"use strict";var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var U=(r,e,c)=>e in r?te(r,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[e]=c,M=(r,e)=>{for(var c in e||(e={}))G.call(e,c)&&U(r,c,e[c]);if(C)for(var c of C(e))J.call(e,c)&&U(r,c,e[c]);return r},D=(r,e)=>ne(r,re(e));var j=(r,e)=>{var c={};for(var _ in r)G.call(r,_)&&e.indexOf(_)<0&&(c[_]=r[_]);if(r!=null&&C)for(var _ of C(r))e.indexOf(_)<0&&J.call(r,_)&&(c[_]=r[_]);return c};const c=(...n)=>n.reduce((o,t)=>o.concat(typeof t=="string"?t:t&&Object.keys(t).map(s=>t[s]?s:"")),[]).filter(Boolean).join(" "),_=()=>e.useRef(Math.random().toString(36).substring(2,7)).current,T=()=>e.useCallback(n=>{n.preventDefault(),n.stopPropagation();const o=n.currentTarget.parentNode,t=Array.from(o.childNodes),s=t.findIndex(d=>d===n.currentTarget);(n.key==="Enter"||n.key===" ")&&n.currentTarget.click(),n.key==="ArrowRight"&&(s===t.length-1?t[0].focus():t[s+1].focus()),n.key==="ArrowLeft"&&(s===0?t[t.length-1].focus():t[s-1].focus())},[]),O=()=>{const n=e.useRef(),o=e.useRef(),t=e.useRef(0),s=e.useRef(0),d=e.useRef(0),k=e.useRef(!1),a=e.useCallback(()=>{o.current=void 0,t.current=0,s.current=0,d.current=0,window.clearTimeout(n.current),n.current=void 0},[]),f=e.useCallback((y,w)=>{o.current=y,t.current=w,s.current=Date.now(),n.current=window.setTimeout(y,w)},[]),b=e.useCallback(()=>{n.current&&(d.current=Date.now(),window.clearTimeout(n.current),k.current=!0)},[]),l=e.useCallback(()=>{o.current&&s.current&&d.current&&t.current&&(t.current=t.current-(d.current-s.current),n.current=window.setTimeout(o.current,t.current),s.current=Date.now(),d.current=0,k.current=!1)},[]);return e.useMemo(()=>({set:f,clear:a,pause:b,resume:l,pausedRef:k}),[a,b,l,f])},g={carousel:"_carousel_1jakq_1",container:"_container_1jakq_6",slide:"_slide_1jakq_12",carousel_item:"_carousel_item_1jakq_17",fade:"_fade_1jakq_22"},Q=l=>{var y=l,{style:n,className:o,uid:t,index:s,active:d,effect:k,speed:a,children:f}=y,b=j(y,["style","className","uid","index","active","effect","speed","children"]);return e.createElement("section",D(M({},b),{style:Object.assign({transitionDuration:`${a}ms`},n),className:c(o,g.carousel_item,{[g.fade]:k==="fade"}),id:`carousel-item-${t}-${s}`,role:"tabpanel","data-active":d,"aria-labelledby":`carousel-indicator-${t}-${s}`,"aria-hidden":!d}),f)},A={indicator:"_indicator_mklxc_1",indicator_item:"_indicator_item_mklxc_13",indicator_item_outer:"_indicator_item_outer_mklxc_23",indicator_item_inner:"_indicator_item_inner_mklxc_37",animation:"_animation_mklxc_51",indicatorAnim:"_indicatorAnim_mklxc_1"},V=({uid:n,itemCount:o,activeIndex:t,animation:s,paused:d,duration:k,goTo:a})=>{const f=T();return e.createElement("ul",{className:A.indicator,role:"tablist"},Array.from({length:o}).map((b,l)=>e.createElement("li",{key:l,id:`carousel-indicator-${n}-${l}`,role:"tab","aria-label":`change to page ${l+1}`,"aria-controls":`carousel-item-${n}-${l}`,"aria-selected":t===l,tabIndex:t===l?0:-1,"data-active":t===l,"data-paused":d,className:A.indicator_item,onClick:()=>a(l),onKeyDown:f},e.createElement("div",{className:A.indicator_item_outer},e.createElement("div",{className:c(A.indicator_item_inner,{[A.animation]:s}),style:{animationDuration:`${k}ms`}})))))},I={indicator:"_indicator_1kk46_1",indicator_item:"_indicator_item_1kk46_13"},W=({uid:n,itemCount:o,activeIndex:t,goTo:s})=>{const d=T();return e.createElement("ul",{className:I.indicator,role:"tablist"},Array.from({length:o}).map((k,a)=>e.createElement("li",{key:a,id:`carousel-indicator-${n}-${a}`,role:"tab","aria-label":`change to page ${a+1}`,"aria-controls":`carousel-item-${n}-${a}`,"aria-selected":t===a,tabIndex:t===a?0:-1,"data-active":t===a,className:I.indicator_item,onClick:()=>s(a),onKeyDown:d})))},X={default:"_default_1xqo5_1"},Y=e.forwardRef((ye,Z)=>{var S=ye,{className:n,autoplay:o=!1,effect:t="slide",duration:s=3e3,speed:d=500,timingFunction:k="ease",infiniteLoop:a=!0,pauseOnHover:f=!1,indicator:b="solid",children:l,onChange:y}=S,w=j(S,["className","autoplay","effect","duration","speed","timingFunction","infiniteLoop","pauseOnHover","indicator","children","onChange"]);const F=_(),[$,v]=e.useState(0),h=e.useRef(0),i=e.useMemo(()=>e.Children.count(l),[l]),x=e.useRef(i),m=O(),[L,K]=e.useState(!1),[H,P]=e.useState(o&&i>1),z=e.useMemo(()=>b==="solid"?V:b==="dot"?W:b,[b]),E=e.useCallback(()=>v(u=>u===i-1?a?0:u:u+1),[a,i]),N=e.useCallback(()=>v(u=>u===0?a?i-1:u:u-1),[a,i]),p=e.useCallback(u=>v(()=>u<0?-u>i?0:i+u:u>i-1?i-1:u),[i]),R=e.useCallback(()=>{o&&i>1&&f&&(m.pause(),K(m.pausedRef.current))},[o,i,f,m]),ee=e.useCallback(()=>{o&&i>1&&f&&(m.resume(),K(m.pausedRef.current))},[o,i,f,m]);return e.useEffect(()=>{y&&$!==h.current&&y.call(null,$,h.current),h.current=$},[$,y]),e.useEffect(()=>(o&&i>1&&(!a&&$===i-1?m.clear():(m.set(E,s),m.pausedRef.current&&m.pause())),m.clear),[o,$,s,a,i,E,m]),e.useEffect(()=>(o&&i>1&&window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>P(!0))),()=>P(!1)),[o,s,i]),e.useEffect(()=>{i!==x.current&&p(0),x.current=i},[i,p]),e.useImperativeHandle(Z,()=>({next:E,prev:N,goTo:p}),[E,N,p]),e.createElement("div",D(M({},w),{className:c(n,X.default,g.carousel),role:"region","aria-label":"carousel",onMouseEnter:u=>{R(),w.onMouseEnter&&w.onMouseEnter.call(void 0,u)},onMouseLeave:u=>{ee(),w.onMouseLeave&&w.onMouseLeave.call(void 0,u)}}),l&&e.createElement("div",{className:c(g.container,{[g.slide]:t==="slide"}),style:t==="slide"?{transform:`translate(${-$*100+"%"}, 0)`,transitionDuration:`${d}ms`,transitionTimingFunction:k}:void 0},e.Children.map(l,(u,B)=>e.cloneElement(u,{uid:F,index:B,active:$===B,effect:t==="fade"?"fade":"none",speed:d}))),l&&z&&e.createElement(z,{uid:F,activeIndex:$,itemCount:i,animation:H,paused:L,duration:s,next:E,prev:N,goTo:p}))}),q=e.memo(Y);q.Item=Q,r.default=q,r.useAccessibility=T,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
