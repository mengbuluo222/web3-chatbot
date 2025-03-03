import { ethers } from 'ethers'; // 引入ethers.js
export async function getContract(){
  // 连接到以太坊钱包
  const provider = new ethers.BrowserProvider(window.ethereum);
  // 获取签名者
  const signer = await provider.getSigner();
  console.log(signer, 'signer');
  
}