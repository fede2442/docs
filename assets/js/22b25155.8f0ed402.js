"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1555:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7462),a=r(7294),o=r(9960),i=r(6010);function l(e){let{items:t}=e;return a.createElement("div",{className:"flex flex-col gap-2"},t.map(((e,t)=>a.createElement(s,(0,n.Z)({key:t},e)))))}function s(e){let{title:t,description:r,route:n}=e;const l=(0,i.Z)("block relative dark:bg-[rgba(255,255,255,0.05)] bg-white rounded-lg p-4 hover:no-underline group w-full",!!n&&"cursor-pointer"),s=a.createElement("div",{className:(0,i.Z)("text-sm",!!n&&"group-hover:opacity-50")},a.createElement("p",{className:"dark:text-white-80 text-black-80 font-bold mb-0"},t),a.createElement("p",{className:"dark:text-white-50 text-black-50 mb-0"},r),!!n&&a.createElement("img",{src:"/img/icons/chevron.svg",className:"dark:invert rotate-90 absolute top-4 right-3 opacity-80"}));return n?a.createElement(o.Z,{to:n,className:l},s):a.createElement("div",{className:l},s)}},1237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(1555);const i={slug:"/wallet"},l="Wallet",s={unversionedId:"wallet/wallet",id:"wallet/wallet",title:"Wallet",description:"Sequence Wallet gives you a friendly, non-custodial wallet for your users with multi-chain support and seamless integration.",source:"@site/docs/03-wallet/01-wallet.mdx",sourceDirName:"03-wallet",slug:"/wallet",permalink:"/wallet",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/01-wallet.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/wallet"},sidebar:"sidebar",previous:{title:"Sending an ERC20 token",permalink:"/getting-started/erc20-token"},next:{title:"Installation",permalink:"/wallet/installation"}},c={},u=[{title:"\ud83d\udc64 Social/email login",description:"Easily sign in via email, Google, Facebook or other socials. No blockchain knowledge required"},{title:"\u26d3\ufe0f Multi-Chain support",description:"Sequence can support all EVM compatible chains."},{title:"\ud83d\udcb3 On-Ramps Integration",description:"Sequence allows users to purchase cryptocurrencies directly from their wallet, using payment providers like Wyre, Moonpay and Ramp"},{title:"\ud83e\udd84 web3 compatible",description:"Sequence can be used with any dapp on the supported networks"},{title:"\ud83d\udcf1 Browser, app & extension",description:"Users can access their sequence wallet via https://sequence.app, the Sequence browser extension or the Sequence Mobile apps"},{title:"\ud83d\udd11 Non-custodial",description:"With Sequence, users are in full control of their wallet with no third party being able to access these funds other than them."},{title:"\ud83d\udd01 Swap in-wallet",description:"Your users can easily swap between tokens directly inside their wallets. Perfect in case your dapp requires a specific token."},{title:"\ud83c\udf09 Built-in bridges",description:"With Sequence, your users can easily bridge assets from one network to another, directly from inside their wallets."},{title:"\ud83d\udc31 NFT support",description:"In addition to ERC-20 tokens like USDC, Sequence has first class support for NFTs, for both ERC-721 and ERC-1155 tokens."},{title:"\u26a1 No install required",description:"Applications can integrate Sequence natively, allowing users to access their sequence wallet without any install required on their end. "},{title:"\u26fd Fee Abstraction",description:"Users can pay transaction fees in various currencies, not only the native currency of the network used."},{title:"\ud83e\udd16 Transaction Relaying",description:"Users don't need to worry about gas prices, gas limits or stuck transactions."}],p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,"Sequence Wallet gives you a friendly, non-custodial wallet for your users with multi-chain support and seamless integration."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/wallet-screen.png"})),(0,a.kt)("p",null,"Most wallets for Ethereum have a single private key that has full control over a wallet, i.e. an Externally Owned Account (EOAs).\nHowever, a Sequence wallet is a Smart Contract that is deployed on the blockchain and which can be controlled by multiple private keys.\nThese keys are meant to be controlled by the wallet owner and provide added security since more than one of these keys would need to be\ncompromised for the wallet to be compromised."),(0,a.kt)(o.Z,{items:u,mdxType:"CardList"}))}m.isMDXComponent=!0}}]);