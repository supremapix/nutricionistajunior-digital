import { JSDOM } from 'jsdom';
const dom=new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>',{url:'https://www.nutricionistajunior.digital/',pretendToBeVisual:true});
for(const k of ['window','document','navigator','HTMLElement','Element','Node','HTMLDocument','MutationObserver','Event','MouseEvent'])Object.defineProperty(globalThis,k,{value:dom.window[k],configurable:true});
globalThis.requestAnimationFrame=cb=>setTimeout(cb,0);globalThis.cancelAnimationFrame=clearTimeout;window.scrollTo=()=>{};
globalThis.IntersectionObserver=class {observe(){} unobserve(){} disconnect(){}};
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
const React=await import('react');const{createRoot}=await import('react-dom/client');const{HelmetProvider}=await import('react-helmet-async');
const{default:App}=await import('../src/App.tsx');
const root=createRoot(document.getElementById('root'));
await React.act(async()=>root.render(React.createElement(HelmetProvider,{},React.createElement(App))));
for(const route of ['/sobre','/contato','/']){const a=[...document.querySelectorAll('a')].find(x=>x.getAttribute('href')===route);if(!a)throw Error('Missing link'+route);await React.act(async()=>a.dispatchEvent(new MouseEvent('click',{bubbles:true,button:0,cancelable:true})));const canon=[...document.querySelectorAll('link[rel="canonical"]')].map(x=>x.href);console.log(route,document.querySelectorAll('h1').length,canon);if(canon.length!==1||canon[0]!=='https://www.nutricionistajunior.digital'+route)throw Error('SEO navigation failed');}
await React.act(async()=>root.unmount());console.log('PASS React navigation/canonical updates in JSDOM (not real browser).');
