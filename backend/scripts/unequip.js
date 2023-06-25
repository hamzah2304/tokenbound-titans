const { TokenboundClient } = require("@tokenbound/sdk");
const { ethers } = require("hardhat");
require("dotenv").config();

TOKEN_CONTRACT_ADDRESS = "0x184f5e01C8aCab8C40fC68a8B4c408b3e2d17bC7"; // TT
PRIVATE_KEY = process.env.PRIVATE_KEY;
ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const main = async () => {
  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    ALCHEMY_API_KEY
  );
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  const tokenboundClient = new TokenboundClient({ signer, chainId: 5 });

  // Retrieve address of TBA (without creation)
  const tokenBoundAccount = tokenboundClient.getAccount({
    tokenContract: TOKEN_CONTRACT_ADDRESS,
    tokenId: 1,
  });

  console.log(tokenBoundAccount); //0x148065ae43beC6D4C9aA2a75EC5f282553c5a1c8

  // unequip function
  const executedCall = await tokenboundClient.executeCall({
    account: "0x148065ae43beC6D4C9aA2a75EC5f282553c5a1c8", // TBA
    to: "0x120cD09e06055D87a92A432e17D739351ee0168f", // NFT Shield address
    value: "0",
    data: "0x42842e0e000000000000000000000000148065ae43bec6d4c9aa2a75ec5f282553c5a1c8000000000000000000000000968e51108d076a7dce32472bfb3c288fcc35e8450000000000000000000000000000000000000000000000000000000000000002",
  });

  console.log(executedCall); //...
};

main();
