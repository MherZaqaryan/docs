"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8267],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5058:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_label:"Events",title:"Events",sidebar_position:5.3},c=void 0,l={unversionedId:"BedWars1058/developers/events",id:"BedWars1058/developers/events",title:"Events",description:"BedWars1058 is providing A LOT of events. You can see them on the JavaDocs.",source:"@site/docs/BedWars1058/developers/events.md",sourceDirName:"BedWars1058/developers",slug:"/BedWars1058/developers/events",permalink:"/docs/BedWars1058/developers/events",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/developers/events.md",tags:[],version:"current",sidebarPosition:5.3,frontMatter:{sidebar_label:"Events",title:"Events",sidebar_position:5.3},sidebar:"bw1058",previous:{title:"Maven",permalink:"/docs/BedWars1058/developers/maven"},next:{title:"Creating Commands",permalink:"/docs/BedWars1058/developers/commands"}},p=[],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BedWars1058 is providing A LOT of events. You can see them on the ",(0,a.kt)("a",{parentName:"p",href:"https://javadocs.andrei1058.dev/BedWars1058"},"JavaDocs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EventHandler\npublic void onEnemyEnter(EnemyBaseEnterEvent e) {\n  //stuff\n}\n\n@EventHandler\npublic void onTeamAssign(TeamAssignEvent e) {\n  //stuff\n}\n\n@EventHandler\npublic void onArenaJoin(PlayerJoinArenaEvent e) {\n  //stuff\n}\n")))}d.isMDXComponent=!0}}]);