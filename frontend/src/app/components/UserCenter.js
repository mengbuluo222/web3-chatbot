import React, { useState, useEffect } from 'react'
import { Dropdown, Avatar, message } from 'antd'
import { useWallet } from '@/hooks/useWallet';
import Link from 'next/link';

export default function UserCenter() {
  const [ url, setUrl ] = useState('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg');
  const { disconnectWallet, account } = useWallet();
  const [messageApi, contextHolder] = message.useMessage();
  const [disconnectSuccess, setDisconnectSuccess] = useState(false);
  const [disconnectError, setDisconnectError] = useState(null);

  const handleDisconnect = async () => {
    console.log('handleDisconnect', account);
    
    try {
      await disconnectWallet();
      setDisconnectSuccess(true);
    } catch (err) {
      setDisconnectError(err.message);
    }
  };

  useEffect(() => {
    if (disconnectSuccess) {
      messageApi.success('已断开连接');
      setDisconnectSuccess(false); // 重置状态
    }
  }, [disconnectSuccess, messageApi]);

  useEffect(() => {
    if (disconnectError) {
      messageApi.error('断开连接失败：' + disconnectError);
      setDisconnectError(null); // 重置状态
    }
  }, [disconnectError, messageApi]);

  const items = [
    {
      key: '2',
      label: (
        <Link href="/login">设置</Link>
      ),
    },
    {
      key: '3',
      label: (
        <p onClick={handleDisconnect}>断开连接</p>
      ),
    },
  ];

  

  return (
    <div>
      {contextHolder}
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
        <Avatar className="mr-2" src={url} />
      </Dropdown>
    </div>
  )
}
