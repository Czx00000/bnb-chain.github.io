"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[9263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,p=m["".concat(c,".").concat(u)]||m[u]||h[u]||o;return r?a.createElement(p,l(l({ref:t},d),{},{components:r})):a.createElement(p,l({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33348:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"Oracle Module",sidebar_position:2,hide_table_of_contents:!1},l="Oracle on Beacon Chain",i={unversionedId:"learn/oracle-module",id:"learn/oracle-module",isDocsHomePage:!1,title:"Oracle on Beacon Chain",description:"The oracle module is a common module like gov which is used to handle prophecy and claim. Prophecy means the validators want to reach a consensus on something, like cross chain transfer. Claim is raised by a validator and the content of claim is the cross chain transfer. When most of the validators (like 70%) claim the same thing on the prophecy, the winning claim will be executed.For oracle module is a common module, other module which depends on oracle module will register claim type and related hooks checking and handling claim. Each claim type has a sequence, oracle module should process prophecy and claim by sequence. When one prophecy is executed successfully, the sequence of the claim type will be increased by one.",source:"@site/docs/learn/oracle-module.md",sourceDirName:"learn",slug:"/learn/oracle-module",permalink:"/docs/learn/oracle-module",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/oracle-module.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Oracle Module",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Incentive Mechanism for BSC Relayer",permalink:"/docs/learn/incentives"},next:{title:"Oracle Relayer",permalink:"/docs/learn/oracle-relayer"}},c=[{value:"Oracle Process",id:"oracle-process",children:[],level:2},{value:"Bridge Module",id:"bridge-module",children:[],level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"oracle-on-beacon-chain"},"Oracle on Beacon Chain"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"oracle")," module is a common module like gov which is used to handle prophecy and claim. Prophecy means the validators want to reach a consensus on something, like cross chain transfer. Claim is raised by a validator and the content of claim is the cross chain transfer. When most of the validators (like 70%) claim the same thing on the prophecy, the winning claim will be executed.For oracle module is a common module, other module which depends on oracle module will register claim type and related hooks checking and handling claim. Each claim type has a sequence, oracle module should process prophecy and claim by sequence. When one prophecy is executed successfully, the sequence of the claim type will be increased by one."),(0,n.kt)("h2",{id:"oracle-process"},"Oracle Process"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Oracle module receives a claim message from validator, if the sequence is not current sequence, the claim message will be rejected."),(0,n.kt)("li",{parentName:"ol"},"If sequence is valid, the hooks of the claim type will check the claim message, if the claim message is invalid, then return"),(0,n.kt)("li",{parentName:"ol"},"If the claim message is valid and it\u2019s the first claim, the related prophecy will be created. If claim message is not the first claim, then it will be added to the existed prophecy."),(0,n.kt)("li",{parentName:"ol"},"If the power of validators which claim the same content reaches a threshold like 70%, the prophecy will be marked success and the hooks will execute the winning claim and the sequence of claim type will be increased."),(0,n.kt)("li",{parentName:"ol"},"If there is no chance that the validators will reach a consensus, the prophecy will be marked failed and the prophecy will be deleted and the validators should start over again.")),(0,n.kt)("h2",{id:"bridge-module"},"Bridge Module"),(0,n.kt)("p",null,"Bridge module will process cross chain transactions. It contains two parts: transactions from BC to BSC and transactions from BSC to BC.\nFor transactions from BSC to BC, it will depend on the oracle module. When the validators reach a consensus on a certain claim, the bridge module will process the transaction according to the claim, like transfer from BSC to BC.\nFor transactions from BC to BSC, it will process the BC part of the transaction and write the related cross chain package for BSC."))}d.isMDXComponent=!0}}]);