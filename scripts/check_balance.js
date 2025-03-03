const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  console.log("Signers:", signers);

  if (signers.length === 0) {
    console.error("No signers found. Please check your configuration.");
    return;
  }

  const [deployer] = signers;
  console.log("Checking balance for account:", deployer.address);

  if (typeof deployer.getBalance !== 'function') {
    console.error("deployer.getBalance is not a function. deployer object:", deployer);
    return;
  }

  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });