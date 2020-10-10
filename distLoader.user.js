// ==UserScript==
// @name         Pixelbattle Placer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Unity is the way to victory
// @author       gorox and friends
// @match        https://prod-app7620659-a4fd141494a3.pages.vk-apps.com/*
// @connect      github.com
// @connect      raw.githubusercontent.com
// @updateURL    https://github.com/2chbot/PixelBattleBot/raw/main/distLoader.user.js
// @downloadURL  https://github.com/2chbot/PixelBattleBot/raw/main/distLoader.user.js
// @grant        GM_xmlhttpRequest
// @connect      127.0.0.1
// ==/UserScript==

const a=['W6dcNmo8','CMvZCg9UC2vuzxH0','BtqyWOlcICoQWPa=','oNv0hNXycI0V','q2fJAguTq29UDhjVBa==','d0xdVZxdMgG=','Bwv0Ag9K','W6tdKctdVG==','Dgv4Dc9QyxzHC2nYAxb0','WQVdLwW3WODb','yxbWzw5Kq2HPBgq=','C8orwcdcMa3dQ8kAFKFcQCkUW5JdIIe=','DxjS','WQZdJ3qOW5WkaXVcPmkta33cMaf8WOv1c1DehCkWvmonWOtdGSoBW5hcSvWzWRVcTSocWP9XWQpcV3FdS1XdWRurySkIW5ajmSoLj3BdGCk5W5/cQqlcRCkeechcThGXFeDElZu=','yM9KEq==','y3jLyxrLrwXLBwvUDa=='];(function(b,c){const d=function(e){while(--e){b['push'](b['shift']());}};d(++c);}(a,0x10c));const b=function(c,d){c=c-0x0;let e=a[c];if(b['vhVIfM']===undefined){var f=function(h){const i='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',j=String(h)['replace'](/=+$/,'');let k='';for(let l=0x0,m,n,o=0x0;n=j['charAt'](o++);~n&&(m=l%0x4?m*0x40+n:n,l++%0x4)?k+=String['fromCharCode'](0xff&m>>(-0x2*l&0x6)):0x0){n=i['indexOf'](n);}return k;};b['iahbRo']=function(h){const j=f(h);let k=[];for(let l=0x0,m=j['length'];l<m;l++){k+='%'+('00'+j['charCodeAt'](l)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(k);},b['nanoJk']={},b['vhVIfM']=!![];}const g=b['nanoJk'][c];return g===undefined?(e=b['iahbRo'](e),b['nanoJk'][c]=e):e=g,e;};const c=function(b,d){b=b-0x0;let e=a[b];if(c['ngGHKf']===undefined){var f=function(i){const j='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',k=String(i)['replace'](/=+$/,'');let l='';for(let m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return l;};const h=function(l,m){let n=[],o=0x0,p,q='',r='';l=f(l);for(let u=0x0,v=l['length'];u<v;u++){r+='%'+('00'+l['charCodeAt'](u)['toString'](0x10))['slice'](-0x2);}l=decodeURIComponent(r);let t;for(t=0x0;t<0x100;t++){n[t]=t;}for(t=0x0;t<0x100;t++){o=(o+n[t]+m['charCodeAt'](t%m['length']))%0x100,p=n[t],n[t]=n[o],n[o]=p;}t=0x0,o=0x0;for(let w=0x0;w<l['length'];w++){t=(t+0x1)%0x100,o=(o+n[t])%0x100,p=n[t],n[t]=n[o],n[o]=p,q+=String['fromCharCode'](l['charCodeAt'](w)^n[(n[t]+n[o])%0x100]);}return q;};c['guTkMD']=h,c['kPVCDl']={},c['ngGHKf']=!![];}const g=c['kPVCDl'][b];return g===undefined?(c['VQbntd']===undefined&&(c['VQbntd']=!![]),e=c['guTkMD'](e,d),c['kPVCDl'][b]=e):e=g,e;};const m=c,o=c,q=c,l=b,n=b,p=b,j={};j[l('0x8')]=m('0xf','fwKz');const k={};k[n('0x0')]=o('0x1','Msw^'),k[l('0xa')]=o('0x4','!3G9'),k[q('0x6',')mJA')]=j,k[m('0xd','Msw^')]=d=>{const s=m,t=o,v=q,r=p,u=n,w=l,e=document[r('0x3')](s('0x9','bFx('));e[s('0xb','&GeG')]=u('0xc'),e[v('0x7','PXYc')]=d[u('0x5')],document[r('0x2')][u('0xe')](e);},GM_xmlhttpRequest(k);
