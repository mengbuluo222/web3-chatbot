// src/app/components/Navigation.js
'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, theme } from 'antd';
import { 
  BarChartOutlined, 
  VideoCameraOutlined, 
  BookOutlined,
  UserOutlined,
  BulbOutlined,
  UploadOutlined, 
  HomeOutlined 
} from '@ant-design/icons';

export default function Navigation() {
  const handleMenuClick = (e) => {
    console.log('click ', e);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Menu
      style={{
        background: colorBgContainer,
      }}
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={handleMenuClick}
      items={[
        {
          key: 'index',
          icon: <HomeOutlined />,
          label: <Link href="/">首页</Link>,
        },
        {
          key: 'market-analysis',
          icon: <BarChartOutlined />,
          label: <Link href="/market">市场分析</Link>,
        },
        {
          key: 'learning-center',
          icon: <BulbOutlined />,
          label: <Link href="/learning">学习中心</Link>,
        },
        {
          key: 'user-center',
          icon: <UserOutlined />,
          label: <Link href="/user">用户中心</Link>,
        },
        {
          key: 'blog',
          icon: <BookOutlined />,
          label: <Link href="/blog">博客</Link>,
        },
      ]}
    />
  );
}