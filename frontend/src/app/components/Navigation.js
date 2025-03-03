// src/app/components/Navigation.js
'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, theme } from 'antd';

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
        // {
        //   key: 'index',
        //   label: <Link href="/">Home</Link>,
        // },
        // {
        //   key: 'market-analysis',
        //   label: <Link href="/market">Smart Market</Link>,
        // },
        // {
        //   key: 'learning-center',
        //   label: <Link href="/learning">AI Recommendation</Link>,
        // },
        // {
        //   key: 'blog',
        //   label: <Link href="/blog">博客</Link>,
        // },
        {
          key: 'user-center',
          label: <Link href="/user">User</Link>,
        }
      ]}
    />
  );
}