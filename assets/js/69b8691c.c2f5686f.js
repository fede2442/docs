"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},s="Building Relaying Server with Sequence",i={unversionedId:"relayer/building-relaying-server",id:"relayer/building-relaying-server",title:"Building Relaying Server with Sequence",description:"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users",source:"@site/docs/06-relayer/02-building-relaying-server.mdx",sourceDirName:"06-relayer",slug:"/relayer/building-relaying-server",permalink:"/relayer/building-relaying-server",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/06-relayer/02-building-relaying-server.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Relayer",permalink:"/relayer"},next:{title:"Sequence Games SDK",permalink:"/games-sdk"}},c={},l=[{value:"Nodejs Server",id:"nodejs-server",level:3},{value:"Parallel Transactions",id:"parallel-transactions",level:2}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-relaying-server-with-sequence"},"Building Relaying Server with Sequence"),(0,o.kt)("p",null,"With Sequence, you can create a smart contract wallet your server can use to dispatch transactions for your users\nwithout you having to be worried about transaction speed, throughput and re-orgs."),(0,o.kt)("admonition",{title:"Sequentual Transactions",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, Sequence transactions will be executed sequentially. ")),(0,o.kt)("h3",{id:"nodejs-server"},"Nodejs Server"),(0,o.kt)("p",null,"Your server will need an EOA wallet that will be able to sign messages. It will be the owner of your server-side Sequence\nwallet which will be used to dispatch transactions."),(0,o.kt)("p",null,"This Sequence wallet should have the correct ownership at your contract level, not the EOA.\nAlso, the Sequence wallet should be sufficiently funded in order to pay fees needed by the relayer to dispatch your transactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { RpcRelayer } from '@0xsequence/relayer'\nimport { Wallet } from '@0xsequence/wallet'\nimport { ethers } from 'ethers'\n\n// Get a provider\nconst provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/polygon')\n\n// Create your server EOA\nconst walletEOA = new ethers.Wallet(serverPrivateKey, provider)\n\n// Create your rpc relayer instance with relayer node you want to use\nconst relayer = new RpcRelayer({url: 'https://polygon-relayer.sequence.app', provider: provider})\n\n// Create your Sequence server wallet, controlled by your server EOA, and connect it to the relayer\nconst wallet = (await Wallet.singleOwner(walletEOA)).connect(provider, relayer)\n\n// Craft your transaction\nconst erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [senderAddress, recipientAddress, id]\n)\n\nconst txn = {\n  to: erc721TokenAddress,\n  data\n}\n\n// Request the possible fee options the relayer will accept for this transaction\nconst [config, context] = await Promise.all([wallet.getWalletConfig(), wallet.getWalletContext()])\nconst { options, quote } = await relayer.getFeeOptions(config[0], context, txn /* , txn2, txn3, etc... */)\n\n\n\n// Choose a fee from the list of options returned by the relayer\n// MATIC is native to Polygon and needs to be handled differently than other ERC-20 tokens like USDC\n\n// === vvv To pay the fee in native MATIC: vvv ===\nconst option = options.find(option => option.token.symbol === 'MATIC')\nif (!option) {\n  throw Error(`relayer doesn't support MATIC fees`)\n}\n\n// Craft the MATIC fee payment transaction\n// revertOnError: true is required for fee payments\nconst feeTxn = {\n  to: option.to,\n  value: option.value,\n  gasLimit: option.gasLimit,\n  revertOnError: true\n}\n// === ^^^ MATIC fee ^^^ ===\n\n\n\n// === vvv To pay the fee in USDC: vvv ===\nconst option = options.find(option => option.token.symbol === 'USDC')\nif (!option) {\n  throw Error(`relayer doesn't support USDC fees`)\n}\n\nconst erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Craft the USDC fee payment transaction\n// revertOnError: true is required for fee payments\nconst feeTxn = {\n  to: option.token.contractAddress,\n  gasLimit: option.gasLimit,\n  data: erc20Interface.encodeFunctionData('transfer', [option.to, option.value]),\n  revertOnError: true\n}\n// === ^^^ USDC fee ^^^ ===\n\n\n\n// Send your transaction with the fee and quote to the relayer for dispatch\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransaction([txn, feeTxn], undefined, undefined, quote)\n\n// Wait for transaction to be mined\nconst txnReceipt = await txnResponse.wait()\n\n// Check if transaction was successful \nif (txnReceipt.status != 1) {\n  console.log(`Unexpected status: ${txnReceipt.status}`)\n}\n\n")),(0,o.kt)("h2",{id:"parallel-transactions"},"Parallel Transactions"),(0,o.kt)("p",null,"If you want to send multiple independent transactions without needing to batch them, you can also send them in distinct nonce spaces.\nUsing distinct nonce spaces for your transactions signals to the relayer that there's no dependency between them and that\nthey can be executed on-chain in any order."),(0,o.kt)("p",null,"This allows the transactions to be dispatched immediately in an unbuffered way without having to wait for a full batch.\nHere is an example of how to do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Import sequence nonce encoding function\nimport { encodeNonce } from '@0xsequence/transactions';\n\n// Generate random nonce spaces with ~0% probability of collision\nconst randomNonceSpace1 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\nconst randomNonceSpace2 = ethers.BigNumber.from(ethers.utils.hexlify(ethers.utils.randomBytes(20)))\n\n// Generate transactions\nconst txn1 = {\n  to: tokenContract.address,\n  data: erc20Interface.encodeFunctionData(\n    'transfer', [recipient1, amount1]\n  ),\n  nonce: encodeNonce(randomNonceSpace1, 0)\n}\n\nconst txn2 = {\n  to: tokenContract.address,\n  data: erc20Interface.encodeFunctionData(\n    'transfer', [recipient2, amount2]\n  ),\n  nonce: encodeNonce(randomNonceSpace2, 0)\n}\n\n// Dispatch transactions, which can now be executed in parallel\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransactionBatch([txn1, txn2])\n")),(0,o.kt)("p",null,"If batching transactions is not a problem for your use-case, you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"await signer.sendTransactionBatch(txns)"),".\nYou can read more about batch transactions in ",(0,o.kt)("a",{parentName:"p",href:"/wallet/guides/send-batch-transactions"},"Sending Batched Transactions"),"."))}d.isMDXComponent=!0}}]);