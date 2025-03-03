import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [balance, setBalance] = useState(null);
  const [signer, setSigner] = useState(null);

  // 初始化 provider 和监听器
  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          setProvider(provider);

          // 获取当前链ID
          const network = await provider.getNetwork();
          setChainId(network.chainId);

          // 检查是否已经连接
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            const account = accounts[0];
            setAccount(account.address);
            
            // 获取余额
            const balance = await provider.getBalance(account.address);
            setBalance(ethers.formatEther(balance));

            // 获取 signer
            const signer = await provider.getSigner();
            setSigner(signer);
          }

          // 监听账户变化
          window.ethereum.on('accountsChanged', handleAccountsChanged);
          
          // 监听链变化
          window.ethereum.on('chainChanged', handleChainChanged);

        } catch (err) {
          setError(err.message);
        }
      } else {
        setError('请安装 MetaMask 钱包');
      }
    };

    initProvider();

    // 清理函数
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [account]);

  // 处理账户变化
  const handleAccountsChanged = async (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      if (provider) {
        const balance = await provider.getBalance(accounts[0]);
        setBalance(ethers.formatEther(balance));
        const signer = await provider.getSigner();
        setSigner(signer);
      }
    } else {
      // 用户断开了所有账户
      handleDisconnect();
    }
  };

  // 处理链变化
  const handleChainChanged = async (newChainId) => {
    setChainId(newChainId);
    // 重新初始化 provider
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
      if (account) {
        const balance = await provider.getBalance(account);
        setBalance(ethers.formatEther(balance));
        const signer = await provider.getSigner();
        setSigner(signer);
      }
    }
  };

  // 连接钱包
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('请安装 MetaMask 钱包');
      }

      // 请求用户连接
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        
        // 获取并设置链ID
        const chainId = await window.ethereum.request({ 
          method: 'eth_chainId' 
        });
        setChainId(chainId);

        // 获取并设置余额
        if (provider) {
          const balance = await provider.getBalance(accounts[0]);
          setBalance(ethers.formatEther(balance));
          const signer = await provider.getSigner();
          setSigner(signer);
        }

        // 保存连接状态
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletAccount', accounts[0]);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // 断开连接
  const disconnectWallet = async () => {
    
    try {
      // 清除状态
      setAccount(null);
      setChainId(null);
      setBalance(null);
      setSigner(null);
      setError(null);

      // 清除本地存储
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('walletAccount');
      
      // 触发全局状态更新
      window.dispatchEvent(new Event('wallet_disconnected'));
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // 切换网络
  const switchNetwork = async (chainId) => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.toQuantity(chainId) }],
      });
    } catch (err) {
      // 如果网络不存在，则添加网络
      if (err.code === 4902) {
        await addNetwork(chainId);
      } else {
        setError(err.message);
        throw err;
      }
    }
  };

  // 添加网络
  const addNetwork = async (chainId) => {
    try {
      const networkParams = {
        59144: {
          chainId: ethers.toQuantity(59144),
          chainName: 'Linea Mainnet',
          nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://linea-rpc.publicnode.com'],
          blockExplorerUrls: ['https://lineascan.build'],
        },
        // 可以添加其他网络
      };

      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkParams[chainId]],
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return {
    account,
    chainId,
    balance,
    error,
    provider,
    signer,
    connectWallet,
    disconnectWallet,
    switchNetwork,
    addNetwork,
  };
};