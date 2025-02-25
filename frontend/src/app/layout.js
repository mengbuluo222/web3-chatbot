'use client'
import Navigation from './components/Navigation';
import './globals.css';
import React, { useState } from 'react';
import { Button, Layout, theme, Avatar, Dropdown } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import logo from '../static/logo.png';
const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
const RootLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [ url, setUrl ] = useState('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg');
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
                        <Dropdown
                          menu={{
                            items,
                          }}
                          trigger={['click']}
                          placement="bottom"
                          arrow={{
                            pointAtCenter: true,
                          }}
                        >
                          {/* <Button>bottomRight</Button> */}
                          <Avatar className="mr-2" src={url} />
                        </Dropdown>
                       
                        <Button color="primary" variant="outlined">connect</Button>
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