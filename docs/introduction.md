---
sidebar_position: 1
slug: /
---

# Introduction

Sequence is an Ethereum wallet built to offer users and developers a seamless experience for Ethereum-compatible networks.

In more technical terms: Sequence is a combination of technologies built around Ethereum protocols to ultimately offer a user experience to Ethereum networks that is easier to use, more capable and also more secure.

Usually, security and usability are opposing forces, which is the great challenge and why Sequence has taken so long to develop.

What makes Sequence special and unique is that as opposed to the majority of wallets for Ethereum that have just a single private key that has full control over a wallet (aka an EOA -- Externally Owned Account), a Sequence account (aka wallet) is a Smart Contract that is deployed on the blockchain.

People call these ***Smart Accounts*** or ***Contract Account***, where instead of a single/native private key being the only permissible key to manage an account, [a Sequence Wallet smart contract](https://github.com/0xsequence/wallet-contracts) is a new type of account primitive that allows you to have multiple keys which control a single account.

Now, in practice, if you lose your phone, you can sign in from another device and "log out" that device remotely so if someone finds your phone and extracts that key, they will have just retrieved an invalid/expired key.

Under the hood, the Sequence Wallet contract is a weighted multisig threshold wallet -- similar to something like Gnosis for those familiar, but it's designed with different application/intent and has a bunch of other designs too. Some other cool features of Sequence Wallet, and what the powers of a Smart Contract Wallet enable us:

1. Sequence wallet's can be counterfactually deployed, --which is a fancy way of saying you only deploy it when you need it, but you can start receiving funds right away

2. Sequence wallet's derive the same address across all Ethereum-compatible networks, which means you can receive funds on a network that you've never accessed, and once you sign in, only you will be able to access those funds

3. Sequence wallet's support meta-transactions as a standard feature, which makes sending transactions much easier. You may fire and forget, not worry about gas prices, or nonces, you can even batch multiple transactions into a single request, execute transactions in parallel

4. Sequence meta-transactions allow a user to pay gas fees in a variety of tokens such as ETH, USDC, DAI and others. For example, for EOA wallets like Metamask and Coinbase, users on the Polygon network must have MATIC tokens in their wallets to send any transactions. But with Sequence Wallet, users don't have to have any MATIC tokens at all, instead they "sign" and "relay" their transactions through the Sequence Relayer service which will pay the MATIC gas on the user's behalf, and the user's relay transaction will automatically substitute the MATIC gas fee for one of ETH, USDC, or DAI (a users choice). This works like this across all networks, so a user only ever needs USDC and can pay for fees across all networks... a single gas token for any network. Keep your ETH, spend your USDC