'use client'
import Navigation from './components/Navigation';
import './globals.css';
import React, { useState } from 'react';
import { Button, Layout, theme, message } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import logo from '../static/logo.png';
import UserCenter from '@/app/components/UserCenter';
import { ethers } from 'ethers'; // 引入ethers.js

const { Header, Content, Footer, Sider } = Layout;

const RootLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [messageApi, contextHolder] = message.useMessage();
    // 存储用户钱包地址
    const [account, setAccount] = useState(null);

    // 添加连接MetaMask的函数
    const connectWallet = async () => {      
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(accounts => {
            setAccount(accounts[0]);
          })
      } else {
        messageApi.open({
          type: 'error',
          content: 'MetaMask is not installed',
        });
      }
    };
   
    return (
        <html lang="en">
            <body>
                <Layout
                  style={{
                    minHeight: '100vh',
                  }}
                >
                  <Sider collapsible theme='light' collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                  <div className={`logo flex items-center mt-3 mb-2 ml-5 ${collapsed ? 'justify-center' : 'justify-start'}`}>
                      {/* <img src="/logo.png" alt="logo" /> */}
                      <Image src={logo} alt="logo" width={24} height={24} />
                      <span className="ml-2 font-bold">{collapsed ? '' : 'ChatbotDEFI'}</span>
                    </div>
                    <Navigation />
                  </Sider>
                  <Layout>
                    <Header
                      style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                          fontSize: '16px',
                          width: 64,
                          height: 64,
                        }}
                      />
                      <div className="flex justify-end items-center h-full mr-2">
                        {/* <Avatar className="mr-2" src={<img src={url} alt="avatar" />} /> */}
                        
                        {account && <UserCenter />}
                        {!account && <Button color="primary" variant="outlined" onClick={connectWallet}>connect</Button>}
                      </div>
                    </Header>
                    <Content
                      style={{
                        margin: '0 16px',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          marginTop: '20px',
                          padding: '24px',
                          background: colorBgContainer,
                          borderRadius: borderRadiusLG,
                        }}
                      >
                       { children }
                      </div>
                    </Content>
                    <Footer
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                  </Layout>
                </Layout>
            </body>
        </html>
    );
};

export default RootLayout;