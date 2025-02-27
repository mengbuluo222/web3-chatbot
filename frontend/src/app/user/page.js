'use client'
import React, { useState} from 'react'
import { Typography, Card, Avatar, Row, Col, Statistic, Divider } from 'antd'
const { Title } = Typography;

export default function User() {
  const [user, setUser] = useState({
    num: 100,
    name: 'username'
  })
  return (
    <div>
       <Title level={3}>User</Title>
       <Card>
          <div className="flex items-center justify-between">
            <div className="flex items-center w-1/3">
              <Avatar size={64}  />
              <div className="ml-4">
                <Title level={4}>Username</Title>
                <div className="flex items-center space-x-4">
                  <p>{user.num}<span className="text-[#999]">原创</span></p>
                  <p>{user.num}<span className="text-[#999]">粉丝</span></p>
                </div>
              </div>
            </div>
            
            <Row className="w-2/3" gutter={16}>
              <Col className="flex items-center" span={8}>
                <Divider className="h-full pl-3" type="vertical" />
                <Statistic title="Active Users" value={112893} />
              </Col>
              <Col className="flex items-center" span={8}>
                <Divider className="h-full pl-3" type="vertical" />               
                <Statistic title="Active Users" value={112893} />
              </Col>
              <Col className="flex items-center" span={8}>
                <Divider className="h-full pl-3" type="vertical" />        
                <Statistic title="Active Users" value={112893} />
              </Col>
            </Row>
          </div>
       </Card>
    </div>
  )
}
