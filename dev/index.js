import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar } from '../src/index.js';

// 组件依次这样定义下去
let components = [
  //(() => <Switch />)(),
  //(() => {
  //  let data = [
  //    { name: '中国' },
  //    { name: '美国' },
  //    { name: '日本' }
  //  ];
  //  return <Tab data={data} defaultActive={'美国'} />;
  //})(),
  //(() => <Num min={0} max={99} defaultValue={3} />)(),
  //(() => <Loading visible={true} closeBtn={true} content={'loading...'} maskToHide={false} />)(),
  //(() => <Toast visible={true} content={'输入的内容有误'} />)(),
  (() => {
    let AlertDemo = React.createClass({
      getDefaultProps() {
        return {
          title: '标题',
          content: '确定删除？',
          btns: [{
            name: '取消',
            handler() {
              console.log('cancel');
              this.setState({visible: false});
            }
          }, {
            name: '确定',
            handler() {
              console.log('ok');
              this.setState({visible: false});
            }
          }]
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      show() {
        this.setState({
          visible: true
        });
      },
      hide() {
        this.setState({
          visible: false
        });
      },
      render() {
        return (
          <div>
            <p onClick={this.show}>showAlert</p>
            <p onClick={this.hide}>hideAlert</p>
            <Alert visible={this.state.visible} {...this.props} />
          </div>
        )
      }
    })
    return <AlertDemo />;
  })(),
  //(() => <Calendar />)(),
  //(() => <LayerList visible={true} />)(),
];

let insertComponent = component => ReactDOM.render(component, document.body.appendChild(document.createElement("div")));

components.forEach(component => insertComponent(component))