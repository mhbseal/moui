import React from 'react/addons';
import { Switch, Tab } from '../src/index.js';

let data = [
  { key: 1, name: '中国' },
  { key: 2, name: '美国' },
  { key: 3, name: '日本' }
]

// 组件add到这里
let components = [
  <Switch />,
  <Tab data={data} defaultActiveKey={2}/>
];

let insertComponent = component => React.render(component, document.body.appendChild(document.createElement("div")));

components.forEach(component => insertComponent(component))