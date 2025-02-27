import React, { useState } from 'react'
import { Dropdown, Avatar } from 'antd'
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

export default function UserCenter() {
  const [ url, setUrl ] = useState('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg');
  return (
    <div>
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
    </div>
  )
}
