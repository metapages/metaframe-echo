import{j as l,T as f,l as d,A as a,y as m,S as p,D as g}from"./vendor.b063ca2c.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};y();const c=l,h=()=>{const n=f(),[o,s]=d(),[i]=a("debug");return m(()=>{if(!n?.metaframe)return;const e=n.metaframe,t=u=>{i&&console.log(`${window.location.host}${window.location.pathname} new inputs: ${JSON.stringify(u).substring(0,200)}`),s(u),e.setOutputs(u)},r=e.onInputs(t);return()=>{r()}},[n.metaframe,s]),c("div",{children:o?JSON.stringify(o).substring(0,50):"No inputs yet"})},b=()=>c(h,{});p(c(g,{children:c(b,{})}),document.getElementById("root"));
//# sourceMappingURL=index.2346e375.js.map
