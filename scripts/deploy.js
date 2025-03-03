const { ethers } = require("hardhat");

async function main() {
    // 获取部署账户
    const [deployer] = await ethers.getSigners();
    console.log("部署账户地址:", deployer);

    // 部署前检查账户余额
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance));

    // 部署合约
    const MyContract = await ethers.getContractFactory("ChatBot");
    const myContract = await MyContract.deploy();
    console.log("Deploying contract...", MyContract);
    await myContract.waitForDeployment();

    console.log("合约部署成功！地址:", await myContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
