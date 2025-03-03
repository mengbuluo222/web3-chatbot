'use client'
import Navigation from './components/Navigation';
import './globals.css';
import React, { useState, useEffect } from 'react';
import { Button, Layout, theme, message } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import logo from '../static/logo.png';
import UserCenter from '@/app/components/UserCenter';
import { getContract } from '@/utils/contract';
import { useWallet } from '@/hooks/useWallet';


const { Header, Content, Footer, Sider } = Layout;

const RootLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [messageApi, contextHolder] = message.useMessage();
    
    const { account, error, connectWallet, disconnectWallet } = useWallet();

    // 添加事件处理函数
    const handleConnect = async () => {
      try {
        await connectWallet();
        messageApi.success('钱包连接成功！');
      } catch (err) {
        messageApi.error('连接失败：' + err.message);
      }
    };



    useEffect(() => {
      if (error) {
        messageApi.error(error);
      }
    }, [error, messageApi]);

    // 监听账户状态变化
    useEffect(() => {
      console.log('当前钱包状态:', account);
    }, [account]);

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
                      <span className="ml-2 font-bold">{collapsed ? '' : 'Chatbot'}</span>
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
                        
                        {/* {account && (
                          <>
                            <span className="mr-4">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
                            <Button onClick={handleDisconnect}>断开连接</Button>
                            <UserCenter />
                          </>
                        )} */}
                        { account && (<>
                          <span className="mr-4">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
                          <UserCenter /> 
                        </>)}
                        {!account && (
                          <Button type="primary" onClick={handleConnect}>
                            连接钱包
                          </Button>
                        )}
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