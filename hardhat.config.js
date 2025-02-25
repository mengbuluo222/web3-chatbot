require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config(); // 添加这行

module.exports = {
  solidity: '0.8.18',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    linea: {
      url: 'https://rpc.goerli.linea.build', 
      chainId: 59140,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      gasPrice: 100000000, // 设置合适的gasPrice
    },
  },
};
