"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7863],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:l,values:p,groupId:m,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,i.U)(),[T,N]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==T&&k.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==T&&(E(t),N(n),null!=m&&v(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},b)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:C,onClick:O},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":T===t})}),a??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},9879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={sidebar_label:"Token metadata"},i="Fetch token metadata of any ERC721 or ERC1155 contract",c={unversionedId:"metadata/guides/token-metadata",id:"metadata/guides/token-metadata",title:"Fetch token metadata of any ERC721 or ERC1155 contract",description:"Sequence Metadata GetTokenMetadata Method:",source:"@site/docs/05-metadata/04-guides/02-token-metadata.mdx",sourceDirName:"05-metadata/04-guides",slug:"/metadata/guides/token-metadata",permalink:"/metadata/guides/token-metadata",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/04-guides/02-token-metadata.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Token metadata"},sidebar:"sidebar",previous:{title:"API Usage",permalink:"/metadata/api-usage"},next:{title:"Contract metadata",permalink:"/metadata/guides/contract-metadata"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetch-token-metadata-of-any-erc721-or-erc1155-contract"},"Fetch token metadata of any ERC721 or ERC1155 contract"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Metadata ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTokenMetadata")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Metadata/GetTokenMetadata"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainID"),' (string) -- the chain id, as a name or number (ie. "1" or "mainnet", "137" or "polygon", etc.)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- the contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokenIDs")," (array of strings) -- array of strings containing token ids to fetch metadata")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTokenMetadata")," of some Skyweaver tokens on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://metadata.sequence.app/rpc/Metadata/GetTokenMetadata -d \'{ "chainID": "polygon", "contractAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "tokenIDs": ["65537", "65538", "65539"] }\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceMetadataClient } from '@0xsequence/metadata'\n\nconst metadataClient = new SequenceMetadataClient()\n\nconst tokenMetadata = await metadataClient.getTokenMetadata({\n  chainID: 'polygon',\n  contractAddress: '0x631998e91476DA5B870D741192fc5Cbc55F5a52E',\n  tokenIDs: ['65537', '65538', '65539']\n})\n\nconsole.log('Skyweaver metadata for some tokens:', tokenMetadata)\n"))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);