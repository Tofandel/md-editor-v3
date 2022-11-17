var a=Object.defineProperty,h=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var o=(i,t,e)=>t in i?a(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,d=(i,t)=>{for(var e in t||(t={}))c.call(t,e)&&o(i,e,t[e]);if(s)for(var e of s(t))u.call(t,e)&&o(i,e,t[e]);return i},n=(i,t)=>h(i,l(t));import{d as p,g as b,k as g,n as v,e as f,b as _,h as z,o as y}from"./index.2ede3ba1.js";import{_ as k}from"./index.99844ab4.js";var r=`## About md-editor-v3

<br>

![](https://img.shields.io/github/stars/imzbf/md-editor-v3?style=social) ![](https://img.shields.io/npm/dm/md-editor-v3) ![](https://img.shields.io/bundlephobia/min/md-editor-v3) ![](https://img.shields.io/github/license/imzbf/md-editor-v3) ![](https://img.shields.io/github/package-json/v/imzbf/md-editor-v3) ![](https://img.shields.io/badge/ssr-%3E1.6.0-brightgreen)

Markdown editor for vue3, developed by jsx and typescript, dark theme, beautify content by prettier, render articles directly, paste or clip the picture and upload it...

## Same series

- For react\uFF0C[md-editor-rt](https://github.com/imzbf/md-editor-rt)

## Connect

1. Email\uFF1Azbfcqtl@gmail.com
2. Github issue\uFF1A[github issues](https://github.com/imzbf/md-editor-v3/issues)

## About docs

Editor's author is not proficient in English, please help author correct wrong grammar.
`,m=`## \u5173\u4E8E md-editor-v3

<br>

![](https://img.shields.io/github/stars/imzbf/md-editor-v3?style=social) ![](https://img.shields.io/npm/dm/md-editor-v3) ![](https://img.shields.io/bundlephobia/min/md-editor-v3) ![](https://img.shields.io/github/license/imzbf/md-editor-v3) ![](https://img.shields.io/github/package-json/v/imzbf/md-editor-v3) ![](https://img.shields.io/badge/ssr-%3E1.6.0-brightgreen)

Markdown \u7F16\u8F91\u5668\uFF0Cvue3 \u7248\u672C\uFF0C\u4F7F\u7528 jsx \u548C typescript \u8BED\u6CD5\u5F00\u53D1\uFF0C\u652F\u6301\u5207\u6362\u4E3B\u9898\uFF0C\u652F\u6301 prettier \u7F8E\u5316\u6587\u672C\uFF0C\u652F\u6301\u56FE\u7247\u7C98\u8D34\u4E0A\u4F20\uFF0C\u88C1\u526A\u4E0A\u4F20\uFF0C\u652F\u6301\u5728 tsx \u9879\u76EE\u4F7F\u7528\u3002

## \u540C\u7CFB\u5217

- react \u7248\u672C\uFF0C[md-editor-rt](https://github.com/imzbf/md-editor-rt)

## \u53CD\u9988\u8054\u7CFB

1. \u90AE\u7BB1\uFF1Azbfcqtl@gmail.com
2. issue \u7BA1\u7406\uFF1A[github issues](https://github.com/imzbf/md-editor-v3/issues)
`;const E={class:"container"},x={class:"doc"},j={name:"AboutPage"},B=p(n(d({},j),{setup(i){const t=b(),e=g(t.state.lang==="en-US"?r:m);return v(()=>t.state.lang,()=>{e.value=t.state.lang==="en-US"?r:m}),(w,M)=>(y(),f("div",E,[_("div",x,[z(k,{"editor-id":"md-about","model-value":e.value},null,8,["model-value"])])]))}}));export{B as default};
