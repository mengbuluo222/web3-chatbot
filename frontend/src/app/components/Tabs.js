import React from 'react';
import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};

const App = ({items}) => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;