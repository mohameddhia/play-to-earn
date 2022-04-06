/* eslint-disable */
const { ethers } = require("hardhat");
const hre = require("hardhat");
async function main() {
  const Game = await hre.ethers.getContractFactory("GameContract");
  const game = await Game.deploy();
  await game.deployed();

  const Marketplace = await hre.ethers.getContractFactory("MarketPlace");
  const marketPlace = await Marketplace.deploy();
  await marketPlace.deployed();

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(marketPlace.address);
  await nft.deployed();

  const EYtoken = await hre.ethers.getContractFactory("EYToken");
  console.log("EYToken Deploying....")
  const token = await EYtoken.deploy();
  await token.deployed();

  console.log("NFT deployed to", nft.address);
  console.log("Game deployed to", game.address);
  console.log("MarketPlace Deployed to", marketPlace.address);
  console.log("EYTOKEN deployed to ", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });