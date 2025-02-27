'use client'
import React, { useState } from 'react'
import { Input, Space, Card, Row, Col, Typography, Table } from 'antd';
import Tabs from '../components/Tabs';
const { Title } = Typography;

export default function Blog() {
  const items = [
    {
      key: '1',
      label: '',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const [activeKey, setActiveKey] = useState('1');

  const [data, setData] = useState([
    {
      key: '1',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
    {
      key: '2',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
    {
      key: '3',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
    {
      key: '4',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
    {
      key: '5',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
    {
      key: '6',
      url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      title: 'Warren Buffett’s Q4 Moves Show Strategic Insights—Stay Ahead with Kavout’s AI Tools',
      time: 'Feb 12,2025'
    },
  ]);

  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };
  const filteredData = data.filter(item => item.key.startsWith(activeKey));

  return (
    <div>
      <Title level={3}>Blog</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Row gutter={16}>
        {filteredData.map(item => {
          return (
            <Col span={6} key={item.key}>
              <Card
              className="mb-5"
              cover={<img className="card-image" alt="example" src={item.url}></img>}
              >
                <h3 className="font-bold title-ellipsis">{item.title}</h3>
                <p className="text-xs mt-3 text-[#999]">{item.time}</p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
