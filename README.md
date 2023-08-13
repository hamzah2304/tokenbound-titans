# tokenbound-titans

Overall Winner at [ETHGlobal Waterloo 2023](https://ethglobal.com/showcase/tokenbound-titans-5w6oq)

Project Description
https://www.youtube.com/channel/UCHL7Iz9Sb4hNGwdBXJDDrpA

This video is our demo!

An implementation of ERC-6551 for NPC gaming in combination with dynamic generative NFTs. Players are the proud owners of unique NFTs, each owning different abilities and characteristics.

The gameplay revolves around battles between these NPCs where players can strategically bet their tokens against each other in a digital arena. The algorithm for computing the outcome of the battle is off chain and can be verified using a ZK-proof.

Victory in battles rewards players with the ability for their NPCs to level up, which enhances the existing attributes of Health, Attack, Speed and Armour. A natural extension is to also enable unlocking of new abilities and combos for their NFTs to play. As NFTs level up, they become stronger and more versatile. This progression system adds depth and longevity to the gameplay, motivating players to strategize, adapt, and continuously improve their NFTs to dominate the gaming landscape.

How it's Made
The project used the new ERC-6551 implementation to associate a wallet with our ERC-721 NFTs. We used this to create NPCs in an idle battler environment with inventories which hold combat items. Specifically, an NPC can own other NFTs which represent such items. Furthermore, we implemented a betting system with an on-chain escrow chain such that a player can bet on victory before they are matched with an opponent. Again, it is the NPC which owns the relevant staked token in its inventory directly, not the player.

More nitty-gritty: the NFTs representing the NPCs are dynamic such that when an NPC levels up its statistics change and its pictorial representation upgrades. We did this by pointing to different IPFS locations and associated it with different levels.
