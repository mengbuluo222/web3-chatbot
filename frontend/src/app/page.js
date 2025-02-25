// app/page.js
'use client';
import { Input, Space, Card, Row, Col, Typography, Table } from 'antd';
const { Search } = Input;  // 正确导入 Search 组件
import { useEffect, useState } from 'react';

const { Title } = Typography;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Home = () => {
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
      symbol: 'BRDG',
      name: 'Bridge Investment Group Holdings Inc.',
      price: 10.6,
      change: 2.68,
      score: 9,
    },
    // Add more data as needed
  ]);

  return (
    <div className="">
      <div className="search-bar flex flex-col justify-center items-center mt-8 mb-7">
        <Title level={2}>Ask. Research. Invest Smarter</Title>
        <Search
          size="medium"
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: '50%'
          }}
        />
      </div>
      <div className="market mt-3">
        <div className='flex justify-between'>
          <Title level={3}>News<span className='text-sm font-normal pl-2'>Updates at: 16:00:00 EST</span></Title>
          <a href="#">More</a>
        </div>
        
        <Table className='border-1' columns={columns} dataSource={data} pagination={false}></Table>
      </div>
      <div className="news"></div>
    </div>
  );
};

export default Home;