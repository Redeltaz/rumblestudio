(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[643],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4806:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={},s={unversionedId:"player-oui/README",id:"player-oui/README",isDocsHomePage:!1,title:"README",description:"@rumblestudio/player-service / Exports",source:"@site/docs/player-oui/README.md",sourceDirName:"player-oui",slug:"/player-oui/README",permalink:"/rumblestudio/docs/player-oui/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/player-oui/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"modules",permalink:"/rumblestudio/docs/player-configs/modules"},next:{title:"playerservice",permalink:"/rumblestudio/docs/player-oui/classes/playerservice"}},p=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[{value:"Angular",id:"angular",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]},{value:"Vanilla HTML",id:"vanilla-html",children:[]}]},{value:"Other open source players",id:"other-open-source-players",children:[]},{value:"Support",id:"support",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"@rumblestudio/player-service / ",(0,o.kt)("a",{parentName:"p",href:"/rumblestudio/docs/player-oui/modules"},"Exports")),(0,o.kt)("h1",{id:"rumblestudioplayer-service"},"@rumblestudio/",(0,o.kt)("strong",{parentName:"h1"},"player-service")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rumble Player")," is an open source HTML5 audio player."),(0,o.kt)("p",null,"It contains all the logic to play sound (from an url, a playlist object, an RSS feed, ...), with all the common methods (next, prev, shuffle, volume controls...) and a few extra features (preload, event callbacks, ...)"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Install the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@rumblestudio/player-service"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @rumblestudio/player-service\n")),(0,o.kt)("p",null,"Note: The service has ",(0,o.kt)("a",{parentName:"p",href:"https://howlerjs.com/"},"HowlerJS")," ",(0,o.kt)("img",{width:"100",src:"https://howlerjs.com/assets/images/logo.svg"})," as a dependency, a javascript library for audio manipulation and UUID to generate some unique ID for playlist processes."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"angular"},"Angular"),(0,o.kt)("p",null,"To use the library within your Angular project the best way is to use an Angular Service"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an angular project with a service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @angular/cli # install Angular\nng new demo-player-angular # Create a new Angular app\ncd demo-player-angular\nng g s audio # generate a service\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the Rumble Player Service package:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @rumblestudio/player-service\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Import the Rumble Player Service into the Angular service. You can extends the Angular service class from Rumble Player Service or you can create a property ",(0,o.kt)("inlineCode",{parentName:"li"},"this.player = new PlayerService()"),'. The following example use the "extends" option:')),(0,o.kt)("p",null,"In the file ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-player-angular/src/app/audio.service.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from '@angular/core';\nimport {\n    Song,\n    PlayerService,\n    PlayerServiceEvent,\n} from '@rumblestudio/player-service';\nimport { BehaviorSubject } from 'rxjs';\n\n@Injectable({\n    providedIn: 'root',\n})\nexport class AudioService extends PlayerService {\n    public playlist$: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);\n    public index$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);\n    public percentage$: BehaviorSubject<number> = new BehaviorSubject(0);\n    public position$: BehaviorSubject<number> = new BehaviorSubject(0);\n    public playing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(\n        false,\n    );\n\n    constructor() {\n        super(); // needed as this class extends the Rumble Player Service\n        this.addNewOnCallback((event: PlayerServiceEvent) => this.on(event));\n    }\n\n    on(event: PlayerServiceEvent) {\n        // We convert the events into RxJS behaviour subject\n        // so that you can subscribe to them the way you want.\n        console.log('[audioService](on) new event:', event, this);\n        this.playing$.next(this.isPlaying);\n        this.index$.next(this.index);\n        this.position$.next(this.position);\n        this.percentage$.next(this.percentage);\n    }\n}\n")),(0,o.kt)("p",null,"All events will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," method in this example (new playlist, play, pause,...). You can filter on the event.type property, debounce the observables (see ",(0,o.kt)("a",{parentName:"p",href:"https://rxmarbles.com/#debounceTime"},"debounceTime"),") or filter if not distinct (see ",(0,o.kt)("a",{parentName:"p",href:"https://rxmarbles.com/#distinctUntilChanged"},"distinctUntilChanged"),") to avoid unnecessary observable triggers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A list of events is available further.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Once you have an Angular service you can inject it in your components (for example in app.component.ts):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { AudioService } from './audio.service';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent {\n  title = 'ng-rumble-player';\n\n  constructor(private audioService:AudioService){\n    ...\n  }\n}\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Give something to play to your service:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"//...\nexport class AppComponent {\n    //...\n\n    loadSomeMusic() {\n        // method 1\n        // from a list of audio urls\n        const urls = [\n            'https://example.com/myAudioFile_1.mp3',\n            'https://example.com/myAudioFile_2.wav',\n            'https://example.com/myAudioFile_3.flac',\n        ];\n        this.audioService.setPlaylistFromUrls(urls);\n\n        // method 2\n        // from a list of dict\n        const songs: Partial<Song>[] = [\n            {\n                songTitle: 'my first song',\n                file: 'https://example.com/myAudioFile_1.mp3',\n                author: 'John Doe',\n                songCover: 'https://example.com/cover_1.jpg',\n                albumTitle: 'my amazing album',\n            },\n            //...\n        ];\n        this.audioService.setPlaylistFromSongObjects(songs);\n\n        // method 3\n        // from a RSS feed URL\n        const url =\n            'https://www.omnycontent.com/d/playlist/2e6498c5-ff94-4726-ba20-ad1000f32d21/2bed1e53-84f7-4f9a-9071-ad1000f84f8f/5d9318ee-dcf8-4337-ae15-ad1000f97d0c/podcast.rss';\n        this.audioService.setPLaylistFromRSSFeedURL(url);\n    }\n\n    play() {\n        this.audioService.play();\n    }\n}\n")),(0,o.kt)("p",null,"and call those methods as you like from app.component.html:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button (click)="loadSomeMusic()">load</button>\n<button (click)="play()">play</button>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A list of all methods is available further.")),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not done yet"))),(0,o.kt)("h3",{id:"vue"},"Vue"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not done yet"))),(0,o.kt)("h3",{id:"vanilla-html"},"Vanilla HTML"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"not done yet"))),(0,o.kt)("h2",{id:"other-open-source-players"},"Other open source players"),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"This library is actively supported by Rumble Studio who helps to create audio content. Check it out: ",(0,o.kt)("a",{parentName:"p",href:"https://rumble.studio"},"Rumble Studio")),(0,o.kt)("img",{src:"https://rumblestudio.app/assets/rs-logos/classic-reversed.svg"}))}c.isMDXComponent=!0}}]);