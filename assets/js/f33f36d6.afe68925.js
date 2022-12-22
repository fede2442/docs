"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},o="Authenticate Users with Message Signature",i={unversionedId:"wallet/guides/auth-address",id:"wallet/guides/auth-address",title:"Authenticate Users with Message Signature",description:"Ask for the wallet address",source:"@site/docs/03-wallet/04-guides/04-auth-address.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/auth-address",permalink:"/wallet/guides/auth-address",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/04-auth-address.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Connect Wallet",permalink:"/wallet/guides/connect-wallet"},next:{title:"Signing & Verifying Messages",permalink:"/wallet/guides/sign-message"}},l={},c=[{value:"Ask for the wallet address",id:"ask-for-the-wallet-address",level:2},{value:"Authenticate wallet",id:"authenticate-wallet",level:2},{value:"Authenticate wallet server-side",id:"authenticate-wallet-server-side",level:2}],u={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authenticate-users-with-message-signature"},"Authenticate Users with Message Signature"),(0,r.kt)("h2",{id:"ask-for-the-wallet-address"},"Ask for the wallet address"),(0,r.kt)("p",null,"To get the user's Sequence wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\nconst address = await wallet.getAddress()\nconsole.log(address)\n")),(0,r.kt)("h2",{id:"authenticate-wallet"},"Authenticate wallet"),(0,r.kt)("p",null,"In many cases, you'll want your users to connect and then verify they do control this wallet address. Applications typically do this by asking the user\nto sign a message with their wallet, and then verify the signature from the user to ensure its integrity."),(0,r.kt)("p",null,"As this is such a common workflow, Sequence can automatically authenticate the account address at the same time\nwhile the user is prompt to connect their wallet to your dapp. This allows the user experience to be simpler and\nmore seamless."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = sequence.getWallet()\n\nconst connectDetails = await wallet.connect({\n  app: 'Your Dapp name',\n  authorize: true // <---<<< this will automatically sign+verify a EIP712 message when user clicks \"Connect\"\n})\n")),(0,r.kt)("p",null,"It will look like this to your users:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Sequence on-demand sign in, connect",src:n(3024).Z,width:"304",height:"504"})),(0,r.kt)("p",null,"In the above example, we pass ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize: true")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," function, which will automatically have the user\nsign a ",(0,r.kt)("strong",{parentName:"p"},"EIP712 signed message")," to prove their identity. This allows you to then easily authenticate the connected\nwallet address with absolutely certainty."),(0,r.kt)("p",null,"You can find the signed message proof returned in ",(0,r.kt)("inlineCode",{parentName:"p"},"connectDetails.proof"),", which is an EIP712 signed object using\na simple a convention from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/ethauth.js"},"ethauth"),". NOTE: EIP712 allows you to use an actual object for\nsigning instead of just a plain-text string."),(0,r.kt)("h2",{id:"authenticate-wallet-server-side"},"Authenticate wallet server-side"),(0,r.kt)("p",null,"The above example demonstrates how to connect and verify the user's identity in your dapp on the client-side,\nbut if you'd like to authenticate the Sequence authorization proof on your server, then you can do so with the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ethAuth = new ETHAuth()\nawait ethAuth.configJsonRpcProvider('https://polygon-mainnet.infura.io/v3/<your infura key here>')\n\ntry {\n  const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString)\n  console.log('welcome user address', decodedProof.address)\n\n} catch (err) {\n  console.log('proof is invalid -- do not trust the provided account address')\n}\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/go-sequence"},"Go Sequence SDK")," on using Sequence in your Go applications."),(0,r.kt)("p",null,"If your server is written in a language other then Javascript/Typescript or Go, all you have to do is validate\nthe signature with ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP1271, the standard method for validating signed messages for a smart wallet"),"."),(0,r.kt)("p",null,"As always, if you have any questions or require help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/sequence"},"Discord"),"."))}d.isMDXComponent=!0},3024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/authorize-connect-b90f39af7732b3df5d91b7b83947c5cf.png"}}]);