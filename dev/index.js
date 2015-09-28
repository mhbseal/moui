import React from 'react/addons';
import { Switch, Tab, Num } from '../src/index.js';

// 组件依次这样定义下去
let components = [
  (() => <Switch />)(),
  (() => {
    let data = [
      { key: 1, name: '中国' },
      { key: 2, name: '美国' },
      { key: 3, name: '日本' }
    ];
    return <Tab data={data} defaultActiveKey={2} />;
  })(),
  (() => <Num min={0} max={99} defaultValue={3} />)(),
  //(() => {
  //
  //})()
];

let insertComponent = component => React.render(component, document.body.appendChild(document.createElement("div")));

components.forEach(component => insertComponent(component))