(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ed(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ke={},ui=[],$n=()=>{},TI=()=>!1,Sc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),wd=n=>n.startsWith("onUpdate:"),Gt=Object.assign,Td=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},II=Object.prototype.hasOwnProperty,We=(n,e)=>II.call(n,e),we=Array.isArray,hi=n=>Ta(n)==="[object Map]",$i=n=>Ta(n)==="[object Set]",dm=n=>Ta(n)==="[object Date]",xe=n=>typeof n=="function",gt=n=>typeof n=="string",Qn=n=>typeof n=="symbol",Ze=n=>n!==null&&typeof n=="object",Iy=n=>(Ze(n)||xe(n))&&xe(n.then)&&xe(n.catch),by=Object.prototype.toString,Ta=n=>by.call(n),bI=n=>Ta(n).slice(8,-1),Cy=n=>Ta(n)==="[object Object]",Id=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ko=Ed(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},CI=/-(\w)/g,In=Rc(n=>n.replace(CI,(e,t)=>t?t.toUpperCase():"")),AI=/\B([A-Z])/g,pr=Rc(n=>n.replace(AI,"-$1").toLowerCase()),xc=Rc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Hu=Rc(n=>n?`on${xc(n)}`:""),qs=(n,e)=>!Object.is(n,e),yl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ay=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Ml=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let fm;const Pc=()=>fm||(fm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yo(n){if(we(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=gt(s)?PI(s):Yo(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(gt(n)||Ze(n))return n}const SI=/;(?![^(]*\))/g,RI=/:([^]+)/,xI=/\/\*[^]*?\*\//g;function PI(n){const e={};return n.replace(xI,"").split(SI).forEach(t=>{if(t){const s=t.split(RI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ut(n){let e="";if(gt(n))e=n;else if(we(n))for(let t=0;t<n.length;t++){const s=ut(n[t]);s&&(e+=s+" ")}else if(Ze(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",NI=Ed(kI);function Sy(n){return!!n||n===""}function DI(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=Nr(n[s],e[s]);return t}function Nr(n,e){if(n===e)return!0;let t=dm(n),s=dm(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=Qn(n),s=Qn(e),t||s)return n===e;if(t=we(n),s=we(e),t||s)return t&&s?DI(n,e):!1;if(t=Ze(n),s=Ze(e),t||s){if(!t||!s)return!1;const r=Object.keys(n).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Nr(n[o],e[o]))return!1}}return String(n)===String(e)}function bd(n,e){return n.findIndex(t=>Nr(t,e))}const Ry=n=>!!(n&&n.__v_isRef===!0),ye=n=>gt(n)?n:n==null?"":we(n)||Ze(n)&&(n.toString===by||!xe(n.toString))?Ry(n)?ye(n.value):JSON.stringify(n,xy,2):String(n),xy=(n,e)=>Ry(e)?xy(n,e.value):hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[Wu(s,i)+" =>"]=r,t),{})}:$i(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wu(t))}:Qn(e)?Wu(e):Ze(e)&&!we(e)&&!Cy(e)?String(e):e,Wu=(n,e="")=>{var t;return Qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class OI{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function MI(){return Zt}let Je;const Gu=new WeakSet;class Py{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gu.has(this)&&(Gu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ny(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pm(this),Dy(this);const e=Je,t=xn;Je=this,xn=!0;try{return this.fn()}finally{Oy(this),Je=e,xn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sd(e);this.deps=this.depsTail=void 0,pm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eh(this)&&this.run()}get dirty(){return Eh(this)}}let ky=0,No,Do;function Ny(n,e=!1){if(n.flags|=8,e){n.next=Do,Do=n;return}n.next=No,No=n}function Cd(){ky++}function Ad(){if(--ky>0)return;if(Do){let e=Do;for(Do=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;No;){let e=No;for(No=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function Dy(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Oy(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Sd(s),LI(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function Eh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(My(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function My(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Jo)||(n.globalVersion=Jo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Eh(n))))return;n.flags|=2;const e=n.dep,t=Je,s=xn;Je=n,xn=!0;try{Dy(n);const r=n.fn(n._value);(e.version===0||qs(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Je=t,xn=s,Oy(n),n.flags&=-3}}function Sd(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Sd(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function LI(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xn=!0;const Ly=[];function Es(){Ly.push(xn),xn=!1}function ws(){const n=Ly.pop();xn=n===void 0?!0:n}function pm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Je;Je=void 0;try{e()}finally{Je=t}}}let Jo=0;class VI{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Je||!xn||Je===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Je)t=this.activeLink=new VI(Je,this),Je.deps?(t.prevDep=Je.depsTail,Je.depsTail.nextDep=t,Je.depsTail=t):Je.deps=Je.depsTail=t,Vy(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Je.depsTail,t.nextDep=void 0,Je.depsTail.nextDep=t,Je.depsTail=t,Je.deps===t&&(Je.deps=s)}return t}trigger(e){this.version++,Jo++,this.notify(e)}notify(e){Cd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ad()}}}function Vy(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Vy(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wh=new WeakMap,kr=Symbol(""),Th=Symbol(""),Xo=Symbol("");function Ut(n,e,t){if(xn&&Je){let s=wh.get(n);s||wh.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Rd),r.map=s,r.key=t),r.track()}}function as(n,e,t,s,r,i){const o=wh.get(n);if(!o){Jo++;return}const a=c=>{c&&c.trigger()};if(Cd(),e==="clear")o.forEach(a);else{const c=we(n),u=c&&Id(t);if(c&&t==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===Xo||!Qn(p)&&p>=h)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Xo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(kr)),hi(n)&&a(o.get(Th)));break;case"delete":c||(a(o.get(kr)),hi(n)&&a(o.get(Th)));break;case"set":hi(n)&&a(o.get(kr));break}}Ad()}function ei(n){const e=He(n);return e===n?e:(Ut(e,"iterate",Xo),En(n)?e:e.map(Pt))}function kc(n){return Ut(n=He(n),"iterate",Xo),n}const FI={__proto__:null,[Symbol.iterator](){return qu(this,Symbol.iterator,Pt)},concat(...n){return ei(this).concat(...n.map(e=>we(e)?ei(e):e))},entries(){return qu(this,"entries",n=>(n[1]=Pt(n[1]),n))},every(n,e){return ts(this,"every",n,e,void 0,arguments)},filter(n,e){return ts(this,"filter",n,e,t=>t.map(Pt),arguments)},find(n,e){return ts(this,"find",n,e,Pt,arguments)},findIndex(n,e){return ts(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ts(this,"findLast",n,e,Pt,arguments)},findLastIndex(n,e){return ts(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ts(this,"forEach",n,e,void 0,arguments)},includes(...n){return zu(this,"includes",n)},indexOf(...n){return zu(this,"indexOf",n)},join(n){return ei(this).join(n)},lastIndexOf(...n){return zu(this,"lastIndexOf",n)},map(n,e){return ts(this,"map",n,e,void 0,arguments)},pop(){return mo(this,"pop")},push(...n){return mo(this,"push",n)},reduce(n,...e){return mm(this,"reduce",n,e)},reduceRight(n,...e){return mm(this,"reduceRight",n,e)},shift(){return mo(this,"shift")},some(n,e){return ts(this,"some",n,e,void 0,arguments)},splice(...n){return mo(this,"splice",n)},toReversed(){return ei(this).toReversed()},toSorted(n){return ei(this).toSorted(n)},toSpliced(...n){return ei(this).toSpliced(...n)},unshift(...n){return mo(this,"unshift",n)},values(){return qu(this,"values",Pt)}};function qu(n,e,t){const s=kc(n),r=s[e]();return s!==n&&!En(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const UI=Array.prototype;function ts(n,e,t,s,r,i){const o=kc(n),a=o!==n&&!En(n),c=o[e];if(c!==UI[e]){const d=c.apply(n,i);return a?Pt(d):d}let u=t;o!==n&&(a?u=function(d,p){return t.call(this,Pt(d),p,n)}:t.length>2&&(u=function(d,p){return t.call(this,d,p,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function mm(n,e,t,s){const r=kc(n);let i=t;return r!==n&&(En(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Pt(a),c,n)}),r[e](i,...s)}function zu(n,e,t){const s=He(n);Ut(s,"iterate",Xo);const r=s[e](...t);return(r===-1||r===!1)&&kd(t[0])?(t[0]=He(t[0]),s[e](...t)):r}function mo(n,e,t=[]){Es(),Cd();const s=He(n)[e].apply(n,t);return Ad(),ws(),s}const BI=Ed("__proto__,__v_isRef,__isVue"),Fy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function $I(n){Qn(n)||(n=String(n));const e=He(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class Uy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?JI:Hy:i?jy:$y).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=we(e);if(!r){let c;if(o&&(c=FI[t]))return c;if(t==="hasOwnProperty")return $I}const a=Reflect.get(e,t,Ht(e)?e:s);return(Qn(t)?Fy.has(t):BI(t))||(r||Ut(e,"get",t),i)?a:Ht(a)?o&&Id(t)?a:a.value:Ze(a)?r?Gy(a):Nc(a):a}}class By extends Uy{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=er(i);if(!En(s)&&!er(s)&&(i=He(i),s=He(s)),!we(e)&&Ht(i)&&!Ht(s))return c?!1:(i.value=s,!0)}const o=we(e)&&Id(t)?Number(t)<e.length:We(e,t),a=Reflect.set(e,t,s,Ht(e)?e:r);return e===He(r)&&(o?qs(s,i)&&as(e,"set",t,s):as(e,"add",t,s)),a}deleteProperty(e,t){const s=We(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&as(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Qn(t)||!Fy.has(t))&&Ut(e,"has",t),s}ownKeys(e){return Ut(e,"iterate",we(e)?"length":kr),Reflect.ownKeys(e)}}class jI extends Uy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const HI=new By,WI=new jI,GI=new By(!0);const Ih=n=>n,il=n=>Reflect.getPrototypeOf(n);function qI(n,e,t){return function(...s){const r=this.__v_raw,i=He(r),o=hi(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?Ih:e?Ll:Pt;return!e&&Ut(i,"iterate",c?Th:kr),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function ol(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zI(n,e){const t={get(r){const i=this.__v_raw,o=He(i),a=He(r);n||(qs(r,a)&&Ut(o,"get",r),Ut(o,"get",a));const{has:c}=il(o),u=e?Ih:n?Ll:Pt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(He(r),"iterate",kr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=He(i),a=He(r);return n||(qs(r,a)&&Ut(o,"has",r),Ut(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=He(a),u=e?Ih:n?Ll:Pt;return!n&&Ut(c,"iterate",kr),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return Gt(t,n?{add:ol("add"),set:ol("set"),delete:ol("delete"),clear:ol("clear")}:{add(r){!e&&!En(r)&&!er(r)&&(r=He(r));const i=He(this);return il(i).has.call(i,r)||(i.add(r),as(i,"add",r,r)),this},set(r,i){!e&&!En(i)&&!er(i)&&(i=He(i));const o=He(this),{has:a,get:c}=il(o);let u=a.call(o,r);u||(r=He(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?qs(i,h)&&as(o,"set",r,i):as(o,"add",r,i),this},delete(r){const i=He(this),{has:o,get:a}=il(i);let c=o.call(i,r);c||(r=He(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&as(i,"delete",r,void 0),u},clear(){const r=He(this),i=r.size!==0,o=r.clear();return i&&as(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qI(r,n,e)}),t}function xd(n,e){const t=zI(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(We(t,r)&&r in s?t:s,r,i)}const KI={get:xd(!1,!1)},QI={get:xd(!1,!0)},YI={get:xd(!0,!1)};const $y=new WeakMap,jy=new WeakMap,Hy=new WeakMap,JI=new WeakMap;function XI(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ZI(n){return n.__v_skip||!Object.isExtensible(n)?0:XI(bI(n))}function Nc(n){return er(n)?n:Pd(n,!1,HI,KI,$y)}function Wy(n){return Pd(n,!1,GI,QI,jy)}function Gy(n){return Pd(n,!0,WI,YI,Hy)}function Pd(n,e,t,s,r){if(!Ze(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=ZI(n);if(i===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,i===2?s:t);return r.set(n,a),a}function di(n){return er(n)?di(n.__v_raw):!!(n&&n.__v_isReactive)}function er(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function kd(n){return n?!!n.__v_raw:!1}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function eb(n){return!We(n,"__v_skip")&&Object.isExtensible(n)&&Ay(n,"__v_skip",!0),n}const Pt=n=>Ze(n)?Nc(n):n,Ll=n=>Ze(n)?Gy(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function ie(n){return qy(n,!1)}function tb(n){return qy(n,!0)}function qy(n,e){return Ht(n)?n:new nb(n,e)}class nb{constructor(e,t){this.dep=new Rd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:He(e),this._value=t?e:Pt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||En(e)||er(e);e=s?e:He(e),qs(e,t)&&(this._rawValue=e,this._value=s?e:Pt(e),this.dep.trigger())}}function fi(n){return Ht(n)?n.value:n}const sb={get:(n,e,t)=>e==="__v_raw"?n:fi(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function zy(n){return di(n)?n:new Proxy(n,sb)}class rb{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Je!==this)return Ny(this,!0),!0}get value(){const e=this.dep.track();return My(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ib(n,e,t=!1){let s,r;return xe(n)?s=n:(s=n.get,r=n.set),new rb(s,r,t)}const al={},Vl=new WeakMap;let Cr;function ob(n,e=!1,t=Cr){if(t){let s=Vl.get(t);s||Vl.set(t,s=[]),s.push(n)}}function ab(n,e,t=Ke){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=z=>r?z:En(z)||r===!1||r===0?ls(z,1):ls(z);let h,d,p,g,y=!1,b=!1;if(Ht(n)?(d=()=>n.value,y=En(n)):di(n)?(d=()=>u(n),y=!0):we(n)?(b=!0,y=n.some(z=>di(z)||En(z)),d=()=>n.map(z=>{if(Ht(z))return z.value;if(di(z))return u(z);if(xe(z))return c?c(z,2):z()})):xe(n)?e?d=c?()=>c(n,2):n:d=()=>{if(p){Es();try{p()}finally{ws()}}const z=Cr;Cr=h;try{return c?c(n,3,[g]):n(g)}finally{Cr=z}}:d=$n,e&&r){const z=d,ge=r===!0?1/0:r;d=()=>ls(z(),ge)}const x=MI(),L=()=>{h.stop(),x&&x.active&&Td(x.effects,h)};if(i&&e){const z=e;e=(...ge)=>{z(...ge),L()}}let V=b?new Array(n.length).fill(al):al;const $=z=>{if(!(!(h.flags&1)||!h.dirty&&!z))if(e){const ge=h.run();if(r||y||(b?ge.some((ue,A)=>qs(ue,V[A])):qs(ge,V))){p&&p();const ue=Cr;Cr=h;try{const A=[ge,V===al?void 0:b&&V[0]===al?[]:V,g];V=ge,c?c(e,3,A):e(...A)}finally{Cr=ue}}}else h.run()};return a&&a($),h=new Py(d),h.scheduler=o?()=>o($,!1):$,g=z=>ob(z,!1,h),p=h.onStop=()=>{const z=Vl.get(h);if(z){if(c)c(z,4);else for(const ge of z)ge();Vl.delete(h)}},e?s?$(!0):V=h.run():o?o($.bind(null,!0),!0):h.run(),L.pause=h.pause.bind(h),L.resume=h.resume.bind(h),L.stop=L,L}function ls(n,e=1/0,t){if(e<=0||!Ze(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ht(n))ls(n.value,e,t);else if(we(n))for(let s=0;s<n.length;s++)ls(n[s],e,t);else if($i(n)||hi(n))n.forEach(s=>{ls(s,e,t)});else if(Cy(n)){for(const s in n)ls(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&ls(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ia(n,e,t,s){try{return s?n(...s):n()}catch(r){Dc(r,e,t)}}function Yn(n,e,t,s){if(xe(n)){const r=Ia(n,e,t,s);return r&&Iy(r)&&r.catch(i=>{Dc(i,e,t)}),r}if(we(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Yn(n[i],e,t,s));return r}}function Dc(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ke;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,c,u)===!1)return}a=a.parent}if(i){Es(),Ia(i,null,10,[n,c,u]),ws();return}}lb(n,t,r,s,o)}function lb(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Qt=[];let Vn=-1;const pi=[];let js=null,ni=0;const Ky=Promise.resolve();let Fl=null;function Zo(n){const e=Fl||Ky;return n?e.then(this?n.bind(this):n):e}function cb(n){let e=Vn+1,t=Qt.length;for(;e<t;){const s=e+t>>>1,r=Qt[s],i=ea(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function Nd(n){if(!(n.flags&1)){const e=ea(n),t=Qt[Qt.length-1];!t||!(n.flags&2)&&e>=ea(t)?Qt.push(n):Qt.splice(cb(e),0,n),n.flags|=1,Qy()}}function Qy(){Fl||(Fl=Ky.then(Jy))}function ub(n){we(n)?pi.push(...n):js&&n.id===-1?js.splice(ni+1,0,n):n.flags&1||(pi.push(n),n.flags|=1),Qy()}function gm(n,e,t=Vn+1){for(;t<Qt.length;t++){const s=Qt[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Qt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Yy(n){if(pi.length){const e=[...new Set(pi)].sort((t,s)=>ea(t)-ea(s));if(pi.length=0,js){js.push(...e);return}for(js=e,ni=0;ni<js.length;ni++){const t=js[ni];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}js=null,ni=0}}const ea=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Jy(n){try{for(Vn=0;Vn<Qt.length;Vn++){const e=Qt[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ia(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<Qt.length;Vn++){const e=Qt[Vn];e&&(e.flags&=-2)}Vn=-1,Qt.length=0,Yy(),Fl=null,(Qt.length||pi.length)&&Jy()}}let hn=null,Xy=null;function Ul(n){const e=hn;return hn=n,Xy=n&&n.type.__scopeId||null,e}function cn(n,e=hn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Am(-1);const i=Ul(e);let o;try{o=n(...r)}finally{Ul(i),s._d&&Am(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vn(n,e){if(hn===null)return n;const t=Fc(hn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Ke]=e[r];i&&(xe(i)&&(i={mounted:i,updated:i}),i.deep&&ls(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Tr(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Es(),Yn(c,t,8,[n.el,a,n,e]),ws())}}const hb=Symbol("_vte"),db=n=>n.__isTeleport;function Dd(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Dd(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Zy(n,e){return xe(n)?Gt({name:n.name},e,{setup:n}):n}function ev(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Bl(n,e,t,s,r=!1){if(we(n)){n.forEach((y,b)=>Bl(y,e&&(we(e)?e[b]:e),t,s,r));return}if(Oo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bl(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?Fc(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Ke?a.refs={}:a.refs,d=a.setupState,p=He(d),g=d===Ke?()=>!1:y=>We(p,y);if(u!=null&&u!==c&&(gt(u)?(h[u]=null,g(u)&&(d[u]=null)):Ht(u)&&(u.value=null)),xe(c))Ia(c,a,12,[o,h]);else{const y=gt(c),b=Ht(c);if(y||b){const x=()=>{if(n.f){const L=y?g(c)?d[c]:h[c]:c.value;r?we(L)&&Td(L,i):we(L)?L.includes(i)||L.push(i):y?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else y?(h[c]=o,g(c)&&(d[c]=o)):b&&(c.value=o,n.k&&(h[n.k]=o))};o?(x.id=-1,ln(x,t)):x()}}}Pc().requestIdleCallback;Pc().cancelIdleCallback;const Oo=n=>!!n.type.__asyncLoader,tv=n=>n.type.__isKeepAlive;function fb(n,e){nv(n,"a",e)}function pb(n,e){nv(n,"da",e)}function nv(n,e,t=jt){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Oc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)tv(r.parent.vnode)&&mb(s,e,t,r),r=r.parent}}function mb(n,e,t,s){const r=Oc(e,n,s,!0);Mc(()=>{Td(s[e],r)},t)}function Oc(n,e,t=jt,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Es();const a=ba(t),c=Yn(e,t,n,o);return a(),ws(),c});return s?r.unshift(i):r.push(i),i}}const xs=n=>(e,t=jt)=>{(!na||n==="sp")&&Oc(n,(...s)=>e(...s),t)},gb=xs("bm"),Mn=xs("m"),_b=xs("bu"),yb=xs("u"),Od=xs("bum"),Mc=xs("um"),vb=xs("sp"),Eb=xs("rtg"),wb=xs("rtc");function Tb(n,e=jt){Oc("ec",n,e)}const sv="components",Ib="directives";function ji(n,e){return rv(sv,n,!0,e)||n}const bb=Symbol.for("v-ndc");function Cb(n){return rv(Ib,n)}function rv(n,e,t=!0,s=!1){const r=hn||jt;if(r){const i=r.type;if(n===sv){const a=hC(i,!1);if(a&&(a===e||a===In(e)||a===xc(In(e))))return i}const o=_m(r[n]||i[n],e)||_m(r.appContext[n],e);return!o&&s?i:o}}function _m(n,e){return n&&(n[e]||n[In(e)]||n[xc(In(e))])}function kn(n,e,t,s){let r;const i=t,o=we(n);if(o||gt(n)){const a=o&&di(n);let c=!1,u=!1;a&&(c=!En(n),u=er(n),n=kc(n)),r=new Array(n.length);for(let h=0,d=n.length;h<d;h++)r[h]=e(c?u?Ll(Pt(n[h])):Pt(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(Ze(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const bh=n=>n?bv(n)?Fc(n):bh(n.parent):null,Mo=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>bh(n.parent),$root:n=>bh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ov(n),$forceUpdate:n=>n.f||(n.f=()=>{Nd(n.update)}),$nextTick:n=>n.n||(n.n=Zo.bind(n.proxy)),$watch:n=>qb.bind(n)}),Ku=(n,e)=>n!==Ke&&!n.__isScriptSetup&&We(n,e),Ab={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(Ku(s,e))return o[e]=1,s[e];if(r!==Ke&&We(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&We(u,e))return o[e]=3,i[e];if(t!==Ke&&We(t,e))return o[e]=4,t[e];Ch&&(o[e]=0)}}const h=Mo[e];let d,p;if(h)return e==="$attrs"&&Ut(n.attrs,"get",""),h(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==Ke&&We(t,e))return o[e]=4,t[e];if(p=c.config.globalProperties,We(p,e))return p[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return Ku(r,e)?(r[e]=t,!0):s!==Ke&&We(s,e)?(s[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==Ke&&We(n,o)||Ku(e,o)||(a=i[0])&&We(a,o)||We(s,o)||We(Mo,o)||We(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ym(n){return we(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ch=!0;function Sb(n){const e=ov(n),t=n.proxy,s=n.ctx;Ch=!1,e.beforeCreate&&vm(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:y,activated:b,deactivated:x,beforeDestroy:L,beforeUnmount:V,destroyed:$,unmounted:z,render:ge,renderTracked:ue,renderTriggered:A,errorCaptured:E,serverPrefetch:I,expose:S,inheritAttrs:P,components:N,directives:T,filters:Ye}=e;if(u&&Rb(u,s,null),o)for(const ve in o){const Te=o[ve];xe(Te)&&(s[ve]=Te.bind(t))}if(r){const ve=r.call(t,t);Ze(ve)&&(n.data=Nc(ve))}if(Ch=!0,i)for(const ve in i){const Te=i[ve],ot=xe(Te)?Te.bind(t,t):xe(Te.get)?Te.get.bind(t,t):$n,rt=!xe(Te)&&xe(Te.set)?Te.set.bind(t):$n,it=pt({get:ot,set:rt});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>it.value,set:R=>it.value=R})}if(a)for(const ve in a)iv(a[ve],s,t,ve);if(c){const ve=xe(c)?c.call(t):c;Reflect.ownKeys(ve).forEach(Te=>{vl(Te,ve[Te])})}h&&vm(h,n,"c");function fe(ve,Te){we(Te)?Te.forEach(ot=>ve(ot.bind(t))):Te&&ve(Te.bind(t))}if(fe(gb,d),fe(Mn,p),fe(_b,g),fe(yb,y),fe(fb,b),fe(pb,x),fe(Tb,E),fe(wb,ue),fe(Eb,A),fe(Od,V),fe(Mc,z),fe(vb,I),we(S))if(S.length){const ve=n.exposed||(n.exposed={});S.forEach(Te=>{Object.defineProperty(ve,Te,{get:()=>t[Te],set:ot=>t[Te]=ot})})}else n.exposed||(n.exposed={});ge&&n.render===$n&&(n.render=ge),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),T&&(n.directives=T),I&&ev(n)}function Rb(n,e,t=$n){we(n)&&(n=Ah(n));for(const s in n){const r=n[s];let i;Ze(r)?"default"in r?i=jn(r.from||s,r.default,!0):i=jn(r.from||s):i=jn(r),Ht(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function vm(n,e,t){Yn(we(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function iv(n,e,t,s){let r=s.includes(".")?vv(t,s):()=>t[s];if(gt(n)){const i=e[n];xe(i)&&El(r,i)}else if(xe(n))El(r,n.bind(t));else if(Ze(n))if(we(n))n.forEach(i=>iv(i,e,t,s));else{const i=xe(n.handler)?n.handler.bind(t):e[n.handler];xe(i)&&El(r,i,n)}}function ov(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>$l(c,u,o,!0)),$l(c,e,o)),Ze(e)&&i.set(e,c),c}function $l(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&$l(n,i,t,!0),r&&r.forEach(o=>$l(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=xb[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const xb={data:Em,props:wm,emits:wm,methods:bo,computed:bo,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:bo,directives:bo,watch:kb,provide:Em,inject:Pb};function Em(n,e){return e?n?function(){return Gt(xe(n)?n.call(this,this):n,xe(e)?e.call(this,this):e)}:e:n}function Pb(n,e){return bo(Ah(n),Ah(e))}function Ah(n){if(we(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function bo(n,e){return n?Gt(Object.create(null),n,e):e}function wm(n,e){return n?we(n)&&we(e)?[...new Set([...n,...e])]:Gt(Object.create(null),ym(n),ym(e??{})):e}function kb(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const s in e)t[s]=Kt(n[s],e[s]);return t}function av(){return{app:null,config:{isNativeTag:TI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nb=0;function Db(n,e){return function(s,r=null){xe(s)||(s=Gt({},s)),r!=null&&!Ze(r)&&(r=null);const i=av(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Nb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:fC,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&xe(h.install)?(o.add(h),h.install(u,...d)):xe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!c){const g=u._ceVNode||qe(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),n(g,h,p),c=!0,u._container=h,h.__vue_app__=u,Fc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Yn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=mi;mi=u;try{return h()}finally{mi=d}}};return u}}let mi=null;function vl(n,e){if(jt){let t=jt.provides;const s=jt.parent&&jt.parent.provides;s===t&&(t=jt.provides=Object.create(s)),t[n]=e}}function jn(n,e,t=!1){const s=jt||hn;if(s||mi){let r=mi?mi._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&xe(e)?e.call(s&&s.proxy):e}}const lv={},cv=()=>Object.create(lv),uv=n=>Object.getPrototypeOf(n)===lv;function Ob(n,e,t,s=!1){const r={},i=cv();n.propsDefaults=Object.create(null),hv(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:Wy(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function Mb(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=He(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Lc(n.emitsOptions,p))continue;const g=e[p];if(c)if(We(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const y=In(p);r[y]=Sh(c,a,y,g,n,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{hv(n,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!We(e,d)&&((h=pr(d))===d||!We(e,h)))&&(c?t&&(t[d]!==void 0||t[h]!==void 0)&&(r[d]=Sh(c,a,d,void 0,n,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!We(e,d))&&(delete i[d],u=!0)}u&&as(n.attrs,"set","")}function hv(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(ko(c))continue;const u=e[c];let h;r&&We(r,h=In(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:Lc(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=He(t),u=a||Ke;for(let h=0;h<i.length;h++){const d=i[h];t[d]=Sh(r,c,d,u[d],n,!We(u,d))}}return o}function Sh(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=We(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&xe(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=ba(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===pr(t))&&(s=!0))}return s}const Lb=new WeakMap;function dv(n,e,t=!1){const s=t?Lb:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!xe(n)){const h=d=>{c=!0;const[p,g]=dv(d,e,!0);Gt(o,p),g&&a.push(...g)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return Ze(n)&&s.set(n,ui),ui;if(we(i))for(let h=0;h<i.length;h++){const d=In(i[h]);Tm(d)&&(o[d]=Ke)}else if(i)for(const h in i){const d=In(h);if(Tm(d)){const p=i[h],g=o[d]=we(p)||xe(p)?{type:p}:Gt({},p),y=g.type;let b=!1,x=!0;if(we(y))for(let L=0;L<y.length;++L){const V=y[L],$=xe(V)&&V.name;if($==="Boolean"){b=!0;break}else $==="String"&&(x=!1)}else b=xe(y)&&y.name==="Boolean";g[0]=b,g[1]=x,(b||We(g,"default"))&&a.push(d)}}const u=[o,a];return Ze(n)&&s.set(n,u),u}function Tm(n){return n[0]!=="$"&&!ko(n)}const Md=n=>n[0]==="_"||n==="$stable",Ld=n=>we(n)?n.map(Un):[Un(n)],Vb=(n,e,t)=>{if(e._n)return e;const s=cn((...r)=>Ld(e(...r)),t);return s._c=!1,s},fv=(n,e,t)=>{const s=n._ctx;for(const r in n){if(Md(r))continue;const i=n[r];if(xe(i))e[r]=Vb(r,i,s);else if(i!=null){const o=Ld(i);e[r]=()=>o}}},pv=(n,e)=>{const t=Ld(e);n.slots.default=()=>t},mv=(n,e,t)=>{for(const s in e)(t||!Md(s))&&(n[s]=e[s])},Fb=(n,e,t)=>{const s=n.slots=cv();if(n.vnode.shapeFlag&32){const r=e._;r?(mv(s,e,t),t&&Ay(s,"_",r,!0)):fv(e,s)}else e&&pv(n,e)},Ub=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=Ke;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:mv(r,e,t):(i=!e.$stable,fv(e,r)),o=e}else e&&(pv(n,e),o={default:1});if(i)for(const a in r)!Md(a)&&o[a]==null&&delete r[a]},ln=Zb;function Bb(n){return $b(n)}function $b(n,e){const t=Pc();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=$n,insertStaticContent:y}=n,b=(v,w,k,B=null,W=null,H=null,se=void 0,te=null,X=!!w.dynamicChildren)=>{if(v===w)return;v&&!go(v,w)&&(B=M(v),R(v,W,H,!0),v=null),w.patchFlag===-2&&(X=!1,w.dynamicChildren=null);const{type:K,ref:pe,shapeFlag:re}=w;switch(K){case Vc:x(v,w,k,B);break;case tr:L(v,w,k,B);break;case wl:v==null&&V(w,k,B,se);break;case ft:N(v,w,k,B,W,H,se,te,X);break;default:re&1?ge(v,w,k,B,W,H,se,te,X):re&6?T(v,w,k,B,W,H,se,te,X):(re&64||re&128)&&K.process(v,w,k,B,W,H,se,te,X,j)}pe!=null&&W&&Bl(pe,v&&v.ref,H,w||v,!w)},x=(v,w,k,B)=>{if(v==null)s(w.el=a(w.children),k,B);else{const W=w.el=v.el;w.children!==v.children&&u(W,w.children)}},L=(v,w,k,B)=>{v==null?s(w.el=c(w.children||""),k,B):w.el=v.el},V=(v,w,k,B)=>{[v.el,v.anchor]=y(v.children,w,k,B,v.el,v.anchor)},$=({el:v,anchor:w},k,B)=>{let W;for(;v&&v!==w;)W=p(v),s(v,k,B),v=W;s(w,k,B)},z=({el:v,anchor:w})=>{let k;for(;v&&v!==w;)k=p(v),r(v),v=k;r(w)},ge=(v,w,k,B,W,H,se,te,X)=>{w.type==="svg"?se="svg":w.type==="math"&&(se="mathml"),v==null?ue(w,k,B,W,H,se,te,X):I(v,w,W,H,se,te,X)},ue=(v,w,k,B,W,H,se,te)=>{let X,K;const{props:pe,shapeFlag:re,transition:de,dirs:Ae}=v;if(X=v.el=o(v.type,H,pe&&pe.is,pe),re&8?h(X,v.children):re&16&&E(v.children,X,null,B,W,Qu(v,H),se,te),Ae&&Tr(v,null,B,"created"),A(X,v,v.scopeId,se,B),pe){for(const Pe in pe)Pe!=="value"&&!ko(Pe)&&i(X,Pe,null,pe[Pe],H,B);"value"in pe&&i(X,"value",null,pe.value,H),(K=pe.onVnodeBeforeMount)&&Ln(K,B,v)}Ae&&Tr(v,null,B,"beforeMount");const Ee=jb(W,de);Ee&&de.beforeEnter(X),s(X,w,k),((K=pe&&pe.onVnodeMounted)||Ee||Ae)&&ln(()=>{K&&Ln(K,B,v),Ee&&de.enter(X),Ae&&Tr(v,null,B,"mounted")},W)},A=(v,w,k,B,W)=>{if(k&&g(v,k),B)for(let H=0;H<B.length;H++)g(v,B[H]);if(W){let H=W.subTree;if(w===H||wv(H.type)&&(H.ssContent===w||H.ssFallback===w)){const se=W.vnode;A(v,se,se.scopeId,se.slotScopeIds,W.parent)}}},E=(v,w,k,B,W,H,se,te,X=0)=>{for(let K=X;K<v.length;K++){const pe=v[K]=te?Hs(v[K]):Un(v[K]);b(null,pe,w,k,B,W,H,se,te)}},I=(v,w,k,B,W,H,se)=>{const te=w.el=v.el;let{patchFlag:X,dynamicChildren:K,dirs:pe}=w;X|=v.patchFlag&16;const re=v.props||Ke,de=w.props||Ke;let Ae;if(k&&Ir(k,!1),(Ae=de.onVnodeBeforeUpdate)&&Ln(Ae,k,w,v),pe&&Tr(w,v,k,"beforeUpdate"),k&&Ir(k,!0),(re.innerHTML&&de.innerHTML==null||re.textContent&&de.textContent==null)&&h(te,""),K?S(v.dynamicChildren,K,te,k,B,Qu(w,W),H):se||Te(v,w,te,null,k,B,Qu(w,W),H,!1),X>0){if(X&16)P(te,re,de,k,W);else if(X&2&&re.class!==de.class&&i(te,"class",null,de.class,W),X&4&&i(te,"style",re.style,de.style,W),X&8){const Ee=w.dynamicProps;for(let Pe=0;Pe<Ee.length;Pe++){const Ve=Ee[Pe],Dt=re[Ve],St=de[Ve];(St!==Dt||Ve==="value")&&i(te,Ve,Dt,St,W,k)}}X&1&&v.children!==w.children&&h(te,w.children)}else!se&&K==null&&P(te,re,de,k,W);((Ae=de.onVnodeUpdated)||pe)&&ln(()=>{Ae&&Ln(Ae,k,w,v),pe&&Tr(w,v,k,"updated")},B)},S=(v,w,k,B,W,H,se)=>{for(let te=0;te<w.length;te++){const X=v[te],K=w[te],pe=X.el&&(X.type===ft||!go(X,K)||X.shapeFlag&198)?d(X.el):k;b(X,K,pe,null,B,W,H,se,!0)}},P=(v,w,k,B,W)=>{if(w!==k){if(w!==Ke)for(const H in w)!ko(H)&&!(H in k)&&i(v,H,w[H],null,W,B);for(const H in k){if(ko(H))continue;const se=k[H],te=w[H];se!==te&&H!=="value"&&i(v,H,te,se,W,B)}"value"in k&&i(v,"value",w.value,k.value,W)}},N=(v,w,k,B,W,H,se,te,X)=>{const K=w.el=v?v.el:a(""),pe=w.anchor=v?v.anchor:a("");let{patchFlag:re,dynamicChildren:de,slotScopeIds:Ae}=w;Ae&&(te=te?te.concat(Ae):Ae),v==null?(s(K,k,B),s(pe,k,B),E(w.children||[],k,pe,W,H,se,te,X)):re>0&&re&64&&de&&v.dynamicChildren?(S(v.dynamicChildren,de,k,W,H,se,te),(w.key!=null||W&&w===W.subTree)&&gv(v,w,!0)):Te(v,w,k,pe,W,H,se,te,X)},T=(v,w,k,B,W,H,se,te,X)=>{w.slotScopeIds=te,v==null?w.shapeFlag&512?W.ctx.activate(w,k,B,se,X):Ye(w,k,B,W,H,se,X):_e(v,w,X)},Ye=(v,w,k,B,W,H,se)=>{const te=v.component=oC(v,B,W);if(tv(v)&&(te.ctx.renderer=j),aC(te,!1,se),te.asyncDep){if(W&&W.registerDep(te,fe,se),!v.el){const X=te.subTree=qe(tr);L(null,X,w,k)}}else fe(te,v,w,k,W,H,se)},_e=(v,w,k)=>{const B=w.component=v.component;if(Jb(v,w,k))if(B.asyncDep&&!B.asyncResolved){ve(B,w,k);return}else B.next=w,B.update();else w.el=v.el,B.vnode=w},fe=(v,w,k,B,W,H,se)=>{const te=()=>{if(v.isMounted){let{next:re,bu:de,u:Ae,parent:Ee,vnode:Pe}=v;{const Ot=_v(v);if(Ot){re&&(re.el=Pe.el,ve(v,re,se)),Ot.asyncDep.then(()=>{v.isUnmounted||te()});return}}let Ve=re,Dt;Ir(v,!1),re?(re.el=Pe.el,ve(v,re,se)):re=Pe,de&&yl(de),(Dt=re.props&&re.props.onVnodeBeforeUpdate)&&Ln(Dt,Ee,re,Pe),Ir(v,!0);const St=bm(v),mn=v.subTree;v.subTree=St,b(mn,St,d(mn.el),M(mn),v,W,H),re.el=St.el,Ve===null&&Xb(v,St.el),Ae&&ln(Ae,W),(Dt=re.props&&re.props.onVnodeUpdated)&&ln(()=>Ln(Dt,Ee,re,Pe),W)}else{let re;const{el:de,props:Ae}=w,{bm:Ee,m:Pe,parent:Ve,root:Dt,type:St}=v,mn=Oo(w);Ir(v,!1),Ee&&yl(Ee),!mn&&(re=Ae&&Ae.onVnodeBeforeMount)&&Ln(re,Ve,w),Ir(v,!0);{Dt.ce&&Dt.ce._injectChildStyle(St);const Ot=v.subTree=bm(v);b(null,Ot,k,B,v,W,H),w.el=Ot.el}if(Pe&&ln(Pe,W),!mn&&(re=Ae&&Ae.onVnodeMounted)){const Ot=w;ln(()=>Ln(re,Ve,Ot),W)}(w.shapeFlag&256||Ve&&Oo(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&v.a&&ln(v.a,W),v.isMounted=!0,w=k=B=null}};v.scope.on();const X=v.effect=new Py(te);v.scope.off();const K=v.update=X.run.bind(X),pe=v.job=X.runIfDirty.bind(X);pe.i=v,pe.id=v.uid,X.scheduler=()=>Nd(pe),Ir(v,!0),K()},ve=(v,w,k)=>{w.component=v;const B=v.vnode.props;v.vnode=w,v.next=null,Mb(v,w.props,B,k),Ub(v,w.children,k),Es(),gm(v),ws()},Te=(v,w,k,B,W,H,se,te,X=!1)=>{const K=v&&v.children,pe=v?v.shapeFlag:0,re=w.children,{patchFlag:de,shapeFlag:Ae}=w;if(de>0){if(de&128){rt(K,re,k,B,W,H,se,te,X);return}else if(de&256){ot(K,re,k,B,W,H,se,te,X);return}}Ae&8?(pe&16&&he(K,W,H),re!==K&&h(k,re)):pe&16?Ae&16?rt(K,re,k,B,W,H,se,te,X):he(K,W,H,!0):(pe&8&&h(k,""),Ae&16&&E(re,k,B,W,H,se,te,X))},ot=(v,w,k,B,W,H,se,te,X)=>{v=v||ui,w=w||ui;const K=v.length,pe=w.length,re=Math.min(K,pe);let de;for(de=0;de<re;de++){const Ae=w[de]=X?Hs(w[de]):Un(w[de]);b(v[de],Ae,k,null,W,H,se,te,X)}K>pe?he(v,W,H,!0,!1,re):E(w,k,B,W,H,se,te,X,re)},rt=(v,w,k,B,W,H,se,te,X)=>{let K=0;const pe=w.length;let re=v.length-1,de=pe-1;for(;K<=re&&K<=de;){const Ae=v[K],Ee=w[K]=X?Hs(w[K]):Un(w[K]);if(go(Ae,Ee))b(Ae,Ee,k,null,W,H,se,te,X);else break;K++}for(;K<=re&&K<=de;){const Ae=v[re],Ee=w[de]=X?Hs(w[de]):Un(w[de]);if(go(Ae,Ee))b(Ae,Ee,k,null,W,H,se,te,X);else break;re--,de--}if(K>re){if(K<=de){const Ae=de+1,Ee=Ae<pe?w[Ae].el:B;for(;K<=de;)b(null,w[K]=X?Hs(w[K]):Un(w[K]),k,Ee,W,H,se,te,X),K++}}else if(K>de)for(;K<=re;)R(v[K],W,H,!0),K++;else{const Ae=K,Ee=K,Pe=new Map;for(K=Ee;K<=de;K++){const Rt=w[K]=X?Hs(w[K]):Un(w[K]);Rt.key!=null&&Pe.set(Rt.key,K)}let Ve,Dt=0;const St=de-Ee+1;let mn=!1,Ot=0;const Ms=new Array(St);for(K=0;K<St;K++)Ms[K]=0;for(K=Ae;K<=re;K++){const Rt=v[K];if(Dt>=St){R(Rt,W,H,!0);continue}let gn;if(Rt.key!=null)gn=Pe.get(Rt.key);else for(Ve=Ee;Ve<=de;Ve++)if(Ms[Ve-Ee]===0&&go(Rt,w[Ve])){gn=Ve;break}gn===void 0?R(Rt,W,H,!0):(Ms[gn-Ee]=K+1,gn>=Ot?Ot=gn:mn=!0,b(Rt,w[gn],k,null,W,H,se,te,X),Dt++)}const to=mn?Hb(Ms):ui;for(Ve=to.length-1,K=St-1;K>=0;K--){const Rt=Ee+K,gn=w[Rt],Ha=Rt+1<pe?w[Rt+1].el:B;Ms[K]===0?b(null,gn,k,Ha,W,H,se,te,X):mn&&(Ve<0||K!==to[Ve]?it(gn,k,Ha,2):Ve--)}}},it=(v,w,k,B,W=null)=>{const{el:H,type:se,transition:te,children:X,shapeFlag:K}=v;if(K&6){it(v.component.subTree,w,k,B);return}if(K&128){v.suspense.move(w,k,B);return}if(K&64){se.move(v,w,k,j);return}if(se===ft){s(H,w,k);for(let re=0;re<X.length;re++)it(X[re],w,k,B);s(v.anchor,w,k);return}if(se===wl){$(v,w,k);return}if(B!==2&&K&1&&te)if(B===0)te.beforeEnter(H),s(H,w,k),ln(()=>te.enter(H),W);else{const{leave:re,delayLeave:de,afterLeave:Ae}=te,Ee=()=>{v.ctx.isUnmounted?r(H):s(H,w,k)},Pe=()=>{re(H,()=>{Ee(),Ae&&Ae()})};de?de(H,Ee,Pe):Pe()}else s(H,w,k)},R=(v,w,k,B=!1,W=!1)=>{const{type:H,props:se,ref:te,children:X,dynamicChildren:K,shapeFlag:pe,patchFlag:re,dirs:de,cacheIndex:Ae}=v;if(re===-2&&(W=!1),te!=null&&(Es(),Bl(te,null,k,v,!0),ws()),Ae!=null&&(w.renderCache[Ae]=void 0),pe&256){w.ctx.deactivate(v);return}const Ee=pe&1&&de,Pe=!Oo(v);let Ve;if(Pe&&(Ve=se&&se.onVnodeBeforeUnmount)&&Ln(Ve,w,v),pe&6)ce(v.component,k,B);else{if(pe&128){v.suspense.unmount(k,B);return}Ee&&Tr(v,null,w,"beforeUnmount"),pe&64?v.type.remove(v,w,k,j,B):K&&!K.hasOnce&&(H!==ft||re>0&&re&64)?he(K,w,k,!1,!0):(H===ft&&re&384||!W&&pe&16)&&he(X,w,k),B&&O(v)}(Pe&&(Ve=se&&se.onVnodeUnmounted)||Ee)&&ln(()=>{Ve&&Ln(Ve,w,v),Ee&&Tr(v,null,w,"unmounted")},k)},O=v=>{const{type:w,el:k,anchor:B,transition:W}=v;if(w===ft){Q(k,B);return}if(w===wl){z(v);return}const H=()=>{r(k),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(v.shapeFlag&1&&W&&!W.persisted){const{leave:se,delayLeave:te}=W,X=()=>se(k,H);te?te(v.el,H,X):X()}else H()},Q=(v,w)=>{let k;for(;v!==w;)k=p(v),r(v),v=k;r(w)},ce=(v,w,k)=>{const{bum:B,scope:W,job:H,subTree:se,um:te,m:X,a:K,parent:pe,slots:{__:re}}=v;Im(X),Im(K),B&&yl(B),pe&&we(re)&&re.forEach(de=>{pe.renderCache[de]=void 0}),W.stop(),H&&(H.flags|=8,R(se,v,w,k)),te&&ln(te,w),ln(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},he=(v,w,k,B=!1,W=!1,H=0)=>{for(let se=H;se<v.length;se++)R(v[se],w,k,B,W)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=p(v.anchor||v.el),k=w&&w[hb];return k?p(k):w};let Y=!1;const F=(v,w,k)=>{v==null?w._vnode&&R(w._vnode,null,null,!0):b(w._vnode||null,v,w,null,null,null,k),w._vnode=v,Y||(Y=!0,gm(),Yy(),Y=!1)},j={p:b,um:R,m:it,r:O,mt:Ye,mc:E,pc:Te,pbc:S,n:M,o:n};return{render:F,hydrate:void 0,createApp:Db(F)}}function Qu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function jb(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function gv(n,e,t=!1){const s=n.children,r=e.children;if(we(s)&&we(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Hs(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&gv(o,a)),a.type===Vc&&(a.el=o.el),a.type===tr&&!a.el&&(a.el=o.el)}}function Hb(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function _v(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_v(e)}function Im(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Wb=Symbol.for("v-scx"),Gb=()=>jn(Wb);function El(n,e,t){return yv(n,e,t)}function yv(n,e,t=Ke){const{immediate:s,deep:r,flush:i,once:o}=t,a=Gt({},t),c=e&&s||!e&&i!=="post";let u;if(na){if(i==="sync"){const g=Gb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=$n,g.resume=$n,g.pause=$n,g}}const h=jt;a.call=(g,y,b)=>Yn(g,h,y,b);let d=!1;i==="post"?a.scheduler=g=>{ln(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,y)=>{y?g():Nd(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=ab(n,e,a);return na&&(u?u.push(p):c&&p()),p}function qb(n,e,t){const s=this.proxy,r=gt(n)?n.includes(".")?vv(s,n):()=>s[n]:n.bind(s,s);let i;xe(e)?i=e:(i=e.handler,t=e);const o=ba(this),a=yv(r,i.bind(s),t);return o(),a}function vv(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const zb=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${In(e)}Modifiers`]||n[`${pr(e)}Modifiers`];function Kb(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Ke;let r=t;const i=e.startsWith("update:"),o=i&&zb(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>gt(h)?h.trim():h)),o.number&&(r=t.map(Ml)));let a,c=s[a=Hu(e)]||s[a=Hu(In(e))];!c&&i&&(c=s[a=Hu(pr(e))]),c&&Yn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yn(u,n,6,r)}}function Ev(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!xe(n)){const c=u=>{const h=Ev(u,e,!0);h&&(a=!0,Gt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Ze(n)&&s.set(n,null),null):(we(i)?i.forEach(c=>o[c]=null):Gt(o,i),Ze(n)&&s.set(n,o),o)}function Lc(n,e){return!n||!Sc(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,pr(e))||We(n,e))}function bm(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:y,inheritAttrs:b}=n,x=Ul(n);let L,V;try{if(t.shapeFlag&4){const z=r||s,ge=z;L=Un(u.call(ge,z,h,d,g,p,y)),V=a}else{const z=e;L=Un(z.length>1?z(d,{attrs:a,slots:o,emit:c}):z(d,null)),V=e.props?a:Qb(a)}}catch(z){Lo.length=0,Dc(z,n,1),L=qe(tr)}let $=L;if(V&&b!==!1){const z=Object.keys(V),{shapeFlag:ge}=$;z.length&&ge&7&&(i&&z.some(wd)&&(V=Yb(V,i)),$=Ti($,V,!1,!0))}return t.dirs&&($=Ti($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(t.dirs):t.dirs),t.transition&&Dd($,t.transition),L=$,Ul(x),L}const Qb=n=>{let e;for(const t in n)(t==="class"||t==="style"||Sc(t))&&((e||(e={}))[t]=n[t]);return e},Yb=(n,e)=>{const t={};for(const s in n)(!wd(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function Jb(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Cm(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==s[p]&&!Lc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cm(s,o,u):!0:!!o;return!1}function Cm(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!Lc(t,i))return!0}return!1}function Xb({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const wv=n=>n.__isSuspense;function Zb(n,e){e&&e.pendingBranch?we(n)?e.effects.push(...n):e.effects.push(n):ub(n)}const ft=Symbol.for("v-fgt"),Vc=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),wl=Symbol.for("v-stc"),Lo=[];let dn=null;function J(n=!1){Lo.push(dn=n?null:[])}function eC(){Lo.pop(),dn=Lo[Lo.length-1]||null}let ta=1;function Am(n,e=!1){ta+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function Tv(n){return n.dynamicChildren=ta>0?dn||ui:null,eC(),ta>0&&dn&&dn.push(n),n}function Z(n,e,t,s,r,i){return Tv(C(n,e,t,s,r,i,!0))}function jl(n,e,t,s,r){return Tv(qe(n,e,t,s,r,!0))}function Hl(n){return n?n.__v_isVNode===!0:!1}function go(n,e){return n.type===e.type&&n.key===e.key}const Iv=({key:n})=>n??null,Tl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Ht(n)||xe(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,s=0,r=null,i=n===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Iv(e),ref:e&&Tl(e),scopeId:Xy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:hn};return a?(Vd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=gt(t)?8:16),ta>0&&!o&&dn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dn.push(c),c}const qe=tC;function tC(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===bb)&&(n=tr),Hl(n)){const a=Ti(n,e,!0);return t&&Vd(a,t),ta>0&&!i&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(dC(n)&&(n=n.__vccOpts),e){e=nC(e);let{class:a,style:c}=e;a&&!gt(a)&&(e.class=ut(a)),Ze(c)&&(kd(c)&&!we(c)&&(c=Gt({},c)),e.style=Yo(c))}const o=gt(n)?1:wv(n)?128:db(n)?64:Ze(n)?4:xe(n)?2:0;return C(n,e,t,s,r,o,i,!0)}function nC(n){return n?kd(n)||uv(n)?Gt({},n):n:null}function Ti(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?sC(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Iv(u),ref:e&&e.ref?t&&i?we(i)?i.concat(Tl(e)):[i,Tl(e)]:Tl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ft?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ti(n.ssContent),ssFallback:n.ssFallback&&Ti(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&Dd(h,c.clone(h)),h}function ht(n=" ",e=0){return qe(Vc,null,n,e)}function Hi(n,e){const t=qe(wl,null,n);return t.staticCount=e,t}function Be(n="",e=!1){return e?(J(),jl(tr,null,n)):qe(tr,null,n)}function Un(n){return n==null||typeof n=="boolean"?qe(tr):we(n)?qe(ft,null,n.slice()):Hl(n)?Hs(n):qe(Vc,null,String(n))}function Hs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ti(n)}function Vd(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(we(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Vd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!uv(e)?e._ctx=hn:r===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else xe(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),s&64?(t=16,e=[ht(e)]):t=8);n.children=e,n.shapeFlag|=t}function sC(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ut([e.class,s.class]));else if(r==="style")e.style=Yo([e.style,s.style]);else if(Sc(r)){const i=e[r],o=s[r];o&&i!==o&&!(we(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ln(n,e,t,s=null){Yn(n,e,7,[t,s])}const rC=av();let iC=0;function oC(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||rC,i={uid:iC++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new OI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dv(s,r),emitsOptions:Ev(s,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:s.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kb.bind(null,i),n.ce&&n.ce(i),i}let jt=null,Wl,Rh;{const n=Pc(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Wl=e("__VUE_INSTANCE_SETTERS__",t=>jt=t),Rh=e("__VUE_SSR_SETTERS__",t=>na=t)}const ba=n=>{const e=jt;return Wl(n),n.scope.on(),()=>{n.scope.off(),Wl(e)}},Sm=()=>{jt&&jt.scope.off(),Wl(null)};function bv(n){return n.vnode.shapeFlag&4}let na=!1;function aC(n,e=!1,t=!1){e&&Rh(e);const{props:s,children:r}=n.vnode,i=bv(n);Ob(n,s,i,e),Fb(n,r,t||e);const o=i?lC(n,e):void 0;return e&&Rh(!1),o}function lC(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ab);const{setup:s}=t;if(s){Es();const r=n.setupContext=s.length>1?uC(n):null,i=ba(n),o=Ia(s,n,0,[n.props,r]),a=Iy(o);if(ws(),i(),(a||n.sp)&&!Oo(n)&&ev(n),a){if(o.then(Sm,Sm),e)return o.then(c=>{Rm(n,c)}).catch(c=>{Dc(c,n,0)});n.asyncDep=o}else Rm(n,o)}else Cv(n)}function Rm(n,e,t){xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ze(e)&&(n.setupState=zy(e)),Cv(n)}function Cv(n,e,t){const s=n.type;n.render||(n.render=s.render||$n);{const r=ba(n);Es();try{Sb(n)}finally{ws(),r()}}}const cC={get(n,e){return Ut(n,"get",""),n[e]}};function uC(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,cC),slots:n.slots,emit:n.emit,expose:e}}function Fc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(zy(eb(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mo)return Mo[t](n)},has(e,t){return t in e||t in Mo}})):n.proxy}function hC(n,e=!0){return xe(n)?n.displayName||n.name:n.name||e&&n.__name}function dC(n){return xe(n)&&"__vccOpts"in n}const pt=(n,e)=>ib(n,e,na);function Av(n,e,t){const s=arguments.length;return s===2?Ze(e)&&!we(e)?Hl(e)?qe(n,null,[e]):qe(n,e):qe(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Hl(t)&&(t=[t]),qe(n,e,t))}const fC="3.5.15";/**
* @vue/runtime-dom v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xh;const xm=typeof window<"u"&&window.trustedTypes;if(xm)try{xh=xm.createPolicy("vue",{createHTML:n=>n})}catch{}const Sv=xh?n=>xh.createHTML(n):n=>n,pC="http://www.w3.org/2000/svg",mC="http://www.w3.org/1998/Math/MathML",os=typeof document<"u"?document:null,Pm=os&&os.createElement("template"),gC={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?os.createElementNS(pC,n):e==="mathml"?os.createElementNS(mC,n):t?os.createElement(n,{is:t}):os.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>os.createTextNode(n),createComment:n=>os.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>os.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Pm.innerHTML=Sv(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=Pm.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_C=Symbol("_vtc");function yC(n,e,t){const s=n[_C];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const km=Symbol("_vod"),vC=Symbol("_vsh"),EC=Symbol(""),wC=/(^|;)\s*display\s*:/;function TC(n,e,t){const s=n.style,r=gt(t);let i=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Il(s,a,"")}else for(const o in e)t[o]==null&&Il(s,o,"");for(const o in t)o==="display"&&(i=!0),Il(s,o,t[o])}else if(r){if(e!==t){const o=s[EC];o&&(t+=";"+o),s.cssText=t,i=wC.test(t)}}else e&&n.removeAttribute("style");km in n&&(n[km]=i?s.display:"",n[vC]&&(s.display="none"))}const Nm=/\s*!important$/;function Il(n,e,t){if(we(t))t.forEach(s=>Il(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=IC(n,e);Nm.test(t)?n.setProperty(pr(s),t.replace(Nm,""),"important"):n[s]=t}}const Dm=["Webkit","Moz","ms"],Yu={};function IC(n,e){const t=Yu[e];if(t)return t;let s=In(e);if(s!=="filter"&&s in n)return Yu[e]=s;s=xc(s);for(let r=0;r<Dm.length;r++){const i=Dm[r]+s;if(i in n)return Yu[e]=i}return e}const Om="http://www.w3.org/1999/xlink";function Mm(n,e,t,s,r,i=NI(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Om,e.slice(6,e.length)):n.setAttributeNS(Om,e,t):t==null||i&&!Sy(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Qn(t)?String(t):t)}function Lm(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Sv(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Sy(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function cs(n,e,t,s){n.addEventListener(e,t,s)}function bC(n,e,t,s){n.removeEventListener(e,t,s)}const Vm=Symbol("_vei");function CC(n,e,t,s,r=null){const i=n[Vm]||(n[Vm]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=AC(e);if(s){const u=i[e]=xC(s,r);cs(n,a,u,c)}else o&&(bC(n,a,o,c),i[e]=void 0)}}const Fm=/(?:Once|Passive|Capture)$/;function AC(n){let e;if(Fm.test(n)){e={};let s;for(;s=n.match(Fm);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):pr(n.slice(2)),e]}let Ju=0;const SC=Promise.resolve(),RC=()=>Ju||(SC.then(()=>Ju=0),Ju=Date.now());function xC(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Yn(PC(s,t.value),e,5,[s])};return t.value=n,t.attached=RC(),t}function PC(n,e){if(we(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Um=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kC=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?yC(n,s,o):e==="style"?TC(n,t,s):Sc(e)?wd(e)||CC(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NC(n,e,s,o))?(Lm(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mm(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gt(s))?Lm(n,In(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Mm(n,e,s,o))};function NC(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Um(e)&&xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Um(e)&&gt(t)?!1:e in n}const nr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return we(e)?t=>yl(e,t):e};function DC(n){n.target.composing=!0}function Bm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wn=Symbol("_assign"),Hn={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[wn]=nr(r);const i=s||r.props&&r.props.type==="number";cs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Ml(a)),n[wn](a)}),t&&cs(n,"change",()=>{n.value=n.value.trim()}),e||(cs(n,"compositionstart",DC),cs(n,"compositionend",Bm),cs(n,"change",Bm))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[wn]=nr(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ml(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},OC={deep:!0,created(n,e,t){n[wn]=nr(t),cs(n,"change",()=>{const s=n._modelValue,r=Ii(n),i=n.checked,o=n[wn];if(we(s)){const a=bd(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if($i(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(xv(n,i))})},mounted:$m,beforeUpdate(n,e,t){n[wn]=nr(t),$m(n,e,t)}};function $m(n,{value:e,oldValue:t},s){n._modelValue=e;let r;if(we(e))r=bd(e,s.props.value)>-1;else if($i(e))r=e.has(s.props.value);else{if(e===t)return;r=Nr(e,xv(n,!0))}n.checked!==r&&(n.checked=r)}const MC={created(n,{value:e},t){n.checked=Nr(e,t.props.value),n[wn]=nr(t),cs(n,"change",()=>{n[wn](Ii(n))})},beforeUpdate(n,{value:e,oldValue:t},s){n[wn]=nr(s),e!==t&&(n.checked=Nr(e,s.props.value))}},Rv={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const r=$i(e);cs(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Ml(Ii(o)):Ii(o));n[wn](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,Zo(()=>{n._assigning=!1})}),n[wn]=nr(s)},mounted(n,{value:e}){jm(n,e)},beforeUpdate(n,e,t){n[wn]=nr(t)},updated(n,{value:e}){n._assigning||jm(n,e)}};function jm(n,e){const t=n.multiple,s=we(e);if(!(t&&!s&&!$i(e))){for(let r=0,i=n.options.length;r<i;r++){const o=n.options[r],a=Ii(o);if(t)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=bd(e,a)>-1}else o.selected=e.has(a);else if(Nr(Ii(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ii(n){return"_value"in n?n._value:n.value}function xv(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Pv={created(n,e,t){ll(n,e,t,null,"created")},mounted(n,e,t){ll(n,e,t,null,"mounted")},beforeUpdate(n,e,t,s){ll(n,e,t,s,"beforeUpdate")},updated(n,e,t,s){ll(n,e,t,s,"updated")}};function LC(n,e){switch(n){case"SELECT":return Rv;case"TEXTAREA":return Hn;default:switch(e){case"checkbox":return OC;case"radio":return MC;default:return Hn}}}function ll(n,e,t,s,r){const o=LC(n.tagName,t.props&&t.props.type)[r];o&&o(n,e,t,s)}const VC=["ctrl","shift","alt","meta"],FC={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>VC.some(t=>n[`${t}Key`]&&!e.includes(t))},Uc=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=FC[e[o]];if(a&&a(r,e))return}return n(r,...i)})},UC={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},BC=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=r=>{if(!("key"in r))return;const i=pr(r.key);if(e.some(o=>o===i||UC[o]===i))return n(r)})},$C=Gt({patchProp:kC},gC);let Hm;function jC(){return Hm||(Hm=Bb($C))}const HC=(...n)=>{const e=jC().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=GC(s);if(!r)return;const i=e._component;!xe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,WC(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function WC(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function GC(n){return gt(n)?document.querySelector(n):n}const qC=()=>{};var Wm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=function(n,e){if(!n)throw Wi(e)},Wi=function(n){return new Error("Firebase Database ("+kv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},zC=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(t[h],t[d],t[p],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const d=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new KC;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const y=u<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class KC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(n){const e=Nv(n);return Fd.encodeByteArray(e,!0)},Gl=function(n){return Dv(n).replace(/\./g,"")},ql=function(n){try{return Fd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(n){return Ov(void 0,n)}function Ov(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!YC(t)||(n[t]=Ov(n[t],e[t]));return n}function YC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=()=>JC().__FIREBASE_DEFAULTS__,ZC=()=>{if(typeof process>"u"||typeof Wm>"u")return;const n=Wm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ql(n[1]);return e&&JSON.parse(e)},Bc=()=>{try{return qC()||XC()||ZC()||eA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mv=n=>{var e,t;return(t=(e=Bc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Lv=n=>{const e=Mv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Vv=()=>{var n;return(n=Bc())===null||n===void 0?void 0:n.config},Fv=n=>{var e;return(e=Bc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){return n.endsWith(".cloudworkstations.dev")}async function Ud(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gl(JSON.stringify(t)),Gl(JSON.stringify(o)),""].join(".")}const Vo={};function tA(){const n={prod:[],emulator:[]};for(const e of Object.keys(Vo))Vo[e]?n.emulator.push(e):n.prod.push(e);return n}function nA(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Gm=!1;function Bd(n,e){if(typeof window>"u"||typeof document>"u"||!$r(window.location.host)||Vo[n]===e||Vo[n]||Gm)return;Vo[n]=e;function t(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=tA().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Gm=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=nA(s),g=t("text"),y=document.getElementById(g)||document.createElement("span"),b=t("learnmore"),x=document.getElementById(b)||document.createElement("a"),L=t("preprendIcon"),V=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const $=p.element;a($),h(x,b);const z=u();c(V,L),$.append(V,y,x,z),document.body.appendChild($)}i?(y.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function sA(){var n;const e=(n=Bc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oA(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function aA(){return kv.NODE_ADMIN===!0}function lA(){return!sA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cA(){try{return typeof indexedDB=="object"}catch{return!1}}function uA(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="FirebaseError";class Ps extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hA,Object.setPrototypeOf(this,Ps.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?dA(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ps(r,a,s)}}function dA(n,e){return n.replace(fA,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const fA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){return JSON.parse(n)}function vt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=sa(ql(i[0])||""),t=sa(ql(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},pA=function(n){const e=$v(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},mA=function(n){const e=$v(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function bi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Ts(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(qm(i)&&qm(o)){if(!Ts(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function qm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Co(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ao(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function _A(n,e){const t=new yA(n,e);return t.subscribe.bind(t)}class yA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vA(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Xu),r.error===void 0&&(r.error=Xu),r.complete===void 0&&(r.complete=Xu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xu(){}function jd(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,ee(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},jc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class sr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new $c;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IA(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:TA(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TA(n){return n===Ar?void 0:n}function IA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(De||(De={}));const CA={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},AA=De.INFO,SA={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},RA=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=SA[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=AA,this._logHandler=RA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const xA=(n,e)=>e.some(t=>n instanceof t);let zm,Km;function PA(){return zm||(zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kA(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jv=new WeakMap,kh=new WeakMap,Hv=new WeakMap,Zu=new WeakMap,Hd=new WeakMap;function NA(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(zs(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jv.set(t,n)}).catch(()=>{}),Hd.set(e,n),e}function DA(n){if(kh.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});kh.set(n,e)}let Nh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function OA(n){Nh=n(Nh)}function MA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(eh(this),e,...t);return Hv.set(s,e.sort?e.sort():[e]),zs(s)}:kA().includes(n)?function(...e){return n.apply(eh(this),e),zs(jv.get(this))}:function(...e){return zs(n.apply(eh(this),e))}}function LA(n){return typeof n=="function"?MA(n):(n instanceof IDBTransaction&&DA(n),xA(n,PA())?new Proxy(n,Nh):n)}function zs(n){if(n instanceof IDBRequest)return NA(n);if(Zu.has(n))return Zu.get(n);const e=LA(n);return e!==n&&(Zu.set(n,e),Hd.set(e,n)),e}const eh=n=>Hd.get(n);function VA(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=zs(o);return s&&o.addEventListener("upgradeneeded",c=>{s(zs(o.result),c.oldVersion,c.newVersion,zs(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FA=["get","getKey","getAll","getAllKeys","count"],UA=["put","add","delete","clear"],th=new Map;function Qm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=UA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||FA.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return th.set(e,i),i}OA(n=>({...n,get:(e,t,s)=>Qm(e,t)||n.get(e,t,s),has:(e,t)=>!!Qm(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($A(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $A(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dh="@firebase/app",Ym="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Hc("@firebase/app"),jA="@firebase/app-compat",HA="@firebase/analytics-compat",WA="@firebase/analytics",GA="@firebase/app-check-compat",qA="@firebase/app-check",zA="@firebase/auth",KA="@firebase/auth-compat",QA="@firebase/database",YA="@firebase/data-connect",JA="@firebase/database-compat",XA="@firebase/functions",ZA="@firebase/functions-compat",eS="@firebase/installations",tS="@firebase/installations-compat",nS="@firebase/messaging",sS="@firebase/messaging-compat",rS="@firebase/performance",iS="@firebase/performance-compat",oS="@firebase/remote-config",aS="@firebase/remote-config-compat",lS="@firebase/storage",cS="@firebase/storage-compat",uS="@firebase/firestore",hS="@firebase/ai",dS="@firebase/firestore-compat",fS="firebase",pS="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",mS={[Dh]:"fire-core",[jA]:"fire-core-compat",[WA]:"fire-analytics",[HA]:"fire-analytics-compat",[qA]:"fire-app-check",[GA]:"fire-app-check-compat",[zA]:"fire-auth",[KA]:"fire-auth-compat",[QA]:"fire-rtdb",[YA]:"fire-data-connect",[JA]:"fire-rtdb-compat",[XA]:"fire-fn",[ZA]:"fire-fn-compat",[eS]:"fire-iid",[tS]:"fire-iid-compat",[nS]:"fire-fcm",[sS]:"fire-fcm-compat",[rS]:"fire-perf",[iS]:"fire-perf-compat",[oS]:"fire-rc",[aS]:"fire-rc-compat",[lS]:"fire-gcs",[cS]:"fire-gcs-compat",[uS]:"fire-fst",[dS]:"fire-fst-compat",[hS]:"fire-vertex","fire-js":"fire-js",[fS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map,gS=new Map,Mh=new Map;function Jm(n,e){try{n.container.addComponent(e)}catch(t){Is.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dr(n){const e=n.name;if(Mh.has(e))return Is.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,n);for(const t of Kl.values())Jm(t,n);for(const t of gS.values())Jm(t,n);return!0}function Wc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function un(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ks=new Ca("app","Firebase",_S);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ks.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=pS;function Wv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Oh,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Ks.create("bad-app-name",{appName:String(r)});if(t||(t=Vv()),!t)throw Ks.create("no-options");const i=Kl.get(r);if(i){if(Ts(t,i.options)&&Ts(s,i.config))return i;throw Ks.create("duplicate-app",{appName:r})}const o=new bA(r);for(const c of Mh.values())o.addComponent(c);const a=new yS(t,s,o);return Kl.set(r,a),a}function Wd(n=Oh){const e=Kl.get(n);if(!e&&n===Oh&&Vv())return Wv();if(!e)throw Ks.create("no-app",{appName:n});return e}function Wn(n,e,t){var s;let r=(s=mS[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Is.warn(a.join(" "));return}Dr(new sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firebase-heartbeat-database",ES=1,ra="firebase-heartbeat-store";let nh=null;function Gv(){return nh||(nh=VA(vS,ES,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ra)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ks.create("idb-open",{originalErrorMessage:n.message})})),nh}async function wS(n){try{const t=(await Gv()).transaction(ra),s=await t.objectStore(ra).get(qv(n));return await t.done,s}catch(e){if(e instanceof Ps)Is.warn(e.message);else{const t=Ks.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Is.warn(t.message)}}}async function Xm(n,e){try{const s=(await Gv()).transaction(ra,"readwrite");await s.objectStore(ra).put(e,qv(n)),await s.done}catch(t){if(t instanceof Ps)Is.warn(t.message);else{const s=Ks.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Is.warn(s.message)}}}function qv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=1024,IS=30;class bS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>IS){const o=SS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Is.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zm(),{heartbeatsToSend:s,unsentEntries:r}=CS(this._heartbeatsCache.heartbeats),i=Gl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Is.warn(t),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function CS(n,e=TS){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),eg(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class AS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cA()?uA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function eg(n){return Gl(JSON.stringify({version:2,heartbeats:n})).length}function SS(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(n){Dr(new sr("platform-logger",e=>new BA(e),"PRIVATE")),Dr(new sr("heartbeat",e=>new bS(e),"PRIVATE")),Wn(Dh,Ym,n),Wn(Dh,Ym,"esm2017"),Wn("fire-js","")}RS("");function Gd(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kv=zv,Qv=new Ca("auth","Firebase",zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Hc("@firebase/auth");function xS(n,...e){Ql.logLevel<=De.WARN&&Ql.warn(`Auth (${jr}): ${n}`,...e)}function bl(n,...e){Ql.logLevel<=De.ERROR&&Ql.error(`Auth (${jr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n,...e){throw qd(n,...e)}function Gn(n,...e){return qd(n,...e)}function Yv(n,e,t){const s=Object.assign(Object.assign({},Kv()),{[e]:t});return new Ca("auth","Firebase",s).create(e,{appName:n.name})}function _s(n){return Yv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Qv.create(n,...e)}function Ie(n,e,...t){if(!n)throw qd(e,...t)}function ps(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bl(e),new Error(e)}function bs(n,e){n||ps(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function PS(){return tg()==="http:"||tg()==="https:"}function tg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||iA()||"connection"in navigator)?navigator.onLine:!0}function NS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.shortDelay=e,this.longDelay=t,bs(t>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Bv()}get(){return kS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n,e){bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],MS=new Aa(3e4,6e4);function mr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ns(n,e,t,s,r={}){return Xv(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Gi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return rA()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&$r(n.emulatorConfig.host)&&(u.credentials="include"),Jv.fetch()(await Zv(n,n.config.apiHost,t,a),u)})}async function Xv(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},DS),e);try{const r=new VS(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cl(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cl(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw cl(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yv(n,h,u);Nn(n,h)}}catch(r){if(r instanceof Ps)throw r;Nn(n,"network-request-failed",{message:String(r)})}}async function Sa(n,e,t,s,r={}){const i=await Ns(n,e,t,s,r);return"mfaPendingCredential"in i&&Nn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zv(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?zd(n.config,r):`${n.config.apiScheme}://${r}`;return OS.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function LS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),MS.get())})}}function cl(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Gn(n,e,s);return r.customData._tokenResponse=t,r}function ng(n){return n!==void 0&&n.enterprise!==void 0}class FS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return LS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function US(n,e){return Ns(n,"GET","/v2/recaptchaConfig",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e){return Ns(n,"POST","/v1/accounts:delete",e)}async function Yl(n,e){return Ns(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(n,e=!1){const t=et(n),s=await t.getIdToken(e),r=Kd(s);Ie(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Fo(sh(r.auth_time)),issuedAtTime:Fo(sh(r.iat)),expirationTime:Fo(sh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sh(n){return Number(n)*1e3}function Kd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const r=ql(t);return r?JSON.parse(r):(bl("Failed to decode base64 JWT payload"),null)}catch(r){return bl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function sg(n){const e=Kd(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ps&&$S(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function $S({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Ci(n,Yl(t,{idToken:s}));Ie(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?n0(i.providerUserInfo):[],a=HS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function t0(n){const e=et(n);await Jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HS(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function n0(n){return n.map(e=>{var{providerId:t}=e,s=Gd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(n,e){const t=await Xv(n,{},async()=>{const s=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await Zv(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function GS(n,e){return Ns(n,"POST","/v2/accounts:revokeToken",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await WS(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new gi;return s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(Ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e0(this,e)}reload(){return t0(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Jl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await Ci(this,BS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const d=(s=t.displayName)!==null&&s!==void 0?s:void 0,p=(r=t.email)!==null&&r!==void 0?r:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,x=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:$,emailVerified:z,isAnonymous:ge,providerData:ue,stsTokenManager:A}=t;Ie($&&A,e,"internal-error");const E=gi.fromJSON(this.name,A);Ie(typeof $=="string",e,"internal-error"),Us(d,e.name),Us(p,e.name),Ie(typeof z=="boolean",e,"internal-error"),Ie(typeof ge=="boolean",e,"internal-error"),Us(g,e.name),Us(y,e.name),Us(b,e.name),Us(x,e.name),Us(L,e.name),Us(V,e.name);const I=new An({uid:$,auth:e,email:p,emailVerified:z,displayName:d,isAnonymous:ge,photoURL:y,phoneNumber:g,tenantId:b,stsTokenManager:E,createdAt:L,lastLoginAt:V});return ue&&Array.isArray(ue)&&(I.providerData=ue.map(S=>Object.assign({},S))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,t,s=!1){const r=new gi;r.updateFromServerResponse(t);const i=new An({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Jl(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];Ie(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?n0(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new gi;a.updateFromIdToken(s);const c=new An({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Vh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new Map;function ms(n){bs(n instanceof Function,"Expected a class definition");let e=rg.get(n);return e?(bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rg.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}s0.type="NONE";const Fh=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e,t){return`firebase:${n}:${e}:${t}`}class _i{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cl(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Yl(this.auth,{idToken:e}).catch(()=>{});return t?An._fromGetAccountInfoResponse(this.auth,t,e):null}return An._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _i(ms(Fh),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ms(Fh);const o=Cl(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await Yl(e,{idToken:h}).catch(()=>{});if(!p)break;d=await An._fromGetAccountInfoResponse(e,p,h)}else d=An._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _i(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _i(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(u0(e))return"Webos";if(i0(e))return"Safari";if((e.includes("chrome/")||o0(e))&&!e.includes("edge/"))return"Chrome";if(l0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r0(n=qt()){return/firefox\//i.test(n)}function i0(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function o0(n=qt()){return/crios\//i.test(n)}function a0(n=qt()){return/iemobile/i.test(n)}function l0(n=qt()){return/android/i.test(n)}function c0(n=qt()){return/blackberry/i.test(n)}function u0(n=qt()){return/webos/i.test(n)}function Qd(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qS(n=qt()){var e;return Qd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return oA()&&document.documentMode===10}function h0(n=qt()){return Qd(n)||l0(n)||u0(n)||c0(n)||/windows phone/i.test(n)||a0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n,e=[]){let t;switch(n){case"Browser":t=ig(qt());break;case"Worker":t=`${ig(qt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(n,e={}){return Ns(n,"GET","/v2/passwordPolicy",mr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=6;class JS{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:YS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new og(this),this.idTokenSubscription=new og(this),this.beforeStateQueue=new KS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ms(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yl(this,{idToken:e}),s=await An._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(_s(this));const t=e?et(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QS(this),t=new JS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await GS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ms(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[ms(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Hr(n){return et(n)}class og{constructor(e){this.auth=e,this.observer=null,this.addObserver=_A(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZS(n){Gc=n}function f0(n){return Gc.loadJS(n)}function eR(){return Gc.recaptchaEnterpriseScript}function tR(){return Gc.gapiScript}function nR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sR{constructor(){this.enterprise=new rR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class rR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const iR="recaptcha-enterprise",p0="NO_RECAPTCHA";class oR{constructor(e){this.type=iR,this.auth=Hr(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{US(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new FS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;ng(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(p0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&ng(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=eR();c.length!==0&&(c+=a),f0(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function ag(n,e,t,s=!1,r=!1){const i=new oR(n);let o;if(r)o=p0;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Uh(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ag(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ag(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(n,e){const t=Wc(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ts(i,e??{}))return r;Nn(r,"already-initialized")}return t.initialize({options:e})}function aR(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ms);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function g0(n,e,t){const s=Hr(n);Ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=_0(e),{host:o,port:a}=lR(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){Ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ie(Ts(u,s.config.emulator)&&Ts(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,$r(o)?(Ud(`${i}//${o}${c}`),Bd("Auth",!0)):cR()}function _0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lR(n){const e=_0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:lg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:lg(o)}}}function lg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}async function uR(n,e){return Ns(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(n,e){return Sa(n,"POST","/v1/accounts:signInWithPassword",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,e){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",mr(n,e))}async function fR(n,e){return Sa(n,"POST","/v1/accounts:signInWithEmailLink",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends qc{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ai(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ai(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,t,"signInWithPassword",hR);case"emailLink":return dR(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,s,"signUpPassword",uR);case"emailLink":return fR(e,{idToken:t,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n,e){return Sa(n,"POST","/v1/accounts:signInWithIdp",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="http://localhost";class rr extends qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Gd(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return yi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yi(e,t)}buildRequest(){const e={requestUri:pR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gR(n){const e=Co(Ao(n)).link,t=e?Co(Ao(e)).deep_link_id:null,s=Co(Ao(n)).deep_link_id;return(s?Co(Ao(s)).link:null)||s||t||e||n}class zc{constructor(e){var t,s,r,i,o,a;const c=Co(Ao(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=mR((r=c.mode)!==null&&r!==void 0?r:null);Ie(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=gR(e);try{return new zc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,t){return Ai._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=zc.parseLink(t);return Ie(s,"argument-error"),Ai._fromEmailAndCode(e,s.code,s.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends y0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Ra{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hs.credential(t,s)}catch{return null}}}hs.GOOGLE_SIGN_IN_METHOD="google.com";hs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Ra{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.GITHUB_SIGN_IN_METHOD="github.com";ds.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Ra{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fs.credential(t,s)}catch{return null}}}fs.TWITTER_SIGN_IN_METHOD="twitter.com";fs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(n,e){return Sa(n,"POST","/v1/accounts:signUp",mr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await An._fromIdTokenResponse(e,s,r),o=cg(s);return new Or({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=cg(s);return new Or({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function cg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Ps{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Xl(e,t,s,r)}}function v0(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xl._fromErrorAndOperation(n,i,e,s):i})}async function yR(n,e,t=!1){const s=await Ci(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Or._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(n,e,t=!1){const{auth:s}=n;if(un(s.app))return Promise.reject(_s(s));const r="reauthenticate";try{const i=await Ci(n,v0(s,r,e,n),t);Ie(i.idToken,s,"internal-error");const o=Kd(i.idToken);Ie(o,s,"internal-error");const{sub:a}=o;return Ie(n.uid===a,s,"user-mismatch"),Or._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(n,e,t=!1){if(un(n.app))return Promise.reject(_s(n));const s="signIn",r=await v0(n,s,e),i=await Or._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function w0(n,e){return E0(Hr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(n){const e=Hr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function I0(n,e,t){if(un(n.app))return Promise.reject(_s(n));const s=Hr(n),o=await Uh(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_R).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&T0(n),c}),a=await Or._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function b0(n,e,t){return un(n.app)?Promise.reject(_s(n)):w0(et(n),Wr.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&T0(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(n,e){return Ns(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=et(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ci(s,ER(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function C0(n,e,t,s){return et(n).onIdTokenChanged(e,t,s)}function A0(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function qi(n,e,t,s){return et(n).onAuthStateChanged(e,t,s)}function Jd(n){return et(n).signOut()}const Zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zl,"1"),this.storage.removeItem(Zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=1e3,TR=10;class R0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);zS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,TR):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}R0.type="LOCAL";const x0=R0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}P0.type="SESSION";const Xd=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Kc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await IR(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Zd("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return window}function CR(n){qn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function AR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function RR(){return k0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="firebaseLocalStorageDb",xR=1,ec="firebaseLocalStorage",D0="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(n,e){return n.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function PR(){const n=indexedDB.deleteDatabase(N0);return new xa(n).toPromise()}function Bh(){const n=indexedDB.open(N0,xR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ec,{keyPath:D0})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ec)?e(s):(s.close(),await PR(),e(await Bh()))})})}async function ug(n,e,t){const s=Qc(n,!0).put({[D0]:e,value:t});return new xa(s).toPromise()}async function kR(n,e){const t=Qc(n,!1).get(e),s=await new xa(t).toPromise();return s===void 0?null:s.value}function hg(n,e){const t=Qc(n,!0).delete(e);return new xa(t).toPromise()}const NR=800,DR=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>DR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(RR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await AR(),!this.activeServiceWorker)return;this.sender=new bR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bh();return await ug(e,Zl,"1"),await hg(e,Zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>kR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qc(r,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const M0=O0;new Aa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n,e){return e?ms(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MR(n){return E0(n.auth,new ef(n),n.bypassAuthState)}function LR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),vR(t,new ef(n),n.bypassAuthState)}async function VR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),yR(t,new ef(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MR;case"linkViaPopup":case"linkViaRedirect":return VR;case"reauthViaPopup":case"reauthViaRedirect":return LR;default:Nn(this.auth,"internal-error")}}resolve(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Aa(2e3,1e4);class li extends L0{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){bs(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="pendingRedirect",Al=new Map;class BR extends L0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const s=await $R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $R(n,e){const t=WR(e),s=HR(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function jR(n,e){Al.set(n._key(),e)}function HR(n){return ms(n._redirectPersistence)}function WR(n){return Cl(UR,n.config.apiKey,n.name)}async function GR(n,e,t=!1){if(un(n.app))return Promise.reject(_s(n));const s=Hr(n),r=OR(s,e),o=await new BR(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=10*60*1e3;class zR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!V0(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qR&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function V0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(n,e={}){return Ns(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JR=/^https?/;async function XR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QR(n);for(const t of e)try{if(ZR(t))return}catch{}Nn(n,"unauthorized-domain")}function ZR(n){const e=Lh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!JR.test(t))return!1;if(YR.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new Aa(3e4,6e4);function fg(){const n=qn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tx(n){return new Promise((e,t)=>{var s,r,i;function o(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),t(Gn(n,"network-request-failed"))},timeout:ex.get()})}if(!((r=(s=qn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=qn().gapi)===null||i===void 0)&&i.load)o();else{const a=nR("iframefcb");return qn()[a]=()=>{gapi.load?o():t(Gn(n,"network-request-failed"))},f0(`${tR()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function nx(n){return Sl=Sl||tx(n),Sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=new Aa(5e3,15e3),rx="__/auth/iframe",ix="emulator/auth/iframe",ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lx(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zd(e,ix):`https://${n.config.authDomain}/${rx}`,s={apiKey:e.apiKey,appName:n.name,v:jr},r=ax.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Gi(s).slice(1)}`}async function cx(n){const e=await nx(n),t=qn().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:lx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ox,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Gn(n,"network-request-failed"),a=qn().setTimeout(()=>{i(o)},sx.get());function c(){qn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hx=500,dx=600,fx="_blank",px="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mx(n,e,t,s=hx,r=dx){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ux),{width:s.toString(),height:r.toString(),top:i,left:o}),u=qt().toLowerCase();t&&(a=o0(u)?fx:t),r0(u)&&(e=e||px,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(qS(u)&&a!=="_self")return gx(e||"",a),new pg(null);const d=window.open(e||"",a,h);Ie(d,n,"popup-blocked");try{d.focus()}catch{}return new pg(d)}function gx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="__/auth/handler",yx="emulator/auth/handler",vx=encodeURIComponent("fac");async function mg(n,e,t,s,r,i){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:jr,eventId:r};if(e instanceof y0){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ph(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ra){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${vx}=${encodeURIComponent(c)}`:"";return`${Ex(n)}?${Gi(a).slice(1)}${u}`}function Ex({config:n}){return n.emulator?zd(n,yx):`https://${n.authDomain}/${_x}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="webStorageSupport";class wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xd,this._completeRedirectFn=GR,this._overrideRedirectResult=jR}async _openPopup(e,t,s,r){var i;bs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await mg(e,t,s,Lh(),r);return mx(e,o,Zd())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await mg(e,t,s,Lh(),r);return CR(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(bs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cx(e),s=new zR(e);return t.register("authEvent",r=>(Ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rh,{type:rh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[rh];o!==void 0&&t(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return h0()||i0()||Qd()}}const F0=wx;var gg="@firebase/auth",_g="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bx(n){Dr(new sr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(n)},u=new XS(s,r,i,c);return aR(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Dr(new sr("auth-internal",e=>{const t=Hr(e.getProvider("auth").getImmediate());return(s=>new Tx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(gg,_g,Ix(n)),Wn(gg,_g,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=5*60,Ax=Fv("authIdTokenMaxAge")||Cx;let yg=null;const Sx=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Ax)return;const r=t==null?void 0:t.token;yg!==r&&(yg=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gr(n=Wd()){const e=Wc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=m0(n,{popupRedirectResolver:F0,persistence:[M0,x0,Xd]}),s=Fv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Sx(i.toString());A0(t,o,()=>o(t.currentUser)),C0(t,a=>o(a))}}const r=Mv("auth");return r&&g0(t,`http://${r}`),t}function Rx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ZS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Gn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Rx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bx("Browser");const xx=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:zc,AuthCredential:qc,EmailAuthCredential:Ai,EmailAuthProvider:Wr,FacebookAuthProvider:us,GithubAuthProvider:ds,GoogleAuthProvider:hs,OAuthCredential:rr,TwitterAuthProvider:fs,beforeAuthStateChanged:A0,browserLocalPersistence:x0,browserPopupRedirectResolver:F0,browserSessionPersistence:Xd,connectAuthEmulator:g0,createUserWithEmailAndPassword:I0,getAuth:Gr,getIdTokenResult:e0,inMemoryPersistence:Fh,indexedDBLocalPersistence:M0,initializeAuth:m0,onAuthStateChanged:qi,onIdTokenChanged:C0,prodErrorMap:Kv,reload:t0,signInWithCredential:w0,signInWithEmailAndPassword:b0,signOut:Jd,updateProfile:Yd},Symbol.toStringTag,{value:"Module"}));var Px="firebase",kx="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(Px,kx,"app");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs,U0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function I(){}I.prototype=E.prototype,A.D=E.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(S,P,N){for(var T=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)T[Ye-2]=arguments[Ye];return E.prototype[P].apply(S,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,E,I){I||(I=0);var S=Array(16);if(typeof E=="string")for(var P=0;16>P;++P)S[P]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(P=0;16>P;++P)S[P]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=A.g[0],I=A.g[1],P=A.g[2];var N=A.g[3],T=E+(N^I&(P^N))+S[0]+3614090360&4294967295;E=I+(T<<7&4294967295|T>>>25),T=N+(P^E&(I^P))+S[1]+3905402710&4294967295,N=E+(T<<12&4294967295|T>>>20),T=P+(I^N&(E^I))+S[2]+606105819&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(E^P&(N^E))+S[3]+3250441966&4294967295,I=P+(T<<22&4294967295|T>>>10),T=E+(N^I&(P^N))+S[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(P^E&(I^P))+S[5]+1200080426&4294967295,N=E+(T<<12&4294967295|T>>>20),T=P+(I^N&(E^I))+S[6]+2821735955&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(E^P&(N^E))+S[7]+4249261313&4294967295,I=P+(T<<22&4294967295|T>>>10),T=E+(N^I&(P^N))+S[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(P^E&(I^P))+S[9]+2336552879&4294967295,N=E+(T<<12&4294967295|T>>>20),T=P+(I^N&(E^I))+S[10]+4294925233&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(E^P&(N^E))+S[11]+2304563134&4294967295,I=P+(T<<22&4294967295|T>>>10),T=E+(N^I&(P^N))+S[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(P^E&(I^P))+S[13]+4254626195&4294967295,N=E+(T<<12&4294967295|T>>>20),T=P+(I^N&(E^I))+S[14]+2792965006&4294967295,P=N+(T<<17&4294967295|T>>>15),T=I+(E^P&(N^E))+S[15]+1236535329&4294967295,I=P+(T<<22&4294967295|T>>>10),T=E+(P^N&(I^P))+S[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(E^I))+S[6]+3225465664&4294967295,N=E+(T<<9&4294967295|T>>>23),T=P+(E^I&(N^E))+S[11]+643717713&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(P^N))+S[0]+3921069994&4294967295,I=P+(T<<20&4294967295|T>>>12),T=E+(P^N&(I^P))+S[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(E^I))+S[10]+38016083&4294967295,N=E+(T<<9&4294967295|T>>>23),T=P+(E^I&(N^E))+S[15]+3634488961&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(P^N))+S[4]+3889429448&4294967295,I=P+(T<<20&4294967295|T>>>12),T=E+(P^N&(I^P))+S[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(E^I))+S[14]+3275163606&4294967295,N=E+(T<<9&4294967295|T>>>23),T=P+(E^I&(N^E))+S[3]+4107603335&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(P^N))+S[8]+1163531501&4294967295,I=P+(T<<20&4294967295|T>>>12),T=E+(P^N&(I^P))+S[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^P&(E^I))+S[2]+4243563512&4294967295,N=E+(T<<9&4294967295|T>>>23),T=P+(E^I&(N^E))+S[7]+1735328473&4294967295,P=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(P^N))+S[12]+2368359562&4294967295,I=P+(T<<20&4294967295|T>>>12),T=E+(I^P^N)+S[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^P)+S[8]+2272392833&4294967295,N=E+(T<<11&4294967295|T>>>21),T=P+(N^E^I)+S[11]+1839030562&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^E)+S[14]+4259657740&4294967295,I=P+(T<<23&4294967295|T>>>9),T=E+(I^P^N)+S[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^P)+S[4]+1272893353&4294967295,N=E+(T<<11&4294967295|T>>>21),T=P+(N^E^I)+S[7]+4139469664&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^E)+S[10]+3200236656&4294967295,I=P+(T<<23&4294967295|T>>>9),T=E+(I^P^N)+S[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^P)+S[0]+3936430074&4294967295,N=E+(T<<11&4294967295|T>>>21),T=P+(N^E^I)+S[3]+3572445317&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^E)+S[6]+76029189&4294967295,I=P+(T<<23&4294967295|T>>>9),T=E+(I^P^N)+S[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^P)+S[12]+3873151461&4294967295,N=E+(T<<11&4294967295|T>>>21),T=P+(N^E^I)+S[15]+530742520&4294967295,P=N+(T<<16&4294967295|T>>>16),T=I+(P^N^E)+S[2]+3299628645&4294967295,I=P+(T<<23&4294967295|T>>>9),T=E+(P^(I|~N))+S[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~P))+S[7]+1126891415&4294967295,N=E+(T<<10&4294967295|T>>>22),T=P+(E^(N|~I))+S[14]+2878612391&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~E))+S[5]+4237533241&4294967295,I=P+(T<<21&4294967295|T>>>11),T=E+(P^(I|~N))+S[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~P))+S[3]+2399980690&4294967295,N=E+(T<<10&4294967295|T>>>22),T=P+(E^(N|~I))+S[10]+4293915773&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~E))+S[1]+2240044497&4294967295,I=P+(T<<21&4294967295|T>>>11),T=E+(P^(I|~N))+S[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~P))+S[15]+4264355552&4294967295,N=E+(T<<10&4294967295|T>>>22),T=P+(E^(N|~I))+S[6]+2734768916&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~E))+S[13]+1309151649&4294967295,I=P+(T<<21&4294967295|T>>>11),T=E+(P^(I|~N))+S[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~P))+S[11]+3174756917&4294967295,N=E+(T<<10&4294967295|T>>>22),T=P+(E^(N|~I))+S[2]+718787259&4294967295,P=N+(T<<15&4294967295|T>>>17),T=I+(N^(P|~E))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+P&4294967295,A.g[3]=A.g[3]+N&4294967295}s.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var I=E-this.blockSize,S=this.B,P=this.h,N=0;N<E;){if(P==0)for(;N<=I;)r(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<E;)if(S[P++]=A.charCodeAt(N++),P==this.blockSize){r(this,S),P=0;break}}else for(;N<E;)if(S[P++]=A[N++],P==this.blockSize){r(this,S),P=0;break}}this.h=P,this.o+=E},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var I=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=I&255,I/=256;for(this.u(A),A=Array(16),E=I=0;4>E;++E)for(var S=0;32>S;S+=8)A[I++]=this.g[E]>>>S&255;return A};function i(A,E){var I=a;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=E(A)}function o(A,E){this.h=E;for(var I=[],S=!0,P=A.length-1;0<=P;P--){var N=A[P]|0;S&&N==E||(I[P]=N,S=!1)}this.g=I}var a={};function c(A){return-128<=A&&128>A?i(A,function(E){return new o([E|0],0>E?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return d;if(0>A)return x(u(-A));for(var E=[],I=1,S=0;A>=I;S++)E[S]=A/I|0,I*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return x(h(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(E,8)),S=d,P=0;P<A.length;P+=8){var N=Math.min(8,A.length-P),T=parseInt(A.substring(P,P+N),E);8>N?(N=u(Math.pow(E,N)),S=S.j(N).add(u(T))):(S=S.j(I),S=S.add(u(T)))}return S}var d=c(0),p=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(b(this))return-x(this).m();for(var A=0,E=1,I=0;I<this.g.length;I++){var S=this.i(I);A+=(0<=S?S:4294967296+S)*E,E*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(y(this))return"0";if(b(this))return"-"+x(this).toString(A);for(var E=u(Math.pow(A,6)),I=this,S="";;){var P=z(I,E).g;I=L(I,P.j(E));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=P,y(I))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function y(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function b(A){return A.h==-1}n.l=function(A){return A=L(this,A),b(A)?-1:y(A)?0:1};function x(A){for(var E=A.g.length,I=[],S=0;S<E;S++)I[S]=~A.g[S];return new o(I,~A.h).add(p)}n.abs=function(){return b(this)?x(this):this},n.add=function(A){for(var E=Math.max(this.g.length,A.g.length),I=[],S=0,P=0;P<=E;P++){var N=S+(this.i(P)&65535)+(A.i(P)&65535),T=(N>>>16)+(this.i(P)>>>16)+(A.i(P)>>>16);S=T>>>16,N&=65535,T&=65535,I[P]=T<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function L(A,E){return A.add(x(E))}n.j=function(A){if(y(this)||y(A))return d;if(b(this))return b(A)?x(this).j(x(A)):x(x(this).j(A));if(b(A))return x(this.j(x(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var E=this.g.length+A.g.length,I=[],S=0;S<2*E;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<A.g.length;P++){var N=this.i(S)>>>16,T=this.i(S)&65535,Ye=A.i(P)>>>16,_e=A.i(P)&65535;I[2*S+2*P]+=T*_e,V(I,2*S+2*P),I[2*S+2*P+1]+=N*_e,V(I,2*S+2*P+1),I[2*S+2*P+1]+=T*Ye,V(I,2*S+2*P+1),I[2*S+2*P+2]+=N*Ye,V(I,2*S+2*P+2)}for(S=0;S<E;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=E;S<2*E;S++)I[S]=0;return new o(I,0)};function V(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function $(A,E){this.g=A,this.h=E}function z(A,E){if(y(E))throw Error("division by zero");if(y(A))return new $(d,d);if(b(A))return E=z(x(A),E),new $(x(E.g),x(E.h));if(b(E))return E=z(A,x(E)),new $(x(E.g),E.h);if(30<A.g.length){if(b(A)||b(E))throw Error("slowDivide_ only works with positive integers.");for(var I=p,S=E;0>=S.l(A);)I=ge(I),S=ge(S);var P=ue(I,1),N=ue(S,1);for(S=ue(S,2),I=ue(I,2);!y(S);){var T=N.add(S);0>=T.l(A)&&(P=P.add(I),N=T),S=ue(S,1),I=ue(I,1)}return E=L(A,P.j(E)),new $(P,E)}for(P=d;0<=A.l(E);){for(I=Math.max(1,Math.floor(A.m()/E.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=u(I),T=N.j(E);b(T)||0<T.l(A);)I-=S,N=u(I),T=N.j(E);y(N)&&(N=p),P=P.add(N),A=L(A,T)}return new $(P,A)}n.A=function(A){return z(this,A).h},n.and=function(A){for(var E=Math.max(this.g.length,A.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)&A.i(S);return new o(I,this.h&A.h)},n.or=function(A){for(var E=Math.max(this.g.length,A.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)|A.i(S);return new o(I,this.h|A.h)},n.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),I=[],S=0;S<E;S++)I[S]=this.i(S)^A.i(S);return new o(I,this.h^A.h)};function ge(A){for(var E=A.g.length+1,I=[],S=0;S<E;S++)I[S]=A.i(S)<<1|A.i(S-1)>>>31;return new o(I,A.h)}function ue(A,E){var I=E>>5;E%=32;for(var S=A.g.length-I,P=[],N=0;N<S;N++)P[N]=0<E?A.i(N+I)>>>E|A.i(N+I+1)<<32-E:A.i(N+I);return new o(P,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,U0=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Qs=o}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B0,So,$0,Rl,$h,j0,H0,W0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ul=="object"&&ul];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=t(this);function r(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var D=l[_];if(!(D in m))break e;m=m[D]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var m=0,_=!1,D={next:function(){if(!_&&m<l.length){var U=m++;return{value:f(U,l[U]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}r("Array.prototype.values",function(l){return l||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function d(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),l.apply(f,D)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function y(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,D,U){for(var ne=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ne[ze-2]=arguments[ze];return f.prototype[D].apply(_,ne)}}function b(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function x(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(c(_)){const D=l.length||0,U=_.length||0;l.length=D+U;for(let ne=0;ne<U;ne++)l[D+ne]=_[ne]}else l.push(_)}}class L{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function V(l){return/^[\s\xa0]*$/.test(l)}function $(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function z(l){return z[" "](l),l}z[" "]=function(){};var ge=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ue(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function A(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function E(l){const f={};for(const m in l)f[m]=l[m];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,f){let m,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(m in _)l[m]=_[m];for(let U=0;U<I.length;U++)m=I[U],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function P(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function T(){var l=ot;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ye{constructor(){this.h=this.g=null}add(f,m){const _=_e.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var _e=new L(()=>new fe,l=>l.reset());class fe{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,Te=!1,ot=new Ye,rt=()=>{const l=a.Promise.resolve(void 0);ve=()=>{l.then(it)}};var it=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(m){N(m)}var f=_e;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Te=!1};function R(){this.s=this.s,this.C=this.C}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function ce(l,f){if(O.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ge){e:{try{z(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:he[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ce.aa.h.call(this)}}y(ce,O);var he={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Y=0;function F(l,f,m,_,D){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=D,this.key=++Y,this.da=this.fa=!1}function j(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function oe(l){this.src=l,this.g={},this.h=0}oe.prototype.add=function(l,f,m,_,D){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var ne=w(l,f,_,D);return-1<ne?(f=l[ne],m||(f.fa=!1)):(f=new F(f,this.src,U,!!_,D),f.fa=m,l.push(f)),f};function v(l,f){var m=f.type;if(m in l.g){var _=l.g[m],D=Array.prototype.indexOf.call(_,f,void 0),U;(U=0<=D)&&Array.prototype.splice.call(_,D,1),U&&(j(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function w(l,f,m,_){for(var D=0;D<l.length;++D){var U=l[D];if(!U.da&&U.listener==f&&U.capture==!!m&&U.ha==_)return D}return-1}var k="closure_lm_"+(1e6*Math.random()|0),B={};function W(l,f,m,_,D){if(Array.isArray(f)){for(var U=0;U<f.length;U++)W(l,f[U],m,_,D);return null}return m=Ae(m),l&&l[M]?l.K(f,m,u(_)?!!_.capture:!1,D):H(l,f,m,!1,_,D)}function H(l,f,m,_,D,U){if(!f)throw Error("Invalid event type");var ne=u(D)?!!D.capture:!!D,ze=re(l);if(ze||(l[k]=ze=new oe(l)),m=ze.add(f,m,_,ne,U),m.proxy)return m;if(_=se(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)Q||(D=ne),D===void 0&&(D=!1),l.addEventListener(f.toString(),_,D);else if(l.attachEvent)l.attachEvent(K(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function se(){function l(m){return f.call(l.src,l.listener,m)}const f=pe;return l}function te(l,f,m,_,D){if(Array.isArray(f))for(var U=0;U<f.length;U++)te(l,f[U],m,_,D);else _=u(_)?!!_.capture:!!_,m=Ae(m),l&&l[M]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],m=w(U,m,_,D),-1<m&&(j(U[m]),Array.prototype.splice.call(U,m,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=re(l))&&(f=l.g[f.toString()],l=-1,f&&(l=w(f,m,_,D)),(m=-1<l?f[l]:null)&&X(m))}function X(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[M])v(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(K(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=re(f))?(v(m,l),m.h==0&&(m.src=null,f[k]=null)):j(l)}}}function K(l){return l in B?B[l]:B[l]="on"+l}function pe(l,f){if(l.da)l=!0;else{f=new ce(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&X(l),l=m.call(_,f)}return l}function re(l){return l=l[k],l instanceof oe?l:null}var de="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(l){return typeof l=="function"?l:(l[de]||(l[de]=function(f){return l.handleEvent(f)}),l[de])}function Ee(){R.call(this),this.i=new oe(this),this.M=this,this.F=null}y(Ee,R),Ee.prototype[M]=!0,Ee.prototype.removeEventListener=function(l,f,m,_){te(this,l,f,m,_)};function Pe(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new O(f,l);else if(f instanceof O)f.target=f.target||l;else{var D=f;f=new O(_,l),S(f,D)}if(D=!0,m)for(var U=m.length-1;0<=U;U--){var ne=f.g=m[U];D=Ve(ne,_,!0,f)&&D}if(ne=f.g=l,D=Ve(ne,_,!0,f)&&D,D=Ve(ne,_,!1,f)&&D,m)for(U=0;U<m.length;U++)ne=f.g=m[U],D=Ve(ne,_,!1,f)&&D}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)j(m[_]);delete l.g[f],l.h--}}this.F=null},Ee.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},Ee.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function Ve(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,U=0;U<f.length;++U){var ne=f[U];if(ne&&!ne.da&&ne.capture==m){var ze=ne.listener,xt=ne.ha||ne.src;ne.fa&&v(l.i,ne),D=ze.call(xt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Dt(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function St(l){l.g=Dt(()=>{l.g=null,l.i&&(l.i=!1,St(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class mn extends R{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:St(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(l){R.call(this),this.h=l,this.g={}}y(Ot,R);var Ms=[];function to(l){ue(l.g,function(f,m){this.g.hasOwnProperty(m)&&X(f)},l),l.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),to(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rt=a.JSON.stringify,gn=a.JSON.parse,Ha=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ru(){}Ru.prototype.h=null;function wp(l){return l.h||(l.h=l.i())}function Tp(){}var no={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xu(){O.call(this,"d")}y(xu,O);function Pu(){O.call(this,"c")}y(Pu,O);var yr={},Ip=null;function Wa(){return Ip=Ip||new Ee}yr.La="serverreachability";function bp(l){O.call(this,yr.La,l)}y(bp,O);function so(l){const f=Wa();Pe(f,new bp(f))}yr.STAT_EVENT="statevent";function Cp(l,f){O.call(this,yr.STAT_EVENT,l),this.stat=f}y(Cp,O);function zt(l){const f=Wa();Pe(f,new Cp(f,l))}yr.Ma="timingevent";function Ap(l,f){O.call(this,yr.Ma,l),this.size=f}y(Ap,O);function ro(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function io(){this.g=!0}io.prototype.xa=function(){this.g=!1};function ZT(l,f,m,_,D,U){l.info(function(){if(l.g)if(U)for(var ne="",ze=U.split("&"),xt=0;xt<ze.length;xt++){var Ue=ze[xt].split("=");if(1<Ue.length){var Mt=Ue[0];Ue=Ue[1];var Lt=Mt.split("_");ne=2<=Lt.length&&Lt[1]=="type"?ne+(Mt+"="+Ue+"&"):ne+(Mt+"=redacted&")}}else ne=null;else ne=U;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+f+`
`+m+`
`+ne})}function eI(l,f,m,_,D,U,ne){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+f+`
`+m+`
`+U+" "+ne})}function Yr(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+nI(l,m)+(_?" "+_:"")})}function tI(l,f){l.info(function(){return"TIMEOUT: "+f})}io.prototype.info=function(){};function nI(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var U=D[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ne=1;ne<D.length;ne++)D[ne]=""}}}}return Rt(m)}catch{return f}}var Ga={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ku;function qa(){}y(qa,Ru),qa.prototype.g=function(){return new XMLHttpRequest},qa.prototype.i=function(){return{}},ku=new qa;function Ls(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var xp={},Nu={};function Du(l,f,m){l.L=1,l.v=Ya(Zn(f)),l.m=m,l.P=!0,Pp(l,null)}function Pp(l,f){l.F=Date.now(),za(l),l.A=Zn(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Wp(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Rp,l.g=lm(l.j,m?f:null,!l.m),0<l.O&&(l.M=new mn(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ms[0]=D.toString()),D=Ms);for(var U=0;U<D.length;U++){var ne=W(m,D[U],_||f.handleEvent,!1,f.h||f);if(!ne)break;f.g[ne.key]=ne}f=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),so(),ZT(l.i,l.u,l.A,l.l,l.R,l.m)}Ls.prototype.ca=function(l){l=l.target;const f=this.M;f&&es(l)==3?f.j():this.Y(l)},Ls.prototype.Y=function(l){try{if(l==this.g)e:{const Lt=es(this.g);var f=this.g.Ba();const Zr=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Jp(this.g)))){this.J||Lt!=4||f==7||(f==8||0>=Zr?so(3):so(2)),Ou(this);var m=this.g.Z();this.X=m;t:if(kp(this)){var _=Jp(this.g);l="";var D=_.length,U=es(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),oo(this);var ne="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(U&&f==D-1)});_.length=0,this.h.g+=l,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=m==200,eI(this.i,this.u,this.A,this.l,this.R,Lt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,xt=this.g;if((ze=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ze)){var Ue=ze;break t}}Ue=null}if(m=Ue)Yr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mu(this,m);else{this.o=!1,this.s=3,zt(12),vr(this),oo(this);break e}}if(this.P){m=!0;let bn;for(;!this.J&&this.C<ne.length;)if(bn=sI(this,ne),bn==Nu){Lt==4&&(this.s=4,zt(14),m=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==xp){this.s=4,zt(15),Yr(this.i,this.l,ne,"[Invalid Chunk]"),m=!1;break}else Yr(this.i,this.l,bn,null),Mu(this,bn);if(kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||ne.length!=0||this.h.h||(this.s=1,zt(16),m=!1),this.o=this.o&&m,!m)Yr(this.i,this.l,ne,"[Invalid Chunked Response]"),vr(this),oo(this);else if(0<ne.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),$u(Mt),Mt.M=!0,zt(11))}}else Yr(this.i,this.l,ne,null),Mu(this,ne);Lt==4&&vr(this),this.o&&!this.J&&(Lt==4?rm(this.j,this):(this.o=!1,za(this)))}else EI(this.g),m==400&&0<ne.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),vr(this),oo(this)}}}catch{}finally{}};function kp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sI(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?Nu:(m=Number(f.substring(m,_)),isNaN(m)?xp:(_+=1,_+m>f.length?Nu:(f=f.slice(_,_+m),l.C=_+m,f)))}Ls.prototype.cancel=function(){this.J=!0,vr(this)};function za(l){l.S=Date.now()+l.I,Np(l,l.I)}function Np(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ro(p(l.ba,l),f)}function Ou(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ls.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(tI(this.i,this.A),this.L!=2&&(so(),zt(17)),vr(this),this.s=2,oo(this)):Np(this,this.S-l)};function oo(l){l.j.G==0||l.J||rm(l.j,l)}function vr(l){Ou(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,to(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Mu(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Lu(m.h,l))){if(!l.K&&Lu(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)nl(m),el(m);else break e;Bu(m),zt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=ro(p(m.Za,m),6e3));if(1>=Mp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else wr(m,11)}else if((l.K||m.g==l)&&nl(m),!V(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let Ue=D[f];if(m.T=Ue[0],Ue=Ue[1],m.G==2)if(Ue[0]=="c"){m.K=Ue[1],m.ia=Ue[2];const Mt=Ue[3];Mt!=null&&(m.la=Mt,m.j.info("VER="+m.la));const Lt=Ue[4];Lt!=null&&(m.Aa=Lt,m.j.info("SVER="+m.Aa));const Zr=Ue[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(_=1.5*Zr,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const bn=l.g;if(bn){const rl=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rl){var U=_.h;U.g||rl.indexOf("spdy")==-1&&rl.indexOf("quic")==-1&&rl.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Vu(U,U.h),U.h=null))}if(_.D){const ju=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;ju&&(_.ya=ju,tt(_.I,_.D,ju))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var ne=l;if(_.qa=am(_,_.J?_.ia:null,_.W),ne.K){Lp(_.h,ne);var ze=ne,xt=_.L;xt&&(ze.I=xt),ze.B&&(Ou(ze),za(ze)),_.g=ne}else nm(_);0<m.i.length&&tl(m)}else Ue[0]!="stop"&&Ue[0]!="close"||wr(m,7);else m.G==3&&(Ue[0]=="stop"||Ue[0]=="close"?Ue[0]=="stop"?wr(m,7):Uu(m):Ue[0]!="noop"&&m.l&&m.l.ta(Ue),m.v=0)}}so(4)}catch{}}var rI=class{constructor(l,f){this.g=l,this.map=f}};function Dp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Op(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Mp(l){return l.h?1:l.g?l.g.size:0}function Lu(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Vu(l,f){l.g?l.g.add(f):l.h=f}function Lp(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Dp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Vp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return b(l.i)}function iI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function oI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function Fp(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=oI(l),_=iI(l),D=_.length,U=0;U<D;U++)f.call(void 0,_[U],m&&m[U],l)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aI(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),D=null;if(0<=_){var U=l[m].substring(0,_);D=l[m].substring(_+1)}else U=l[m];f(U,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Er(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Er){this.h=l.h,Ka(this,l.j),this.o=l.o,this.g=l.g,Qa(this,l.s),this.l=l.l;var f=l.i,m=new co;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Bp(this,m),this.m=l.m}else l&&(f=String(l).match(Up))?(this.h=!1,Ka(this,f[1]||"",!0),this.o=ao(f[2]||""),this.g=ao(f[3]||"",!0),Qa(this,f[4]),this.l=ao(f[5]||"",!0),Bp(this,f[6]||"",!0),this.m=ao(f[7]||"")):(this.h=!1,this.i=new co(null,this.h))}Er.prototype.toString=function(){var l=[],f=this.j;f&&l.push(lo(f,$p,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(lo(f,$p,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(lo(m,m.charAt(0)=="/"?uI:cI,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",lo(m,dI)),l.join("")};function Zn(l){return new Er(l)}function Ka(l,f,m){l.j=m?ao(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Qa(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Bp(l,f,m){f instanceof co?(l.i=f,fI(l.i,l.h)):(m||(f=lo(f,hI)),l.i=new co(f,l.h))}function tt(l,f,m){l.i.set(f,m)}function Ya(l){return tt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ao(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function lo(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,lI),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $p=/[#\/\?@]/g,cI=/[#\?:]/g,uI=/[#\?]/g,hI=/[#\?@]/g,dI=/#/g;function co(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Vs(l){l.g||(l.g=new Map,l.h=0,l.i&&aI(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=co.prototype,n.add=function(l,f){Vs(this),this.i=null,l=Jr(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function jp(l,f){Vs(l),f=Jr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Hp(l,f){return Vs(l),f=Jr(l,f),l.g.has(f)}n.forEach=function(l,f){Vs(this),this.g.forEach(function(m,_){m.forEach(function(D){l.call(f,D,_,this)},this)},this)},n.na=function(){Vs(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const D=l[_];for(let U=0;U<D.length;U++)m.push(f[_])}return m},n.V=function(l){Vs(this);let f=[];if(typeof l=="string")Hp(this,l)&&(f=f.concat(this.g.get(Jr(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},n.set=function(l,f){return Vs(this),this.i=null,l=Jr(this,l),Hp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Wp(l,f,m){jp(l,f),0<m.length&&(l.i=null,l.g.set(Jr(l,f),b(m)),l.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const U=encodeURIComponent(String(_)),ne=this.V(_);for(_=0;_<ne.length;_++){var D=U;ne[_]!==""&&(D+="="+encodeURIComponent(String(ne[_]))),l.push(D)}}return this.i=l.join("&")};function Jr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function fI(l,f){f&&!l.j&&(Vs(l),l.i=null,l.g.forEach(function(m,_){var D=_.toLowerCase();_!=D&&(jp(this,_),Wp(this,D,m))},l)),l.j=f}function pI(l,f){const m=new io;if(a.Image){const _=new Image;_.onload=g(Fs,m,"TestLoadImage: loaded",!0,f,_),_.onerror=g(Fs,m,"TestLoadImage: error",!1,f,_),_.onabort=g(Fs,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(Fs,m,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function mI(l,f){const m=new io,_=new AbortController,D=setTimeout(()=>{_.abort(),Fs(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(U=>{clearTimeout(D),U.ok?Fs(m,"TestPingServer: ok",!0,f):Fs(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Fs(m,"TestPingServer: error",!1,f)})}function Fs(l,f,m,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(m)}catch{}}function gI(){this.g=new Ha}function _I(l,f,m){const _=m||"";try{Fp(l,function(D,U){let ne=D;u(D)&&(ne=Rt(D)),f.push(_+U+"="+encodeURIComponent(ne))})}catch(D){throw f.push(_+"type="+encodeURIComponent("_badmap")),D}}function Ja(l){this.l=l.Ub||null,this.j=l.eb||!1}y(Ja,Ru),Ja.prototype.g=function(){return new Xa(this.l,this.j)},Ja.prototype.i=function(l){return function(){return l}}({});function Xa(l,f){Ee.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Xa,Ee),n=Xa.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,ho(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?uo(this):ho(this),this.readyState==3&&Gp(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,uo(this))},n.Qa=function(l){this.g&&(this.response=l,uo(this))},n.ga=function(){this.g&&uo(this)};function uo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ho(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function ho(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function qp(l){let f="";return ue(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Fu(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=qp(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):tt(l,f,m))}function at(l){Ee.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(at,Ee);var yI=/^https?$/i,vI=["POST","PUT"];n=at.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ku.g(),this.v=this.o?wp(this.o):wp(ku),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){zp(this,U);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)m.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const U of _.keys())m.set(U,_.get(U));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(U=>U.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(vI,f,void 0))||_||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ne]of m)this.g.setRequestHeader(U,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yp(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){zp(this,U)}};function zp(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Kp(l),Za(l)}function Kp(l){l.A||(l.A=!0,Pe(l,"complete"),Pe(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Pe(this,"complete"),Pe(this,"abort"),Za(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Za(this,!0)),at.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Qp(this):this.bb())},n.bb=function(){Qp(this)};function Qp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||es(l)!=4||l.Z()!=2)){if(l.u&&es(l)==4)Dt(l.Ea,0,l);else if(Pe(l,"readystatechange"),es(l)==4){l.h=!1;try{const ne=l.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=ne===0){var D=String(l.D).match(Up)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!yI.test(D?D.toLowerCase():"")}m=_}if(m)Pe(l,"complete"),Pe(l,"success");else{l.m=6;try{var U=2<es(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Kp(l)}}finally{Za(l)}}}}function Za(l,f){if(l.g){Yp(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Pe(l,"ready");try{m.onreadystatechange=_}catch{}}}function Yp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function es(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<es(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),gn(f)}};function Jp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function EI(l){const f={};l=(l.g&&2<=es(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(V(l[_]))continue;var m=P(l[_]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const U=f[D]||[];f[D]=U,U.push(m)}A(f,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fo(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Xp(l){this.Aa=0,this.i=[],this.j=new io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fo("baseRetryDelayMs",5e3,l),this.cb=fo("retryDelaySeedMs",1e4,l),this.Wa=fo("forwardChannelMaxRetries",2,l),this.wa=fo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Dp(l&&l.concurrentRequestLimit),this.Da=new gI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xp.prototype,n.la=8,n.G=1,n.connect=function(l,f,m,_){zt(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=am(this,null,this.W),tl(this)};function Uu(l){if(Zp(l),l.G==3){var f=l.U++,m=Zn(l.I);if(tt(m,"SID",l.K),tt(m,"RID",f),tt(m,"TYPE","terminate"),po(l,m),f=new Ls(l,l.j,f),f.L=2,f.v=Ya(Zn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=lm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),za(f)}om(l)}function el(l){l.g&&($u(l),l.g.cancel(),l.g=null)}function Zp(l){el(l),l.u&&(a.clearTimeout(l.u),l.u=null),nl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function tl(l){if(!Op(l.h)&&!l.s){l.s=!0;var f=l.Ga;ve||rt(),Te||(ve(),Te=!0),ot.add(f,l),l.B=0}}function wI(l,f){return Mp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ro(p(l.Ga,l,f),im(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new Ls(this,this.j,l);let U=this.o;if(this.S&&(U?(U=E(U),S(U,this.S)):U=this.S),this.m!==null||this.O||(D.H=U,U=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=tm(this,D,f),m=Zn(this.I),tt(m,"RID",l),tt(m,"CVER",22),this.D&&tt(m,"X-HTTP-Session-Id",this.D),po(this,m),U&&(this.O?f="headers="+encodeURIComponent(String(qp(U)))+"&"+f:this.m&&Fu(m,this.m,U)),Vu(this.h,D),this.Ua&&tt(m,"TYPE","init"),this.P?(tt(m,"$req",f),tt(m,"SID","null"),D.T=!0,Du(D,m,null)):Du(D,m,f),this.G=2}}else this.G==3&&(l?em(this,l):this.i.length==0||Op(this.h)||em(this))};function em(l,f){var m;f?m=f.l:m=l.U++;const _=Zn(l.I);tt(_,"SID",l.K),tt(_,"RID",m),tt(_,"AID",l.T),po(l,_),l.m&&l.o&&Fu(_,l.m,l.o),m=new Ls(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=tm(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vu(l.h,m),Du(m,_,f)}function po(l,f){l.H&&ue(l.H,function(m,_){tt(f,_,m)}),l.l&&Fp({},function(m,_){tt(f,_,m)})}function tm(l,f,m){m=Math.min(l.i.length,m);var _=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let U=-1;for(;;){const ne=["count="+m];U==-1?0<m?(U=D[0].g,ne.push("ofs="+U)):U=0:ne.push("ofs="+U);let ze=!0;for(let xt=0;xt<m;xt++){let Ue=D[xt].g;const Mt=D[xt].map;if(Ue-=U,0>Ue)U=Math.max(0,D[xt].g-100),ze=!1;else try{_I(Mt,ne,"req"+Ue+"_")}catch{_&&_(Mt)}}if(ze){_=ne.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function nm(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ve||rt(),Te||(ve(),Te=!0),ot.add(f,l),l.v=0}}function Bu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ro(p(l.Fa,l),im(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,sm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ro(p(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),el(this),sm(this))};function $u(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function sm(l){l.g=new Ls(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zn(l.qa);tt(f,"RID","rpc"),tt(f,"SID",l.K),tt(f,"AID",l.T),tt(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&tt(f,"TO",l.ja),tt(f,"TYPE","xmlhttp"),po(l,f),l.m&&l.o&&Fu(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ya(Zn(f)),m.m=null,m.P=!0,Pp(m,l)}n.Za=function(){this.C!=null&&(this.C=null,el(this),Bu(this),zt(19))};function nl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function rm(l,f){var m=null;if(l.g==f){nl(l),$u(l),l.g=null;var _=2}else if(Lu(l.h,f))m=f.D,Lp(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=l.B;_=Wa(),Pe(_,new Ap(_,m)),tl(l)}else nm(l);else if(D=f.s,D==3||D==0&&0<f.X||!(_==1&&wI(l,f)||_==2&&Bu(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),D){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function im(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function wr(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),_=l.Xa;const D=!_;_=new Er(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ka(_,"https"),Ya(_),D?pI(_.toString(),m):mI(_.toString(),m)}else zt(2);l.G=0,l.l&&l.l.sa(f),om(l),Zp(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function om(l){if(l.G=0,l.ka=[],l.l){const f=Vp(l.h);(f.length!=0||l.i.length!=0)&&(x(l.ka,f),x(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function am(l,f,m){var _=m instanceof Er?Zn(m):new Er(m);if(_.g!="")f&&(_.g=f+"."+_.g),Qa(_,_.s);else{var D=a.location;_=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var U=new Er(null);_&&Ka(U,_),f&&(U.g=f),D&&Qa(U,D),m&&(U.l=m),_=U}return m=l.D,f=l.ya,m&&f&&tt(_,m,f),tt(_,"VER",l.la),po(l,_),_}function lm(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new at(new Ja({eb:m})):new at(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function cm(){}n=cm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sl(){}sl.prototype.g=function(l,f){return new an(l,f)};function an(l,f){Ee.call(this),this.g=new Xp(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!V(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!V(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Xr(this)}y(an,Ee),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Uu(this.g)},an.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Rt(l),l=m);f.i.push(new rI(f.Ya++,l)),f.G==3&&tl(f)},an.prototype.N=function(){this.g.l=null,delete this.j,Uu(this.g),delete this.g,an.aa.N.call(this)};function um(l){xu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}y(um,xu);function hm(){Pu.call(this),this.status=1}y(hm,Pu);function Xr(l){this.g=l}y(Xr,cm),Xr.prototype.ua=function(){Pe(this.g,"a")},Xr.prototype.ta=function(l){Pe(this.g,new um(l))},Xr.prototype.sa=function(l){Pe(this.g,new hm)},Xr.prototype.ra=function(){Pe(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,W0=function(){return new sl},H0=function(){return Wa()},j0=yr,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ga.NO_ERROR=0,Ga.TIMEOUT=8,Ga.HTTP_ERROR=6,Rl=Ga,Sp.COMPLETE="complete",$0=Sp,Tp.EventType=no,no.OPEN="a",no.CLOSE="b",no.ERROR="c",no.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,So=Tp,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,B0=at}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore",wg="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Hc("@firebase/firestore");function si(){return Mr.logLevel}function ae(n,...e){if(Mr.logLevel<=De.DEBUG){const t=e.map(tf);Mr.debug(`Firestore (${zi}): ${n}`,...t)}}function Cs(n,...e){if(Mr.logLevel<=De.ERROR){const t=e.map(tf);Mr.error(`Firestore (${zi}): ${n}`,...t)}}function Si(n,...e){if(Mr.logLevel<=De.WARN){const t=e.map(tf);Mr.warn(`Firestore (${zi}): ${n}`,...t)}}function tf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,G0(n,s,t)}function G0(n,e,t){let s=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cs(s),new Error(s)}function Ge(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||G0(e,r,s)}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Ps{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class Dx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ox{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ys;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ys,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ys)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string",31837,{l:s}),new q0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class Mx{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lx{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Mx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0,3512);const s=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Fx(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function ke(n,e){return n<e?-1:n>e?1:0}function jh(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return ke(s,r);{const i=z0(),o=Ux(i.encode(Ig(n,t)),i.encode(Ig(e,t)));return o!==0?o:ke(s,r)}}t+=s>65535?2:1}return ke(n.length,e.length)}function Ig(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ux(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ke(n[t],e[t]);return ke(n.length,e.length)}function Ri(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=-62135596800,Cg=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Cg);return new wt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bg)throw new le(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cg}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new wt(0,0))}static max(){return new Se(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__name__";class Fn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ce(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ce(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Fn.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ke(e.length,t.length)}static compareSegments(e,t){const s=Fn.isNumericId(e),r=Fn.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Fn.extractNumericId(e).compare(Fn.extractNumericId(t)):jh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qs.fromString(e.substring(4,e.length-2))}}class st extends Fn{construct(e,t,s){return new st(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new st(t)}static emptyPath(){return new st([])}}const Bx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Fn{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return Bx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ag}static keyField(){return new kt([Ag])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new le(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new le(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new le(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(st.fromString(e))}static fromName(e){return new me(st.fromString(e).popFirst(5))}static empty(){return new me(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return st.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new st(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=-1;function $x(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=Se.fromTimestamp(s===1e9?new wt(t+1,0):new wt(t,s));return new ir(r,me.empty(),e)}function jx(n){return new ir(n.readTime,n.key,ia)}class ir{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ir(Se.min(),me.empty(),ia)}static max(){return new ir(Se.max(),me.empty(),ia)}}function Hx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==Wx)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,s)=>{t(e)})}static reject(e){return new G((t,s)=>{s(e)})}static waitFor(e){return new G((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next(r=>r?G.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new G((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new G((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function qx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Yc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=-1;function Jc(n){return n==null}function tc(n){return n===0&&1/n==-1/0}function zx(n){return typeof n=="number"&&Number.isInteger(n)&&!tc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="";function Kx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sg(e)),e=Qx(n.get(t),e);return Sg(e)}function Qx(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Q0:t+="";break;default:t+=i}}return t}function Sg(n){return n+Q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function gr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Y0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t=class Hh{constructor(e,t){this.comparator=e,this.root=t||Ys.EMPTY}insert(e,t){return new Hh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ys.BLACK,null,null))}remove(e){return new Hh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ys.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hl(this.root,e,this.comparator,!0)}},hl=class{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ys=class is{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??is.RED,this.left=r??is.EMPTY,this.right=i??is.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new is(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return is.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return is.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,is.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,is.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ce(27949);return e+(this.isRed()?0:1)}};Ys.EMPTY=null,Ys.RED=!0,Ys.BLACK=!1;Ys.EMPTY=new class{constructor(){this.size=0}get key(){throw Ce(57766)}get value(){throw Ce(16141)}get color(){throw Ce(16727)}get left(){throw Ce(29726)}get right(){throw Ce(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Ys(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xg(this.data.getIterator())}getIteratorFrom(e){return new xg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class xg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new Tt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ri(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new J0("Invalid base64 string: "+i):i}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Yx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(n){if(Ge(!!n,39018),typeof n=="string"){let e=0;const t=Yx.exec(n);if(Ge(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ar(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="server_timestamp",Z0="__type__",eE="__previous_value__",tE="__local_write_time__";function sf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Z0])===null||t===void 0?void 0:t.stringValue)===X0}function Xc(n){const e=n.mapValue.fields[eE];return sf(e)?Xc(e):e}function oa(n){const e=or(n.mapValue.fields[tE].timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,t,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const nc="(default)";class aa{constructor(e,t){this.projectId=e,this.database=t||nc}static empty(){return new aa("","")}get isDefaultDatabase(){return this.database===nc}isEqual(e){return e instanceof aa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="__type__",Xx="__max__",dl={mapValue:{}},sE="__vector__",sc="value";function lr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sf(n)?4:e1(n)?9007199254740991:Zx(n)?10:11:Ce(28295,{value:n})}function Jn(n,e){if(n===e)return!0;const t=lr(n);if(t!==lr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return oa(n).isEqual(oa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=or(r.timestampValue),a=or(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return ar(r.bytesValue).isEqual(ar(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ct(r.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(r.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ct(r.integerValue)===ct(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ct(r.doubleValue),a=ct(i.doubleValue);return o===a?tc(o)===tc(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ri(n.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Rg(o)!==Rg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Jn(o[c],a[c])))return!1;return!0}(n,e);default:return Ce(52216,{left:n})}}function la(n,e){return(n.values||[]).find(t=>Jn(t,e))!==void 0}function xi(n,e){if(n===e)return 0;const t=lr(n),s=lr(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ct(i.integerValue||i.doubleValue),c=ct(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Pg(n.timestampValue,e.timestampValue);case 4:return Pg(oa(n),oa(e));case 5:return jh(n.stringValue,e.stringValue);case 6:return function(i,o){const a=ar(i),c=ar(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ke(a[u],c[u]);if(h!==0)return h}return ke(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ke(ct(i.latitude),ct(o.latitude));return a!==0?a:ke(ct(i.longitude),ct(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return kg(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d[sc])===null||a===void 0?void 0:a.arrayValue,y=(c=p[sc])===null||c===void 0?void 0:c.arrayValue,b=ke(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:kg(g,y)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===dl.mapValue&&o===dl.mapValue)return 0;if(i===dl.mapValue)return 1;if(o===dl.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=jh(c[d],h[d]);if(p!==0)return p;const g=xi(a[c[d]],u[h[d]]);if(g!==0)return g}return ke(c.length,h.length)}(n.mapValue,e.mapValue);default:throw Ce(23264,{Pe:t})}}function Pg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=or(n),s=or(e),r=ke(t.seconds,s.seconds);return r!==0?r:ke(t.nanos,s.nanos)}function kg(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=xi(t[r],s[r]);if(i)return i}return ke(t.length,s.length)}function Pi(n){return Wh(n)}function Wh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=or(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ar(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Wh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Wh(t.fields[o])}`;return r+"}"}(n.mapValue):Ce(61005,{value:n})}function xl(n){switch(lr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(n);return e?16+xl(e):16;case 5:return 2*n.stringValue.length;case 6:return ar(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+xl(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return gr(s.fields,(i,o)=>{r+=i.length+xl(o)}),r}(n.mapValue);default:throw Ce(13486,{value:n})}}function Ng(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gh(n){return!!n&&"integerValue"in n}function rf(n){return!!n&&"arrayValue"in n}function Dg(n){return!!n&&"nullValue"in n}function Og(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pl(n){return!!n&&"mapValue"in n}function Zx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[nE])===null||t===void 0?void 0:t.stringValue)===sE}function Uo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return gr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Uo(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Uo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function e1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Xx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Pl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uo(t)}setAll(e){let t=kt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=Uo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Pl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Pl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){gr(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new tn(Uo(this.value))}}function rE(n){const e=[];return gr(n.fields,(t,s)=>{const r=new kt([t]);if(Pl(s)){const i=rE(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Bt(e,0,Se.min(),Se.min(),Se.min(),tn.empty(),0)}static newFoundDocument(e,t,s,r){return new Bt(e,1,t,Se.min(),s,r,0)}static newNoDocument(e,t){return new Bt(e,2,t,Se.min(),Se.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Se.min(),Se.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.position=e,this.inclusive=t}}function Mg(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=me.comparator(me.fromName(o.referenceValue),t.key):s=xi(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lg(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Jn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,t="asc"){this.field=e,this.dir=t}}function t1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{}class mt extends iE{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new s1(e,t,s):t==="array-contains"?new o1(e,s):t==="in"?new a1(e,s):t==="not-in"?new l1(e,s):t==="array-contains-any"?new c1(e,s):new mt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new r1(e,s):new i1(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xi(t,this.value)):t!==null&&lr(this.value)===lr(t)&&this.matchesComparison(xi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends iE{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Dn(e,t)}matches(e){return oE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function oE(n){return n.op==="and"}function aE(n){return n1(n)&&oE(n)}function n1(n){for(const e of n.filters)if(e instanceof Dn)return!1;return!0}function qh(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Pi(n.value);if(aE(n))return n.filters.map(e=>qh(e)).join(",");{const e=n.filters.map(t=>qh(t)).join(",");return`${n.op}(${e})`}}function lE(n,e){return n instanceof mt?function(s,r){return r instanceof mt&&s.op===r.op&&s.field.isEqual(r.field)&&Jn(s.value,r.value)}(n,e):n instanceof Dn?function(s,r){return r instanceof Dn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&lE(o,r.filters[a]),!0):!1}(n,e):void Ce(19439)}function cE(n){return n instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${Pi(t.value)}`}(n):n instanceof Dn?function(t){return t.op.toString()+" {"+t.getFilters().map(cE).join(" ,")+"}"}(n):"Filter"}class s1 extends mt{constructor(e,t,s){super(e,t,s),this.key=me.fromName(s.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class r1 extends mt{constructor(e,t){super(e,"in",t),this.keys=uE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class i1 extends mt{constructor(e,t){super(e,"not-in",t),this.keys=uE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>me.fromName(s.referenceValue))}class o1 extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rf(t)&&la(t.arrayValue,this.value)}}class a1 extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&la(this.value.arrayValue,t)}}class l1 extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!la(this.value.arrayValue,t)}}class c1 extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>la(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function Vg(n,e=null,t=[],s=[],r=null,i=null,o=null){return new u1(n,e,t,s,r,i,o)}function of(n){const e=Re(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>qh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Jc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Pi(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Pi(s)).join(",")),e.Ie=t}return e.Ie}function af(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!t1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Lg(n.startAt,e.startAt)&&Lg(n.endAt,e.endAt)}function zh(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function h1(n,e,t,s,r,i,o,a){return new Pa(n,e,t,s,r,i,o,a)}function Zc(n){return new Pa(n)}function Fg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hE(n){return n.collectionGroup!==null}function Bo(n){const e=Re(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Tt(kt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ic(i,s))}),t.has(kt.keyField().canonicalString())||e.Ee.push(new ic(kt.keyField(),s))}return e.Ee}function zn(n){const e=Re(n);return e.de||(e.de=d1(e,Bo(n))),e.de}function d1(n,e){if(n.limitType==="F")return Vg(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new ic(r.field,i)});const t=n.endAt?new rc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new rc(n.startAt.position,n.startAt.inclusive):null;return Vg(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Kh(n,e){const t=n.filters.concat([e]);return new Pa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Qh(n,e,t){return new Pa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function eu(n,e){return af(zn(n),zn(e))&&n.limitType===e.limitType}function dE(n){return`${of(zn(n))}|lt:${n.limitType}`}function ri(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>cE(r)).join(", ")}]`),Jc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Pi(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Pi(r)).join(",")),`Target(${s})`}(zn(n))}; limitType=${n.limitType})`}function tu(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):me.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Bo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=Mg(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Bo(s),r)||s.endAt&&!function(o,a,c){const u=Mg(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Bo(s),r))}(n,e)}function f1(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fE(n){return(e,t)=>{let s=!1;for(const r of Bo(n)){const i=p1(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function p1(n,e,t){const s=n.field.isKeyField()?me.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?xi(c,u):Ce(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new _t(me.comparator);function As(){return m1}const pE=new _t(me.comparator);function Ro(...n){let e=pE;for(const t of n)e=e.insert(t.key,t);return e}function mE(n){let e=pE;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Rr(){return $o()}function gE(){return $o()}function $o(){return new qr(n=>n.toString(),(n,e)=>n.isEqual(e))}const g1=new _t(me.comparator),_1=new Tt(me.comparator);function Le(...n){let e=_1;for(const t of n)e=e.add(t);return e}const y1=new Tt(ke);function v1(){return y1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function _E(n){return{integerValue:""+n}}function E1(n,e){return zx(e)?_E(e):lf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this._=void 0}}function w1(n,e,t){return n instanceof ca?function(r,i){const o={fields:{[Z0]:{stringValue:X0},[tE]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&sf(i)&&(i=Xc(i)),i&&(o.fields[eE]=i),{mapValue:o}}(t,e):n instanceof ki?vE(n,e):n instanceof ua?EE(n,e):function(r,i){const o=yE(r,i),a=Ug(o)+Ug(r.Re);return Gh(o)&&Gh(r.Re)?_E(a):lf(r.serializer,a)}(n,e)}function T1(n,e,t){return n instanceof ki?vE(n,e):n instanceof ua?EE(n,e):t}function yE(n,e){return n instanceof oc?function(s){return Gh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class ca extends nu{}class ki extends nu{constructor(e){super(),this.elements=e}}function vE(n,e){const t=wE(e);for(const s of n.elements)t.some(r=>Jn(r,s))||t.push(s);return{arrayValue:{values:t}}}class ua extends nu{constructor(e){super(),this.elements=e}}function EE(n,e){let t=wE(e);for(const s of n.elements)t=t.filter(r=>!Jn(r,s));return{arrayValue:{values:t}}}class oc extends nu{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ug(n){return ct(n.integerValue||n.doubleValue)}function wE(n){return rf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.field=e,this.transform=t}}function I1(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof ki&&r instanceof ki||s instanceof ua&&r instanceof ua?Ri(s.elements,r.elements,Jn):s instanceof oc&&r instanceof oc?Jn(s.Re,r.Re):s instanceof ca&&r instanceof ca}(n.transform,e.transform)}class b1{constructor(e,t){this.version=e,this.transformResults=t}}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class su{}function IE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cf(n.key,Tn.none()):new ka(n.key,n.data,Tn.none());{const t=n.data,s=tn.empty();let r=new Tt(kt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new _r(n.key,s,new fn(r.toArray()),Tn.none())}}function C1(n,e,t){n instanceof ka?function(r,i,o){const a=r.value.clone(),c=$g(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof _r?function(r,i,o){if(!kl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=$g(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(bE(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function jo(n,e,t,s){return n instanceof ka?function(i,o,a,c){if(!kl(i.precondition,o))return a;const u=i.value.clone(),h=jg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof _r?function(i,o,a,c){if(!kl(i.precondition,o))return a;const u=jg(i.fieldTransforms,c,o),h=o.data;return h.setAll(bE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(n,e,t,s):function(i,o,a){return kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function A1(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=yE(s.transform,r||null);i!=null&&(t===null&&(t=tn.empty()),t.set(s.field,i))}return t||null}function Bg(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ri(s,r,(i,o)=>I1(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ka extends su{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class _r extends su{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function $g(n,e,t){const s=new Map;Ge(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,T1(o,a,t[r]))}return s}function jg(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,w1(i,o,e))}return s}class cf extends su{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S1 extends su{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&C1(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=jo(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=jo(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=gE();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=IE(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Se.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ri(this.mutations,e.mutations,(t,s)=>Bg(t,s))&&Ri(this.baseMutations,e.baseMutations,(t,s)=>Bg(t,s))}}class uf{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Ge(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let r=function(){return g1}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new uf(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Fe;function k1(n){switch(n){case q.OK:return Ce(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return Ce(15467,{code:n})}}function CE(n){if(n===void 0)return Cs("GRPC error has no .code"),q.UNKNOWN;switch(n){case dt.OK:return q.OK;case dt.CANCELLED:return q.CANCELLED;case dt.UNKNOWN:return q.UNKNOWN;case dt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case dt.INTERNAL:return q.INTERNAL;case dt.UNAVAILABLE:return q.UNAVAILABLE;case dt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case dt.NOT_FOUND:return q.NOT_FOUND;case dt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case dt.ABORTED:return q.ABORTED;case dt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case dt.DATA_LOSS:return q.DATA_LOSS;default:return Ce(39323,{code:n})}}(Fe=dt||(dt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new Qs([4294967295,4294967295],0);function Hg(n){const e=z0().encode(n),t=new U0;return t.update(e),new Uint8Array(t.digest())}function Wg(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qs([t,s],0),new Qs([r,i],0)]}class hf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new xo(`Invalid padding: ${t}`);if(s<0)throw new xo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new xo(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Qs.fromNumber(this.pe)}we(e,t,s){let r=e.add(t.multiply(Qs.fromNumber(s)));return r.compare(N1)===1&&(r=new Qs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Hg(e),[s,r]=Wg(t);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);if(!this.Se(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hf(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const t=Hg(e),[s,r]=Wg(t);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ru(Se.min(),r,new _t(ke),As(),Le())}}class Na{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Na(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,s,r){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=r}}class AE{constructor(e,t){this.targetId=e,this.Ce=t}}class SE{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Gg{constructor(){this.Fe=0,this.Me=qg(),this.xe=Nt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Le(),t=Le(),s=Le();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:Ce(38017,{changeType:i})}}),new Na(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=qg()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ge(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class D1{constructor(e){this.ze=e,this.je=new Map,this.He=As(),this.Je=fl(),this.Ye=fl(),this.Ze=new _t(ke)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ce(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,r)=>{this.it(r)&&t(r)})}ot(e){const t=e.targetId,s=e.Ce.count,r=this._t(t);if(r){const i=r.target;if(zh(i))if(s===0){const o=new me(i.path);this.tt(t,o,Bt.newNoDocument(o,Se.min()))}else Ge(s===1,20013,{expectedCount:s});else{const o=this.ut(t);if(o!==s){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=ar(s).toUint8Array()}catch(c){if(c instanceof J0)return Si("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new hf(o,r,i)}catch(c){return Si(c instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(t,i,null),r++)}),r}It(e){const t=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&zh(a.target)){const c=new me(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,Bt.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let s=Le();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const r=new ru(e,t,this.Ze,this.He,s);return this.He=As(),this.Je=fl(),this.Ye=fl(),this.Ze=new _t(ke),r}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Gg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Tt(ke),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Tt(ke),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Gg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function fl(){return new _t(me.comparator)}function qg(){return new _t(me.comparator)}const O1={asc:"ASCENDING",desc:"DESCENDING"},M1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},L1={and:"AND",or:"OR"};class V1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yh(n,e){return n.useProto3Json||Jc(e)?e:{value:e}}function ac(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function RE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function F1(n,e){return ac(n,e.toTimestamp())}function Kn(n){return Ge(!!n,49232),Se.fromTimestamp(function(t){const s=or(t);return new wt(s.seconds,s.nanos)}(n))}function df(n,e){return Jh(n,e).canonicalString()}function Jh(n,e){const t=function(r){return new st(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xE(n){const e=st.fromString(n);return Ge(OE(e),10190,{key:e.toString()}),e}function Xh(n,e){return df(n.databaseId,e.path)}function ih(n,e){const t=xE(e);if(t.get(1)!==n.databaseId.projectId)throw new le(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new le(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(kE(t))}function PE(n,e){return df(n.databaseId,e)}function U1(n){const e=xE(n);return e.length===4?st.emptyPath():kE(e)}function Zh(n){return new st(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kE(n){return Ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zg(n,e,t){return{name:Xh(n,e),fields:t.value.mapValue.fields}}function B1(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Ce(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ge(h===void 0||typeof h=="string",58123),Nt.fromBase64String(h||"")):(Ge(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Nt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?q.UNKNOWN:CE(u.code);return new le(h,u.message||"")}(o);t=new SE(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ih(n,s.document.name),i=Kn(s.document.updateTime),o=s.document.createTime?Kn(s.document.createTime):Se.min(),a=new tn({mapValue:{fields:s.document.fields}}),c=Bt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new Nl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ih(n,s.document),i=s.readTime?Kn(s.readTime):Se.min(),o=Bt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ih(n,s.document),i=s.removedTargetIds||[];t=new Nl([],i,r,null)}else{if(!("filter"in e))return Ce(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new P1(r,i),a=s.targetId;t=new AE(a,o)}}return t}function $1(n,e){let t;if(e instanceof ka)t={update:zg(n,e.key,e.value)};else if(e instanceof cf)t={delete:Xh(n,e.key)};else if(e instanceof _r)t={update:zg(n,e.key,e.data),updateMask:Y1(e.fieldMask)};else{if(!(e instanceof S1))return Ce(16599,{ft:e.type});t={verify:Xh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oc)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw Ce(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:F1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ce(27497)}(n,e.precondition)),t}function j1(n,e){return n&&n.length>0?(Ge(e!==void 0,14353),n.map(t=>function(r,i){let o=r.updateTime?Kn(r.updateTime):Kn(i);return o.isEqual(Se.min())&&(o=Kn(i)),new b1(o,r.transformResults||[])}(t,e))):[]}function H1(n,e){return{documents:[PE(n,e.path)]}}function W1(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=PE(n,r);const i=function(u){if(u.length!==0)return DE(Dn.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:ii(p.field),direction:z1(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Yh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:r}}function G1(n){let e=U1(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Ge(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){const p=NE(d);return p instanceof Dn&&aE(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(p=>function(y){return new ic(oi(y.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(t.orderBy));let a=null;t.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Jc(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(d){const p=!!d.before,g=d.values||[];return new rc(g,p)}(t.startAt));let u=null;return t.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new rc(g,p)}(t.endAt)),h1(e,r,o,i,a,"F",c,u)}function q1(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ce(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function NE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oi(t.unaryFilter.field);return mt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=oi(t.unaryFilter.field);return mt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oi(t.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(t.unaryFilter.field);return mt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ce(61313);default:return Ce(60726)}}(n):n.fieldFilter!==void 0?function(t){return mt.create(oi(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ce(58110);default:return Ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Dn.create(t.compositeFilter.filters.map(s=>NE(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Ce(1026)}}(t.compositeFilter.op))}(n):Ce(30097,{filter:n})}function z1(n){return O1[n]}function K1(n){return M1[n]}function Q1(n){return L1[n]}function ii(n){return{fieldPath:n.canonicalString()}}function oi(n){return kt.fromServerFormat(n.fieldPath)}function DE(n){return n instanceof mt?function(t){if(t.op==="=="){if(Og(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NAN"}};if(Dg(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Og(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NAN"}};if(Dg(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(t.field),op:K1(t.op),value:t.value}}}(n):n instanceof Dn?function(t){const s=t.getFilters().map(r=>DE(r));return s.length===1?s[0]:{compositeFilter:{op:Q1(t.op),filters:s}}}(n):Ce(54877,{filter:n})}function Y1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function OE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t,s,r,i=Se.min(),o=Se.min(),a=Nt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.wt=e}}function X1(n){const e=G1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.Cn=new eP}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(ir.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class eP{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Tt(st.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Tt(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ME=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(ME,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ni(0)}static lr(){return new Ni(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="LruGarbageCollector",tP=1048576;function Yg([n,e],[t,s]){const r=ke(n,t);return r===0?ke(e,s):r}class nP{constructor(e){this.Er=e,this.buffer=new Tt(Yg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Yg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sP{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ae(Qg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qi(t)?ae(Qg,"Ignoring IndexedDB error during garbage collection: ",t):await Ki(t)}await this.mr(3e5)})}}class rP{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Yc.le);const s=new nP(t);return this.gr.forEachTarget(e,r=>s.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>s.Rr(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Kg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kg):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,a=Date.now(),this.removeTargets(e,s,t))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),si()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function iP(n,e){return new rP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.changes=new qr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&jo(s.mutation,r,fn.empty(),wt.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const r=Rr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=Ro();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Rr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=As();const o=$o(),a=function(){return $o()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof _r)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),jo(h.mutation,u,h.mutation.getFieldMask(),wt.now())):o.set(u.key,fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var d;return a.set(u,new aP(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,t){const s=$o();let r=new _t((o,a)=>o-a),i=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||fn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||Le()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=gE();h.forEach(p=>{if(!i.has(p)){const g=IE(t.get(p),s.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return G.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):G.resolve(Rr());let a=ia,c=i;return o.next(u=>G.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?G.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Le())).next(h=>({batchId:a,changes:mE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(s=>{let r=Ro();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=Ro();return this.indexManager.getCollectionParents(e,i).next(a=>G.forEach(a,c=>{const u=function(d,p){return new Pa(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Bt.newInvalidDocument(h)))});let a=Ro();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&jo(h.mutation,u,fn.empty(),wt.now()),tu(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return G.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Kn(r.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(r){return{name:r.name,query:X1(r.bundledQuery),readTime:Kn(r.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.overlays=new _t(me.comparator),this.Qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Rr();return G.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),G.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const r=Rr(),i=t.length+1,o=new me(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return G.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new _t((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=Rr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Rr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return G.resolve(a)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Qr.get(r.largestBatchId).delete(s.key);this.Qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new x1(t,s));let i=this.Qr.get(t);i===void 0&&(i=Le(),this.Qr.set(t,i)),this.Qr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.$r=new Tt(bt.Ur),this.Kr=new Tt(bt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new bt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new bt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new me(new st([])),s=new bt(t,e),r=new bt(t,e+1),i=[];return this.Kr.forEachInRange([s,r],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new me(new st([])),s=new bt(t,e),r=new bt(t,e+1);let i=Le();return this.Kr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new bt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class bt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return me.comparator(e.key,t.key)||ke(e.Zr,t.Zr)}static Wr(e,t){return ke(e.Zr,t.Zr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Tt(bt.Ur)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R1(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.Xr=this.Xr.add(new bt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return G.resolve(o)}lookupMutationBatch(e,t){return G.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ti(s),i=r<0?0:r;return G.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?nf:this.nr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new bt(t,0),r=new bt(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([s,r],o=>{const a=this.ei(o.Zr);i.push(a)}),G.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tt(ke);return t.forEach(r=>{const i=new bt(r,0),o=new bt(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],a=>{s=s.add(a.Zr)})}),G.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;me.isDocumentKey(i)||(i=i.child(""));const o=new bt(new me(i),0);let a=new Tt(ke);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Zr)),!0)},o),G.resolve(this.ni(a))}ni(e){const t=[];return e.forEach(s=>{const r=this.ei(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Ge(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return G.forEach(t.mutations,r=>{const i=new bt(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new bt(t,0),r=this.Xr.firstAfterOrEqual(s);return G.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ii=e,this.docs=function(){return new _t(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let s=As();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Bt.newInvalidDocument(r))}),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=As();const o=t.path,a=new me(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Hx(jx(h),s)<=0||(r.has(h.key)||tu(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return G.resolve(i)}getAllFromCollectionGroup(e,t,s,r){Ce(9500)}si(e,t){return G.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new pP(this)}getSize(e){return G.resolve(this.size)}}class pP extends oP{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(s)}),G.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.persistence=e,this.oi=new qr(t=>of(t),af),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this._i=0,this.ai=new ff,this.targetCount=0,this.ui=Ni.cr()}forEachTarget(e,t){return this.oi.forEach((s,r)=>t(r)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),G.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Tr(t),G.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),G.waitFor(i).next(()=>r)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),G.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),G.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.ci={},this.overlays={},this.li=new Yc(0),this.hi=!1,this.hi=!0,this.Pi=new hP,this.referenceDelegate=e(this),this.Ti=new mP(this),this.indexManager=new Z1,this.remoteDocumentCache=function(r){return new fP(r)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new J1(t),this.Ei=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new dP(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const r=new gP(this.li.next());return this.referenceDelegate.di(),s(r).next(i=>this.referenceDelegate.Ai(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ri(e,t){return G.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class gP extends Gx{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Vi=new ff,this.mi=null}static fi(e){return new pf(e)}get gi(){if(this.mi)return this.mi;throw Ce(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(r=>this.gi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.gi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.gi,s=>{const r=me.fromPath(s);return this.pi(e,r).next(i=>{i||t.removeEntry(r,Se.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return G.or([()=>G.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class lc{constructor(e,t){this.persistence=e,this.yi=new qr(s=>Kx(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=iP(this,t)}static fi(e,t){return new lc(e,t)}di(){}Ai(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return G.forEach(this.yi,(s,r)=>this.Dr(e,s,r).next(i=>i?G.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,o=>this.Dr(e,o,t).next(a=>{a||(s++,i.removeEntry(o,Se.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),G.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),G.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xl(e.data.value)),t}Dr(e,t,s){return G.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.yi.get(t);return G.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.ds=s,this.As=r}static Rs(e,t){let s=Le(),r=Le();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new mf(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return lA()?8:qx(qt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _P;return this.bs(e,t,o).next(a=>{if(i.result=a,this.fs)return this.Ds(e,t,o,a.size)})}).next(()=>i.result)}Ds(e,t,s,r){return s.documentReadCount<this.gs?(si()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",ri(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),G.resolve()):(si()<=De.DEBUG&&ae("QueryEngine","Query:",ri(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ps*r?(si()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",ri(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zn(t))):G.resolve())}ws(e,t){if(Fg(t))return G.resolve(null);let s=zn(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Qh(t,null,"F"),s=zn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Le(...i);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.vs(t,a);return this.Cs(t,u,o,c.readTime)?this.ws(e,Qh(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,s,r){return Fg(t)||r.isEqual(Se.min())?G.resolve(null):this.ys.getDocuments(e,s).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,s,r)?G.resolve(null):(si()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ri(t)),this.Fs(e,o,t,$x(r,ia)).next(a=>a))})}vs(e,t){let s=new Tt(fE(e));return t.forEach((r,i)=>{tu(e,i)&&(s=s.add(i))}),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}bs(e,t,s){return si()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",ri(t)),this.ys.getDocumentsMatchingQuery(e,t,ir.min(),s)}Fs(e,t,s,r){return this.ys.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="LocalStore",vP=3e8;class EP{constructor(e,t,s,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new _t(ke),this.Os=new qr(i=>of(i),af),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function wP(n,e,t,s){return new EP(n,e,t,s)}async function VE(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Le();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:a}))})})}function TP(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let g=G.resolve();return p.forEach(y=>{g=g.next(()=>h.getEntry(c,y)).next(b=>{const x=u.docVersions.get(y);Ge(x!==null,48541),b.version.compareTo(x)<0&&(d.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function FE(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function IP(n,e){const t=Re(n),s=e.snapshotVersion;let r=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.xs;const a=[];e.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;a.push(t.Ti.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.Ti.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Nt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(b,x,L){return b.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=vP?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,g,h)&&a.push(t.Ti.updateTargetData(i,g))});let c=As(),u=Le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(bP(i,o,e.documentUpdates).next(h=>{c=h.qs,u=h.Qs})),!s.isEqual(Se.min())){const h=t.Ti.getLastRemoteSnapshotVersion(i).next(d=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return G.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=r,i))}function bP(n,e,t){let s=Le(),r=Le();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=As();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Se.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ae(gf,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:r}})}function CP(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=nf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function AP(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Ti.getTargetData(s,e).next(i=>i?(r=i,G.resolve(r)):t.Ti.allocateTargetId(s).next(o=>(r=new Gs(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.xs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function ed(n,e,t){const s=Re(n),r=s.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Qi(o))throw o;ae(gf,`Failed to update sequence numbers for target ${e}: ${o}`)}s.xs=s.xs.remove(e),s.Os.delete(r.target)}function Jg(n,e,t){const s=Re(n);let r=Se.min(),i=Le();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=Re(c),p=d.Os.get(h);return p!==void 0?G.resolve(d.xs.get(p)):d.Ti.getTargetData(u,h)}(s,o,zn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ms.getDocumentsMatchingQuery(o,e,t?r:Se.min(),t?i:Le())).next(a=>(SP(s,f1(e),a),{documents:a,$s:i})))}function SP(n,e,t){let s=n.Ns.get(e)||Se.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ns.set(e,s)}class Xg{constructor(){this.activeTargetIds=v1()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.xo=new Xg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Xg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="ConnectivityMonitor";class e_{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ae(Zg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ae(Zg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl=null;function td(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="RestConnection",PP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${r}`,this.Go=this.databaseId.database===nc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}zo(e,t,s,r,i){const o=td(),a=this.jo(e,t.toUriEncodedString());ae(oh,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,r,i);const{host:u}=new URL(a),h=$r(u);return this.Jo(e,a,c,s,h).then(d=>(ae(oh,`Received RPC '${e}' ${o}: `,d),d),d=>{throw Si(oh,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",s),d})}Yo(e,t,s,r,i,o){return this.zo(e,t,s,r,i)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}jo(e,t){const s=PP[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class DP extends kP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const o=td();return new Promise((a,c)=>{const u=new B0;u.setWithCredentials(!0),u.listenOnce($0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rl.NO_ERROR:const d=u.getResponseJson();ae(Vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Rl.TIMEOUT:ae(Vt,`RPC '${e}' ${o} timed out`),c(new le(q.DEADLINE_EXCEEDED,"Request time out"));break;case Rl.HTTP_ERROR:const p=u.getStatus();if(ae(Vt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const b=function(L){const V=L.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(V)>=0?V:q.UNKNOWN}(y.status);c(new le(b,y.message))}else c(new le(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new le(q.UNAVAILABLE,"Connection failed."));break;default:Ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ae(Vt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(r);ae(Vt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,s,15)})}T_(e,t,s){const r=td(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=W0(),a=H0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ae(Vt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,g=!1;const y=new NP({Zo:x=>{g?ae(Vt,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(p||(ae(Vt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),ae(Vt,`RPC '${e}' stream ${r} sending:`,x),d.send(x))},Xo:()=>d.close()}),b=(x,L,V)=>{x.listen(L,$=>{try{V($)}catch(z){setTimeout(()=>{throw z},0)}})};return b(d,So.EventType.OPEN,()=>{g||(ae(Vt,`RPC '${e}' stream ${r} transport opened.`),y.__())}),b(d,So.EventType.CLOSE,()=>{g||(g=!0,ae(Vt,`RPC '${e}' stream ${r} transport closed`),y.u_())}),b(d,So.EventType.ERROR,x=>{g||(g=!0,Si(Vt,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),y.u_(new le(q.UNAVAILABLE,"The operation could not be completed")))}),b(d,So.EventType.MESSAGE,x=>{var L;if(!g){const V=x.data[0];Ge(!!V,16349);const $=V,z=($==null?void 0:$.error)||((L=$[0])===null||L===void 0?void 0:L.error);if(z){ae(Vt,`RPC '${e}' stream ${r} received error:`,z);const ge=z.status;let ue=function(I){const S=dt[I];if(S!==void 0)return CE(S)}(ge),A=z.message;ue===void 0&&(ue=q.INTERNAL,A="Unknown error status: "+ge+" with message "+z.message),g=!0,y.u_(new le(ue,A)),d.close()}else ae(Vt,`RPC '${e}' stream ${r} received:`,V),y.c_(V)}}),b(a,j0.STAT_EVENT,x=>{x.stat===$h.PROXY?ae(Vt,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===$h.NOPROXY&&ae(Vt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.a_()},0),y}}function ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n){return new V1(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t,s=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=r,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),r=Math.max(0,t-s);r>0&&ae("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="PersistentStream";class BE{constructor(e,t,s,r,i,o,a,c){this.xi=e,this.y_=s,this.w_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new UE(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(Cs(t.toString()),Cs("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.S_===t&&this.K_(s,r)},s=>{e(()=>{const r=new le(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(r)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{s(()=>this.W_(r))}),this.stream.onMessage(r=>{s(()=>++this.v_==1?this.z_(r):this.onNext(r))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ae(t_,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ae(t_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OP extends BE{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=B1(this.serializer,e),s=function(i){if(!("targetChange"in i))return Se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Se.min():o.readTime?Kn(o.readTime):Se.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=Zh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=zh(c)?{documents:H1(i,c)}:{query:W1(i,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=RE(i,o.resumeToken);const u=Yh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Se.min())>0){a.readTime=ac(i,o.snapshotVersion.toTimestamp());const u=Yh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=q1(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=Zh(this.serializer),t.removeTarget=e,this.L_(t)}}class MP extends BE{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=j1(e.writeResults,e.commitTime),s=Kn(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=Zh(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>$1(this.serializer,s))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{}class VP extends LP{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.na=!1}ra(){if(this.na)throw new le(q.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,r){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Jh(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(q.UNKNOWN,i.toString())})}Yo(e,t,s,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,Jh(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le(q.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class FP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Cs(t),this.oa=!1):ae("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RemoteStore";class UP{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{s.enqueueAndForget(async()=>{zr(this)&&(ae(Lr,"Restarting streams for network reachability change."),await async function(c){const u=Re(c);u.Ta.add(4),await Da(u),u.da.set("Unknown"),u.Ta.delete(4),await ou(u)}(this))})}),this.da=new FP(s,r)}}async function ou(n){if(zr(n))for(const e of n.Ia)await e(!0)}async function Da(n){for(const e of n.Ia)await e(!1)}function $E(n,e){const t=Re(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Ef(t)?vf(t):Yi(t).M_()&&yf(t,e))}function _f(n,e){const t=Re(n),s=Yi(t);t.Pa.delete(e),s.M_()&&jE(t,e),t.Pa.size===0&&(s.M_()?s.N_():zr(t)&&t.da.set("Unknown"))}function yf(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yi(n).H_(e)}function jE(n,e){n.Aa.Ke(e),Yi(n).J_(e)}function vf(n){n.Aa=new D1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Yi(n).start(),n.da._a()}function Ef(n){return zr(n)&&!Yi(n).F_()&&n.Pa.size>0}function zr(n){return Re(n).Ta.size===0}function HE(n){n.Aa=void 0}async function BP(n){n.da.set("Online")}async function $P(n){n.Pa.forEach((e,t)=>{yf(n,e)})}async function jP(n,e){HE(n),Ef(n)?(n.da.ca(e),vf(n)):n.da.set("Unknown")}async function HP(n,e,t){if(n.da.set("Online"),e instanceof SE&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Pa.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Pa.delete(a),r.Aa.removeTarget(a))}(n,e)}catch(s){ae(Lr,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await cc(n,s)}else if(e instanceof Nl?n.Aa.Xe(e):e instanceof AE?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(Se.min()))try{const s=await FE(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.Aa.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Pa.get(u);h&&i.Pa.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.Pa.get(c);if(!h)return;i.Pa.set(c,h.withResumeToken(Nt.EMPTY_BYTE_STRING,h.snapshotVersion)),jE(i,c);const d=new Gs(h.target,c,u,h.sequenceNumber);yf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){ae(Lr,"Failed to raise snapshot:",s),await cc(n,s)}}async function cc(n,e,t){if(!Qi(e))throw e;n.Ta.add(1),await Da(n),n.da.set("Offline"),t||(t=()=>FE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae(Lr,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await ou(n)})}function WE(n,e){return e().catch(t=>cc(n,t,e))}async function au(n){const e=Re(n),t=cr(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:nf;for(;WP(e);)try{const r=await CP(e.localStore,s);if(r===null){e.ha.length===0&&t.N_();break}s=r.batchId,GP(e,r)}catch(r){await cc(e,r)}GE(e)&&qE(e)}function WP(n){return zr(n)&&n.ha.length<10}function GP(n,e){n.ha.push(e);const t=cr(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function GE(n){return zr(n)&&!cr(n).F_()&&n.ha.length>0}function qE(n){cr(n).start()}async function qP(n){cr(n).ta()}async function zP(n){const e=cr(n);for(const t of n.ha)e.Z_(t.mutations)}async function KP(n,e,t){const s=n.ha.shift(),r=uf.from(s,e,t);await WE(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await au(n)}async function QP(n,e){e&&cr(n).Y_&&await async function(s,r){if(function(o){return k1(o)&&o!==q.ABORTED}(r.code)){const i=s.ha.shift();cr(s).O_(),await WE(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await au(s)}}(n,e),GE(n)&&qE(n)}async function n_(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ae(Lr,"RemoteStore received new credentials");const s=zr(t);t.Ta.add(3),await Da(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await ou(t)}async function YP(n,e){const t=Re(n);e?(t.Ta.delete(2),await ou(t)):e||(t.Ta.add(2),await Da(t),t.da.set("Unknown"))}function Yi(n){return n.Ra||(n.Ra=function(t,s,r){const i=Re(t);return i.ra(),new OP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{e_:BP.bind(null,n),n_:$P.bind(null,n),i_:jP.bind(null,n),j_:HP.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Ef(n)?vf(n):n.da.set("Unknown")):(await n.Ra.stop(),HE(n))})),n.Ra}function cr(n){return n.Va||(n.Va=function(t,s,r){const i=Re(t);return i.ra(),new MP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:qP.bind(null,n),i_:QP.bind(null,n),X_:zP.bind(null,n),ea:KP.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await au(n)):(await n.Va.stop(),n.ha.length>0&&(ae(Lr,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new wf(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(n,e){if(Cs("AsyncQueue",`${e}: ${n}`),Qi(n))return new le(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static emptySet(e){return new vi(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||me.comparator(t.key,s.key):(t,s)=>me.comparator(t.key,s.key),this.keyedMap=Ro(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.ma=new _t(me.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):Ce(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class Di{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Di(e,t,vi.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class XP{constructor(){this.queries=r_(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const r=Re(t),i=r.queries;r.queries=r_(),i.forEach((o,a)=>{for(const c of a.ya)c.onError(s)})})(this,new le(q.ABORTED,"Firestore shutting down"))}}function r_(){return new qr(n=>dE(n),eu)}async function If(n,e){const t=Re(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.wa()&&e.Sa()&&(s=2):(i=new JP,s=e.Sa()?0:1);try{switch(s){case 0:i.pa=await t.onListen(r,!0);break;case 1:i.pa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Tf(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Cf(t)}async function bf(n,e){const t=Re(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?r=e.Sa()?0:1:!i.wa()&&e.Sa()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ZP(n,e){const t=Re(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.ya)a.va(r)&&(s=!0);o.pa=r}}s&&Cf(t)}function ek(n,e,t){const s=Re(n),r=s.queries.get(e);if(r)for(const i of r.ya)i.onError(t);s.queries.delete(e)}function Cf(n){n.ba.forEach(e=>{e.next()})}var nd,i_;(i_=nd||(nd={})).Ca="default",i_.Cache="cache";class Af{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Di(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==nd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.key=e}}class KE{constructor(e){this.key=e}}class tk{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Le(),this.mutatedKeys=Le(),this.Ha=fE(e),this.Ja=new vi(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new s_,r=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const p=r.get(h),g=tu(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?y!==b&&(s.track({type:3,doc:g}),x=!0):this.eu(p,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.Ha(g,c)>0||u&&this.Ha(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),x=!0):p&&!g&&(s.track({type:1,doc:p}),x=!0,(c||u)&&(a=!0)),x&&(g?(o=o.add(g),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ja:o,Xa:s,Cs:a,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((h,d)=>function(g,y){const b=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ce(20277,{Vt:x})}};return b(g)-b(y)}(h.type,d.type)||this.Ha(h.doc,d.doc)),this.tu(s),r=r!=null&&r;const a=t&&!r?this.nu():[],c=this.ja.size===0&&this.current&&!r?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Di(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:a}:{ru:a}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new s_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Le(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new KE(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new zE(s))}),t}su(e){this.Ga=e.$s,this.ja=Le();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Di.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Sf="SyncEngine";class nk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class sk{constructor(e){this.key=e,this._u=!1}}class rk{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new qr(a=>dE(a),eu),this.cu=new Map,this.lu=new Set,this.hu=new _t(me.comparator),this.Pu=new Map,this.Tu=new ff,this.Iu={},this.Eu=new Map,this.du=Ni.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function ik(n,e,t=!0){const s=ew(n);let r;const i=s.uu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ou()):r=await QE(s,e,t,!0),r}async function ok(n,e){const t=ew(n);await QE(t,e,!0,!1)}async function QE(n,e,t,s){const r=await AP(n.localStore,zn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await ak(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&$E(n.remoteStore,r),a}async function ak(n,e,t,s,r){n.Ru=(d,p,g)=>async function(b,x,L,V){let $=x.view.Za(L);$.Cs&&($=await Jg(b.localStore,x.query,!1).then(({documents:A})=>x.view.Za(A,$)));const z=V&&V.targetChanges.get(x.targetId),ge=V&&V.targetMismatches.get(x.targetId)!=null,ue=x.view.applyChanges($,b.isPrimaryClient,z,ge);return a_(b,x.targetId,ue.ru),ue.snapshot}(n,d,p,g);const i=await Jg(n.localStore,e,!0),o=new tk(e,i.$s),a=o.Za(i.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);a_(n,t,u.ru);const h=new nk(e,t,o);return n.uu.set(e,h),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function lk(n,e,t){const s=Re(n),r=s.uu.get(e),i=s.cu.get(r.targetId);if(i.length>1)return s.cu.set(r.targetId,i.filter(o=>!eu(o,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ed(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&_f(s.remoteStore,r.targetId),sd(s,r.targetId)}).catch(Ki)):(sd(s,r.targetId),await ed(s.localStore,r.targetId,!0))}async function ck(n,e){const t=Re(n),s=t.uu.get(e),r=t.cu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),_f(t.remoteStore,s.targetId))}async function uk(n,e,t){const s=_k(n);try{const r=await function(o,a){const c=Re(o),u=wt.now(),h=a.reduce((g,y)=>g.add(y.key),Le());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=As(),b=Le();return c.Bs.getEntries(g,h).next(x=>{y=x,y.forEach((L,V)=>{V.isValidDocument()||(b=b.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(x=>{d=x;const L=[];for(const V of a){const $=A1(V,d.get(V.key).overlayedDocument);$!=null&&L.push(new _r(V.key,$,rE($.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,L,a)}).next(x=>{p=x;const L=x.applyToLocalDocumentSet(d,b);return c.documentOverlayCache.saveOverlays(g,x.batchId,L)})}).then(()=>({batchId:p.batchId,changes:mE(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new _t(ke)),u=u.insert(a,c),o.Iu[o.currentUser.toKey()]=u}(s,r.batchId,t),await Oa(s,r.changes),await au(s.remoteStore)}catch(r){const i=Tf(r,"Failed to persist write");t.reject(i)}}async function YE(n,e){const t=Re(n);try{const s=await IP(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Pu.get(i);o&&(Ge(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o._u=!0:r.modifiedDocuments.size>0?Ge(o._u,14607):r.removedDocuments.size>0&&(Ge(o._u,42227),o._u=!1))}),await Oa(t,s,e)}catch(s){await Ki(s)}}function o_(n,e,t){const s=Re(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.uu.forEach((i,o)=>{const a=o.view.Da(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=Re(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.ya)p.Da(a)&&(u=!0)}),u&&Cf(c)}(s.eventManager,e),r.length&&s.au.j_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hk(n,e,t){const s=Re(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Pu.get(e),i=r&&r.key;if(i){let o=new _t(me.comparator);o=o.insert(i,Bt.newNoDocument(i,Se.min()));const a=Le().add(i),c=new ru(Se.min(),new Map,new _t(ke),o,a);await YE(s,c),s.hu=s.hu.remove(i),s.Pu.delete(e),Rf(s)}else await ed(s.localStore,e,!1).then(()=>sd(s,e,t)).catch(Ki)}async function dk(n,e){const t=Re(n),s=e.batch.batchId;try{const r=await TP(t.localStore,e);XE(t,s,null),JE(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Oa(t,r)}catch(r){await Ki(r)}}async function fk(n,e,t){const s=Re(n);try{const r=await function(o,a){const c=Re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ge(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);XE(s,e,t),JE(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Oa(s,r)}catch(r){await Ki(r)}}function JE(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function XE(n,e,t){const s=Re(n);let r=s.Iu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Iu[s.currentUser.toKey()]=r}}function sd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||ZE(n,s)})}function ZE(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(_f(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Rf(n))}function a_(n,e,t){for(const s of t)s instanceof zE?(n.Tu.addReference(s.key,e),pk(n,s)):s instanceof KE?(ae(Sf,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||ZE(n,s.key)):Ce(19791,{mu:s})}function pk(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(ae(Sf,"New document in limbo: "+t),n.lu.add(s),Rf(n))}function Rf(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new me(st.fromString(e)),s=n.du.next();n.Pu.set(s,new sk(t)),n.hu=n.hu.insert(t,s),$E(n.remoteStore,new Gs(zn(Zc(t.path)),s,"TargetPurposeLimboResolution",Yc.le))}}async function Oa(n,e,t){const s=Re(n),r=[],i=[],o=[];s.uu.isEmpty()||(s.uu.forEach((a,c)=>{o.push(s.Ru(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=mf.Rs(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.au.j_(r),await async function(c,u){const h=Re(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>G.forEach(u,p=>G.forEach(p.ds,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>G.forEach(p.As,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!Qi(d))throw d;ae(gf,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.xs.get(p),y=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(y);h.xs=h.xs.insert(p,b)}}}(s.localStore,i))}async function mk(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ae(Sf,"User change. New user:",e.toKey());const s=await VE(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(a=>{a.forEach(c=>{c.reject(new le(q.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Oa(t,s.ks)}}function gk(n,e){const t=Re(n),s=t.Pu.get(e);if(s&&s._u)return Le().add(s.key);{let r=Le();const i=t.cu.get(e);if(!i)return r;for(const o of i){const a=t.uu.get(o);r=r.unionWith(a.view.Ya)}return r}}function ew(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=YE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hk.bind(null,e),e.au.j_=ZP.bind(null,e.eventManager),e.au.Vu=ek.bind(null,e.eventManager),e}function _k(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fk.bind(null,e),e}class uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=iu(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}yu(e){return new LE(pf.fi,this.serializer)}pu(e){return new RP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uc.provider={build:()=>new uc};class yk extends uc{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Ge(this.persistence.referenceDelegate instanceof lc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new sP(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new LE(s=>lc.fi(s,t),this.serializer)}}class rd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>o_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=mk.bind(null,this.syncEngine),await YP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XP}()}createDatastore(e){const t=iu(e.databaseInfo.databaseId),s=function(i){return new DP(i)}(e.databaseInfo);return function(i,o,a,c){return new VP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new UP(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>o_(this.syncEngine,t,0),function(){return e_.C()?new e_:new xP}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const d=new rk(r,i,o,a,c,u);return h&&(d.Au=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=Re(r);ae(Lr,"RemoteStore shutting down."),i.Ta.add(5),await Da(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rd.provider={build:()=>new rd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Cs("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirestoreClient";class vk{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ft.UNAUTHENTICATED,this.clientId=K0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ae(ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ae(ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function lh(n,e){n.asyncQueue.verifyOperationInProgress(),ae(ur,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await VE(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function l_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ek(n);ae(ur,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>n_(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>n_(e.remoteStore,r)),n._onlineComponents=e}async function Ek(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(ur,"Using user provided OfflineComponentProvider");try{await lh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===q.FAILED_PRECONDITION||r.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Si("Error using user provided cache. Falling back to memory cache: "+t),await lh(n,new uc)}}else ae(ur,"Using default OfflineComponentProvider"),await lh(n,new yk(void 0));return n._offlineComponents}async function tw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(ur,"Using user provided OnlineComponentProvider"),await l_(n,n._uninitializedComponentsProvider._online)):(ae(ur,"Using default OnlineComponentProvider"),await l_(n,new rd))),n._onlineComponents}function wk(n){return tw(n).then(e=>e.syncEngine)}async function hc(n){const e=await tw(n),t=e.eventManager;return t.onListen=ik.bind(null,e.syncEngine),t.onUnlisten=lk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ok.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ck.bind(null,e.syncEngine),t}function Tk(n,e,t={}){const s=new ys;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new xf({next:p=>{h.Cu(),o.enqueueAndForget(()=>bf(i,d));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new le(q.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new le(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Af(Zc(a.path),h,{includeMetadataChanges:!0,La:!0});return If(i,d)}(await hc(n),n.asyncQueue,e,t,s)),s.promise}function Ik(n,e,t={}){const s=new ys;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new xf({next:p=>{h.Cu(),o.enqueueAndForget(()=>bf(i,d)),p.fromCache&&c.source==="server"?u.reject(new le(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Af(a,h,{includeMetadataChanges:!0,La:!0});return If(i,d)}(await hc(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(n,e,t){if(!t)throw new le(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bk(n,e,t,s){if(e===!0&&s===!0)throw new le(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function u_(n){if(!me.isDocumentKey(n))throw new le(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function h_(n){if(me.isDocumentKey(n))throw new le(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ce(12329,{type:typeof n})}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new le(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=lu(n);throw new le(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firestore.googleapis.com",d_=!0;class f_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new le(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rw,this.ssl=d_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:d_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ME;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new le(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Nx;switch(s.type){case"firstParty":return new Lx(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=c_.get(t);s&&(ae("ComponentProvider","Removing Datastore"),c_.delete(t),s.terminate())}(this),Promise.resolve()}}function Ck(n,e,t,s={}){var r;n=sn(n,cu);const i=$r(e),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(Ud(`https://${c}`),Bd("Firestore",!0)),o.host!==rw&&o.host!==c&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:s});if(!Ts(u,a)&&(n._setSettings(u),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=Ft.MOCK_USER;else{h=Uv(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new le(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ft(p)}n._authCredentials=new Dx(new q0(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class Wt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Js extends Kr{constructor(e,t,s){super(e,t,Zc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new me(e))}withConverter(e){return new Js(this.firestore,e,this._path)}}function Oi(n,e,...t){if(n=et(n),sw("collection","path",e),n instanceof cu){const s=st.fromString(e,...t);return h_(s),new Js(n,null,s)}{if(!(n instanceof Wt||n instanceof Js))throw new le(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(st.fromString(e,...t));return h_(s),new Js(n.firestore,null,s)}}function ha(n,e,...t){if(n=et(n),arguments.length===1&&(e=K0.newId()),sw("doc","path",e),n instanceof cu){const s=st.fromString(e,...t);return u_(s),new Wt(n,null,new me(s))}{if(!(n instanceof Wt||n instanceof Js))throw new le(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(st.fromString(e,...t));return u_(s),new Wt(n.firestore,n instanceof Js?n.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="AsyncQueue";class m_{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new UE(this,"async_queue_retry"),this.ec=()=>{const s=ah();s&&ae(p_,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=ah();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ah();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new ys;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Qi(e))throw e;ae(p_,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,Cs("INTERNAL UNHANDLED ERROR: ",g_(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const r=wf.createAndSchedule(this,e,t,s,i=>this.oc(i));return this.Hu.push(r),r}nc(){this.Ju&&Ce(47125,{_c:g_(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function g_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ss extends cu{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new m_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new m_(e),this._firestoreClient=void 0,await e}}}function Ak(n,e){const t=typeof n=="object"?n:Wd(),s=typeof n=="string"?n:nc,r=Wc(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Lv("firestore");i&&Ck(r,...i)}return r}function uu(n){if(n._terminated)throw new le(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sk(n),n._firestoreClient}function Sk(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new Jx(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nw(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new vk(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mi(Nt.fromBase64String(e))}catch(t){throw new le(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mi(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/^__.*__$/;class xk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,t,this.fieldTransforms):new ka(e,this.data,t,this.fieldTransforms)}}class iw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new _r(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ow(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ce(40011,{hc:n})}}class du{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Tc({path:s,Ec:!1});return r.dc(e),r}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Tc({path:s,Ec:!1});return r.Pc(),r}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return dc(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(ow(this.hc)&&Rk.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Pk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||iu(e)}gc(e,t,s,r=!1){return new du({hc:e,methodName:t,fc:s,path:kt.emptyPath(),Ec:!1,mc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fu(n){const e=n._freezeSettings(),t=iu(n._databaseId);return new Pk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aw(n,e,t,s,r,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,r);Of("Data must be an object, but it was:",o,s);const a=lw(s,o);let c,u;if(i.merge)c=new fn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=id(e,d,t);if(!o.contains(p))throw new le(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uw(h,p)||h.push(p)}c=new fn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new xk(new tn(a),c,u)}class pu extends Ma{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pu}}function kk(n,e,t){return new du({hc:3,fc:e.settings.fc,methodName:n._methodName,Ec:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Nf extends Ma{_toFieldTransform(e){return new TE(e.path,new ca)}isEqual(e){return e instanceof Nf}}class Df extends Ma{constructor(e,t){super(e),this.yc=t}_toFieldTransform(e){const t=kk(this,e,!0),s=this.yc.map(i=>Ji(i,t)),r=new ki(s);return new TE(e.path,r)}isEqual(e){return e instanceof Df&&Ts(this.yc,e.yc)}}function Nk(n,e,t,s){const r=n.gc(1,e,t);Of("Data must be an object, but it was:",r,s);const i=[],o=tn.empty();gr(s,(c,u)=>{const h=Mf(e,c,t);u=et(u);const d=r.Ac(h);if(u instanceof pu)i.push(h);else{const p=Ji(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new fn(i);return new iw(o,a,r.fieldTransforms)}function Dk(n,e,t,s,r,i){const o=n.gc(1,e,t),a=[id(e,s,t)],c=[r];if(i.length%2!=0)throw new le(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(id(e,i[p])),c.push(i[p+1]);const u=[],h=tn.empty();for(let p=a.length-1;p>=0;--p)if(!uw(u,a[p])){const g=a[p];let y=c[p];y=et(y);const b=o.Ac(g);if(y instanceof pu)u.push(g);else{const x=Ji(y,b);x!=null&&(u.push(g),h.set(g,x))}}const d=new fn(u);return new iw(h,d,o.fieldTransforms)}function Ok(n,e,t,s=!1){return Ji(t,n.gc(s?4:3,e))}function Ji(n,e){if(cw(n=et(n)))return Of("Unsupported field value:",e,n),lw(n,e);if(n instanceof Ma)return function(s,r){if(!ow(r.hc))throw r.Vc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Vc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Ji(a,r.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=et(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return E1(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=wt.fromDate(s);return{timestampValue:ac(r.serializer,i)}}if(s instanceof wt){const i=new wt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ac(r.serializer,i)}}if(s instanceof Pf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Mi)return{bytesValue:RE(r.serializer,s._byteString)};if(s instanceof Wt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:df(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof kf)return function(o,a){return{mapValue:{fields:{[nE]:{stringValue:sE},[sc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Vc("VectorValues must only contain numeric values.");return lf(a.serializer,u)})}}}}}}(s,r);throw r.Vc(`Unsupported field value: ${lu(s)}`)}(n,e)}function lw(n,e){const t={};return Y0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(n,(s,r)=>{const i=Ji(r,e.Ic(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function cw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof Pf||n instanceof Mi||n instanceof Wt||n instanceof Ma||n instanceof kf)}function Of(n,e,t){if(!cw(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=lu(t);throw s==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+s)}}function id(n,e,t){if((e=et(e))instanceof hu)return e._internalPath;if(typeof e=="string")return Mf(n,e);throw dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mk=new RegExp("[~\\*/\\[\\]]");function Mf(n,e,t){if(e.search(Mk)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hu(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dc(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new le(q.INVALID_ARGUMENT,a+n+c)}function uw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lk extends hw{data(){return super.data()}}function dw(n,e){return typeof e=="string"?Mf(n,e):e instanceof hu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new le(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lf{}class Vk extends Lf{}function Fk(n,e,...t){let s=[];e instanceof Lf&&s.push(e),s=s.concat(t),function(i){const o=i.filter(c=>c instanceof Ff).length,a=i.filter(c=>c instanceof Vf).length;if(o>1||o>0&&a>0)throw new le(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Vf extends Vk{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Vf(e,t,s)}_apply(e){const t=this._parse(e);return pw(e._query,t),new Kr(e.firestore,e.converter,Kh(e._query,t))}_parse(e){const t=fu(e.firestore);return function(i,o,a,c,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new le(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){v_(d,h);const y=[];for(const b of d)y.push(y_(c,i,b));p={arrayValue:{values:y}}}else p=y_(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||v_(d,h),p=Ok(a,o,d,h==="in"||h==="not-in");return mt.create(u,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ff extends Lf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ff(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Dn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)pw(o,c),o=Kh(o,c)}(e._query,t),new Kr(e.firestore,e.converter,Kh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function y_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new le(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hE(e)&&t.indexOf("/")!==-1)throw new le(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(st.fromString(t));if(!me.isDocumentKey(s))throw new le(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ng(n,new me(s))}if(t instanceof Wt)return Ng(n,t._key);throw new le(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lu(t)}.`)}function v_(n,e){if(!Array.isArray(n)||n.length===0)throw new le(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pw(n,e){const t=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new le(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Uk{convertValue(e,t="none"){switch(lr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return gr(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[sc].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>ct(o.doubleValue));return new kf(i)}convertGeoPoint(e){return new Pf(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const t=or(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=st.fromString(e);Ge(OE(s),9688,{name:e});const r=new aa(s.get(1),s.get(3)),i=new me(s.popFirst(5));return r.isEqual(t)||Cs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gw extends hw{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(dw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Dl extends gw{data(e={}){return super.data(e)}}class _w{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Po(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Dl(this._firestore,this._userDataWriter,s.key,s,new Po(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new Dl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Po(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Dl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Po(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Bk(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Bk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n){n=sn(n,Wt);const e=sn(n.firestore,Ss);return Tk(uu(e),n._key).then(t=>yw(e,n,t))}class Uf extends Uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function fc(n){n=sn(n,Kr);const e=sn(n.firestore,Ss),t=uu(e),s=new Uf(e);return fw(n._query),Ik(t,n._query).then(r=>new _w(e,s,n,r))}function w_(n,e,t){n=sn(n,Wt);const s=sn(n.firestore,Ss),r=mw(n.converter,e,t);return mu(s,[aw(fu(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Tn.none())])}function $k(n,e,t,...s){n=sn(n,Wt);const r=sn(n.firestore,Ss),i=fu(r);let o;return o=typeof(e=et(e))=="string"||e instanceof hu?Dk(i,"updateDoc",n._key,e,t,s):Nk(i,"updateDoc",n._key,e),mu(r,[o.toMutation(n._key,Tn.exists(!0))])}function jk(n){return mu(sn(n.firestore,Ss),[new cf(n._key,Tn.none())])}function Hk(n,e){const t=sn(n.firestore,Ss),s=ha(n),r=mw(n.converter,e);return mu(t,[aw(fu(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Tn.exists(!1))]).then(()=>s)}function Wk(n,...e){var t,s,r;n=et(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||__(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(__(e[o])){const d=e[o];e[o]=(t=d.next)===null||t===void 0?void 0:t.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(n instanceof Wt)u=sn(n.firestore,Ss),h=Zc(n._key.path),c={next:d=>{e[o]&&e[o](yw(u,n,d))},error:e[o+1],complete:e[o+2]};else{const d=sn(n,Kr);u=sn(d.firestore,Ss),h=d._query;const p=new Uf(u);c={next:g=>{e[o]&&e[o](new _w(u,p,d,g))},error:e[o+1],complete:e[o+2]},fw(n._query)}return function(p,g,y,b){const x=new xf(b),L=new Af(g,x,y);return p.asyncQueue.enqueueAndForget(async()=>If(await hc(p),L)),()=>{x.Cu(),p.asyncQueue.enqueueAndForget(async()=>bf(await hc(p),L))}}(uu(u),h,a,c)}function mu(n,e){return function(s,r){const i=new ys;return s.asyncQueue.enqueueAndForget(async()=>uk(await wk(s),r,i)),i.promise}(uu(n),e)}function yw(n,e,t){const s=t.docs.get(e._key),r=new Uf(n);return new gw(n,r,e._key,s,new Po(t.hasPendingWrites,t.fromCache),e.converter)}function Gk(){return new Nf("serverTimestamp")}function qk(...n){return new Df("arrayUnion",n)}(function(e,t=!0){(function(r){zi=r})(jr),Dr(new sr("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Ss(new Ox(s.getProvider("auth-internal")),new Vx(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new le(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aa(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Wn(Eg,wg,e),Wn(Eg,wg,"esm2017")})();var T_={};const I_="@firebase/database",b_="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vw="";function zk(n){vw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),vt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:sa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ks(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kk(e)}}catch{}return new Qk},xr=Ew("localStorage"),Yk=Ew("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Hc("@firebase/database"),Jk=function(){let n=1;return function(){return n++}}(),ww=function(n){const e=EA(n),t=new gA;t.update(e);const s=t.digest();return Fd.encodeByteArray(s)},La=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=La.apply(null,s):typeof s=="object"?e+=vt(s):e+=s,e+=" "}return e};let Ho=null,C_=!0;const Xk=function(n,e){ee(!0,"Can't turn on custom loggers persistently."),Ei.logLevel=De.VERBOSE,Ho=Ei.log.bind(Ei)},$t=function(...n){if(C_===!0&&(C_=!1,Ho===null&&Yk.get("logging_enabled")===!0&&Xk()),Ho){const e=La.apply(null,n);Ho(e)}},Va=function(n){return function(...e){$t(n,...e)}},od=function(...n){const e="FIREBASE INTERNAL ERROR: "+La(...n);Ei.error(e)},Rs=function(...n){const e=`FIREBASE FATAL ERROR: ${La(...n)}`;throw Ei.error(e),new Error(e)},rn=function(...n){const e="FIREBASE WARNING: "+La(...n);Ei.warn(e)},Zk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eN=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Li="[MIN_NAME]",Vr="[MAX_NAME]",Xi=function(n,e){if(n===e)return 0;if(n===Li||e===Vr)return-1;if(e===Li||n===Vr)return 1;{const t=A_(n),s=A_(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},tN=function(n,e){return n===e?0:n<e?-1:1},_o=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+vt(e))},Bf=function(n){if(typeof n!="object"||n===null)return vt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=vt(e[s]),t+=":",t+=Bf(n[e[s]]);return t+="}",t},Iw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function on(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bw=function(n){ee(!Tw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},nN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rN(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const iN=new RegExp("^-?(0*)\\d{1,10}$"),oN=-2147483648,aN=2147483647,A_=function(n){if(iN.test(n)){const e=Number(n);if(e>=oN&&e<=aN)return e}return null},Zi=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw rn("Exception was thrown by user callback.",t),e},Math.floor(0))}},lN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,un(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){rn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rn(e)}}class Ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ol.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="5",Cw="v",Aw="s",Sw="r",Rw="f",xw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pw="ls",kw="p",ad="ac",Nw="websocket",Dw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hN(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Mw(n,e,t){ee(typeof e=="string","typeof type must == string"),ee(typeof t=="object","typeof params must == object");let s;if(e===Nw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Dw)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hN(n)&&(t.ns=n.namespace);const r=[];return on(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.counters_={}}incrementCounter(e,t=1){ks(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return QC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={},uh={};function jf(n){const e=n.toString();return ch[e]||(ch[e]=new dN),ch[e]}function fN(n,e){const t=n.toString();return uh[t]||(uh[t]=e()),uh[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Zi(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="start",mN="close",gN="pLPCommand",_N="pRTLPCB",Lw="id",Vw="pw",Fw="ser",yN="cb",vN="seg",EN="ts",wN="d",TN="dframe",Uw=1870,Bw=30,IN=Uw-Bw,bN=25e3,CN=3e4;class ci{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Va(e),this.stats_=jf(t),this.urlFn=c=>(this.appCheckToken&&(c[ad]=this.appCheckToken),Mw(t,Dw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CN)),eN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===S_)this.id=a,this.password=c;else if(o===mN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[S_]="t",s[Fw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Cw]=$f,this.transportSessionId&&(s[Aw]=this.transportSessionId),this.lastSessionId&&(s[Pw]=this.lastSessionId),this.applicationId&&(s[kw]=this.applicationId),this.appCheckToken&&(s[ad]=this.appCheckToken),typeof location<"u"&&location.hostname&&xw.test(location.hostname)&&(s[Sw]=Rw);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ci.forceAllow_=!0}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){return ci.forceAllow_?!0:!ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nN()&&!sN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=vt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Dv(t),r=Iw(s,IN);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[TN]="t",s[Lw]=e,s[Vw]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=vt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Hf{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jk(),window[gN+this.uniqueCallbackIdentifier]=e,window[_N+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$t("frame writing exception"),a.stack&&$t(a.stack),$t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lw]=this.myID,e[Vw]=this.myPW,e[Fw]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bw+s.length<=Uw;){const o=this.pendingSegs.shift();s=s+"&"+vN+r+"="+o.seg+"&"+EN+r+"="+o.ts+"&"+wN+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(bN)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{$t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=16384,SN=45e3;let pc=null;typeof MozWebSocket<"u"?pc=MozWebSocket:typeof WebSocket<"u"&&(pc=WebSocket);class Cn{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Va(this.connId),this.stats_=jf(t),this.connURL=Cn.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[Cw]=$f,typeof location<"u"&&location.hostname&&xw.test(location.hostname)&&(o[Sw]=Rw),t&&(o[Aw]=t),s&&(o[Pw]=s),r&&(o[ad]=r),i&&(o[kw]=i),Mw(e,Nw,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xr.set("previous_websocket_failure",!0);try{let s;aA(),this.mySock=new pc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pc!==null&&!Cn.forceDisallow_}static previouslyFailed(){return xr.isInMemoryStorage||xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=sa(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=vt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Iw(t,AN);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{static get ALL_TRANSPORTS(){return[ci,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Cn&&Cn.isAvailable();let s=t&&!Cn.previouslyFailed();if(e.webSocketOnly&&(t||rn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Cn];else{const r=this.transports_=[];for(const i of da.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);da.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}da.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=6e4,xN=5e3,PN=10*1024,kN=100*1024,hh="t",R_="d",NN="s",x_="r",DN="e",P_="o",k_="a",N_="n",D_="p",ON="h";class MN{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Va("c:"+this.id+":"),this.transportManager_=new da(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hh in e){const t=e[hh];t===k_?this.upgradeIfSecondaryHealthy_():t===x_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===P_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_o("t",e),s=_o("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:D_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:k_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:N_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_o("t",e),s=_o("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_o(hh,e);if(R_ in e){const s=e[R_];if(t===ON){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===N_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===NN?this.onConnectionShutdown_(s):t===x_?this.onReset_(s):t===DN?od("Server Error: "+s):t===P_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):od("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$f!==s&&rn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:D_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends jw{static getInstance(){return new mc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=32,M_=768;class Qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $e(){return new Qe("")}function Me(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function hr(n){return n.pieces_.length-n.pieceNum_}function Xe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Qe(n.pieces_,e)}function Hw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function LN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ww(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Gw(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Qe(e,0)}function Et(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new Qe(t,0)}function Oe(n){return n.pieceNum_>=n.pieces_.length}function Yt(n,e){const t=Me(n),s=Me(e);if(t===null)return e;if(t===s)return Yt(Xe(n),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function qw(n,e){if(hr(n)!==hr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Sn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(hr(n)>hr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class VN{constructor(e,t){this.errorPrefix_=t,this.parts_=Ww(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jc(this.parts_[s]);zw(this)}}function FN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=jc(e),zw(n)}function UN(n){const e=n.parts_.pop();n.byteLength_-=jc(e),n.parts_.length>0&&(n.byteLength_-=1)}function zw(n){if(n.byteLength_>M_)throw new Error(n.errorPrefix_+"has a key path longer than "+M_+" bytes ("+n.byteLength_+").");if(n.parts_.length>O_)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O_+") or object contains a cycle "+Sr(n))}function Sr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf extends jw{static getInstance(){return new Wf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,BN=60*5*1e3,L_=30*1e3,$N=1.3,jN=3e4,HN="server_kill",V_=3;class vs extends $w{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vs.nextPersistentConnectionId_++,this.log_=Va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=BN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(vt(i)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new $c,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;vs.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ks(e,"w")){const s=bi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();rn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=L_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=pA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+vt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):od("Unrecognized action received from server: "+vt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jN&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$N)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+vs.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){ee(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?$t("getToken() completed but was canceled"):($t("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new MN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,g=>{rn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(HN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&rn(d),c())}}}interrupt(e){$t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ph(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>Bf(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new Qe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){$t("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=V_&&(this.reconnectDelay_=L_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$t("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=V_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vw.replace(/\./g,"-")]=1,$d()?e["framework.cordova"]=1:Bv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return Ph(this.interruptReasons_)&&e}}vs.nextPersistentConnectionId_=0;vs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ne(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ne(Li,e),r=new Ne(Li,t);return this.compare(s,r)!==0}minPost(){return Ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class Kw extends gu{static get __EMPTY_NODE(){return ml}static set __EMPTY_NODE(e){ml=e}compare(e,t){return Xi(e.name,t.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ne.MIN}maxPost(){return new Ne(Vr,ml)}makePost(e,t){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Ne(e,ml)}toString(){return".key"}}const wi=new Kw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=r??nn.EMPTY_NODE,this.right=i??nn.EMPTY_NODE}copy(e,t,s,r,i){return new Ct(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return nn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ct.RED=!0;Ct.BLACK=!1;class WN{copy(e,t,s,r,i){return this}insert(e,t,s){return new Ct(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nn{constructor(e,t=nn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new nn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ct.BLACK,null,null))}remove(e){return new nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ct.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gl(this.root_,null,this.comparator_,!0,e)}}nn.EMPTY_NODE=new WN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n,e){return Xi(n.name,e.name)}function Gf(n,e){return Xi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld;function qN(n){ld=n}const Qw=function(n){return typeof n=="number"?"number:"+bw(n):"string:"+n},Yw=function(n){if(n.isLeafNode()){const e=n.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ks(e,".sv"),"Priority must be a string or number.")}else ee(n===ld||n.isEmpty(),"priority of unexpected type.");ee(n===ld||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F_;class It{static set __childrenNodeConstructor(e){F_=e}static get __childrenNodeConstructor(){return F_}constructor(e,t=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Oe(e)?this:Me(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Me(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ee(s!==".priority"||hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bw(this.value_):e+=this.value_,this.lazyHash_=ww(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=It.VALUE_TYPE_ORDER.indexOf(t),i=It.VALUE_TYPE_ORDER.indexOf(s);return ee(r>=0,"Unknown leaf type: "+t),ee(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jw,Xw;function zN(n){Jw=n}function KN(n){Xw=n}class QN extends gu{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Xi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ne.MIN}maxPost(){return new Ne(Vr,new It("[PRIORITY-POST]",Xw))}makePost(e,t){const s=Jw(e);return new Ne(t,new It("[PRIORITY-POST]",s))}toString(){return".priority"}}const lt=new QN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=Math.log(2);class JN{constructor(e){const t=i=>parseInt(Math.log(i)/YN,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gc=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let d,p;if(h===0)return null;if(h===1)return d=n[c],p=t?t(d):d,new Ct(p,d.node,Ct.BLACK,null,null);{const g=parseInt(h/2,10)+c,y=r(c,g),b=r(g+1,u);return d=n[g],p=t?t(d):d,new Ct(p,d.node,Ct.BLACK,y,b)}},i=function(c){let u=null,h=null,d=n.length;const p=function(y,b){const x=d-y,L=d;d-=y;const V=r(x+1,L),$=n[x],z=t?t($):$;g(new Ct(z,$.node,b,null,V))},g=function(y){u?(u.left=y,u=y):(h=y,u=y)};for(let y=0;y<c.count;++y){const b=c.nextBitIsOne(),x=Math.pow(2,c.count-(y+1));b?p(x,Ct.BLACK):(p(x,Ct.BLACK),p(x,Ct.RED))}return h},o=new JN(n.length),a=i(o);return new nn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;const ti={};class gs{static get Default(){return ee(ti&&lt,"ChildrenNode.ts has not been loaded"),dh=dh||new gs({".priority":ti},{".priority":lt}),dh}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=bi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof nn?t:null}hasIndex(e){return ks(this.indexSet_,e.toString())}addIndex(e,t){ee(e!==wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Ne.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=gc(s,e.getCompare()):a=ti;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new gs(h,u)}addToIndexes(e,t){const s=zl(this.indexes_,(r,i)=>{const o=bi(this.indexSet_,i);if(ee(o,"Missing index implementation for "+i),r===ti)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ne.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),gc(a,o.getCompare())}else return ti;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Ne(e.name,a))),c.insert(e,e.node)}});return new gs(s,this.indexSet_)}removeFromIndexes(e,t){const s=zl(this.indexes_,r=>{if(r===ti)return r;{const i=t.get(e.name);return i?r.remove(new Ne(e.name,i)):r}});return new gs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class be{static get EMPTY_NODE(){return vo||(vo=new be(new nn(Gf),null,gs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Yw(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new be(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vo:t}}getChild(e){const t=Me(e);return t===null?this:this.getImmediateChild(t).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ee(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ne(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?vo:this.priorityNode_;return new be(r,o,i)}}updateChild(e,t){const s=Me(e);if(s===null)return t;{ee(Me(e)!==".priority"||hr(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Xe(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(lt,(o,a)=>{t[o]=a.val(e),s++,i&&be.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qw(this.getPriority().val())+":"),this.forEachChild(lt,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":ww(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ne(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ne(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ne(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ne.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ne.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fa?-1:0}withIndex(e){if(e===wi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new be(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(lt),r=t.getIterator(lt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wi?null:this.indexMap_.get(e.toString())}}be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XN extends be{constructor(){super(new nn(Gf),be.EMPTY_NODE,gs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return be.EMPTY_NODE}isEmpty(){return!1}}const Fa=new XN;Object.defineProperties(Ne,{MIN:{value:new Ne(Li,be.EMPTY_NODE)},MAX:{value:new Ne(Vr,Fa)}});Kw.__EMPTY_NODE=be.EMPTY_NODE;It.__childrenNodeConstructor=be;qN(Fa);KN(Fa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=!0;function At(n,e=null){if(n===null)return be.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new It(t,At(e))}if(!(n instanceof Array)&&ZN){const t=[];let s=!1;if(on(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=At(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Ne(o,c)))}}),t.length===0)return be.EMPTY_NODE;const i=gc(t,GN,o=>o.name,Gf);if(s){const o=gc(t,lt.getCompare());return new be(i,At(e),new gs({".priority":o},{".priority":lt}))}else return new be(i,At(e),gs.Default)}else{let t=be.EMPTY_NODE;return on(n,(s,r)=>{if(ks(n,s)&&s.substring(0,1)!=="."){const i=At(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(At(e))}}zN(At);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends gu{constructor(e){super(),this.indexPath_=e,ee(!Oe(e)&&Me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Xi(e.name,t.name):i}makePost(e,t){const s=At(e),r=be.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ne(t,r)}maxPost(){const e=be.EMPTY_NODE.updateChild(this.indexPath_,Fa);return new Ne(Vr,e)}toString(){return Ww(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD extends gu{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Xi(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ne.MIN}maxPost(){return Ne.MAX}makePost(e,t){const s=At(e);return new Ne(t,s)}toString(){return".value"}}const nD=new tD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(n){return{type:"value",snapshotNode:n}}function Vi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function fa(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pa(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function sD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.index_=e}updateChild(e,t,s,r,i,o){ee(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(fa(t,a)):ee(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vi(t,s)):o.trackChildChange(pa(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(lt,(r,i)=>{t.hasChild(r)||s.trackChildChange(fa(r,i))}),t.isLeafNode()||t.forEachChild(lt,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(pa(r,i,o))}else s.trackChildChange(Vi(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?be.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.indexedFilter_=new qf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ma.getStartPost_(e),this.endPost_=ma.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,r,i,o){return this.matches(new Ne(t,s))||(s=be.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,r,i,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=be.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(be.EMPTY_NODE);const i=this;return t.forEachChild(lt,(o,a)=>{i.matches(new Ne(o,a))||(r=r.updateImmediateChild(o,be.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ma(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,r,i,o){return this.rangedFilter_.matches(new Ne(t,s))||(s=be.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,r,i,o):this.fullLimitUpdateChild_(e,t,s,i,o)}updateFullNode(e,t,s){let r;if(t.isLeafNode()||t.isEmpty())r=be.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=be.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(be.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,be.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,g)=>d(g,p)}else o=this.index_.getCompare();const a=e;ee(a.numChildren()===this.limit_,"");const c=new Ne(t,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let p=r.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);const g=p==null?1:o(p,c);if(h&&!s.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(pa(t,s,d)),a.updateImmediateChild(t,s);{i!=null&&i.trackChildChange(fa(t,d));const b=a.updateImmediateChild(t,be.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i!=null&&i.trackChildChange(Vi(p.name,p.node)),b.updateImmediateChild(p.name,p.node)):b}}else return s.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(fa(u.name,u.node)),i.trackChildChange(Vi(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(u.name,be.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new zf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iD(n){return n.loadsAllData()?new qf(n.getIndex()):n.hasLimit()?new rD(n):new ma(n)}function U_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===lt?t="$priority":n.index_===nD?t="$value":n.index_===wi?t="$key":(ee(n.index_ instanceof eD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=vt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=vt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+vt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=vt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+vt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function B_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==lt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends $w{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Va("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=_c.getListenId_(e,s),a={};this.listens_[o]=a;const c=U_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),bi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,t){const s=_c.getListenId_(e,t);delete this.listens_[s]}get(e){const t=U_(e._queryParams),s=e._path.toString(),r=new $c;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=sa(a.responseText)}catch{rn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&rn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.rootNode_=be.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return{value:null,children:new Map}}function eT(n,e,t){if(Oe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Me(e);n.children.has(s)||n.children.set(s,yc());const r=n.children.get(s);e=Xe(e),eT(r,e,t)}}function cd(n,e,t){n.value!==null?t(e,n.value):aD(n,(s,r)=>{const i=new Qe(e.toString()+"/"+s);cd(r,i,t)})}function aD(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&on(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=10*1e3,cD=30*1e3,uD=5*60*1e3;class hD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lD(e);const s=$_+(cD-$_)*Math.random();Wo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;on(e,(r,i)=>{i>0&&ks(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),Wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*uD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function tT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Rn.ACK_USER_WRITE,this.source=tT()}operationForChild(e){if(Oe(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Qe(e));return new vc($e(),t,this.revert)}}else return ee(Me(this.path)===e,"operationForChild called for unrelated child."),new vc(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.source=e,this.path=t,this.type=Rn.LISTEN_COMPLETE}operationForChild(e){return Oe(this.path)?new ga(this.source,$e()):new ga(this.source,Xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Rn.OVERWRITE}operationForChild(e){return Oe(this.path)?new Fr(this.source,$e(),this.snap.getImmediateChild(e)):new Fr(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Rn.MERGE}operationForChild(e){if(Oe(this.path)){const t=this.children.subtree(new Qe(e));return t.isEmpty()?null:t.value?new Fr(this.source,$e(),t.value):new _a(this.source,$e(),t)}else return ee(Me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _a(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Oe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Me(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fD(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(sD(o.childName,o.snapshotNode))}),Eo(n,r,"child_removed",e,s,t),Eo(n,r,"child_added",e,s,t),Eo(n,r,"child_moved",i,s,t),Eo(n,r,"child_changed",e,s,t),Eo(n,r,"value",e,s,t),r}function Eo(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>mD(n,a,c)),o.forEach(a=>{const c=pD(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function pD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function mD(n,e,t){if(e.childName==null||t.childName==null)throw Wi("Should only compare child_ events.");const s=new Ne(e.childName,e.snapshotNode),r=new Ne(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){return{eventCache:n,serverCache:e}}function Go(n,e,t,s){return _u(new dr(e,t,s),n.serverCache)}function nT(n,e,t,s){return _u(n.eventCache,new dr(e,t,s))}function Ec(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ur(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;const gD=()=>(fh||(fh=new nn(tN)),fh);class nt{static fromObject(e){let t=new nt(null);return on(e,(s,r)=>{t=t.set(new Qe(s),r)}),t}constructor(e,t=gD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$e(),value:this.value};if(Oe(e))return null;{const s=Me(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Xe(e),t);return i!=null?{path:Et(new Qe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Oe(e))return this;{const t=Me(e),s=this.children.get(t);return s!==null?s.subtree(Xe(e)):new nt(null)}}set(e,t){if(Oe(e))return new nt(t,this.children);{const s=Me(e),i=(this.children.get(s)||new nt(null)).set(Xe(e),t),o=this.children.insert(s,i);return new nt(this.value,o)}}remove(e){if(Oe(e))return this.children.isEmpty()?new nt(null):new nt(null,this.children);{const t=Me(e),s=this.children.get(t);if(s){const r=s.remove(Xe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new nt(null):new nt(this.value,i)}else return this}}get(e){if(Oe(e))return this.value;{const t=Me(e),s=this.children.get(t);return s?s.get(Xe(e)):null}}setTree(e,t){if(Oe(e))return t;{const s=Me(e),i=(this.children.get(s)||new nt(null)).setTree(Xe(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new nt(this.value,o)}}fold(e){return this.fold_($e(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Et(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,$e(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(Oe(e))return null;{const i=Me(e),o=this.children.get(i);return o?o.findOnPath_(Xe(e),Et(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$e(),t)}foreachOnPath_(e,t,s){if(Oe(e))return this;{this.value&&s(t,this.value);const r=Me(e),i=this.children.get(r);return i?i.foreachOnPath_(Xe(e),Et(t,r),s):new nt(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(Et(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new nt(null))}}function qo(n,e,t){if(Oe(e))return new Pn(new nt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Yt(r,e);return i=i.updateChild(o,t),new Pn(n.writeTree_.set(r,i))}else{const r=new nt(t),i=n.writeTree_.setTree(e,r);return new Pn(i)}}}function j_(n,e,t){let s=n;return on(t,(r,i)=>{s=qo(s,Et(e,r),i)}),s}function H_(n,e){if(Oe(e))return Pn.empty();{const t=n.writeTree_.setTree(e,new nt(null));return new Pn(t)}}function ud(n,e){return Qr(n,e)!=null}function Qr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Yt(t.path,e)):null}function W_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(lt,(s,r)=>{e.push(new Ne(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ne(s,r.value))}),e}function Xs(n,e){if(Oe(e))return n;{const t=Qr(n,e);return t!=null?new Pn(new nt(t)):new Pn(n.writeTree_.subtree(e))}}function hd(n){return n.writeTree_.isEmpty()}function Fi(n,e){return sT($e(),n.writeTree_,e)}function sT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(ee(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=sT(Et(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Et(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e){return aT(e,n)}function _D(n,e,t,s,r){ee(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=qo(n.visibleWrites,e,t)),n.lastWriteId=s}function yD(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function vD(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);ee(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ED(a,s.path)?r=!1:Sn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return wD(n),!0;if(s.snap)n.visibleWrites=H_(n.visibleWrites,s.path);else{const a=s.children;on(a,c=>{n.visibleWrites=H_(n.visibleWrites,Et(s.path,c))})}return!0}else return!1}function ED(n,e){if(n.snap)return Sn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Sn(Et(n.path,t),e))return!0;return!1}function wD(n){n.visibleWrites=rT(n.allWrites,TD,$e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function TD(n){return n.visible}function rT(n,e,t){let s=Pn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)Sn(t,o)?(a=Yt(t,o),s=qo(s,a,i.snap)):Sn(o,t)&&(a=Yt(o,t),s=qo(s,$e(),i.snap.getChild(a)));else if(i.children){if(Sn(t,o))a=Yt(t,o),s=j_(s,a,i.children);else if(Sn(o,t))if(a=Yt(o,t),Oe(a))s=j_(s,$e(),i.children);else{const c=bi(i.children,Me(a));if(c){const u=c.getChild(Xe(a));s=qo(s,$e(),u)}}}else throw Wi("WriteRecord should have .snap or .children")}}return s}function iT(n,e,t,s,r){if(!s&&!r){const i=Qr(n.visibleWrites,e);if(i!=null)return i;{const o=Xs(n.visibleWrites,e);if(hd(o))return t;if(t==null&&!ud(o,$e()))return null;{const a=t||be.EMPTY_NODE;return Fi(o,a)}}}else{const i=Xs(n.visibleWrites,e);if(!r&&hd(i))return t;if(!r&&t==null&&!ud(i,$e()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Sn(u.path,e)||Sn(e,u.path))},a=rT(n.allWrites,o,e),c=t||be.EMPTY_NODE;return Fi(a,c)}}}function ID(n,e,t){let s=be.EMPTY_NODE;const r=Qr(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(lt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Xs(n.visibleWrites,e);return t.forEachChild(lt,(o,a)=>{const c=Fi(Xs(i,new Qe(o)),a);s=s.updateImmediateChild(o,c)}),W_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Xs(n.visibleWrites,e);return W_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bD(n,e,t,s,r){ee(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Et(e,t);if(ud(n.visibleWrites,i))return null;{const o=Xs(n.visibleWrites,i);return hd(o)?r.getChild(t):Fi(o,r.getChild(t))}}function CD(n,e,t,s){const r=Et(e,t),i=Qr(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Xs(n.visibleWrites,r);return Fi(o,s.getNode().getImmediateChild(t))}else return null}function AD(n,e){return Qr(n.visibleWrites,e)}function SD(n,e,t,s,r,i,o){let a;const c=Xs(n.visibleWrites,e),u=Qr(c,$e());if(u!=null)a=u;else if(t!=null)a=Fi(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=p.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=p.getNext();return h}else return[]}function RD(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function wc(n,e,t,s){return iT(n.writeTree,n.treePath,e,t,s)}function Yf(n,e){return ID(n.writeTree,n.treePath,e)}function G_(n,e,t,s){return bD(n.writeTree,n.treePath,e,t,s)}function Tc(n,e){return AD(n.writeTree,Et(n.treePath,e))}function xD(n,e,t,s,r,i){return SD(n.writeTree,n.treePath,e,t,s,r,i)}function Jf(n,e,t){return CD(n.writeTree,n.treePath,e,t)}function oT(n,e){return aT(Et(n.treePath,e),n.writeTree)}function aT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ee(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ee(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,pa(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,fa(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,Vi(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,pa(s,e.snapshotNode,r.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const lT=new kD;class Xf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ur(this.viewCache_),i=xD(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(n){return{filter:n}}function DD(n,e){ee(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function OD(n,e,t,s,r){const i=new PD;let o,a;if(t.type===Rn.OVERWRITE){const u=t;u.source.fromUser?o=dd(n,e,u.path,u.snap,s,r,i):(ee(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Oe(u.path),o=Ic(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===Rn.MERGE){const u=t;u.source.fromUser?o=LD(n,e,u.path,u.children,s,r,i):(ee(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=fd(n,e,u.path,u.children,s,r,a,i))}else if(t.type===Rn.ACK_USER_WRITE){const u=t;u.revert?o=UD(n,e,u.path,s,r,i):o=VD(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===Rn.LISTEN_COMPLETE)o=FD(n,e,t.path,s,i);else throw Wi("Unknown operation type: "+t.type);const c=i.getChanges();return MD(e,o,c),{viewCache:o,changes:c}}function MD(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ec(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(Zw(Ec(e)))}}function cT(n,e,t,s,r,i){const o=e.eventCache;if(Tc(s,t)!=null)return e;{let a,c;if(Oe(t))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ur(e),h=u instanceof be?u:be.EMPTY_NODE,d=Yf(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=wc(s,Ur(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Me(t);if(u===".priority"){ee(hr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=G_(s,t,h,c);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=Xe(t);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=G_(s,t,o.getNode(),c);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Jf(s,u,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return Go(e,a,o.isFullyInitialized()||Oe(t),n.filter.filtersNodes())}}function Ic(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(Oe(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Me(t);if(!c.isCompleteForPath(t)&&hr(t)>1)return e;const y=Xe(t),x=c.getNode().getImmediateChild(g).updateChild(y,s);g===".priority"?u=h.updatePriority(c.getNode(),x):u=h.updateChild(c.getNode(),g,x,y,lT,null)}const d=nT(e,u,c.isFullyInitialized()||Oe(t),h.filtersNodes()),p=new Xf(r,d,i);return cT(n,d,t,r,p,a)}function dd(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new Xf(r,e,i);if(Oe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Go(e,u,!0,n.filter.filtersNodes());else{const d=Me(t);if(d===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=Go(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Xe(t),g=a.getNode().getImmediateChild(d);let y;if(Oe(p))y=s;else{const b=h.getCompleteChild(d);b!=null?Hw(p)===".priority"&&b.getChild(Gw(p)).isEmpty()?y=b:y=b.updateChild(p,s):y=be.EMPTY_NODE}if(g.equals(y))c=e;else{const b=n.filter.updateChild(a.getNode(),d,y,p,h,o);c=Go(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function q_(n,e){return n.eventCache.isCompleteForChild(e)}function LD(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=Et(t,c);q_(e,Me(h))&&(a=dd(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=Et(t,c);q_(e,Me(h))||(a=dd(n,a,h,u,r,i,o))}),a}function z_(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function fd(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Oe(t)?u=s:u=new nt(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=z_(n,g,p);c=Ic(n,c,new Qe(d),y,r,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),b=z_(n,y,p);c=Ic(n,c,new Qe(d),b,r,i,o,a)}}),c}function VD(n,e,t,s,r,i,o){if(Tc(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Oe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ic(n,e,t,c.getNode().getChild(t),r,i,a,o);if(Oe(t)){let u=new nt(null);return c.getNode().forEachChild(wi,(h,d)=>{u=u.set(new Qe(h),d)}),fd(n,e,t,u,r,i,a,o)}else return e}else{let u=new nt(null);return s.foreach((h,d)=>{const p=Et(t,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),fd(n,e,t,u,r,i,a,o)}}function FD(n,e,t,s,r){const i=e.serverCache,o=nT(e,i.getNode(),i.isFullyInitialized()||Oe(t),i.isFiltered());return cT(n,o,t,s,lT,r)}function UD(n,e,t,s,r,i){let o;if(Tc(s,t)!=null)return e;{const a=new Xf(s,e,r),c=e.eventCache.getNode();let u;if(Oe(t)||Me(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=wc(s,Ur(e));else{const d=e.serverCache.getNode();ee(d instanceof be,"serverChildren would be complete if leaf node"),h=Yf(s,d)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=Me(t);let d=Jf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=n.filter.updateChild(c,h,d,Xe(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,be.EMPTY_NODE,Xe(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=wc(s,Ur(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Tc(s,$e())!=null,Go(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new qf(s.getIndex()),i=iD(s);this.processor_=ND(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(be.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(be.EMPTY_NODE,a.getNode(),null),h=new dr(c,o.isFullyInitialized(),r.filtersNodes()),d=new dr(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=_u(d,h),this.eventGenerator_=new dD(this.query_)}get query(){return this.query_}}function $D(n){return n.viewCache_.serverCache.getNode()}function jD(n){return Ec(n.viewCache_)}function HD(n,e){const t=Ur(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Oe(e)&&!t.getImmediateChild(Me(e)).isEmpty())?t.getChild(e):null}function K_(n){return n.eventRegistrations_.length===0}function WD(n,e){n.eventRegistrations_.push(e)}function Q_(n,e,t){const s=[];if(t){ee(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return s}function Y_(n,e,t,s){e.type===Rn.MERGE&&e.source.queryId!==null&&(ee(Ur(n.viewCache_),"We should always have a full cache before handling merges"),ee(Ec(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=OD(n.processor_,r,e,t,s);return DD(n.processor_,i.viewCache),ee(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,uT(n,i.changes,i.viewCache.eventCache.getNode(),null)}function GD(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(lt,(i,o)=>{s.push(Vi(i,o))}),t.isFullyInitialized()&&s.push(Zw(t.getNode())),uT(n,s,t.getNode(),e)}function uT(n,e,t,s){const r=s?[s]:n.eventRegistrations_;return fD(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc;class hT{constructor(){this.views=new Map}}function qD(n){ee(!bc,"__referenceConstructor has already been defined"),bc=n}function zD(){return ee(bc,"Reference.ts has not been loaded"),bc}function KD(n){return n.views.size===0}function Zf(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return ee(i!=null,"SyncTree gave us an op for an invalid query."),Y_(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(Y_(o,e,t,s));return i}}function dT(n,e,t,s,r){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=wc(t,r?s:null),c=!1;a?c=!0:s instanceof be?(a=Yf(t,s),c=!1):(a=be.EMPTY_NODE,c=!1);const u=_u(new dr(a,c,!1),new dr(s,r,!1));return new BD(e,u)}return o}function QD(n,e,t,s,r,i){const o=dT(n,e,s,r,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),WD(o,t),GD(o,t)}function YD(n,e,t,s){const r=e._queryIdentifier,i=[];let o=[];const a=fr(n);if(r==="default")for(const[c,u]of n.views.entries())o=o.concat(Q_(u,t,s)),K_(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=n.views.get(r);c&&(o=o.concat(Q_(c,t,s)),K_(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!fr(n)&&i.push(new(zD())(e._repo,e._path)),{removed:i,events:o}}function fT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Zs(n,e){let t=null;for(const s of n.views.values())t=t||HD(s,e);return t}function pT(n,e){if(e._queryParams.loadsAllData())return vu(n);{const s=e._queryIdentifier;return n.views.get(s)}}function mT(n,e){return pT(n,e)!=null}function fr(n){return vu(n)!=null}function vu(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;function JD(n){ee(!Cc,"__referenceConstructor has already been defined"),Cc=n}function XD(){return ee(Cc,"Reference.ts has not been loaded"),Cc}let ZD=1;class J_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nt(null),this.pendingWriteTree_=RD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gT(n,e,t,s,r){return _D(n.pendingWriteTree_,e,t,s,r),r?Ba(n,new Fr(tT(),e,t)):[]}function Pr(n,e,t=!1){const s=yD(n.pendingWriteTree_,e);if(vD(n.pendingWriteTree_,e)){let i=new nt(null);return s.snap!=null?i=i.set($e(),!0):on(s.children,o=>{i=i.set(new Qe(o),!0)}),Ba(n,new vc(s.path,i,t))}else return[]}function Ua(n,e,t){return Ba(n,new Fr(Kf(),e,t))}function eO(n,e,t){const s=nt.fromObject(t);return Ba(n,new _a(Kf(),e,s))}function tO(n,e){return Ba(n,new ga(Kf(),e))}function nO(n,e,t){const s=tp(n,t);if(s){const r=np(s),i=r.path,o=r.queryId,a=Yt(i,e),c=new ga(Qf(o),a);return sp(n,i,c)}else return[]}function _T(n,e,t,s,r=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||mT(o,e))){const c=YD(o,e,t,s);KD(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!r){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(i,(p,g)=>fr(g));if(h&&!d){const p=n.syncPointTree_.subtree(i);if(!p.isEmpty()){const g=oO(p);for(let y=0;y<g.length;++y){const b=g[y],x=b.query,L=wT(n,b);n.listenProvider_.startListening(zo(x),ya(n,x),L.hashFn,L.onComplete)}}}!d&&u.length>0&&!s&&(h?n.listenProvider_.stopListening(zo(e),null):u.forEach(p=>{const g=n.queryToTagMap.get(Eu(p));n.listenProvider_.stopListening(zo(p),g)}))}aO(n,u)}return a}function yT(n,e,t,s){const r=tp(n,s);if(r!=null){const i=np(r),o=i.path,a=i.queryId,c=Yt(o,e),u=new Fr(Qf(a),c,t);return sp(n,o,u)}else return[]}function sO(n,e,t,s){const r=tp(n,s);if(r){const i=np(r),o=i.path,a=i.queryId,c=Yt(o,e),u=nt.fromObject(t),h=new _a(Qf(a),c,u);return sp(n,o,h)}else return[]}function rO(n,e,t,s=!1){const r=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(r,(p,g)=>{const y=Yt(p,r);i=i||Zs(g,y),o=o||fr(g)});let a=n.syncPointTree_.get(r);a?(o=o||fr(a),i=i||Zs(a,$e())):(a=new hT,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=be.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((g,y)=>{const b=Zs(y,$e());b&&(i=i.updateImmediateChild(g,b))}));const u=mT(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=Eu(e);ee(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=lO();n.queryToTagMap.set(p,g),n.tagToQueryMap.set(g,p)}const h=yu(n.pendingWriteTree_,r);let d=QD(a,e,t,h,i,c);if(!u&&!o&&!s){const p=pT(a,e);d=d.concat(cO(n,e,p))}return d}function ep(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Yt(o,e),u=Zs(a,c);if(u)return u});return iT(r,e,i,t,!0)}function iO(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(u,h)=>{const d=Yt(u,t);s=s||Zs(h,d)});let r=n.syncPointTree_.get(t);r?s=s||Zs(r,$e()):(r=new hT,n.syncPointTree_=n.syncPointTree_.set(t,r));const i=s!=null,o=i?new dr(s,!0,!1):null,a=yu(n.pendingWriteTree_,e._path),c=dT(r,e,a,i?o.getNode():be.EMPTY_NODE,i);return jD(c)}function Ba(n,e){return vT(e,n.syncPointTree_,null,yu(n.pendingWriteTree_,$e()))}function vT(n,e,t,s){if(Oe(n.path))return ET(n,e,t,s);{const r=e.get($e());t==null&&r!=null&&(t=Zs(r,$e()));let i=[];const o=Me(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=oT(s,o);i=i.concat(vT(a,c,u,h))}return r&&(i=i.concat(Zf(r,n,s,t))),i}}function ET(n,e,t,s){const r=e.get($e());t==null&&r!=null&&(t=Zs(r,$e()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=oT(s,o),h=n.operationForChild(o);h&&(i=i.concat(ET(h,a,c,u)))}),r&&(i=i.concat(Zf(r,n,s,t))),i}function wT(n,e){const t=e.query,s=ya(n,t);return{hashFn:()=>($D(e)||be.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?nO(n,t._path,s):tO(n,t._path);{const i=rN(r,t);return _T(n,t,null,i)}}}}function ya(n,e){const t=Eu(e);return n.queryToTagMap.get(t)}function Eu(n){return n._path.toString()+"$"+n._queryIdentifier}function tp(n,e){return n.tagToQueryMap.get(e)}function np(n){const e=n.indexOf("$");return ee(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Qe(n.substr(0,e))}}function sp(n,e,t){const s=n.syncPointTree_.get(e);ee(s,"Missing sync point for query tag that we're tracking");const r=yu(n.pendingWriteTree_,e);return Zf(s,t,r,null)}function oO(n){return n.fold((e,t,s)=>{if(t&&fr(t))return[vu(t)];{let r=[];return t&&(r=fT(t)),on(s,(i,o)=>{r=r.concat(o)}),r}})}function zo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(XD())(n._repo,n._path):n}function aO(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const r=Eu(s),i=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(i)}}}function lO(){return ZD++}function cO(n,e,t){const s=e._path,r=ya(n,e),i=wT(n,t),o=n.listenProvider_.startListening(zo(e),r,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(s);if(r)ee(!fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,d)=>{if(!Oe(u)&&h&&fr(h))return[vu(h).query];{let p=[];return h&&(p=p.concat(fT(h).map(g=>g.query))),on(d,(g,y)=>{p=p.concat(y)}),p}});for(let u=0;u<c.length;++u){const h=c[u];n.listenProvider_.stopListening(zo(h),ya(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new rp(t)}node(){return this.node_}}class ip{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Et(this.path_,e);return new ip(this.syncTree_,t)}node(){return ep(this.syncTree_,this.path_)}}const uO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},X_=function(n,e,t){if(!n||typeof n!="object")return n;if(ee(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return dO(n[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ee(!1,"Unexpected server value: "+n)}},dO=function(n,e,t){n.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ee(!1,"Unexpected increment value: "+s);const r=e.node();if(ee(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},fO=function(n,e,t,s){return op(e,new ip(t,n),s)},TT=function(n,e,t){return op(n,new rp(e),t)};function op(n,e,t){const s=n.getPriority().val(),r=X_(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=X_(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new It(a,At(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new It(r))),o.forEachChild(lt,(a,c)=>{const u=op(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function lp(n,e){let t=e instanceof Qe?e:new Qe(e),s=n,r=Me(t);for(;r!==null;){const i=bi(s.node.children,r)||{children:{},childCount:0};s=new ap(r,s,i),t=Xe(t),r=Me(t)}return s}function eo(n){return n.node.value}function IT(n,e){n.node.value=e,pd(n)}function bT(n){return n.node.childCount>0}function pO(n){return eo(n)===void 0&&!bT(n)}function wu(n,e){on(n.node.children,(t,s)=>{e(new ap(t,n,s))})}function CT(n,e,t,s){t&&e(n),wu(n,r=>{CT(r,e,!0)})}function mO(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $a(n){return new Qe(n.parent===null?n.name:$a(n.parent)+"/"+n.name)}function pd(n){n.parent!==null&&gO(n.parent,n.name,n)}function gO(n,e,t){const s=pO(t),r=ks(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,pd(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,pd(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=/[\[\].#$\/\u0000-\u001F\u007F]/,yO=/[\[\].#$\u0000-\u001F\u007F]/,ph=10*1024*1024,AT=function(n){return typeof n=="string"&&n.length!==0&&!_O.test(n)},ST=function(n){return typeof n=="string"&&n.length!==0&&!yO.test(n)},vO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ST(n)},EO=function(n,e,t,s){cp(jd(n,"value"),e,t)},cp=function(n,e,t){const s=t instanceof Qe?new VN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Sr(s));if(typeof e=="function")throw new Error(n+"contains a function "+Sr(s)+" with contents = "+e.toString());if(Tw(e))throw new Error(n+"contains "+e.toString()+" "+Sr(s));if(typeof e=="string"&&e.length>ph/3&&jc(e)>ph)throw new Error(n+"contains a string greater than "+ph+" utf8 bytes "+Sr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(on(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!AT(o)))throw new Error(n+" contains an invalid key ("+o+") "+Sr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FN(s,o),cp(n,a,s),UN(s)}),r&&i)throw new Error(n+' contains ".value" child '+Sr(s)+" in addition to actual children.")}},RT=function(n,e,t,s){if(!ST(t))throw new Error(jd(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wO=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),RT(n,e,t)},TO=function(n,e){if(Me(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},IO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!AT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vO(t))throw new Error(jd(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xT(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!qw(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function Xn(n,e,t){xT(n,t),CO(n,s=>Sn(s,e)||Sn(e,s))}function CO(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(AO(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function AO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ho&&$t("event: "+t.toString()),Zi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="repo_interrupt",RO=25;class xO{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yc(),this.transactionQueueTree_=new ap,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PO(n,e,t){if(n.stats_=jf(n.repoInfo_),n.forceRestClient_||lN())n.server_=new _c(n.repoInfo_,(s,r,i,o)=>{Z_(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ey(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{vt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new vs(n.repoInfo_,e,(s,r,i,o)=>{Z_(n,s,r,i,o)},s=>{ey(n,s)},s=>{NO(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=fN(n.repoInfo_,()=>new hD(n.stats_,n.server_)),n.infoData_=new oD,n.infoSyncTree_=new J_({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Ua(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),hp(n,"connected",!1),n.serverSyncTree_=new J_({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);Xn(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function kO(n){const t=n.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function up(n){return uO({timestamp:kO(n)})}function Z_(n,e,t,s,r){n.dataUpdateCount++;const i=new Qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=zl(t,u=>At(u));o=sO(n.serverSyncTree_,i,c,r)}else{const c=At(t);o=yT(n.serverSyncTree_,i,c,r)}else if(s){const c=zl(t,u=>At(u));o=eO(n.serverSyncTree_,i,c)}else{const c=At(t);o=Ua(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Iu(n,i)),Xn(n.eventQueue_,a,o)}function ey(n,e){hp(n,"connected",e),e===!1&&MO(n)}function NO(n,e){on(e,(t,s)=>{hp(n,t,s)})}function hp(n,e,t){const s=new Qe("/.info/"+e),r=At(t);n.infoData_.updateSnapshot(s,r);const i=Ua(n.infoSyncTree_,s,r);Xn(n.eventQueue_,s,i)}function PT(n){return n.nextWriteId_++}function DO(n,e,t){const s=iO(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(r=>{const i=At(r).withIndex(e._queryParams.getIndex());rO(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ua(n.serverSyncTree_,e._path,i);else{const a=ya(n.serverSyncTree_,e);o=yT(n.serverSyncTree_,e._path,i,a)}return Xn(n.eventQueue_,e._path,o),_T(n.serverSyncTree_,e,t,null,!0),i},r=>(Tu(n,"get for query "+vt(e)+" failed: "+r),Promise.reject(new Error(r))))}function OO(n,e,t,s,r){Tu(n,"set",{path:e.toString(),value:t,priority:s});const i=up(n),o=At(t,s),a=ep(n.serverSyncTree_,e),c=TT(o,a,i),u=PT(n),h=gT(n.serverSyncTree_,e,c,u,!0);xT(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(p,g)=>{const y=p==="ok";y||rn("set at "+e+" failed: "+p);const b=Pr(n.serverSyncTree_,u,!y);Xn(n.eventQueue_,e,b),VO(n,r,p,g)});const d=MT(n,e);Iu(n,d),Xn(n.eventQueue_,d,[])}function MO(n){Tu(n,"onDisconnectEvents");const e=up(n),t=yc();cd(n.onDisconnect_,$e(),(r,i)=>{const o=fO(r,i,n.serverSyncTree_,e);eT(t,r,o)});let s=[];cd(t,$e(),(r,i)=>{s=s.concat(Ua(n.serverSyncTree_,r,i));const o=MT(n,r);Iu(n,o)}),n.onDisconnect_=yc(),Xn(n.eventQueue_,$e(),s)}function LO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(SO)}function Tu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$t(t,...e)}function VO(n,e,t,s){e&&Zi(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function kT(n,e,t){return ep(n.serverSyncTree_,e,t)||be.EMPTY_NODE}function dp(n,e=n.transactionQueueTree_){if(e||bu(n,e),eo(e)){const t=DT(n,e);ee(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&FO(n,$a(e),t)}else bT(e)&&wu(e,t=>{dp(n,t)})}function FO(n,e,t){const s=t.map(u=>u.currentWriteId),r=kT(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];ee(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Yt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{Tu(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(Pr(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&d.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();bu(n,lp(n.transactionQueueTree_,e)),dp(n,n.transactionQueueTree_),Xn(n.eventQueue_,e,h);for(let p=0;p<d.length;p++)Zi(d[p])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{rn("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}Iu(n,e)}},o)}function Iu(n,e){const t=NT(n,e),s=$a(t),r=DT(n,t);return UO(n,r,s),s}function UO(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Yt(t,c.path);let h=!1,d;if(ee(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(Pr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=RO)h=!0,d="maxretry",r=r.concat(Pr(n.serverSyncTree_,c.currentWriteId,!0));else{const p=kT(n,c.path,o);c.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){cp("transaction failed: Data returned ",g,c.path);let y=At(g);typeof g=="object"&&g!=null&&ks(g,".priority")||(y=y.updatePriority(p.getPriority()));const x=c.currentWriteId,L=up(n),V=TT(y,p,L);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=V,c.currentWriteId=PT(n),o.splice(o.indexOf(x),1),r=r.concat(gT(n.serverSyncTree_,c.path,V,c.currentWriteId,c.applyLocally)),r=r.concat(Pr(n.serverSyncTree_,x,!0))}else h=!0,d="nodata",r=r.concat(Pr(n.serverSyncTree_,c.currentWriteId,!0))}Xn(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}bu(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Zi(s[a]);dp(n,n.transactionQueueTree_)}function NT(n,e){let t,s=n.transactionQueueTree_;for(t=Me(e);t!==null&&eo(s)===void 0;)s=lp(s,t),e=Xe(e),t=Me(e);return s}function DT(n,e){const t=[];return OT(n,e,t),t.sort((s,r)=>s.order-r.order),t}function OT(n,e,t){const s=eo(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);wu(e,r=>{OT(n,r,t)})}function bu(n,e){const t=eo(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,IT(e,t.length>0?t:void 0)}wu(e,s=>{bu(n,s)})}function MT(n,e){const t=$a(NT(n,e)),s=lp(n.transactionQueueTree_,e);return mO(s,r=>{mh(n,r)}),mh(n,s),CT(s,r=>{mh(n,r)}),t}function mh(n,e){const t=eo(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(ee(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(ee(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Pr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?IT(e,void 0):t.length=i+1,Xn(n.eventQueue_,$a(e),r);for(let o=0;o<s.length;o++)Zi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function $O(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):rn(`Invalid query segment '${t}' in query '${n}'`)}return e}const ty=function(n,e){const t=jO(n),s=t.namespace;t.domain==="firebase.com"&&Rs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Rs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zk();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ow(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new Qe(t.pathString)}},jO=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(r=BO(n.substring(h,d)));const p=$O(n.substring(Math.min(n.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),t=e.substring(y+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,t,s,r){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+vt(this.snapshot.exportVal())}}class WO{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ee(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return Oe(this._path)?null:Hw(this._path)}get ref(){return new Ds(this._repo,this._path)}get _queryIdentifier(){const e=B_(this._queryParams),t=Bf(e);return t==="{}"?"default":t}get _queryObject(){return B_(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof fp))return!1;const t=this._repo===e._repo,s=qw(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+LN(this._path)}}class Ds extends fp{constructor(e,t){super(e,t,new zf,!1)}get parent(){const e=Gw(this._path);return e===null?null:new Ds(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class va{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Qe(e),s=md(this.ref,e);return new va(this._node.getChild(t),s,lt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new va(r,md(this.ref,s),lt)))}hasChild(e){const t=new Qe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function LT(n,e){return n=et(n),n._checkNotDeleted("ref"),e!==void 0?md(n._root,e):n._root}function md(n,e){return n=et(n),Me(n._path)===null?wO("child","path",e):RT("child","path",e),new Ds(n._repo,Et(n._path,e))}function qO(n,e){n=et(n),TO("set",n._path),EO("set",e,n._path);const t=new $c;return OO(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function VT(n){n=et(n);const e=new GO(()=>{}),t=new pp(e);return DO(n._repo,n,t).then(s=>new va(s,new Ds(n._repo,n._path),n._queryParams.getIndex()))}class pp{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new HO("value",this,new va(e.snapshotNode,new Ds(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new WO(this,e,t):null}matches(e){return e instanceof pp?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}qD(Ds);JD(Ds);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="FIREBASE_DATABASE_EMULATOR_HOST",gd={};let KO=!1;function QO(n,e,t,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=$r(i);n.repoInfo_=new Ow(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function YO(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||Rs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$t("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ty(i,r),a=o.repoInfo,c;typeof process<"u"&&T_&&(c=T_[zO]),c?(i=`http://${c}?ns=${a.namespace}`,o=ty(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new uN(n.name,n.options,e);IO("Invalid Firebase Database URL",o),Oe(o.path)||Rs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XO(a,n,u,new cN(n,t));return new ZO(h,n)}function JO(n,e){const t=gd[e];(!t||t[n.key]!==n)&&Rs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),LO(n),delete t[n.key]}function XO(n,e,t,s){let r=gd[e.name];r||(r={},gd[e.name]=r);let i=r[n.toURLString()];return i&&Rs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new xO(n,KO,t,s),r[n.toURLString()]=i,i}class ZO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ds(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rs("Cannot call "+e+" on a deleted database.")}}function mp(n=Wd(),e){const t=Wc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Lv("database");s&&eM(t,...s)}return t}function eM(n,e,t,s={}){n=et(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Ts(s,i.repoInfo_.emulatorOptions))return;Rs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Rs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ol(Ol.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Uv(s.mockUserToken,n.app.options.projectId);o=new Ol(a)}$r(e)&&(Ud(e),Bd("Database",!0)),QO(i,r,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(n){zk(jr),Dr(new sr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return YO(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Wn(I_,b_,n),Wn(I_,b_,"esm2017")}vs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};tM();const nM={apiKey:"AIzaSyB43BHj0kWeKl6oRhKPXmzk2mownbe3eUM",authDomain:"tapandplay-7b964.firebaseapp.com",databaseURL:"https://tapandplay-7b964-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tapandplay-7b964",storageBucket:"tapandplay-7b964.firebasestorage.app",messagingSenderId:"201759992414",appId:"1:201759992414:web:59953bc311be19a60a22cf",measurementId:"G-W041KDRDGX"},gp=Wv(nM),pn=Gr(gp),Bn=Ak(gp);mp(gp);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ai=typeof document<"u";function FT(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&FT(n.default)}const je=Object.assign;function gh(n,e){const t={};for(const s in e){const r=e[s];t[s]=On(r)?r.map(n):n(r)}return t}const Ko=()=>{},On=Array.isArray,UT=/#/g,rM=/&/g,iM=/\//g,oM=/=/g,aM=/\?/g,BT=/\+/g,lM=/%5B/g,cM=/%5D/g,$T=/%5E/g,uM=/%60/g,jT=/%7B/g,hM=/%7C/g,HT=/%7D/g,dM=/%20/g;function _p(n){return encodeURI(""+n).replace(hM,"|").replace(lM,"[").replace(cM,"]")}function fM(n){return _p(n).replace(jT,"{").replace(HT,"}").replace($T,"^")}function _d(n){return _p(n).replace(BT,"%2B").replace(dM,"+").replace(UT,"%23").replace(rM,"%26").replace(uM,"`").replace(jT,"{").replace(HT,"}").replace($T,"^")}function pM(n){return _d(n).replace(oM,"%3D")}function mM(n){return _p(n).replace(UT,"%23").replace(aM,"%3F")}function gM(n){return n==null?"":mM(n).replace(iM,"%2F")}function Ea(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const _M=/\/$/,yM=n=>n.replace(_M,"");function _h(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=TM(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Ea(o)}}function vM(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ny(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function EM(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Ui(e.matched[s],t.matched[r])&&WT(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ui(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function WT(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!wM(n[t],e[t]))return!1;return!0}function wM(n,e){return On(n)?sy(n,e):On(e)?sy(e,n):n===e}function sy(n,e){return On(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function TM(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Bs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var wa;(function(n){n.pop="pop",n.push="push"})(wa||(wa={}));var Qo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Qo||(Qo={}));function IM(n){if(!n)if(ai){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),yM(n)}const bM=/^[^#]+#/;function CM(n,e){return n.replace(bM,"#")+e}function AM(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Cu=()=>({left:window.scrollX,top:window.scrollY});function SM(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=AM(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ry(n,e){return(history.state?history.state.position-e:-1)+n}const yd=new Map;function RM(n,e){yd.set(n,e)}function xM(n){const e=yd.get(n);return yd.delete(n),e}let PM=()=>location.protocol+"//"+location.host;function GT(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ny(c,"")}return ny(t,n)+s+r}function kM(n,e,t,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=GT(n,location),y=t.value,b=e.value;let x=0;if(p){if(t.value=g,e.value=p,o&&o===y){o=null;return}x=b?p.position-b.position:0}else s(g);r.forEach(L=>{L(t.value,y,{delta:x,type:wa.pop,direction:x?x>0?Qo.forward:Qo.back:Qo.unknown})})};function c(){o=t.value}function u(p){r.push(p);const g=()=>{const y=r.indexOf(p);y>-1&&r.splice(y,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(je({},p.state,{scroll:Cu()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function iy(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?Cu():null}}function NM(n){const{history:e,location:t}=window,s={value:GT(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=n.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+c:PM()+n+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(g){console.error(g),t[h?"replace":"assign"](p)}}function o(c,u){const h=je({},e.state,iy(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=je({},r.value,e.state,{forward:c,scroll:Cu()});i(h.current,h,!0);const d=je({},iy(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function DM(n){n=IM(n);const e=NM(n),t=kM(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=je({location:"",base:n,go:s,createHref:CM.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function OM(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),DM(n)}function MM(n){return typeof n=="string"||n&&typeof n=="object"}function qT(n){return typeof n=="string"||typeof n=="symbol"}const zT=Symbol("");var oy;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(oy||(oy={}));function Bi(n,e){return je(new Error,{type:n,[zT]:!0},e)}function ns(n,e){return n instanceof Error&&zT in n&&(e==null||!!(n.type&e))}const ay="[^/]+?",LM={sensitive:!1,strict:!1,start:!0,end:!0},VM=/[.+*?^${}()[\]/\\]/g;function FM(n,e){const t=je({},LM,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(t.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(VM,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:b,optional:x,regexp:L}=p;i.push({name:y,repeatable:b,optional:x});const V=L||ay;if(V!==ay){g+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${V}): `+z.message)}}let $=b?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;d||($=x&&u.length<2?`(?:/${$})`:"/"+$),x&&($+="?"),r+=$,g+=20,x&&(g+=-8),b&&(g+=-20),V===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",y=i[p-1];d[y.name]=g&&y.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const p of n){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:x}=g,L=y in u?u[y]:"";if(On(L)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const V=On(L)?L.join("/"):L;if(!V)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);h+=V}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function UM(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function KT(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=UM(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(ly(s))return 1;if(ly(r))return-1}return r.length-s.length}function ly(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const BM={type:0,value:""},$M=/[a-zA-Z0-9_]/;function jM(n){if(!n)return[[]];if(n==="/")return[[BM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),t=1):p();break;case 4:p(),t=s;break;case 1:c==="("?t=2:$M.test(c)?p():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function HM(n,e,t){const s=FM(jM(n.path),t),r=je(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function WM(n,e){const t=[],s=new Map;e=dy({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,p,g){const y=!g,b=uy(d);b.aliasOf=g&&g.record;const x=dy(e,d),L=[b];if("alias"in d){const z=typeof d.alias=="string"?[d.alias]:d.alias;for(const ge of z)L.push(uy(je({},b,{components:g?g.record.components:b.components,path:ge,aliasOf:g?g.record:b})))}let V,$;for(const z of L){const{path:ge}=z;if(p&&ge[0]!=="/"){const ue=p.record.path,A=ue[ue.length-1]==="/"?"":"/";z.path=p.record.path+(ge&&A+ge)}if(V=HM(z,p,x),g?g.alias.push(V):($=$||V,$!==V&&$.alias.push(V),y&&d.name&&!hy(V)&&o(d.name)),QT(V)&&c(V),b.children){const ue=b.children;for(let A=0;A<ue.length;A++)i(ue[A],V,g&&g.children[A])}g=g||V}return $?()=>{o($)}:Ko}function o(d){if(qT(d)){const p=s.get(d);p&&(s.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function c(d){const p=zM(d,t);t.splice(p,0,d),d.record.name&&!hy(d)&&s.set(d.record.name,d)}function u(d,p){let g,y={},b,x;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Bi(1,{location:d});x=g.record.name,y=je(cy(p.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),d.params&&cy(d.params,g.keys.map($=>$.name))),b=g.stringify(y)}else if(d.path!=null)b=d.path,g=t.find($=>$.re.test(b)),g&&(y=g.parse(b),x=g.record.name);else{if(g=p.name?s.get(p.name):t.find($=>$.re.test(p.path)),!g)throw Bi(1,{location:d,currentLocation:p});x=g.record.name,y=je({},p.params,d.params),b=g.stringify(y)}const L=[];let V=g;for(;V;)L.unshift(V.record),V=V.parent;return{name:x,path:b,params:y,matched:L,meta:qM(L)}}n.forEach(d=>i(d));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function cy(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function uy(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:GM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function GM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function hy(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function qM(n){return n.reduce((e,t)=>je(e,t.meta),{})}function dy(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function zM(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;KT(n,e[i])<0?s=i:t=i+1}const r=KM(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function KM(n){let e=n;for(;e=e.parent;)if(QT(e)&&KT(n,e)===0)return e}function QT({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function QM(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(BT," "),o=i.indexOf("="),a=Ea(o<0?i:i.slice(0,o)),c=o<0?null:Ea(i.slice(o+1));if(a in e){let u=e[a];On(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function fy(n){let e="";for(let t in n){const s=n[t];if(t=pM(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(On(s)?s.map(i=>i&&_d(i)):[s&&_d(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function YM(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=On(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const JM=Symbol(""),py=Symbol(""),Au=Symbol(""),YT=Symbol(""),vd=Symbol("");function wo(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ws(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Bi(4,{from:t,to:e})):p instanceof Error?c(p):MM(p)?c(Bi(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let d=Promise.resolve(h);n.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function yh(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(FT(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Ws(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=sM(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Ws(g,t,s,o,a,r)()}))}}return i}function my(n){const e=jn(Au),t=jn(YT),s=pt(()=>{const c=fi(n.to);return e.resolve(c)}),r=pt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=t.matched;if(!h||!d.length)return-1;const p=d.findIndex(Ui.bind(null,h));if(p>-1)return p;const g=gy(c[u-2]);return u>1&&gy(h)===g&&d[d.length-1].path!==g?d.findIndex(Ui.bind(null,c[u-2])):p}),i=pt(()=>r.value>-1&&n2(t.params,s.value.params)),o=pt(()=>r.value>-1&&r.value===t.matched.length-1&&WT(t.params,s.value.params));function a(c={}){if(t2(c)){const u=e[fi(n.replace)?"replace":"push"](fi(n.to)).catch(Ko);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:pt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function XM(n){return n.length===1?n[0]:n}const ZM=Zy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:my,setup(n,{slots:e}){const t=Nc(my(n)),{options:s}=jn(Au),r=pt(()=>({[_y(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[_y(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&XM(e.default(t));return n.custom?i:Av("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),e2=ZM;function t2(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function n2(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!On(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function gy(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _y=(n,e,t)=>n??e??t,s2=Zy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=jn(vd),r=pt(()=>n.route||s.value),i=jn(py,0),o=pt(()=>{let u=fi(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=pt(()=>r.value.matched[o.value]);vl(py,pt(()=>o.value+1)),vl(JM,a),vl(vd,r);const c=ie();return El(()=>[c.value,a.value,n.name],([u,h,d],[p,g,y])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Ui(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,d=a.value,p=d&&d.components[h];if(!p)return yy(t.default,{Component:p,route:u});const g=d.props[h],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=Av(p,je({},y,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return yy(t.default,{Component:x,route:u})||x}}});function yy(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const r2=s2;function i2(n){const e=WM(n.routes,n),t=n.parseQuery||QM,s=n.stringifyQuery||fy,r=n.history,i=wo(),o=wo(),a=wo(),c=tb(Bs);let u=Bs;ai&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=gh.bind(null,M=>""+M),d=gh.bind(null,gM),p=gh.bind(null,Ea);function g(M,Y){let F,j;return qT(M)?(F=e.getRecordMatcher(M),j=Y):j=M,e.addRoute(j,F)}function y(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function b(){return e.getRoutes().map(M=>M.record)}function x(M){return!!e.getRecordMatcher(M)}function L(M,Y){if(Y=je({},Y||c.value),typeof M=="string"){const k=_h(t,M,Y.path),B=e.resolve({path:k.path},Y),W=r.createHref(k.fullPath);return je(k,B,{params:p(B.params),hash:Ea(k.hash),redirectedFrom:void 0,href:W})}let F;if(M.path!=null)F=je({},M,{path:_h(t,M.path,Y.path).path});else{const k=je({},M.params);for(const B in k)k[B]==null&&delete k[B];F=je({},M,{params:d(k)}),Y.params=d(Y.params)}const j=e.resolve(F,Y),oe=M.hash||"";j.params=h(p(j.params));const v=vM(s,je({},M,{hash:fM(oe),path:j.path})),w=r.createHref(v);return je({fullPath:v,hash:oe,query:s===fy?YM(M.query):M.query||{}},j,{redirectedFrom:void 0,href:w})}function V(M){return typeof M=="string"?_h(t,M,c.value.path):je({},M)}function $(M,Y){if(u!==M)return Bi(8,{from:Y,to:M})}function z(M){return A(M)}function ge(M){return z(je(V(M),{replace:!0}))}function ue(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:F}=Y;let j=typeof F=="function"?F(M):F;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=V(j):{path:j},j.params={}),je({query:M.query,hash:M.hash,params:j.path!=null?{}:M.params},j)}}function A(M,Y){const F=u=L(M),j=c.value,oe=M.state,v=M.force,w=M.replace===!0,k=ue(F);if(k)return A(je(V(k),{state:typeof k=="object"?je({},oe,k.state):oe,force:v,replace:w}),Y||F);const B=F;B.redirectedFrom=Y;let W;return!v&&EM(s,j,F)&&(W=Bi(16,{to:B,from:j}),it(j,j,!0,!1)),(W?Promise.resolve(W):S(B,j)).catch(H=>ns(H)?ns(H,2)?H:rt(H):Te(H,B,j)).then(H=>{if(H){if(ns(H,2))return A(je({replace:w},V(H.to),{state:typeof H.to=="object"?je({},oe,H.to.state):oe,force:v}),Y||B)}else H=N(B,j,!0,w,oe);return P(B,j,H),H})}function E(M,Y){const F=$(M,Y);return F?Promise.reject(F):Promise.resolve()}function I(M){const Y=Q.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function S(M,Y){let F;const[j,oe,v]=o2(M,Y);F=yh(j.reverse(),"beforeRouteLeave",M,Y);for(const k of j)k.leaveGuards.forEach(B=>{F.push(Ws(B,M,Y))});const w=E.bind(null,M,Y);return F.push(w),he(F).then(()=>{F=[];for(const k of i.list())F.push(Ws(k,M,Y));return F.push(w),he(F)}).then(()=>{F=yh(oe,"beforeRouteUpdate",M,Y);for(const k of oe)k.updateGuards.forEach(B=>{F.push(Ws(B,M,Y))});return F.push(w),he(F)}).then(()=>{F=[];for(const k of v)if(k.beforeEnter)if(On(k.beforeEnter))for(const B of k.beforeEnter)F.push(Ws(B,M,Y));else F.push(Ws(k.beforeEnter,M,Y));return F.push(w),he(F)}).then(()=>(M.matched.forEach(k=>k.enterCallbacks={}),F=yh(v,"beforeRouteEnter",M,Y,I),F.push(w),he(F))).then(()=>{F=[];for(const k of o.list())F.push(Ws(k,M,Y));return F.push(w),he(F)}).catch(k=>ns(k,8)?k:Promise.reject(k))}function P(M,Y,F){a.list().forEach(j=>I(()=>j(M,Y,F)))}function N(M,Y,F,j,oe){const v=$(M,Y);if(v)return v;const w=Y===Bs,k=ai?history.state:{};F&&(j||w?r.replace(M.fullPath,je({scroll:w&&k&&k.scroll},oe)):r.push(M.fullPath,oe)),c.value=M,it(M,Y,F,w),rt()}let T;function Ye(){T||(T=r.listen((M,Y,F)=>{if(!ce.listening)return;const j=L(M),oe=ue(j);if(oe){A(je(oe,{replace:!0,force:!0}),j).catch(Ko);return}u=j;const v=c.value;ai&&RM(ry(v.fullPath,F.delta),Cu()),S(j,v).catch(w=>ns(w,12)?w:ns(w,2)?(A(je(V(w.to),{force:!0}),j).then(k=>{ns(k,20)&&!F.delta&&F.type===wa.pop&&r.go(-1,!1)}).catch(Ko),Promise.reject()):(F.delta&&r.go(-F.delta,!1),Te(w,j,v))).then(w=>{w=w||N(j,v,!1),w&&(F.delta&&!ns(w,8)?r.go(-F.delta,!1):F.type===wa.pop&&ns(w,20)&&r.go(-1,!1)),P(j,v,w)}).catch(Ko)}))}let _e=wo(),fe=wo(),ve;function Te(M,Y,F){rt(M);const j=fe.list();return j.length?j.forEach(oe=>oe(M,Y,F)):console.error(M),Promise.reject(M)}function ot(){return ve&&c.value!==Bs?Promise.resolve():new Promise((M,Y)=>{_e.add([M,Y])})}function rt(M){return ve||(ve=!M,Ye(),_e.list().forEach(([Y,F])=>M?F(M):Y()),_e.reset()),M}function it(M,Y,F,j){const{scrollBehavior:oe}=n;if(!ai||!oe)return Promise.resolve();const v=!F&&xM(ry(M.fullPath,0))||(j||!F)&&history.state&&history.state.scroll||null;return Zo().then(()=>oe(M,Y,v)).then(w=>w&&SM(w)).catch(w=>Te(w,M,Y))}const R=M=>r.go(M);let O;const Q=new Set,ce={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:b,resolve:L,options:n,push:z,replace:ge,go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:ot,install(M){const Y=this;M.component("RouterLink",e2),M.component("RouterView",r2),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>fi(c)}),ai&&!O&&c.value===Bs&&(O=!0,z(r.location).catch(oe=>{}));const F={};for(const oe in Bs)Object.defineProperty(F,oe,{get:()=>c.value[oe],enumerable:!0});M.provide(Au,Y),M.provide(YT,Wy(F)),M.provide(vd,c);const j=M.unmount;Q.add(M),M.unmount=function(){Q.delete(M),Q.size<1&&(u=Bs,T&&T(),T=null,c.value=Bs,O=!1,ve=!1),j()}}};function he(M){return M.reduce((Y,F)=>Y.then(()=>I(F)),Promise.resolve())}return ce}function o2(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>Ui(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Ui(u,c))||r.push(c))}return[t,s,r]}function Os(){return jn(Au)}const a2={class:"fixed top-5 left-8 right-5 z-50 flex justify-between items-center px-5 py-4 text-white sci-fi-font"},l2={key:0,class:"relative"},c2={key:0,class:"absolute right-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg py-2 z-50"},u2={__name:"Header",setup(n){const e=ie(null),t=ie(!1),s=Os();Mn(()=>{qi(pn,a=>{e.value=a})});const r=()=>{t.value=!t.value},i=async()=>{await Jd(pn),t.value=!1,s.push("/")},o=()=>{t.value=!1};return(a,c)=>{const u=ji("router-link"),h=Cb("click-outside");return J(),Z("header",a2,[qe(u,{to:"/",class:"text-3xl font-bold tracking-wide"},{default:cn(()=>c[3]||(c[3]=[ht("Tap&Play")])),_:1,__:[3]}),e.value?vn((J(),Z("div",l2,[C("button",{onClick:r,class:"text-white hover:text-orange-500 transition unselectable"},c[4]||(c[4]=[C("span",{class:"material-symbols-outlined",style:{"font-size":"40px !important"}},"settings",-1)])),t.value?(J(),Z("div",c2,[qe(u,{to:"/profile",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[0]||(c[0]=d=>t.value=!1)},{default:cn(()=>c[5]||(c[5]=[C("span",{class:"material-symbols-outlined"},"person",-1),ht(" Profile ")])),_:1,__:[5]}),qe(u,{to:"/badges",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[1]||(c[1]=d=>t.value=!1)},{default:cn(()=>c[6]||(c[6]=[C("span",{class:"material-symbols-outlined"},"star",-1),ht(" Badges ")])),_:1,__:[6]}),qe(u,{to:"/records",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[2]||(c[2]=d=>t.value=!1)},{default:cn(()=>c[7]||(c[7]=[C("span",{class:"material-symbols-outlined"},"trophy",-1),ht(" Records ")])),_:1,__:[7]}),C("button",{onClick:i,class:"flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-red-800 hover:text-white transition unselectable"},c[8]||(c[8]=[C("span",{class:"material-symbols-outlined"},"logout",-1),ht(" Log out ")]))])):Be("",!0)])),[[h,o]]):(J(),jl(u,{key:1,to:"/login",class:"text-white hover:text-orange-500 transition unselectable"},{default:cn(()=>c[9]||(c[9]=[C("span",{class:"material-symbols-outlined",style:{"font-size":"40px !important"}},"login",-1)])),_:1,__:[9]}))])}}},Jt=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},h2={},d2={class:"fixed top-1/2 left-1 transform -translate-y-1/2 flex flex-col items-center gap-5 z-50"},f2={class:"h-28 flex items-center"},p2={class:"h-28 flex items-center"},m2={class:"h-28 flex items-center"},g2={class:"h-28 flex items-center"};function _2(n,e){const t=ji("router-link");return J(),Z("nav",d2,[C("div",f2,[qe(t,{to:"/about",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:cn(()=>e[0]||(e[0]=[ht(" ABOUT ")])),_:1,__:[0]})]),C("div",p2,[qe(t,{to:"/forum",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:cn(()=>e[1]||(e[1]=[ht(" FORUM ")])),_:1,__:[1]})]),C("div",m2,[qe(t,{to:"/games",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:cn(()=>e[2]||(e[2]=[ht(" GAMES ")])),_:1,__:[2]})]),C("div",g2,[qe(t,{to:"/",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:cn(()=>e[3]||(e[3]=[ht(" HOME ")])),_:1,__:[3]})])])}const y2=Jt(h2,[["render",_2],["__scopeId","data-v-06b41e90"]]),v2={},E2={class:"fixed bottom-5 right-5 flex gap-4 z-50"};function w2(n,e){return J(),Z("footer",E2,e[0]||(e[0]=[Hi('<a href="https://t.me/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-telegram"></i></a><a href="https://instagram.com/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-instagram"></i></a><a href="https://discord.com/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-discord"></i></a>',3)]))}const T2=Jt(v2,[["render",w2]]),I2={class:"bg-linear-to-t from-gray-900 to-indigo-950 min-h-screen relative"},b2={__name:"App",setup(n){return(e,t)=>{const s=ji("router-view");return J(),Z("div",I2,[qe(u2),qe(y2),qe(s),qe(T2)])}}},Br="/TapNPlayHost/assets/Scifi1-Dr16ngVb.png",C2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDcAAABzCAMAAAC7FRmMAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGlQTFRFAAAA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kAiJO5KAAAACN0Uk5TAP8B/urzFQwF+iGAwN5AoGCQsHAwUNBIyJhoOKhY2Ih4KLgfZ+2OAAAKXElEQVR4nO1d2Y5jKxDr2fd939Pz/x95n26fKEglzJTBRexXlO6DwnEKYxc3N4ZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhqOL+w3v/4+HTy8GPd2P33jSffHEMvm0GP9+NPXt8Ofb42d3gy+aDb4+/emoG3x+DHy/Hnj66G3t1/3Lw9fHBd81ffXcMfrocu//qbuzRk8vB5w/uBt9fjj2JHudL5+O8hh7n7NtqHufmQ/RtvbwbexB9W5+bD346/uqLZvBN9G1Fy+7H8cFm2Z09ztfmP54tnvZxfvY9Trh42rcgWjxnb0G4eP42Hzz7tj40g8db8OD55djZsgu/rXbZoVgw8b+UiZ8t0+h9C9nxZ/NXQ3Y83reWHaPHCd+aXrL+1QyGZH18WyFZR8tUgqw735r2ccLF00vW0bc1TNbhT2v7Fvw6/moiWaMIJ36iTDz8WeidOPazcPa+DbNj+759P/5q876dPc635oMhWf/ue5xwmbav/1lNMUzWf5rB+WTdW+L8uBwbLnF6F88ssg7ZsZesvzSDKKKJh29N78RvL8dSJo7V8LfHB8dr+OZ9i9ix961pH2e4xBmv4TvJGqzh/xyDeWQtth89Xzzfm8EFZD1cyqKgTzxcpokTFxNcen+lsBKnk6zBGr6S4CK2H+1dPPKCC4ptJi6mNPX+SmElzpMMmVJCcOlcdtEGUGE/uo/ggmKbiYspTV/7Hgck61Cm7CRrUHDpfN9AwWVUHRfbj5IEl16yThRcUFyd0sQRXBqlKaPE+d18MIOsQcFFTB0X24/2kjUmuCxQx1FwJp6iNHGOBSYJLmLOh3GyFlPHxfajN9+OwUSyXqCOo8iYOEdpqm3tEXM+kI4FKIJLSNZi+9EMwUVCHUdhpYkjuKjZ1HQFF4ysxZwPKWStoI6jsNLEEVzGbWoU54Ow4IKRtZrzoShZt+o4CitNHMFlrfOBQ9YKggvHppZxplSJrP/da26liSO4rHU+nJrBXQSXFJsaxQAA5gI5gss4WaOw0sQRXLScD3KCy6gPU2w/uo/ggmKbia+t4Zv3Tcz5UCkXGJK12H50bS4wUXBBcXVK06kZpChNYs6HSrnAkKzF9qOVcoExO6K4NqVpluBSyKZWSh0Xcz5UygWGZI3CShNHcKlkU1NrxBSRtZjzoVIuMCRrFFaaOIKLmPNhG8FFzfmwQHDhkDUKK00cwUXM+bCN4MJxPuxiABgnaxRFJy6vNDkXyBFcODa1FAMAhaxBwWWYrGFYaaIILs4FcgSXFJsaxwAgnwtktQu8VqWJIriIOR8q5QKH+8Uv2I+WElw02gVuozRRBJfbY0zB+VApFzjeLvDacoGZjZhQVJp4Rg3PORYIrQaloyZiZC22Hy2VCwzZEcU2E+ccCwwLLgtsahk1vLw6LuZ8qJQLzG0XaKWJIrhUsqmp5QIjslZzPhTKBea2C7TSxFGa5ndErhQ1GRdcCtnUSIILh6xRFFWaOMcCiUrT+GEah6wzangOWWM1fCWbmrDg0pA1CrWJ99bwC+5nwG4mLGRTq+TDrGRTWyG4DJM1CjGlKeVngaM0YTW8c4EcwSXDpsa5gko+F8hqF3itShNFcBFzPlTKBY73i7+KK6hIjZhQVJp4pRpey/lQKhc43C5wGwPAgkZMKCpNvFLL722iJmJkLeZ82EZwQbHNxMV8mAtygSlREwV1vLNdoITzoVAuMLddoJUmjuBSyKamlgsMyVrM+VApF5jaLtBKE0dpmt8RuVLUZFxwqWRT4wguHLJGUVVp4hwL5ClN4yWOc4EZ7QJPzeB8m5qw4NKSNQq1iXf+LCy4nwGr4Z0L5DRiEmtfTydrUHAZJmsUakqTWNRkuIZfGzUpnQsMyTrFpka5gko+F8hqF7iN0qQguAhHTU7NYCGyFtuP7iO4oNhm4mI1vJjzQU1wGSZr5wI5gguKq1OaJrX83iZqIkbWdJsaaAAolAuM2RHFtSlNs3yYzgVSjgXUnA+VcoGp7QKtNHEEl0o2NbFcYEjWYs6HSrnA1HaBCw7TOBNPEVwo7QJn3b2VQdYSucCIHSvZ1EiJCw5Zo6Afpm3cLjDyYc6/e6vqsQBWw1e6L3BB4mKYrFGoTbyzhl+gNGE1vHOBnJbf13ZfICi4DJM1CjWlaZcafm3UpHYuMCLrFJsa5woq+Vwgq13gNkqTQg2vGzWpLbjMNwBskwsMS1kU20xcrIYXcz5sI7jQbWqcxIVCLjBmRxTXpjRN8mEK5wJLCy5hiZNB1uDiqZQLDEtZFNemNM3yYRbNBUqo453tAhUMAJVygbntAq00UQSXSja1cXWc04gpImsbADghbhgLLjvnTDxDcOG0C5x091YKWSvkAkN2LGRTIyUuOGSNYsFl59u0C4yyVAvu3ip6LIDV8GsvSpSPmgyTNQq1iXfW8CuUJsrNhO2ZknOBGe0CscXDqaxXCC7DZI1CLGOzTQ3POVPqjIvXzgWGZJ1hU+Pc+S2fC2S1C9xGaVKo4YWvoOLU8JxjgWgDOMsAoJsLBMk6KmVhWGmi1PBizge+4DLpfga+Ta35tm6PD9aurEN2RHF1StMkH6ZuLrB2I6borUkhazBxUSgXuKRd4DZK0yQfZtVcIEbWHMGls12ghAGgUC4wt13gNkqTmA+zkE1tXB3n3PkdkfWWBgBKZQ3qDigW3J/LmbjYscCCu7eKtvw+NYMRO1ayqfUaADiX6SxsF8i57JwzcbH7GRbcvUVv+a1wP8PaixLloybjZI1CbeKdPwunZpCuNGE/C8NnSs4FZrQLBBcPp7JeILgMkzUKtYzNLr09OGdKvXHx0rnAkKwz9qOcK6jkc4GsdoH6SpPuz0JzaCp8BRWnhuccC0QbwFkGAOFcIEbWYSmLopLSxBFcOIemYs4HuuCSmAtc2y6wKXGEc4FYZR2yI4qrU5om+TB1c4G1GzHRc4Hg4imUC1zSLnAbpWmSD7NqLhAja5Lg0tcu0AaATMEFxTZKk5gPM3xrdHOBmDpOElwisq5kAOiVKSflAlPbBS44TCOlBbSOBeiHaWAuUPd+BowdK9nUehdPSNazBBcU8y8730ZpCs9w59+9lbKlUMgFZrQL5FyUqHCmRBJcUKhlbDpr+AVKE1bDOxfIafmdsR9tFw+nsl4guAyTNQq1ie/S24OUC+zcANbOBYbtAnWvoFLomjdO1ijEMjYLBBfOoanuFVRtDV/pWGC+AYC0pVigjkffFoodlSaFLrILnA8cE+/8XODadoHtflQ3FwhW1hE7wrg2pWnSscCCXCDHvSwmuNBzgeDiqZQLXNEucBulaZYPs2guECTr+YKLDQAcwQWFlSaODzN8a4Q7UKkLLqUMAJ2LR+IMF8WCy863UZr62gVKXHauez8Dxo5i7etTFk9I1rMEFxQLLjsPJ975s7BAacKyVAvu3prfamTB/QxLL0pccKY0S3AxDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwjH/CfysZ+itqx/+KAAAAAElFTkSuQmCC",Su="/TapNPlayHost/assets/Scifi3-D3gTAX0M.png",A2="/TapNPlayHost/assets/Circle-DSOFxAk4.png",S2="/TapNPlayHost/assets/Soldier1-BrBwvwlr.png",R2={},x2={class:"w-full h-[calc(100vh-64px)] flex items-center justify-center bg-transparent relative overflow-hidden"};function P2(n,e){return J(),Z("section",x2,e[0]||(e[0]=[Hi('<img src="'+Br+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-50 w-80 z-20 unselectable"><img src="'+C2+'" alt="Scifi Decoration 2" draggable="false" class="absolute scale-150 bottom-1 w-96 z-20 unselectable"><img src="'+Su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-40 right-40 w-80 z-20 unselectable scale-x-[-1]"><div class="relative flex items-center justify-center z-10"><img src="'+A2+'" alt="Background Circle" draggable="false" class="w-96 md:w-[36rem] lg:w-[48rem] absolute z-0 unselectable"><h2 class="text-8xl md:text-9xl font-bold text-white tracking-wide z-10 sci-fi-font unselectable"> Tap&amp;Play </h2></div><img src="'+S2+'" alt="Soldier" draggable="false" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[80vh] z-10 unselectable">',5)]))}const k2=Jt(R2,[["render",P2]]),yp="/TapNPlayHost/assets/Soldier-BbYICOpa.png",vp=ie(null);pn.onAuthStateChanged(n=>{vp.value=n});const N2=async(n,e,t="")=>{const s=await I0(pn,n,e);s&&s.user&&t.trim()&&(await Yd(s.user,{displayName:t.trim()}),vp.value=s.user)},D2=async(n,e)=>{await b0(pn,n,e)},O2=async()=>{await Jd(pn)};function JT(){return{user:vp,register:N2,login:D2,logout:O2}}const M2={class:"flex h-screen bg-linear-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},L2={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},V2={class:"relative"},F2=["type"],U2={class:"material-symbols-outlined text-xl"},B2={key:0,class:"text-red-400 text-sm mt-2"},$2={class:"mt-4 text-sm"},j2={__name:"Login",setup(n){const{login:e}=JT(),t=Os(),s=ie(""),r=ie(""),i=ie(""),o=ie(!1),a=()=>{o.value=!o.value},c=async()=>{i.value="";try{await e(s.value,r.value),await t.push("/")}catch(u){i.value="Failed to log in: "+((u==null?void 0:u.message)||"Unknown error")}};return(u,h)=>{const d=ji("router-link");return J(),Z("section",M2,[h[6]||(h[6]=Hi('<img src="'+Br+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-30 w-80 z-5 unselectable" data-v-8bf69284><img src="'+Br+'" alt="Scifi Decoration 1" draggable="false" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" data-v-8bf69284><img src="'+Su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" data-v-8bf69284><div class="hidden md:flex w-2/3 z-10 items-end justify-center" data-v-8bf69284><img src="'+yp+'" draggable="false" alt="Soldier" class="h-[90vh] object-contain unselectable" data-v-8bf69284></div>',4)),C("div",L2,[h[5]||(h[5]=C("h2",{class:"text-4xl font-bold mb-8"},"Log In",-1)),C("form",{class:"w-full max-w-sm space-y-6",onSubmit:Uc(c,["prevent"])},[vn(C("input",{"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p),type:"email",placeholder:"Email",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Hn,s.value]]),C("div",V2,[vn(C("input",{type:o.value?"text":"password","onUpdate:modelValue":h[1]||(h[1]=p=>r.value=p),placeholder:"Password",required:"",class:"w-full p-3 pr-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,8,F2),[[Pv,r.value]]),C("button",{type:"button",onClick:a,class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 focus:outline-none"},[C("span",U2,ye(o.value?"visibility":"visibility_off"),1)])]),h[2]||(h[2]=C("button",{type:"submit",class:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition unselectable"}," Sign In ",-1)),i.value?(J(),Z("p",B2,ye(i.value),1)):Be("",!0)],32),C("p",$2,[h[4]||(h[4]=ht(" Don't have an account? ")),qe(d,{to:"/register",class:"text-orange-500 hover:underline"},{default:cn(()=>h[3]||(h[3]=[ht("Register!")])),_:1,__:[3]})])])])}}},H2=Jt(j2,[["__scopeId","data-v-8bf69284"]]),W2={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},G2={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},q2={class:"relative"},z2=["type"],K2={class:"material-symbols-outlined text-xl"},Q2={key:0,class:"text-red-400 text-sm mt-2"},Y2={class:"mt-4 text-sm"},J2={__name:"Register",setup(n){const{register:e}=JT(),t=Os(),s=ie(""),r=ie(""),i=ie(""),o=ie(""),a=ie(""),c=ie(!1),u=()=>{c.value=!c.value},h=async()=>{if(a.value="",i.value!==o.value){a.value="Passwords do not match.";return}try{await e(r.value,i.value,s.value),await t.push("/")}catch(d){a.value=d.message||"Registration failed."}};return(d,p)=>{const g=ji("router-link");return J(),Z("section",W2,[p[8]||(p[8]=Hi('<img src="'+Br+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-30 w-80 z-5 unselectable" data-v-15532776><img src="'+Br+'" alt="Scifi Decoration 1" draggable="false" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" data-v-15532776><img src="'+Su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" data-v-15532776><div class="hidden md:flex w-2/3 items-end justify-center" data-v-15532776><img src="'+yp+'" alt="Soldier" draggable="false" class="h-[90vh] object-contain z-10 unselectable" data-v-15532776></div>',4)),C("div",G2,[p[7]||(p[7]=C("h2",{class:"text-4xl font-bold mb-8"},"Register",-1)),C("form",{class:"w-full max-w-sm space-y-6",onSubmit:Uc(h,["prevent"])},[vn(C("input",{"onUpdate:modelValue":p[0]||(p[0]=y=>s.value=y),type:"text",placeholder:"Username",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Hn,s.value]]),vn(C("input",{"onUpdate:modelValue":p[1]||(p[1]=y=>r.value=y),type:"email",placeholder:"Email",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Hn,r.value]]),C("div",q2,[vn(C("input",{type:c.value?"text":"password","onUpdate:modelValue":p[2]||(p[2]=y=>i.value=y),placeholder:"Password",required:"",class:"w-full p-3 pr-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,8,z2),[[Pv,i.value]]),C("button",{type:"button",onClick:u,class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 focus:outline-none"},[C("span",K2,ye(c.value?"visibility":"visibility_off"),1)])]),vn(C("input",{"onUpdate:modelValue":p[3]||(p[3]=y=>o.value=y),type:"password",placeholder:"Confirm Password",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Hn,o.value]]),p[4]||(p[4]=C("button",{type:"submit",class:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition unselectable"}," Sign Up ",-1)),a.value?(J(),Z("p",Q2,ye(a.value),1)):Be("",!0)],32),C("p",Y2,[p[6]||(p[6]=ht(" Already have an account? ")),qe(g,{to:"/login",class:"text-orange-500 hover:underline"},{default:cn(()=>p[5]||(p[5]=[ht("Log in")])),_:1,__:[5]})])])])}}},X2=Jt(J2,[["__scopeId","data-v-15532776"]]),Z2={class:"relative group bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition duration-300 aspect-[4/3] flex flex-col justify-between"},eL=["src","alt"],tL={class:"text-lg font-semibold mt-2 mb-1"},nL={class:"flex flex-wrap gap-2 text-sm text-orange-400 mb-10"},sL={__name:"GameCard",props:{game:{type:Object,required:!0}},setup(n){const e=n,t=Os(),s=()=>{t.push(e.game.route)};return(r,i)=>(J(),Z("div",Z2,[C("img",{src:n.game.img,alt:n.game.title,class:"w-full h-full object-cover rounded-lg unselectable cursor-pointer",draggable:"false",onClick:s},null,8,eL),C("h3",tL,ye(n.game.title),1),C("div",nL,[(J(!0),Z(ft,null,kn(n.game.tags,(o,a)=>(J(),Z("span",{key:a,class:"bg-gray-800 px-2 py-1 rounded"},ye(o),1))),128))]),C("button",{class:"absolute bottom-4 right-4 w-13 h-13 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center shadow-md transition z-10",onClick:s},i[0]||(i[0]=[C("span",{class:"material-symbols-outlined text-xl unselectable",style:{"font-size":"40px !important"}},"play_arrow",-1)]))]))}},vy=Jt(sL,[["__scopeId","data-v-26a09101"]]),rL="/TapNPlayHost/assets/Tetris-DZUUzxDk.png",iL="/TapNPlayHost/assets/Minesweeper-BHtiLAUO.png",oL="/TapNPlayHost/assets/CandyCrush-CCB6NESK.png",aL="/TapNPlayHost/assets/SnakeGame-9YZUlPn4.png",lL="/TapNPlayHost/assets/SpaceShooter-BJ-V_I7_.png",cL={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"},uL={class:"flex flex-col md:flex-row justify-between items-center mb-10 gap-4"},hL={key:0,class:"mb-12"},dL={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},fL={key:1},pL={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},mL={key:2,class:"text-center text-gray-400 mt-20 text-lg"},gL={__name:"Games",setup(n){const e=ie(""),t=ie("All"),s=[{title:"Minesweeper",img:iL,tags:["Logic"],route:"/games/minesweeper",best:!0},{title:"Tetris",img:rL,tags:["Reaction","Logic"],route:"/games/tetris"},{title:"Snake",img:aL,tags:["Reaction","Fun"],route:"/games/snake",best:!0},{title:"Candy Crush",img:oL,tags:["Fun"],route:"/games/candycrush"},{title:"Space Shooter",img:lL,tags:["Reaction","Fun"],route:"/games/spaceshooter",best:!0}],r=pt(()=>s.filter(a=>{const c=a.title.toLowerCase().includes(e.value.toLowerCase()),u=t.value==="All"||a.tags.includes(t.value);return c&&u})),i=pt(()=>r.value.filter(a=>a.best)),o=pt(()=>r.value.filter(a=>!a.best));return(a,c)=>(J(),Z("section",cL,[c[5]||(c[5]=C("h1",{class:"text-4xl font-bold text-center mb-4"},"GAMES",-1)),c[6]||(c[6]=C("div",{class:"h-1 w-33 bg-white mx-auto mb-10 rounded-full"},null,-1)),C("div",uL,[vn(C("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",placeholder:"Search games...",class:"w-full md:w-1/2 p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Hn,e.value]]),vn(C("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u),class:"w-full md:w-1/4 p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},c[2]||(c[2]=[C("option",{value:"All"},"All Categories",-1),C("option",{value:"Logic"},"Logic",-1),C("option",{value:"Reaction"},"Reaction",-1),C("option",{value:"Fun"},"Fun",-1)]),512),[[Rv,t.value]])]),i.value.length?(J(),Z("div",hL,[c[3]||(c[3]=C("h2",{class:"text-2xl md:text-3xl font-bold mb-6 text-orange-500"},"Best Games",-1)),C("div",dL,[(J(!0),Z(ft,null,kn(i.value,u=>(J(),jl(vy,{key:u.title,game:u},null,8,["game"]))),128))])])):Be("",!0),o.value.length?(J(),Z("div",fL,[c[4]||(c[4]=C("h2",{class:"text-2xl md:text-3xl font-bold mb-6 text-orange-500"},"Full Catalog",-1)),C("div",pL,[(J(!0),Z(ft,null,kn(o.value,u=>(J(),jl(vy,{key:u.title,game:u},null,8,["game"]))),128))])])):Be("",!0),r.value.length===0?(J(),Z("div",mL," No games found. ")):Be("",!0)]))}},_L=Jt(gL,[["__scopeId","data-v-0882774a"]]),Ac="/TapNPlayHost/assets/Badge-DYBy8X7v.png",yL={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},vL={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},EL={class:"text-xl mb-6"},wL={class:"ml-2"},TL={key:0,class:"text-gray-400 mb-6"},IL={key:1,class:"flex gap-4 mb-6"},bL=["src","alt","title"],CL={key:1,class:"material-symbols-outlined text-gray-400"},AL={class:"text-sm text-gray-400 mb-6"},SL={key:0,class:"fixed inset-0 bg-black opacity-90 flex z-50"},RL={key:1,class:"fixed inset-0 flex items-center justify-center z-50"},xL={class:"bg-gray-900 rounded-xl p-6 w-96"},PL={class:"flex justify-end gap-2"},kL={__name:"Profile",setup(n){const e=ie("Loading..."),t=ie(""),s=ie(!1),r=ie([]),i=ie(!0),o=pt(()=>r.value.length),a=pt(()=>{const p=r.value.slice(-3).reverse();return[...p,...Array(3-p.length).fill(null)].slice(0,3)}),c=async p=>{var g;try{i.value=!0;const y=await fc(Oi(Bn,"users",p,"badges")),b=[];for(const x of y.docs){const L=x.id,V=x.data();if((g=V.badgeIds)!=null&&g.length)try{const $=await fc(Oi(Bn,"badges",L,"badgeList")),z={};for(const ue of $.docs)z[ue.id]={...ue.data(),id:ue.id};const ge=V.badgeIds.filter(ue=>z[ue]).map(ue=>{var A,E,I;return{id:ue,name:((A=z[ue])==null?void 0:A.name)||"Unknown Badge",description:((E=z[ue])==null?void 0:E.description)||"No description available",iconUrl:((I=z[ue])==null?void 0:I.iconUrl)||Ac,gameId:L}});b.push(...ge)}catch($){console.error(`Error fetching badges for game ${L}:`,$)}}r.value=b}catch(y){console.error("Error fetching user badges:",y)}finally{i.value=!1}};Mn(()=>{qi(pn,p=>{p?(e.value=p.displayName||"Unnamed Soldier",c(p.uid)):i.value=!1})});const u=()=>{t.value=e.value,s.value=!0},h=async()=>{const p=pn.currentUser;if(p&&t.value.trim()!=="")try{await Yd(p,{displayName:t.value.trim()}),e.value=t.value.trim(),s.value=!1}catch(g){console.error("Error updating profile:",g)}},d=p=>{p.target.src=Ac};return(p,g)=>{const y=ji("router-link");return J(),Z("section",yL,[g[7]||(g[7]=Hi('<img src="'+Br+'" alt="" class="absolute top-40 left-30 w-80 z-5 unselectable" draggable="false" data-v-904319aa><img src="'+Br+'" alt="" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" draggable="false" data-v-904319aa><img src="'+Su+'" alt="" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" draggable="false" data-v-904319aa><div class="hidden md:flex w-2/3 items-end justify-center" data-v-904319aa><img src="'+yp+'" alt="Soldier" draggable="false" class="h-[90vh] object-contain z-10 unselectable" data-v-904319aa></div>',4)),C("div",vL,[g[5]||(g[5]=C("h2",{class:"text-4xl font-bold mb-6"},"My Profile",-1)),C("div",EL,[g[2]||(g[2]=C("span",{class:"font-semibold"},"Username:",-1)),C("span",wL,ye(e.value),1)]),C("div",null,[g[4]||(g[4]=C("h3",{class:"text-lg font-semibold mb-2"},"Latest Badges",-1)),i.value?(J(),Z("div",TL,"Loading badges...")):(J(),Z("div",IL,[(J(!0),Z(ft,null,kn(a.value,(b,x)=>(J(),Z("div",{key:x,class:"w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg"},[b?(J(),Z("img",{key:0,src:b.iconUrl,alt:b.name,title:b.name+" - "+b.description,class:"w-12 h-12 object-contain",onError:d},null,40,bL)):(J(),Z("span",CL,"add"))]))),128))])),C("p",AL,[ht(" Total badges: "+ye(o.value)+" | ",1),qe(y,{to:"/badges",class:"text-orange-400 hover:text-orange-300 underline"},{default:cn(()=>g[3]||(g[3]=[ht("View all badges")])),_:1,__:[3]})])]),C("button",{onClick:u,class:"bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition unselectable"}," Edit Profile ")]),s.value?(J(),Z("div",SL)):Be("",!0),s.value?(J(),Z("div",RL,[C("div",xL,[g[6]||(g[6]=C("h3",{class:"text-xl font-bold mb-4"},"Edit Username",-1)),vn(C("input",{"onUpdate:modelValue":g[0]||(g[0]=b=>t.value=b),type:"text",class:"w-full px-4 py-2 rounded bg-gray-800 text-white mb-4 unselectable",placeholder:"Enter new username"},null,512),[[Hn,t.value]]),C("div",PL,[C("button",{onClick:g[1]||(g[1]=b=>s.value=!1),class:"px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded unselectable"},"Cancel"),C("button",{onClick:h,class:"px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded unselectable"},"Save")])])])):Be("",!0)])}}},NL=Jt(kL,[["__scopeId","data-v-904319aa"]]),DL="/TapNPlayHost/assets/vue-DrX0Z5OQ.png",OL="/TapNPlayHost/assets/tailwindcss-pp2QO6R3.png",ML="/TapNPlayHost/assets/javascript-DZlgK55J.png",LL="/TapNPlayHost/assets/firebase-CJHM9ODV.png",VL={},FL={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"};function UL(n,e){return J(),Z("section",FL,e[0]||(e[0]=[Hi('<h1 class="text-4xl font-bold text-center mb-4" data-v-93bcc0d5>ABOUT US</h1><div class="h-1 w-48 bg-white mx-auto mb-10 rounded-full" data-v-93bcc0d5></div><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-6" data-v-93bcc0d5>Developers:</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16" data-v-93bcc0d5><div class="flex flex-col items-center text-center" data-v-93bcc0d5><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-93bcc0d5><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-93bcc0d5>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-93bcc0d5>Oleksii Malanii</p><p class="text-white text-sm" data-v-93bcc0d5>Team Leader</p><p class="text-white text-sm" data-v-93bcc0d5>Front-end Developer</p></div><div class="flex flex-col items-center text-center" data-v-93bcc0d5><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-93bcc0d5><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-93bcc0d5>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-93bcc0d5>Denys Novosad</p><p class="text-white text-sm" data-v-93bcc0d5>Designer</p><p class="text-white text-sm" data-v-93bcc0d5>Front-end Developer</p></div><div class="flex flex-col items-center text-center" data-v-93bcc0d5><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-93bcc0d5><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-93bcc0d5>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-93bcc0d5>Andrii Kohut</p><p class="text-white text-sm" data-v-93bcc0d5>Tech Leader</p><p class="text-white text-sm" data-v-93bcc0d5>Back-end Developer</p></div><div class="flex flex-col items-center text-center" data-v-93bcc0d5><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-93bcc0d5><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-93bcc0d5>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-93bcc0d5>Labunskiy Yaroslav</p><p class="text-white text-sm" data-v-93bcc0d5>QA</p><p class="text-white text-sm" data-v-93bcc0d5>Back-end Developer</p></div></div><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-4" data-v-93bcc0d5>Project Information:</h2><p class="text-white text-2xl mb-16 max-w-8xl" data-v-93bcc0d5> Tap&amp;Play is a collection of minigames designed for web, where users can enjoy simple, fast, and visually styled experiences. Built with modern web technologies, this platform aims to be engaging and easily extensible. </p><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-6" data-v-93bcc0d5>Tools:</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-15" data-v-93bcc0d5><div class="flex flex-col items-center" data-v-93bcc0d5><img src="'+DL+'" alt="Vue Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-93bcc0d5><p class="text-white text-3xl unselectable" data-v-93bcc0d5>Vue</p></div><div class="flex flex-col items-center" data-v-93bcc0d5><img src="'+OL+'" alt="Tailwind Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-93bcc0d5><p class="text-white text-3xl unselectable" data-v-93bcc0d5>TailwindCSS</p></div><div class="flex flex-col items-center" data-v-93bcc0d5><img src="'+ML+'" alt="JavaScript Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-93bcc0d5><p class="text-white text-3xl unselectable" data-v-93bcc0d5>JavaScript</p></div><div class="flex flex-col items-center" data-v-93bcc0d5><img src="'+LL+'" alt="Firebase Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-93bcc0d5><p class="text-white text-3xl unselectable" data-v-93bcc0d5>Firebase</p></div></div>',8)]))}const BL=Jt(VL,[["render",UL],["__scopeId","data-v-93bcc0d5"]]),$L={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white min-h-screen font-sci-fi"},jL={key:0,class:"text-gray-300 text-2xl text-center"},HL={key:1,class:"text-gray-400 text-xl text-center"},WL={key:2},GL={class:"text-2xl mb-4 capitalize"},qL={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"},zL=["title"],KL=["src","alt"],QL={class:"text-sm text-center"},YL={class:"text-xs text-gray-400 text-center mt-1"},JL={key:3,class:"mt-8 p-4 bg-gray-800 rounded"},XL={class:"text-xs"},ZL={__name:"Badges",setup(n){const e=ie({}),t=ie(!0),s=ie(!1),r=async o=>{var a;try{console.log("Fetching badges for user:",o);const c=await fc(Oi(Bn,"users",o,"badges"));console.log("User badge documents found:",c.size);const u={};for(const h of c.docs){const d=h.id,p=h.data();if(console.log(`Processing game ${d}:`,p),(a=p.badgeIds)!=null&&a.length)try{console.log(`Fetching badge definitions for game: ${d}`);const g=await fc(Oi(Bn,"badges",d,"badgeList"));console.log(`Found ${g.size} badge definitions for ${d}`);const y={};for(const x of g.docs)y[x.id]={...x.data(),id:x.id},console.log("Loaded badge definition:",x.id,x.data());const b=p.badgeIds.filter(x=>{const L=y[x];return L||console.warn(`Badge ${x} not found in available badges for ${d}`),L}).map(x=>{var L,V,$;return{id:x,name:((L=y[x])==null?void 0:L.name)||"Unknown Badge",description:((V=y[x])==null?void 0:V.description)||"No description available",iconUrl:(($=y[x])==null?void 0:$.iconUrl)||Ac}});b.length>0&&(u[d]=b,console.log(`Added ${b.length} badges for ${d}`))}catch(g){console.error(`Error fetching badges for game ${d}:`,g)}else console.log(`No badges found for game ${d}`)}console.log("Final badges object:",u),e.value=u}catch(c){console.error("Error fetching user badges:",c)}finally{t.value=!1}};Mn(()=>{qi(pn,o=>{o?(console.log("User authenticated:",o.uid),r(o.uid)):(console.log("No user authenticated"),t.value=!1)})});const i=o=>{console.warn("Image failed to load:",o.target.src),o.target.src=Ac};return(o,a)=>(J(),Z("section",$L,[a[1]||(a[1]=C("h1",{class:"text-4xl font-bold text-center mb-4"},"BADGES",-1)),a[2]||(a[2]=C("div",{class:"h-1 w-37 bg-white mx-auto mb-10 rounded-full"},null,-1)),t.value?(J(),Z("div",jL,"Loading badges...")):Object.keys(e.value).length===0?(J(),Z("div",HL," No badges earned yet. Start playing games to collect badges! ")):(J(),Z("div",WL,[(J(!0),Z(ft,null,kn(e.value,(c,u)=>(J(),Z("div",{key:u,class:"mb-8"},[C("h2",GL,ye(u)+" ("+ye(c.length)+")",1),C("div",qL,[(J(!0),Z(ft,null,kn(c,h=>(J(),Z("div",{key:h.id,class:"bg-gray-800 rounded-xl flex flex-col items-center justify-center p-4 hover:bg-gray-700 transition-colors cursor-pointer",title:h.description},[C("img",{src:h.iconUrl,alt:h.name,class:"w-16 h-16 object-contain mb-2 unselectable",draggable:"false",onError:i},null,40,KL),C("p",QL,ye(h.name),1),C("p",YL,ye(h.description),1)],8,zL))),128))])]))),128))])),s.value?(J(),Z("div",JL,[a[0]||(a[0]=C("h3",{class:"text-lg mb-2"},"Debug Info:",-1)),C("pre",XL,ye(JSON.stringify(e.value,null,2)),1)])):Be("",!0)]))}},eV=Jt(ZL,[["__scopeId","data-v-7424eedc"]]),tV={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"},nV={key:0,class:"text-gray-300 text-2xl"},sV={key:1,class:"text-gray-400 text-xl text-center"},rV={key:2,class:"space-y-8"},iV={key:0},oV={class:"list-disc list-inside space-y-1"},aV={key:0},lV={key:1},cV={key:2},uV={key:1},hV={key:2},dV={class:"list-disc list-inside space-y-1"},fV={key:0},pV={key:1},mV={key:3},gV={class:"list-disc list-inside space-y-1"},_V={key:0},yV={key:1},vV={key:2},EV={key:4},wV={class:"list-disc list-inside space-y-1"},TV={key:0},IV={key:1},bV={key:2},CV={__name:"Records",setup(n){const e=ie({}),t=ie(!0);return Mn(async()=>{const r=Gr().currentUser;if(!r)return;const i=mp(),o=LT(i,`records/${r.uid}`),a=await VT(o);a.exists()&&(e.value=a.val()),t.value=!1}),(s,r)=>(J(),Z("section",tV,[r[5]||(r[5]=C("h1",{class:"text-4xl font-bold text-center mb-4"},"RECORDS",-1)),r[6]||(r[6]=C("div",{class:"h-1 w-43 bg-white mx-auto mb-10 rounded-full"},null,-1)),t.value?(J(),Z("div",nV,"Loading...")):Object.keys(e.value).length===0?(J(),Z("div",sV," No records yet. Start playing games! ")):(J(),Z("div",rV,[e.value.minesweeper?(J(),Z("div",iV,[r[0]||(r[0]=C("h2",{class:"text-2xl text-orange-500 mb-2"},"Minesweeper",-1)),C("ul",oV,[e.value.minesweeper.easy?(J(),Z("li",aV,"Easy: "+ye(e.value.minesweeper.easy)+"s",1)):Be("",!0),e.value.minesweeper.medium?(J(),Z("li",lV,"Medium: "+ye(e.value.minesweeper.medium)+"s",1)):Be("",!0),e.value.minesweeper.hard?(J(),Z("li",cV,"Hard: "+ye(e.value.minesweeper.hard)+"s",1)):Be("",!0)])])):Be("",!0),e.value.candycrush?(J(),Z("div",uV,[r[1]||(r[1]=C("h2",{class:"text-2xl text-orange-500 mb-2"},"Candy Crush",-1)),C("p",null,"Best Score: "+ye(e.value.candycrush),1)])):Be("",!0),e.value.tetris?(J(),Z("div",hV,[r[2]||(r[2]=C("h2",{class:"text-2xl text-orange-500 mb-2"},"Tetris",-1)),C("ul",dV,[e.value.tetris.easy?(J(),Z("li",fV,"Easy: "+ye(e.value.tetris.easy),1)):Be("",!0),e.value.tetris.hard?(J(),Z("li",pV,"Hard: "+ye(e.value.tetris.hard),1)):Be("",!0)])])):Be("",!0),e.value.snake?(J(),Z("div",mV,[r[3]||(r[3]=C("h2",{class:"text-2xl text-orange-500 mb-2"},"Snake",-1)),C("ul",gV,[e.value.snake.easy?(J(),Z("li",_V,"Easy: "+ye(e.value.snake.easy),1)):Be("",!0),e.value.snake.medium?(J(),Z("li",yV,"Medium: "+ye(e.value.snake.medium),1)):Be("",!0),e.value.snake.hard?(J(),Z("li",vV,"Hard: "+ye(e.value.snake.hard),1)):Be("",!0)])])):Be("",!0),e.value.spaceshooter?(J(),Z("div",EV,[r[4]||(r[4]=C("h2",{class:"text-2xl text-orange-500 mb-2"},"Space Shooter",-1)),C("ul",wV,[e.value.spaceshooter.easy?(J(),Z("li",TV,"Easy: "+ye(e.value.spaceshooter.easy),1)):Be("",!0),e.value.spaceshooter.medium?(J(),Z("li",IV,"Medium: "+ye(e.value.spaceshooter.medium),1)):Be("",!0),e.value.spaceshooter.hard?(J(),Z("li",bV,"Hard: "+ye(e.value.spaceshooter.hard),1)):Be("",!0)])])):Be("",!0)]))]))}},AV={class:"pt-20 pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 text-white font-sci-fi"},SV={key:0,class:"text-center py-8 sm:py-12 md:py-16"},RV={key:1,class:"mb-16 space-y-4 sm:space-y-6 md:space-y-8"},xV={class:"flex items-start space-x-3 sm:space-x-4"},PV={class:"flex-1 min-w-0"},kV={class:"flex items-start justify-between mb-2"},NV={class:"flex-1 min-w-0"},DV={class:"text-orange-500 font-bold text-sm sm:text-base truncate"},OV={class:"text-gray-400 text-xs sm:text-sm"},MV=["onClick"],LV={class:"text-white mb-3 sm:mb-4 text-sm sm:text-base break-words"},VV={class:"mt-3 sm:mt-4 border-t border-gray-700 pt-3 sm:pt-4"},FV={key:0,class:"space-y-3 sm:space-y-4 mb-3 sm:mb-4"},UV={class:"flex items-start space-x-2 sm:space-x-3"},BV={class:"flex-1 min-w-0"},$V={class:"flex items-center justify-between mb-1"},jV={class:"text-orange-400 text-xs sm:text-sm font-medium truncate"},HV={class:"text-gray-400 text-xs ml-2 flex-shrink-0"},WV={class:"text-gray-200 text-xs sm:text-sm break-words"},GV={class:"flex items-stretch mt-3"},qV=["onUpdate:modelValue","onKeyup"],zV=["onClick"],KV={class:"fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-t border-gray-700 z-50"},QV={class:"p-3 sm:p-4 pb-safe"},YV={class:"max-w-6xl mx-auto"},JV={__name:"Forum",setup(n){const e=ie([]),t=ie(""),s=ie(null);let r=null,i=null;const o=d=>{if(!d)return"";try{const p=d.toDate(),g=window.innerWidth<640;return p.toLocaleString("en-US",{month:"short",day:"numeric",year:g?"2-digit":"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch{return"Recent"}},a=(d,p="error")=>{const g=document.createElement("div");g.className=`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-lg z-50 ${p==="error"?"bg-red-600":"bg-green-600"} text-white font-sci-fi animate-fade-in text-center text-sm sm:text-base max-w-[90vw] sm:max-w-[400px]`,g.textContent=d,document.body.appendChild(g),setTimeout(()=>{g.classList.replace("animate-fade-in","animate-fade-out"),setTimeout(()=>g.remove(),300)},3e3)};Mn(()=>{r=qi(pn,p=>{s.value=p});const d=Fk(Oi(Bn,"forum"));i=Wk(d,p=>{e.value=p.docs.map(g=>{const y=g.data();return{id:g.id,...y,timestamp:y.timestamp||null,comments:y.comments||[],newComment:""}}).sort((g,y)=>!g.timestamp&&!y.timestamp?0:g.timestamp?y.timestamp?g.timestamp.toDate()-y.timestamp.toDate():1:-1)},p=>{console.error("Firestore error:",p)})}),Mc(()=>{r&&r(),i&&i()});const c=async()=>{if(!t.value.trim()){a("Post cannot be empty!");return}if(!s.value){a("Please sign in to post!");return}try{await Hk(Oi(Bn,"forum"),{content:t.value,author:s.value.displayName||"Anonymous",userId:s.value.uid,timestamp:Gk(),comments:[]}),t.value=""}catch(d){console.error("Error adding post:",d),a("Failed to create post")}},u=async d=>{if(!d.newComment.trim()){a("Comment cannot be empty!");return}if(!s.value){a("Please sign in to comment!");return}try{const p={content:d.newComment,author:s.value.displayName||"Anonymous",userId:s.value.uid,timestamp:new Date,id:Date.now().toString()};await $k(ha(Bn,"forum",d.id),{comments:qk(p)}),d.newComment=""}catch(p){console.error("Error adding comment:",p),a("Failed to add comment")}},h=async d=>{if(!s.value){a("Please sign in to delete posts");return}if(confirm("Are you sure you want to delete this post?"))try{await jk(ha(Bn,"forum",d)),a("Post deleted","success")}catch(p){console.error("Error deleting post:",p),a("Failed to delete post")}};return(d,p)=>(J(),Z("section",AV,[p[8]||(p[8]=C("h1",{class:"text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"},"FORUM",-1)),p[9]||(p[9]=C("div",{class:"h-1 w-24 sm:w-32 md:w-36 bg-white mx-auto mb-6 sm:mb-8 md:mb-10 rounded-full"},null,-1)),e.value.length===0?(J(),Z("div",SV,p[1]||(p[1]=[C("div",{class:"text-orange-500 text-3xl sm:text-4xl md:text-5xl mb-4"},[C("span",{class:"material-symbols-outlined"},"forum")],-1),C("h3",{class:"text-lg sm:text-xl md:text-2xl font-bold mb-2"},"No Posts Yet",-1),C("p",{class:"text-gray-400 max-w-md mx-auto text-sm sm:text-base px-4"},"Be the first to share your thoughts!",-1)]))):(J(),Z("div",RV,[(J(!0),Z(ft,null,kn(e.value,g=>{var y;return J(),Z("div",{key:g.id,class:"bg-gray-800 bg-opacity-50 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg"},[C("div",xV,[p[5]||(p[5]=C("div",{class:"w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0"},[C("span",{class:"material-symbols-outlined text-orange-500 text-lg sm:text-xl unselectable"},"person")],-1)),C("div",PV,[C("div",kV,[C("div",NV,[C("p",DV,ye(g.author),1),C("p",OV,ye(o(g.timestamp)),1)]),((y=s.value)==null?void 0:y.uid)===g.userId?(J(),Z("button",{key:0,onClick:b=>h(g.id),class:"text-gray-400 hover:text-orange-500 transition ml-2 flex-shrink-0"},p[2]||(p[2]=[C("span",{class:"material-symbols-outlined text-lg sm:text-xl"},"delete",-1)]),8,MV)):Be("",!0)]),C("p",LV,ye(g.content),1),C("div",VV,[g.comments&&g.comments.length>0?(J(),Z("div",FV,[(J(!0),Z(ft,null,kn(g.comments,b=>(J(),Z("div",{key:b.id,class:"bg-gray-700 bg-opacity-50 rounded-lg p-2 sm:p-3"},[C("div",UV,[p[3]||(p[3]=C("div",{class:"w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-orange-500 flex items-center justify-center flex-shrink-0"},[C("span",{class:"material-symbols-outlined text-orange-500 text-xs sm:text-sm unselectable"},"person")],-1)),C("div",BV,[C("div",$V,[C("p",jV,ye(b.author),1),C("p",HV,ye(o(b.timestamp)),1)]),C("p",WV,ye(b.content),1)])])]))),128))])):Be("",!0),C("div",GV,[vn(C("input",{"onUpdate:modelValue":b=>g.newComment=b,placeholder:"Write a comment...",onKeyup:BC(b=>u(g),["enter"]),class:"flex-1 bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm min-w-0"},null,40,qV),[[Hn,g.newComment]]),C("button",{onClick:b=>u(g),class:"bg-orange-500 hover:bg-orange-600 px-3 sm:px-4 py-2 rounded-r transition text-xs sm:text-sm font-medium whitespace-nowrap"},p[4]||(p[4]=[C("span",{class:"hidden sm:inline"},"Comment",-1),C("span",{class:"sm:hidden"},"💬",-1)]),8,zV)])])])])])}),128))])),C("div",KV,[C("div",QV,[C("div",YV,[C("form",{onSubmit:Uc(c,["prevent"]),class:"flex items-stretch space-x-2 sm:space-x-4"},[p[6]||(p[6]=C("div",{class:"w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0"},[C("span",{class:"material-symbols-outlined text-orange-500 text-sm sm:text-lg md:text-xl unselectable"},"person")],-1)),vn(C("input",{"onUpdate:modelValue":p[0]||(p[0]=g=>t.value=g),placeholder:"What's on your mind?",required:"",class:"flex-1 bg-gray-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-l focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm sm:text-base min-w-0"},null,512),[[Hn,t.value]]),p[7]||(p[7]=C("button",{type:"submit",class:"bg-orange-500 hover:bg-orange-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-r transition font-bold text-sm sm:text-base whitespace-nowrap"},[C("span",{class:"hidden sm:inline"},"POST"),C("span",{class:"sm:hidden"},"📝")],-1))],32)])])])]))}},XV=Jt(JV,[["__scopeId","data-v-047d6527"]]);async function yn(n,e,t){try{if(!n||!e||!t)return console.warn("Missing required parameters for giveBadge:",{uid:n,gameId:e,badgeId:t}),!1;console.log(`Attempting to give badge: ${t} to user: ${n} for game: ${e}`);const s=ha(Bn,"badges",e,"badgeList",t);if(!(await E_(s)).exists()){console.warn(`Badge ${t} does not exist in game ${e}. Creating badge definition...`);const c={first_blood:{name:"First Blood",description:"Complete your first game",iconUrl:"/src/assets/Games/Badge.png"},speedrunner_easy:{name:"Speed Demon",description:"Complete Easy in under 30 seconds",iconUrl:"/src/assets/Games/Badge.png"},fasthead:{name:"Fast Head",description:"Complete Medium in under 60 seconds",iconUrl:"/src/assets/Games/Badge.png"},speedrunner_hard:{name:"Lightning Fast",description:"Complete Hard in under 120 seconds",iconUrl:"/src/assets/Games/Badge.png"},survivor:{name:"Survivor",description:"Complete Hard difficulty",iconUrl:"/src/assets/Games/Badge.png"},flawless_victory:{name:"Flawless Victory",description:"Win without using flags",iconUrl:"/src/assets/Games/Badge.png"},perfectionist:{name:"Perfectionist",description:"Win 5 games without using flags",iconUrl:"/src/assets/Games/Badge.png"},veteran_player:{name:"Veteran Player",description:"Win 10 games",iconUrl:"/src/assets/Games/Badge.png"},space_first_blood:{name:"Space Pilot",description:"Complete your first space mission",iconUrl:"/src/assets/Games/Badge.png"},space_score_1000_easy:{name:"Rookie Scorer",description:"Score 1000 points on Easy difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_1000_medium:{name:"Cadet Scorer",description:"Score 1000 points on Medium difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_1000_hard:{name:"Veteran Scorer",description:"Score 1000 points on Hard difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_3000_easy:{name:"Elite Pilot",description:"Score 3000 points on Easy difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_3000_medium:{name:"Ace Pilot",description:"Score 3000 points on Medium difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_3000_hard:{name:"Commander",description:"Score 3000 points on Hard difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_5000_easy:{name:"Space Legend",description:"Score 5000 points on Easy difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_5000_medium:{name:"Galaxy Hero",description:"Score 5000 points on Medium difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_score_5000_hard:{name:"Universe Master",description:"Score 5000 points on Hard difficulty",iconUrl:"/src/assets/Games/Badge.png"},space_enemies_100:{name:"Squadron Destroyer",description:"Destroy 100 enemies in a single game",iconUrl:"/src/assets/Games/Badge.png"},space_enemies_300:{name:"Fleet Annihilator",description:"Destroy 300 enemies in a single game",iconUrl:"/src/assets/Games/Badge.png"}};if(c[t])await w_(s,c[t]),console.log(`Created badge definition for: ${t}`);else return console.error(`No definition found for badge: ${t}`),!1}const i=ha(Bn,"users",n,"badges",e),o=await E_(i);let a=[];if(o.exists()){if(a=o.data().badgeIds||[],a.includes(t))return console.log(`User ${n} already has badge ${t}`),!1}else console.log(`Creating new badge document for user ${n} and game ${e}`);return a.push(t),await w_(i,{badgeIds:a,lastUpdated:new Date().toISOString()},{merge:!0}),console.log(`Badge '${t}' successfully awarded to user ${n}`),!0}catch(s){return console.error("Error awarding badge:",s),!1}}const ZV="modulepreload",e4=function(n){return"/TapNPlayHost/"+n},Ey={},t4=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(u=>{if(u=e4(u),u in Ey)return;Ey[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":ZV,h||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,y)=>{p.addEventListener("load",g),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};async function ja(n,e,t=null,s=!0){const{getAuth:r}=await t4(async()=>{const{getAuth:g}=await Promise.resolve().then(()=>xx);return{getAuth:g}},void 0),o=r().currentUser;if(!o)return;const a=mp(),c=t?`records/${o.uid}/${n}/${t}`:`records/${o.uid}/${n}`,u=LT(a,c),d=(await VT(u)).val();(!d||(s?e>d:e<d))&&await qO(u,e)}const $s={FIRST_GAME:"first_blood",SPEEDRUNNER_EASY:"speedrunner_easy",SPEEDRUNNER_MEDIUM:"fasthead",SPEEDRUNNER_HARD:"speedrunner_hard",HARDCORE:"survivor",FLAWLESS:"flawless_victory",PERFECTIONIST:"perfectionist",VETERAN:"veteran_player"},_n={FIRST_GAME:"space_first_blood",SCORE_1000_EASY:"space_score_1000_easy",SCORE_1000_MEDIUM:"space_score_1000_medium",SCORE_1000_HARD:"space_score_1000_hard",SCORE_3000_EASY:"space_score_3000_easy",SCORE_3000_MEDIUM:"space_score_3000_medium",SCORE_3000_HARD:"space_score_3000_hard",SCORE_5000_EASY:"space_score_5000_easy",SCORE_5000_MEDIUM:"space_score_5000_medium",SCORE_5000_HARD:"space_score_5000_hard",ENEMIES_100:"space_enemies_100",ENEMIES_300:"space_enemies_300"},n4={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi overflow-hidden"},s4={class:"flex flex-col justify-center items-center flex-grow p-4"},r4={class:"text-lg mb-1"},i4={class:"text-lg mb-4"},o4=["onClick","onContextmenu"],a4={key:0},l4={key:1},c4={class:"text-red-500 font-bold mt-4"},u4={key:0,class:"mt-4 space-y-2"},h4={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},d4={class:"bg-white/10 rounded-lg p-4 space-y-2"},f4={class:"text-sm"},p4={class:"text-sm"},m4={class:"flex gap-2"},g4=["disabled"],_4=["disabled"],y4=["disabled"],v4={class:"flex gap-4"},_l=40,wy=3,E4={__name:"Minesweeper",setup(n){const e=Os(),t=ie(0),s=ie(null),r=ie([]),i=ie({gamesPlayed:0,gamesWon:0,bestTimes:{easy:null,medium:null,hard:null},firstGameCompleted:!1,perfectGames:0,consecutiveWins:0}),o={easy:{rows:9,cols:9,mines:9},medium:{rows:9,cols:18,mines:20},hard:{rows:11,cols:19,mines:40}},a=ie(o.medium),c=ie([]),u=ie(!0),h=ie(!0),d=ie(!1),p=ie(""),g=ie("New Game"),y=ie(!1),b=pt(()=>{const R=Math.floor(t.value/60),O=t.value%60;return`${String(R).padStart(2,"0")}:${String(O).padStart(2,"0")}`}),x=pt(()=>{const R=a.value;for(const[O,Q]of Object.entries(o))if(Q.rows===R.rows&&Q.cols===R.cols&&Q.mines===R.mines)return O;return"custom"});class L{constructor(O,Q){this.x=O,this.y=Q,this.isClicked=!1,this.isFlagged=!1,this.isMine=!1,this.isExplodedMine=!1,this.numNeighborMines=0}}function V(){const R=[];for(let O=0;O<a.value.rows;O++){R[O]=[];for(let Q=0;Q<a.value.cols;Q++)R[O][Q]=new L(O,Q)}c.value=R}function $(R,O){const Q=new Set;for(let he=-1;he<=1;he++)for(let M=-1;M<=1;M++){const Y=R+he,F=O+M;Y>=0&&Y<a.value.rows&&F>=0&&F<a.value.cols&&Q.add(`${Y},${F}`)}let ce=0;for(;ce<a.value.mines;){let he=Math.floor(Math.random()*a.value.rows),M=Math.floor(Math.random()*a.value.cols);!c.value[he][M].isMine&&!Q.has(`${he},${M}`)&&(c.value[he][M].isMine=!0,ce++)}}function z(){for(let R=0;R<a.value.rows;R++)for(let O=0;O<a.value.cols;O++)if(!c.value[R][O].isMine){let Q=0;for(let ce=-1;ce<=1;ce++)for(let he=-1;he<=1;he++){const M=R+ce,Y=O+he;M>=0&&M<a.value.rows&&Y>=0&&Y<a.value.cols&&c.value[M][Y].isMine&&Q++}c.value[R][O].numNeighborMines=Q}}function ge(){switch(a.value.mines){case 9:return"easy";case 20:return"medium";case 40:return"hard";default:return"custom"}}function ue(R,O){if(!(!u.value||c.value[R][O].isFlagged)){if(g.value="Restart",h.value){V();do $(R,O);while(c.value[R][O].isMine&&!d.value);z(),Ye(),h.value=!1,y.value=!1}if(E(R,O),c.value[R][O].isMine)c.value[R][O].isExplodedMine=!0,S(),p.value="You've lost!",_e(),u.value=!1,i.value.gamesPlayed++,i.value.consecutiveWins=0,ve();else if(P()){p.value="Congrats! You've won!",_e(),u.value=!1,i.value.gamesPlayed++,i.value.gamesWon++,i.value.consecutiveWins++;const Q=ge(),ce=t.value;(!i.value.bestTimes[Q]||ce<i.value.bestTimes[Q])&&(i.value.bestTimes[Q]=ce),y.value||i.value.perfectGames++,ve();const M=Gr().currentUser;M&&(A(M.uid,Q,t.value,!y.value),ja("minesweeper",ce,Q,!1))}}}async function A(R,O,Q,ce){try{const he=[];i.value.firstGameCompleted||await yn(R,"minesweeper",$s.FIRST_GAME)&&(he.push({name:"First Blood",description:"Complete your first game"}),i.value.firstGameCompleted=!0),O==="easy"&&Q<=30&&await yn(R,"minesweeper",$s.SPEEDRUNNER_EASY)&&he.push({name:"Speed Demon",description:"Complete Easy in under 30 seconds"}),O==="medium"&&Q<=60&&await yn(R,"minesweeper",$s.SPEEDRUNNER_MEDIUM)&&he.push({name:"Fast Head",description:"Complete Medium in under 60 seconds"}),O==="hard"&&Q<=120&&await yn(R,"minesweeper",$s.SPEEDRUNNER_HARD)&&he.push({name:"Lightning Fast",description:"Complete Hard in under 120 seconds"}),O==="hard"&&await yn(R,"minesweeper",$s.HARDCORE)&&he.push({name:"Survivor",description:"Complete Hard difficulty"}),ce&&await yn(R,"minesweeper",$s.FLAWLESS)&&he.push({name:"Flawless Victory",description:"Win without using flags"}),i.value.perfectGames>=5&&await yn(R,"minesweeper",$s.PERFECTIONIST)&&he.push({name:"Perfectionist",description:"Win 5 games without using flags"}),i.value.gamesWon>=10&&await yn(R,"minesweeper",$s.VETERAN)&&he.push({name:"Veteran Player",description:"Win 10 games"}),he.length>0&&(r.value=he,setTimeout(()=>{r.value=[]},5e3))}catch(he){console.error("Badge check failed:",he)}}function E(R,O){const Q=c.value[R][O];if(!(Q.isClicked||Q.isFlagged)&&(Q.isClicked=!0,Q.isFlagged=!1,Q.numNeighborMines===0&&!Q.isMine))for(let ce=-1;ce<=1;ce++)for(let he=-1;he<=1;he++){const M=R+ce,Y=O+he;M>=0&&M<a.value.rows&&Y>=0&&Y<a.value.cols&&E(M,Y)}}function I(R,O){if(!u.value)return;const Q=c.value[R][O];Q.isClicked||(Q.isFlagged=!Q.isFlagged,y.value=!0)}function S(){c.value.flat().forEach(R=>{R.isMine&&(R.isClicked=!0)})}function P(){return c.value.flat().every(R=>R.isMine||R.isClicked)}function N(){_e(),p.value="",u.value=!0,h.value=!0,y.value=!1,r.value=[],V()}function T(R){a.value=o[R],N()}function Ye(){t.value=0,s.value=setInterval(()=>t.value++,1e3)}function _e(){clearInterval(s.value),s.value=null,g.value="New Game"}function fe(){e.push("/games")}function ve(){typeof window<"u"&&localStorage.setItem("minesweeper_stats",JSON.stringify(i.value))}function Te(){const R=localStorage.getItem("minesweeper_stats");R&&(i.value={...i.value,...JSON.parse(R)})}const ot=pt(()=>c.value.flat());function rt(R){return R.isExplodedMine?"bg-red-600":R.isMine&&R.isClicked?"bg-black":R.isClicked?"bg-yellow-300":R.isFlagged?"bg-red-500":"bg-green-500"}const it=pt(()=>c.value.flat().filter(R=>R.isFlagged).length);return Mn(()=>{Te(),V()}),(R,O)=>(J(),Z("section",n4,[C("div",s4,[C("p",r4,"Timer: "+ye(b.value),1),C("p",i4,"Flags: "+ye(it.value)+"/"+ye(a.value.mines),1),C("div",{class:"rounded-2xl p-2",style:Yo({width:`${a.value.cols*_l+(a.value.cols-1)+wy*a.value.cols}px`,height:`${a.value.rows*_l+(a.value.rows-1)+wy*a.value.rows}px`})},[C("div",{id:"board",class:"grid gap-[3px]",style:Yo({gridTemplateColumns:`repeat(${a.value.cols}, ${_l}px)`,gridTemplateRows:`repeat(${a.value.rows}, ${_l}px)`})},[(J(!0),Z(ft,null,kn(ot.value,(Q,ce)=>(J(),Z("div",{key:ce,class:ut(["tile",Q.isClicked?"revealed":"",Q.isFlagged?"flagged":"",rt(Q)]),onClick:he=>ue(Q.x,Q.y),onContextmenu:Uc(he=>I(Q.x,Q.y),["prevent"])},[Q.isClicked&&!Q.isMine&&Q.numNeighborMines>0?(J(),Z("span",a4,ye(Q.numNeighborMines),1)):Be("",!0),Q.isClicked&&Q.isMine?(J(),Z("span",l4,ye(Q.isExplodedMine?"💥":"💣"),1)):Be("",!0)],42,o4))),128))],4)],4),C("p",c4,ye(p.value),1),r.value.length>0?(J(),Z("div",u4,[(J(!0),Z(ft,null,kn(r.value,(Q,ce)=>(J(),Z("div",{key:ce,class:"bg-yellow-600 text-black px-4 py-2 rounded-lg animate-pulse"}," 🏆 Achievement Unlocked: "+ye(Q.name)+"! ",1))),128))])):Be("",!0)]),C("div",h4,[O[4]||(O[4]=C("h2",{class:"text-3xl font-bold"},"Minesweeper",-1)),O[5]||(O[5]=C("p",{class:"text-sm"},[ht("By: "),C("span",{class:"text-orange-400"},"Denys Novosad")],-1)),C("div",d4,[O[3]||(O[3]=C("h3",{class:"text-lg font-bold"},"Game Stats",-1)),C("p",f4,"Games Played: "+ye(i.value.gamesPlayed),1),C("p",p4,"Games Won: "+ye(i.value.gamesWon),1)]),C("div",m4,[C("button",{onClick:O[0]||(O[0]=Q=>T("easy")),disabled:u.value&&!h.value,class:ut(["px-4 py-2 rounded-full transition",u.value&&!h.value?"bg-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 cursor-pointer",x.value==="easy"?"ring-2 ring-white":""])}," Easy ",10,g4),C("button",{onClick:O[1]||(O[1]=Q=>T("medium")),disabled:u.value&&!h.value,class:ut(["px-4 py-2 rounded-full transition",u.value&&!h.value?"bg-gray-500 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700 cursor-pointer",x.value==="medium"?"ring-2 ring-white":""])}," Medium ",10,_4),C("button",{onClick:O[2]||(O[2]=Q=>T("hard")),disabled:u.value&&!h.value,class:ut(["px-4 py-2 rounded-full transition",u.value&&!h.value?"bg-gray-500 cursor-not-allowed":"bg-red-600 hover:bg-red-700 cursor-pointer",x.value==="hard"?"ring-2 ring-white":""])}," Hard ",10,y4)]),C("div",v4,[C("button",{onClick:N,class:"flex-1 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition cursor-pointer"},ye(g.value),1),C("button",{onClick:fe,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-800 transition cursor-pointer"}," Close ")])])]))}},w4=Jt(E4,[["__scopeId","data-v-3d606732"]]),T4={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi overflow-hidden"},I4={class:"flex flex-col justify-center items-center flex-grow p-4"},b4={class:"text-lg mb-1"},To=9,Io=9,C4={__name:"CandyCrush",setup(n){const e=Os(),t=ie(0),s=["Blue","Orange","Green","Yellow","Red","Purple"];let r=[],i=null,o=null;function a(){return s[Math.floor(Math.random()*s.length)]}function c(){const y=document.getElementById("board");y.innerHTML="",r=[],t.value=0;for(let b=0;b<To;b++){const x=[];for(let L=0;L<Io;L++){const V=document.createElement("img");V.id=`${b}-${L}`,V.draggable=!0,V.classList.add("tile");let $;do $=a();while(L>1&&x[L-1].src.endsWith(`${$}.png`)&&x[L-2].src.endsWith(`${$}.png`)||b>1&&r[b-1][L].src.endsWith(`${$}.png`)&&r[b-2][L].src.endsWith(`${$}.png`));V.src=`/TapNPlayHost/public/candycr/${$}.png`,V.addEventListener("dragstart",()=>i=V),V.addEventListener("dragover",z=>z.preventDefault()),V.addEventListener("drop",()=>o=V),V.addEventListener("dragend",u),y.append(V),x.push(V)}r.push(x)}}function u(){if(!i||!o)return;const[y,b]=i.id.split("-").map(Number),[x,L]=o.id.split("-").map(Number);if(Math.abs(y-x)+Math.abs(b-L)!==1)return;const V=(L-b)*41,$=(x-y)*41;i.style.transition="transform 0.3s ease",o.style.transition="transform 0.3s ease",i.style.transform=`translate(${V}px, ${$}px)`,o.style.transform=`translate(${-V}px, ${-$}px)`;const z=()=>{i.style.transition="",o.style.transition="",i.style.transform="",o.style.transform="";const ge=i.src;i.src=o.src,o.src=ge,i.removeEventListener("transitionend",z),i=o=null};i.addEventListener("transitionend",z)}function h(){for(let y=0;y<To;y++)for(let b=0;b<Io-2;b++){const[x,L,V]=[r[y][b],r[y][b+1],r[y][b+2]];x.src===L.src&&L.src===V.src&&!x.src.includes("blank")&&([x,L,V].forEach($=>{$.classList.add("vanish"),setTimeout(()=>{$.src="/TapNPlayHost/public/candycr/blank.png",$.classList.remove("vanish")},300)}),t.value+=30)}for(let y=0;y<Io;y++)for(let b=0;b<To-2;b++){const[x,L,V]=[r[b][y],r[b+1][y],r[b+2][y]];x.src===L.src&&L.src===V.src&&!x.src.includes("blank")&&([x,L,V].forEach($=>{$.classList.add("vanish"),setTimeout(()=>{$.src="/TapNPlayHost/public/candycr/blank.png",$.classList.remove("vanish")},300)}),t.value+=30)}}function d(){for(let y=0;y<Io;y++){let b=To-1;for(let x=To-1;x>=0;x--)r[x][y].src.includes("blank")||(r[b][y].src=r[x][y].src,b--);for(let x=b;x>=0;x--)r[x][y].src="/TapNPlayHost/public/candycr/blank.png"}}function p(){for(let y=0;y<Io;y++)r[0][y].src.includes("blank")&&(r[0][y].src=`/TapNPlayHost/public/candycr/${a()}.png`)}function g(){ja("candycrush",t.value,null,!0),e.push("/games")}return Mn(()=>{c(),setInterval(()=>{h(),d(),p()},100)}),(y,b)=>(J(),Z("section",T4,[C("div",I4,[C("p",b4,"Score: "+ye(t.value),1),b[0]||(b[0]=C("div",{class:"rounded-2xl bg-gray-800 p-2",style:{width:"380px",height:"450px"}},[C("div",{id:"board",class:"grid grid-cols-9 gap-[2px]",style:{width:"360px",height:"360px",margin:"0 auto"}})],-1))]),C("div",{class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},[b[1]||(b[1]=C("h2",{class:"text-3xl font-bold"},"Candy Crush",-1)),b[2]||(b[2]=C("p",{class:"text-sm"},[ht("By: "),C("span",{class:"text-orange-400"},"Oleksii Malanii")],-1)),C("div",{class:"flex gap-4"},[C("button",{onClick:g,class:"flex-1 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition"}," Save and Exit ")])])]))}},A4=Jt(C4,[["__scopeId","data-v-219ae361"]]),S4={class:"flex h-screen font-sci-fi text-white"},R4={class:"flex flex-col items-center justify-center flex-1"},x4={class:"text-lg mb-1"},P4={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},k4={class:"flex gap-2"},N4=["disabled"],D4=["disabled"],O4={key:0,class:"bg-gray-700 rounded-lg p-4"},M4={class:"flex gap-4"},br=12,vh=20,ss=24,L4={__name:"Tetris",setup(n){const e=Os(),t=ie(null),s=ie(null),r=ie(null),i=ie(null),o=ie(0),a=ie(!1),c=ie(!1),u=ie(!1),h=ie("easy"),d={easy:{dropSpeed:300,showNext:!0},hard:{dropSpeed:150,showNext:!1}};let p=[],g=null,y=null,b=0,x=0,L=null;const V={1:"#00CED1",2:"#FFD700",3:"#9370DB",4:"#32CD32",5:"#FF6347",6:"#4169E1",7:"#FF8C00"},$={I:[[1,1,1,1]],O:[[2,2],[2,2]],T:[[0,3,0],[3,3,3]],S:[[0,4,4],[4,4,0]],Z:[[5,5,0],[0,5,5]],J:[[6,0,0],[6,6,6]],L:[[0,0,7],[7,7,7]]};Mn(()=>{r.value=t.value.getContext("2d"),z(),document.addEventListener("keydown",M)});function z(){s.value&&(i.value=s.value.getContext("2d"))}function ge(F,j){const oe=[];for(;j--;)oe.push(new Array(F).fill(0));return oe}function ue(){const F="IOTSZJL",j=F[Math.floor(Math.random()*F.length)],oe=$[j];return{pos:{x:Math.floor(br/2)-Math.ceil(oe[0].length/2),y:-oe.length+1},matrix:JSON.parse(JSON.stringify(oe)),type:j}}function A(F,j,oe=r.value,v=ss){F.forEach((w,k)=>{w.forEach((B,W)=>{const H=k+j.y;if(B!==0&&H>=0){oe.fillStyle=V[B];const se=(W+j.x)*v,te=H*v;oe.beginPath(),oe.roundRect(se+1,te+1,v-2,v-2,4),oe.fill(),oe.strokeStyle="rgba(255, 255, 255, 0.3)",oe.lineWidth=1,oe.stroke()}})})}function E(){for(let F=0;F<vh;F++)for(let j=0;j<br;j++)r.value.fillStyle=(j+F)%2===0?"#2e2e2e":"#1f1f1f",r.value.fillRect(j*ss,F*ss,ss,ss)}function I(){E(),p.forEach((F,j)=>{F.forEach((oe,v)=>{if(oe!==0){r.value.fillStyle=c.value?"#666666":V[oe];const w=v*ss,k=j*ss;r.value.beginPath(),r.value.roundRect(w+1,k+1,ss-2,ss-2,4),r.value.fill(),r.value.strokeStyle="rgba(255, 255, 255, 0.3)",r.value.lineWidth=1,r.value.stroke()}})}),g&&A(g.matrix,g.pos)}function S(){if(!y||h.value!=="easy"||(!i.value&&s.value&&(i.value=s.value.getContext("2d")),!i.value))return;i.value.fillStyle="#1f1f1f",i.value.fillRect(0,0,96,96);const F=y.matrix[0].length,j=y.matrix.length,oe=Math.floor((4-F)/2),v=Math.floor((4-j)/2);A(y.matrix,{x:oe,y:v},i.value,24)}function P(F,j){j.matrix.forEach((oe,v)=>{oe.forEach((w,k)=>{w!==0&&v+j.pos.y>=0&&(F[v+j.pos.y][k+j.pos.x]=w)})})}function N(F,j){const{matrix:oe,pos:v}=j;for(let w=0;w<oe.length;++w)for(let k=0;k<oe[w].length;++k)if(oe[w][k]!==0){const B=w+v.y,W=k+v.x;if(B<0||B>=vh||W<0||W>=br||B>=0&&F[B][W]!==0)return!0}return!1}function T(){if(g.pos.y++,N(p,g)){if(g.pos.y--,P(p,g),Ye()){rt();return}_e(),fe()}b=0}function Ye(){for(let F=0;F<br;F++)if(p[0][F]!==0)return c.value=!0,!0;return!1}function _e(){if(g=y||ue(),y=ue(),h.value==="easy"&&Zo(()=>{S()}),N(p,g)&&g.pos.y>=0){rt();return}}function fe(){let F=0;e:for(let j=p.length-1;j>=0;--j){for(let oe=0;oe<br;++oe)if(p[j][oe]===0)continue e;p.splice(j,1)[0],p.unshift(new Array(br).fill(0)),o.value+=10,F++,++j}F>0&&(u.value=!0,setTimeout(()=>u.value=!1,200))}function ve(F=0){const j=F-x;x=F,b+=j;const oe=d[h.value].dropSpeed;b>oe&&T(),I(),a.value&&(L=requestAnimationFrame(ve))}function Te(F){h.value=F,F==="easy"&&Zo(()=>{z(),y&&S()}),a.value&&(rt(),ot())}function ot(){o.value=0,c.value=!1,u.value=!1,p=ge(br,vh),y=ue(),_e(),b=0,x=0,a.value=!0,L=requestAnimationFrame(ve)}function rt(){R(),a.value=!1,L&&(cancelAnimationFrame(L),L=null)}function it(){a.value?rt():ot()}const R=()=>{Gr().currentUser&&ja("tetris",o.value,h.value,!0)};function O(F){g.pos.x+=F,N(p,g)&&(g.pos.x-=F)}function Q(F){const j=F.length,oe=new Array(F[0].length).fill(0).map(()=>new Array(j).fill(0));for(let v=0;v<j;v++)for(let w=0;w<F[v].length;w++)oe[w][j-1-v]=F[v][w];return oe}function ce(F){const j=F.length,oe=new Array(F[0].length).fill(0).map(()=>new Array(j).fill(0));for(let v=0;v<j;v++)for(let w=0;w<F[v].length;w++)oe[F[v].length-1-w][v]=F[v][w];return oe}function he(F=!0){const j=g.matrix;g.matrix=F?Q(g.matrix):ce(g.matrix),N(p,g)&&(g.matrix=j)}function M(F){!a.value||!g||e.currentRoute.value.path.includes("/games/tetris")&&(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","s","S","a","A","d","D","ц","Ц","і","І","ф","Ф","в","В","q","Q","e","E","й","Й","у","У"].includes(F.key)&&F.preventDefault(),["ArrowLeft","a","A","ф","Ф"].includes(F.key)&&O(-1),["ArrowRight","d","D","в","В"].includes(F.key)&&O(1),["ArrowDown","s","S","і","І"].includes(F.key)&&T(),["ArrowUp","w","W","ц","Ц"].includes(F.key)&&he(!0),["q","Q","й","Й"].includes(F.key)&&he(!1),["e","E","у","У"].includes(F.key)&&he(!0))}Mc(()=>{document.removeEventListener("keydown",M),L&&cancelAnimationFrame(L)});function Y(){rt(),e.push("/games")}return(F,j)=>(J(),Z("div",S4,[C("div",R4,[C("div",x4,"Score: "+ye(o.value),1),C("div",{class:ut(["rounded-2xl p-2 transition-all duration-200",c.value?"bg-red-600 shadow-[0_0_30px_#ff0000]":u.value?"bg-blue-600 shadow-[0_0_30px_#0000FF]":"bg-blue-800"]),style:{width:"310px",height:"495px"}},[C("canvas",{ref_key:"canvas",ref:t,width:"288",height:"480",class:"block mx-auto rounded-lg"},null,512)],2)]),C("div",P4,[j[3]||(j[3]=C("h2",{class:"text-3xl font-bold"},"Tetris",-1)),j[4]||(j[4]=C("p",{class:"text-sm"},[ht("By: "),C("span",{class:"text-orange-400"},"Andrii Kohut")],-1)),C("div",k4,[C("button",{onClick:j[0]||(j[0]=oe=>Te("easy")),disabled:a.value,class:ut(["px-4 py-2 rounded-full transition",a.value?"bg-gray-500 cursor-not-allowed":"bg-green-600 hover:bg-green-700 cursor-pointer",h.value==="easy"?"ring-2 ring-white":""])}," Easy ",10,N4),C("button",{onClick:j[1]||(j[1]=oe=>Te("hard")),disabled:a.value,class:ut(["px-4 py-2 rounded-full transition",a.value?"bg-gray-500 cursor-not-allowed":"bg-red-500 hover:bg-red-600 cursor-pointer",h.value==="hard"?"ring-2 ring-white":""])}," Hard ",10,D4)]),h.value==="easy"?(J(),Z("div",O4,[j[2]||(j[2]=C("h3",{class:"text-sm mb-2"},"Next Piece:",-1)),C("canvas",{ref_key:"previewCanvas",ref:s,width:"96",height:"96",class:"bg-gray-800 rounded border-2 border-gray-600"},null,512)])):Be("",!0),C("div",M4,[C("button",{onClick:it,class:ut(["flex-1 px-4 py-2 rounded-full transition cursor-pointer",a.value?"bg-blue-500 hover:bg-blue-600":"bg-green-500 hover:bg-green-600"])},ye(a.value?"Stop":"Start"),3),C("button",{onClick:Y,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition cursor-pointer"}," Close ")])])]))}},V4=Jt(L4,[["__scopeId","data-v-2d3c9205"]]),F4={class:"flex h-screen text-white font-sci-fi"},U4={class:"flex flex-col items-center justify-center flex-1"},B4={class:"text-lg mb-1"},$4={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},j4={class:"flex gap-2"},H4=["disabled"],W4=["disabled"],G4=["disabled"],q4={class:"flex gap-4"},yt=25,z4=500,K4={__name:"Snake",setup(n){const e=Os(),t=ie(null),s=ie(null),r=z4/yt;let i=null;const o={easy:150,medium:120,hard:90},a=ie(o.medium),c=ie("medium"),u=ie([{x:5,y:5},{x:4,y:5},{x:3,y:5}]),h=ie({x:1,y:0}),d=ie({x:-1,y:-1,emoji:"🍎"}),p=ie(0),g=ie(!1),y=ie(!1),b=ie(!1),x=ie(!1),L=ie({x:1,y:0}),V=["🍇","🍈","🍉","🍊","🍋","🍋‍","🍌","🍍","🥭","🍎","🍏","🍐","🍑","🍒","🍓","🥝","🍅","🥥"],$=()=>{for(let _e=0;_e<r;_e++)for(let fe=0;fe<r;fe++)s.value.fillStyle=(fe+_e)%2===0?"#2e2e2e":"#1f1f1f",s.value.fillRect(fe*yt,_e*yt,yt,yt)},z=()=>{$(),y.value&&(s.value.font=`${yt}px Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji`,s.value.textAlign="center",s.value.textBaseline="middle",s.value.fillText(d.value.emoji,d.value.x*yt+yt/2,d.value.y*yt+yt/2)),u.value.forEach((_e,fe)=>{s.value.beginPath();const ve=6,Te=fe===0,ot=fe===u.value.length-1;if(s.value.fillStyle=x.value?Te?"#700000":"#c30000":Te?"#009700":"lime",s.value.roundRect(_e.x*yt,_e.y*yt,yt,yt,Te||ot?ve:2),s.value.fill(),Te){const rt=yt/2,it=_e.x*yt+yt/2,R=_e.y*yt+yt/2;s.value.font=`bold ${rt}px Arial`,s.value.textAlign="center",s.value.textBaseline="middle",s.value.fillStyle=x.value?"black":"";const O=x.value?"XX":"👀";h.value.x===1?s.value.fillText(O,it+5,R):h.value.x===-1?s.value.fillText(O,it-5,R):h.value.y===-1?s.value.fillText(O,it,R-5):s.value.fillText(O,it,R+5)}})},ge=()=>{if(y.value)return;let _e,fe;do _e=Math.floor(Math.random()*r),fe=Math.floor(Math.random()*r);while(u.value.some(ve=>ve.x===_e&&ve.y===fe));d.value={x:_e,y:fe,emoji:V[Math.floor(Math.random()*V.length)]},y.value=!0},ue=_e=>{c.value=_e,a.value=o[_e],g.value&&(E(),A())},A=()=>{S(),i=setInterval(P,a.value),g.value=!0},E=()=>{clearInterval(i),T(),i=null,g.value=!1},I=()=>{g.value?E():A()},S=()=>{u.value=[{x:5,y:5},{x:4,y:5},{x:3,y:5}],L.value={x:1,y:0},h.value={x:1,y:0},p.value=0,b.value=!1,x.value=!1,y.value=!1,ge(),z()},P=()=>{h.value={...L.value};const _e={x:u.value[0].x+h.value.x,y:u.value[0].y+h.value.y};if(_e.x<0||_e.y<0||_e.x>=r||_e.y>=r||u.value.some(fe=>fe.x===_e.x&&fe.y===_e.y)){x.value=!0,z(),E();return}u.value.unshift(_e),_e.x===d.value.x&&_e.y===d.value.y?(p.value+=1,y.value=!1,ge(),b.value=!0,setTimeout(()=>b.value=!1,150)):u.value.pop(),z()},N=()=>{E(),e.push("/games")},T=()=>{Gr().currentUser&&ja("snake",p.value,c.value,!0)},Ye=_e=>{switch(_e.key){case"ArrowUp":case"w":case"W":case"ц":case"Ц":h.value.y===0&&(L.value={x:0,y:-1});break;case"ArrowDown":case"s":case"S":case"і":case"І":h.value.y===0&&(L.value={x:0,y:1});break;case"ArrowLeft":case"a":case"A":case"ф":case"Ф":h.value.x===0&&(L.value={x:-1,y:0});break;case"ArrowRight":case"d":case"D":case"в":case"В":h.value.x===0&&(L.value={x:1,y:0});break}};return Mn(()=>{s.value=t.value.getContext("2d"),z(),window.addEventListener("keydown",Ye)}),Od(()=>{E(),window.removeEventListener("keydown",Ye)}),(_e,fe)=>(J(),Z("div",F4,[C("div",U4,[C("div",B4,"Score: "+ye(p.value),1),C("canvas",{ref_key:"canvas",ref:t,width:"500",height:"500",class:ut(["bg-black border-4 rounded-lg transition-shadow duration-200",x.value?"border-red-500 shadow-[0_0_20px_#ff0000]":b.value?"border-blue-600 shadow-[0_0_20px_#0000FF]":"border-blue-800 "])},null,2)]),C("div",$4,[fe[3]||(fe[3]=C("h2",{class:"text-3xl font-bold"},"Snake Game",-1)),fe[4]||(fe[4]=C("p",{class:"text-sm"},[ht("By: "),C("span",{class:"text-orange-400"},"Yaroslav Labunskiy")],-1)),C("div",j4,[C("button",{onClick:fe[0]||(fe[0]=ve=>ue("easy")),disabled:g.value,class:ut(["px-4 py-2 rounded-full transition",g.value?"bg-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 cursor-pointer",c.value==="easy"?"ring-2 ring-white":""])}," Easy ",10,H4),C("button",{onClick:fe[1]||(fe[1]=ve=>ue("medium")),disabled:g.value,class:ut(["px-4 py-2 rounded-full transition",g.value?"bg-gray-500 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700 cursor-pointer",c.value==="medium"?"ring-2 ring-white":""])}," Medium ",10,W4),C("button",{onClick:fe[2]||(fe[2]=ve=>ue("hard")),disabled:g.value,class:ut(["px-4 py-2 rounded-full transition",g.value?"bg-gray-500 cursor-not-allowed":"bg-red-500 hover:bg-red-800 cursor-pointer",c.value==="hard"?"ring-2 ring-white":""])}," Hard ",10,G4)]),C("div",q4,[C("button",{onClick:I,class:ut(["flex-1 px-4 py-2 rounded-full transition",g.value?"bg-blue-500 hover:bg-blue-600":"bg-green-500 hover:bg-green-600 cursor-pointer"])},ye(g.value?"Stop":"Start"),3),C("button",{onClick:N,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition cursor-pointer"}," Close ")])])]))}},Q4={class:"flex h-screen font-sci-fi text-white bg-gray-900"},Y4={class:"flex flex-col items-center justify-center flex-1"},J4={class:"text-lg mb-1"},X4={key:0,class:"mt-4 space-y-2"},Z4={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},eF={class:"bg-white/10 rounded-lg p-4 space-y-2"},tF={class:"text-sm"},nF={class:"text-sm"},sF={class:"flex gap-2"},rF=["disabled"],iF=["disabled"],oF=["disabled"],aF={class:"flex gap-4"},Xt=600,lF={__name:"SpaceShooter",setup(n){const e=Os(),t=ie(null),s=ie(null),r={easy:{enemySpeed:2,spawnRate:.04,bulletSpeed:8},medium:{enemySpeed:3,spawnRate:.06,bulletSpeed:7},hard:{enemySpeed:4,spawnRate:.08,bulletSpeed:6}},i=ie({player:{x:Xt/2-15,y:Xt-60,width:30,height:40},bullets:[],enemies:[],keys:{},animationId:null,difficulty:r.medium,lastShotTime:0,shootInterval:150,isShooting:!1,gameOverTriggered:!1,stars:[],gameOverAnimation:{active:!1,startTime:0,duration:3e3,particles:[]}}),o=ie(0),a=ie(!1),c=ie("medium"),u=ie(!1),h=ie(!1),d=ie([]),p=ie({gamesPlayed:0,highScore:0,enemiesDestroyed:0,enemiesDestroyedThisGame:0,firstGameCompleted:!1,consecutiveWins:0,hardModeWins:0,perfectGames:0}),g=()=>{const R=[];for(let O=0;O<80;O++)R.push({x:Math.random()*Xt,y:Math.random()*Xt,size:Math.random()*2+.5,speed:Math.random()*.8+.3,brightness:Math.random()*.8+.2});i.value.stars=R},y=()=>{const R=[],O={x:i.value.player.x+i.value.player.width/2,y:i.value.player.y+i.value.player.height/2};for(let Q=0;Q<20;Q++)R.push({x:O.x,y:O.y,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:Math.random()*4+2,color:Math.random()>.5?"#ff4444":"#ffaa00",life:1});i.value.gameOverAnimation.particles=R},b=()=>{const R=s.value.createLinearGradient(0,0,0,Xt);R.addColorStop(0,"#0a0a2e"),R.addColorStop(.5,"#16213e"),R.addColorStop(1,"#0f0f23"),s.value.fillStyle=R,s.value.fillRect(0,0,Xt,Xt),s.value.save(),i.value.stars.forEach(O=>{s.value.fillStyle=`rgba(255, 255, 255, ${O.brightness})`,s.value.beginPath(),s.value.arc(O.x,O.y,O.size,0,Math.PI*2),s.value.fill(),O.y+=O.speed,O.y>Xt&&(O.y=-5,O.x=Math.random()*Xt)}),s.value.restore()},x=()=>{if(i.value.gameOverAnimation.active)return;const R=i.value.player;s.value.save(),s.value.translate(R.x+R.width/2,R.y+R.height/2);const O=s.value.createLinearGradient(0,-20,0,20);O.addColorStop(0,u.value?"#ff4444":"#FFFFFF"),O.addColorStop(1,u.value?"#aa0000":"#888888"),s.value.fillStyle=O,s.value.beginPath(),s.value.moveTo(0,-20),s.value.lineTo(-15,20),s.value.lineTo(-8,15),s.value.lineTo(8,15),s.value.lineTo(15,20),s.value.closePath(),s.value.fill(),s.value.strokeStyle=u.value?"#444444":"#110000",s.value.lineWidth=1,s.value.stroke(),s.value.fillStyle="#151515",s.value.beginPath(),s.value.arc(0,-4,5,0,Math.PI*2),s.value.fill(),s.value.fillStyle="#AAAAAA",s.value.strokeStyle="#000000",s.value.fillRect(-12,10,4,12),s.value.fillRect(8,10,4,12),a.value&&!u.value&&(s.value.fillStyle="#ffaa00",s.value.fillRect(-11,22,2,Math.random()*8+5),s.value.fillStyle="#ff6600",s.value.fillRect(9,22,2,Math.random()*8+5)),s.value.fillStyle="#AAAAAA",s.value.beginPath(),s.value.moveTo(-35,5),s.value.lineTo(-15,0),s.value.lineTo(-5,15),s.value.closePath(),s.value.fill(),s.value.beginPath(),s.value.moveTo(35,5),s.value.lineTo(15,0),s.value.lineTo(5,15),s.value.closePath(),s.value.fill(),s.value.fillStyle="#666666",s.value.fillRect(-25,-3,5,10),s.value.fillRect(20,-3,5,10),s.value.restore()},L=()=>{i.value.bullets.forEach(R=>{s.value.save();const O=s.value.createRadialGradient(R.x+R.width/2,R.y+R.height/2,0,R.x+R.width/2,R.y+R.height/2,8);O.addColorStop(0,"#ffff44"),O.addColorStop(.7,"#ffaa00"),O.addColorStop(1,"transparent"),s.value.fillStyle=O,s.value.fillRect(R.x-2,R.y-2,R.width+4,R.height+4),s.value.fillStyle="#ffff00",s.value.fillRect(R.x,R.y,R.width,R.height),s.value.fillStyle="#ffaa00",s.value.fillRect(R.x+.5,R.y+R.height,R.width-1,3),s.value.restore()})},V=()=>{i.value.enemies.forEach(R=>{s.value.save(),s.value.translate(R.x+R.width/2,R.y+R.height/2);const O=s.value.createLinearGradient(0,-15,0,15);R.type==="fast"?(O.addColorStop(0,"#ff0088"),O.addColorStop(1,"#aa0044")):(O.addColorStop(0,"#ff4444"),O.addColorStop(1,"#aa0000")),s.value.fillStyle=O,s.value.beginPath(),s.value.moveTo(0,15),s.value.lineTo(-12,-15),s.value.lineTo(-6,-10),s.value.lineTo(6,-10),s.value.lineTo(12,-15),s.value.closePath(),s.value.fill(),s.value.strokeStyle=R.type==="fast"?"#ffaaff":"#ffaaaa",s.value.lineWidth=1,s.value.stroke(),s.value.fillStyle="#ff6600",s.value.fillRect(-8,-18,3,8),s.value.fillRect(5,-18,3,8),s.value.fillStyle="#ffaa00",s.value.fillRect(-7.5,-10,2,Math.random()*4+2),s.value.fillRect(5.5,-10,2,Math.random()*4+2),R.type==="fast"&&R.health>1&&(s.value.strokeStyle="#ff00ff",s.value.lineWidth=2,s.value.beginPath(),s.value.arc(0,0,18,0,Math.PI*2),s.value.stroke()),s.value.restore()})},$=()=>{if(!i.value.gameOverAnimation.active)return;const O=Date.now()-i.value.gameOverAnimation.startTime,Q=Math.min(O/i.value.gameOverAnimation.duration,1);i.value.gameOverAnimation.particles.forEach(ce=>{ce.life<=0||(s.value.save(),ce.x+=ce.vx,ce.y+=ce.vy,ce.vy+=.2,ce.life-=.02,s.value.globalAlpha=ce.life,s.value.fillStyle=ce.color,s.value.beginPath(),s.value.arc(ce.x,ce.y,ce.size,0,Math.PI*2),s.value.fill(),s.value.restore())}),O>500&&(s.value.save(),s.value.restore()),Q>=1&&i.value.gameOverAnimation.particles.forEach(ce=>{ce.vx*=.95,ce.vy*=.95})},z=()=>{if(u.value)return;const R=i.value.player,O=i.value.keys;if((O.ArrowLeft||O.a||O.A||O.ф||O.Ф)&&(R.x=Math.max(0,R.x-5)),(O.ArrowRight||O.d||O.D||O.в||O.В)&&(R.x=Math.min(Xt-R.width,R.x+5)),i.value.isShooting){const Q=Date.now();Q-i.value.lastShotTime>i.value.shootInterval&&(P(),i.value.lastShotTime=Q)}},ge=()=>{i.value.bullets=i.value.bullets.filter(R=>(R.y-=i.value.difficulty.bulletSpeed,R.y>-R.height))},ue=()=>{if(Math.random()<i.value.difficulty.spawnRate){const R=Math.random()<.3?"fast":"normal";i.value.enemies.push({x:Math.random()*(Xt-25),y:-30,width:25,height:30,type:R,speed:R==="fast"?i.value.difficulty.enemySpeed*1.5:i.value.difficulty.enemySpeed,health:R==="fast"?2:1})}i.value.enemies=i.value.enemies.filter(R=>(R.y+=R.speed,R.y<Xt+R.height))},A=()=>{if(u.value||i.value.gameOverTriggered)return;for(let O=i.value.bullets.length-1;O>=0;O--){const Q=i.value.bullets[O];for(let ce=i.value.enemies.length-1;ce>=0;ce--){const he=i.value.enemies[ce];if(Q.x<he.x+he.width&&Q.x+Q.width>he.x&&Q.y<he.y+he.height&&Q.y+Q.height>he.y){i.value.bullets.splice(O,1),he.health--,he.health<=0&&(i.value.enemies.splice(ce,1),o.value+=he.type==="fast"?20:10,p.value.enemiesDestroyed++,p.value.enemiesDestroyedThisGame++),h.value=!0,setTimeout(()=>h.value=!1,150);break}}}const R=i.value.player;for(const O of i.value.enemies)if(R.x<O.x+O.width&&R.x+R.width>O.x&&R.y<O.y+O.height&&R.y+R.height>O.y){u.value=!0,E();return}},E=()=>{if(i.value.gameOverTriggered)return;i.value.gameOverTriggered=!0,i.value.gameOverAnimation.active=!0,i.value.gameOverAnimation.startTime=Date.now(),y(),p.value.gamesPlayed++,o.value>p.value.highScore&&(p.value.highScore=o.value),ot();const O=Gr().currentUser;O&&(I(O.uid,o.value,c.value),ja("spaceshooter",o.value,c.value,!0)),setTimeout(()=>{fe()},700)};async function I(R,O,Q){try{const ce=[];p.value.gamesPlayed===1&&await yn(R,"spaceshooter",_n.FIRST_GAME)&&ce.push({name:"Space Pilot"});const he=[{threshold:1e3,badges:{easy:_n.SCORE_1000_EASY,medium:_n.SCORE_1000_MEDIUM,hard:_n.SCORE_1000_HARD},names:{easy:"Rookie Scorer",medium:"Cadet Scorer",hard:"Veteran Scorer"}},{threshold:3e3,badges:{easy:_n.SCORE_3000_EASY,medium:_n.SCORE_3000_MEDIUM,hard:_n.SCORE_3000_HARD},names:{easy:"Elite Pilot",medium:"Ace Pilot",hard:"Commander"}},{threshold:5e3,badges:{easy:_n.SCORE_5000_EASY,medium:_n.SCORE_5000_MEDIUM,hard:_n.SCORE_5000_HARD},names:{easy:"Space Legend",medium:"Galaxy Hero",hard:"Universe Master"}}];for(const Y of he)O>=Y.threshold&&Y.badges[Q]&&await yn(R,"spaceshooter",Y.badges[Q])&&ce.push({name:Y.names[Q]});const M=p.value.enemiesDestroyedThisGame;M>=100&&await yn(R,"spaceshooter",_n.ENEMIES_100)&&ce.push({name:"Squadron Destroyer"}),M>=300&&await yn(R,"spaceshooter",_n.ENEMIES_300)&&ce.push({name:"Fleet Annihilator"}),ce.length>0&&(d.value=ce,setTimeout(()=>{d.value=[]},5e3))}catch(ce){console.error("Badge check failed:",ce)}}const S=()=>{!a.value&&!i.value.gameOverAnimation.active||(a.value&&(z(),ge(),ue(),A()),b(),x(),L(),V(),$(),i.value.animationId=requestAnimationFrame(S))},P=()=>{if(u.value)return;const R=i.value.player;i.value.bullets.push({x:R.x-8,y:R.y+5,width:3,height:12},{x:R.x+R.width+5,y:R.y+5,width:3,height:12})},N=R=>{i.value.keys[R.key]=!0,(R.key===" "||R.key==="Spacebar"||R.key==="ArrowUp"||R.key==="w"||R.key==="W"||R.key==="ц"||R.key==="Ц")&&(R.preventDefault(),i.value.isShooting||(i.value.isShooting=!0,P(),i.value.lastShotTime=Date.now()))},T=R=>{i.value.keys[R.key]=!1,(R.key===" "||R.key==="Spacebar"||R.key==="ArrowUp"||R.key==="w"||R.key==="W"||R.key==="ц"||R.key==="Ц")&&(R.preventDefault(),i.value.isShooting=!1,i.value.lastShotTime=0)},Ye=R=>{a.value||(c.value=R,i.value.difficulty=r[R])},_e=()=>{Te(),a.value=!0,S()},fe=()=>{a.value=!1,i.value.animationId&&cancelAnimationFrame(i.value.animationId)},ve=()=>{a.value?fe():_e()},Te=()=>{i.value.player={x:Xt/2-15,y:Xt-60,width:30,height:40},i.value.bullets=[],i.value.enemies=[],i.value.keys={},i.value.isShooting=!1,i.value.lastShotTime=0,i.value.gameOverAnimation.active=!1,i.value.gameOverAnimation.particles=[],i.value.gameOverTriggered=!1,o.value=0,u.value=!1,h.value=!1,p.value.enemiesDestroyedThisGame=0,b(),x()},ot=()=>{typeof window<"u"&&localStorage.setItem("spaceshooter_stats",JSON.stringify(p.value))},rt=()=>{const R=localStorage.getItem("spaceshooter_stats");R&&(p.value={...p.value,...JSON.parse(R)})},it=()=>{fe(),e.push("/games")};return Mn(()=>{s.value=t.value.getContext("2d"),g(),window.addEventListener("keydown",N),window.addEventListener("keyup",T),rt(),Te()}),Od(()=>{fe(),window.removeEventListener("keydown",N),window.removeEventListener("keyup",T),i.value.animationId&&cancelAnimationFrame(i.value.animationId)}),(R,O)=>(J(),Z("div",Q4,[C("div",Y4,[C("div",J4,"Score: "+ye(o.value),1),C("canvas",{ref_key:"canvas",ref:t,width:"600",height:"600",class:ut(["bg-black border-4 rounded-lg transition-shadow duration-200",u.value?"border-red-500 shadow-[0_0_20px_#ff0000]":h.value?"border-blue-600 shadow-[0_0_20px_#0000FF]":"border-blue-800"])},null,2),d.value.length>0?(J(),Z("div",X4,[(J(!0),Z(ft,null,kn(d.value,(Q,ce)=>(J(),Z("div",{key:ce,class:"bg-yellow-600 text-black px-4 py-2 rounded-lg animate-pulse"}," 🏆 Achievement Unlocked: "+ye(Q.name)+"! ",1))),128))])):Be("",!0)]),C("div",Z4,[O[4]||(O[4]=C("h2",{class:"text-3xl font-bold"},"Space Shooter",-1)),O[5]||(O[5]=C("p",{class:"text-sm"},[ht("By: "),C("span",{class:"text-orange-400"},"Yaroslav Labunskiy")],-1)),C("div",eF,[O[3]||(O[3]=C("h3",{class:"text-lg font-bold"},"Game Stats",-1)),C("p",tF,"Games Played: "+ye(p.value.gamesPlayed),1),C("p",nF,"Enemies Destroyed: "+ye(p.value.enemiesDestroyed),1)]),C("div",sF,[C("button",{onClick:O[0]||(O[0]=Q=>Ye("easy")),disabled:a.value,class:ut(["px-4 py-2 rounded-full transition",a.value?"bg-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 cursor-pointer",c.value==="easy"?"ring-2 ring-white":""])}," Easy ",10,rF),C("button",{onClick:O[1]||(O[1]=Q=>Ye("medium")),disabled:a.value,class:ut(["px-4 py-2 rounded-full transition",a.value?"bg-gray-500 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700 cursor-pointer",c.value==="medium"?"ring-2 ring-white":""])}," Medium ",10,iF),C("button",{onClick:O[2]||(O[2]=Q=>Ye("hard")),disabled:a.value,class:ut(["px-4 py-2 rounded-full transition",a.value?"bg-gray-500 cursor-not-allowed":"bg-red-500 hover:bg-red-800 cursor-pointer",c.value==="hard"?"ring-2 ring-white":""])}," Hard ",10,oF)]),C("div",aF,[C("button",{onClick:ve,class:ut(["flex-1 px-4 py-2 rounded-full transition",a.value?"bg-blue-500 hover:bg-blue-600":"bg-green-500 hover:bg-green-600 cursor-pointer"])},ye(a.value?"Stop":"Start"),3),C("button",{onClick:it,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition cursor-pointer"}," Close ")]),O[6]||(O[6]=C("div",{class:"text-sm text-gray-300 space-y-2"},[C("h3",{class:"font-bold text-white"},"Game Rules:"),C("ul",{class:"space-y-1"},[C("li",null,"🚀 Move left-right with arrow keys or A/D"),C("li",null,"🔫 Shoot with SPACE (hold for auto-fire)"),C("li",null,"👾 Destroy enemies to earn points"),C("li",null,"💥 Avoid collisions with enemies"),C("li",null,"⚡ Fast enemies (purple) = +20 points (2 hits required)"),C("li",null,"🎯 Normal enemies = +10 points (1 hit required)")])],-1))])]))}},cF=Jt(lF,[["__scopeId","data-v-9676c89a"]]);let uF=new Promise(n=>{const e=qi(pn,()=>{e(),n()})});const XT=async()=>{await uF},rs=async(n,e,t)=>{await XT(),pn.currentUser?t():t("/login")},Ty=async(n,e,t)=>{await XT(),pn.currentUser?t("/profile"):t()},hF=[{path:"/",component:k2},{path:"/games",component:_L,beforeEnter:rs},{path:"/about",component:BL},{path:"/forum",component:XV},{path:"/login",component:H2,beforeEnter:Ty},{path:"/register",component:X2,beforeEnter:Ty},{path:"/profile",component:NL,beforeEnter:rs},{path:"/badges",component:eV,beforeEnter:rs},{path:"/records",component:CV,beforeEnter:rs},{path:"/games/minesweeper",component:w4,beforeEnter:rs},{path:"/games/candycrush",component:A4,beforeEnter:rs},{path:"/games/tetris",component:V4,beforeEnter:rs},{path:"/games/snake",component:K4,beforeEnter:rs},{path:"/games/spaceshooter",component:cF,beforeEnter:rs}],dF=i2({history:OM(),routes:hF}),Ep=HC(b2);Ep.use(dF);Ep.directive("click-outside",{beforeMount(n,e){n.clickOutsideEvent=t=>{n===t.target||n.contains(t.target)||e.value(t)},document.addEventListener("click",n.clickOutsideEvent)},unmounted(n){document.removeEventListener("click",n.clickOutsideEvent)}});Ep.mount("#app");
