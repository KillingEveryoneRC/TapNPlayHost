(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ge={},ei=[],xn=()=>{},WI=()=>!1,cc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Qh=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Yh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qI=Object.prototype.hasOwnProperty,Be=(n,e)=>qI.call(n,e),he=Array.isArray,ti=n=>ia(n)==="[object Map]",Pi=n=>ia(n)==="[object Set]",Dp=n=>ia(n)==="[object Date]",we=n=>typeof n=="function",it=n=>typeof n=="string",Vn=n=>typeof n=="symbol",Ye=n=>n!==null&&typeof n=="object",$_=n=>(Ye(n)||we(n))&&we(n.then)&&we(n.catch),j_=Object.prototype.toString,ia=n=>j_.call(n),GI=n=>ia(n).slice(8,-1),H_=n=>ia(n)==="[object Object]",Jh=n=>it(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,mo=Kh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zI=/-(\w)/g,dn=uc(n=>n.replace(zI,(e,t)=>t?t.toUpperCase():"")),KI=/\B([A-Z])/g,xr=uc(n=>n.replace(KI,"-$1").toLowerCase()),hc=uc(n=>n.charAt(0).toUpperCase()+n.slice(1)),vu=uc(n=>n?`on${hc(n)}`:""),Ns=(n,e)=>!Object.is(n,e),nl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},W_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},vl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Op;const dc=()=>Op||(Op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Mo(n){if(he(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=it(s)?XI(s):Mo(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(it(n)||Ye(n))return n}const QI=/;(?![^(]*\))/g,YI=/:([^]+)/,JI=/\/\*[^]*?\*\//g;function XI(n){const e={};return n.replace(JI,"").split(QI).forEach(t=>{if(t){const s=t.split(YI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yr(n){let e="";if(it(n))e=n;else if(he(n))for(let t=0;t<n.length;t++){const s=yr(n[t]);s&&(e+=s+" ")}else if(Ye(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ZI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e0=Kh(ZI);function q_(n){return!!n||n===""}function t0(n,e){if(n.length!==e.length)return!1;let t=!0;for(let s=0;t&&s<n.length;s++)t=vr(n[s],e[s]);return t}function vr(n,e){if(n===e)return!0;let t=Dp(n),s=Dp(e);if(t||s)return t&&s?n.getTime()===e.getTime():!1;if(t=Vn(n),s=Vn(e),t||s)return n===e;if(t=he(n),s=he(e),t||s)return t&&s?t0(n,e):!1;if(t=Ye(n),s=Ye(e),t||s){if(!t||!s)return!1;const r=Object.keys(n).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!vr(n[o],e[o]))return!1}}return String(n)===String(e)}function Xh(n,e){return n.findIndex(t=>vr(t,e))}const G_=n=>!!(n&&n.__v_isRef===!0),je=n=>it(n)?n:n==null?"":he(n)||Ye(n)&&(n.toString===j_||!we(n.toString))?G_(n)?je(n.value):JSON.stringify(n,z_,2):String(n),z_=(n,e)=>G_(e)?z_(n,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[Eu(s,i)+" =>"]=r,t),{})}:Pi(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Eu(t))}:Vn(e)?Eu(e):Ye(e)&&!he(e)&&!H_(e)?String(e):e,Eu=(n,e="")=>{var t;return Vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class n0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function s0(){return Gt}let Ke;const wu=new WeakSet;class K_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wu.has(this)&&(wu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Y_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mp(this),J_(this);const e=Ke,t=En;Ke=this,En=!0;try{return this.fn()}finally{X_(this),Ke=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)td(e);this.deps=this.depsTail=void 0,Mp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qu(this)&&this.run()}get dirty(){return Qu(this)}}let Q_=0,_o,yo;function Y_(n,e=!1){if(n.flags|=8,e){n.next=yo,yo=n;return}n.next=_o,_o=n}function Zh(){Q_++}function ed(){if(--Q_>0)return;if(yo){let e=yo;for(yo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_o;){let e=_o;for(_o=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function J_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function X_(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),td(s),r0(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function Qu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Z_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Z_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Lo)||(n.globalVersion=Lo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Qu(n))))return;n.flags|=2;const e=n.dep,t=Ke,s=En;Ke=n,En=!0;try{J_(n);const r=n.fn(n._value);(e.version===0||Ns(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ke=t,En=s,X_(n),n.flags&=-3}}function td(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)td(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function r0(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const ey=[];function ls(){ey.push(En),En=!1}function cs(){const n=ey.pop();En=n===void 0?!0:n}function Mp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ke;Ke=void 0;try{e()}finally{Ke=t}}}let Lo=0;class i0{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ke||!En||Ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ke)t=this.activeLink=new i0(Ke,this),Ke.deps?(t.prevDep=Ke.depsTail,Ke.depsTail.nextDep=t,Ke.depsTail=t):Ke.deps=Ke.depsTail=t,ty(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Ke.depsTail,t.nextDep=void 0,Ke.depsTail.nextDep=t,Ke.depsTail=t,Ke.deps===t&&(Ke.deps=s)}return t}trigger(e){this.version++,Lo++,this.notify(e)}notify(e){Zh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ed()}}}function ty(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ty(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Yu=new WeakMap,_r=Symbol(""),Ju=Symbol(""),Vo=Symbol("");function Ot(n,e,t){if(En&&Ke){let s=Yu.get(n);s||Yu.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new nd),r.map=s,r.key=t),r.track()}}function Kn(n,e,t,s,r,i){const o=Yu.get(n);if(!o){Lo++;return}const a=c=>{c&&c.trigger()};if(Zh(),e==="clear")o.forEach(a);else{const c=he(n),u=c&&Jh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,p)=>{(p==="length"||p===Vo||!Vn(p)&&p>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Vo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(_r)),ti(n)&&a(o.get(Ju)));break;case"delete":c||(a(o.get(_r)),ti(n)&&a(o.get(Ju)));break;case"set":ti(n)&&a(o.get(_r));break}}ed()}function Wr(n){const e=Ue(n);return e===n?e:(Ot(e,"iterate",Vo),un(n)?e:e.map(It))}function fc(n){return Ot(n=Ue(n),"iterate",Vo),n}const o0={__proto__:null,[Symbol.iterator](){return Tu(this,Symbol.iterator,It)},concat(...n){return Wr(this).concat(...n.map(e=>he(e)?Wr(e):e))},entries(){return Tu(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,e){return Wn(this,"every",n,e,void 0,arguments)},filter(n,e){return Wn(this,"filter",n,e,t=>t.map(It),arguments)},find(n,e){return Wn(this,"find",n,e,It,arguments)},findIndex(n,e){return Wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Wn(this,"findLast",n,e,It,arguments)},findLastIndex(n,e){return Wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Iu(this,"includes",n)},indexOf(...n){return Iu(this,"indexOf",n)},join(n){return Wr(this).join(n)},lastIndexOf(...n){return Iu(this,"lastIndexOf",n)},map(n,e){return Wn(this,"map",n,e,void 0,arguments)},pop(){return Zi(this,"pop")},push(...n){return Zi(this,"push",n)},reduce(n,...e){return Lp(this,"reduce",n,e)},reduceRight(n,...e){return Lp(this,"reduceRight",n,e)},shift(){return Zi(this,"shift")},some(n,e){return Wn(this,"some",n,e,void 0,arguments)},splice(...n){return Zi(this,"splice",n)},toReversed(){return Wr(this).toReversed()},toSorted(n){return Wr(this).toSorted(n)},toSpliced(...n){return Wr(this).toSpliced(...n)},unshift(...n){return Zi(this,"unshift",n)},values(){return Tu(this,"values",It)}};function Tu(n,e,t){const s=fc(n),r=s[e]();return s!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const a0=Array.prototype;function Wn(n,e,t,s,r,i){const o=fc(n),a=o!==n&&!un(n),c=o[e];if(c!==a0[e]){const f=c.apply(n,i);return a?It(f):f}let u=t;o!==n&&(a?u=function(f,p){return t.call(this,It(f),p,n)}:t.length>2&&(u=function(f,p){return t.call(this,f,p,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function Lp(n,e,t,s){const r=fc(n);let i=t;return r!==n&&(un(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,It(a),c,n)}),r[e](i,...s)}function Iu(n,e,t){const s=Ue(n);Ot(s,"iterate",Vo);const r=s[e](...t);return(r===-1||r===!1)&&id(t[0])?(t[0]=Ue(t[0]),s[e](...t)):r}function Zi(n,e,t=[]){ls(),Zh();const s=Ue(n)[e].apply(n,t);return ed(),cs(),s}const l0=Kh("__proto__,__v_isRef,__isVue"),ny=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function c0(n){Vn(n)||(n=String(n));const e=Ue(this);return Ot(e,"has",n),e.hasOwnProperty(n)}class sy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?v0:ay:i?oy:iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=he(e);if(!r){let c;if(o&&(c=o0[t]))return c;if(t==="hasOwnProperty")return c0}const a=Reflect.get(e,t,Ft(e)?e:s);return(Vn(t)?ny.has(t):l0(t))||(r||Ot(e,"get",t),i)?a:Ft(a)?o&&Jh(t)?a:a.value:Ye(a)?r?cy(a):pc(a):a}}class ry extends sy{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=$s(i);if(!un(s)&&!$s(s)&&(i=Ue(i),s=Ue(s)),!he(e)&&Ft(i)&&!Ft(s))return c?!1:(i.value=s,!0)}const o=he(e)&&Jh(t)?Number(t)<e.length:Be(e,t),a=Reflect.set(e,t,s,Ft(e)?e:r);return e===Ue(r)&&(o?Ns(s,i)&&Kn(e,"set",t,s):Kn(e,"add",t,s)),a}deleteProperty(e,t){const s=Be(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Kn(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!Vn(t)||!ny.has(t))&&Ot(e,"has",t),s}ownKeys(e){return Ot(e,"iterate",he(e)?"length":_r),Reflect.ownKeys(e)}}class u0 extends sy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const h0=new ry,d0=new u0,f0=new ry(!0);const Xu=n=>n,$a=n=>Reflect.getPrototypeOf(n);function p0(n,e,t){return function(...s){const r=this.__v_raw,i=Ue(r),o=ti(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?Xu:e?El:It;return!e&&Ot(i,"iterate",c?Ju:_r),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function ja(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function g0(n,e){const t={get(r){const i=this.__v_raw,o=Ue(i),a=Ue(r);n||(Ns(r,a)&&Ot(o,"get",r),Ot(o,"get",a));const{has:c}=$a(o),u=e?Xu:n?El:It;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&Ot(Ue(r),"iterate",_r),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Ue(i),a=Ue(r);return n||(Ns(r,a)&&Ot(o,"has",r),Ot(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Ue(a),u=e?Xu:n?El:It;return!n&&Ot(c,"iterate",_r),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return Ut(t,n?{add:ja("add"),set:ja("set"),delete:ja("delete"),clear:ja("clear")}:{add(r){!e&&!un(r)&&!$s(r)&&(r=Ue(r));const i=Ue(this);return $a(i).has.call(i,r)||(i.add(r),Kn(i,"add",r,r)),this},set(r,i){!e&&!un(i)&&!$s(i)&&(i=Ue(i));const o=Ue(this),{has:a,get:c}=$a(o);let u=a.call(o,r);u||(r=Ue(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ns(i,h)&&Kn(o,"set",r,i):Kn(o,"add",r,i),this},delete(r){const i=Ue(this),{has:o,get:a}=$a(i);let c=o.call(i,r);c||(r=Ue(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Kn(i,"delete",r,void 0),u},clear(){const r=Ue(this),i=r.size!==0,o=r.clear();return i&&Kn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=p0(r,n,e)}),t}function sd(n,e){const t=g0(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(Be(t,r)&&r in s?t:s,r,i)}const m0={get:sd(!1,!1)},_0={get:sd(!1,!0)},y0={get:sd(!0,!1)};const iy=new WeakMap,oy=new WeakMap,ay=new WeakMap,v0=new WeakMap;function E0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w0(n){return n.__v_skip||!Object.isExtensible(n)?0:E0(GI(n))}function pc(n){return $s(n)?n:rd(n,!1,h0,m0,iy)}function ly(n){return rd(n,!1,f0,_0,oy)}function cy(n){return rd(n,!0,d0,y0,ay)}function rd(n,e,t,s,r){if(!Ye(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=w0(n);if(i===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,i===2?s:t);return r.set(n,a),a}function ni(n){return $s(n)?ni(n.__v_raw):!!(n&&n.__v_isReactive)}function $s(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function id(n){return n?!!n.__v_raw:!1}function Ue(n){const e=n&&n.__v_raw;return e?Ue(e):n}function T0(n){return!Be(n,"__v_skip")&&Object.isExtensible(n)&&W_(n,"__v_skip",!0),n}const It=n=>Ye(n)?pc(n):n,El=n=>Ye(n)?cy(n):n;function Ft(n){return n?n.__v_isRef===!0:!1}function _e(n){return uy(n,!1)}function I0(n){return uy(n,!0)}function uy(n,e){return Ft(n)?n:new b0(n,e)}class b0{constructor(e,t){this.dep=new nd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ue(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||un(e)||$s(e);e=s?e:Ue(e),Ns(e,t)&&(this._rawValue=e,this._value=s?e:It(e),this.dep.trigger())}}function si(n){return Ft(n)?n.value:n}const C0={get:(n,e,t)=>e==="__v_raw"?n:si(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function hy(n){return ni(n)?n:new Proxy(n,C0)}class A0{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ke!==this)return Y_(this,!0),!0}get value(){const e=this.dep.track();return Z_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function S0(n,e,t=!1){let s,r;return we(n)?s=n:(s=n.get,r=n.set),new A0(s,r,t)}const Ha={},wl=new WeakMap;let hr;function R0(n,e=!1,t=hr){if(t){let s=wl.get(t);s||wl.set(t,s=[]),s.push(n)}}function P0(n,e,t=Ge){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=G=>r?G:un(G)||r===!1||r===0?Qn(G,1):Qn(G);let h,f,p,m,v=!1,A=!1;if(Ft(n)?(f=()=>n.value,v=un(n)):ni(n)?(f=()=>u(n),v=!0):he(n)?(A=!0,v=n.some(G=>ni(G)||un(G)),f=()=>n.map(G=>{if(Ft(G))return G.value;if(ni(G))return u(G);if(we(G))return c?c(G,2):G()})):we(n)?e?f=c?()=>c(n,2):n:f=()=>{if(p){ls();try{p()}finally{cs()}}const G=hr;hr=h;try{return c?c(n,3,[m]):n(m)}finally{hr=G}}:f=xn,e&&r){const G=f,de=r===!0?1/0:r;f=()=>Qn(G(),de)}const x=s0(),M=()=>{h.stop(),x&&x.active&&Yh(x.effects,h)};if(i&&e){const G=e;e=(...de)=>{G(...de),M()}}let N=A?new Array(n.length).fill(Ha):Ha;const L=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(e){const de=h.run();if(r||v||(A?de.some((ye,b)=>Ns(ye,N[b])):Ns(de,N))){p&&p();const ye=hr;hr=h;try{const b=[de,N===Ha?void 0:A&&N[0]===Ha?[]:N,m];N=de,c?c(e,3,b):e(...b)}finally{hr=ye}}}else h.run()};return a&&a(L),h=new K_(f),h.scheduler=o?()=>o(L,!1):L,m=G=>R0(G,!1,h),p=h.onStop=()=>{const G=wl.get(h);if(G){if(c)c(G,4);else for(const de of G)de();wl.delete(h)}},e?s?L(!0):N=h.run():o?o(L.bind(null,!0),!0):h.run(),M.pause=h.pause.bind(h),M.resume=h.resume.bind(h),M.stop=M,M}function Qn(n,e=1/0,t){if(e<=0||!Ye(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ft(n))Qn(n.value,e,t);else if(he(n))for(let s=0;s<n.length;s++)Qn(n[s],e,t);else if(Pi(n)||ti(n))n.forEach(s=>{Qn(s,e,t)});else if(H_(n)){for(const s in n)Qn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Qn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oa(n,e,t,s){try{return s?n(...s):n()}catch(r){gc(r,e,t)}}function Fn(n,e,t,s){if(we(n)){const r=oa(n,e,t,s);return r&&$_(r)&&r.catch(i=>{gc(i,e,t)}),r}if(he(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Fn(n[i],e,t,s));return r}}function gc(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ge;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){ls(),oa(i,null,10,[n,c,u]),cs();return}}x0(n,t,r,s,o)}function x0(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let An=-1;const ri=[];let Rs=null,Gr=0;const dy=Promise.resolve();let Tl=null;function od(n){const e=Tl||dy;return n?e.then(this?n.bind(this):n):e}function k0(n){let e=An+1,t=Ht.length;for(;e<t;){const s=e+t>>>1,r=Ht[s],i=Fo(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function ad(n){if(!(n.flags&1)){const e=Fo(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=Fo(t)?Ht.push(n):Ht.splice(k0(e),0,n),n.flags|=1,fy()}}function fy(){Tl||(Tl=dy.then(gy))}function N0(n){he(n)?ri.push(...n):Rs&&n.id===-1?Rs.splice(Gr+1,0,n):n.flags&1||(ri.push(n),n.flags|=1),fy()}function Vp(n,e,t=An+1){for(;t<Ht.length;t++){const s=Ht[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;Ht.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function py(n){if(ri.length){const e=[...new Set(ri)].sort((t,s)=>Fo(t)-Fo(s));if(ri.length=0,Rs){Rs.push(...e);return}for(Rs=e,Gr=0;Gr<Rs.length;Gr++){const t=Rs[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rs=null,Gr=0}}const Fo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gy(n){try{for(An=0;An<Ht.length;An++){const e=Ht[An];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;An<Ht.length;An++){const e=Ht[An];e&&(e.flags&=-2)}An=-1,Ht.length=0,py(),Tl=null,(Ht.length||ri.length)&&gy()}}let tn=null,my=null;function Il(n){const e=tn;return tn=n,my=n&&n.type.__scopeId||null,e}function ln(n,e=tn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&zp(-1);const i=Il(e);let o;try{o=n(...r)}finally{Il(i),s._d&&zp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Pn(n,e){if(tn===null)return n;const t=vc(tn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Ge]=e[r];i&&(we(i)&&(i={mounted:i,updated:i}),i.deep&&Qn(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function cr(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ls(),Fn(c,t,8,[n.el,a,n,e]),cs())}}const D0=Symbol("_vte"),O0=n=>n.__isTeleport;function ld(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ld(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _y(n,e){return we(n)?Ut({name:n.name},e,{setup:n}):n}function yy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function bl(n,e,t,s,r=!1){if(he(n)){n.forEach((v,A)=>bl(v,e&&(he(e)?e[A]:e),t,s,r));return}if(vo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bl(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?vc(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Ge?a.refs={}:a.refs,f=a.setupState,p=Ue(f),m=f===Ge?()=>!1:v=>Be(p,v);if(u!=null&&u!==c&&(it(u)?(h[u]=null,m(u)&&(f[u]=null)):Ft(u)&&(u.value=null)),we(c))oa(c,a,12,[o,h]);else{const v=it(c),A=Ft(c);if(v||A){const x=()=>{if(n.f){const M=v?m(c)?f[c]:h[c]:c.value;r?he(M)&&Yh(M,i):he(M)?M.includes(i)||M.push(i):v?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else v?(h[c]=o,m(c)&&(f[c]=o)):A&&(c.value=o,n.k&&(h[n.k]=o))};o?(x.id=-1,Zt(x,t)):x()}}}dc().requestIdleCallback;dc().cancelIdleCallback;const vo=n=>!!n.type.__asyncLoader,vy=n=>n.type.__isKeepAlive;function M0(n,e){Ey(n,"a",e)}function L0(n,e){Ey(n,"da",e)}function Ey(n,e,t=Vt){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(mc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)vy(r.parent.vnode)&&V0(s,e,t,r),r=r.parent}}function V0(n,e,t,s){const r=mc(e,n,s,!0);Ty(()=>{Yh(s[e],r)},t)}function mc(n,e,t=Vt,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{ls();const a=la(t),c=Fn(e,t,n,o);return a(),cs(),c});return s?r.unshift(i):r.push(i),i}}const gs=n=>(e,t=Vt)=>{(!Bo||n==="sp")&&mc(n,(...s)=>e(...s),t)},F0=gs("bm"),nr=gs("m"),U0=gs("bu"),B0=gs("u"),wy=gs("bum"),Ty=gs("um"),$0=gs("sp"),j0=gs("rtg"),H0=gs("rtc");function W0(n,e=Vt){mc("ec",n,e)}const Iy="components",q0="directives";function aa(n,e){return by(Iy,n,!0,e)||n}const G0=Symbol.for("v-ndc");function z0(n){return by(q0,n)}function by(n,e,t=!0,s=!1){const r=tn||Vt;if(r){const i=r.type;if(n===Iy){const a=Db(i,!1);if(a&&(a===e||a===dn(e)||a===hc(dn(e))))return i}const o=Fp(r[n]||i[n],e)||Fp(r.appContext[n],e);return!o&&s?i:o}}function Fp(n,e){return n&&(n[e]||n[dn(e)]||n[hc(dn(e))])}function Er(n,e,t,s){let r;const i=t,o=he(n);if(o||it(n)){const a=o&&ni(n);let c=!1,u=!1;a&&(c=!un(n),u=$s(n),n=fc(n)),r=new Array(n.length);for(let h=0,f=n.length;h<f;h++)r[h]=e(c?u?El(It(n[h])):It(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(Ye(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const Zu=n=>n?Wy(n)?vc(n):Zu(n.parent):null,Eo=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zu(n.parent),$root:n=>Zu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ay(n),$forceUpdate:n=>n.f||(n.f=()=>{ad(n.update)}),$nextTick:n=>n.n||(n.n=od.bind(n.proxy)),$watch:n=>pb.bind(n)}),bu=(n,e)=>n!==Ge&&!n.__isScriptSetup&&Be(n,e),K0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(bu(s,e))return o[e]=1,s[e];if(r!==Ge&&Be(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&Be(u,e))return o[e]=3,i[e];if(t!==Ge&&Be(t,e))return o[e]=4,t[e];eh&&(o[e]=0)}}const h=Eo[e];let f,p;if(h)return e==="$attrs"&&Ot(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ge&&Be(t,e))return o[e]=4,t[e];if(p=c.config.globalProperties,Be(p,e))return p[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return bu(r,e)?(r[e]=t,!0):s!==Ge&&Be(s,e)?(s[e]=t,!0):Be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==Ge&&Be(n,o)||bu(e,o)||(a=i[0])&&Be(a,o)||Be(s,o)||Be(Eo,o)||Be(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Up(n){return he(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let eh=!0;function Q0(n){const e=Ay(n),t=n.proxy,s=n.ctx;eh=!1,e.beforeCreate&&Bp(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:v,activated:A,deactivated:x,beforeDestroy:M,beforeUnmount:N,destroyed:L,unmounted:G,render:de,renderTracked:ye,renderTriggered:b,errorCaptured:y,serverPrefetch:w,expose:C,inheritAttrs:S,components:R,directives:T,filters:at}=e;if(u&&Y0(u,s,null),o)for(const H in o){const W=o[H];we(W)&&(s[H]=W.bind(t))}if(r){const H=r.call(t,t);Ye(H)&&(n.data=pc(H))}if(eh=!0,i)for(const H in i){const W=i[H],Te=we(W)?W.bind(t,t):we(W.get)?W.get.bind(t,t):xn,Ie=!we(W)&&we(W.set)?W.set.bind(t):xn,Re=yt({get:Te,set:Ie});Object.defineProperty(s,H,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Ae=>Re.value=Ae})}if(a)for(const H in a)Cy(a[H],s,t,H);if(c){const H=we(c)?c.call(t):c;Reflect.ownKeys(H).forEach(W=>{sl(W,H[W])})}h&&Bp(h,n,"c");function $(H,W){he(W)?W.forEach(Te=>H(Te.bind(t))):W&&H(W.bind(t))}if($(F0,f),$(nr,p),$(U0,m),$(B0,v),$(M0,A),$(L0,x),$(W0,y),$(H0,ye),$(j0,b),$(wy,N),$(Ty,G),$($0,w),he(C))if(C.length){const H=n.exposed||(n.exposed={});C.forEach(W=>{Object.defineProperty(H,W,{get:()=>t[W],set:Te=>t[W]=Te})})}else n.exposed||(n.exposed={});de&&n.render===xn&&(n.render=de),S!=null&&(n.inheritAttrs=S),R&&(n.components=R),T&&(n.directives=T),w&&yy(n)}function Y0(n,e,t=xn){he(n)&&(n=th(n));for(const s in n){const r=n[s];let i;Ye(r)?"default"in r?i=kn(r.from||s,r.default,!0):i=kn(r.from||s):i=kn(r),Ft(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Bp(n,e,t){Fn(he(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cy(n,e,t,s){let r=s.includes(".")?Uy(t,s):()=>t[s];if(it(n)){const i=e[n];we(i)&&rl(r,i)}else if(we(n))rl(r,n.bind(t));else if(Ye(n))if(he(n))n.forEach(i=>Cy(i,e,t,s));else{const i=we(n.handler)?n.handler.bind(t):e[n.handler];we(i)&&rl(r,i,n)}}function Ay(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>Cl(c,u,o,!0)),Cl(c,e,o)),Ye(e)&&i.set(e,c),c}function Cl(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&Cl(n,i,t,!0),r&&r.forEach(o=>Cl(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=J0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const J0={data:$p,props:jp,emits:jp,methods:lo,computed:lo,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:lo,directives:lo,watch:Z0,provide:$p,inject:X0};function $p(n,e){return e?n?function(){return Ut(we(n)?n.call(this,this):n,we(e)?e.call(this,this):e)}:e:n}function X0(n,e){return lo(th(n),th(e))}function th(n){if(he(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function lo(n,e){return n?Ut(Object.create(null),n,e):e}function jp(n,e){return n?he(n)&&he(e)?[...new Set([...n,...e])]:Ut(Object.create(null),Up(n),Up(e??{})):e}function Z0(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const s in e)t[s]=jt(n[s],e[s]);return t}function Sy(){return{app:null,config:{isNativeTag:WI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eb=0;function tb(n,e){return function(s,r=null){we(s)||(s=Ut({},s)),r!=null&&!Ye(r)&&(r=null);const i=Sy(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:eb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Mb,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&we(h.install)?(o.add(h),h.install(u,...f)):we(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const m=u._ceVNode||He(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),n(m,h,p),c=!0,u._container=h,h.__vue_app__=u,vc(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Fn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=ii;ii=u;try{return h()}finally{ii=f}}};return u}}let ii=null;function sl(n,e){if(Vt){let t=Vt.provides;const s=Vt.parent&&Vt.parent.provides;s===t&&(t=Vt.provides=Object.create(s)),t[n]=e}}function kn(n,e,t=!1){const s=Vt||tn;if(s||ii){let r=ii?ii._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&we(e)?e.call(s&&s.proxy):e}}const Ry={},Py=()=>Object.create(Ry),xy=n=>Object.getPrototypeOf(n)===Ry;function nb(n,e,t,s=!1){const r={},i=Py();n.propsDefaults=Object.create(null),ky(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:ly(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function sb(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Ue(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(_c(n.emitsOptions,p))continue;const m=e[p];if(c)if(Be(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const v=dn(p);r[v]=nh(c,a,v,m,n,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{ky(n,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Be(e,f)&&((h=xr(f))===f||!Be(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=nh(c,a,f,void 0,n,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Be(e,f))&&(delete i[f],u=!0)}u&&Kn(n.attrs,"set","")}function ky(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(mo(c))continue;const u=e[c];let h;r&&Be(r,h=dn(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:_c(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ue(t),u=a||Ge;for(let h=0;h<i.length;h++){const f=i[h];t[f]=nh(r,c,f,u[f],n,!Be(u,f))}}return o}function nh(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=Be(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&we(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=la(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xr(t))&&(s=!0))}return s}const rb=new WeakMap;function Ny(n,e,t=!1){const s=t?rb:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!we(n)){const h=f=>{c=!0;const[p,m]=Ny(f,e,!0);Ut(o,p),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return Ye(n)&&s.set(n,ei),ei;if(he(i))for(let h=0;h<i.length;h++){const f=dn(i[h]);Hp(f)&&(o[f]=Ge)}else if(i)for(const h in i){const f=dn(h);if(Hp(f)){const p=i[h],m=o[f]=he(p)||we(p)?{type:p}:Ut({},p),v=m.type;let A=!1,x=!0;if(he(v))for(let M=0;M<v.length;++M){const N=v[M],L=we(N)&&N.name;if(L==="Boolean"){A=!0;break}else L==="String"&&(x=!1)}else A=we(v)&&v.name==="Boolean";m[0]=A,m[1]=x,(A||Be(m,"default"))&&a.push(f)}}const u=[o,a];return Ye(n)&&s.set(n,u),u}function Hp(n){return n[0]!=="$"&&!mo(n)}const cd=n=>n[0]==="_"||n==="$stable",ud=n=>he(n)?n.map(Rn):[Rn(n)],ib=(n,e,t)=>{if(e._n)return e;const s=ln((...r)=>ud(e(...r)),t);return s._c=!1,s},Dy=(n,e,t)=>{const s=n._ctx;for(const r in n){if(cd(r))continue;const i=n[r];if(we(i))e[r]=ib(r,i,s);else if(i!=null){const o=ud(i);e[r]=()=>o}}},Oy=(n,e)=>{const t=ud(e);n.slots.default=()=>t},My=(n,e,t)=>{for(const s in e)(t||!cd(s))&&(n[s]=e[s])},ob=(n,e,t)=>{const s=n.slots=Py();if(n.vnode.shapeFlag&32){const r=e._;r?(My(s,e,t),t&&W_(s,"_",r,!0)):Dy(e,s)}else e&&Oy(n,e)},ab=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=Ge;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:My(r,e,t):(i=!e.$stable,Dy(e,r)),o=e}else e&&(Oy(n,e),o={default:1});if(i)for(const a in r)!cd(a)&&o[a]==null&&delete r[a]},Zt=wb;function lb(n){return cb(n)}function cb(n,e){const t=dc();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=xn,insertStaticContent:v}=n,A=(E,I,P,F=null,j=null,U=null,Z=void 0,Y=null,K=!!I.dynamicChildren)=>{if(E===I)return;E&&!eo(E,I)&&(F=V(E),Ae(E,j,U,!0),E=null),I.patchFlag===-2&&(K=!1,I.dynamicChildren=null);const{type:z,ref:ae,shapeFlag:X}=I;switch(z){case yc:x(E,I,P,F);break;case js:M(E,I,P,F);break;case il:E==null&&N(I,P,F,Z);break;case bt:R(E,I,P,F,j,U,Z,Y,K);break;default:X&1?de(E,I,P,F,j,U,Z,Y,K):X&6?T(E,I,P,F,j,U,Z,Y,K):(X&64||X&128)&&z.process(E,I,P,F,j,U,Z,Y,K,se)}ae!=null&&j&&bl(ae,E&&E.ref,U,I||E,!I)},x=(E,I,P,F)=>{if(E==null)s(I.el=a(I.children),P,F);else{const j=I.el=E.el;I.children!==E.children&&u(j,I.children)}},M=(E,I,P,F)=>{E==null?s(I.el=c(I.children||""),P,F):I.el=E.el},N=(E,I,P,F)=>{[E.el,E.anchor]=v(E.children,I,P,F,E.el,E.anchor)},L=({el:E,anchor:I},P,F)=>{let j;for(;E&&E!==I;)j=p(E),s(E,P,F),E=j;s(I,P,F)},G=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=p(E),r(E),E=P;r(I)},de=(E,I,P,F,j,U,Z,Y,K)=>{I.type==="svg"?Z="svg":I.type==="math"&&(Z="mathml"),E==null?ye(I,P,F,j,U,Z,Y,K):w(E,I,j,U,Z,Y,K)},ye=(E,I,P,F,j,U,Z,Y)=>{let K,z;const{props:ae,shapeFlag:X,transition:re,dirs:me}=E;if(K=E.el=o(E.type,U,ae&&ae.is,ae),X&8?h(K,E.children):X&16&&y(E.children,K,null,F,j,Cu(E,U),Z,Y),me&&cr(E,null,F,"created"),b(K,E,E.scopeId,Z,F),ae){for(const be in ae)be!=="value"&&!mo(be)&&i(K,be,null,ae[be],U,F);"value"in ae&&i(K,"value",null,ae.value,U),(z=ae.onVnodeBeforeMount)&&Cn(z,F,E)}me&&cr(E,null,F,"beforeMount");const ue=ub(j,re);ue&&re.beforeEnter(K),s(K,I,P),((z=ae&&ae.onVnodeMounted)||ue||me)&&Zt(()=>{z&&Cn(z,F,E),ue&&re.enter(K),me&&cr(E,null,F,"mounted")},j)},b=(E,I,P,F,j)=>{if(P&&m(E,P),F)for(let U=0;U<F.length;U++)m(E,F[U]);if(j){let U=j.subTree;if(I===U||$y(U.type)&&(U.ssContent===I||U.ssFallback===I)){const Z=j.vnode;b(E,Z,Z.scopeId,Z.slotScopeIds,j.parent)}}},y=(E,I,P,F,j,U,Z,Y,K=0)=>{for(let z=K;z<E.length;z++){const ae=E[z]=Y?Ps(E[z]):Rn(E[z]);A(null,ae,I,P,F,j,U,Z,Y)}},w=(E,I,P,F,j,U,Z)=>{const Y=I.el=E.el;let{patchFlag:K,dynamicChildren:z,dirs:ae}=I;K|=E.patchFlag&16;const X=E.props||Ge,re=I.props||Ge;let me;if(P&&ur(P,!1),(me=re.onVnodeBeforeUpdate)&&Cn(me,P,I,E),ae&&cr(I,E,P,"beforeUpdate"),P&&ur(P,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&h(Y,""),z?C(E.dynamicChildren,z,Y,P,F,Cu(I,j),U):Z||W(E,I,Y,null,P,F,Cu(I,j),U,!1),K>0){if(K&16)S(Y,X,re,P,j);else if(K&2&&X.class!==re.class&&i(Y,"class",null,re.class,j),K&4&&i(Y,"style",X.style,re.style,j),K&8){const ue=I.dynamicProps;for(let be=0;be<ue.length;be++){const De=ue[be],Rt=X[De],vt=re[De];(vt!==Rt||De==="value")&&i(Y,De,Rt,vt,j,P)}}K&1&&E.children!==I.children&&h(Y,I.children)}else!Z&&z==null&&S(Y,X,re,P,j);((me=re.onVnodeUpdated)||ae)&&Zt(()=>{me&&Cn(me,P,I,E),ae&&cr(I,E,P,"updated")},F)},C=(E,I,P,F,j,U,Z)=>{for(let Y=0;Y<I.length;Y++){const K=E[Y],z=I[Y],ae=K.el&&(K.type===bt||!eo(K,z)||K.shapeFlag&198)?f(K.el):P;A(K,z,ae,null,F,j,U,Z,!0)}},S=(E,I,P,F,j)=>{if(I!==P){if(I!==Ge)for(const U in I)!mo(U)&&!(U in P)&&i(E,U,I[U],null,j,F);for(const U in P){if(mo(U))continue;const Z=P[U],Y=I[U];Z!==Y&&U!=="value"&&i(E,U,Y,Z,j,F)}"value"in P&&i(E,"value",I.value,P.value,j)}},R=(E,I,P,F,j,U,Z,Y,K)=>{const z=I.el=E?E.el:a(""),ae=I.anchor=E?E.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:me}=I;me&&(Y=Y?Y.concat(me):me),E==null?(s(z,P,F),s(ae,P,F),y(I.children||[],P,ae,j,U,Z,Y,K)):X>0&&X&64&&re&&E.dynamicChildren?(C(E.dynamicChildren,re,P,j,U,Z,Y),(I.key!=null||j&&I===j.subTree)&&Ly(E,I,!0)):W(E,I,P,ae,j,U,Z,Y,K)},T=(E,I,P,F,j,U,Z,Y,K)=>{I.slotScopeIds=Y,E==null?I.shapeFlag&512?j.ctx.activate(I,P,F,Z,K):at(I,P,F,j,U,Z,K):St(E,I,K)},at=(E,I,P,F,j,U,Z)=>{const Y=E.component=Rb(E,F,j);if(vy(E)&&(Y.ctx.renderer=se),Pb(Y,!1,Z),Y.asyncDep){if(j&&j.registerDep(Y,$,Z),!E.el){const K=Y.subTree=He(js);M(null,K,I,P)}}else $(Y,E,I,P,j,U,Z)},St=(E,I,P)=>{const F=I.component=E.component;if(vb(E,I,P))if(F.asyncDep&&!F.asyncResolved){H(F,I,P);return}else F.next=I,F.update();else I.el=E.el,F.vnode=I},$=(E,I,P,F,j,U,Z)=>{const Y=()=>{if(E.isMounted){let{next:X,bu:re,u:me,parent:ue,vnode:be}=E;{const Pt=Vy(E);if(Pt){X&&(X.el=be.el,H(E,X,Z)),Pt.asyncDep.then(()=>{E.isUnmounted||Y()});return}}let De=X,Rt;ur(E,!1),X?(X.el=be.el,H(E,X,Z)):X=be,re&&nl(re),(Rt=X.props&&X.props.onVnodeBeforeUpdate)&&Cn(Rt,ue,X,be),ur(E,!0);const vt=qp(E),on=E.subTree;E.subTree=vt,A(on,vt,f(on.el),V(on),E,j,U),X.el=vt.el,De===null&&Eb(E,vt.el),me&&Zt(me,j),(Rt=X.props&&X.props.onVnodeUpdated)&&Zt(()=>Cn(Rt,ue,X,be),j)}else{let X;const{el:re,props:me}=I,{bm:ue,m:be,parent:De,root:Rt,type:vt}=E,on=vo(I);ur(E,!1),ue&&nl(ue),!on&&(X=me&&me.onVnodeBeforeMount)&&Cn(X,De,I),ur(E,!0);{Rt.ce&&Rt.ce._injectChildStyle(vt);const Pt=E.subTree=qp(E);A(null,Pt,P,F,E,j,U),I.el=Pt.el}if(be&&Zt(be,j),!on&&(X=me&&me.onVnodeMounted)){const Pt=I;Zt(()=>Cn(X,De,Pt),j)}(I.shapeFlag&256||De&&vo(De.vnode)&&De.vnode.shapeFlag&256)&&E.a&&Zt(E.a,j),E.isMounted=!0,I=P=F=null}};E.scope.on();const K=E.effect=new K_(Y);E.scope.off();const z=E.update=K.run.bind(K),ae=E.job=K.runIfDirty.bind(K);ae.i=E,ae.id=E.uid,K.scheduler=()=>ad(ae),ur(E,!0),z()},H=(E,I,P)=>{I.component=E;const F=E.vnode.props;E.vnode=I,E.next=null,sb(E,I.props,F,P),ab(E,I.children,P),ls(),Vp(E),cs()},W=(E,I,P,F,j,U,Z,Y,K=!1)=>{const z=E&&E.children,ae=E?E.shapeFlag:0,X=I.children,{patchFlag:re,shapeFlag:me}=I;if(re>0){if(re&128){Ie(z,X,P,F,j,U,Z,Y,K);return}else if(re&256){Te(z,X,P,F,j,U,Z,Y,K);return}}me&8?(ae&16&&qt(z,j,U),X!==z&&h(P,X)):ae&16?me&16?Ie(z,X,P,F,j,U,Z,Y,K):qt(z,j,U,!0):(ae&8&&h(P,""),me&16&&y(X,P,F,j,U,Z,Y,K))},Te=(E,I,P,F,j,U,Z,Y,K)=>{E=E||ei,I=I||ei;const z=E.length,ae=I.length,X=Math.min(z,ae);let re;for(re=0;re<X;re++){const me=I[re]=K?Ps(I[re]):Rn(I[re]);A(E[re],me,P,null,j,U,Z,Y,K)}z>ae?qt(E,j,U,!0,!1,X):y(I,P,F,j,U,Z,Y,K,X)},Ie=(E,I,P,F,j,U,Z,Y,K)=>{let z=0;const ae=I.length;let X=E.length-1,re=ae-1;for(;z<=X&&z<=re;){const me=E[z],ue=I[z]=K?Ps(I[z]):Rn(I[z]);if(eo(me,ue))A(me,ue,P,null,j,U,Z,Y,K);else break;z++}for(;z<=X&&z<=re;){const me=E[X],ue=I[re]=K?Ps(I[re]):Rn(I[re]);if(eo(me,ue))A(me,ue,P,null,j,U,Z,Y,K);else break;X--,re--}if(z>X){if(z<=re){const me=re+1,ue=me<ae?I[me].el:F;for(;z<=re;)A(null,I[z]=K?Ps(I[z]):Rn(I[z]),P,ue,j,U,Z,Y,K),z++}}else if(z>re)for(;z<=X;)Ae(E[z],j,U,!0),z++;else{const me=z,ue=z,be=new Map;for(z=ue;z<=re;z++){const Et=I[z]=K?Ps(I[z]):Rn(I[z]);Et.key!=null&&be.set(Et.key,z)}let De,Rt=0;const vt=re-ue+1;let on=!1,Pt=0;const ws=new Array(vt);for(z=0;z<vt;z++)ws[z]=0;for(z=me;z<=X;z++){const Et=E[z];if(Rt>=vt){Ae(Et,j,U,!0);continue}let an;if(Et.key!=null)an=be.get(Et.key);else for(De=ue;De<=re;De++)if(ws[De-ue]===0&&eo(Et,I[De])){an=De;break}an===void 0?Ae(Et,j,U,!0):(ws[an-ue]=z+1,an>=Pt?Pt=an:on=!0,A(Et,I[an],P,null,j,U,Z,Y,K),Rt++)}const Bi=on?hb(ws):ei;for(De=Bi.length-1,z=vt-1;z>=0;z--){const Et=ue+z,an=I[Et],Ca=Et+1<ae?I[Et+1].el:F;ws[z]===0?A(null,an,P,Ca,j,U,Z,Y,K):on&&(De<0||z!==Bi[De]?Re(an,P,Ca,2):De--)}}},Re=(E,I,P,F,j=null)=>{const{el:U,type:Z,transition:Y,children:K,shapeFlag:z}=E;if(z&6){Re(E.component.subTree,I,P,F);return}if(z&128){E.suspense.move(I,P,F);return}if(z&64){Z.move(E,I,P,se);return}if(Z===bt){s(U,I,P);for(let X=0;X<K.length;X++)Re(K[X],I,P,F);s(E.anchor,I,P);return}if(Z===il){L(E,I,P);return}if(F!==2&&z&1&&Y)if(F===0)Y.beforeEnter(U),s(U,I,P),Zt(()=>Y.enter(U),j);else{const{leave:X,delayLeave:re,afterLeave:me}=Y,ue=()=>{E.ctx.isUnmounted?r(U):s(U,I,P)},be=()=>{X(U,()=>{ue(),me&&me()})};re?re(U,ue,be):be()}else s(U,I,P)},Ae=(E,I,P,F=!1,j=!1)=>{const{type:U,props:Z,ref:Y,children:K,dynamicChildren:z,shapeFlag:ae,patchFlag:X,dirs:re,cacheIndex:me}=E;if(X===-2&&(j=!1),Y!=null&&(ls(),bl(Y,null,P,E,!0),cs()),me!=null&&(I.renderCache[me]=void 0),ae&256){I.ctx.deactivate(E);return}const ue=ae&1&&re,be=!vo(E);let De;if(be&&(De=Z&&Z.onVnodeBeforeUnmount)&&Cn(De,I,E),ae&6)bn(E.component,P,F);else{if(ae&128){E.suspense.unmount(P,F);return}ue&&cr(E,null,I,"beforeUnmount"),ae&64?E.type.remove(E,I,P,se,F):z&&!z.hasOnce&&(U!==bt||X>0&&X&64)?qt(z,I,P,!1,!0):(U===bt&&X&384||!j&&ae&16)&&qt(K,I,P),F&&We(E)}(be&&(De=Z&&Z.onVnodeUnmounted)||ue)&&Zt(()=>{De&&Cn(De,I,E),ue&&cr(E,null,I,"unmounted")},P)},We=E=>{const{type:I,el:P,anchor:F,transition:j}=E;if(I===bt){Es(P,F);return}if(I===il){G(E);return}const U=()=>{r(P),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Z,delayLeave:Y}=j,K=()=>Z(P,U);Y?Y(E.el,U,K):K()}else U()},Es=(E,I)=>{let P;for(;E!==I;)P=p(E),r(E),E=P;r(I)},bn=(E,I,P)=>{const{bum:F,scope:j,job:U,subTree:Z,um:Y,m:K,a:z,parent:ae,slots:{__:X}}=E;Wp(K),Wp(z),F&&nl(F),ae&&he(X)&&X.forEach(re=>{ae.renderCache[re]=void 0}),j.stop(),U&&(U.flags|=8,Ae(Z,E,I,P)),Y&&Zt(Y,I),Zt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},qt=(E,I,P,F=!1,j=!1,U=0)=>{for(let Z=U;Z<E.length;Z++)Ae(E[Z],I,P,F,j)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=p(E.anchor||E.el),P=I&&I[D0];return P?p(P):I};let te=!1;const ee=(E,I,P)=>{E==null?I._vnode&&Ae(I._vnode,null,null,!0):A(I._vnode||null,E,I,null,null,null,P),I._vnode=E,te||(te=!0,Vp(),py(),te=!1)},se={p:A,um:Ae,m:Re,r:We,mt:at,mc:y,pc:W,pbc:C,n:V,o:n};return{render:ee,hydrate:void 0,createApp:tb(ee)}}function Cu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ur({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ub(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ly(n,e,t=!1){const s=n.children,r=e.children;if(he(s)&&he(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ps(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Ly(o,a)),a.type===yc&&(a.el=o.el),a.type===js&&!a.el&&(a.el=o.el)}}function hb(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Vy(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vy(e)}function Wp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const db=Symbol.for("v-scx"),fb=()=>kn(db);function rl(n,e,t){return Fy(n,e,t)}function Fy(n,e,t=Ge){const{immediate:s,deep:r,flush:i,once:o}=t,a=Ut({},t),c=e&&s||!e&&i!=="post";let u;if(Bo){if(i==="sync"){const m=fb();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=xn,m.resume=xn,m.pause=xn,m}}const h=Vt;a.call=(m,v,A)=>Fn(m,h,v,A);let f=!1;i==="post"?a.scheduler=m=>{Zt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,v)=>{v?m():ad(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=P0(n,e,a);return Bo&&(u?u.push(p):c&&p()),p}function pb(n,e,t){const s=this.proxy,r=it(n)?n.includes(".")?Uy(s,n):()=>s[n]:n.bind(s,s);let i;we(e)?i=e:(i=e.handler,t=e);const o=la(this),a=Fy(r,i.bind(s),t);return o(),a}function Uy(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const gb=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${dn(e)}Modifiers`]||n[`${xr(e)}Modifiers`];function mb(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Ge;let r=t;const i=e.startsWith("update:"),o=i&&gb(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>it(h)?h.trim():h)),o.number&&(r=t.map(vl)));let a,c=s[a=vu(e)]||s[a=vu(dn(e))];!c&&i&&(c=s[a=vu(xr(e))]),c&&Fn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Fn(u,n,6,r)}}function By(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!we(n)){const c=u=>{const h=By(u,e,!0);h&&(a=!0,Ut(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Ye(n)&&s.set(n,null),null):(he(i)?i.forEach(c=>o[c]=null):Ut(o,i),Ye(n)&&s.set(n,o),o)}function _c(n,e){return!n||!cc(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(n,e[0].toLowerCase()+e.slice(1))||Be(n,xr(e))||Be(n,e))}function qp(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:v,inheritAttrs:A}=n,x=Il(n);let M,N;try{if(t.shapeFlag&4){const G=r||s,de=G;M=Rn(u.call(de,G,h,f,m,p,v)),N=a}else{const G=e;M=Rn(G.length>1?G(f,{attrs:a,slots:o,emit:c}):G(f,null)),N=e.props?a:_b(a)}}catch(G){wo.length=0,gc(G,n,1),M=He(js)}let L=M;if(N&&A!==!1){const G=Object.keys(N),{shapeFlag:de}=L;G.length&&de&7&&(i&&G.some(Qh)&&(N=yb(N,i)),L=di(L,N,!1,!0))}return t.dirs&&(L=di(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(t.dirs):t.dirs),t.transition&&ld(L,t.transition),M=L,Il(x),M}const _b=n=>{let e;for(const t in n)(t==="class"||t==="style"||cc(t))&&((e||(e={}))[t]=n[t]);return e},yb=(n,e)=>{const t={};for(const s in n)(!Qh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function vb(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Gp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==s[p]&&!_c(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gp(s,o,u):!0:!!o;return!1}function Gp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!_c(t,i))return!0}return!1}function Eb({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const $y=n=>n.__isSuspense;function wb(n,e){e&&e.pendingBranch?he(n)?e.effects.push(...n):e.effects.push(n):N0(n)}const bt=Symbol.for("v-fgt"),yc=Symbol.for("v-txt"),js=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),wo=[];let nn=null;function ie(n=!1){wo.push(nn=n?null:[])}function Tb(){wo.pop(),nn=wo[wo.length-1]||null}let Uo=1;function zp(n,e=!1){Uo+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function jy(n){return n.dynamicChildren=Uo>0?nn||ei:null,Tb(),Uo>0&&nn&&nn.push(n),n}function le(n,e,t,s,r,i){return jy(O(n,e,t,s,r,i,!0))}function Al(n,e,t,s,r){return jy(He(n,e,t,s,r,!0))}function Sl(n){return n?n.__v_isVNode===!0:!1}function eo(n,e){return n.type===e.type&&n.key===e.key}const Hy=({key:n})=>n??null,ol=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?it(n)||Ft(n)||we(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,s=0,r=null,i=n===bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Hy(e),ref:e&&ol(e),scopeId:my,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(hd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=it(t)?8:16),Uo>0&&!o&&nn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&nn.push(c),c}const He=Ib;function Ib(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===G0)&&(n=js),Sl(n)){const a=di(n,e,!0);return t&&hd(a,t),Uo>0&&!i&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(Ob(n)&&(n=n.__vccOpts),e){e=bb(e);let{class:a,style:c}=e;a&&!it(a)&&(e.class=yr(a)),Ye(c)&&(id(c)&&!he(c)&&(c=Ut({},c)),e.style=Mo(c))}const o=it(n)?1:$y(n)?128:O0(n)?64:Ye(n)?4:we(n)?2:0;return O(n,e,t,s,r,o,i,!0)}function bb(n){return n?id(n)||xy(n)?Ut({},n):n:null}function di(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?Cb(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Hy(u),ref:e&&e.ref?t&&i?he(i)?i.concat(ol(e)):[i,ol(e)]:ol(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==bt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&di(n.ssContent),ssFallback:n.ssFallback&&di(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&ld(h,c.clone(h)),h}function lt(n=" ",e=0){return He(yc,null,n,e)}function xi(n,e){const t=He(il,null,n);return t.staticCount=e,t}function Tt(n="",e=!1){return e?(ie(),Al(js,null,n)):He(js,null,n)}function Rn(n){return n==null||typeof n=="boolean"?He(js):he(n)?He(bt,null,n.slice()):Sl(n)?Ps(n):He(yc,null,String(n))}function Ps(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:di(n)}function hd(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(he(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),hd(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!xy(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),s&64?(t=16,e=[lt(e)]):t=8);n.children=e,n.shapeFlag|=t}function Cb(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=yr([e.class,s.class]));else if(r==="style")e.style=Mo([e.style,s.style]);else if(cc(r)){const i=e[r],o=s[r];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Cn(n,e,t,s=null){Fn(n,e,7,[t,s])}const Ab=Sy();let Sb=0;function Rb(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||Ab,i={uid:Sb++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new n0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ny(s,r),emitsOptions:By(s,r),emit:null,emitted:null,propsDefaults:Ge,inheritAttrs:s.inheritAttrs,ctx:Ge,data:Ge,props:Ge,attrs:Ge,slots:Ge,refs:Ge,setupState:Ge,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mb.bind(null,i),n.ce&&n.ce(i),i}let Vt=null,Rl,sh;{const n=dc(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Rl=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),sh=e("__VUE_SSR_SETTERS__",t=>Bo=t)}const la=n=>{const e=Vt;return Rl(n),n.scope.on(),()=>{n.scope.off(),Rl(e)}},Kp=()=>{Vt&&Vt.scope.off(),Rl(null)};function Wy(n){return n.vnode.shapeFlag&4}let Bo=!1;function Pb(n,e=!1,t=!1){e&&sh(e);const{props:s,children:r}=n.vnode,i=Wy(n);nb(n,s,i,e),ob(n,r,t||e);const o=i?xb(n,e):void 0;return e&&sh(!1),o}function xb(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,K0);const{setup:s}=t;if(s){ls();const r=n.setupContext=s.length>1?Nb(n):null,i=la(n),o=oa(s,n,0,[n.props,r]),a=$_(o);if(cs(),i(),(a||n.sp)&&!vo(n)&&yy(n),a){if(o.then(Kp,Kp),e)return o.then(c=>{Qp(n,c)}).catch(c=>{gc(c,n,0)});n.asyncDep=o}else Qp(n,o)}else qy(n)}function Qp(n,e,t){we(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ye(e)&&(n.setupState=hy(e)),qy(n)}function qy(n,e,t){const s=n.type;n.render||(n.render=s.render||xn);{const r=la(n);ls();try{Q0(n)}finally{cs(),r()}}}const kb={get(n,e){return Ot(n,"get",""),n[e]}};function Nb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,kb),slots:n.slots,emit:n.emit,expose:e}}function vc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hy(T0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Eo)return Eo[t](n)},has(e,t){return t in e||t in Eo}})):n.proxy}function Db(n,e=!0){return we(n)?n.displayName||n.name:n.name||e&&n.__name}function Ob(n){return we(n)&&"__vccOpts"in n}const yt=(n,e)=>S0(n,e,Bo);function Gy(n,e,t){const s=arguments.length;return s===2?Ye(e)&&!he(e)?Sl(e)?He(n,null,[e]):He(n,e):He(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Sl(t)&&(t=[t]),He(n,e,t))}const Mb="3.5.15";/**
* @vue/runtime-dom v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rh;const Yp=typeof window<"u"&&window.trustedTypes;if(Yp)try{rh=Yp.createPolicy("vue",{createHTML:n=>n})}catch{}const zy=rh?n=>rh.createHTML(n):n=>n,Lb="http://www.w3.org/2000/svg",Vb="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Jp=zn&&zn.createElement("template"),Fb={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?zn.createElementNS(Lb,n):e==="mathml"?zn.createElementNS(Vb,n):t?zn.createElement(n,{is:t}):zn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>zn.createTextNode(n),createComment:n=>zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{Jp.innerHTML=zy(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=Jp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ub=Symbol("_vtc");function Bb(n,e,t){const s=n[Ub];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Xp=Symbol("_vod"),$b=Symbol("_vsh"),jb=Symbol(""),Hb=/(^|;)\s*display\s*:/;function Wb(n,e,t){const s=n.style,r=it(t);let i=!1;if(t&&!r){if(e)if(it(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&al(s,a,"")}else for(const o in e)t[o]==null&&al(s,o,"");for(const o in t)o==="display"&&(i=!0),al(s,o,t[o])}else if(r){if(e!==t){const o=s[jb];o&&(t+=";"+o),s.cssText=t,i=Hb.test(t)}}else e&&n.removeAttribute("style");Xp in n&&(n[Xp]=i?s.display:"",n[$b]&&(s.display="none"))}const Zp=/\s*!important$/;function al(n,e,t){if(he(t))t.forEach(s=>al(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=qb(n,e);Zp.test(t)?n.setProperty(xr(s),t.replace(Zp,""),"important"):n[s]=t}}const eg=["Webkit","Moz","ms"],Au={};function qb(n,e){const t=Au[e];if(t)return t;let s=dn(e);if(s!=="filter"&&s in n)return Au[e]=s;s=hc(s);for(let r=0;r<eg.length;r++){const i=eg[r]+s;if(i in n)return Au[e]=i}return e}const tg="http://www.w3.org/1999/xlink";function ng(n,e,t,s,r,i=e0(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(tg,e.slice(6,e.length)):n.setAttributeNS(tg,e,t):t==null||i&&!q_(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Vn(t)?String(t):t)}function sg(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zy(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=q_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Yn(n,e,t,s){n.addEventListener(e,t,s)}function Gb(n,e,t,s){n.removeEventListener(e,t,s)}const rg=Symbol("_vei");function zb(n,e,t,s,r=null){const i=n[rg]||(n[rg]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Kb(e);if(s){const u=i[e]=Jb(s,r);Yn(n,a,u,c)}else o&&(Gb(n,a,o,c),i[e]=void 0)}}const ig=/(?:Once|Passive|Capture)$/;function Kb(n){let e;if(ig.test(n)){e={};let s;for(;s=n.match(ig);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):xr(n.slice(2)),e]}let Su=0;const Qb=Promise.resolve(),Yb=()=>Su||(Qb.then(()=>Su=0),Su=Date.now());function Jb(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Fn(Xb(s,t.value),e,5,[s])};return t.value=n,t.attached=Yb(),t}function Xb(n,e){if(he(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const og=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zb=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?Bb(n,s,o):e==="style"?Wb(n,t,s):cc(e)?Qh(e)||zb(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eC(n,e,s,o))?(sg(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ng(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!it(s))?sg(n,dn(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),ng(n,e,s,o))};function eC(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&og(e)&&we(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return og(e)&&it(t)?!1:e in n}const Hs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return he(e)?t=>nl(e,t):e};function tC(n){n.target.composing=!0}function ag(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),Ds={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[hn]=Hs(r);const i=s||r.props&&r.props.type==="number";Yn(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=vl(a)),n[hn](a)}),t&&Yn(n,"change",()=>{n.value=n.value.trim()}),e||(Yn(n,"compositionstart",tC),Yn(n,"compositionend",ag),Yn(n,"change",ag))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[hn]=Hs(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?vl(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},nC={deep:!0,created(n,e,t){n[hn]=Hs(t),Yn(n,"change",()=>{const s=n._modelValue,r=fi(n),i=n.checked,o=n[hn];if(he(s)){const a=Xh(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const u=[...s];u.splice(a,1),o(u)}}else if(Pi(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Qy(n,i))})},mounted:lg,beforeUpdate(n,e,t){n[hn]=Hs(t),lg(n,e,t)}};function lg(n,{value:e,oldValue:t},s){n._modelValue=e;let r;if(he(e))r=Xh(e,s.props.value)>-1;else if(Pi(e))r=e.has(s.props.value);else{if(e===t)return;r=vr(e,Qy(n,!0))}n.checked!==r&&(n.checked=r)}const sC={created(n,{value:e},t){n.checked=vr(e,t.props.value),n[hn]=Hs(t),Yn(n,"change",()=>{n[hn](fi(n))})},beforeUpdate(n,{value:e,oldValue:t},s){n[hn]=Hs(s),e!==t&&(n.checked=vr(e,s.props.value))}},Ky={deep:!0,created(n,{value:e,modifiers:{number:t}},s){const r=Pi(e);Yn(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?vl(fi(o)):fi(o));n[hn](n.multiple?r?new Set(i):i:i[0]),n._assigning=!0,od(()=>{n._assigning=!1})}),n[hn]=Hs(s)},mounted(n,{value:e}){cg(n,e)},beforeUpdate(n,e,t){n[hn]=Hs(t)},updated(n,{value:e}){n._assigning||cg(n,e)}};function cg(n,e){const t=n.multiple,s=he(e);if(!(t&&!s&&!Pi(e))){for(let r=0,i=n.options.length;r<i;r++){const o=n.options[r],a=fi(o);if(t)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Xh(e,a)>-1}else o.selected=e.has(a);else if(vr(fi(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function fi(n){return"_value"in n?n._value:n.value}function Qy(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Yy={created(n,e,t){Wa(n,e,t,null,"created")},mounted(n,e,t){Wa(n,e,t,null,"mounted")},beforeUpdate(n,e,t,s){Wa(n,e,t,s,"beforeUpdate")},updated(n,e,t,s){Wa(n,e,t,s,"updated")}};function rC(n,e){switch(n){case"SELECT":return Ky;case"TEXTAREA":return Ds;default:switch(e){case"checkbox":return nC;case"radio":return sC;default:return Ds}}}function Wa(n,e,t,s,r){const o=rC(n.tagName,t.props&&t.props.type)[r];o&&o(n,e,t,s)}const iC=["ctrl","shift","alt","meta"],oC={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>iC.some(t=>n[`${t}Key`]&&!e.includes(t))},dd=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=oC[e[o]];if(a&&a(r,e))return}return n(r,...i)})},aC=Ut({patchProp:Zb},Fb);let ug;function lC(){return ug||(ug=lb(aC))}const cC=(...n)=>{const e=lC().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=hC(s);if(!r)return;const i=e._component;!we(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,uC(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function uC(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function hC(n){return it(n)?document.querySelector(n):n}const dC=()=>{};var hg={};/**
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
 */const Jy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Q=function(n,e){if(!n)throw ki(e)},ki=function(n){return new Error("Firebase Database ("+Jy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Xy=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},fC=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(t[h],t[f],t[p],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xy(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new pC;const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const v=u<<6&192|f;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zy=function(n){const e=Xy(n);return fd.encodeByteArray(e,!0)},Pl=function(n){return Zy(n).replace(/\./g,"")},xl=function(n){try{return fd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gC(n){return ev(void 0,n)}function ev(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!mC(t)||(n[t]=ev(n[t],e[t]));return n}function mC(n){return n!=="__proto__"}/**
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
 */function _C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yC=()=>_C().__FIREBASE_DEFAULTS__,vC=()=>{if(typeof process>"u"||typeof hg>"u")return;const n=hg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},EC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xl(n[1]);return e&&JSON.parse(e)},Ec=()=>{try{return dC()||yC()||vC()||EC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tv=n=>{var e,t;return(t=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nv=n=>{const e=tv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},sv=()=>{var n;return(n=Ec())===null||n===void 0?void 0:n.config},rv=n=>{var e;return(e=Ec())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function kr(n){return n.endsWith(".cloudworkstations.dev")}async function pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function iv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Pl(JSON.stringify(t)),Pl(JSON.stringify(o)),""].join(".")}const To={};function wC(){const n={prod:[],emulator:[]};for(const e of Object.keys(To))To[e]?n.emulator.push(e):n.prod.push(e);return n}function TC(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let dg=!1;function gd(n,e){if(typeof window>"u"||typeof document>"u"||!kr(window.location.host)||To[n]===e||To[n]||dg)return;To[n]=e;function t(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=wC().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,m){p.setAttribute("width","24"),p.setAttribute("id",m),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{dg=!0,o()},p}function h(p,m){p.setAttribute("id",m),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=TC(s),m=t("text"),v=document.getElementById(m)||document.createElement("span"),A=t("learnmore"),x=document.getElementById(A)||document.createElement("a"),M=t("preprendIcon"),N=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const L=p.element;a(L),h(x,A);const G=u();c(N,M),L.append(N,v,x,G),document.body.appendChild(L)}i?(v.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function IC(){var n;const e=(n=Ec())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ov(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AC(){const n=Bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function SC(){return Jy.NODE_ADMIN===!0}function RC(){return!IC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PC(){try{return typeof indexedDB=="object"}catch{return!1}}function xC(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const kC="FirebaseError";class ms extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=kC,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?NC(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ms(r,a,s)}}function NC(n,e){return n.replace(DC,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const DC=/\{\$([^}]+)}/g;/**
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
 */function $o(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
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
 */const av=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=$o(xl(i[0])||""),t=$o(xl(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},OC=function(n){const e=av(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},MC=function(n){const e=av(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _s(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function pi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Ws(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(fg(i)&&fg(o)){if(!Ws(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function fg(n){return n!==null&&typeof n=="object"}/**
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
 */function Ni(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function co(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function uo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class LC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function VC(n,e){const t=new FC(n,e);return t.subscribe.bind(t)}class FC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ru),r.error===void 0&&(r.error=Ru),r.complete===void 0&&(r.complete=Ru);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ru(){}function _d(n,e){return`${n} failed: ${e} argument `}/**
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
 */const BC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Q(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Tc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class qs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class $C{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new wc;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HC(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jC(n){return n===dr?void 0:n}function HC(n){return n.instantiationMode==="EAGER"}/**
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
 */class WC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $C(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const qC={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},GC=Pe.INFO,zC={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},KC=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=zC[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=GC,this._logHandler=KC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const QC=(n,e)=>e.some(t=>n instanceof t);let pg,gg;function YC(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JC(){return gg||(gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,oh=new WeakMap,cv=new WeakMap,Pu=new WeakMap,yd=new WeakMap;function XC(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Os(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lv.set(t,n)}).catch(()=>{}),yd.set(e,n),e}function ZC(n){if(oh.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});oh.set(n,e)}let ah={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return oh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Os(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eA(n){ah=n(ah)}function tA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(xu(this),e,...t);return cv.set(s,e.sort?e.sort():[e]),Os(s)}:JC().includes(n)?function(...e){return n.apply(xu(this),e),Os(lv.get(this))}:function(...e){return Os(n.apply(xu(this),e))}}function nA(n){return typeof n=="function"?tA(n):(n instanceof IDBTransaction&&ZC(n),QC(n,YC())?new Proxy(n,ah):n)}function Os(n){if(n instanceof IDBRequest)return XC(n);if(Pu.has(n))return Pu.get(n);const e=nA(n);return e!==n&&(Pu.set(n,e),yd.set(e,n)),e}const xu=n=>yd.get(n);function sA(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Os(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Os(o.result),c.oldVersion,c.newVersion,Os(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rA=["get","getKey","getAll","getAllKeys","count"],iA=["put","add","delete","clear"],ku=new Map;function mg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ku.get(e))return ku.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=iA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||rA.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return ku.set(e,i),i}eA(n=>({...n,get:(e,t,s)=>mg(e,t)||n.get(e,t,s),has:(e,t)=>!!mg(e,t)||n.has(e,t)}));/**
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
 */class oA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aA(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function aA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lh="@firebase/app",_g="0.13.0";/**
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
 */const us=new Ic("@firebase/app"),lA="@firebase/app-compat",cA="@firebase/analytics-compat",uA="@firebase/analytics",hA="@firebase/app-check-compat",dA="@firebase/app-check",fA="@firebase/auth",pA="@firebase/auth-compat",gA="@firebase/database",mA="@firebase/data-connect",_A="@firebase/database-compat",yA="@firebase/functions",vA="@firebase/functions-compat",EA="@firebase/installations",wA="@firebase/installations-compat",TA="@firebase/messaging",IA="@firebase/messaging-compat",bA="@firebase/performance",CA="@firebase/performance-compat",AA="@firebase/remote-config",SA="@firebase/remote-config-compat",RA="@firebase/storage",PA="@firebase/storage-compat",xA="@firebase/firestore",kA="@firebase/ai",NA="@firebase/firestore-compat",DA="firebase",OA="11.8.0";/**
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
 */const ch="[DEFAULT]",MA={[lh]:"fire-core",[lA]:"fire-core-compat",[uA]:"fire-analytics",[cA]:"fire-analytics-compat",[dA]:"fire-app-check",[hA]:"fire-app-check-compat",[fA]:"fire-auth",[pA]:"fire-auth-compat",[gA]:"fire-rtdb",[mA]:"fire-data-connect",[_A]:"fire-rtdb-compat",[yA]:"fire-fn",[vA]:"fire-fn-compat",[EA]:"fire-iid",[wA]:"fire-iid-compat",[TA]:"fire-fcm",[IA]:"fire-fcm-compat",[bA]:"fire-perf",[CA]:"fire-perf-compat",[AA]:"fire-rc",[SA]:"fire-rc-compat",[RA]:"fire-gcs",[PA]:"fire-gcs-compat",[xA]:"fire-fst",[NA]:"fire-fst-compat",[kA]:"fire-vertex","fire-js":"fire-js",[DA]:"fire-js-all"};/**
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
 */const Nl=new Map,LA=new Map,uh=new Map;function yg(n,e){try{n.container.addComponent(e)}catch(t){us.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wr(n){const e=n.name;if(uh.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,n);for(const t of Nl.values())yg(t,n);for(const t of LA.values())yg(t,n);return!0}function bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function en(n){return n==null?!1:n.settings!==void 0}/**
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
 */const VA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ms=new ca("app","Firebase",VA);/**
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
 */class FA{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ms.create("app-deleted",{appName:this._name})}}/**
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
 */const Nr=OA;function uv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ch,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Ms.create("bad-app-name",{appName:String(r)});if(t||(t=sv()),!t)throw Ms.create("no-options");const i=Nl.get(r);if(i){if(Ws(t,i.options)&&Ws(s,i.config))return i;throw Ms.create("duplicate-app",{appName:r})}const o=new WC(r);for(const c of uh.values())o.addComponent(c);const a=new FA(t,s,o);return Nl.set(r,a),a}function vd(n=ch){const e=Nl.get(n);if(!e&&n===ch&&sv())return uv();if(!e)throw Ms.create("no-app",{appName:n});return e}function Nn(n,e,t){var s;let r=(s=MA[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}wr(new qs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UA="firebase-heartbeat-database",BA=1,jo="firebase-heartbeat-store";let Nu=null;function hv(){return Nu||(Nu=sA(UA,BA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ms.create("idb-open",{originalErrorMessage:n.message})})),Nu}async function $A(n){try{const t=(await hv()).transaction(jo),s=await t.objectStore(jo).get(dv(n));return await t.done,s}catch(e){if(e instanceof ms)us.warn(e.message);else{const t=Ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});us.warn(t.message)}}}async function vg(n,e){try{const s=(await hv()).transaction(jo,"readwrite");await s.objectStore(jo).put(e,dv(n)),await s.done}catch(t){if(t instanceof ms)us.warn(t.message);else{const s=Ms.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});us.warn(s.message)}}}function dv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jA=1024,HA=30;class WA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GA(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Eg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>HA){const o=zA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){us.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eg(),{heartbeatsToSend:s,unsentEntries:r}=qA(this._heartbeatsCache.heartbeats),i=Pl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return us.warn(t),""}}}function Eg(){return new Date().toISOString().substring(0,10)}function qA(n,e=jA){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wg(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),wg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PC()?xC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $A(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wg(n){return Pl(JSON.stringify({version:2,heartbeats:n})).length}function zA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function KA(n){wr(new qs("platform-logger",e=>new oA(e),"PRIVATE")),wr(new qs("heartbeat",e=>new WA(e),"PRIVATE")),Nn(lh,_g,n),Nn(lh,_g,"esm2017"),Nn("fire-js","")}KA("");function Ed(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pv=fv,gv=new ca("auth","Firebase",fv());/**
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
 */const Dl=new Ic("@firebase/auth");function QA(n,...e){Dl.logLevel<=Pe.WARN&&Dl.warn(`Auth (${Nr}): ${n}`,...e)}function ll(n,...e){Dl.logLevel<=Pe.ERROR&&Dl.error(`Auth (${Nr}): ${n}`,...e)}/**
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
 */function Tn(n,...e){throw wd(n,...e)}function Dn(n,...e){return wd(n,...e)}function mv(n,e,t){const s=Object.assign(Object.assign({},pv()),{[e]:t});return new ca("auth","Firebase",s).create(e,{appName:n.name})}function rs(n){return mv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return gv.create(n,...e)}function fe(n,e,...t){if(!n)throw wd(e,...t)}function ts(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ll(e),new Error(e)}function hs(n,e){n||ts(e)}/**
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
 */function hh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function YA(){return Tg()==="http:"||Tg()==="https:"}function Tg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function JA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YA()||CC()||"connection"in navigator)?navigator.onLine:!0}function XA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,hs(t>e,"Short delay should be less than long delay!"),this.isMobile=md()||ov()}get(){return JA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(n,e){hs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class _v{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tS=new ua(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ys(n,e,t,s,r={}){return yv(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ni(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return bC()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&kr(n.emulatorConfig.host)&&(u.credentials="include"),_v.fetch()(await vv(n,n.config.apiHost,t,a),u)})}async function yv(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZA),e);try{const r=new sS(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qa(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw qa(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mv(n,h,u);Tn(n,h)}}catch(r){if(r instanceof ms)throw r;Tn(n,"network-request-failed",{message:String(r)})}}async function ha(n,e,t,s,r={}){const i=await ys(n,e,t,s,r);return"mfaPendingCredential"in i&&Tn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function vv(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?Td(n.config,r):`${n.config.apiScheme}://${r}`;return eS.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function nS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Dn(this.auth,"network-request-failed")),tS.get())})}}function qa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Dn(n,e,s);return r.customData._tokenResponse=t,r}function Ig(n){return n!==void 0&&n.enterprise!==void 0}class rS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iS(n,e){return ys(n,"GET","/v2/recaptchaConfig",sr(n,e))}/**
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
 */async function oS(n,e){return ys(n,"POST","/v1/accounts:delete",e)}async function Ol(n,e){return ys(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ev(n,e=!1){const t=st(n),s=await t.getIdToken(e),r=Id(s);fe(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Io(Du(r.auth_time)),issuedAtTime:Io(Du(r.iat)),expirationTime:Io(Du(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Du(n){return Number(n)*1e3}function Id(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const r=xl(t);return r?JSON.parse(r):(ll("Failed to decode base64 JWT payload"),null)}catch(r){return ll("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bg(n){const e=Id(n);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ms&&aS(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function aS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(n){var e;const t=n.auth,s=await n.getIdToken(),r=await gi(n,Ol(t,{idToken:s}));fe(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tv(i.providerUserInfo):[],a=cS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function wv(n){const e=st(n);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Tv(n){return n.map(e=>{var{providerId:t}=e,s=Ed(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function uS(n,e){const t=await yv(n,{},async()=>{const s=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await vv(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hS(n,e){return ys(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=bg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await uS(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new oi;return s&&(fe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(fe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return ts("not implemented")}}/**
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
 */function Cs(n,e){fe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=Ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ev(this,e)}reload(){return wv(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await gi(this,oS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,p=(r=t.email)!==null&&r!==void 0?r:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,x=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,N=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:G,isAnonymous:de,providerData:ye,stsTokenManager:b}=t;fe(L&&b,e,"internal-error");const y=oi.fromJSON(this.name,b);fe(typeof L=="string",e,"internal-error"),Cs(f,e.name),Cs(p,e.name),fe(typeof G=="boolean",e,"internal-error"),fe(typeof de=="boolean",e,"internal-error"),Cs(m,e.name),Cs(v,e.name),Cs(A,e.name),Cs(x,e.name),Cs(M,e.name),Cs(N,e.name);const w=new mn({uid:L,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:de,photoURL:v,phoneNumber:m,tenantId:A,stsTokenManager:y,createdAt:M,lastLoginAt:N});return ye&&Array.isArray(ye)&&(w.providerData=ye.map(C=>Object.assign({},C))),x&&(w._redirectEventId=x),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new oi;r.updateFromServerResponse(t);const i=new mn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ml(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];fe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Tv(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new oi;a.updateFromIdToken(s);const c=new mn({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new dh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Cg=new Map;function ns(n){hs(n instanceof Function,"Expected a class definition");let e=Cg.get(n);return e?(hs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cg.set(n,e),e)}/**
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
 */class Iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Iv.type="NONE";const fh=Iv;/**
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
 */function cl(n,e,t){return`firebase:${n}:${e}:${t}`}class ai{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=cl(this.userKey,r.apiKey,i),this.fullPersistenceKey=cl("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ol(this.auth,{idToken:e}).catch(()=>{});return t?mn._fromGetAccountInfoResponse(this.auth,t,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ai(ns(fh),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ns(fh);const o=cl(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await Ol(e,{idToken:h}).catch(()=>{});if(!p)break;f=await mn._fromGetAccountInfoResponse(e,p,h)}else f=mn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ai(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ai(i,e,s))}}/**
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
 */function Ag(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pv(e))return"Blackberry";if(xv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Av(e))&&!e.includes("edge/"))return"Chrome";if(Rv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bv(n=Bt()){return/firefox\//i.test(n)}function Cv(n=Bt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Av(n=Bt()){return/crios\//i.test(n)}function Sv(n=Bt()){return/iemobile/i.test(n)}function Rv(n=Bt()){return/android/i.test(n)}function Pv(n=Bt()){return/blackberry/i.test(n)}function xv(n=Bt()){return/webos/i.test(n)}function bd(n=Bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function dS(n=Bt()){var e;return bd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return AC()&&document.documentMode===10}function kv(n=Bt()){return bd(n)||Rv(n)||xv(n)||Pv(n)||/windows phone/i.test(n)||Sv(n)}/**
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
 */function Nv(n,e=[]){let t;switch(n){case"Browser":t=Ag(Bt());break;case"Worker":t=`${Ag(Bt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nr}/${s}`}/**
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
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function gS(n,e={}){return ys(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
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
 */const mS=6;class _S{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:mS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yS{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ns(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ol(this,{idToken:e}),s=await mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(rs(this));const t=e?st(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ns(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gS(this),t=new _S(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await hS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ns(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[ns(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Dr(n){return st(n)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VC(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vS(n){Cc=n}function Dv(n){return Cc.loadJS(n)}function ES(){return Cc.recaptchaEnterpriseScript}function wS(){return Cc.gapiScript}function TS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class IS{constructor(){this.enterprise=new bS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CS="recaptcha-enterprise",Ov="NO_RECAPTCHA";class AS{constructor(e){this.type=CS,this.auth=Dr(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{iS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new rS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ig(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ov)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&Ig(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ES();c.length!==0&&(c+=a),Dv(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Rg(n,e,t,s=!1,r=!1){const i=new AS(n);let o;if(r)o=Ov;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ph(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Rg(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Rg(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function Mv(n,e){const t=bc(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Ws(i,e??{}))return r;Tn(r,"already-initialized")}return t.initialize({options:e})}function SS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ns);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Lv(n,e,t){const s=Dr(n);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Vv(e),{host:o,port:a}=RS(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Ws(u,s.config.emulator)&&Ws(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,kr(o)?(pd(`${i}//${o}${c}`),gd("Auth",!0)):PS()}function Vv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function RS(n){const e=Vv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pg(o)}}}function Pg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,t){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}async function xS(n,e){return ys(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function kS(n,e){return ha(n,"POST","/v1/accounts:signInWithPassword",sr(n,e))}/**
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
 */async function NS(n,e){return ha(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}async function DS(n,e){return ha(n,"POST","/v1/accounts:signInWithEmailLink",sr(n,e))}/**
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
 */class mi extends Ac{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new mi(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new mi(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ph(e,t,"signInWithPassword",kS);case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ph(e,s,"signUpPassword",xS);case"emailLink":return DS(e,{idToken:t,email:this._email,oobCode:this._password});default:Tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(n,e){return ha(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
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
 */const OS="http://localhost";class Gs extends Ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=Ed(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Gs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return li(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,li(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,li(e,t)}buildRequest(){const e={requestUri:OS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ni(t)}return e}}/**
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
 */function MS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LS(n){const e=co(uo(n)).link,t=e?co(uo(e)).deep_link_id:null,s=co(uo(n)).deep_link_id;return(s?co(uo(s)).link:null)||s||t||e||n}class Sc{constructor(e){var t,s,r,i,o,a;const c=co(uo(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=MS((r=c.mode)!==null&&r!==void 0?r:null);fe(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=LS(e);try{return new Sc(t)}catch{return null}}}/**
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
 */class Or{constructor(){this.providerId=Or.PROVIDER_ID}static credential(e,t){return mi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Sc.parseLink(t);return fe(s,"argument-error"),mi._fromEmailAndCode(e,s.code,s.tenantId)}}Or.PROVIDER_ID="password";Or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class da extends Fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends da{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Xn.credential(t,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Zn extends da{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
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
 */class es extends da{constructor(){super("twitter.com")}static credential(e,t){return Gs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return es.credential(t,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
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
 */async function VS(n,e){return ha(n,"POST","/v1/accounts:signUp",sr(n,e))}/**
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
 */class Tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await mn._fromIdTokenResponse(e,s,r),o=xg(s);return new Tr({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=xg(s);return new Tr({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function xg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ll extends ms{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ll(e,t,s,r)}}function Uv(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(n,i,e,s):i})}async function FS(n,e,t=!1){const s=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tr._forOperation(n,"link",s)}/**
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
 */async function US(n,e,t=!1){const{auth:s}=n;if(en(s.app))return Promise.reject(rs(s));const r="reauthenticate";try{const i=await gi(n,Uv(s,r,e,n),t);fe(i.idToken,s,"internal-error");const o=Id(i.idToken);fe(o,s,"internal-error");const{sub:a}=o;return fe(n.uid===a,s,"user-mismatch"),Tr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tn(s,"user-mismatch"),i}}/**
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
 */async function Bv(n,e,t=!1){if(en(n.app))return Promise.reject(rs(n));const s="signIn",r=await Uv(n,s,e),i=await Tr._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function $v(n,e){return Bv(Dr(n),e)}/**
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
 */async function jv(n){const e=Dr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hv(n,e,t){if(en(n.app))return Promise.reject(rs(n));const s=Dr(n),o=await ph(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jv(n),c}),a=await Tr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Wv(n,e,t){return en(n.app)?Promise.reject(rs(n)):$v(st(n),Or.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&jv(n),s})}/**
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
 */async function BS(n,e){return ys(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Cd(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=st(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await gi(s,BS(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function qv(n,e,t,s){return st(n).onIdTokenChanged(e,t,s)}function Gv(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function fa(n,e,t,s){return st(n).onAuthStateChanged(e,t,s)}function Ad(n){return st(n).signOut()}const Vl="__sak";/**
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
 */class zv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $S=1e3,jS=10;class Kv extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);fS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jS):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kv.type="LOCAL";const Qv=Kv;/**
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
 */class Yv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yv.type="SESSION";const Sd=Yv;/**
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
 */function HS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await HS(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
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
 */function Rd(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Rd("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function qS(n){On().location.href=n}/**
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
 */function Jv(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function GS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function KS(){return Jv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",QS=1,Fl="firebaseLocalStorage",Zv="fbase_key";class pa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(n,e){return n.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function YS(){const n=indexedDB.deleteDatabase(Xv);return new pa(n).toPromise()}function gh(){const n=indexedDB.open(Xv,QS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Fl,{keyPath:Zv})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Fl)?e(s):(s.close(),await YS(),e(await gh()))})})}async function kg(n,e,t){const s=Pc(n,!0).put({[Zv]:e,value:t});return new pa(s).toPromise()}async function JS(n,e){const t=Pc(n,!1).get(e),s=await new pa(t).toPromise();return s===void 0?null:s.value}function Ng(n,e){const t=Pc(n,!0).delete(e);return new pa(t).toPromise()}const XS=800,ZS=3;class eE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ZS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(KS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await GS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gh();return await kg(e,Vl,"1"),await Ng(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>kg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>JS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Pc(r,!1).getAll();return new pa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eE.type="LOCAL";const tE=eE;new ua(3e4,6e4);/**
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
 */function eR(n,e){return e?ns(e):(fe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pd extends Ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tR(n){return Bv(n.auth,new Pd(n),n.bypassAuthState)}function nR(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),US(t,new Pd(n),n.bypassAuthState)}async function sR(n){const{auth:e,user:t}=n;return fe(t,e,"internal-error"),FS(t,new Pd(n),n.bypassAuthState)}/**
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
 */class nE{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tR;case"linkViaPopup":case"linkViaRedirect":return sR;case"reauthViaPopup":case"reauthViaRedirect":return nR;default:Tn(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rR=new ua(2e3,1e4);class Xr extends nE{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){hs(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rR.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const iR="pendingRedirect",ul=new Map;class oR extends nE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const s=await aR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aR(n,e){const t=uR(e),s=cR(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function lR(n,e){ul.set(n._key(),e)}function cR(n){return ns(n._redirectPersistence)}function uR(n){return cl(iR,n.config.apiKey,n.name)}async function hR(n,e,t=!1){if(en(n.app))return Promise.reject(rs(n));const s=Dr(n),r=eR(s,e),o=await new oR(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dR=10*60*1e3;class fR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!sE(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Dn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dg(e))}saveEventToCache(e){this.cachedEventUids.add(Dg(e)),this.lastProcessedEventTime=Date.now()}}function Dg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sE(n);default:return!1}}/**
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
 */async function gR(n,e={}){return ys(n,"GET","/v1/projects",e)}/**
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
 */const mR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_R=/^https?/;async function yR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gR(n);for(const t of e)try{if(vR(t))return}catch{}Tn(n,"unauthorized-domain")}function vR(n){const e=hh(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!_R.test(t))return!1;if(mR.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const ER=new ua(3e4,6e4);function Og(){const n=On().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wR(n){return new Promise((e,t)=>{var s,r,i;function o(){Og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Og(),t(Dn(n,"network-request-failed"))},timeout:ER.get()})}if(!((r=(s=On().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=On().gapi)===null||i===void 0)&&i.load)o();else{const a=TS("iframefcb");return On()[a]=()=>{gapi.load?o():t(Dn(n,"network-request-failed"))},Dv(`${wS()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw hl=null,e})}let hl=null;function TR(n){return hl=hl||wR(n),hl}/**
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
 */const IR=new ua(5e3,15e3),bR="__/auth/iframe",CR="emulator/auth/iframe",AR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RR(n){const e=n.config;fe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Td(e,CR):`https://${n.config.authDomain}/${bR}`,s={apiKey:e.apiKey,appName:n.name,v:Nr},r=SR.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ni(s).slice(1)}`}async function PR(n){const e=await TR(n),t=On().gapi;return fe(t,n,"internal-error"),e.open({where:document.body,url:RR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dn(n,"network-request-failed"),a=On().setTimeout(()=>{i(o)},IR.get());function c(){On().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const xR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kR=500,NR=600,DR="_blank",OR="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MR(n,e,t,s=kR,r=NR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xR),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Bt().toLowerCase();t&&(a=Av(u)?DR:t),bv(u)&&(e=e||OR,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,v])=>`${p}${m}=${v},`,"");if(dS(u)&&a!=="_self")return LR(e||"",a),new Mg(null);const f=window.open(e||"",a,h);fe(f,n,"popup-blocked");try{f.focus()}catch{}return new Mg(f)}function LR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const VR="__/auth/handler",FR="emulator/auth/handler",UR=encodeURIComponent("fac");async function Lg(n,e,t,s,r,i){fe(n.config.authDomain,n,"auth-domain-config-required"),fe(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Nr,eventId:r};if(e instanceof Fv){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof da){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${UR}=${encodeURIComponent(c)}`:"";return`${BR(n)}?${Ni(a).slice(1)}${u}`}function BR({config:n}){return n.emulator?Td(n,FR):`https://${n.authDomain}/${VR}`}/**
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
 */const Ou="webStorageSupport";class $R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sd,this._completeRedirectFn=hR,this._overrideRedirectResult=lR}async _openPopup(e,t,s,r){var i;hs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lg(e,t,s,hh(),r);return MR(e,o,Rd())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Lg(e,t,s,hh(),r);return qS(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(hs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await PR(e),s=new fR(e);return t.register("authEvent",r=>(fe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ou,{type:Ou},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ou];o!==void 0&&t(!!o),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kv()||Cv()||bd()}}const rE=$R;var Vg="@firebase/auth",Fg="1.10.6";/**
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
 */class jR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WR(n){wr(new qs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(n)},u=new yS(s,r,i,c);return SS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wr(new qs("auth-internal",e=>{const t=Dr(e.getProvider("auth").getImmediate());return(s=>new jR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Vg,Fg,HR(n)),Nn(Vg,Fg,"esm2017")}/**
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
 */const qR=5*60,GR=rv("authIdTokenMaxAge")||qR;let Ug=null;const zR=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>GR)return;const r=t==null?void 0:t.token;Ug!==r&&(Ug=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xc(n=vd()){const e=bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Mv(n,{popupRedirectResolver:rE,persistence:[tE,Qv,Sd]}),s=rv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=zR(i.toString());Gv(t,o,()=>o(t.currentUser)),qv(t,a=>o(a))}}const r=tv("auth");return r&&Lv(t,`http://${r}`),t}function KR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}vS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Dn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",KR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WR("Browser");const QR=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:Sc,AuthCredential:Ac,EmailAuthCredential:mi,EmailAuthProvider:Or,FacebookAuthProvider:Jn,GithubAuthProvider:Zn,GoogleAuthProvider:Xn,OAuthCredential:Gs,TwitterAuthProvider:es,beforeAuthStateChanged:Gv,browserLocalPersistence:Qv,browserPopupRedirectResolver:rE,browserSessionPersistence:Sd,connectAuthEmulator:Lv,createUserWithEmailAndPassword:Hv,getAuth:xc,getIdTokenResult:Ev,inMemoryPersistence:fh,indexedDBLocalPersistence:tE,initializeAuth:Mv,onAuthStateChanged:fa,onIdTokenChanged:qv,prodErrorMap:pv,reload:wv,signInWithCredential:$v,signInWithEmailAndPassword:Wv,signOut:Ad,updateProfile:Cd},Symbol.toStringTag,{value:"Module"}));var YR="firebase",JR="11.8.1";/**
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
 */Nn(YR,JR,"app");var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ls,iE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function w(){}w.prototype=y.prototype,b.D=y.prototype,b.prototype=new w,b.prototype.constructor=b,b.C=function(C,S,R){for(var T=Array(arguments.length-2),at=2;at<arguments.length;at++)T[at-2]=arguments[at];return y.prototype[S].apply(C,T)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,y,w){w||(w=0);var C=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)C[S]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(S=0;16>S;++S)C[S]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=b.g[0],w=b.g[1],S=b.g[2];var R=b.g[3],T=y+(R^w&(S^R))+C[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=R+(S^y&(w^S))+C[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(w^R&(y^w))+C[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=w+(y^S&(R^y))+C[3]+3250441966&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(R^w&(S^R))+C[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(S^y&(w^S))+C[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(w^R&(y^w))+C[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=w+(y^S&(R^y))+C[7]+4249261313&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(R^w&(S^R))+C[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(S^y&(w^S))+C[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(w^R&(y^w))+C[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=w+(y^S&(R^y))+C[11]+2304563134&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(R^w&(S^R))+C[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(S^y&(w^S))+C[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=S+(w^R&(y^w))+C[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=w+(y^S&(R^y))+C[15]+1236535329&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(S^R&(w^S))+C[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^S&(y^w))+C[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(R^y))+C[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(S^R))+C[0]+3921069994&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(w^S))+C[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^S&(y^w))+C[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(R^y))+C[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(S^R))+C[4]+3889429448&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(w^S))+C[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^S&(y^w))+C[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(R^y))+C[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(S^R))+C[8]+1163531501&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^R&(w^S))+C[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^S&(y^w))+C[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(R^y))+C[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(S^R))+C[12]+2368359562&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(w^S^R)+C[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^S)+C[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^w)+C[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=w+(S^R^y)+C[14]+4259657740&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^R)+C[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^S)+C[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^w)+C[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=w+(S^R^y)+C[10]+3200236656&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^R)+C[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^S)+C[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^w)+C[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=w+(S^R^y)+C[6]+76029189&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^R)+C[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^S)+C[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=S+(R^y^w)+C[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=w+(S^R^y)+C[2]+3299628645&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(S^(w|~R))+C[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~S))+C[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~w))+C[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=w+(R^(S|~y))+C[5]+4237533241&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~R))+C[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~S))+C[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~w))+C[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=w+(R^(S|~y))+C[1]+2240044497&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~R))+C[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~S))+C[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~w))+C[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=w+(R^(S|~y))+C[13]+1309151649&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~R))+C[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~S))+C[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=S+(y^(R|~w))+C[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=w+(R^(S|~y))+C[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+R&4294967295}s.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var w=y-this.blockSize,C=this.B,S=this.h,R=0;R<y;){if(S==0)for(;R<=w;)r(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<y;)if(C[S++]=b.charCodeAt(R++),S==this.blockSize){r(this,C),S=0;break}}else for(;R<y;)if(C[S++]=b[R++],S==this.blockSize){r(this,C),S=0;break}}this.h=S,this.o+=y},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var w=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=w&255,w/=256;for(this.u(b),b=Array(16),y=w=0;4>y;++y)for(var C=0;32>C;C+=8)b[w++]=this.g[y]>>>C&255;return b};function i(b,y){var w=a;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=y(b)}function o(b,y){this.h=y;for(var w=[],C=!0,S=b.length-1;0<=S;S--){var R=b[S]|0;C&&R==y||(w[S]=R,C=!1)}this.g=w}var a={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return x(u(-b));for(var y=[],w=1,C=0;b>=w;C++)y[C]=b/w|0,w*=4294967296;return new o(y,0)}function h(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return x(h(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),C=f,S=0;S<b.length;S+=8){var R=Math.min(8,b.length-S),T=parseInt(b.substring(S,S+R),y);8>R?(R=u(Math.pow(y,R)),C=C.j(R).add(u(T))):(C=C.j(w),C=C.add(u(T)))}return C}var f=c(0),p=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(A(this))return-x(this).m();for(var b=0,y=1,w=0;w<this.g.length;w++){var C=this.i(w);b+=(0<=C?C:4294967296+C)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(v(this))return"0";if(A(this))return"-"+x(this).toString(b);for(var y=u(Math.pow(b,6)),w=this,C="";;){var S=G(w,y).g;w=M(w,S.j(y));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(b);if(w=S,v(w))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function v(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}n.l=function(b){return b=M(this,b),A(b)?-1:v(b)?0:1};function x(b){for(var y=b.g.length,w=[],C=0;C<y;C++)w[C]=~b.g[C];return new o(w,~b.h).add(p)}n.abs=function(){return A(this)?x(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),w=[],C=0,S=0;S<=y;S++){var R=C+(this.i(S)&65535)+(b.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);C=T>>>16,R&=65535,T&=65535,w[S]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function M(b,y){return b.add(x(y))}n.j=function(b){if(v(this)||v(b))return f;if(A(this))return A(b)?x(this).j(x(b)):x(x(this).j(b));if(A(b))return x(this.j(x(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var y=this.g.length+b.g.length,w=[],C=0;C<2*y;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var S=0;S<b.g.length;S++){var R=this.i(C)>>>16,T=this.i(C)&65535,at=b.i(S)>>>16,St=b.i(S)&65535;w[2*C+2*S]+=T*St,N(w,2*C+2*S),w[2*C+2*S+1]+=R*St,N(w,2*C+2*S+1),w[2*C+2*S+1]+=T*at,N(w,2*C+2*S+1),w[2*C+2*S+2]+=R*at,N(w,2*C+2*S+2)}for(C=0;C<y;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=y;C<2*y;C++)w[C]=0;return new o(w,0)};function N(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function L(b,y){this.g=b,this.h=y}function G(b,y){if(v(y))throw Error("division by zero");if(v(b))return new L(f,f);if(A(b))return y=G(x(b),y),new L(x(y.g),x(y.h));if(A(y))return y=G(b,x(y)),new L(x(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var w=p,C=y;0>=C.l(b);)w=de(w),C=de(C);var S=ye(w,1),R=ye(C,1);for(C=ye(C,2),w=ye(w,2);!v(C);){var T=R.add(C);0>=T.l(b)&&(S=S.add(w),R=T),C=ye(C,1),w=ye(w,1)}return y=M(b,S.j(y)),new L(S,y)}for(S=f;0<=b.l(y);){for(w=Math.max(1,Math.floor(b.m()/y.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=u(w),T=R.j(y);A(T)||0<T.l(b);)w-=C,R=u(w),T=R.j(y);v(R)&&(R=p),S=S.add(R),b=M(b,T)}return new L(S,b)}n.A=function(b){return G(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)&b.i(C);return new o(w,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)|b.i(C);return new o(w,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)^b.i(C);return new o(w,this.h^b.h)};function de(b){for(var y=b.g.length+1,w=[],C=0;C<y;C++)w[C]=b.i(C)<<1|b.i(C-1)>>>31;return new o(w,b.h)}function ye(b,y){var w=y>>5;y%=32;for(var C=b.g.length-w,S=[],R=0;R<C;R++)S[R]=0<y?b.i(R+w)>>>y|b.i(R+w+1)<<32-y:b.i(R+w);return new o(S,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,iE=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ls=o}).apply(typeof Bg<"u"?Bg:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oE,ho,aE,dl,mh,lE,cE,uE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function r(l,d){if(d)e:{var g=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var k=l[_];if(!(k in g))break e;g=g[k]}l=l[l.length-1],_=g[l],d=d(_),d!=_&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,_=!1,k={next:function(){if(!_&&g<l.length){var D=g++;return{value:d(D,l[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),l.apply(d,k)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function v(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(_,k,D){for(var J=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)J[qe-2]=arguments[qe];return d.prototype[k].apply(_,J)}}function A(l){const d=l.length;if(0<d){const g=Array(d);for(let _=0;_<d;_++)g[_]=l[_];return g}return[]}function x(l,d){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(c(_)){const k=l.length||0,D=_.length||0;l.length=k+D;for(let J=0;J<D;J++)l[k+J]=_[J]}else l.push(_)}}class M{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function N(l){return/^[\s\xa0]*$/.test(l)}function L(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function G(l){return G[" "](l),l}G[" "]=function(){};var de=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ye(l,d,g){for(const _ in l)d.call(g,l[_],_,l)}function b(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function y(l){const d={};for(const g in l)d[g]=l[g];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let g,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(g in _)l[g]=_[g];for(let D=0;D<w.length;D++)g=w[D],Object.prototype.hasOwnProperty.call(_,g)&&(l[g]=_[g])}}function S(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function R(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Te;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class at{constructor(){this.h=this.g=null}add(d,g){const _=St.get();_.set(d,g),this.h?this.h.next=_:this.g=_,this.h=_}}var St=new M(()=>new $,l=>l.reset());class ${constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let H,W=!1,Te=new at,Ie=()=>{const l=a.Promise.resolve(void 0);H=()=>{l.then(Re)}};var Re=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(g){R(g)}var d=St;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}W=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Es=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function bn(l,d){if(We.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(de){e:{try{G(d.nodeName);var k=!0;break e}catch{}k=!1}k||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:qt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&bn.aa.h.call(this)}}v(bn,We);var qt={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),te=0;function ee(l,d,g,_,k){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!_,this.ha=k,this.key=++te,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Me(l){this.src=l,this.g={},this.h=0}Me.prototype.add=function(l,d,g,_,k){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var J=I(l,d,_,k);return-1<J?(d=l[J],g||(d.fa=!1)):(d=new ee(d,this.src,D,!!_,k),d.fa=g,l.push(d)),d};function E(l,d){var g=d.type;if(g in l.g){var _=l.g[g],k=Array.prototype.indexOf.call(_,d,void 0),D;(D=0<=k)&&Array.prototype.splice.call(_,k,1),D&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function I(l,d,g,_){for(var k=0;k<l.length;++k){var D=l[k];if(!D.da&&D.listener==d&&D.capture==!!g&&D.ha==_)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function j(l,d,g,_,k){if(Array.isArray(d)){for(var D=0;D<d.length;D++)j(l,d[D],g,_,k);return null}return g=me(g),l&&l[V]?l.K(d,g,u(_)?!!_.capture:!1,k):U(l,d,g,!1,_,k)}function U(l,d,g,_,k,D){if(!d)throw Error("Invalid event type");var J=u(k)?!!k.capture:!!k,qe=X(l);if(qe||(l[P]=qe=new Me(l)),g=qe.add(d,g,_,J,D),g.proxy)return g;if(_=Z(),g.proxy=_,_.src=l,_.listener=g,l.addEventListener)Es||(k=J),k===void 0&&(k=!1),l.addEventListener(d.toString(),_,k);else if(l.attachEvent)l.attachEvent(z(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Z(){function l(g){return d.call(l.src,l.listener,g)}const d=ae;return l}function Y(l,d,g,_,k){if(Array.isArray(d))for(var D=0;D<d.length;D++)Y(l,d[D],g,_,k);else _=u(_)?!!_.capture:!!_,g=me(g),l&&l[V]?(l=l.i,d=String(d).toString(),d in l.g&&(D=l.g[d],g=I(D,g,_,k),-1<g&&(se(D[g]),Array.prototype.splice.call(D,g,1),D.length==0&&(delete l.g[d],l.h--)))):l&&(l=X(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,g,_,k)),(g=-1<l?d[l]:null)&&K(g))}function K(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[V])E(d.i,l);else{var g=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(g,_,l.capture):d.detachEvent?d.detachEvent(z(g),_):d.addListener&&d.removeListener&&d.removeListener(_),(g=X(d))?(E(g,l),g.h==0&&(g.src=null,d[P]=null)):se(l)}}}function z(l){return l in F?F[l]:F[l]="on"+l}function ae(l,d){if(l.da)l=!0;else{d=new bn(d,this);var g=l.listener,_=l.ha||l.src;l.fa&&K(l),l=g.call(_,d)}return l}function X(l){return l=l[P],l instanceof Me?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function ue(){Ae.call(this),this.i=new Me(this),this.M=this,this.F=null}v(ue,Ae),ue.prototype[V]=!0,ue.prototype.removeEventListener=function(l,d,g,_){Y(this,l,d,g,_)};function be(l,d){var g,_=l.F;if(_)for(g=[];_;_=_.F)g.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new We(d,l);else if(d instanceof We)d.target=d.target||l;else{var k=d;d=new We(_,l),C(d,k)}if(k=!0,g)for(var D=g.length-1;0<=D;D--){var J=d.g=g[D];k=De(J,_,!0,d)&&k}if(J=d.g=l,k=De(J,_,!0,d)&&k,k=De(J,_,!1,d)&&k,g)for(D=0;D<g.length;D++)J=d.g=g[D],k=De(J,_,!1,d)&&k}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],_=0;_<g.length;_++)se(g[_]);delete l.g[d],l.h--}}this.F=null},ue.prototype.K=function(l,d,g,_){return this.i.add(String(l),d,!1,g,_)},ue.prototype.L=function(l,d,g,_){return this.i.add(String(l),d,!0,g,_)};function De(l,d,g,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var k=!0,D=0;D<d.length;++D){var J=d[D];if(J&&!J.da&&J.capture==g){var qe=J.listener,wt=J.ha||J.src;J.fa&&E(l.i,J),k=qe.call(wt,_)!==!1&&k}}return k&&!_.defaultPrevented}function Rt(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function vt(l){l.g=Rt(()=>{l.g=null,l.i&&(l.i=!1,vt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class on extends Ae{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(l){Ae.call(this),this.h=l,this.g={}}v(Pt,Ae);var ws=[];function Bi(l){ye(l.g,function(d,g){this.g.hasOwnProperty(g)&&K(d)},l),l.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),Bi(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Et=a.JSON.stringify,an=a.JSON.parse,Ca=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ru(){}ru.prototype.h=null;function jf(l){return l.h||(l.h=l.i())}function Hf(){}var $i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function iu(){We.call(this,"d")}v(iu,We);function ou(){We.call(this,"c")}v(ou,We);var ir={},Wf=null;function Aa(){return Wf=Wf||new ue}ir.La="serverreachability";function qf(l){We.call(this,ir.La,l)}v(qf,We);function ji(l){const d=Aa();be(d,new qf(d))}ir.STAT_EVENT="statevent";function Gf(l,d){We.call(this,ir.STAT_EVENT,l),this.stat=d}v(Gf,We);function $t(l){const d=Aa();be(d,new Gf(d,l))}ir.Ma="timingevent";function zf(l,d){We.call(this,ir.Ma,l),this.size=d}v(zf,We);function Hi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function wI(l,d,g,_,k,D){l.info(function(){if(l.g)if(D)for(var J="",qe=D.split("&"),wt=0;wt<qe.length;wt++){var Le=qe[wt].split("=");if(1<Le.length){var xt=Le[0];Le=Le[1];var kt=xt.split("_");J=2<=kt.length&&kt[1]=="type"?J+(xt+"="+Le+"&"):J+(xt+"=redacted&")}}else J=null;else J=D;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+d+`
`+g+`
`+J})}function TI(l,d,g,_,k,D,J){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+d+`
`+g+`
`+D+" "+J})}function Br(l,d,g,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+bI(l,g)+(_?" "+_:"")})}function II(l,d){l.info(function(){return"TIMEOUT: "+d})}Wi.prototype.info=function(){};function bI(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var _=g[l];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var J=1;J<k.length;J++)k[J]=""}}}}return Et(g)}catch{return d}}var Sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},au;function Ra(){}v(Ra,ru),Ra.prototype.g=function(){return new XMLHttpRequest},Ra.prototype.i=function(){return{}},au=new Ra;function Ts(l,d,g,_){this.j=l,this.i=d,this.l=g,this.R=_||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qf}function Qf(){this.i=null,this.g="",this.h=!1}var Yf={},lu={};function cu(l,d,g){l.L=1,l.v=Na(jn(d)),l.m=g,l.P=!0,Jf(l,null)}function Jf(l,d){l.F=Date.now(),Pa(l),l.A=jn(l.v);var g=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),hp(g.i,"t",_),l.C=0,g=l.j.J,l.h=new Qf,l.g=Pp(l.j,g?d:null,!l.m),0<l.O&&(l.M=new on(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,_=l.ca;var k="readystatechange";Array.isArray(k)||(k&&(ws[0]=k.toString()),k=ws);for(var D=0;D<k.length;D++){var J=j(g,k[D],_||d.handleEvent,!1,d.h||d);if(!J)break;d.g[J.key]=J}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ji(),wI(l.i,l.u,l.A,l.l,l.R,l.m)}Ts.prototype.ca=function(l){l=l.target;const d=this.M;d&&Hn(l)==3?d.j():this.Y(l)},Ts.prototype.Y=function(l){try{if(l==this.g)e:{const kt=Hn(this.g);var d=this.g.Ba();const Hr=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||yp(this.g)))){this.J||kt!=4||d==7||(d==8||0>=Hr?ji(3):ji(2)),uu(this);var g=this.g.Z();this.X=g;t:if(Xf(this)){var _=yp(this.g);l="";var k=_.length,D=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),qi(this);var J="";break t}this.h.i=new a.TextDecoder}for(d=0;d<k;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(D&&d==k-1)});_.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,TI(this.i,this.u,this.A,this.l,this.R,kt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,wt=this.g;if((qe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(qe)){var Le=qe;break t}}Le=null}if(g=Le)Br(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,g);else{this.o=!1,this.s=3,$t(12),or(this),qi(this);break e}}if(this.P){g=!0;let pn;for(;!this.J&&this.C<J.length;)if(pn=CI(this,J),pn==lu){kt==4&&(this.s=4,$t(14),g=!1),Br(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==Yf){this.s=4,$t(15),Br(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else Br(this.i,this.l,pn,null),hu(this,pn);if(Xf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||J.length!=0||this.h.h||(this.s=1,$t(16),g=!1),this.o=this.o&&g,!g)Br(this.i,this.l,J,"[Invalid Chunked Response]"),or(this),qi(this);else if(0<J.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),_u(xt),xt.M=!0,$t(11))}}else Br(this.i,this.l,J,null),hu(this,J);kt==4&&or(this),this.o&&!this.J&&(kt==4?Cp(this.j,this):(this.o=!1,Pa(this)))}else jI(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),or(this),qi(this)}}}catch{}finally{}};function Xf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function CI(l,d){var g=l.C,_=d.indexOf(`
`,g);return _==-1?lu:(g=Number(d.substring(g,_)),isNaN(g)?Yf:(_+=1,_+g>d.length?lu:(d=d.slice(_,_+g),l.C=_+g,d)))}Ts.prototype.cancel=function(){this.J=!0,or(this)};function Pa(l){l.S=Date.now()+l.I,Zf(l,l.I)}function Zf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Hi(p(l.ba,l),d)}function uu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ts.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(II(this.i,this.A),this.L!=2&&(ji(),$t(17)),or(this),this.s=2,qi(this)):Zf(this,this.S-l)};function qi(l){l.j.G==0||l.J||Cp(l.j,l)}function or(l){uu(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Bi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function hu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||du(g.h,l))){if(!l.K&&du(g.h,l)&&g.G==3){try{var _=g.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Fa(g),La(g);else break e;mu(g),$t(18)}}else g.za=k[1],0<g.za-g.T&&37500>k[2]&&g.F&&g.v==0&&!g.C&&(g.C=Hi(p(g.Za,g),6e3));if(1>=np(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else lr(g,11)}else if((l.K||g.g==l)&&Fa(g),!N(d))for(k=g.Da.g.parse(d),d=0;d<k.length;d++){let Le=k[d];if(g.T=Le[0],Le=Le[1],g.G==2)if(Le[0]=="c"){g.K=Le[1],g.ia=Le[2];const xt=Le[3];xt!=null&&(g.la=xt,g.j.info("VER="+g.la));const kt=Le[4];kt!=null&&(g.Aa=kt,g.j.info("SVER="+g.Aa));const Hr=Le[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(_=1.5*Hr,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const pn=l.g;if(pn){const Ba=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ba){var D=_.h;D.g||Ba.indexOf("spdy")==-1&&Ba.indexOf("quic")==-1&&Ba.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(fu(D,D.h),D.h=null))}if(_.D){const yu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;yu&&(_.ya=yu,Je(_.I,_.D,yu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var J=l;if(_.qa=Rp(_,_.J?_.ia:null,_.W),J.K){sp(_.h,J);var qe=J,wt=_.L;wt&&(qe.I=wt),qe.B&&(uu(qe),Pa(qe)),_.g=J}else Ip(_);0<g.i.length&&Va(g)}else Le[0]!="stop"&&Le[0]!="close"||lr(g,7);else g.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?lr(g,7):gu(g):Le[0]!="noop"&&g.l&&g.l.ta(Le),g.v=0)}}ji(4)}catch{}}var AI=class{constructor(l,d){this.g=l,this.map=d}};function ep(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function np(l){return l.h?1:l.g?l.g.size:0}function du(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function fu(l,d){l.g?l.g.add(d):l.h=d}function sp(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}ep.prototype.cancel=function(){if(this.i=rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function rp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return A(l.i)}function SI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,_=0;_<g;_++)d.push(l[_]);return d}d=[],g=0;for(_ in l)d[g++]=l[_];return d}function RI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const _ in l)d[g++]=_;return d}}}function ip(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=RI(l),_=SI(l),k=_.length,D=0;D<k;D++)d.call(void 0,_[D],g&&g[D],l)}var op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PI(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var _=l[g].indexOf("="),k=null;if(0<=_){var D=l[g].substring(0,_);k=l[g].substring(_+1)}else D=l[g];d(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ar){this.h=l.h,xa(this,l.j),this.o=l.o,this.g=l.g,ka(this,l.s),this.l=l.l;var d=l.i,g=new Ki;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),ap(this,g),this.m=l.m}else l&&(d=String(l).match(op))?(this.h=!1,xa(this,d[1]||"",!0),this.o=Gi(d[2]||""),this.g=Gi(d[3]||"",!0),ka(this,d[4]),this.l=Gi(d[5]||"",!0),ap(this,d[6]||"",!0),this.m=Gi(d[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}ar.prototype.toString=function(){var l=[],d=this.j;d&&l.push(zi(d,lp,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(zi(d,lp,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(zi(g,g.charAt(0)=="/"?NI:kI,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",zi(g,OI)),l.join("")};function jn(l){return new ar(l)}function xa(l,d,g){l.j=g?Gi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ka(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function ap(l,d,g){d instanceof Ki?(l.i=d,MI(l.i,l.h)):(g||(d=zi(d,DI)),l.i=new Ki(d,l.h))}function Je(l,d,g){l.i.set(d,g)}function Na(l){return Je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Gi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function zi(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,xI),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function xI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var lp=/[#\/\?@]/g,kI=/[#\?:]/g,NI=/[#\?]/g,DI=/[#\?@]/g,OI=/#/g;function Ki(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Is(l){l.g||(l.g=new Map,l.h=0,l.i&&PI(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}n=Ki.prototype,n.add=function(l,d){Is(this),this.i=null,l=$r(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function cp(l,d){Is(l),d=$r(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function up(l,d){return Is(l),d=$r(l,d),l.g.has(d)}n.forEach=function(l,d){Is(this),this.g.forEach(function(g,_){g.forEach(function(k){l.call(d,k,_,this)},this)},this)},n.na=function(){Is(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let _=0;_<d.length;_++){const k=l[_];for(let D=0;D<k.length;D++)g.push(d[_])}return g},n.V=function(l){Is(this);let d=[];if(typeof l=="string")up(this,l)&&(d=d.concat(this.g.get($r(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},n.set=function(l,d){return Is(this),this.i=null,l=$r(this,l),up(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function hp(l,d,g){cp(l,d),0<g.length&&(l.i=null,l.g.set($r(l,d),A(g)),l.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var _=d[g];const D=encodeURIComponent(String(_)),J=this.V(_);for(_=0;_<J.length;_++){var k=D;J[_]!==""&&(k+="="+encodeURIComponent(String(J[_]))),l.push(k)}}return this.i=l.join("&")};function $r(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function MI(l,d){d&&!l.j&&(Is(l),l.i=null,l.g.forEach(function(g,_){var k=_.toLowerCase();_!=k&&(cp(this,_),hp(this,k,g))},l)),l.j=d}function LI(l,d){const g=new Wi;if(a.Image){const _=new Image;_.onload=m(bs,g,"TestLoadImage: loaded",!0,d,_),_.onerror=m(bs,g,"TestLoadImage: error",!1,d,_),_.onabort=m(bs,g,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(bs,g,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function VI(l,d){const g=new Wi,_=new AbortController,k=setTimeout(()=>{_.abort(),bs(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(D=>{clearTimeout(k),D.ok?bs(g,"TestPingServer: ok",!0,d):bs(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),bs(g,"TestPingServer: error",!1,d)})}function bs(l,d,g,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(g)}catch{}}function FI(){this.g=new Ca}function UI(l,d,g){const _=g||"";try{ip(l,function(k,D){let J=k;u(k)&&(J=Et(k)),d.push(_+D+"="+encodeURIComponent(J))})}catch(k){throw d.push(_+"type="+encodeURIComponent("_badmap")),k}}function Da(l){this.l=l.Ub||null,this.j=l.eb||!1}v(Da,ru),Da.prototype.g=function(){return new Oa(this.l,this.j)},Da.prototype.i=function(l){return function(){return l}}({});function Oa(l,d){ue.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(Oa,ue),n=Oa.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Yi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Qi(this):Yi(this),this.readyState==3&&dp(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Qi(this))},n.Qa=function(l){this.g&&(this.response=l,Qi(this))},n.ga=function(){this.g&&Qi(this)};function Qi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Yi(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Yi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fp(l){let d="";return ye(l,function(g,_){d+=_,d+=":",d+=g,d+=`\r
`}),d}function pu(l,d,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=fp(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):Je(l,d,g))}function et(l){ue.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(et,ue);var BI=/^https?$/i,$I=["POST","PUT"];n=et.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():au.g(),this.v=this.o?jf(this.o):jf(au),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(D){pp(this,D);return}if(l=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)g.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())g.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(D=>D.toLowerCase()=="content-type"),k=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call($I,d,void 0))||_||k||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,J]of g)this.g.setRequestHeader(D,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_p(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){pp(this,D)}};function pp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,gp(l),Ma(l)}function gp(l){l.A||(l.A=!0,be(l,"complete"),be(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,be(this,"complete"),be(this,"abort"),Ma(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mp(this):this.bb())},n.bb=function(){mp(this)};function mp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Hn(l)!=4||l.Z()!=2)){if(l.u&&Hn(l)==4)Rt(l.Ea,0,l);else if(be(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var _;if(_=J===0){var k=String(l.D).match(op)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),_=!BI.test(k?k.toLowerCase():"")}g=_}if(g)be(l,"complete"),be(l,"success");else{l.m=6;try{var D=2<Hn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",gp(l)}}finally{Ma(l)}}}}function Ma(l,d){if(l.g){_p(l);const g=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||be(l,"ready");try{g.onreadystatechange=_}catch{}}}function _p(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),an(d)}};function yp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function jI(l){const d={};l=(l.g&&2<=Hn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(N(l[_]))continue;var g=S(l[_]);const k=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const D=d[k]||[];d[k]=D,D.push(g)}b(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function vp(l){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,l),this.cb=Ji("retryDelaySeedMs",1e4,l),this.Wa=Ji("forwardChannelMaxRetries",2,l),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ep(l&&l.concurrentRequestLimit),this.Da=new FI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vp.prototype,n.la=8,n.G=1,n.connect=function(l,d,g,_){$t(0),this.W=l,this.H=d||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=Rp(this,null,this.W),Va(this)};function gu(l){if(Ep(l),l.G==3){var d=l.U++,g=jn(l.I);if(Je(g,"SID",l.K),Je(g,"RID",d),Je(g,"TYPE","terminate"),Xi(l,g),d=new Ts(l,l.j,d),d.L=2,d.v=Na(jn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Pp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Pa(d)}Sp(l)}function La(l){l.g&&(_u(l),l.g.cancel(),l.g=null)}function Ep(l){La(l),l.u&&(a.clearTimeout(l.u),l.u=null),Fa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Va(l){if(!tp(l.h)&&!l.s){l.s=!0;var d=l.Ga;H||Ie(),W||(H(),W=!0),Te.add(d,l),l.B=0}}function HI(l,d){return np(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Hi(p(l.Ga,l,d),Ap(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const k=new Ts(this,this.j,l);let D=this.o;if(this.S&&(D?(D=y(D),C(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Tp(this,k,d),g=jn(this.I),Je(g,"RID",l),Je(g,"CVER",22),this.D&&Je(g,"X-HTTP-Session-Id",this.D),Xi(this,g),D&&(this.O?d="headers="+encodeURIComponent(String(fp(D)))+"&"+d:this.m&&pu(g,this.m,D)),fu(this.h,k),this.Ua&&Je(g,"TYPE","init"),this.P?(Je(g,"$req",d),Je(g,"SID","null"),k.T=!0,cu(k,g,null)):cu(k,g,d),this.G=2}}else this.G==3&&(l?wp(this,l):this.i.length==0||tp(this.h)||wp(this))};function wp(l,d){var g;d?g=d.l:g=l.U++;const _=jn(l.I);Je(_,"SID",l.K),Je(_,"RID",g),Je(_,"AID",l.T),Xi(l,_),l.m&&l.o&&pu(_,l.m,l.o),g=new Ts(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Tp(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),fu(l.h,g),cu(g,_,d)}function Xi(l,d){l.H&&ye(l.H,function(g,_){Je(d,_,g)}),l.l&&ip({},function(g,_){Je(d,_,g)})}function Tp(l,d,g){g=Math.min(l.i.length,g);var _=l.l?p(l.l.Na,l.l,l):null;e:{var k=l.i;let D=-1;for(;;){const J=["count="+g];D==-1?0<g?(D=k[0].g,J.push("ofs="+D)):D=0:J.push("ofs="+D);let qe=!0;for(let wt=0;wt<g;wt++){let Le=k[wt].g;const xt=k[wt].map;if(Le-=D,0>Le)D=Math.max(0,k[wt].g-100),qe=!1;else try{UI(xt,J,"req"+Le+"_")}catch{_&&_(xt)}}if(qe){_=J.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,_}function Ip(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;H||Ie(),W||(H(),W=!0),Te.add(d,l),l.v=0}}function mu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Hi(p(l.Fa,l),Ap(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,bp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Hi(p(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),La(this),bp(this))};function _u(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function bp(l){l.g=new Ts(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=jn(l.qa);Je(d,"RID","rpc"),Je(d,"SID",l.K),Je(d,"AID",l.T),Je(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Je(d,"TO",l.ja),Je(d,"TYPE","xmlhttp"),Xi(l,d),l.m&&l.o&&pu(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Na(jn(d)),g.m=null,g.P=!0,Jf(g,l)}n.Za=function(){this.C!=null&&(this.C=null,La(this),mu(this),$t(19))};function Fa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Cp(l,d){var g=null;if(l.g==d){Fa(l),_u(l),l.g=null;var _=2}else if(du(l.h,d))g=d.D,sp(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var k=l.B;_=Aa(),be(_,new zf(_,g)),Va(l)}else Ip(l);else if(k=d.s,k==3||k==0&&0<d.X||!(_==1&&HI(l,d)||_==2&&mu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),k){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function Ap(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function lr(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),_=l.Xa;const k=!_;_=new ar(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xa(_,"https"),Na(_),k?LI(_.toString(),g):VI(_.toString(),g)}else $t(2);l.G=0,l.l&&l.l.sa(d),Sp(l),Ep(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Sp(l){if(l.G=0,l.ka=[],l.l){const d=rp(l.h);(d.length!=0||l.i.length!=0)&&(x(l.ka,d),x(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Rp(l,d,g){var _=g instanceof ar?jn(g):new ar(g);if(_.g!="")d&&(_.g=d+"."+_.g),ka(_,_.s);else{var k=a.location;_=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;var D=new ar(null);_&&xa(D,_),d&&(D.g=d),k&&ka(D,k),g&&(D.l=g),_=D}return g=l.D,d=l.ya,g&&d&&Je(_,g,d),Je(_,"VER",l.la),Xi(l,_),_}function Pp(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new et(new Da({eb:g})):new et(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}n=xp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ua(){}Ua.prototype.g=function(l,d){return new Jt(l,d)};function Jt(l,d){ue.call(this),this.g=new vp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!N(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!N(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new jr(this)}v(Jt,ue),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){gu(this.g)},Jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Et(l),l=g);d.i.push(new AI(d.Ya++,l)),d.G==3&&Va(d)},Jt.prototype.N=function(){this.g.l=null,delete this.j,gu(this.g),delete this.g,Jt.aa.N.call(this)};function kp(l){iu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(kp,iu);function Np(){ou.call(this),this.status=1}v(Np,ou);function jr(l){this.g=l}v(jr,xp),jr.prototype.ua=function(){be(this.g,"a")},jr.prototype.ta=function(l){be(this.g,new kp(l))},jr.prototype.sa=function(l){be(this.g,new Np)},jr.prototype.ra=function(){be(this.g,"b")},Ua.prototype.createWebChannel=Ua.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,uE=function(){return new Ua},cE=function(){return Aa()},lE=ir,mh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sa.NO_ERROR=0,Sa.TIMEOUT=8,Sa.HTTP_ERROR=6,dl=Sa,Kf.COMPLETE="complete",aE=Kf,Hf.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",ue.prototype.listen=ue.prototype.K,ho=Hf,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,oE=et}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const $g="@firebase/firestore",jg="4.7.16";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let Di="11.8.1";/**
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
 */const Ir=new Ic("@firebase/firestore");function zr(){return Ir.logLevel}function ne(n,...e){if(Ir.logLevel<=Pe.DEBUG){const t=e.map(xd);Ir.debug(`Firestore (${Di}): ${n}`,...t)}}function ds(n,...e){if(Ir.logLevel<=Pe.ERROR){const t=e.map(xd);Ir.error(`Firestore (${Di}): ${n}`,...t)}}function _i(n,...e){if(Ir.logLevel<=Pe.WARN){const t=e.map(xd);Ir.warn(`Firestore (${Di}): ${n}`,...t)}}function xd(n){if(typeof n=="string")return n;try{/**
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
 */function ge(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,hE(n,s,t)}function hE(n,e,t){let s=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ds(s),new Error(s)}function $e(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||hE(e,r,s)}function Ee(n,e){return n}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends ms{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Dt.UNAUTHENTICATED))}shutdown(){}}class ZR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eP{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new is;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new is,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new is)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($e(typeof s.accessToken=="string",31837,{l:s}),new dE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class tP{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nP{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new tP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const s=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function fE(){return new TextEncoder}/**
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
 */class pE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=rP(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Ce(n,e){return n<e?-1:n>e?1:0}function _h(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return Ce(s,r);{const i=fE(),o=iP(i.encode(Wg(n,t)),i.encode(Wg(e,t)));return o!==0?o:Ce(s,r)}}t+=s>65535?2:1}return Ce(n.length,e.length)}function Wg(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function iP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ce(n[t],e[t]);return Ce(n.length,e.length)}function yi(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const qg=-62135596800,Gg=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gg);return new dt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qg)throw new oe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gg}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-qg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new dt(0,0))}static max(){return new ve(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zg="__name__";class Sn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Sn.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Sn.isNumericId(e),r=Sn.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Sn.extractNumericId(e).compare(Sn.extractNumericId(t)):_h(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ls.fromString(e.substring(4,e.length-2))}}class Ze extends Sn{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const oP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Sn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return oP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zg}static keyField(){return new Ct([zg])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new oe(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new oe(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new oe(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ze.fromString(e))}static fromName(e){return new ce(Ze.fromString(e).popFirst(5))}static empty(){return new ce(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ze(e.slice()))}}/**
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
 */const Ho=-1;function aP(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ve.fromTimestamp(s===1e9?new dt(t+1,0):new dt(t,s));return new zs(r,ce.empty(),e)}function lP(n){return new zs(n.readTime,n.key,Ho)}class zs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new zs(ve.min(),ce.empty(),Ho)}static max(){return new zs(ve.max(),ce.empty(),Ho)}}function cP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const uP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oi(n){if(n.code!==q.FAILED_PRECONDITION||n.message!==uP)throw n;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(r=>r?B.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new B((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new B((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function dP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class kc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}kc.le=-1;/**
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
 */const kd=-1;function Nc(n){return n==null}function Ul(n){return n===0&&1/n==-1/0}function fP(n){return typeof n=="number"&&Number.isInteger(n)&&!Ul(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const gE="";function pP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kg(e)),e=gP(n.get(t),e);return Kg(e)}function gP(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case gE:t+="";break;default:t+=i}}return t}function Kg(n){return n+gE+""}/**
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
 */function Qg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function mE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let ot=class yh{constructor(e,t){this.comparator=e,this.root=t||Vs.EMPTY}insert(e,t){return new yh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vs.BLACK,null,null))}remove(e){return new yh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}},za=class{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Vs=class Gn{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Gn.RED,this.left=r??Gn.EMPTY,this.right=i??Gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Gn(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Gn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}};Vs.EMPTY=null,Vs.RED=!0,Vs.BLACK=!1;Vs.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Vs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yg(this.data.getIterator())}getIteratorFrom(e){return new Yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ft(this.comparator);return t.data=e,t}}class Yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new _n([])}unionWith(e){let t=new ft(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class _E extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _E("Invalid base64 string: "+i):i}}(e);return new At(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new At(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const mP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ks(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=mP.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qs(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
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
 */const yE="server_timestamp",vE="__type__",EE="__previous_value__",wE="__local_write_time__";function Nd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[vE])===null||t===void 0?void 0:t.stringValue)===yE}function Dc(n){const e=n.mapValue.fields[EE];return Nd(e)?Dc(e):e}function Wo(n){const e=Ks(n.mapValue.fields[wE].timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */class _P{constructor(e,t,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Bl="(default)";class qo{constructor(e,t){this.projectId=e,this.database=t||Bl}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===Bl}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const TE="__type__",yP="__max__",Ka={mapValue:{}},IE="__vector__",$l="value";function Ys(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Nd(n)?4:EP(n)?9007199254740991:vP(n)?10:11:ge(28295,{value:n})}function Un(n,e){if(n===e)return!0;const t=Ys(n);if(t!==Ys(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wo(n).isEqual(Wo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ks(r.timestampValue),a=Ks(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return nt(r.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(r.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return nt(r.integerValue)===nt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=nt(r.doubleValue),a=nt(i.doubleValue);return o===a?Ul(o)===Ul(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return yi(n.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Qg(o)!==Qg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Un(o[c],a[c])))return!1;return!0}(n,e);default:return ge(52216,{left:n})}}function Go(n,e){return(n.values||[]).find(t=>Un(t,e))!==void 0}function vi(n,e){if(n===e)return 0;const t=Ys(n),s=Ys(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Jg(n.timestampValue,e.timestampValue);case 4:return Jg(Wo(n),Wo(e));case 5:return _h(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Qs(i),c=Qs(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ce(a[u],c[u]);if(h!==0)return h}return Ce(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ce(nt(i.latitude),nt(o.latitude));return a!==0?a:Ce(nt(i.longitude),nt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xg(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f[$l])===null||a===void 0?void 0:a.arrayValue,v=(c=p[$l])===null||c===void 0?void 0:c.arrayValue,A=Ce(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:Xg(m,v)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ka.mapValue&&o===Ka.mapValue)return 0;if(i===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=_h(c[f],h[f]);if(p!==0)return p;const m=vi(a[c[f]],u[h[f]]);if(m!==0)return m}return Ce(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ge(23264,{Pe:t})}}function Jg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ce(n,e);const t=Ks(n),s=Ks(e),r=Ce(t.seconds,s.seconds);return r!==0?r:Ce(t.nanos,s.nanos)}function Xg(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=vi(t[r],s[r]);if(i)return i}return Ce(t.length,s.length)}function Ei(n){return vh(n)}function vh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ks(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Qs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=vh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${vh(t.fields[o])}`;return r+"}"}(n.mapValue):ge(61005,{value:n})}function fl(n){switch(Ys(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(n);return e?16+fl(e):16;case 5:return 2*n.stringValue.length;case 6:return Qs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+fl(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Mr(s.fields,(i,o)=>{r+=i.length+fl(o)}),r}(n.mapValue);default:throw ge(13486,{value:n})}}function Eh(n){return!!n&&"integerValue"in n}function Dd(n){return!!n&&"arrayValue"in n}function Zg(n){return!!n&&"nullValue"in n}function em(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pl(n){return!!n&&"mapValue"in n}function vP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[TE])===null||t===void 0?void 0:t.stringValue)===IE}function bo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=bo(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function EP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yP}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!pl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(t)}setAll(e){let t=Ct.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=bo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());pl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];pl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Mr(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new cn(bo(this.value))}}function bE(n){const e=[];return Mr(n.fields,(t,s)=>{const r=new Ct([t]);if(pl(s)){const i=bE(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new _n(e)}/**
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
 */class Mt{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ve.min(),ve.min(),ve.min(),cn.empty(),0)}static newFoundDocument(e,t,s,r){return new Mt(e,1,t,ve.min(),s,r,0)}static newNoDocument(e,t){return new Mt(e,2,t,ve.min(),ve.min(),cn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ve.min(),ve.min(),cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jl{constructor(e,t){this.position=e,this.inclusive=t}}function tm(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=ce.comparator(ce.fromName(o.referenceValue),t.key):s=vi(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Un(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function wP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class CE{}class ut extends CE{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new IP(e,t,s):t==="array-contains"?new AP(e,s):t==="in"?new SP(e,s):t==="not-in"?new RP(e,s):t==="array-contains-any"?new PP(e,s):new ut(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new bP(e,s):new CP(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vi(t,this.value)):t!==null&&Ys(this.value)===Ys(t)&&this.matchesComparison(vi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends CE{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Bn(e,t)}matches(e){return AE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function AE(n){return n.op==="and"}function SE(n){return TP(n)&&AE(n)}function TP(n){for(const e of n.filters)if(e instanceof Bn)return!1;return!0}function wh(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Ei(n.value);if(SE(n))return n.filters.map(e=>wh(e)).join(",");{const e=n.filters.map(t=>wh(t)).join(",");return`${n.op}(${e})`}}function RE(n,e){return n instanceof ut?function(s,r){return r instanceof ut&&s.op===r.op&&s.field.isEqual(r.field)&&Un(s.value,r.value)}(n,e):n instanceof Bn?function(s,r){return r instanceof Bn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&RE(o,r.filters[a]),!0):!1}(n,e):void ge(19439)}function PE(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${Ei(t.value)}`}(n):n instanceof Bn?function(t){return t.op.toString()+" {"+t.getFilters().map(PE).join(" ,")+"}"}(n):"Filter"}class IP extends ut{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class bP extends ut{constructor(e,t){super(e,"in",t),this.keys=xE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CP extends ut{constructor(e,t){super(e,"not-in",t),this.keys=xE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ce.fromName(s.referenceValue))}class AP extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dd(t)&&Go(t.arrayValue,this.value)}}class SP extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Go(this.value.arrayValue,t)}}class RP extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Go(this.value.arrayValue,t)}}class PP extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Go(this.value.arrayValue,s))}}/**
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
 */class xP{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function sm(n,e=null,t=[],s=[],r=null,i=null,o=null){return new xP(n,e,t,s,r,i,o)}function Od(n){const e=Ee(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>wh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ei(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ei(s)).join(",")),e.Ie=t}return e.Ie}function Md(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!wP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!RE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nm(n.startAt,e.startAt)&&nm(n.endAt,e.endAt)}function Th(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Oc{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function kP(n,e,t,s,r,i,o,a){return new Oc(n,e,t,s,r,i,o,a)}function Ld(n){return new Oc(n)}function rm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NP(n){return n.collectionGroup!==null}function Co(n){const e=Ee(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(Ct.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Hl(i,s))}),t.has(Ct.keyField().canonicalString())||e.Ee.push(new Hl(Ct.keyField(),s))}return e.Ee}function Mn(n){const e=Ee(n);return e.de||(e.de=DP(e,Co(n))),e.de}function DP(n,e){if(n.limitType==="F")return sm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Hl(r.field,i)});const t=n.endAt?new jl(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new jl(n.startAt.position,n.startAt.inclusive):null;return sm(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ih(n,e,t){return new Oc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mc(n,e){return Md(Mn(n),Mn(e))&&n.limitType===e.limitType}function kE(n){return`${Od(Mn(n))}|lt:${n.limitType}`}function Kr(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>PE(r)).join(", ")}]`),Nc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Ei(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Ei(r)).join(",")),`Target(${s})`}(Mn(n))}; limitType=${n.limitType})`}function Lc(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ce.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Co(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=tm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Co(s),r)||s.endAt&&!function(o,a,c){const u=tm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Co(s),r))}(n,e)}function OP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function NE(n){return(e,t)=>{let s=!1;for(const r of Co(n)){const i=MP(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function MP(n,e,t){const s=n.field.isKeyField()?ce.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?vi(c,u):ge(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:n.dir})}}/**
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
 */class Lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
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
 */const LP=new ot(ce.comparator);function fs(){return LP}const DE=new ot(ce.comparator);function fo(...n){let e=DE;for(const t of n)e=e.insert(t.key,t);return e}function OE(n){let e=DE;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function pr(){return Ao()}function ME(){return Ao()}function Ao(){return new Lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const VP=new ot(ce.comparator),FP=new ft(ce.comparator);function Ne(...n){let e=FP;for(const t of n)e=e.add(t);return e}const UP=new ft(Ce);function BP(){return UP}/**
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
 */function Vd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ul(e)?"-0":e}}function LE(n){return{integerValue:""+n}}function $P(n,e){return fP(e)?LE(e):Vd(n,e)}/**
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
 */class Vc{constructor(){this._=void 0}}function jP(n,e,t){return n instanceof Wl?function(r,i){const o={fields:{[vE]:{stringValue:yE},[wE]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Nd(i)&&(i=Dc(i)),i&&(o.fields[EE]=i),{mapValue:o}}(t,e):n instanceof zo?FE(n,e):n instanceof Ko?UE(n,e):function(r,i){const o=VE(r,i),a=im(o)+im(r.Re);return Eh(o)&&Eh(r.Re)?LE(a):Vd(r.serializer,a)}(n,e)}function HP(n,e,t){return n instanceof zo?FE(n,e):n instanceof Ko?UE(n,e):t}function VE(n,e){return n instanceof ql?function(s){return Eh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Wl extends Vc{}class zo extends Vc{constructor(e){super(),this.elements=e}}function FE(n,e){const t=BE(e);for(const s of n.elements)t.some(r=>Un(r,s))||t.push(s);return{arrayValue:{values:t}}}class Ko extends Vc{constructor(e){super(),this.elements=e}}function UE(n,e){let t=BE(e);for(const s of n.elements)t=t.filter(r=>!Un(r,s));return{arrayValue:{values:t}}}class ql extends Vc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function im(n){return nt(n.integerValue||n.doubleValue)}function BE(n){return Dd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function WP(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof zo&&r instanceof zo||s instanceof Ko&&r instanceof Ko?yi(s.elements,r.elements,Un):s instanceof ql&&r instanceof ql?Un(s.Re,r.Re):s instanceof Wl&&r instanceof Wl}(n.transform,e.transform)}class qP{constructor(e,t){this.version=e,this.transformResults=t}}class os{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new os}static exists(e){return new os(void 0,e)}static updateTime(e){return new os(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fc{}function $E(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new HE(n.key,os.none()):new ga(n.key,n.data,os.none());{const t=n.data,s=cn.empty();let r=new ft(Ct.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Vr(n.key,s,new _n(r.toArray()),os.none())}}function GP(n,e,t){n instanceof ga?function(r,i,o){const a=r.value.clone(),c=am(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Vr?function(r,i,o){if(!gl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=am(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jE(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function So(n,e,t,s){return n instanceof ga?function(i,o,a,c){if(!gl(i.precondition,o))return a;const u=i.value.clone(),h=lm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Vr?function(i,o,a,c){if(!gl(i.precondition,o))return a;const u=lm(i.fieldTransforms,c,o),h=o.data;return h.setAll(jE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(i,o,a){return gl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function zP(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=VE(s.transform,r||null);i!=null&&(t===null&&(t=cn.empty()),t.set(s.field,i))}return t||null}function om(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&yi(s,r,(i,o)=>WP(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ga extends Fc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vr extends Fc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function am(n,e,t){const s=new Map;$e(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,HP(o,a,t[r]))}return s}function lm(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,jP(i,o,e))}return s}class HE extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KP extends Fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QP{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&GP(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=So(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=So(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ME();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=$E(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(t,s)=>om(t,s))&&yi(this.baseMutations,e.baseMutations,(t,s)=>om(t,s))}}class Fd{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){$e(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let r=function(){return VP}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Fd(e,t,s,r)}}/**
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
 */class YP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var rt,Oe;function XP(n){switch(n){case q.OK:return ge(64938);case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function WE(n){if(n===void 0)return ds("GRPC error has no .code"),q.UNKNOWN;switch(n){case rt.OK:return q.OK;case rt.CANCELLED:return q.CANCELLED;case rt.UNKNOWN:return q.UNKNOWN;case rt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case rt.INTERNAL:return q.INTERNAL;case rt.UNAVAILABLE:return q.UNAVAILABLE;case rt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case rt.NOT_FOUND:return q.NOT_FOUND;case rt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case rt.ABORTED:return q.ABORTED;case rt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case rt.DATA_LOSS:return q.DATA_LOSS;default:return ge(39323,{code:n})}}(Oe=rt||(rt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZP=new Ls([4294967295,4294967295],0);function cm(n){const e=fE().encode(n),t=new iE;return t.update(e),new Uint8Array(t.digest())}function um(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ls([t,s],0),new Ls([r,i],0)]}class Ud{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new po(`Invalid padding: ${t}`);if(s<0)throw new po(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new po(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Ls.fromNumber(this.pe)}we(e,t,s){let r=e.add(t.multiply(Ls.fromNumber(s)));return r.compare(ZP)===1&&(r=new Ls([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=cm(e),[s,r]=um(t);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);if(!this.Se(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ud(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const t=cm(e),[s,r]=um(t);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Uc(ve.min(),r,new ot(Ce),fs(),Ne())}}class ma{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ma(s,t,Ne(),Ne(),Ne())}}/**
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
 */class ml{constructor(e,t,s,r){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=r}}class qE{constructor(e,t){this.targetId=e,this.Ce=t}}class GE{constructor(e,t,s=At.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class hm{constructor(){this.Fe=0,this.Me=dm(),this.xe=At.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ne(),t=Ne(),s=Ne();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ge(38017,{changeType:i})}}),new ma(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=dm()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,$e(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class e1{constructor(e){this.ze=e,this.je=new Map,this.He=fs(),this.Je=Qa(),this.Ye=Qa(),this.Ze=new ot(Ce)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,r)=>{this.it(r)&&t(r)})}ot(e){const t=e.targetId,s=e.Ce.count,r=this._t(t);if(r){const i=r.target;if(Th(i))if(s===0){const o=new ce(i.path);this.tt(t,o,Mt.newNoDocument(o,ve.min()))}else $e(s===1,20013,{expectedCount:s});else{const o=this.ut(t);if(o!==s){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof _E)return _i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ud(o,r,i)}catch(c){return _i(c instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(t,i,null),r++)}),r}It(e){const t=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&Th(a.target)){const c=new ce(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,Mt.newNoDocument(c,e))}i.Le&&(t.set(o,i.qe()),i.Qe())}});let s=Ne();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const r=new Uc(e,t,this.Ze,this.He,s);return this.He=fs(),this.Je=Qa(),this.Ye=Qa(),this.Ze=new ot(Ce),r}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new hm,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ft(Ce),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ft(Ce),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new hm),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Qa(){return new ot(ce.comparator)}function dm(){return new ot(ce.comparator)}const t1={asc:"ASCENDING",desc:"DESCENDING"},n1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},s1={and:"AND",or:"OR"};class r1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bh(n,e){return n.useProto3Json||Nc(e)?e:{value:e}}function Gl(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function i1(n,e){return Gl(n,e.toTimestamp())}function Ln(n){return $e(!!n,49232),ve.fromTimestamp(function(t){const s=Ks(t);return new dt(s.seconds,s.nanos)}(n))}function Bd(n,e){return Ch(n,e).canonicalString()}function Ch(n,e){const t=function(r){return new Ze(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function KE(n){const e=Ze.fromString(n);return $e(ZE(e),10190,{key:e.toString()}),e}function Ah(n,e){return Bd(n.databaseId,e.path)}function Mu(n,e){const t=KE(e);if(t.get(1)!==n.databaseId.projectId)throw new oe(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new oe(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(YE(t))}function QE(n,e){return Bd(n.databaseId,e)}function o1(n){const e=KE(n);return e.length===4?Ze.emptyPath():YE(e)}function Sh(n){return new Ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function YE(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fm(n,e,t){return{name:Ah(n,e),fields:t.value.mapValue.fields}}function a1(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?($e(h===void 0||typeof h=="string",58123),At.fromBase64String(h||"")):($e(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),At.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?q.UNKNOWN:WE(u.code);return new oe(h,u.message||"")}(o);t=new GE(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Mu(n,s.document.name),i=Ln(s.document.updateTime),o=s.document.createTime?Ln(s.document.createTime):ve.min(),a=new cn({mapValue:{fields:s.document.fields}}),c=Mt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new ml(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Mu(n,s.document),i=s.readTime?Ln(s.readTime):ve.min(),o=Mt.newNoDocument(r,i),a=s.removedTargetIds||[];t=new ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Mu(n,s.document),i=s.removedTargetIds||[];t=new ml([],i,r,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new JP(r,i),a=s.targetId;t=new qE(a,o)}}return t}function l1(n,e){let t;if(e instanceof ga)t={update:fm(n,e.key,e.value)};else if(e instanceof HE)t={delete:Ah(n,e.key)};else if(e instanceof Vr)t={update:fm(n,e.key,e.data),updateMask:_1(e.fieldMask)};else{if(!(e instanceof KP))return ge(16599,{ft:e.type});t={verify:Ah(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Wl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ql)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw ge(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:i1(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge(27497)}(n,e.precondition)),t}function c1(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map(t=>function(r,i){let o=r.updateTime?Ln(r.updateTime):Ln(i);return o.isEqual(ve.min())&&(o=Ln(i)),new qP(o,r.transformResults||[])}(t,e))):[]}function u1(n,e){return{documents:[QE(n,e.path)]}}function h1(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=QE(n,r);const i=function(u){if(u.length!==0)return XE(Bn.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Qr(p.field),direction:p1(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=bh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:t,parent:r}}function d1(n){let e=o1(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){$e(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const p=JE(f);return p instanceof Bn&&SE(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(p=>function(v){return new Hl(Yr(v.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(t.orderBy));let a=null;t.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Nc(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(f){const p=!!f.before,m=f.values||[];return new jl(m,p)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const p=!f.before,m=f.values||[];return new jl(m,p)}(t.endAt)),kP(e,r,o,i,a,"F",c,u)}function f1(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function JE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Yr(t.unaryFilter.field);return ut.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Yr(t.unaryFilter.field);return ut.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(t.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yr(t.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(n):n.fieldFilter!==void 0?function(t){return ut.create(Yr(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Bn.create(t.compositeFilter.filters.map(s=>JE(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(n):ge(30097,{filter:n})}function p1(n){return t1[n]}function g1(n){return n1[n]}function m1(n){return s1[n]}function Qr(n){return{fieldPath:n.canonicalString()}}function Yr(n){return Ct.fromServerFormat(n.fieldPath)}function XE(n){return n instanceof ut?function(t){if(t.op==="=="){if(em(t.value))return{unaryFilter:{field:Qr(t.field),op:"IS_NAN"}};if(Zg(t.value))return{unaryFilter:{field:Qr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(em(t.value))return{unaryFilter:{field:Qr(t.field),op:"IS_NOT_NAN"}};if(Zg(t.value))return{unaryFilter:{field:Qr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(t.field),op:g1(t.op),value:t.value}}}(n):n instanceof Bn?function(t){const s=t.getFilters().map(r=>XE(r));return s.length===1?s[0]:{compositeFilter:{op:m1(t.op),filters:s}}}(n):ge(54877,{filter:n})}function _1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ZE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ks{constructor(e,t,s,r,i=ve.min(),o=ve.min(),a=At.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ks(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class y1{constructor(e){this.wt=e}}function v1(n){const e=d1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
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
 */class E1{constructor(){this.Cn=new w1}addToCollectionParentIndex(e,t){return this.Cn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(zs.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(zs.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class w1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ft(Ze.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ft(Ze.comparator)).toArray()}}/**
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
 */const pm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ew=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(ew,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
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
 */class wi{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new wi(0)}static lr(){return new wi(-1)}}/**
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
 */const gm="LruGarbageCollector",T1=1048576;function mm([n,e],[t,s]){const r=Ce(n,t);return r===0?Ce(e,s):r}class I1{constructor(e){this.Er=e,this.buffer=new ft(mm),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();mm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(gm,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mi(t)?ne(gm,"Ignoring IndexedDB error during garbage collection: ",t):await Oi(t)}await this.mr(3e5)})}}class C1{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(kc.le);const s=new I1(t);return this.gr.forEachTarget(e,r=>s.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>s.Rr(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(pm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pm):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),zr()<=Pe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function A1(n,e){return new C1(n,e)}/**
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
 */class S1{constructor(){this.changes=new Lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class R1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class P1{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&So(s.mutation,r,_n.empty(),dt.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ne()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ne()){const r=pr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=fo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=pr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ne()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=fs();const o=Ao(),a=function(){return Ao()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Vr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),So(h.mutation,u,h.mutation.getFieldMask(),dt.now())):o.set(u.key,_n.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new R1(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Ao();let r=new ot((o,a)=>o-a),i=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||_n.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||Ne()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=ME();h.forEach(p=>{if(!i.has(p)){const m=$E(t.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NP(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):B.resolve(pr());let a=Ho,c=i;return o.next(u=>B.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ne())).next(h=>({batchId:a,changes:OE(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(s=>{let r=fo();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,c=>{const u=function(f,p){return new Oc(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Mt.newInvalidDocument(h)))});let a=fo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&So(h.mutation,u,_n.empty(),dt.now()),Lc(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class x1{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return B.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Ln(r.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(r){return{name:r.name,query:v1(r.bundledQuery),readTime:Ln(r.readTime)}}(t)),B.resolve()}}/**
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
 */class k1{constructor(){this.overlays=new ot(ce.comparator),this.Qr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=pr();return B.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const r=pr(),i=t.length+1,o=new ce(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return B.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ot((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=pr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return B.resolve(a)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Qr.get(r.largestBatchId).delete(s.key);this.Qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new YP(t,s));let i=this.Qr.get(t);i===void 0&&(i=Ne(),this.Qr.set(t,i)),this.Qr.set(t,i.add(s.key))}}/**
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
 */class N1{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class $d{constructor(){this.$r=new ft(gt.Ur),this.Kr=new ft(gt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new gt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new gt(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ce(new Ze([])),s=new gt(t,e),r=new gt(t,e+1),i=[];return this.Kr.forEachInRange([s,r],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ce(new Ze([])),s=new gt(t,e),r=new gt(t,e+1);let i=Ne();return this.Kr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new gt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class gt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ce.comparator(e.key,t.key)||Ce(e.Zr,t.Zr)}static Wr(e,t){return Ce(e.Zr,t.Zr)||ce.comparator(e.key,t.key)}}/**
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
 */class D1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ft(gt.Ur)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QP(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.Xr=this.Xr.add(new gt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,t){return B.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ti(s),i=r<0?0:r;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?kd:this.nr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new gt(t,0),r=new gt(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([s,r],o=>{const a=this.ei(o.Zr);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ft(Ce);return t.forEach(r=>{const i=new gt(r,0),o=new gt(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],a=>{s=s.add(a.Zr)})}),B.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;ce.isDocumentKey(i)||(i=i.child(""));const o=new gt(new ce(i),0);let a=new ft(Ce);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Zr)),!0)},o),B.resolve(this.ni(a))}ni(e){const t=[];return e.forEach(s=>{const r=this.ei(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){$e(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return B.forEach(t.mutations,r=>{const i=new gt(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new gt(t,0),r=this.Xr.firstAfterOrEqual(s);return B.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class O1{constructor(e){this.ii=e,this.docs=function(){return new ot(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=fs();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Mt.newInvalidDocument(r))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=fs();const o=t.path,a=new ce(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cP(lP(h),s)<=0||(r.has(h.key)||Lc(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ge(9500)}si(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new M1(this)}getSize(e){return B.resolve(this.size)}}class M1 extends S1{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class L1{constructor(e){this.persistence=e,this.oi=new Lr(t=>Od(t),Md),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this._i=0,this.ai=new $d,this.targetCount=0,this.ui=wi.cr()}forEachTarget(e,t){return this.oi.forEach((s,r)=>t(r)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),B.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new wi(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.Tr(t),B.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),B.waitFor(i).next(()=>r)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.ai.containsKey(t))}}/**
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
 */class tw{constructor(e,t){this.ci={},this.overlays={},this.li=new kc(0),this.hi=!1,this.hi=!0,this.Pi=new N1,this.referenceDelegate=e(this),this.Ti=new L1(this),this.indexManager=new E1,this.remoteDocumentCache=function(r){return new O1(r)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new y1(t),this.Ei=new x1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new k1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new D1(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const r=new V1(this.li.next());return this.referenceDelegate.di(),s(r).next(i=>this.referenceDelegate.Ai(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ri(e,t){return B.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class V1 extends hP{constructor(e){super(),this.currentSequenceNumber=e}}class jd{constructor(e){this.persistence=e,this.Vi=new $d,this.mi=null}static fi(e){return new jd(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(r=>this.gi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.gi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.gi,s=>{const r=ce.fromPath(s);return this.pi(e,r).next(i=>{i||t.removeEntry(r,ve.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return B.or([()=>B.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class zl{constructor(e,t){this.persistence=e,this.yi=new Lr(s=>pP(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=A1(this,t)}static fi(e,t){return new zl(e,t)}di(){}Ai(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Sr(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return B.forEach(this.yi,(s,r)=>this.Dr(e,s,r).next(i=>i?B.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,o=>this.Dr(e,o,t).next(a=>{a||(s++,i.removeEntry(o,ve.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),B.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fl(e.data.value)),t}Dr(e,t,s){return B.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.yi.get(t);return B.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hd{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.ds=s,this.As=r}static Rs(e,t){let s=Ne(),r=Ne();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Hd(e,t.fromCache,s,r)}}/**
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
 */class F1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U1{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return RC()?8:dP(Bt())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ws(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ss(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new F1;return this.bs(e,t,o).next(a=>{if(i.result=a,this.fs)return this.Ds(e,t,o,a.size)})}).next(()=>i.result)}Ds(e,t,s,r){return s.documentReadCount<this.gs?(zr()<=Pe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Kr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),B.resolve()):(zr()<=Pe.DEBUG&&ne("QueryEngine","Query:",Kr(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ps*r?(zr()<=Pe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Kr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(t))):B.resolve())}ws(e,t){if(rm(t))return B.resolve(null);let s=Mn(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ih(t,null,"F"),s=Mn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Ne(...i);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.vs(t,a);return this.Cs(t,u,o,c.readTime)?this.ws(e,Ih(t,null,"F")):this.Fs(e,u,t,c)}))})))}Ss(e,t,s,r){return rm(t)||r.isEqual(ve.min())?B.resolve(null):this.ys.getDocuments(e,s).next(i=>{const o=this.vs(t,i);return this.Cs(t,o,s,r)?B.resolve(null):(zr()<=Pe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(t)),this.Fs(e,o,t,aP(r,Ho)).next(a=>a))})}vs(e,t){let s=new ft(NE(e));return t.forEach((r,i)=>{Lc(e,i)&&(s=s.add(i))}),s}Cs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}bs(e,t,s){return zr()<=Pe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Kr(t)),this.ys.getDocumentsMatchingQuery(e,t,zs.min(),s)}Fs(e,t,s,r){return this.ys.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Wd="LocalStore",B1=3e8;class $1{constructor(e,t,s,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new ot(Ce),this.Os=new Lr(i=>Od(i),Md),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P1(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function j1(n,e,t,s){return new $1(n,e,t,s)}async function nw(n,e){const t=Ee(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ne();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:a}))})})}function H1(n,e){const t=Ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let m=B.resolve();return p.forEach(v=>{m=m.next(()=>h.getEntry(c,v)).next(A=>{const x=u.docVersions.get(v);$e(x!==null,48541),A.version.compareTo(x)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function sw(n){const e=Ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function W1(n,e){const t=Ee(n),s=e.snapshotVersion;let r=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Bs.newChangeBuffer({trackRemovals:!0});r=t.xs;const a=[];e.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;a.push(t.Ti.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Ti.addMatchingKeys(i,h.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(At.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(A,x,M){return A.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=B1?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(p,m,h)&&a.push(t.Ti.updateTargetData(i,m))});let c=fs(),u=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(q1(i,o,e.documentUpdates).next(h=>{c=h.qs,u=h.Qs})),!s.isEqual(ve.min())){const h=t.Ti.getLastRemoteSnapshotVersion(i).next(f=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.xs=r,i))}function q1(n,e,t){let s=Ne(),r=Ne();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=fs();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ve.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ne(Wd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:r}})}function G1(n,e){const t=Ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=kd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function z1(n,e){const t=Ee(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Ti.getTargetData(s,e).next(i=>i?(r=i,B.resolve(r)):t.Ti.allocateTargetId(s).next(o=>(r=new ks(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.xs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Rh(n,e,t){const s=Ee(n),r=s.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Mi(o))throw o;ne(Wd,`Failed to update sequence numbers for target ${e}: ${o}`)}s.xs=s.xs.remove(e),s.Os.delete(r.target)}function _m(n,e,t){const s=Ee(n);let r=ve.min(),i=Ne();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Ee(c),p=f.Os.get(h);return p!==void 0?B.resolve(f.xs.get(p)):f.Ti.getTargetData(u,h)}(s,o,Mn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ms.getDocumentsMatchingQuery(o,e,t?r:ve.min(),t?i:Ne())).next(a=>(K1(s,OP(e),a),{documents:a,$s:i})))}function K1(n,e,t){let s=n.Ns.get(e)||ve.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ns.set(e,s)}class ym{constructor(){this.activeTargetIds=BP()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q1{constructor(){this.xo=new ym,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ym,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y1{No(e){}shutdown(){}}/**
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
 */const vm="ConnectivityMonitor";class Em{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(vm,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(vm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function Ph(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
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
 */const Lu="RestConnection",J1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class X1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${r}`,this.Go=this.databaseId.database===Bl?`project_id=${s}`:`project_id=${s}&database_id=${r}`}zo(e,t,s,r,i){const o=Ph(),a=this.jo(e,t.toUriEncodedString());ne(Lu,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,r,i);const{host:u}=new URL(a),h=kr(u);return this.Jo(e,a,c,s,h).then(f=>(ne(Lu,`Received RPC '${e}' ${o}: `,f),f),f=>{throw _i(Lu,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",s),f})}Yo(e,t,s,r,i,o){return this.zo(e,t,s,r,i)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}jo(e,t){const s=J1[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class Z1{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Nt="WebChannelConnection";class ex extends X1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,r,i){const o=Ph();return new Promise((a,c)=>{const u=new oE;u.setWithCredentials(!0),u.listenOnce(aE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dl.NO_ERROR:const f=u.getResponseJson();ne(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case dl.TIMEOUT:ne(Nt,`RPC '${e}' ${o} timed out`),c(new oe(q.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const p=u.getStatus();if(ne(Nt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const A=function(M){const N=M.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(N)>=0?N:q.UNKNOWN}(v.status);c(new oe(A,v.message))}else c(new oe(q.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new oe(q.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{ne(Nt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(r);ne(Nt,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,s,15)})}T_(e,t,s){const r=Ph(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uE(),a=cE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ne(Nt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,m=!1;const v=new Z1({Zo:x=>{m?ne(Nt,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(p||(ne(Nt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),ne(Nt,`RPC '${e}' stream ${r} sending:`,x),f.send(x))},Xo:()=>f.close()}),A=(x,M,N)=>{x.listen(M,L=>{try{N(L)}catch(G){setTimeout(()=>{throw G},0)}})};return A(f,ho.EventType.OPEN,()=>{m||(ne(Nt,`RPC '${e}' stream ${r} transport opened.`),v.__())}),A(f,ho.EventType.CLOSE,()=>{m||(m=!0,ne(Nt,`RPC '${e}' stream ${r} transport closed`),v.u_())}),A(f,ho.EventType.ERROR,x=>{m||(m=!0,_i(Nt,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),v.u_(new oe(q.UNAVAILABLE,"The operation could not be completed")))}),A(f,ho.EventType.MESSAGE,x=>{var M;if(!m){const N=x.data[0];$e(!!N,16349);const L=N,G=(L==null?void 0:L.error)||((M=L[0])===null||M===void 0?void 0:M.error);if(G){ne(Nt,`RPC '${e}' stream ${r} received error:`,G);const de=G.status;let ye=function(w){const C=rt[w];if(C!==void 0)return WE(C)}(de),b=G.message;ye===void 0&&(ye=q.INTERNAL,b="Unknown error status: "+de+" with message "+G.message),m=!0,v.u_(new oe(ye,b)),f.close()}else ne(Nt,`RPC '${e}' stream ${r} received:`,N),v.c_(N)}}),A(a,lE.STAT_EVENT,x=>{x.stat===mh.PROXY?ne(Nt,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===mh.NOPROXY&&ne(Nt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.a_()},0),v}}function Vu(){return typeof document<"u"?document:null}/**
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
 */function Bc(n){return new r1(n,!0)}/**
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
 */class rw{constructor(e,t,s=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=s,this.E_=r,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),r=Math.max(0,t-s);r>0&&ne("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const wm="PersistentStream";class iw{constructor(e,t,s,r,i,o,a,c){this.xi=e,this.y_=s,this.w_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new rw(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===q.RESOURCE_EXHAUSTED?(ds(t.toString()),ds("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.S_===t&&this.K_(s,r)},s=>{e(()=>{const r=new oe(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(r)})})}K_(e,t){const s=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{s(()=>this.W_(r))}),this.stream.onMessage(r=>{s(()=>++this.v_==1?this.z_(r):this.onNext(r))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return ne(wm,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(ne(wm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tx extends iw{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=a1(this.serializer,e),s=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Ln(o.readTime):ve.min()}(e);return this.listener.j_(t,s)}H_(e){const t={};t.database=Sh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=Th(c)?{documents:u1(i,c)}:{query:h1(i,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zE(i,o.resumeToken);const u=bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=Gl(i,o.snapshotVersion.toTimestamp());const u=bh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=f1(this.serializer,e);s&&(t.labels=s),this.L_(t)}J_(e){const t={};t.database=Sh(this.serializer),t.removeTarget=e,this.L_(t)}}class nx extends iw{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=c1(e.writeResults,e.commitTime),s=Ln(e.commitTime);return this.listener.ea(s,t)}ta(){const e={};e.database=Sh(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>l1(this.serializer,s))};this.L_(t)}}/**
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
 */class sx{}class rx extends sx{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.na=!1}ra(){if(this.na)throw new oe(q.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,r){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Ch(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(q.UNKNOWN,i.toString())})}Yo(e,t,s,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,Ch(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(q.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class ix{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(ds(t),this.oa=!1):ne("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const br="RemoteStore";class ox{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(o=>{s.enqueueAndForget(async()=>{Fr(this)&&(ne(br,"Restarting streams for network reachability change."),await async function(c){const u=Ee(c);u.Ta.add(4),await _a(u),u.da.set("Unknown"),u.Ta.delete(4),await $c(u)}(this))})}),this.da=new ix(s,r)}}async function $c(n){if(Fr(n))for(const e of n.Ia)await e(!0)}async function _a(n){for(const e of n.Ia)await e(!1)}function ow(n,e){const t=Ee(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Kd(t)?zd(t):Li(t).M_()&&Gd(t,e))}function qd(n,e){const t=Ee(n),s=Li(t);t.Pa.delete(e),s.M_()&&aw(t,e),t.Pa.size===0&&(s.M_()?s.N_():Fr(t)&&t.da.set("Unknown"))}function Gd(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Li(n).H_(e)}function aw(n,e){n.Aa.Ke(e),Li(n).J_(e)}function zd(n){n.Aa=new e1({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Li(n).start(),n.da._a()}function Kd(n){return Fr(n)&&!Li(n).F_()&&n.Pa.size>0}function Fr(n){return Ee(n).Ta.size===0}function lw(n){n.Aa=void 0}async function ax(n){n.da.set("Online")}async function lx(n){n.Pa.forEach((e,t)=>{Gd(n,e)})}async function cx(n,e){lw(n),Kd(n)?(n.da.ca(e),zd(n)):n.da.set("Unknown")}async function ux(n,e,t){if(n.da.set("Online"),e instanceof GE&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Pa.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Pa.delete(a),r.Aa.removeTarget(a))}(n,e)}catch(s){ne(br,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Kl(n,s)}else if(e instanceof ml?n.Aa.Xe(e):e instanceof qE?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(ve.min()))try{const s=await sw(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.Aa.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Pa.get(u);h&&i.Pa.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.Pa.get(c);if(!h)return;i.Pa.set(c,h.withResumeToken(At.EMPTY_BYTE_STRING,h.snapshotVersion)),aw(i,c);const f=new ks(h.target,c,u,h.sequenceNumber);Gd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){ne(br,"Failed to raise snapshot:",s),await Kl(n,s)}}async function Kl(n,e,t){if(!Mi(e))throw e;n.Ta.add(1),await _a(n),n.da.set("Offline"),t||(t=()=>sw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ne(br,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await $c(n)})}function cw(n,e){return e().catch(t=>Kl(n,t,e))}async function jc(n){const e=Ee(n),t=Js(e);let s=e.ha.length>0?e.ha[e.ha.length-1].batchId:kd;for(;hx(e);)try{const r=await G1(e.localStore,s);if(r===null){e.ha.length===0&&t.N_();break}s=r.batchId,dx(e,r)}catch(r){await Kl(e,r)}uw(e)&&hw(e)}function hx(n){return Fr(n)&&n.ha.length<10}function dx(n,e){n.ha.push(e);const t=Js(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function uw(n){return Fr(n)&&!Js(n).F_()&&n.ha.length>0}function hw(n){Js(n).start()}async function fx(n){Js(n).ta()}async function px(n){const e=Js(n);for(const t of n.ha)e.Z_(t.mutations)}async function gx(n,e,t){const s=n.ha.shift(),r=Fd.from(s,e,t);await cw(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await jc(n)}async function mx(n,e){e&&Js(n).Y_&&await async function(s,r){if(function(o){return XP(o)&&o!==q.ABORTED}(r.code)){const i=s.ha.shift();Js(s).O_(),await cw(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await jc(s)}}(n,e),uw(n)&&hw(n)}async function Tm(n,e){const t=Ee(n);t.asyncQueue.verifyOperationInProgress(),ne(br,"RemoteStore received new credentials");const s=Fr(t);t.Ta.add(3),await _a(t),s&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await $c(t)}async function _x(n,e){const t=Ee(n);e?(t.Ta.delete(2),await $c(t)):e||(t.Ta.add(2),await _a(t),t.da.set("Unknown"))}function Li(n){return n.Ra||(n.Ra=function(t,s,r){const i=Ee(t);return i.ra(),new tx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{e_:ax.bind(null,n),n_:lx.bind(null,n),i_:cx.bind(null,n),j_:ux.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Kd(n)?zd(n):n.da.set("Unknown")):(await n.Ra.stop(),lw(n))})),n.Ra}function Js(n){return n.Va||(n.Va=function(t,s,r){const i=Ee(t);return i.ra(),new nx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:fx.bind(null,n),i_:mx.bind(null,n),X_:px.bind(null,n),ea:gx.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await jc(n)):(await n.Va.stop(),n.ha.length>0&&(ne(br,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class Qd{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Qd(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yd(n,e){if(ds("AsyncQueue",`${e}: ${n}`),Mi(n))return new oe(q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ci{static emptySet(e){return new ci(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=fo(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Im{constructor(){this.ma=new ot(ce.comparator)}track(e){const t=e.doc.key,s=this.ma.get(t);s?e.type!==0&&s.type===3?this.ma=this.ma.insert(t,e):e.type===3&&s.type!==1?this.ma=this.ma.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ma=this.ma.remove(t):e.type===1&&s.type===2?this.ma=this.ma.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,fa:s}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ti{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ti(e,t,ci.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class yx{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class vx{constructor(){this.queries=bm(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,s){const r=Ee(t),i=r.queries;r.queries=bm(),i.forEach((o,a)=>{for(const c of a.ya)c.onError(s)})})(this,new oe(q.ABORTED,"Firestore shutting down"))}}function bm(){return new Lr(n=>kE(n),Mc)}async function dw(n,e){const t=Ee(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.wa()&&e.Sa()&&(s=2):(i=new yx,s=e.Sa()?0:1);try{switch(s){case 0:i.pa=await t.onListen(r,!0);break;case 1:i.pa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=Yd(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Jd(t)}async function fw(n,e){const t=Ee(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.ya.indexOf(e);o>=0&&(i.ya.splice(o,1),i.ya.length===0?r=e.Sa()?0:1:!i.wa()&&e.Sa()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Ex(n,e){const t=Ee(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.ya)a.va(r)&&(s=!0);o.pa=r}}s&&Jd(t)}function wx(n,e,t){const s=Ee(n),r=s.queries.get(e);if(r)for(const i of r.ya)i.onError(t);s.queries.delete(e)}function Jd(n){n.ba.forEach(e=>{e.next()})}var xh,Cm;(Cm=xh||(xh={})).Ca="default",Cm.Cache="cache";class pw{constructor(e,t,s){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ti(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const s=t!=="Offline";return(!this.options.La||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==xh.Cache}}/**
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
 */class gw{constructor(e){this.key=e}}class mw{constructor(e){this.key=e}}class Tx{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Ne(),this.mutatedKeys=Ne(),this.Ha=NE(e),this.Ja=new ci(this.Ha)}get Ya(){return this.Ga}Za(e,t){const s=t?t.Xa:new Im,r=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const p=r.get(h),m=Lc(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let x=!1;p&&m?p.data.isEqual(m.data)?v!==A&&(s.track({type:3,doc:m}),x=!0):this.eu(p,m)||(s.track({type:2,doc:m}),x=!0,(c&&this.Ha(m,c)>0||u&&this.Ha(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),x=!0):p&&!m&&(s.track({type:1,doc:p}),x=!0,(c||u)&&(a=!0)),x&&(m?(o=o.add(m),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Ja:o,Xa:s,Cs:a,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((h,f)=>function(m,v){const A=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:x})}};return A(m)-A(v)}(h.type,f.type)||this.Ha(h.doc,f.doc)),this.tu(s),r=r!=null&&r;const a=t&&!r?this.nu():[],c=this.ja.size===0&&this.current&&!r?1:0,u=c!==this.za;return this.za=c,o.length!==0||u?{snapshot:new Ti(this.query,e.Ja,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:a}:{ru:a}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Im,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Ne(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const t=[];return e.forEach(s=>{this.ja.has(s)||t.push(new mw(s))}),this.ja.forEach(s=>{e.has(s)||t.push(new gw(s))}),t}su(e){this.Ga=e.$s,this.ja=Ne();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Ti.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Xd="SyncEngine";class Ix{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class bx{constructor(e){this.key=e,this._u=!1}}class Cx{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new Lr(a=>kE(a),Mc),this.cu=new Map,this.lu=new Set,this.hu=new ot(ce.comparator),this.Pu=new Map,this.Tu=new $d,this.Iu={},this.Eu=new Map,this.du=wi.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Ax(n,e,t=!0){const s=Tw(n);let r;const i=s.uu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.ou()):r=await _w(s,e,t,!0),r}async function Sx(n,e){const t=Tw(n);await _w(t,e,!0,!1)}async function _w(n,e,t,s){const r=await z1(n.localStore,Mn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await Rx(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&ow(n.remoteStore,r),a}async function Rx(n,e,t,s,r){n.Ru=(f,p,m)=>async function(A,x,M,N){let L=x.view.Za(M);L.Cs&&(L=await _m(A.localStore,x.query,!1).then(({documents:b})=>x.view.Za(b,L)));const G=N&&N.targetChanges.get(x.targetId),de=N&&N.targetMismatches.get(x.targetId)!=null,ye=x.view.applyChanges(L,A.isPrimaryClient,G,de);return Sm(A,x.targetId,ye.ru),ye.snapshot}(n,f,p,m);const i=await _m(n.localStore,e,!0),o=new Tx(e,i.$s),a=o.Za(i.documents),c=ma.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);Sm(n,t,u.ru);const h=new Ix(e,t,o);return n.uu.set(e,h),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),u.snapshot}async function Px(n,e,t){const s=Ee(n),r=s.uu.get(e),i=s.cu.get(r.targetId);if(i.length>1)return s.cu.set(r.targetId,i.filter(o=>!Mc(o,e))),void s.uu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Rh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&qd(s.remoteStore,r.targetId),kh(s,r.targetId)}).catch(Oi)):(kh(s,r.targetId),await Rh(s.localStore,r.targetId,!0))}async function xx(n,e){const t=Ee(n),s=t.uu.get(e),r=t.cu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),qd(t.remoteStore,s.targetId))}async function kx(n,e,t){const s=Fx(n);try{const r=await function(o,a){const c=Ee(o),u=dt.now(),h=a.reduce((m,v)=>m.add(v.key),Ne());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=fs(),A=Ne();return c.Bs.getEntries(m,h).next(x=>{v=x,v.forEach((M,N)=>{N.isValidDocument()||(A=A.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(x=>{f=x;const M=[];for(const N of a){const L=zP(N,f.get(N.key).overlayedDocument);L!=null&&M.push(new Vr(N.key,L,bE(L.value.mapValue),os.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,M,a)}).next(x=>{p=x;const M=x.applyToLocalDocumentSet(f,A);return c.documentOverlayCache.saveOverlays(m,x.batchId,M)})}).then(()=>({batchId:p.batchId,changes:OE(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.Iu[o.currentUser.toKey()];u||(u=new ot(Ce)),u=u.insert(a,c),o.Iu[o.currentUser.toKey()]=u}(s,r.batchId,t),await ya(s,r.changes),await jc(s.remoteStore)}catch(r){const i=Yd(r,"Failed to persist write");t.reject(i)}}async function yw(n,e){const t=Ee(n);try{const s=await W1(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Pu.get(i);o&&($e(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o._u=!0:r.modifiedDocuments.size>0?$e(o._u,14607):r.removedDocuments.size>0&&($e(o._u,42227),o._u=!1))}),await ya(t,s,e)}catch(s){await Oi(s)}}function Am(n,e,t){const s=Ee(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.uu.forEach((i,o)=>{const a=o.view.Da(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=Ee(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.ya)p.Da(a)&&(u=!0)}),u&&Jd(c)}(s.eventManager,e),r.length&&s.au.j_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Nx(n,e,t){const s=Ee(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Pu.get(e),i=r&&r.key;if(i){let o=new ot(ce.comparator);o=o.insert(i,Mt.newNoDocument(i,ve.min()));const a=Ne().add(i),c=new Uc(ve.min(),new Map,new ot(Ce),o,a);await yw(s,c),s.hu=s.hu.remove(i),s.Pu.delete(e),Zd(s)}else await Rh(s.localStore,e,!1).then(()=>kh(s,e,t)).catch(Oi)}async function Dx(n,e){const t=Ee(n),s=e.batch.batchId;try{const r=await H1(t.localStore,e);Ew(t,s,null),vw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ya(t,r)}catch(r){await Oi(r)}}async function Ox(n,e,t){const s=Ee(n);try{const r=await function(o,a){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>($e(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Ew(s,e,t),vw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ya(s,r)}catch(r){await Oi(r)}}function vw(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Ew(n,e,t){const s=Ee(n);let r=s.Iu[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Iu[s.currentUser.toKey()]=r}}function kh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.cu.get(e))n.uu.delete(s),t&&n.au.Vu(s,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(s=>{n.Tu.containsKey(s)||ww(n,s)})}function ww(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(qd(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Zd(n))}function Sm(n,e,t){for(const s of t)s instanceof gw?(n.Tu.addReference(s.key,e),Mx(n,s)):s instanceof mw?(ne(Xd,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,e),n.Tu.containsKey(s.key)||ww(n,s.key)):ge(19791,{mu:s})}function Mx(n,e){const t=e.key,s=t.path.canonicalString();n.hu.get(t)||n.lu.has(s)||(ne(Xd,"New document in limbo: "+t),n.lu.add(s),Zd(n))}function Zd(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new ce(Ze.fromString(e)),s=n.du.next();n.Pu.set(s,new bx(t)),n.hu=n.hu.insert(t,s),ow(n.remoteStore,new ks(Mn(Ld(t.path)),s,"TargetPurposeLimboResolution",kc.le))}}async function ya(n,e,t){const s=Ee(n),r=[],i=[],o=[];s.uu.isEmpty()||(s.uu.forEach((a,c)=>{o.push(s.Ru(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=Hd.Rs(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.au.j_(r),await async function(c,u){const h=Ee(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,p=>B.forEach(p.ds,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>B.forEach(p.As,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!Mi(f))throw f;ne(Wd,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.xs.get(p),v=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(v);h.xs=h.xs.insert(p,A)}}}(s.localStore,i))}async function Lx(n,e){const t=Ee(n);if(!t.currentUser.isEqual(e)){ne(Xd,"User change. New user:",e.toKey());const s=await nw(t.localStore,e);t.currentUser=e,function(i,o){i.Eu.forEach(a=>{a.forEach(c=>{c.reject(new oe(q.CANCELLED,o))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ya(t,s.ks)}}function Vx(n,e){const t=Ee(n),s=t.Pu.get(e);if(s&&s._u)return Ne().add(s.key);{let r=Ne();const i=t.cu.get(e);if(!i)return r;for(const o of i){const a=t.uu.get(o);r=r.unionWith(a.view.Ya)}return r}}function Tw(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nx.bind(null,e),e.au.j_=Ex.bind(null,e.eventManager),e.au.Vu=wx.bind(null,e.eventManager),e}function Fx(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ox.bind(null,e),e}class Ql{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return j1(this.persistence,new U1,e.initialUser,this.serializer)}yu(e){return new tw(jd.fi,this.serializer)}pu(e){return new Q1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ql.provider={build:()=>new Ql};class Ux extends Ql{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){$e(this.persistence.referenceDelegate instanceof zl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new b1(s,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new tw(s=>zl.fi(s,t),this.serializer)}}class Nh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Am(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lx.bind(null,this.syncEngine),await _x(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vx}()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),s=function(i){return new ex(i)}(e.databaseInfo);return function(i,o,a,c){return new rx(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new ox(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Am(this.syncEngine,t,0),function(){return Em.C()?new Em:new Y1}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const f=new Cx(r,i,o,a,c,u);return h&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=Ee(r);ne(br,"RemoteStore shutting down."),i.Ta.add(5),await _a(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Nh.provider={build:()=>new Nh};/**
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
 */class Iw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):ds("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Xs="FirestoreClient";class Bx{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Dt.UNAUTHENTICATED,this.clientId=pE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ne(Xs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ne(Xs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Yd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Fu(n,e){n.asyncQueue.verifyOperationInProgress(),ne(Xs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await nw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $x(n);ne(Xs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Tm(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Tm(e.remoteStore,r)),n._onlineComponents=e}async function $x(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(Xs,"Using user provided OfflineComponentProvider");try{await Fu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===q.FAILED_PRECONDITION||r.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;_i("Error using user provided cache. Falling back to memory cache: "+t),await Fu(n,new Ql)}}else ne(Xs,"Using default OfflineComponentProvider"),await Fu(n,new Ux(void 0));return n._offlineComponents}async function bw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(Xs,"Using user provided OnlineComponentProvider"),await Rm(n,n._uninitializedComponentsProvider._online)):(ne(Xs,"Using default OnlineComponentProvider"),await Rm(n,new Nh))),n._onlineComponents}function jx(n){return bw(n).then(e=>e.syncEngine)}async function Cw(n){const e=await bw(n),t=e.eventManager;return t.onListen=Ax.bind(null,e.syncEngine),t.onUnlisten=Px.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xx.bind(null,e.syncEngine),t}function Hx(n,e,t={}){const s=new is;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Iw({next:p=>{h.Cu(),o.enqueueAndForget(()=>fw(i,f));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new oe(q.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&c&&c.source==="server"?u.reject(new oe(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new pw(Ld(a.path),h,{includeMetadataChanges:!0,La:!0});return dw(i,f)}(await Cw(n),n.asyncQueue,e,t,s)),s.promise}function Wx(n,e,t={}){const s=new is;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new Iw({next:p=>{h.Cu(),o.enqueueAndForget(()=>fw(i,f)),p.fromCache&&c.source==="server"?u.reject(new oe(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new pw(a,h,{includeMetadataChanges:!0,La:!0});return dw(i,f)}(await Cw(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function Aw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Pm=new Map;/**
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
 */function Sw(n,e,t){if(!t)throw new oe(q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qx(n,e,t,s){if(e===!0&&s===!0)throw new oe(q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xm(n){if(!ce.isDocumentKey(n))throw new oe(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function km(n){if(ce.isDocumentKey(n))throw new oe(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ef(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function Cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new oe(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ef(n);throw new oe(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Rw="firestore.googleapis.com",Nm=!0;class Dm{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rw,this.ssl=Nm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Nm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ew;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T1)throw new oe(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Aw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new XR;switch(s.type){case"firstParty":return new nP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Pm.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Pm.delete(t),s.terminate())}(this),Promise.resolve()}}function Gx(n,e,t,s={}){var r;n=Cr(n,Hc);const i=kr(e),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(pd(`https://${c}`),gd("Firestore",!0)),o.host!==Rw&&o.host!==c&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:s});if(!Ws(u,a)&&(n._setSettings(u),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=Dt.MOCK_USER;else{h=iv(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new oe(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(p)}n._authCredentials=new ZR(new dE(h,f))}}/**
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
 */class Wc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wc(this.firestore,e,this._query)}}class sn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class Fs extends Wc{constructor(e,t,s){super(e,t,Ld(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new ce(e))}withConverter(e){return new Fs(this.firestore,e,this._path)}}function Om(n,e,...t){if(n=st(n),Sw("collection","path",e),n instanceof Hc){const s=Ze.fromString(e,...t);return km(s),new Fs(n,null,s)}{if(!(n instanceof sn||n instanceof Fs))throw new oe(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ze.fromString(e,...t));return km(s),new Fs(n.firestore,null,s)}}function zx(n,e,...t){if(n=st(n),arguments.length===1&&(e=pE.newId()),Sw("doc","path",e),n instanceof Hc){const s=Ze.fromString(e,...t);return xm(s),new sn(n,null,new ce(s))}{if(!(n instanceof sn||n instanceof Fs))throw new oe(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ze.fromString(e,...t));return xm(s),new sn(n.firestore,n instanceof Fs?n.converter:null,new ce(s))}}/**
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
 */const Mm="AsyncQueue";class Lm{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new rw(this,"async_queue_retry"),this.ec=()=>{const s=Vu();s&&ne(Mm,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const t=Vu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Vu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new is;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Mi(e))throw e;ne(Mm,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,ds("INTERNAL UNHANDLED ERROR: ",Vm(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=t,t}enqueueAfterDelay(e,t,s){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const r=Qd.createAndSchedule(this,e,t,s,i=>this.oc(i));return this.Hu.push(r),r}nc(){this.Ju&&ge(47125,{_c:Vm(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Vm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qc extends Hc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Lm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lm(e),this._firestoreClient=void 0,await e}}}function Kx(n,e){const t=typeof n=="object"?n:vd(),s=typeof n=="string"?n:Bl,r=bc(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=nv("firestore");i&&Gx(r,...i)}return r}function tf(n){if(n._terminated)throw new oe(q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qx(n),n._firestoreClient}function Qx(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new _P(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Aw(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Bx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ii(At.fromBase64String(e))}catch(t){throw new oe(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ii(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pw{constructor(e){this._methodName=e}}/**
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
 */class sf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */class rf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Yx=/^__.*__$/;class Jx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ga(e,this.data,t,this.fieldTransforms)}}function xw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{hc:n})}}class of{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Tc({path:s,Ec:!1});return r.dc(e),r}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Tc({path:s,Ec:!1});return r.Pc(),r}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Yl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(xw(this.hc)&&Yx.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Xx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Bc(e)}gc(e,t,s,r=!1){return new of({hc:e,methodName:t,fc:s,path:Ct.emptyPath(),Ec:!1,mc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zx(n){const e=n._freezeSettings(),t=Bc(n._databaseId);return new Xx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ek(n,e,t,s,r,i={}){const o=n.gc(i.merge||i.mergeFields?2:0,e,t,r);Ow("Data must be an object, but it was:",o,s);const a=Nw(s,o);let c,u;if(i.merge)c=new _n(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=tk(e,f,t);if(!o.contains(p))throw new oe(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);sk(h,p)||h.push(p)}c=new _n(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new Jx(new cn(a),c,u)}function kw(n,e){if(Dw(n=st(n)))return Ow("Unsupported field value:",e,n),Nw(n,e);if(n instanceof Pw)return function(s,r){if(!xw(r.hc))throw r.Vc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Vc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=kw(a,r.Rc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $P(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=dt.fromDate(s);return{timestampValue:Gl(r.serializer,i)}}if(s instanceof dt){const i=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Gl(r.serializer,i)}}if(s instanceof sf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ii)return{bytesValue:zE(r.serializer,s._byteString)};if(s instanceof sn){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof rf)return function(o,a){return{mapValue:{fields:{[TE]:{stringValue:IE},[$l]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Vc("VectorValues must only contain numeric values.");return Vd(a.serializer,u)})}}}}}}(s,r);throw r.Vc(`Unsupported field value: ${ef(s)}`)}(n,e)}function Nw(n,e){const t={};return mE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(n,(s,r)=>{const i=kw(r,e.Ic(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Dw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof dt||n instanceof sf||n instanceof Ii||n instanceof sn||n instanceof Pw||n instanceof rf)}function Ow(n,e,t){if(!Dw(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=ef(t);throw s==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+s)}}function tk(n,e,t){if((e=st(e))instanceof nf)return e._internalPath;if(typeof e=="string")return Mw(n,e);throw Yl("Field path arguments must be of type string or ",n,!1,void 0,t)}const nk=new RegExp("[~\\*/\\[\\]]");function Mw(n,e,t){if(e.search(nk)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nf(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Yl(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new oe(q.INVALID_ARGUMENT,a+n+c)}function sk(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Lw{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class rk extends Lw{data(){return super.data()}}function Vw(n,e){return typeof e=="string"?Mw(n,e):e instanceof nf?e._internalPath:e._delegate._internalPath}/**
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
 */function ik(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new oe(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ok{convertValue(e,t="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Mr(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[$l].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>nt(o.doubleValue));return new rf(i)}convertGeoPoint(e){return new sf(nt(e.latitude),nt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Dc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const t=Ks(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ze.fromString(e);$e(ZE(s),9688,{name:e});const r=new qo(s.get(1),s.get(3)),i=new ce(s.popFirst(5));return r.isEqual(t)||ds(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ak(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
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
 */class go{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fw extends Lw{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Vw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class _l extends Fw{data(e={}){return super.data(e)}}class lk{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new go(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new _l(this._firestore,this._userDataWriter,s.key,s,new go(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new _l(r._firestore,r._userDataWriter,a.doc.key,a.doc,new go(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new _l(r._firestore,r._userDataWriter,a.doc.key,a.doc,new go(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:ck(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ck(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}/**
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
 */function uk(n){n=Cr(n,sn);const e=Cr(n.firestore,qc);return Hx(tf(e),n._key).then(t=>fk(e,n,t))}class Uw extends ok{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ii(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,t)}}function Fm(n){n=Cr(n,Wc);const e=Cr(n.firestore,qc),t=tf(e),s=new Uw(e);return ik(n._query),Wx(t,n._query).then(r=>new lk(e,s,n,r))}function hk(n,e,t){n=Cr(n,sn);const s=Cr(n.firestore,qc),r=ak(n.converter,e,t);return dk(s,[ek(Zx(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,os.none())])}function dk(n,e){return function(s,r){const i=new is;return s.asyncQueue.enqueueAndForget(async()=>kx(await jx(s),r,i)),i.promise}(tf(n),e)}function fk(n,e,t){const s=t.docs.get(e._key),r=new Uw(n);return new Fw(n,r,e._key,s,new go(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){Di=r})(Nr),wr(new qs("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new qc(new eP(s.getProvider("auth-internal")),new sP(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Nn($g,jg,e),Nn($g,jg,"esm2017")})();var Um={};const Bm="@firebase/database",$m="1.0.19";/**
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
 */let Bw="";function pk(n){Bw=n}/**
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
 */class gk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$o(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _s(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $w=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gk(e)}}catch{}return new mk},gr=$w("localStorage"),_k=$w("sessionStorage");/**
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
 */const ui=new Ic("@firebase/database"),yk=function(){let n=1;return function(){return n++}}(),jw=function(n){const e=BC(n),t=new LC;t.update(e);const s=t.digest();return fd.encodeByteArray(s)},va=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=va.apply(null,s):typeof s=="object"?e+=ct(s):e+=s,e+=" "}return e};let Ro=null,jm=!0;const vk=function(n,e){Q(!0,"Can't turn on custom loggers persistently."),ui.logLevel=Pe.VERBOSE,Ro=ui.log.bind(ui)},Lt=function(...n){if(jm===!0&&(jm=!1,Ro===null&&_k.get("logging_enabled")===!0&&vk()),Ro){const e=va.apply(null,n);Ro(e)}},Ea=function(n){return function(...e){Lt(n,...e)}},Dh=function(...n){const e="FIREBASE INTERNAL ERROR: "+va(...n);ui.error(e)},ps=function(...n){const e=`FIREBASE FATAL ERROR: ${va(...n)}`;throw ui.error(e),new Error(e)},Qt=function(...n){const e="FIREBASE WARNING: "+va(...n);ui.warn(e)},Ek=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},bi="[MIN_NAME]",Ar="[MAX_NAME]",Vi=function(n,e){if(n===e)return 0;if(n===bi||e===Ar)return-1;if(e===bi||n===Ar)return 1;{const t=Hm(n),s=Hm(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Tk=function(n,e){return n===e?0:n<e?-1:1},to=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},af=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ct(e[s]),t+=":",t+=af(n[e[s]]);return t+="}",t},Ww=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function Yt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const qw=function(n){Q(!Hw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},Ik=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ck(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ak=new RegExp("^-?(0*)\\d{1,10}$"),Sk=-2147483648,Rk=2147483647,Hm=function(n){if(Ak.test(n)){const e=Number(n);if(e>=Sk&&e<=Rk)return e}return null},Fi=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Qt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Pk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Po=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class xk{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,en(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qt(e)}}class yl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yl.OWNER="owner";/**
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
 */const lf="5",Gw="v",zw="s",Kw="r",Qw="f",Yw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jw="ls",Xw="p",Oh="ac",Zw="websocket",eT="long_polling";/**
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
 */class tT{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Nk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function nT(n,e,t){Q(typeof e=="string","typeof type must == string"),Q(typeof t=="object","typeof params must == object");let s;if(e===Zw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===eT)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Nk(n)&&(t.ns=n.namespace);const r=[];return Yt(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class Dk{constructor(){this.counters_={}}incrementCounter(e,t=1){_s(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return gC(this.counters_)}}/**
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
 */const Uu={},Bu={};function cf(n){const e=n.toString();return Uu[e]||(Uu[e]=new Dk),Uu[e]}function Ok(n,e){const t=n.toString();return Bu[t]||(Bu[t]=e()),Bu[t]}/**
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
 */class Mk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Fi(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wm="start",Lk="close",Vk="pLPCommand",Fk="pRTLPCB",sT="id",rT="pw",iT="ser",Uk="cb",Bk="seg",$k="ts",jk="d",Hk="dframe",oT=1870,aT=30,Wk=oT-aT,qk=25e3,Gk=3e4;class Zr{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ea(e),this.stats_=cf(t),this.urlFn=c=>(this.appCheckToken&&(c[Oh]=this.appCheckToken),nT(t,eT,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Mk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gk)),wk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wm)this.id=a,this.password=c;else if(o===Lk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Wm]="t",s[iT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Uk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Gw]=lf,this.transportSessionId&&(s[zw]=this.transportSessionId),this.lastSessionId&&(s[Jw]=this.lastSessionId),this.applicationId&&(s[Xw]=this.applicationId),this.appCheckToken&&(s[Oh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yw.test(location.hostname)&&(s[Kw]=Qw);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ik()&&!bk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Zy(t),r=Ww(s,Wk);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Hk]="t",s[sT]=e,s[rT]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class uf{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yk(),window[Vk+this.uniqueCallbackIdentifier]=e,window[Fk+this.uniqueCallbackIdentifier]=t,this.myIFrame=uf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Lt("frame writing exception"),a.stack&&Lt(a.stack),Lt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Lt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sT]=this.myID,e[rT]=this.myPW,e[iT]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+aT+s.length<=oT;){const o=this.pendingSegs.shift();s=s+"&"+Bk+r+"="+o.seg+"&"+$k+r+"="+o.ts+"&"+jk+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(qk)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const zk=16384,Kk=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class gn{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ea(this.connId),this.stats_=cf(t),this.connURL=gn.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[Gw]=lf,typeof location<"u"&&location.hostname&&Yw.test(location.hostname)&&(o[Kw]=Qw),t&&(o[zw]=t),s&&(o[Jw]=s),r&&(o[Oh]=r),i&&(o[Xw]=i),nT(e,Zw,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let s;SC(),this.mySock=new Jl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!gn.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$o(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ww(t,zk);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gn.responsesRequiredToBeHealthy=2;gn.healthyTimeout=3e4;/**
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
 */class Qo{static get ALL_TRANSPORTS(){return[Zr,gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=gn&&gn.isAvailable();let s=t&&!gn.previouslyFailed();if(e.webSocketOnly&&(t||Qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[gn];else{const r=this.transports_=[];for(const i of Qo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Qo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qo.globalTransportInitialized_=!1;/**
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
 */const Qk=6e4,Yk=5e3,Jk=10*1024,Xk=100*1024,$u="t",qm="d",Zk="s",Gm="r",eN="e",zm="o",Km="a",Qm="n",Ym="p",tN="h";class nN{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ea("c:"+this.id+":"),this.transportManager_=new Qo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Po(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($u in e){const t=e[$u];t===Km?this.upgradeIfSecondaryHealthy_():t===Gm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=to("t",e),s=to("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ym,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Km,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=to("t",e),s=to("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=to($u,e);if(qm in e){const s=e[qm];if(t===tN){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Qm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Zk?this.onConnectionShutdown_(s):t===Gm?this.onReset_(s):t===eN?Dh("Server Error: "+s):t===zm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),lf!==s&&Qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Po(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Po(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ym,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lT{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class cT{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xl extends cT{static getInstance(){return new Xl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!md()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jm=32,Xm=768;class ze{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ve(){return new ze("")}function ke(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Zs(n){return n.pieces_.length-n.pieceNum_}function Qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ze(n.pieces_,e)}function uT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function sN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function hT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function dT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ze(e,0)}function ht(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new ze(t,0)}function xe(n){return n.pieceNum_>=n.pieces_.length}function Wt(n,e){const t=ke(n),s=ke(e);if(t===null)return e;if(t===s)return Wt(Qe(n),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function fT(n,e){if(Zs(n)!==Zs(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function yn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Zs(n)>Zs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class rN{constructor(e,t){this.errorPrefix_=t,this.parts_=hT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Tc(this.parts_[s]);pT(this)}}function iN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Tc(e),pT(n)}function oN(n){const e=n.parts_.pop();n.byteLength_-=Tc(e),n.parts_.length>0&&(n.byteLength_-=1)}function pT(n){if(n.byteLength_>Xm)throw new Error(n.errorPrefix_+"has a key path longer than "+Xm+" bytes ("+n.byteLength_+").");if(n.parts_.length>Jm)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jm+") or object contains a cycle "+fr(n))}function fr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class hf extends cT{static getInstance(){return new hf}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const no=1e3,aN=60*5*1e3,Zm=30*1e3,lN=1.3,cN=3e4,uN="server_kill",e_=3;class as extends lT{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=as.nextPersistentConnectionId_++,this.log_=Ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=no,this.maxReconnectDelay_=aN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(ct(i)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new wc,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;as.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_s(e,"w")){const s=pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=OC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Dh("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cN&&(this.reconnectDelay_=no),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+as.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Lt("getToken() completed but was canceled"):(Lt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new nN(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Qt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(uN)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Qt(f),c())}}}interrupt(e){Lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ih(this.interruptReasons_)&&(this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>af(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){Lt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e_&&(this.reconnectDelay_=Zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Lt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Bw.replace(/\./g,"-")]=1,md()?e["framework.cordova"]=1:ov()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xl.getInstance().currentlyOnline();return ih(this.interruptReasons_)&&e}}as.nextPersistentConnectionId_=0;as.nextConnectionId_=0;/**
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
 */class Se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Se(e,t)}}/**
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
 */class Gc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Se(bi,e),r=new Se(bi,t);return this.compare(s,r)!==0}minPost(){return Se.MIN}}/**
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
 */let Ja;class gT extends Gc{static get __EMPTY_NODE(){return Ja}static set __EMPTY_NODE(e){Ja=e}compare(e,t){return Vi(e.name,t.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Ar,Ja)}makePost(e,t){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Ja)}toString(){return".key"}}const hi=new gT;/**
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
 */class Xa{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??mt.RED,this.left=r??Kt.EMPTY_NODE,this.right=i??Kt.EMPTY_NODE}copy(e,t,s,r,i){return new mt(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Kt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class hN{copy(e,t,s,r,i){return this}insert(e,t,s){return new mt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Kt{constructor(e,t=Kt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Kt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new Kt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xa(this.root_,null,this.comparator_,!0,e)}}Kt.EMPTY_NODE=new hN;/**
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
 */function dN(n,e){return Vi(n.name,e.name)}function df(n,e){return Vi(n,e)}/**
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
 */let Mh;function fN(n){Mh=n}const mT=function(n){return typeof n=="number"?"number:"+qw(n):"string:"+n},_T=function(n){if(n.isLeafNode()){const e=n.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_s(e,".sv"),"Priority must be a string or number.")}else Q(n===Mh||n.isEmpty(),"priority of unexpected type.");Q(n===Mh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let t_;class pt{static set __childrenNodeConstructor(e){t_=e}static get __childrenNodeConstructor(){return t_}constructor(e,t=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_T(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return xe(e)?this:ke(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ke(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(Q(s!==".priority"||Zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=qw(this.value_):e+=this.value_,this.lazyHash_=jw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=pt.VALUE_TYPE_ORDER.indexOf(t),i=pt.VALUE_TYPE_ORDER.indexOf(s);return Q(r>=0,"Unknown leaf type: "+t),Q(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yT,vT;function pN(n){yT=n}function gN(n){vT=n}class mN extends Gc{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Vi(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Ar,new pt("[PRIORITY-POST]",vT))}makePost(e,t){const s=yT(e);return new Se(t,new pt("[PRIORITY-POST]",s))}toString(){return".priority"}}const tt=new mN;/**
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
 */const _N=Math.log(2);class yN{constructor(e){const t=i=>parseInt(Math.log(i)/_N,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zl=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let f,p;if(h===0)return null;if(h===1)return f=n[c],p=t?t(f):f,new mt(p,f.node,mt.BLACK,null,null);{const m=parseInt(h/2,10)+c,v=r(c,m),A=r(m+1,u);return f=n[m],p=t?t(f):f,new mt(p,f.node,mt.BLACK,v,A)}},i=function(c){let u=null,h=null,f=n.length;const p=function(v,A){const x=f-v,M=f;f-=v;const N=r(x+1,M),L=n[x],G=t?t(L):L;m(new mt(G,L.node,A,null,N))},m=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const A=c.nextBitIsOne(),x=Math.pow(2,c.count-(v+1));A?p(x,mt.BLACK):(p(x,mt.BLACK),p(x,mt.RED))}return h},o=new yN(n.length),a=i(o);return new Kt(s||e,a)};/**
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
 */let ju;const qr={};class ss{static get Default(){return Q(qr&&tt,"ChildrenNode.ts has not been loaded"),ju=ju||new ss({".priority":qr},{".priority":tt}),ju}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=pi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Kt?t:null}hasIndex(e){return _s(this.indexSet_,e.toString())}addIndex(e,t){Q(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Se.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Zl(s,e.getCompare()):a=qr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new ss(h,u)}addToIndexes(e,t){const s=kl(this.indexes_,(r,i)=>{const o=pi(this.indexSet_,i);if(Q(o,"Missing index implementation for "+i),r===qr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Se.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Zl(a,o.getCompare())}else return qr;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Se(e.name,a))),c.insert(e,e.node)}});return new ss(s,this.indexSet_)}removeFromIndexes(e,t){const s=kl(this.indexes_,r=>{if(r===qr)return r;{const i=t.get(e.name);return i?r.remove(new Se(e.name,i)):r}});return new ss(s,this.indexSet_)}}/**
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
 */let so;class pe{static get EMPTY_NODE(){return so||(so=new pe(new Kt(df),null,ss.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_T(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||so}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?so:t}}getChild(e){const t=ke(e);return t===null?this:this.getImmediateChild(t).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Q(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Se(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?so:this.priorityNode_;return new pe(r,o,i)}}updateChild(e,t){const s=ke(e);if(s===null)return t;{Q(ke(e)!==".priority"||Zs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Qe(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(tt,(o,a)=>{t[o]=a.val(e),s++,i&&pe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mT(this.getPriority().val())+":"),this.forEachChild(tt,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":jw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Se(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Se(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Se.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wa?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(tt),r=t.getIterator(tt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vN extends pe{constructor(){super(new Kt(df),pe.EMPTY_NODE,ss.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const wa=new vN;Object.defineProperties(Se,{MIN:{value:new Se(bi,pe.EMPTY_NODE)},MAX:{value:new Se(Ar,wa)}});gT.__EMPTY_NODE=pe.EMPTY_NODE;pt.__childrenNodeConstructor=pe;fN(wa);gN(wa);/**
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
 */const EN=!0;function _t(n,e=null){if(n===null)return pe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new pt(t,_t(e))}if(!(n instanceof Array)&&EN){const t=[];let s=!1;if(Yt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_t(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Se(o,c)))}}),t.length===0)return pe.EMPTY_NODE;const i=Zl(t,dN,o=>o.name,df);if(s){const o=Zl(t,tt.getCompare());return new pe(i,_t(e),new ss({".priority":o},{".priority":tt}))}else return new pe(i,_t(e),ss.Default)}else{let t=pe.EMPTY_NODE;return Yt(n,(s,r)=>{if(_s(n,s)&&s.substring(0,1)!=="."){const i=_t(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(_t(e))}}pN(_t);/**
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
 */class wN extends Gc{constructor(e){super(),this.indexPath_=e,Q(!xe(e)&&ke(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Vi(e.name,t.name):i}makePost(e,t){const s=_t(e),r=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Se(t,r)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,wa);return new Se(Ar,e)}toString(){return hT(this.indexPath_,0).join("/")}}/**
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
 */class TN extends Gc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Vi(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,t){const s=_t(e);return new Se(t,s)}toString(){return".value"}}const IN=new TN;/**
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
 */function ET(n){return{type:"value",snapshotNode:n}}function Ci(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Yo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Jo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function bN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ff{constructor(e){this.index_=e}updateChild(e,t,s,r,i,o){Q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Yo(t,a)):Q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ci(t,s)):o.trackChildChange(Jo(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(tt,(r,i)=>{t.hasChild(r)||s.trackChildChange(Yo(r,i))}),t.isLeafNode()||t.forEachChild(tt,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Jo(r,i,o))}else s.trackChildChange(Ci(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?pe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xo{constructor(e){this.indexedFilter_=new ff(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xo.getStartPost_(e),this.endPost_=Xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,r,i,o){return this.matches(new Se(t,s))||(s=pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,r,i,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=pe.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(pe.EMPTY_NODE);const i=this;return t.forEachChild(tt,(o,a)=>{i.matches(new Se(o,a))||(r=r.updateImmediateChild(o,pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class CN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,r,i,o){return this.rangedFilter_.matches(new Se(t,s))||(s=pe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,r,i,o):this.fullLimitUpdateChild_(e,t,s,i,o)}updateFullNode(e,t,s){let r;if(t.isLeafNode()||t.isEmpty())r=pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=pe.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(pe.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,r,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(p,m)=>f(m,p)}else o=this.index_.getCompare();const a=e;Q(a.numChildren()===this.limit_,"");const c=new Se(t,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let p=r.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===t||a.hasChild(p.name));)p=r.getChildAfterChild(this.index_,p,this.reverse_);const m=p==null?1:o(p,c);if(h&&!s.isEmpty()&&m>=0)return i!=null&&i.trackChildChange(Jo(t,s,f)),a.updateImmediateChild(t,s);{i!=null&&i.trackChildChange(Yo(t,f));const A=a.updateImmediateChild(t,pe.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(i!=null&&i.trackChildChange(Ci(p.name,p.node)),A.updateImmediateChild(p.name,p.node)):A}}else return s.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Yo(u.name,u.node)),i.trackChildChange(Ci(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(u.name,pe.EMPTY_NODE)):e}}/**
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
 */class pf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bi}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===tt}copy(){const e=new pf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function AN(n){return n.loadsAllData()?new ff(n.getIndex()):n.hasLimit()?new CN(n):new Xo(n)}function n_(n){const e={};if(n.isDefault())return e;let t;if(n.index_===tt?t="$priority":n.index_===IN?t="$value":n.index_===hi?t="$key":(Q(n.index_ instanceof wN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ct(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ct(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ct(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function s_(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==tt&&(e.i=n.index_.toString()),e}/**
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
 */class ec extends lT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ea("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ec.getListenId_(e,s),a={};this.listens_[o]=a;const c=n_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),pi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,t){const s=ec.getListenId_(e,t);delete this.listens_[s]}get(e){const t=n_(e._queryParams),s=e._path.toString(),r=new wc;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=$o(a.responseText)}catch{Qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SN{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function tc(){return{value:null,children:new Map}}function wT(n,e,t){if(xe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ke(e);n.children.has(s)||n.children.set(s,tc());const r=n.children.get(s);e=Qe(e),wT(r,e,t)}}function Lh(n,e,t){n.value!==null?t(e,n.value):RN(n,(s,r)=>{const i=new ze(e.toString()+"/"+s);Lh(r,i,t)})}function RN(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class PN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Yt(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
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
 */const r_=10*1e3,xN=30*1e3,kN=5*60*1e3;class NN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new PN(e);const s=r_+(xN-r_)*Math.random();Po(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Yt(e,(r,i)=>{i>0&&_s(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),Po(this.reportStats_.bind(this),Math.floor(Math.random()*2*kN))}}/**
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
 */var vn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vn||(vn={}));function TT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class nc{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=vn.ACK_USER_WRITE,this.source=TT()}operationForChild(e){if(xe(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ze(e));return new nc(Ve(),t,this.revert)}}else return Q(ke(this.path)===e,"operationForChild called for unrelated child."),new nc(Qe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Zo{constructor(e,t){this.source=e,this.path=t,this.type=vn.LISTEN_COMPLETE}operationForChild(e){return xe(this.path)?new Zo(this.source,Ve()):new Zo(this.source,Qe(this.path))}}/**
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
 */class Sr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=vn.OVERWRITE}operationForChild(e){return xe(this.path)?new Sr(this.source,Ve(),this.snap.getImmediateChild(e)):new Sr(this.source,Qe(this.path),this.snap)}}/**
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
 */class ea{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=vn.MERGE}operationForChild(e){if(xe(this.path)){const t=this.children.subtree(new ze(e));return t.isEmpty()?null:t.value?new Sr(this.source,Ve(),t.value):new ea(this.source,Ve(),t)}else return Q(ke(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class er{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(xe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ke(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ON(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(bN(o.childName,o.snapshotNode))}),ro(n,r,"child_removed",e,s,t),ro(n,r,"child_added",e,s,t),ro(n,r,"child_moved",i,s,t),ro(n,r,"child_changed",e,s,t),ro(n,r,"value",e,s,t),r}function ro(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>LN(n,a,c)),o.forEach(a=>{const c=MN(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function MN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function LN(n,e,t){if(e.childName==null||t.childName==null)throw ki("Should only compare child_ events.");const s=new Se(e.childName,e.snapshotNode),r=new Se(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
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
 */function zc(n,e){return{eventCache:n,serverCache:e}}function xo(n,e,t,s){return zc(new er(e,t,s),n.serverCache)}function IT(n,e,t,s){return zc(n.eventCache,new er(e,t,s))}function sc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Rr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Hu;const VN=()=>(Hu||(Hu=new Kt(Tk)),Hu);class Xe{static fromObject(e){let t=new Xe(null);return Yt(e,(s,r)=>{t=t.set(new ze(s),r)}),t}constructor(e,t=VN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ve(),value:this.value};if(xe(e))return null;{const s=ke(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Qe(e),t);return i!=null?{path:ht(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(xe(e))return this;{const t=ke(e),s=this.children.get(t);return s!==null?s.subtree(Qe(e)):new Xe(null)}}set(e,t){if(xe(e))return new Xe(t,this.children);{const s=ke(e),i=(this.children.get(s)||new Xe(null)).set(Qe(e),t),o=this.children.insert(s,i);return new Xe(this.value,o)}}remove(e){if(xe(e))return this.children.isEmpty()?new Xe(null):new Xe(null,this.children);{const t=ke(e),s=this.children.get(t);if(s){const r=s.remove(Qe(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Xe(null):new Xe(this.value,i)}else return this}}get(e){if(xe(e))return this.value;{const t=ke(e),s=this.children.get(t);return s?s.get(Qe(e)):null}}setTree(e,t){if(xe(e))return t;{const s=ke(e),i=(this.children.get(s)||new Xe(null)).setTree(Qe(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Xe(this.value,o)}}fold(e){return this.fold_(Ve(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ht(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ve(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(xe(e))return null;{const i=ke(e),o=this.children.get(i);return o?o.findOnPath_(Qe(e),ht(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ve(),t)}foreachOnPath_(e,t,s){if(xe(e))return this;{this.value&&s(t,this.value);const r=ke(e),i=this.children.get(r);return i?i.foreachOnPath_(Qe(e),ht(t,r),s):new Xe(null)}}foreach(e){this.foreach_(Ve(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(ht(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class wn{constructor(e){this.writeTree_=e}static empty(){return new wn(new Xe(null))}}function ko(n,e,t){if(xe(e))return new wn(new Xe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Wt(r,e);return i=i.updateChild(o,t),new wn(n.writeTree_.set(r,i))}else{const r=new Xe(t),i=n.writeTree_.setTree(e,r);return new wn(i)}}}function i_(n,e,t){let s=n;return Yt(t,(r,i)=>{s=ko(s,ht(e,r),i)}),s}function o_(n,e){if(xe(e))return wn.empty();{const t=n.writeTree_.setTree(e,new Xe(null));return new wn(t)}}function Vh(n,e){return Ur(n,e)!=null}function Ur(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Wt(t.path,e)):null}function a_(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(tt,(s,r)=>{e.push(new Se(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Se(s,r.value))}),e}function Us(n,e){if(xe(e))return n;{const t=Ur(n,e);return t!=null?new wn(new Xe(t)):new wn(n.writeTree_.subtree(e))}}function Fh(n){return n.writeTree_.isEmpty()}function Ai(n,e){return bT(Ve(),n.writeTree_,e)}function bT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Q(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=bT(ht(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ht(n,".priority"),s)),t}}/**
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
 */function Kc(n,e){return RT(e,n)}function FN(n,e,t,s,r){Q(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=ko(n.visibleWrites,e,t)),n.lastWriteId=s}function UN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function BN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);Q(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&$N(a,s.path)?r=!1:yn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return jN(n),!0;if(s.snap)n.visibleWrites=o_(n.visibleWrites,s.path);else{const a=s.children;Yt(a,c=>{n.visibleWrites=o_(n.visibleWrites,ht(s.path,c))})}return!0}else return!1}function $N(n,e){if(n.snap)return yn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&yn(ht(n.path,t),e))return!0;return!1}function jN(n){n.visibleWrites=CT(n.allWrites,HN,Ve()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function HN(n){return n.visible}function CT(n,e,t){let s=wn.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)yn(t,o)?(a=Wt(t,o),s=ko(s,a,i.snap)):yn(o,t)&&(a=Wt(o,t),s=ko(s,Ve(),i.snap.getChild(a)));else if(i.children){if(yn(t,o))a=Wt(t,o),s=i_(s,a,i.children);else if(yn(o,t))if(a=Wt(o,t),xe(a))s=i_(s,Ve(),i.children);else{const c=pi(i.children,ke(a));if(c){const u=c.getChild(Qe(a));s=ko(s,Ve(),u)}}}else throw ki("WriteRecord should have .snap or .children")}}return s}function AT(n,e,t,s,r){if(!s&&!r){const i=Ur(n.visibleWrites,e);if(i!=null)return i;{const o=Us(n.visibleWrites,e);if(Fh(o))return t;if(t==null&&!Vh(o,Ve()))return null;{const a=t||pe.EMPTY_NODE;return Ai(o,a)}}}else{const i=Us(n.visibleWrites,e);if(!r&&Fh(i))return t;if(!r&&t==null&&!Vh(i,Ve()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(yn(u.path,e)||yn(e,u.path))},a=CT(n.allWrites,o,e),c=t||pe.EMPTY_NODE;return Ai(a,c)}}}function WN(n,e,t){let s=pe.EMPTY_NODE;const r=Ur(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(tt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Us(n.visibleWrites,e);return t.forEachChild(tt,(o,a)=>{const c=Ai(Us(i,new ze(o)),a);s=s.updateImmediateChild(o,c)}),a_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Us(n.visibleWrites,e);return a_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qN(n,e,t,s,r){Q(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ht(e,t);if(Vh(n.visibleWrites,i))return null;{const o=Us(n.visibleWrites,i);return Fh(o)?r.getChild(t):Ai(o,r.getChild(t))}}function GN(n,e,t,s){const r=ht(e,t),i=Ur(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Us(n.visibleWrites,r);return Ai(o,s.getNode().getImmediateChild(t))}else return null}function zN(n,e){return Ur(n.visibleWrites,e)}function KN(n,e,t,s,r,i,o){let a;const c=Us(n.visibleWrites,e),u=Ur(c,Ve());if(u!=null)a=u;else if(t!=null)a=Ai(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=p.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=p.getNext();return h}else return[]}function QN(){return{visibleWrites:wn.empty(),allWrites:[],lastWriteId:-1}}function rc(n,e,t,s){return AT(n.writeTree,n.treePath,e,t,s)}function _f(n,e){return WN(n.writeTree,n.treePath,e)}function l_(n,e,t,s){return qN(n.writeTree,n.treePath,e,t,s)}function ic(n,e){return zN(n.writeTree,ht(n.treePath,e))}function YN(n,e,t,s,r,i){return KN(n.writeTree,n.treePath,e,t,s,r,i)}function yf(n,e,t){return GN(n.writeTree,n.treePath,e,t)}function ST(n,e){return RT(ht(n.treePath,e),n.writeTree)}function RT(n,e){return{treePath:n,writeTree:e}}/**
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
 */class JN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;Q(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Q(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,Jo(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,Yo(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,Ci(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,Jo(s,e.snapshotNode,r.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class XN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const PT=new XN;class vf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return yf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),i=YN(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function ZN(n){return{filter:n}}function eD(n,e){Q(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function tD(n,e,t,s,r){const i=new JN;let o,a;if(t.type===vn.OVERWRITE){const u=t;u.source.fromUser?o=Uh(n,e,u.path,u.snap,s,r,i):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!xe(u.path),o=oc(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===vn.MERGE){const u=t;u.source.fromUser?o=sD(n,e,u.path,u.children,s,r,i):(Q(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Bh(n,e,u.path,u.children,s,r,a,i))}else if(t.type===vn.ACK_USER_WRITE){const u=t;u.revert?o=oD(n,e,u.path,s,r,i):o=rD(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===vn.LISTEN_COMPLETE)o=iD(n,e,t.path,s,i);else throw ki("Unknown operation type: "+t.type);const c=i.getChanges();return nD(e,o,c),{viewCache:o,changes:c}}function nD(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=sc(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(ET(sc(e)))}}function xT(n,e,t,s,r,i){const o=e.eventCache;if(ic(s,t)!=null)return e;{let a,c;if(xe(t))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Rr(e),h=u instanceof pe?u:pe.EMPTY_NODE,f=_f(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=rc(s,Rr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ke(t);if(u===".priority"){Q(Zs(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=l_(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Qe(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=l_(s,t,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=yf(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return xo(e,a,o.isFullyInitialized()||xe(t),n.filter.filtersNodes())}}function oc(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(xe(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=ke(t);if(!c.isCompleteForPath(t)&&Zs(t)>1)return e;const v=Qe(t),x=c.getNode().getImmediateChild(m).updateChild(v,s);m===".priority"?u=h.updatePriority(c.getNode(),x):u=h.updateChild(c.getNode(),m,x,v,PT,null)}const f=IT(e,u,c.isFullyInitialized()||xe(t),h.filtersNodes()),p=new vf(r,f,i);return xT(n,f,t,r,p,a)}function Uh(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new vf(r,e,i);if(xe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=xo(e,u,!0,n.filter.filtersNodes());else{const f=ke(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=xo(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Qe(t),m=a.getNode().getImmediateChild(f);let v;if(xe(p))v=s;else{const A=h.getCompleteChild(f);A!=null?uT(p)===".priority"&&A.getChild(dT(p)).isEmpty()?v=A:v=A.updateChild(p,s):v=pe.EMPTY_NODE}if(m.equals(v))c=e;else{const A=n.filter.updateChild(a.getNode(),f,v,p,h,o);c=xo(e,A,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function c_(n,e){return n.eventCache.isCompleteForChild(e)}function sD(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=ht(t,c);c_(e,ke(h))&&(a=Uh(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=ht(t,c);c_(e,ke(h))||(a=Uh(n,a,h,u,r,i,o))}),a}function u_(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Bh(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;xe(t)?u=s:u=new Xe(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),v=u_(n,m,p);c=oc(n,c,new ze(f),v,r,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const v=e.serverCache.getNode().getImmediateChild(f),A=u_(n,v,p);c=oc(n,c,new ze(f),A,r,i,o,a)}}),c}function rD(n,e,t,s,r,i,o){if(ic(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(xe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return oc(n,e,t,c.getNode().getChild(t),r,i,a,o);if(xe(t)){let u=new Xe(null);return c.getNode().forEachChild(hi,(h,f)=>{u=u.set(new ze(h),f)}),Bh(n,e,t,u,r,i,a,o)}else return e}else{let u=new Xe(null);return s.foreach((h,f)=>{const p=ht(t,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),Bh(n,e,t,u,r,i,a,o)}}function iD(n,e,t,s,r){const i=e.serverCache,o=IT(e,i.getNode(),i.isFullyInitialized()||xe(t),i.isFiltered());return xT(n,o,t,s,PT,r)}function oD(n,e,t,s,r,i){let o;if(ic(s,t)!=null)return e;{const a=new vf(s,e,r),c=e.eventCache.getNode();let u;if(xe(t)||ke(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=rc(s,Rr(e));else{const f=e.serverCache.getNode();Q(f instanceof pe,"serverChildren would be complete if leaf node"),h=_f(s,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=ke(t);let f=yf(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Qe(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,pe.EMPTY_NODE,Qe(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rc(s,Rr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||ic(s,Ve())!=null,xo(e,u,o,n.filter.filtersNodes())}}/**
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
 */class aD{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new ff(s.getIndex()),i=AN(s);this.processor_=ZN(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(pe.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(pe.EMPTY_NODE,a.getNode(),null),h=new er(c,o.isFullyInitialized(),r.filtersNodes()),f=new er(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=zc(f,h),this.eventGenerator_=new DN(this.query_)}get query(){return this.query_}}function lD(n){return n.viewCache_.serverCache.getNode()}function cD(n){return sc(n.viewCache_)}function uD(n,e){const t=Rr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!xe(e)&&!t.getImmediateChild(ke(e)).isEmpty())?t.getChild(e):null}function h_(n){return n.eventRegistrations_.length===0}function hD(n,e){n.eventRegistrations_.push(e)}function d_(n,e,t){const s=[];if(t){Q(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return s}function f_(n,e,t,s){e.type===vn.MERGE&&e.source.queryId!==null&&(Q(Rr(n.viewCache_),"We should always have a full cache before handling merges"),Q(sc(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=tD(n.processor_,r,e,t,s);return eD(n.processor_,i.viewCache),Q(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,kT(n,i.changes,i.viewCache.eventCache.getNode(),null)}function dD(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(tt,(i,o)=>{s.push(Ci(i,o))}),t.isFullyInitialized()&&s.push(ET(t.getNode())),kT(n,s,t.getNode(),e)}function kT(n,e,t,s){const r=s?[s]:n.eventRegistrations_;return ON(n.eventGenerator_,e,t,r)}/**
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
 */let ac;class NT{constructor(){this.views=new Map}}function fD(n){Q(!ac,"__referenceConstructor has already been defined"),ac=n}function pD(){return Q(ac,"Reference.ts has not been loaded"),ac}function gD(n){return n.views.size===0}function Ef(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return Q(i!=null,"SyncTree gave us an op for an invalid query."),f_(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(f_(o,e,t,s));return i}}function DT(n,e,t,s,r){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=rc(t,r?s:null),c=!1;a?c=!0:s instanceof pe?(a=_f(t,s),c=!1):(a=pe.EMPTY_NODE,c=!1);const u=zc(new er(a,c,!1),new er(s,r,!1));return new aD(e,u)}return o}function mD(n,e,t,s,r,i){const o=DT(n,e,s,r,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),hD(o,t),dD(o,t)}function _D(n,e,t,s){const r=e._queryIdentifier,i=[];let o=[];const a=tr(n);if(r==="default")for(const[c,u]of n.views.entries())o=o.concat(d_(u,t,s)),h_(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=n.views.get(r);c&&(o=o.concat(d_(c,t,s)),h_(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!tr(n)&&i.push(new(pD())(e._repo,e._path)),{removed:i,events:o}}function OT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Bs(n,e){let t=null;for(const s of n.views.values())t=t||uD(s,e);return t}function MT(n,e){if(e._queryParams.loadsAllData())return Qc(n);{const s=e._queryIdentifier;return n.views.get(s)}}function LT(n,e){return MT(n,e)!=null}function tr(n){return Qc(n)!=null}function Qc(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let lc;function yD(n){Q(!lc,"__referenceConstructor has already been defined"),lc=n}function vD(){return Q(lc,"Reference.ts has not been loaded"),lc}let ED=1;class p_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Xe(null),this.pendingWriteTree_=QN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function VT(n,e,t,s,r){return FN(n.pendingWriteTree_,e,t,s,r),r?Ia(n,new Sr(TT(),e,t)):[]}function mr(n,e,t=!1){const s=UN(n.pendingWriteTree_,e);if(BN(n.pendingWriteTree_,e)){let i=new Xe(null);return s.snap!=null?i=i.set(Ve(),!0):Yt(s.children,o=>{i=i.set(new ze(o),!0)}),Ia(n,new nc(s.path,i,t))}else return[]}function Ta(n,e,t){return Ia(n,new Sr(gf(),e,t))}function wD(n,e,t){const s=Xe.fromObject(t);return Ia(n,new ea(gf(),e,s))}function TD(n,e){return Ia(n,new Zo(gf(),e))}function ID(n,e,t){const s=Tf(n,t);if(s){const r=If(s),i=r.path,o=r.queryId,a=Wt(i,e),c=new Zo(mf(o),a);return bf(n,i,c)}else return[]}function FT(n,e,t,s,r=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||LT(o,e))){const c=_D(o,e,t,s);gD(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const u=c.removed;if(a=c.events,!r){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(i,(p,m)=>tr(m));if(h&&!f){const p=n.syncPointTree_.subtree(i);if(!p.isEmpty()){const m=SD(p);for(let v=0;v<m.length;++v){const A=m[v],x=A.query,M=jT(n,A);n.listenProvider_.startListening(No(x),ta(n,x),M.hashFn,M.onComplete)}}}!f&&u.length>0&&!s&&(h?n.listenProvider_.stopListening(No(e),null):u.forEach(p=>{const m=n.queryToTagMap.get(Yc(p));n.listenProvider_.stopListening(No(p),m)}))}RD(n,u)}return a}function UT(n,e,t,s){const r=Tf(n,s);if(r!=null){const i=If(r),o=i.path,a=i.queryId,c=Wt(o,e),u=new Sr(mf(a),c,t);return bf(n,o,u)}else return[]}function bD(n,e,t,s){const r=Tf(n,s);if(r){const i=If(r),o=i.path,a=i.queryId,c=Wt(o,e),u=Xe.fromObject(t),h=new ea(mf(a),c,u);return bf(n,o,h)}else return[]}function CD(n,e,t,s=!1){const r=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(r,(p,m)=>{const v=Wt(p,r);i=i||Bs(m,v),o=o||tr(m)});let a=n.syncPointTree_.get(r);a?(o=o||tr(a),i=i||Bs(a,Ve())):(a=new NT,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=pe.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((m,v)=>{const A=Bs(v,Ve());A&&(i=i.updateImmediateChild(m,A))}));const u=LT(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=Yc(e);Q(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const m=PD();n.queryToTagMap.set(p,m),n.tagToQueryMap.set(m,p)}const h=Kc(n.pendingWriteTree_,r);let f=mD(a,e,t,h,i,c);if(!u&&!o&&!s){const p=MT(a,e);f=f.concat(xD(n,e,p))}return f}function wf(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Wt(o,e),u=Bs(a,c);if(u)return u});return AT(r,e,i,t,!0)}function AD(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(u,h)=>{const f=Wt(u,t);s=s||Bs(h,f)});let r=n.syncPointTree_.get(t);r?s=s||Bs(r,Ve()):(r=new NT,n.syncPointTree_=n.syncPointTree_.set(t,r));const i=s!=null,o=i?new er(s,!0,!1):null,a=Kc(n.pendingWriteTree_,e._path),c=DT(r,e,a,i?o.getNode():pe.EMPTY_NODE,i);return cD(c)}function Ia(n,e){return BT(e,n.syncPointTree_,null,Kc(n.pendingWriteTree_,Ve()))}function BT(n,e,t,s){if(xe(n.path))return $T(n,e,t,s);{const r=e.get(Ve());t==null&&r!=null&&(t=Bs(r,Ve()));let i=[];const o=ke(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=ST(s,o);i=i.concat(BT(a,c,u,h))}return r&&(i=i.concat(Ef(r,n,s,t))),i}}function $T(n,e,t,s){const r=e.get(Ve());t==null&&r!=null&&(t=Bs(r,Ve()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=ST(s,o),h=n.operationForChild(o);h&&(i=i.concat($T(h,a,c,u)))}),r&&(i=i.concat(Ef(r,n,s,t))),i}function jT(n,e){const t=e.query,s=ta(n,t);return{hashFn:()=>(lD(e)||pe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?ID(n,t._path,s):TD(n,t._path);{const i=Ck(r,t);return FT(n,t,null,i)}}}}function ta(n,e){const t=Yc(e);return n.queryToTagMap.get(t)}function Yc(n){return n._path.toString()+"$"+n._queryIdentifier}function Tf(n,e){return n.tagToQueryMap.get(e)}function If(n){const e=n.indexOf("$");return Q(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ze(n.substr(0,e))}}function bf(n,e,t){const s=n.syncPointTree_.get(e);Q(s,"Missing sync point for query tag that we're tracking");const r=Kc(n.pendingWriteTree_,e);return Ef(s,t,r,null)}function SD(n){return n.fold((e,t,s)=>{if(t&&tr(t))return[Qc(t)];{let r=[];return t&&(r=OT(t)),Yt(s,(i,o)=>{r=r.concat(o)}),r}})}function No(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(vD())(n._repo,n._path):n}function RD(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const r=Yc(s),i=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(i)}}}function PD(){return ED++}function xD(n,e,t){const s=e._path,r=ta(n,e),i=jT(n,t),o=n.listenProvider_.startListening(No(e),r,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(s);if(r)Q(!tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,f)=>{if(!xe(u)&&h&&tr(h))return[Qc(h).query];{let p=[];return h&&(p=p.concat(OT(h).map(m=>m.query))),Yt(f,(m,v)=>{p=p.concat(v)}),p}});for(let u=0;u<c.length;++u){const h=c[u];n.listenProvider_.stopListening(No(h),ta(n,h))}}return o}/**
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
 */class Cf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Cf(t)}node(){return this.node_}}class Af{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ht(this.path_,e);return new Af(this.syncTree_,t)}node(){return wf(this.syncTree_,this.path_)}}const kD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},g_=function(n,e,t){if(!n||typeof n!="object")return n;if(Q(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ND(n[".sv"],e,t);if(typeof n[".sv"]=="object")return DD(n[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ND=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Q(!1,"Unexpected server value: "+n)}},DD=function(n,e,t){n.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&Q(!1,"Unexpected increment value: "+s);const r=e.node();if(Q(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},OD=function(n,e,t,s){return Sf(e,new Af(t,n),s)},HT=function(n,e,t){return Sf(n,new Cf(e),t)};function Sf(n,e,t){const s=n.getPriority().val(),r=g_(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=g_(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new pt(a,_t(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new pt(r))),o.forEachChild(tt,(a,c)=>{const u=Sf(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Rf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Pf(n,e){let t=e instanceof ze?e:new ze(e),s=n,r=ke(t);for(;r!==null;){const i=pi(s.node.children,r)||{children:{},childCount:0};s=new Rf(r,s,i),t=Qe(t),r=ke(t)}return s}function Ui(n){return n.node.value}function WT(n,e){n.node.value=e,$h(n)}function qT(n){return n.node.childCount>0}function MD(n){return Ui(n)===void 0&&!qT(n)}function Jc(n,e){Yt(n.node.children,(t,s)=>{e(new Rf(t,n,s))})}function GT(n,e,t,s){t&&e(n),Jc(n,r=>{GT(r,e,!0)})}function LD(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ba(n){return new ze(n.parent===null?n.name:ba(n.parent)+"/"+n.name)}function $h(n){n.parent!==null&&VD(n.parent,n.name,n)}function VD(n,e,t){const s=MD(t),r=_s(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,$h(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,$h(n))}/**
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
 */const FD=/[\[\].#$\/\u0000-\u001F\u007F]/,UD=/[\[\].#$\u0000-\u001F\u007F]/,Wu=10*1024*1024,zT=function(n){return typeof n=="string"&&n.length!==0&&!FD.test(n)},KT=function(n){return typeof n=="string"&&n.length!==0&&!UD.test(n)},BD=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KT(n)},$D=function(n,e,t,s){xf(_d(n,"value"),e,t)},xf=function(n,e,t){const s=t instanceof ze?new rN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+fr(s));if(typeof e=="function")throw new Error(n+"contains a function "+fr(s)+" with contents = "+e.toString());if(Hw(e))throw new Error(n+"contains "+e.toString()+" "+fr(s));if(typeof e=="string"&&e.length>Wu/3&&Tc(e)>Wu)throw new Error(n+"contains a string greater than "+Wu+" utf8 bytes "+fr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Yt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!zT(o)))throw new Error(n+" contains an invalid key ("+o+") "+fr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iN(s,o),xf(n,a,s),oN(s)}),r&&i)throw new Error(n+' contains ".value" child '+fr(s)+" in addition to actual children.")}},QT=function(n,e,t,s){if(!KT(t))throw new Error(_d(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jD=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),QT(n,e,t)},HD=function(n,e){if(ke(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},WD=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!BD(t))throw new Error(_d(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function YT(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!fT(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function $n(n,e,t){YT(n,t),GD(n,s=>yn(s,e)||yn(e,s))}function GD(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(zD(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zD(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ro&&Lt("event: "+t.toString()),Fi(s)}}}/**
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
 */const KD="repo_interrupt",QD=25;class YD{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tc(),this.transactionQueueTree_=new Rf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JD(n,e,t){if(n.stats_=cf(n.repoInfo_),n.forceRestClient_||Pk())n.server_=new ec(n.repoInfo_,(s,r,i,o)=>{m_(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>__(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new as(n.repoInfo_,e,(s,r,i,o)=>{m_(n,s,r,i,o)},s=>{__(n,s)},s=>{ZD(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ok(n.repoInfo_,()=>new NN(n.stats_,n.server_)),n.infoData_=new SN,n.infoSyncTree_=new p_({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=Ta(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nf(n,"connected",!1),n.serverSyncTree_=new p_({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);$n(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function XD(n){const t=n.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function kf(n){return kD({timestamp:XD(n)})}function m_(n,e,t,s,r){n.dataUpdateCount++;const i=new ze(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=kl(t,u=>_t(u));o=bD(n.serverSyncTree_,i,c,r)}else{const c=_t(t);o=UT(n.serverSyncTree_,i,c,r)}else if(s){const c=kl(t,u=>_t(u));o=wD(n.serverSyncTree_,i,c)}else{const c=_t(t);o=Ta(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Zc(n,i)),$n(n.eventQueue_,a,o)}function __(n,e){Nf(n,"connected",e),e===!1&&nO(n)}function ZD(n,e){Yt(e,(t,s)=>{Nf(n,t,s)})}function Nf(n,e,t){const s=new ze("/.info/"+e),r=_t(t);n.infoData_.updateSnapshot(s,r);const i=Ta(n.infoSyncTree_,s,r);$n(n.eventQueue_,s,i)}function JT(n){return n.nextWriteId_++}function eO(n,e,t){const s=AD(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(r=>{const i=_t(r).withIndex(e._queryParams.getIndex());CD(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ta(n.serverSyncTree_,e._path,i);else{const a=ta(n.serverSyncTree_,e);o=UT(n.serverSyncTree_,e._path,i,a)}return $n(n.eventQueue_,e._path,o),FT(n.serverSyncTree_,e,t,null,!0),i},r=>(Xc(n,"get for query "+ct(e)+" failed: "+r),Promise.reject(new Error(r))))}function tO(n,e,t,s,r){Xc(n,"set",{path:e.toString(),value:t,priority:s});const i=kf(n),o=_t(t,s),a=wf(n.serverSyncTree_,e),c=HT(o,a,i),u=JT(n),h=VT(n.serverSyncTree_,e,c,u,!0);YT(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(p,m)=>{const v=p==="ok";v||Qt("set at "+e+" failed: "+p);const A=mr(n.serverSyncTree_,u,!v);$n(n.eventQueue_,e,A),rO(n,r,p,m)});const f=nI(n,e);Zc(n,f),$n(n.eventQueue_,f,[])}function nO(n){Xc(n,"onDisconnectEvents");const e=kf(n),t=tc();Lh(n.onDisconnect_,Ve(),(r,i)=>{const o=OD(r,i,n.serverSyncTree_,e);wT(t,r,o)});let s=[];Lh(t,Ve(),(r,i)=>{s=s.concat(Ta(n.serverSyncTree_,r,i));const o=nI(n,r);Zc(n,o)}),n.onDisconnect_=tc(),$n(n.eventQueue_,Ve(),s)}function sO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(KD)}function Xc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Lt(t,...e)}function rO(n,e,t,s){e&&Fi(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function XT(n,e,t){return wf(n.serverSyncTree_,e,t)||pe.EMPTY_NODE}function Df(n,e=n.transactionQueueTree_){if(e||eu(n,e),Ui(e)){const t=eI(n,e);Q(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&iO(n,ba(e),t)}else qT(e)&&Jc(e,t=>{Df(n,t)})}function iO(n,e,t){const s=t.map(u=>u.currentWriteId),r=XT(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];Q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Wt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{Xc(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<t.length;p++)t[p].status=2,h=h.concat(mr(n.serverSyncTree_,t[p].currentWriteId)),t[p].onComplete&&f.push(()=>t[p].onComplete(null,!0,t[p].currentOutputSnapshotResolved)),t[p].unwatcher();eu(n,Pf(n.transactionQueueTree_,e)),Df(n,n.transactionQueueTree_),$n(n.eventQueue_,e,h);for(let p=0;p<f.length;p++)Fi(f[p])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Qt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Zc(n,e)}},o)}function Zc(n,e){const t=ZT(n,e),s=ba(t),r=eI(n,t);return oO(n,r,s),s}function oO(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Wt(t,c.path);let h=!1,f;if(Q(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(mr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=QD)h=!0,f="maxretry",r=r.concat(mr(n.serverSyncTree_,c.currentWriteId,!0));else{const p=XT(n,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){xf("transaction failed: Data returned ",m,c.path);let v=_t(m);typeof m=="object"&&m!=null&&_s(m,".priority")||(v=v.updatePriority(p.getPriority()));const x=c.currentWriteId,M=kf(n),N=HT(v,p,M);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=N,c.currentWriteId=JT(n),o.splice(o.indexOf(x),1),r=r.concat(VT(n.serverSyncTree_,c.path,N,c.currentWriteId,c.applyLocally)),r=r.concat(mr(n.serverSyncTree_,x,!0))}else h=!0,f="nodata",r=r.concat(mr(n.serverSyncTree_,c.currentWriteId,!0))}$n(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}eu(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Fi(s[a]);Df(n,n.transactionQueueTree_)}function ZT(n,e){let t,s=n.transactionQueueTree_;for(t=ke(e);t!==null&&Ui(s)===void 0;)s=Pf(s,t),e=Qe(e),t=ke(e);return s}function eI(n,e){const t=[];return tI(n,e,t),t.sort((s,r)=>s.order-r.order),t}function tI(n,e,t){const s=Ui(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);Jc(e,r=>{tI(n,r,t)})}function eu(n,e){const t=Ui(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,WT(e,t.length>0?t:void 0)}Jc(e,s=>{eu(n,s)})}function nI(n,e){const t=ba(ZT(n,e)),s=Pf(n.transactionQueueTree_,e);return LD(s,r=>{qu(n,r)}),qu(n,s),GT(s,r=>{qu(n,r)}),t}function qu(n,e){const t=Ui(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Q(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(Q(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(mr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?WT(e,void 0):t.length=i+1,$n(n.eventQueue_,ba(e),r);for(let o=0;o<s.length;o++)Fi(s[o])}}/**
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
 */function aO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function lO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qt(`Invalid query segment '${t}' in query '${n}'`)}return e}const y_=function(n,e){const t=cO(n),s=t.namespace;t.domain==="firebase.com"&&ps(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ps("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ek();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new tT(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new ze(t.pathString)}},cO=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(r=aO(n.substring(h,f)));const p=lO(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),t=e.substring(v+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class uO{constructor(e,t,s,r){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class hO{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class dO{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Of{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return xe(this._path)?null:uT(this._path)}get ref(){return new vs(this._repo,this._path)}get _queryIdentifier(){const e=s_(this._queryParams),t=af(e);return t==="{}"?"default":t}get _queryObject(){return s_(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof Of))return!1;const t=this._repo===e._repo,s=fT(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+sN(this._path)}}class vs extends Of{constructor(e,t){super(e,t,new pf,!1)}get parent(){const e=dT(this._path);return e===null?null:new vs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class na{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ze(e),s=jh(this.ref,e);return new na(this._node.getChild(t),s,tt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new na(r,jh(this.ref,s),tt)))}hasChild(e){const t=new ze(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sI(n,e){return n=st(n),n._checkNotDeleted("ref"),e!==void 0?jh(n._root,e):n._root}function jh(n,e){return n=st(n),ke(n._path)===null?jD("child","path",e):QT("child","path",e),new vs(n._repo,ht(n._path,e))}function fO(n,e){n=st(n),HD("set",n._path),$D("set",e,n._path);const t=new wc;return tO(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function rI(n){n=st(n);const e=new dO(()=>{}),t=new Mf(e);return eO(n._repo,n,t).then(s=>new na(s,new vs(n._repo,n._path),n._queryParams.getIndex()))}class Mf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new uO("value",this,new na(e.snapshotNode,new vs(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hO(this,e,t):null}matches(e){return e instanceof Mf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}fD(vs);yD(vs);/**
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
 */const pO="FIREBASE_DATABASE_EMULATOR_HOST",Hh={};let gO=!1;function mO(n,e,t,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=kr(i);n.repoInfo_=new tT(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function _O(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||ps("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Lt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=y_(i,r),a=o.repoInfo,c;typeof process<"u"&&Um&&(c=Um[pO]),c?(i=`http://${c}?ns=${a.namespace}`,o=y_(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new kk(n.name,n.options,e);WD("Invalid Firebase Database URL",o),xe(o.path)||ps("Database URL must point to the root of a Firebase Database (not including a child path).");const h=vO(a,n,u,new xk(n,t));return new EO(h,n)}function yO(n,e){const t=Hh[e];(!t||t[n.key]!==n)&&ps(`Database ${e}(${n.repoInfo_}) has already been deleted.`),sO(n),delete t[n.key]}function vO(n,e,t,s){let r=Hh[e.name];r||(r={},Hh[e.name]=r);let i=r[n.toURLString()];return i&&ps("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new YD(n,gO,t,s),r[n.toURLString()]=i,i}class EO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vs(this._repo,Ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ps("Cannot call "+e+" on a deleted database.")}}function Lf(n=vd(),e){const t=bc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=nv("database");s&&wO(t,...s)}return t}function wO(n,e,t,s={}){n=st(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Ws(s,i.repoInfo_.emulatorOptions))return;ps("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ps('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new yl(yl.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:iv(s.mockUserToken,n.app.options.projectId);o=new yl(a)}kr(e)&&(pd(e),gd("Database",!0)),mO(i,r,s,o)}/**
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
 */function TO(n){pk(Nr),wr(new qs("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return _O(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Nn(Bm,$m,n),Nn(Bm,$m,"esm2017")}as.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};as.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};TO();const IO={apiKey:"AIzaSyB43BHj0kWeKl6oRhKPXmzk2mownbe3eUM",authDomain:"tapandplay-7b964.firebaseapp.com",databaseURL:"https://tapandplay-7b964-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tapandplay-7b964",storageBucket:"tapandplay-7b964.firebasestorage.app",messagingSenderId:"201759992414",appId:"1:201759992414:web:59953bc311be19a60a22cf",measurementId:"G-W041KDRDGX"},Vf=uv(IO),fn=xc(Vf),Wh=Kx(Vf);Lf(Vf);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function iI(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function bO(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&iI(n.default)}const Fe=Object.assign;function Gu(n,e){const t={};for(const s in e){const r=e[s];t[s]=In(r)?r.map(n):n(r)}return t}const Do=()=>{},In=Array.isArray,oI=/#/g,CO=/&/g,AO=/\//g,SO=/=/g,RO=/\?/g,aI=/\+/g,PO=/%5B/g,xO=/%5D/g,lI=/%5E/g,kO=/%60/g,cI=/%7B/g,NO=/%7C/g,uI=/%7D/g,DO=/%20/g;function Ff(n){return encodeURI(""+n).replace(NO,"|").replace(PO,"[").replace(xO,"]")}function OO(n){return Ff(n).replace(cI,"{").replace(uI,"}").replace(lI,"^")}function qh(n){return Ff(n).replace(aI,"%2B").replace(DO,"+").replace(oI,"%23").replace(CO,"%26").replace(kO,"`").replace(cI,"{").replace(uI,"}").replace(lI,"^")}function MO(n){return qh(n).replace(SO,"%3D")}function LO(n){return Ff(n).replace(oI,"%23").replace(RO,"%3F")}function VO(n){return n==null?"":LO(n).replace(AO,"%2F")}function sa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const FO=/\/$/,UO=n=>n.replace(FO,"");function zu(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=HO(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:sa(o)}}function BO(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function v_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function $O(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Si(e.matched[s],t.matched[r])&&hI(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Si(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function hI(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!jO(n[t],e[t]))return!1;return!0}function jO(n,e){return In(n)?E_(n,e):In(e)?E_(e,n):n===e}function E_(n,e){return In(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function HO(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const As={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ra;(function(n){n.pop="pop",n.push="push"})(ra||(ra={}));var Oo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Oo||(Oo={}));function WO(n){if(!n)if(Jr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),UO(n)}const qO=/^[^#]+#/;function GO(n,e){return n.replace(qO,"#")+e}function zO(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const tu=()=>({left:window.scrollX,top:window.scrollY});function KO(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=zO(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function w_(n,e){return(history.state?history.state.position-e:-1)+n}const Gh=new Map;function QO(n,e){Gh.set(n,e)}function YO(n){const e=Gh.get(n);return Gh.delete(n),e}let JO=()=>location.protocol+"//"+location.host;function dI(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),v_(c,"")}return v_(t,n)+s+r}function XO(n,e,t,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=dI(n,location),v=t.value,A=e.value;let x=0;if(p){if(t.value=m,e.value=p,o&&o===v){o=null;return}x=A?p.position-A.position:0}else s(m);r.forEach(M=>{M(t.value,v,{delta:x,type:ra.pop,direction:x?x>0?Oo.forward:Oo.back:Oo.unknown})})};function c(){o=t.value}function u(p){r.push(p);const m=()=>{const v=r.indexOf(p);v>-1&&r.splice(v,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Fe({},p.state,{scroll:tu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function T_(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?tu():null}}function ZO(n){const{history:e,location:t}=window,s={value:dI(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=n.indexOf("#"),p=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:JO()+n+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),t[h?"replace":"assign"](p)}}function o(c,u){const h=Fe({},e.state,T_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Fe({},r.value,e.state,{forward:c,scroll:tu()});i(h.current,h,!0);const f=Fe({},T_(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function eM(n){n=WO(n);const e=ZO(n),t=XO(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=Fe({location:"",base:n,go:s,createHref:GO.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function tM(n){return typeof n=="string"||n&&typeof n=="object"}function fI(n){return typeof n=="string"||typeof n=="symbol"}const pI=Symbol("");var I_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(I_||(I_={}));function Ri(n,e){return Fe(new Error,{type:n,[pI]:!0},e)}function qn(n,e){return n instanceof Error&&pI in n&&(e==null||!!(n.type&e))}const b_="[^/]+?",nM={sensitive:!1,strict:!1,start:!0,end:!0},sM=/[.+*?^${}()[\]/\\]/g;function rM(n,e){const t=Fe({},nM,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(t.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(sM,"\\$&"),m+=40;else if(p.type===1){const{value:v,repeatable:A,optional:x,regexp:M}=p;i.push({name:v,repeatable:A,optional:x});const N=M||b_;if(N!==b_){m+=10;try{new RegExp(`(${N})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${v}" (${N}): `+G.message)}}let L=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(L=x&&u.length<2?`(?:/${L})`:"/"+L),x&&(L+="?"),r+=L,m+=20,x&&(m+=-8),A&&(m+=-20),N===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",v=i[p-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const p of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:v,repeatable:A,optional:x}=m,M=v in u?u[v]:"";if(In(M)&&!A)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const N=In(M)?M.join("/"):M;if(!N)if(x)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=N}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function iM(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gI(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=iM(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(C_(s))return 1;if(C_(r))return-1}return r.length-s.length}function C_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const oM={type:0,value:""},aM=/[a-zA-Z0-9_]/;function lM(n){if(!n)return[[]];if(n==="/")return[[oM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):p();break;case 4:p(),t=s;break;case 1:c==="("?t=2:aM.test(c)?p():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function cM(n,e,t){const s=rM(lM(n.path),t),r=Fe(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uM(n,e){const t=[],s=new Map;e=P_({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,m){const v=!m,A=S_(f);A.aliasOf=m&&m.record;const x=P_(e,f),M=[A];if("alias"in f){const G=typeof f.alias=="string"?[f.alias]:f.alias;for(const de of G)M.push(S_(Fe({},A,{components:m?m.record.components:A.components,path:de,aliasOf:m?m.record:A})))}let N,L;for(const G of M){const{path:de}=G;if(p&&de[0]!=="/"){const ye=p.record.path,b=ye[ye.length-1]==="/"?"":"/";G.path=p.record.path+(de&&b+de)}if(N=cM(G,p,x),m?m.alias.push(N):(L=L||N,L!==N&&L.alias.push(N),v&&f.name&&!R_(N)&&o(f.name)),mI(N)&&c(N),A.children){const ye=A.children;for(let b=0;b<ye.length;b++)i(ye[b],N,m&&m.children[b])}m=m||N}return L?()=>{o(L)}:Do}function o(f){if(fI(f)){const p=s.get(f);p&&(s.delete(f),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(f);p>-1&&(t.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const p=fM(f,t);t.splice(p,0,f),f.record.name&&!R_(f)&&s.set(f.record.name,f)}function u(f,p){let m,v={},A,x;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw Ri(1,{location:f});x=m.record.name,v=Fe(A_(p.params,m.keys.filter(L=>!L.optional).concat(m.parent?m.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),f.params&&A_(f.params,m.keys.map(L=>L.name))),A=m.stringify(v)}else if(f.path!=null)A=f.path,m=t.find(L=>L.re.test(A)),m&&(v=m.parse(A),x=m.record.name);else{if(m=p.name?s.get(p.name):t.find(L=>L.re.test(p.path)),!m)throw Ri(1,{location:f,currentLocation:p});x=m.record.name,v=Fe({},p.params,f.params),A=m.stringify(v)}const M=[];let N=m;for(;N;)M.unshift(N.record),N=N.parent;return{name:x,path:A,params:v,matched:M,meta:dM(M)}}n.forEach(f=>i(f));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function A_(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function S_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:hM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hM(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function R_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function dM(n){return n.reduce((e,t)=>Fe(e,t.meta),{})}function P_(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function fM(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;gI(n,e[i])<0?s=i:t=i+1}const r=pM(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function pM(n){let e=n;for(;e=e.parent;)if(mI(e)&&gI(n,e)===0)return e}function mI({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function gM(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(aI," "),o=i.indexOf("="),a=sa(o<0?i:i.slice(0,o)),c=o<0?null:sa(i.slice(o+1));if(a in e){let u=e[a];In(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function x_(n){let e="";for(let t in n){const s=n[t];if(t=MO(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(s)?s.map(i=>i&&qh(i)):[s&&qh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function mM(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=In(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const _M=Symbol(""),k_=Symbol(""),nu=Symbol(""),_I=Symbol(""),zh=Symbol("");function io(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function xs(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Ri(4,{from:t,to:e})):p instanceof Error?c(p):tM(p)?c(Ri(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Ku(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(iI(c)){const h=(c.__vccOpts||c)[e];h&&i.push(xs(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=bO(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&xs(m,t,s,o,a,r)()}))}}return i}function N_(n){const e=kn(nu),t=kn(_I),s=yt(()=>{const c=si(n.to);return e.resolve(c)}),r=yt(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const p=f.findIndex(Si.bind(null,h));if(p>-1)return p;const m=D_(c[u-2]);return u>1&&D_(h)===m&&f[f.length-1].path!==m?f.findIndex(Si.bind(null,c[u-2])):p}),i=yt(()=>r.value>-1&&TM(t.params,s.value.params)),o=yt(()=>r.value>-1&&r.value===t.matched.length-1&&hI(t.params,s.value.params));function a(c={}){if(wM(c)){const u=e[si(n.replace)?"replace":"push"](si(n.to)).catch(Do);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:yt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function yM(n){return n.length===1?n[0]:n}const vM=_y({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:N_,setup(n,{slots:e}){const t=pc(N_(n)),{options:s}=kn(nu),r=yt(()=>({[O_(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[O_(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&yM(e.default(t));return n.custom?i:Gy("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),EM=vM;function wM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function TM(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!In(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function D_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const O_=(n,e,t)=>n??e??t,IM=_y({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=kn(zh),r=yt(()=>n.route||s.value),i=kn(k_,0),o=yt(()=>{let u=si(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=yt(()=>r.value.matched[o.value]);sl(k_,yt(()=>o.value+1)),sl(_M,a),sl(zh,r);const c=_e();return rl(()=>[c.value,a.value,n.name],([u,h,f],[p,m,v])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Si(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,f=a.value,p=f&&f.components[h];if(!p)return M_(t.default,{Component:p,route:u});const m=f.props[h],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,x=Gy(p,Fe({},v,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return M_(t.default,{Component:x,route:u})||x}}});function M_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const bM=IM;function CM(n){const e=uM(n.routes,n),t=n.parseQuery||gM,s=n.stringifyQuery||x_,r=n.history,i=io(),o=io(),a=io(),c=I0(As);let u=As;Jr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Gu.bind(null,V=>""+V),f=Gu.bind(null,VO),p=Gu.bind(null,sa);function m(V,te){let ee,se;return fI(V)?(ee=e.getRecordMatcher(V),se=te):se=V,e.addRoute(se,ee)}function v(V){const te=e.getRecordMatcher(V);te&&e.removeRoute(te)}function A(){return e.getRoutes().map(V=>V.record)}function x(V){return!!e.getRecordMatcher(V)}function M(V,te){if(te=Fe({},te||c.value),typeof V=="string"){const P=zu(t,V,te.path),F=e.resolve({path:P.path},te),j=r.createHref(P.fullPath);return Fe(P,F,{params:p(F.params),hash:sa(P.hash),redirectedFrom:void 0,href:j})}let ee;if(V.path!=null)ee=Fe({},V,{path:zu(t,V.path,te.path).path});else{const P=Fe({},V.params);for(const F in P)P[F]==null&&delete P[F];ee=Fe({},V,{params:f(P)}),te.params=f(te.params)}const se=e.resolve(ee,te),Me=V.hash||"";se.params=h(p(se.params));const E=BO(s,Fe({},V,{hash:OO(Me),path:se.path})),I=r.createHref(E);return Fe({fullPath:E,hash:Me,query:s===x_?mM(V.query):V.query||{}},se,{redirectedFrom:void 0,href:I})}function N(V){return typeof V=="string"?zu(t,V,c.value.path):Fe({},V)}function L(V,te){if(u!==V)return Ri(8,{from:te,to:V})}function G(V){return b(V)}function de(V){return G(Fe(N(V),{replace:!0}))}function ye(V){const te=V.matched[V.matched.length-1];if(te&&te.redirect){const{redirect:ee}=te;let se=typeof ee=="function"?ee(V):ee;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=N(se):{path:se},se.params={}),Fe({query:V.query,hash:V.hash,params:se.path!=null?{}:V.params},se)}}function b(V,te){const ee=u=M(V),se=c.value,Me=V.state,E=V.force,I=V.replace===!0,P=ye(ee);if(P)return b(Fe(N(P),{state:typeof P=="object"?Fe({},Me,P.state):Me,force:E,replace:I}),te||ee);const F=ee;F.redirectedFrom=te;let j;return!E&&$O(s,se,ee)&&(j=Ri(16,{to:F,from:se}),Re(se,se,!0,!1)),(j?Promise.resolve(j):C(F,se)).catch(U=>qn(U)?qn(U,2)?U:Ie(U):W(U,F,se)).then(U=>{if(U){if(qn(U,2))return b(Fe({replace:I},N(U.to),{state:typeof U.to=="object"?Fe({},Me,U.to.state):Me,force:E}),te||F)}else U=R(F,se,!0,I,Me);return S(F,se,U),U})}function y(V,te){const ee=L(V,te);return ee?Promise.reject(ee):Promise.resolve()}function w(V){const te=Es.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(V):V()}function C(V,te){let ee;const[se,Me,E]=AM(V,te);ee=Ku(se.reverse(),"beforeRouteLeave",V,te);for(const P of se)P.leaveGuards.forEach(F=>{ee.push(xs(F,V,te))});const I=y.bind(null,V,te);return ee.push(I),qt(ee).then(()=>{ee=[];for(const P of i.list())ee.push(xs(P,V,te));return ee.push(I),qt(ee)}).then(()=>{ee=Ku(Me,"beforeRouteUpdate",V,te);for(const P of Me)P.updateGuards.forEach(F=>{ee.push(xs(F,V,te))});return ee.push(I),qt(ee)}).then(()=>{ee=[];for(const P of E)if(P.beforeEnter)if(In(P.beforeEnter))for(const F of P.beforeEnter)ee.push(xs(F,V,te));else ee.push(xs(P.beforeEnter,V,te));return ee.push(I),qt(ee)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),ee=Ku(E,"beforeRouteEnter",V,te,w),ee.push(I),qt(ee))).then(()=>{ee=[];for(const P of o.list())ee.push(xs(P,V,te));return ee.push(I),qt(ee)}).catch(P=>qn(P,8)?P:Promise.reject(P))}function S(V,te,ee){a.list().forEach(se=>w(()=>se(V,te,ee)))}function R(V,te,ee,se,Me){const E=L(V,te);if(E)return E;const I=te===As,P=Jr?history.state:{};ee&&(se||I?r.replace(V.fullPath,Fe({scroll:I&&P&&P.scroll},Me)):r.push(V.fullPath,Me)),c.value=V,Re(V,te,ee,I),Ie()}let T;function at(){T||(T=r.listen((V,te,ee)=>{if(!bn.listening)return;const se=M(V),Me=ye(se);if(Me){b(Fe(Me,{replace:!0,force:!0}),se).catch(Do);return}u=se;const E=c.value;Jr&&QO(w_(E.fullPath,ee.delta),tu()),C(se,E).catch(I=>qn(I,12)?I:qn(I,2)?(b(Fe(N(I.to),{force:!0}),se).then(P=>{qn(P,20)&&!ee.delta&&ee.type===ra.pop&&r.go(-1,!1)}).catch(Do),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),W(I,se,E))).then(I=>{I=I||R(se,E,!1),I&&(ee.delta&&!qn(I,8)?r.go(-ee.delta,!1):ee.type===ra.pop&&qn(I,20)&&r.go(-1,!1)),S(se,E,I)}).catch(Do)}))}let St=io(),$=io(),H;function W(V,te,ee){Ie(V);const se=$.list();return se.length?se.forEach(Me=>Me(V,te,ee)):console.error(V),Promise.reject(V)}function Te(){return H&&c.value!==As?Promise.resolve():new Promise((V,te)=>{St.add([V,te])})}function Ie(V){return H||(H=!V,at(),St.list().forEach(([te,ee])=>V?ee(V):te()),St.reset()),V}function Re(V,te,ee,se){const{scrollBehavior:Me}=n;if(!Jr||!Me)return Promise.resolve();const E=!ee&&YO(w_(V.fullPath,0))||(se||!ee)&&history.state&&history.state.scroll||null;return od().then(()=>Me(V,te,E)).then(I=>I&&KO(I)).catch(I=>W(I,V,te))}const Ae=V=>r.go(V);let We;const Es=new Set,bn={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:A,resolve:M,options:n,push:G,replace:de,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:Te,install(V){const te=this;V.component("RouterLink",EM),V.component("RouterView",bM),V.config.globalProperties.$router=te,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>si(c)}),Jr&&!We&&c.value===As&&(We=!0,G(r.location).catch(Me=>{}));const ee={};for(const Me in As)Object.defineProperty(ee,Me,{get:()=>c.value[Me],enumerable:!0});V.provide(nu,te),V.provide(_I,ly(ee)),V.provide(zh,c);const se=V.unmount;Es.add(V),V.unmount=function(){Es.delete(V),Es.size<1&&(u=As,T&&T(),T=null,c.value=As,We=!1,H=!1),se()}}};function qt(V){return V.reduce((te,ee)=>te.then(()=>w(ee)),Promise.resolve())}return bn}function AM(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>Si(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>Si(u,c))||r.push(c))}return[t,s,r]}function rr(){return kn(nu)}const SM={class:"fixed top-5 left-8 right-5 z-50 flex justify-between items-center px-5 py-4 text-white sci-fi-font"},RM={key:0,class:"relative"},PM={key:0,class:"absolute right-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg py-2 z-50"},xM={__name:"Header",setup(n){const e=_e(null),t=_e(!1),s=rr();nr(()=>{fa(fn,a=>{e.value=a})});const r=()=>{t.value=!t.value},i=async()=>{await Ad(fn),t.value=!1,s.push("/")},o=()=>{t.value=!1};return(a,c)=>{const u=aa("router-link"),h=z0("click-outside");return ie(),le("header",SM,[He(u,{to:"/",class:"text-3xl font-bold tracking-wide"},{default:ln(()=>c[3]||(c[3]=[lt("Tap&Play")])),_:1,__:[3]}),e.value?Pn((ie(),le("div",RM,[O("button",{onClick:r,class:"text-white hover:text-orange-500 transition unselectable"},c[4]||(c[4]=[O("span",{class:"material-symbols-outlined",style:{"font-size":"40px !important"}},"settings",-1)])),t.value?(ie(),le("div",PM,[He(u,{to:"/profile",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[0]||(c[0]=f=>t.value=!1)},{default:ln(()=>c[5]||(c[5]=[O("span",{class:"material-symbols-outlined"},"person",-1),lt(" Profile ")])),_:1,__:[5]}),He(u,{to:"/badges",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[1]||(c[1]=f=>t.value=!1)},{default:ln(()=>c[6]||(c[6]=[O("span",{class:"material-symbols-outlined"},"star",-1),lt(" Badges ")])),_:1,__:[6]}),He(u,{to:"/records",class:"flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition unselectable",onClick:c[2]||(c[2]=f=>t.value=!1)},{default:ln(()=>c[7]||(c[7]=[O("span",{class:"material-symbols-outlined"},"trophy",-1),lt(" Records ")])),_:1,__:[7]}),O("button",{onClick:i,class:"flex items-center gap-2 w-full text-left px-4 py-2 text-red-500 hover:bg-red-800 hover:text-white transition unselectable"},c[8]||(c[8]=[O("span",{class:"material-symbols-outlined"},"logout",-1),lt(" Log out ")]))])):Tt("",!0)])),[[h,o]]):(ie(),Al(u,{key:1,to:"/login",class:"text-white hover:text-orange-500 transition unselectable"},{default:ln(()=>c[9]||(c[9]=[O("span",{class:"material-symbols-outlined",style:{"font-size":"40px !important"}},"login",-1)])),_:1,__:[9]}))])}}},rn=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},kM={},NM={class:"fixed top-1/2 left-1 transform -translate-y-1/2 flex flex-col items-center gap-5 z-50"},DM={class:"h-28 flex items-center"},OM={class:"h-28 flex items-center"},MM={class:"h-28 flex items-center"},LM={class:"h-28 flex items-center"};function VM(n,e){const t=aa("router-link");return ie(),le("nav",NM,[O("div",DM,[He(t,{to:"/about",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:ln(()=>e[0]||(e[0]=[lt(" ABOUT ")])),_:1,__:[0]})]),O("div",OM,[He(t,{to:"/forum",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:ln(()=>e[1]||(e[1]=[lt(" FORUM ")])),_:1,__:[1]})]),O("div",MM,[He(t,{to:"/games",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:ln(()=>e[2]||(e[2]=[lt(" GAMES ")])),_:1,__:[2]})]),O("div",LM,[He(t,{to:"/",class:"transform rotate-[270deg] text-white hover:text-orange-500 tracking-widest text-xl transition sci-fi-font unselectable"},{default:ln(()=>e[3]||(e[3]=[lt(" HOME ")])),_:1,__:[3]})])])}const FM=rn(kM,[["render",VM],["__scopeId","data-v-bff8a791"]]),UM={},BM={class:"fixed bottom-5 right-5 flex gap-4 z-50"};function $M(n,e){return ie(),le("footer",BM,e[0]||(e[0]=[xi('<a href="https://t.me/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-telegram"></i></a><a href="https://instagram.com/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-instagram"></i></a><a href="https://discord.com/" target="_blank" class="text-white hover:text-orange-500 text-3xl transition sci-fi-font"><i class="fab fa-discord"></i></a>',3)]))}const jM=rn(UM,[["render",$M]]),HM={class:"bg-linear-to-t from-gray-900 to-indigo-950 min-h-screen relative"},WM={__name:"App",setup(n){return(e,t)=>{const s=aa("router-view");return ie(),le("div",HM,[He(xM),He(FM),He(s),He(jM)])}}},Pr="/TapNPlayHost/assets/Scifi1-Dr16ngVb.png",qM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDcAAABzCAMAAAC7FRmMAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGlQTFRFAAAA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kA/2kAiJO5KAAAACN0Uk5TAP8B/urzFQwF+iGAwN5AoGCQsHAwUNBIyJhoOKhY2Ih4KLgfZ+2OAAAKXElEQVR4nO1d2Y5jKxDr2fd939Pz/x95n26fKEglzJTBRexXlO6DwnEKYxc3N4ZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhqOL+w3v/4+HTy8GPd2P33jSffHEMvm0GP9+NPXt8Ofb42d3gy+aDb4+/emoG3x+DHy/Hnj66G3t1/3Lw9fHBd81ffXcMfrocu//qbuzRk8vB5w/uBt9fjj2JHudL5+O8hh7n7NtqHufmQ/RtvbwbexB9W5+bD346/uqLZvBN9G1Fy+7H8cFm2Z09ztfmP54tnvZxfvY9Trh42rcgWjxnb0G4eP42Hzz7tj40g8db8OD55djZsgu/rXbZoVgw8b+UiZ8t0+h9C9nxZ/NXQ3Y83reWHaPHCd+aXrL+1QyGZH18WyFZR8tUgqw735r2ccLF00vW0bc1TNbhT2v7Fvw6/moiWaMIJ36iTDz8WeidOPazcPa+DbNj+759P/5q876dPc635oMhWf/ue5xwmbav/1lNMUzWf5rB+WTdW+L8uBwbLnF6F88ssg7ZsZesvzSDKKKJh29N78RvL8dSJo7V8LfHB8dr+OZ9i9ix961pH2e4xBmv4TvJGqzh/xyDeWQtth89Xzzfm8EFZD1cyqKgTzxcpokTFxNcen+lsBKnk6zBGr6S4CK2H+1dPPKCC4ptJi6mNPX+SmElzpMMmVJCcOlcdtEGUGE/uo/ggmKbiYspTV/7Hgck61Cm7CRrUHDpfN9AwWVUHRfbj5IEl16yThRcUFyd0sQRXBqlKaPE+d18MIOsQcFFTB0X24/2kjUmuCxQx1FwJp6iNHGOBSYJLmLOh3GyFlPHxfajN9+OwUSyXqCOo8iYOEdpqm3tEXM+kI4FKIJLSNZi+9EMwUVCHUdhpYkjuKjZ1HQFF4ysxZwPKWStoI6jsNLEEVzGbWoU54Ow4IKRtZrzoShZt+o4CitNHMFlrfOBQ9YKggvHppZxplSJrP/da26liSO4rHU+nJrBXQSXFJsaxQAA5gI5gss4WaOw0sQRXLScD3KCy6gPU2w/uo/ggmKbia+t4Zv3Tcz5UCkXGJK12H50bS4wUXBBcXVK06kZpChNYs6HSrnAkKzF9qOVcoExO6K4NqVpluBSyKZWSh0Xcz5UygWGZI3CShNHcKlkU1NrxBSRtZjzoVIuMCRrFFaaOIKLmPNhG8FFzfmwQHDhkDUKK00cwUXM+bCN4MJxPuxiABgnaxRFJy6vNDkXyBFcODa1FAMAhaxBwWWYrGFYaaIILs4FcgSXFJsaxwAgnwtktQu8VqWJIriIOR8q5QKH+8Uv2I+WElw02gVuozRRBJfbY0zB+VApFzjeLvDacoGZjZhQVJp4Rg3PORYIrQaloyZiZC22Hy2VCwzZEcU2E+ccCwwLLgtsahk1vLw6LuZ8qJQLzG0XaKWJIrhUsqmp5QIjslZzPhTKBea2C7TSxFGa5ndErhQ1GRdcCtnUSIILh6xRFFWaOMcCiUrT+GEah6wzangOWWM1fCWbmrDg0pA1CrWJ99bwC+5nwG4mLGRTq+TDrGRTWyG4DJM1CjGlKeVngaM0YTW8c4EcwSXDpsa5gko+F8hqF3itShNFcBFzPlTKBY73i7+KK6hIjZhQVJp4pRpey/lQKhc43C5wGwPAgkZMKCpNvFLL722iJmJkLeZ82EZwQbHNxMV8mAtygSlREwV1vLNdoITzoVAuMLddoJUmjuBSyKamlgsMyVrM+VApF5jaLtBKE0dpmt8RuVLUZFxwqWRT4wguHLJGUVVp4hwL5ClN4yWOc4EZ7QJPzeB8m5qw4NKSNQq1iXf+LCy4nwGr4Z0L5DRiEmtfTydrUHAZJmsUakqTWNRkuIZfGzUpnQsMyTrFpka5gko+F8hqF7iN0qQguAhHTU7NYCGyFtuP7iO4oNhm4mI1vJjzQU1wGSZr5wI5gguKq1OaJrX83iZqIkbWdJsaaAAolAuM2RHFtSlNs3yYzgVSjgXUnA+VcoGp7QKtNHEEl0o2NbFcYEjWYs6HSrnA1HaBCw7TOBNPEVwo7QJn3b2VQdYSucCIHSvZ1EiJCw5Zo6Afpm3cLjDyYc6/e6vqsQBWw1e6L3BB4mKYrFGoTbyzhl+gNGE1vHOBnJbf13ZfICi4DJM1CjWlaZcafm3UpHYuMCLrFJsa5woq+Vwgq13gNkqTQg2vGzWpLbjMNwBskwsMS1kU20xcrIYXcz5sI7jQbWqcxIVCLjBmRxTXpjRN8mEK5wJLCy5hiZNB1uDiqZQLDEtZFNemNM3yYRbNBUqo453tAhUMAJVygbntAq00UQSXSja1cXWc04gpImsbADghbhgLLjvnTDxDcOG0C5x091YKWSvkAkN2LGRTIyUuOGSNYsFl59u0C4yyVAvu3ip6LIDV8GsvSpSPmgyTNQq1iXfW8CuUJsrNhO2ZknOBGe0CscXDqaxXCC7DZI1CLGOzTQ3POVPqjIvXzgWGZJ1hU+Pc+S2fC2S1C9xGaVKo4YWvoOLU8JxjgWgDOMsAoJsLBMk6KmVhWGmi1PBizge+4DLpfga+Ta35tm6PD9aurEN2RHF1StMkH6ZuLrB2I6borUkhazBxUSgXuKRd4DZK0yQfZtVcIEbWHMGls12ghAGgUC4wt13gNkqTmA+zkE1tXB3n3PkdkfWWBgBKZQ3qDigW3J/LmbjYscCCu7eKtvw+NYMRO1ayqfUaADiX6SxsF8i57JwzcbH7GRbcvUVv+a1wP8PaixLloybjZI1CbeKdPwunZpCuNGE/C8NnSs4FZrQLBBcPp7JeILgMkzUKtYzNLr09OGdKvXHx0rnAkKwz9qOcK6jkc4GsdoH6SpPuz0JzaCp8BRWnhuccC0QbwFkGAOFcIEbWYSmLopLSxBFcOIemYs4HuuCSmAtc2y6wKXGEc4FYZR2yI4qrU5om+TB1c4G1GzHRc4Hg4imUC1zSLnAbpWmSD7NqLhAja5Lg0tcu0AaATMEFxTZKk5gPM3xrdHOBmDpOElwisq5kAOiVKSflAlPbBS44TCOlBbSOBeiHaWAuUPd+BowdK9nUehdPSNazBBcU8y8730ZpCs9w59+9lbKlUMgFZrQL5FyUqHCmRBJcUKhlbDpr+AVKE1bDOxfIafmdsR9tFw+nsl4guAyTNQq1ie/S24OUC+zcANbOBYbtAnWvoFLomjdO1ijEMjYLBBfOoanuFVRtDV/pWGC+AYC0pVigjkffFoodlSaFLrILnA8cE+/8XODadoHtflQ3FwhW1hE7wrg2pWnSscCCXCDHvSwmuNBzgeDiqZQLXNEucBulaZYPs2guECTr+YKLDQAcwQWFlSaODzN8a4Q7UKkLLqUMAJ2LR+IMF8WCy863UZr62gVKXHauez8Dxo5i7etTFk9I1rMEFxQLLjsPJ975s7BAacKyVAvu3prfamTB/QxLL0pccKY0S3AxDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwjH/CfysZ+itqx/+KAAAAAElFTkSuQmCC",su="/TapNPlayHost/assets/Scifi3-D3gTAX0M.png",GM="/TapNPlayHost/assets/Circle-DSOFxAk4.png",zM="/TapNPlayHost/assets/Soldier1-BrBwvwlr.png",KM={},QM={class:"w-full h-[calc(100vh-64px)] flex items-center justify-center bg-transparent relative overflow-hidden"};function YM(n,e){return ie(),le("section",QM,e[0]||(e[0]=[xi('<img src="'+Pr+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-50 w-80 z-20 unselectable"><img src="'+qM+'" alt="Scifi Decoration 2" draggable="false" class="absolute scale-150 bottom-1 w-96 z-20 unselectable"><img src="'+su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-40 right-40 w-80 z-20 unselectable scale-x-[-1]"><div class="relative flex items-center justify-center z-10"><img src="'+GM+'" alt="Background Circle" draggable="false" class="w-96 md:w-[36rem] lg:w-[48rem] absolute z-0 unselectable"><h2 class="text-8xl md:text-9xl font-bold text-white tracking-wide z-10 sci-fi-font unselectable"> Tap&amp;Play </h2></div><img src="'+zM+'" alt="Soldier" draggable="false" class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-[80vh] z-10 unselectable">',5)]))}const JM=rn(KM,[["render",YM]]),Uf="/TapNPlayHost/assets/Soldier-BbYICOpa.png",Bf=_e(null);fn.onAuthStateChanged(n=>{Bf.value=n});const XM=async(n,e,t="")=>{const s=await Hv(fn,n,e);s&&s.user&&t.trim()&&(await Cd(s.user,{displayName:t.trim()}),Bf.value=s.user)},ZM=async(n,e)=>{await Wv(fn,n,e)},eL=async()=>{await Ad(fn)};function yI(){return{user:Bf,register:XM,login:ZM,logout:eL}}const tL={class:"flex h-screen bg-linear-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},nL={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},sL={class:"relative"},rL=["type"],iL={class:"material-symbols-outlined text-xl"},oL={key:0,class:"text-red-400 text-sm mt-2"},aL={class:"mt-4 text-sm"},lL={__name:"Login",setup(n){const{login:e}=yI(),t=rr(),s=_e(""),r=_e(""),i=_e(""),o=_e(!1),a=()=>{o.value=!o.value},c=async()=>{i.value="";try{await e(s.value,r.value),await t.push("/")}catch(u){i.value="Failed to log in: "+((u==null?void 0:u.message)||"Unknown error")}};return(u,h)=>{const f=aa("router-link");return ie(),le("section",tL,[h[6]||(h[6]=xi('<img src="'+Pr+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-30 w-80 z-5 unselectable" data-v-9cf93125><img src="'+Pr+'" alt="Scifi Decoration 1" draggable="false" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" data-v-9cf93125><img src="'+su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" data-v-9cf93125><div class="hidden md:flex w-2/3 z-10 items-end justify-center" data-v-9cf93125><img src="'+Uf+'" draggable="false" alt="Soldier" class="h-[90vh] object-contain unselectable" data-v-9cf93125></div>',4)),O("div",nL,[h[5]||(h[5]=O("h2",{class:"text-4xl font-bold mb-8"},"Log In",-1)),O("form",{class:"w-full max-w-sm space-y-6",onSubmit:dd(c,["prevent"])},[Pn(O("input",{"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p),type:"email",placeholder:"Email",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Ds,s.value]]),O("div",sL,[Pn(O("input",{type:o.value?"text":"password","onUpdate:modelValue":h[1]||(h[1]=p=>r.value=p),placeholder:"Password",required:"",class:"w-full p-3 pr-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,8,rL),[[Yy,r.value]]),O("button",{type:"button",onClick:a,class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 focus:outline-none"},[O("span",iL,je(o.value?"visibility":"visibility_off"),1)])]),h[2]||(h[2]=O("button",{type:"submit",class:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition unselectable"}," Sign In ",-1)),i.value?(ie(),le("p",oL,je(i.value),1)):Tt("",!0)],32),O("p",aL,[h[4]||(h[4]=lt(" Don't have an account? ")),He(f,{to:"/register",class:"text-orange-500 hover:underline"},{default:ln(()=>h[3]||(h[3]=[lt("Register!")])),_:1,__:[3]})])])])}}},cL=rn(lL,[["__scopeId","data-v-9cf93125"]]),uL={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},hL={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},dL={class:"relative"},fL=["type"],pL={class:"material-symbols-outlined text-xl"},gL={key:0,class:"text-red-400 text-sm mt-2"},mL={class:"mt-4 text-sm"},_L={__name:"Register",setup(n){const{register:e}=yI(),t=rr(),s=_e(""),r=_e(""),i=_e(""),o=_e(""),a=_e(""),c=_e(!1),u=()=>{c.value=!c.value},h=async()=>{if(a.value="",i.value!==o.value){a.value="Passwords do not match.";return}try{await e(r.value,i.value,s.value),await t.push("/")}catch(f){a.value=f.message||"Registration failed."}};return(f,p)=>{const m=aa("router-link");return ie(),le("section",uL,[p[8]||(p[8]=xi('<img src="'+Pr+'" alt="Scifi Decoration 1" draggable="false" class="absolute top-40 left-30 w-80 z-5 unselectable" data-v-d3d86787><img src="'+Pr+'" alt="Scifi Decoration 1" draggable="false" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" data-v-d3d86787><img src="'+su+'" alt="Scifi Decoration 3" draggable="false" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" data-v-d3d86787><div class="hidden md:flex w-2/3 items-end justify-center" data-v-d3d86787><img src="'+Uf+'" alt="Soldier" draggable="false" class="h-[90vh] object-contain z-10 unselectable" data-v-d3d86787></div>',4)),O("div",hL,[p[7]||(p[7]=O("h2",{class:"text-4xl font-bold mb-8"},"Register",-1)),O("form",{class:"w-full max-w-sm space-y-6",onSubmit:dd(h,["prevent"])},[Pn(O("input",{"onUpdate:modelValue":p[0]||(p[0]=v=>s.value=v),type:"text",placeholder:"Username",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Ds,s.value]]),Pn(O("input",{"onUpdate:modelValue":p[1]||(p[1]=v=>r.value=v),type:"email",placeholder:"Email",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Ds,r.value]]),O("div",dL,[Pn(O("input",{type:c.value?"text":"password","onUpdate:modelValue":p[2]||(p[2]=v=>i.value=v),placeholder:"Password",required:"",class:"w-full p-3 pr-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,8,fL),[[Yy,i.value]]),O("button",{type:"button",onClick:u,class:"absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 focus:outline-none"},[O("span",pL,je(c.value?"visibility":"visibility_off"),1)])]),Pn(O("input",{"onUpdate:modelValue":p[3]||(p[3]=v=>o.value=v),type:"password",placeholder:"Confirm Password",required:"",class:"w-full p-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Ds,o.value]]),p[4]||(p[4]=O("button",{type:"submit",class:"w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition unselectable"}," Sign Up ",-1)),a.value?(ie(),le("p",gL,je(a.value),1)):Tt("",!0)],32),O("p",mL,[p[6]||(p[6]=lt(" Already have an account? ")),He(m,{to:"/login",class:"text-orange-500 hover:underline"},{default:ln(()=>p[5]||(p[5]=[lt("Log in")])),_:1,__:[5]})])])])}}},yL=rn(_L,[["__scopeId","data-v-d3d86787"]]),vL={class:"relative group bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition duration-300 aspect-[4/3] flex flex-col justify-between"},EL=["src","alt"],wL={class:"text-lg font-semibold mt-2 mb-1"},TL={class:"flex flex-wrap gap-2 text-sm text-orange-400 mb-10"},IL={__name:"GameCard",props:{game:{type:Object,required:!0}},setup(n){const e=n,t=rr(),s=()=>{t.push(e.game.route)};return(r,i)=>(ie(),le("div",vL,[O("img",{src:n.game.img,alt:n.game.title,class:"w-full h-full object-cover rounded-lg unselectable",draggable:"false"},null,8,EL),O("h3",wL,je(n.game.title),1),O("div",TL,[(ie(!0),le(bt,null,Er(n.game.tags,(o,a)=>(ie(),le("span",{key:a,class:"bg-gray-800 px-2 py-1 rounded"},je(o),1))),128))]),O("button",{class:"absolute bottom-4 right-4 w-13 h-13 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center shadow-md transition z-10",onClick:s},i[0]||(i[0]=[O("span",{class:"material-symbols-outlined text-xl unselectable",style:{"font-size":"40px !important"}},"play_arrow",-1)]))]))}},L_=rn(IL,[["__scopeId","data-v-7bc137ab"]]),bL={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"},CL={class:"flex flex-col md:flex-row justify-between items-center mb-10 gap-4"},AL={key:0,class:"mb-12"},SL={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},RL={key:1},PL={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},xL={key:2,class:"text-center text-gray-400 mt-20 text-lg"},kL={__name:"Games",setup(n){const e=_e(""),t=_e("All"),s=[{title:"Minesweeper",img:"/src/assets/Games/Minesweeper.png",tags:["Logic"],route:"/games/minesweeper",best:!0},{title:"Tetris",img:"/src/assets/Games/Tetris.png",tags:["Reaction","Logic"],route:"/games/tetris",best:!0},{title:"Snake",img:"/src/assets/Games/Snake.png",tags:["Reaction","Fun"],route:"/games/snake"},{title:"Candy Crush",img:"/src/assets/Games/candycr/CandyCrush.png",tags:["Fun"],route:"/games/candycrush",best:!0}],r=yt(()=>s.filter(a=>{const c=a.title.toLowerCase().includes(e.value.toLowerCase()),u=t.value==="All"||a.tags.includes(t.value);return c&&u})),i=yt(()=>r.value.filter(a=>a.best)),o=yt(()=>r.value.filter(a=>!a.best));return(a,c)=>(ie(),le("section",bL,[c[5]||(c[5]=O("h1",{class:"text-4xl font-bold text-center mb-4"},"GAMES",-1)),c[6]||(c[6]=O("div",{class:"h-1 w-33 bg-white mx-auto mb-10 rounded-full"},null,-1)),O("div",CL,[Pn(O("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),type:"text",placeholder:"Search games...",class:"w-full md:w-1/2 p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},null,512),[[Ds,e.value]]),Pn(O("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>t.value=u),class:"w-full md:w-1/4 p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 unselectable"},c[2]||(c[2]=[O("option",{value:"All"},"All Categories",-1),O("option",{value:"Logic"},"Logic",-1),O("option",{value:"Reaction"},"Reaction",-1),O("option",{value:"Fun"},"Fun",-1)]),512),[[Ky,t.value]])]),i.value.length?(ie(),le("div",AL,[c[3]||(c[3]=O("h2",{class:"text-2xl md:text-3xl font-bold mb-6 text-orange-500"},"Best Games",-1)),O("div",SL,[(ie(!0),le(bt,null,Er(i.value,u=>(ie(),Al(L_,{key:u.title,game:u},null,8,["game"]))),128))])])):Tt("",!0),o.value.length?(ie(),le("div",RL,[c[4]||(c[4]=O("h2",{class:"text-2xl md:text-3xl font-bold mb-6 text-orange-500"},"Full Catalog",-1)),O("div",PL,[(ie(!0),le(bt,null,Er(o.value,u=>(ie(),Al(L_,{key:u.title,game:u},null,8,["game"]))),128))])])):Tt("",!0),r.value.length===0?(ie(),le("div",xL," No games found. ")):Tt("",!0)]))}},NL=rn(kL,[["__scopeId","data-v-3dcb929c"]]),DL={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi"},OL={class:"flex flex-col justify-center items-start px-10 md:px-20 w-full md:w-1/2"},ML={class:"text-xl mb-6"},LL={class:"ml-2"},VL={class:"flex gap-4 mb-6"},FL=["src"],UL={key:1,class:"material-symbols-outlined text-gray-400"},BL={key:0,class:"fixed inset-0 bg-black opacity-90 flex z-50"},$L={key:1,class:"fixed inset-0 flex items-center justify-center z-50"},jL={class:"bg-gray-900 rounded-xl p-6 w-96"},HL={class:"flex justify-end gap-2"},WL={__name:"Profile",setup(n){const e=_e("Loading..."),t=_e(""),s=_e(!1),r=_e([null,null,null]);nr(()=>{fa(fn,c=>{c&&(e.value=c.displayName||"Unnamed Soldier")})});const i=yt(()=>[...r.value,...Array(3-r.value.length).fill(null)].slice(0,3)),o=()=>{t.value=e.value,s.value=!0},a=async()=>{const c=fn.currentUser;c&&t.value.trim()!==""&&(await Cd(c,{displayName:t.value.trim()}),e.value=t.value.trim(),s.value=!1)};return(c,u)=>(ie(),le("section",DL,[u[6]||(u[6]=xi('<img src="'+Pr+'" alt="" class="absolute top-40 left-30 w-80 z-5 unselectable" draggable="false" data-v-46549c7a><img src="'+Pr+'" alt="" class="absolute bottom-30 left-110 w-80 z-5 unselectable scale-x-[1]" draggable="false" data-v-46549c7a><img src="'+su+'" alt="" class="absolute bottom-10 left-120 w-80 z-5 unselectable scale-x-[-1]" draggable="false" data-v-46549c7a><div class="hidden md:flex w-2/3 items-end justify-center" data-v-46549c7a><img src="'+Uf+'" alt="Soldier" draggable="false" class="h-[90vh] object-contain z-10 unselectable" data-v-46549c7a></div>',4)),O("div",OL,[u[4]||(u[4]=O("h2",{class:"text-4xl font-bold mb-6"},"My Profile",-1)),O("div",ML,[u[2]||(u[2]=O("span",{class:"font-semibold"},"Username:",-1)),O("span",LL,je(e.value),1)]),O("div",null,[u[3]||(u[3]=O("h3",{class:"text-lg font-semibold mb-2"},"Badges",-1)),O("div",VL,[(ie(!0),le(bt,null,Er(i.value,(h,f)=>(ie(),le("div",{key:f,class:"w-16 h-16 flex items-center justify-center bg-gray-800 rounded-lg text-3xl"},[h?(ie(),le("img",{key:0,src:h,alt:"Badge",class:"w-12 h-12 object-contain"},null,8,FL)):(ie(),le("span",UL,"add"))]))),128))])]),O("button",{onClick:o,class:"bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition unselectable"}," Edit Profile ")]),s.value?(ie(),le("div",BL)):Tt("",!0),s.value?(ie(),le("div",$L,[O("div",jL,[u[5]||(u[5]=O("h3",{class:"text-xl font-bold mb-4"},"Edit Username",-1)),Pn(O("input",{"onUpdate:modelValue":u[0]||(u[0]=h=>t.value=h),type:"text",class:"w-full px-4 py-2 rounded bg-gray-800 text-white mb-4 unselectable",placeholder:"Enter new username"},null,512),[[Ds,t.value]]),O("div",HL,[O("button",{onClick:u[1]||(u[1]=h=>s.value=!1),class:"px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded unselectable"},"Cancel"),O("button",{onClick:a,class:"px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded unselectable"},"Save")])])])):Tt("",!0)]))}},qL=rn(WL,[["__scopeId","data-v-46549c7a"]]),GL="/TapNPlayHost/assets/vue-DrX0Z5OQ.png",zL="/TapNPlayHost/assets/tailwindcss-pp2QO6R3.png",KL="/TapNPlayHost/assets/javascript-DZlgK55J.png",QL="/TapNPlayHost/assets/firebase-CJHM9ODV.png",YL={},JL={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"};function XL(n,e){return ie(),le("section",JL,e[0]||(e[0]=[xi('<h1 class="text-4xl font-bold text-center mb-4" data-v-74f62140>ABOUT US</h1><div class="h-1 w-48 bg-white mx-auto mb-10 rounded-full" data-v-74f62140></div><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-6" data-v-74f62140>Developers:</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16" data-v-74f62140><div class="flex flex-col items-center text-center" data-v-74f62140><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-74f62140><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-74f62140>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-74f62140>Oleksii Malanii</p><p class="text-white text-sm" data-v-74f62140>Leader</p><p class="text-white text-sm" data-v-74f62140>Front-end Developer</p></div><div class="flex flex-col items-center text-center" data-v-74f62140><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-74f62140><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-74f62140>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-74f62140>Denys Novosad</p><p class="text-white text-sm" data-v-74f62140>Designer</p><p class="text-white text-sm" data-v-74f62140>Front-end Developer</p></div><div class="flex flex-col items-center text-center" data-v-74f62140><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-74f62140><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-74f62140>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-74f62140>Andrii Kohut</p><p class="text-white text-sm" data-v-74f62140>Place Holder</p><p class="text-white text-sm" data-v-74f62140>Place Holder</p></div><div class="flex flex-col items-center text-center" data-v-74f62140><div class="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center mb-4" data-v-74f62140><span class="material-symbols-outlined text-orange-500 text-4xl unselectable" style="font-size:70px !important;" data-v-74f62140>person</span></div><p class="text-orange-500 font-bold text-lg" data-v-74f62140>Labunskiy Yaroslav</p><p class="text-white text-sm" data-v-74f62140>Place Holder</p><p class="text-white text-sm" data-v-74f62140>Place Holder</p></div></div><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-4" data-v-74f62140>Project Information:</h2><p class="text-white text-2xl mb-16 max-w-8xl" data-v-74f62140> Tap&amp;Play is a collection of minigames designed for web, where users can enjoy simple, fast, and visually styled experiences. Built with modern web technologies, this platform aims to be engaging and easily extensible. </p><h2 class="text-2xl md:text-3xl font-bold text-orange-500 mb-6" data-v-74f62140>Tools:</h2><div class="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-15" data-v-74f62140><div class="flex flex-col items-center" data-v-74f62140><img src="'+GL+'" alt="Vue Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-74f62140><p class="text-white text-3xl unselectable" data-v-74f62140>Vue</p></div><div class="flex flex-col items-center" data-v-74f62140><img src="'+zL+'" alt="Tailwind Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-74f62140><p class="text-white text-3xl unselectable" data-v-74f62140>TailwindCSS</p></div><div class="flex flex-col items-center" data-v-74f62140><img src="'+KL+'" alt="JavaScript Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-74f62140><p class="text-white text-3xl unselectable" data-v-74f62140>JavaScript</p></div><div class="flex flex-col items-center" data-v-74f62140><img src="'+QL+'" alt="Firebase Logo" class="h-25 mb-2 unselectable" draggable="false" data-v-74f62140><p class="text-white text-3xl unselectable" data-v-74f62140>Firebase</p></div></div>',8)]))}const ZL=rn(YL,[["render",XL],["__scopeId","data-v-74f62140"]]),eV={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white min-h-screen font-sci-fi"},tV={key:0,class:"text-gray-300 text-2xl"},nV={key:1},sV={class:"text-2xl mb-4 capitalize"},rV={class:"flex gap-4 flex-wrap"},iV=["src"],oV={class:"text-l text-center"},aV={__name:"Badges",setup(n){const e=_e({}),t=_e(!0),s=async r=>{var a;const i=await Fm(Om(Wh,"users",r,"badges")),o={};for(const c of i.docs){const u=c.id,h=c.data();if((a=h.badgeIds)!=null&&a.length){const f=await Fm(Om(Wh,"badges",u,"badgeList")),p={};for(const m of f.docs)p[m.id]=m.data();o[u]=h.badgeIds.map(m=>{var v,A;return{id:m,name:((v=p[m])==null?void 0:v.name)||"Unknown",iconUrl:((A=p[m])==null?void 0:A.iconUrl)||"src/assets/Games/placeholder.png"}})}}e.value=o,t.value=!1};return nr(()=>{fa(fn,r=>{r?s(r.uid):t.value=!1})}),(r,i)=>(ie(),le("section",eV,[i[0]||(i[0]=O("h1",{class:"text-4xl font-bold text-center mb-4"},"BADGES",-1)),i[1]||(i[1]=O("div",{class:"h-1 w-37 bg-white mx-auto mb-10 rounded-full"},null,-1)),t.value?(ie(),le("div",tV,"Loading...")):(ie(),le("div",nV,[(ie(!0),le(bt,null,Er(e.value,(o,a)=>(ie(),le("div",{key:a,class:"mb-8"},[O("h2",sV,je(a),1),O("div",rV,[(ie(!0),le(bt,null,Er(o,c=>(ie(),le("div",{key:c.id,class:"w-25 h-35 bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2"},[O("img",{src:c.iconUrl,alt:"badge",class:"w-15 h-15 object-contain mb-1 unselectable",draggable:"false"},null,8,iV),O("p",oV,je(c.name),1)]))),128))])]))),128))]))]))}},lV=rn(aV,[["__scopeId","data-v-922a06b6"]]),cV={class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 text-white font-sci-fi"},uV={key:0,class:"text-gray-300 text-2xl"},hV={key:1,class:"space-y-8"},dV={key:0},fV={class:"list-disc list-inside space-y-1"},pV={key:0},gV={key:1},mV={key:2},_V={key:1},yV={key:2},vV={key:3},EV={__name:"Records",setup(n){const e=_e({}),t=_e(!0);return nr(async()=>{const r=xc().currentUser;if(!r)return;const i=Lf(),o=sI(i,`records/${r.uid}`),a=await rI(o);a.exists()&&(e.value=a.val()),t.value=!1}),(s,r)=>(ie(),le("section",cV,[r[4]||(r[4]=O("h1",{class:"text-4xl font-bold text-center mb-4"},"RECORDS",-1)),r[5]||(r[5]=O("div",{class:"h-1 w-43 bg-white mx-auto mb-10 rounded-full"},null,-1)),t.value?(ie(),le("div",uV,"Loading...")):(ie(),le("div",hV,[e.value.minesweeper?(ie(),le("div",dV,[r[0]||(r[0]=O("h2",{class:"text-2xl text-orange-500 mb-2"},"Minesweeper",-1)),O("ul",fV,[e.value.minesweeper.easy?(ie(),le("li",pV,"Easy: "+je(e.value.minesweeper.easy)+"s",1)):Tt("",!0),e.value.minesweeper.medium?(ie(),le("li",gV,"Medium: "+je(e.value.minesweeper.medium)+"s",1)):Tt("",!0),e.value.minesweeper.hard?(ie(),le("li",mV,"Hard: "+je(e.value.minesweeper.hard)+"s",1)):Tt("",!0)])])):Tt("",!0),e.value.candycrush?(ie(),le("div",_V,[r[1]||(r[1]=O("h2",{class:"text-2xl text-orange-500 mb-2"},"Candy Crush",-1)),O("p",null,"Best Score: "+je(e.value.candycrush),1)])):Tt("",!0),e.value.tetris?(ie(),le("div",yV,[r[2]||(r[2]=O("h2",{class:"text-2xl text-orange-500 mb-2"},"Tetris",-1)),O("p",null,"Best Score: "+je(e.value.tetris),1)])):Tt("",!0),e.value.snake?(ie(),le("div",vV,[r[3]||(r[3]=O("h2",{class:"text-2xl text-orange-500 mb-2"},"Snake",-1)),O("p",null,"Best Score: "+je(e.value.snake),1)])):Tt("",!0)]))]))}},wV={};function TV(n,e){return ie(),le(bt,null,[e[0]||(e[0]=O("section",{class:"pt-28 pb-20 pl-20 pr-6 md:pl-32 md:pr-12 font-sci-fi"},[O("p",{class:"text-orange-500 text-5xl font-bold"},"Get the hell out of here")],-1)),e[1]||(e[1]=lt("> "))],64)}const IV=rn(wV,[["render",TV],["__scopeId","data-v-3a10d9e4"]]);async function V_(n,e,t){if(!n||!t)return;const s=zx(Wh,"users",n,"badges",e),r=await uk(s);let i=[];r.exists()&&(i=r.data().badgeIds||[],i.includes(t))||(i.push(t),await hk(s,{badgeIds:i},{merge:!0}),console.log(`Badge '${t}' awarded to user ${n}`))}const bV="modulepreload",CV=function(n){return"/TapNPlayHost/"+n},F_={},AV=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(u=>{if(u=CV(u),u in F_)return;F_[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":bV,h||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};async function vI(n,e,t=null,s=!0){const{getAuth:r}=await AV(async()=>{const{getAuth:m}=await Promise.resolve().then(()=>QR);return{getAuth:m}},void 0),o=r().currentUser;if(!o)return;const a=Lf(),c=t?`records/${o.uid}/${n}/${t}`:`records/${o.uid}/${n}`,u=sI(a,c),f=(await rI(u)).val();(!f||(s?e>f:e<f))&&await fO(u,e)}const SV={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white sci-fi-font overflow-hidden"},RV={class:"flex flex-col justify-center items-center flex-grow p-4"},PV={class:"text-lg mb-1"},xV={class:"text-lg mb-4"},kV=["onClick","onContextmenu"],NV={key:0},DV={key:1},OV={class:"text-red-500 font-bold mt-4"},MV={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},LV={class:"flex gap-2"},VV={class:"flex gap-4"},Za=40,U_=3,FV={__name:"Minesweeper",setup(n){const e=rr(),t=_e(0),s=_e(null),r={easy:{rows:9,cols:9,mines:9},mid:{rows:9,cols:18,mines:20},hard:{rows:11,cols:19,mines:40}},i=_e(r.mid),o=_e([]),a=_e(!0),c=_e(!0),u=_e(!1),h=_e(""),f=_e("New Game"),p=yt(()=>{const $=Math.floor(t.value/60),H=t.value%60;return`${String($).padStart(2,"0")}:${String(H).padStart(2,"0")}`});class m{constructor(H,W){this.x=H,this.y=W,this.isClicked=!1,this.isFlagged=!1,this.isMine=!1,this.isExplodedMine=!1,this.numNeighborMines=0}}function v(){const $=[];for(let H=0;H<i.value.rows;H++){$[H]=[];for(let W=0;W<i.value.cols;W++)$[H][W]=new m(H,W)}o.value=$}function A($,H){const W=new Set;for(let Ie=-1;Ie<=1;Ie++)for(let Re=-1;Re<=1;Re++){const Ae=$+Ie,We=H+Re;Ae>=0&&Ae<i.value.rows&&We>=0&&We<i.value.cols&&W.add(`${Ae},${We}`)}let Te=0;for(;Te<i.value.mines;){let Ie=Math.floor(Math.random()*i.value.rows),Re=Math.floor(Math.random()*i.value.cols);!o.value[Ie][Re].isMine&&!W.has(`${Ie},${Re}`)&&(o.value[Ie][Re].isMine=!0,Te++)}}function x(){for(let $=0;$<i.value.rows;$++)for(let H=0;H<i.value.cols;H++)if(!o.value[$][H].isMine){let W=0;for(let Te=-1;Te<=1;Te++)for(let Ie=-1;Ie<=1;Ie++){const Re=$+Te,Ae=H+Ie;Re>=0&&Re<i.value.rows&&Ae>=0&&Ae<i.value.cols&&o.value[Re][Ae].isMine&&W++}o.value[$][H].numNeighborMines=W}}function M(){switch(i.value.mines){case 9:return"easy";case 20:return"medium";case 40:return"hard";default:return"custom"}}function N($,H){if(!(!a.value||o.value[$][H].isFlagged)){if(f.value="Restart",c.value){v();do A($,H);while(o.value[$][H].isMine&&!u.value);x(),C(),c.value=!1}if(G($,H),o.value[$][H].isMine)o.value[$][H].isExplodedMine=!0,ye(),h.value="You've lost!",S(),a.value=!1;else if(b()){h.value="Congrats! You've won!",S(),a.value=!1;const Te=xc().currentUser;Te&&(L(Te.uid,M(),t.value),vI("minesweeper",t.value,M(),!1))}}}async function L($,H,W){try{H==="medium"&&W<40&&await V_($,"minesweeper","fasthead"),H==="hard"&&await V_($,"minesweeper","survivor")}catch(Te){console.error("Badge check failed:",Te)}}function G($,H){const W=o.value[$][H];if(!(W.isClicked||W.isFlagged)&&(W.isClicked=!0,W.isFlagged=!1,W.numNeighborMines===0&&!W.isMine))for(let Te=-1;Te<=1;Te++)for(let Ie=-1;Ie<=1;Ie++){const Re=$+Te,Ae=H+Ie;Re>=0&&Re<i.value.rows&&Ae>=0&&Ae<i.value.cols&&G(Re,Ae)}}function de($,H){if(!a.value)return;const W=o.value[$][H];W.isClicked||(W.isFlagged=!W.isFlagged)}function ye(){o.value.flat().forEach($=>{$.isMine&&($.isClicked=!0)})}function b(){return o.value.flat().every($=>$.isMine||$.isClicked)}function y(){S(),h.value="",a.value=!0,c.value=!0,v()}function w($){i.value=r[$],y()}function C(){t.value=0,s.value=setInterval(()=>t.value++,1e3)}function S(){clearInterval(s.value),s.value=null,f.value="New Game"}function R(){e.push("/games")}const T=yt(()=>o.value.flat());function at($){return $.isExplodedMine?"bg-red-600":$.isMine&&$.isClicked?"bg-black":$.isClicked?"bg-yellow-300":$.isFlagged?"bg-red-500":"bg-green-500"}const St=yt(()=>o.value.flat().filter($=>$.isFlagged).length);return v(),($,H)=>(ie(),le("section",SV,[O("div",RV,[O("p",PV,"Timer: "+je(p.value),1),O("p",xV,"Flags: "+je(St.value)+"/"+je(i.value.mines),1),O("div",{class:"rounded-2xl p-2",style:Mo({width:`${i.value.cols*Za+(i.value.cols-1)+U_*i.value.cols}px`,height:`${i.value.rows*Za+(i.value.rows-1)+U_*i.value.rows}px`})},[O("div",{id:"board",class:"grid gap-[3px]",style:Mo({gridTemplateColumns:`repeat(${i.value.cols}, ${Za}px)`,gridTemplateRows:`repeat(${i.value.rows}, ${Za}px)`})},[(ie(!0),le(bt,null,Er(T.value,(W,Te)=>(ie(),le("div",{key:Te,class:yr(["tile",W.isClicked?"revealed":"",W.isFlagged?"flagged":"",at(W)]),onClick:Ie=>N(W.x,W.y),onContextmenu:dd(Ie=>de(W.x,W.y),["prevent"])},[W.isClicked&&!W.isMine&&W.numNeighborMines>0?(ie(),le("span",NV,je(W.numNeighborMines),1)):Tt("",!0),W.isClicked&&W.isMine?(ie(),le("span",DV,je(W.isExplodedMine?"💥":"💣"),1)):Tt("",!0)],42,kV))),128))],4)],4),O("p",OV,je(h.value),1)]),O("div",MV,[H[3]||(H[3]=O("h2",{class:"text-3xl font-bold"},"Minesweeper",-1)),H[4]||(H[4]=O("p",{class:"text-sm"},[lt("By: "),O("span",{class:"text-orange-400"},"Denys Novosad")],-1)),O("div",LV,[O("button",{onClick:H[0]||(H[0]=W=>w("easy")),class:"px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"}," Easy "),O("button",{onClick:H[1]||(H[1]=W=>w("mid")),class:"px-4 py-2 rounded-full bg-yellow-600 hover:bg-yellow-700 transition"}," Medium "),O("button",{onClick:H[2]||(H[2]=W=>w("hard")),class:"px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"}," Hard ")]),O("div",VV,[O("button",{onClick:y,class:"flex-1 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition"},je(f.value),1),O("button",{onClick:R,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition"}," Close ")])])]))}},UV=rn(FV,[["__scopeId","data-v-ace85cf8"]]),BV={class:"flex h-screen bg-gradient-to-t from-gray-900 to-indigo-950 text-white font-sci-fi overflow-hidden"},$V={class:"flex flex-col justify-center items-center flex-grow p-4"},jV={class:"text-lg mb-1"},oo=9,ao=9,HV={__name:"CandyCrush",setup(n){const e=rr(),t=_e(0),s=["Blue","Orange","Green","Yellow","Red","Purple"];let r=[],i=null,o=null;function a(){return s[Math.floor(Math.random()*s.length)]}function c(){const v=document.getElementById("board");v.innerHTML="",r=[],t.value=0;for(let A=0;A<oo;A++){const x=[];for(let M=0;M<ao;M++){const N=document.createElement("img");N.id=`${A}-${M}`,N.draggable=!0,N.classList.add("tile");let L;do L=a();while(M>1&&x[M-1].src.endsWith(`${L}.png`)&&x[M-2].src.endsWith(`${L}.png`)||A>1&&r[A-1][M].src.endsWith(`${L}.png`)&&r[A-2][M].src.endsWith(`${L}.png`));N.src=`/src/assets/Games/candycr/${L}.png`,N.addEventListener("dragstart",()=>i=N),N.addEventListener("dragover",G=>G.preventDefault()),N.addEventListener("drop",()=>o=N),N.addEventListener("dragend",u),v.append(N),x.push(N)}r.push(x)}}function u(){if(!i||!o)return;const[v,A]=i.id.split("-").map(Number),[x,M]=o.id.split("-").map(Number);if(Math.abs(v-x)+Math.abs(A-M)!==1)return;const N=(M-A)*41,L=(x-v)*41;i.style.transition="transform 0.3s ease",o.style.transition="transform 0.3s ease",i.style.transform=`translate(${N}px, ${L}px)`,o.style.transform=`translate(${-N}px, ${-L}px)`;const G=()=>{i.style.transition="",o.style.transition="",i.style.transform="",o.style.transform="";const de=i.src;i.src=o.src,o.src=de,i.removeEventListener("transitionend",G),i=o=null};i.addEventListener("transitionend",G)}function h(){for(let v=0;v<oo;v++)for(let A=0;A<ao-2;A++){const[x,M,N]=[r[v][A],r[v][A+1],r[v][A+2]];x.src===M.src&&M.src===N.src&&!x.src.includes("blank")&&([x,M,N].forEach(L=>{L.classList.add("vanish"),setTimeout(()=>{L.src="/src/assets/Games/candycr/blank.png",L.classList.remove("vanish")},300)}),t.value+=30)}for(let v=0;v<ao;v++)for(let A=0;A<oo-2;A++){const[x,M,N]=[r[A][v],r[A+1][v],r[A+2][v]];x.src===M.src&&M.src===N.src&&!x.src.includes("blank")&&([x,M,N].forEach(L=>{L.classList.add("vanish"),setTimeout(()=>{L.src="/src/assets/Games/candycr/blank.png",L.classList.remove("vanish")},300)}),t.value+=30)}}function f(){for(let v=0;v<ao;v++){let A=oo-1;for(let x=oo-1;x>=0;x--)r[x][v].src.includes("blank")||(r[A][v].src=r[x][v].src,A--);for(let x=A;x>=0;x--)r[x][v].src="/src/assets/Games/candycr/blank.png"}}function p(){for(let v=0;v<ao;v++)r[0][v].src.includes("blank")&&(r[0][v].src=`/src/assets/Games/candycr/${a()}.png`)}function m(){vI("candycrush",t.value,null,!0),e.push("/games")}return nr(()=>{c(),setInterval(()=>{h(),f(),p()},100)}),(v,A)=>(ie(),le("section",BV,[O("div",$V,[O("p",jV,"Score: "+je(t.value),1),A[0]||(A[0]=O("div",{class:"rounded-2xl bg-gray-800 p-2",style:{width:"380px",height:"450px"}},[O("div",{id:"board",class:"grid grid-cols-9 gap-[2px]",style:{width:"360px",height:"360px",margin:"0 auto"}})],-1))]),O("div",{class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},[A[1]||(A[1]=O("h2",{class:"text-3xl font-bold"},"Candy Crush",-1)),A[2]||(A[2]=O("p",{class:"text-sm"},[lt("By: "),O("span",{class:"text-orange-400"},"Oleksii Malanii")],-1)),O("div",{class:"flex gap-4"},[O("button",{onClick:m,class:"flex-1 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 transition"}," Save and Exit ")])])]))}},WV=rn(HV,[["__scopeId","data-v-dbd379cf"]]),qV={class:"flex h-screen text-white sci-fi-font overflow-hidden bg-gradient-to-t from-gray-900 to-indigo-950"},GV={class:"flex flex-col justify-center items-center flex-grow p-4"},zV={class:"text-lg mb-1"},KV={class:"rounded-2xl bg-gray-800 p-2",style:{width:"310px",height:"495px"}},QV={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},YV={class:"flex gap-4"},el=12,JV=20,tl=24,XV={__name:"Tetris",setup(n){const e=rr(),t=_e(null),s=_e(null),r=_e(0),i=_e(!1);let o=[],a=null,c=0,u=0,h=null;const f=[null,"cyan","yellow","purple","green","red","blue","orange"],p={I:[[1,1,1,1]],O:[[2,2],[2,2]],T:[[0,3,0],[3,3,3]],S:[[0,4,4],[4,4,0]],Z:[[5,5,0],[0,5,5]],J:[[6,0,0],[6,6,6]],L:[[0,0,7],[7,7,7]]};nr(()=>{s.value=t.value.getContext("2d"),document.addEventListener("keydown",at)});function m($,H){const W=[];for(;H--;)W.push(new Array($).fill(0));return W}function v(){const $="IOTSZJL",H=$[Math.floor(Math.random()*$.length)],W=p[H];return{pos:{x:Math.floor(el/2)-Math.ceil(W[0].length/2),y:-W.length+1},matrix:W,type:H}}function A($,H){$.forEach((W,Te)=>{W.forEach((Ie,Re)=>{const Ae=Te+H.y;Ie!==0&&Ae>=0&&(s.value.fillStyle=f[Ie],s.value.fillRect((Re+H.x)*tl,Ae*tl,tl,tl))})})}function x(){s.value.fillStyle="#1c1a49",s.value.fillRect(0,0,t.value.width,t.value.height),A(o,{x:0,y:0}),a&&A(a.matrix,a.pos)}function M($,H){H.matrix.forEach((W,Te)=>{W.forEach((Ie,Re)=>{Ie!==0&&Te+H.pos.y>=0&&($[Te+H.pos.y][Re+H.pos.x]=Ie)})})}function N($,H){const{matrix:W,pos:Te}=H;for(let Ie=0;Ie<W.length;++Ie)for(let Re=0;Re<W[Ie].length;++Re)if(W[Ie][Re]!==0&&(!$[Ie+Te.y]||$[Ie+Te.y][Re+Te.x]!==0))return!0;return!1}function L(){if(a.pos.y++,N(o,a)){if(a.pos.y--,M(o,a),G()){w();return}de(),ye()}c=0}function G(){for(let $=0;$<el;$++)if(o[0][$]!==0)return!0;return!1}function de(){if(a=v(),N(o,a)&&a.pos.y>=0){w();return}}function ye(){e:for(let $=o.length-1;$>=0;--$){for(let W=0;W<el;++W)if(o[$][W]===0)continue e;const H=o.splice($,1)[0].fill(0);o.unshift(H),r.value+=10,++$}}function b($=0){const H=$-u;u=$,c+=H,c>250&&L(),x(),i.value&&(h=requestAnimationFrame(b))}function y(){r.value=0,o=m(el,JV),de(),c=0,u=0,i.value=!0,h=requestAnimationFrame(b)}function w(){i.value=!1,cancelAnimationFrame(h),h=null}function C(){i.value?w():y()}function S($){a.pos.x+=$,N(o,a)&&(a.pos.x-=$)}function R($){return $[0].map((H,W)=>$.map(Te=>Te[W])).reverse()}function T(){const $=a.matrix,H=R(a.matrix);a.matrix=H,N(o,a)&&(a.matrix=$)}function at($){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes($.key)&&$.preventDefault(),!(!i.value||!a)&&($.key==="ArrowLeft"&&S(-1),$.key==="ArrowRight"&&S(1),$.key==="ArrowDown"&&L(),$.key==="ArrowUp"&&T())}function St(){w(),e.push("/games")}return($,H)=>(ie(),le("section",qV,[O("div",GV,[O("p",zV,"Score: "+je(r.value),1),O("div",KV,[O("canvas",{ref_key:"canvas",ref:t,width:"288",height:"480",class:"block mx-auto"},null,512)])]),O("div",QV,[H[0]||(H[0]=O("h2",{class:"text-3xl font-bold"},"Tetris",-1)),H[1]||(H[1]=O("p",{class:"text-sm"},[lt("By: "),O("span",{class:"text-orange-400"},"Andrii Kohut")],-1)),O("div",YV,[O("button",{onClick:C,class:yr(["flex-1 px-4 py-2 rounded-full transition",i.value?"bg-blue-500 hover:bg-blue-600":"bg-green-500 hover:bg-green-600"])},je(i.value?"Stop":"Start"),3),O("button",{onClick:St,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition"}," Close ")])])]))}},ZV={class:"flex h-screen sci-fi-font text-white"},e2={class:"flex flex-col items-center justify-center flex-1"},t2={class:"text-lg mb-1"},n2={class:"w-full md:w-1/3 p-6 flex flex-col justify-center space-y-6 border-l border-white/10"},s2={class:"flex gap-4"},Xt=20,r2=400,i2={__name:"Snake",setup(n){const e=rr(),t=_e(null),s=_e(null),r=r2/Xt;let i=null;const o=_e([{x:5,y:5}]),a=_e({x:1,y:0}),c=_e({x:10,y:10}),u=_e(0),h=_e(!1),f=_e(!1),p=_e(!1),m=()=>{for(let b=0;b<r;b++)for(let y=0;y<r;y++)s.value.fillStyle=(y+b)%2===0?"#2e2e2e":"#1f1f1f",s.value.fillRect(y*Xt,b*Xt,Xt,Xt)},v=()=>{m(),s.value.fillStyle="red",s.value.fillRect(c.value.x*Xt,c.value.y*Xt,Xt,Xt),o.value.forEach((b,y)=>{s.value.fillStyle=p.value?y===0?"#970000":"#c30000":y===0?"#009700":"lime",s.value.fillRect(b.x*Xt,b.y*Xt,Xt,Xt)})},A=()=>{const b={x:o.value[0].x+a.value.x,y:o.value[0].y+a.value.y};if(b.x<0||b.y<0||b.x>=r||b.y>=r||o.value.some(y=>y.x===b.x&&y.y===b.y)){p.value=!0,v(),N();return}o.value.unshift(b),b.x===c.value.x&&b.y===c.value.y?(u.value+=1,x(),f.value=!0,setTimeout(()=>f.value=!1,150)):o.value.pop(),v()},x=()=>{let b,y;do b=Math.floor(Math.random()*r),y=Math.floor(Math.random()*r);while(o.value.some(w=>w.x===b&&w.y===y));c.value={x:b,y}},M=()=>{G(),i=setInterval(A,150),h.value=!0},N=()=>{clearInterval(i),i=null,h.value=!1},L=()=>{h.value?N():M()},G=()=>{o.value=[{x:5,y:5}],a.value={x:1,y:0},u.value=0,f.value=!1,p.value=!1,x(),v()};function de(){N(),e.push("/games")}const ye=b=>{switch(b.key){case"ArrowUp":a.value.y===0&&(a.value={x:0,y:-1});break;case"ArrowDown":a.value.y===0&&(a.value={x:0,y:1});break;case"ArrowLeft":a.value.x===0&&(a.value={x:-1,y:0});break;case"ArrowRight":a.value.x===0&&(a.value={x:1,y:0});break}};return nr(()=>{s.value=t.value.getContext("2d"),v(),window.addEventListener("keydown",ye)}),wy(()=>{N(),window.removeEventListener("keydown",ye)}),(b,y)=>(ie(),le("div",ZV,[O("div",e2,[O("div",t2,"Score: "+je(u.value),1),O("canvas",{ref_key:"canvas",ref:t,width:"400",height:"400",class:yr(["bg-black border-4 rounded-lg transition-shadow duration-200",p.value?"border-red-500 shadow-[0_0_20px_#ff0000]":f.value?"border-orange-500 shadow-[0_0_20px_#f97316]":"border-orange-500"])},null,2)]),O("div",n2,[y[0]||(y[0]=O("h2",{class:"text-3xl font-bold"},"Tetris",-1)),y[1]||(y[1]=O("p",{class:"text-sm"},[lt("By: "),O("span",{class:"text-orange-400"},"Yaroslav Labunskiy")],-1)),O("div",s2,[O("button",{onClick:L,class:yr(["flex-1 px-4 py-2 rounded-full transition",h.value?"bg-blue-500 hover:bg-blue-600":"bg-green-500 hover:bg-green-600"])},je(h.value?"Stop":"Start"),3),O("button",{onClick:de,class:"flex-1 px-4 py-2 rounded-full bg-red-500 hover:bg-red-700 transition"}," Close ")])])]))}};let o2=new Promise(n=>{const e=fa(fn,()=>{e(),n()})});const EI=async()=>{await o2},Ss=async(n,e,t)=>{await EI(),fn.currentUser?t():t("/login")},B_=async(n,e,t)=>{await EI(),fn.currentUser?t("/profile"):t()},a2=[{path:"TapNPlayHost/",component:JM},{path:"TapNPlayHost/games",component:NL,beforeEnter:Ss},{path:"TapNPlayHost/about",component:ZL},{path:"TapNPlayHost/forum",component:IV},{path:"TapNPlayHost/login",component:cL,beforeEnter:B_},{path:"TapNPlayHost/register",component:yL,beforeEnter:B_},{path:"TapNPlayHost/profile",component:qL,beforeEnter:Ss},{path:"TapNPlayHost/badges",component:lV,beforeEnter:Ss},{path:"TapNPlayHost/records",component:EV,beforeEnter:Ss},{path:"TapNPlayHost/games/minesweeper",component:UV,beforeEnter:Ss},{path:"TapNPlayHost/games/candycrush",component:WV,beforeEnter:Ss},{path:"TapNPlayHost/games/tetris",component:XV,beforeEnter:Ss},{path:"TapNPlayHost/games/snake",component:i2,beforeEnter:Ss}],l2=CM({history:eM(),routes:a2}),$f=cC(WM);$f.use(l2);$f.directive("click-outside",{beforeMount(n,e){n.clickOutsideEvent=t=>{n===t.target||n.contains(t.target)||e.value(t)},document.addEventListener("click",n.clickOutsideEvent)},unmounted(n){document.removeEventListener("click",n.clickOutsideEvent)}});$f.mount("#app");
