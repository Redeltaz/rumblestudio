(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[379],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6698:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={},i={unversionedId:"player-configs/README",id:"player-configs/README",isDocsHomePage:!1,title:"README",description:"@rumblestudio/player-configs / Exports",source:"@site/docs/player-configs/README.md",sourceDirName:"player-configs",slug:"/player-configs/README",permalink:"/rumblestudio/docs/player-configs/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/player-configs/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/rumblestudio/docs/intro"},next:{title:"configsmodule",permalink:"/rumblestudio/docs/player-configs/classes/configsmodule"}},p=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Angular",id:"angular",children:[]}]},{value:"Support",id:"support",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"@rumblestudio/player-configs / ",(0,l.kt)("a",{parentName:"p",href:"/rumblestudio/docs/player-configs/modules"},"Exports")),(0,l.kt)("h1",{id:"rumblestudioplayer-configs"},"@rumblestudio/",(0,l.kt)("strong",{parentName:"h1"},"player-configs")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rumble Player")," is an open source HTML5 audio player."),(0,l.kt)("p",null,"this lib contains default layout for the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rumblestudio/player-service"},"Rumble player")," layout UI, which is also a dependency.\nJust give it the DOM id of an HTMLElement container, and it will inflate it with controls for the player."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"Install the package ",(0,l.kt)("inlineCode",{parentName:"p"},"@rumblestudio/player-configs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @rumblestudio/player-configs\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"angular"},"Angular"),(0,l.kt)("p",null,"Install and import the library within an angular project already using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rumblestudio/player-service"},"Rumble player")," library"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install the lib as dependency in your project")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install  @rumblestudio/player-configs # install the lib\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Add a Div container in your template")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-angular2html"},"<div id='container'></div>\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"At this point you have two choices : use one of our 5 default layouts, or give a layout configuration.")),(0,l.kt)("p",null,"3.1 Using a default config"),(0,l.kt)("p",null,"in your component ts file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// import the default layout generator function\nimport { generateDefaultLayout } from '@rumblestudio/player-configs';\n\n// after OnInit :\nconst player: playerService = generateDefaultLayout(myContainerID, configName);\n// myContainerID is the ID of the container added in the template file\n// configName one of these : 'config1', 'config2', 'config3', 'config4' or 'config5';\n// you can interact with the returned player service\n")),(0,l.kt)("p",null,"That's all, you have your customized player."),(0,l.kt)("p",null,"each config contains :"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config1 : PLAY BUTTON, PROGRESS BAR, PAUSE BUTTON")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config2 : PLAY BUTTON, PAUSE BUTTON, PREV BUTTON, NEXT BUTTON")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config3 : PLAY BUTTON, PAUSE BUTTON , PROGRESS BAR, STOP BUTTON")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config4 : PLAY BUTTON, PAUSE BUTTON , PROGRESS BAR, STOP BUTTON, PREV BUTTON, NEXT BUTTON")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"config5 : PLAY BUTTON, PAUSE BUTTON, STOP BUTTON, PROGRESS BAR, PREV BUTTON, NEXT BUTTON, FORWARD BUTTON, REWIND BUTTON, SHUFFLE BUTTON, LOOP BUTTON")),(0,l.kt)("p",null,"3.2 Using your custum defined config"),(0,l.kt)("p",null,"in your component ts file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// import the default layout generator function\nimport { generateDefaultLayout } from '@rumblestudio/player-configs' ;\n\n// after OnInit :\nconst player: playerService = generateLayout(myContainerID, myConf);\n// myContainerID is the ID of the container added in the template file\n\nmyConf :\n    { layout: {columns: number, rows: number},\n     elements: <{task: string, span: number}>[],\n     dimensions: {width: string, height: string}}\n\n// Dimensions are in pixels,\n//the element array contains an array of buttons and / or seekbar you want to show in order\n// you can interact with the returned player service\n")),(0,l.kt)("p",null,"find below the list of available buttons :"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"play")," triggers play"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pause")," triggers pause"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"prev")," play previously played song"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"next")," play next song in the playlist"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stop")," stops the player"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"forward")," jump 15s forward in the playing"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rewind")," jump 15s backward in the playing"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"shuffle")," shuffle playlist"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loop")," keep playing the same song"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," show progress bar"),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("p",null,"This library is actively supported by Rumble Studio who helps to create audio content. Check it out: ",(0,l.kt)("a",{parentName:"p",href:"https://rumble.studio"},"Rumble Studio")),(0,l.kt)("img",{src:"https://rumblestudio.app/assets/rs-logos/classic-reversed.svg"}))}s.isMDXComponent=!0}}]);