require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
  solidity: '0.8.18',
  networks: {
    linea_testnet: {
      url: 'https://linea-rpc.publicnode.com/', // Linea 测试网 RPC 地址
      chainId: 59144,
      timeout: 20000, // 设置超时时间为 20 秒
      accounts: [process.env.TESTNET_PRIVATE_KEY],
      gasPrice: 200000000, // 0.2 gwei
      gas: 21000 // 标准转账所需最低 gas
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
    // linea_mainnet: {
    //   url: "https://rpc.linea.build", // Linea 主网 RPC 地址
    //   accounts: [process.env.PRIVATE_KEY], 
    //   chainId: 59144, // Linea 主网的链 ID
    // }
  },
};
