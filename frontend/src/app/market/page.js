'use client'
import React, { useState } from 'react'
import { Input, Space, Card, Row, Col, Typography, Table } from 'antd';
const { Title } = Typography;

export default function Market() {
  const columns = [
    {
      title: 'symbol',
      dataIndex: 'symbol',
      key: 'symbol'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'change',
      dataIndex: 'change',
      key: 'change',
    },
    {
      title: 'score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: '1',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    {
      key: '2',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    {
      key: '3',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    {
      key: '4',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    {
      key: '5',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    {
      key: '6',
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
  ]);
  return (
    <div>
      <Title level={3}>Market</Title>
      <Table className='' columns={columns} dataSource={data}></Table>
    </div>
  )
}
