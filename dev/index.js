import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar } from '../src/index.js';

// 组件依次这样定义下去
let components = [
  (() => {
    let onChange = checked =>  {
      console.log(checked);
    };
    return <Switch onChange={onChange} defaultChecked={true} />;
  })(),
  (() => {
    let data = [
      { name: '中国' },
      { name: '美国' },
      { name: '日本' }
    ];
    return <Tab data={data} defaultActive={'美国'} />;
  })(),
  (() => {
    let onChange = value =>  {
      console.log(value);
    };
    return <Num min={0} max={99} defaultValue={3} onChange={onChange} />;
  })(),
  (() => {
    let LoadingDemo = React.createClass({
      getDefaultProps() {
        return {
          content: 'loading...',
          closeBtn: true,
          needMask: false
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      show() {
        this.setState({visible: true});
      },
      hide() {
        this.setState({visible: false});
      },
      render() {
        return (
          <div>
            <span onClick={this.show} className="btn-secondary mar_r_10">showLoading</span>
            <span onClick={this.hide} className="btn-secondary">hideLoading</span>
            <Loading visible={this.state.visible} {...this.props} />
          </div>
        )
      }
    })
    return <LoadingDemo />;
  })(),
  (() => {
    let ToastDemo = React.createClass({
      getDefaultProps() {
        return {
          content: '输入的内容有误',
          hideTime: 1000
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      show() {
        this.setState({visible: true});
      },
      render() {
        return (
          <div>
            <span onClick={this.show} className="btn-secondary">showToast</span>
            <Toast visible={this.state.visible} {...this.props} />
          </div>
        )
      }
    })
    return <ToastDemo />;
  })(),
  (() => {
    let AlertDemo = React.createClass({
      getDefaultProps() {
        return {
          title: '标题',
          content: '确定删除？',
          btns: [{
            name: '取消',
            handler(btn) {
              console.log('取消');
              this.hide();
            }
          }, {
            name: '确定',
            handler(btn) {
              console.log('确定');
              this.hide();
            }
          }],
          maskToHide: false
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      show() {
        this.setState({visible: true});
      },
      render() {
        return (
          <div>
            <span onClick={this.show} className="btn-secondary">showAlert</span>
            <Alert visible={this.state.visible} {...this.props} />
          </div>
        )
      }
    })
    return <AlertDemo />;
  })(),
  (() => {
    let LayerListDemo = React.createClass({
      getDefaultProps() {
        return {
          items: [{
            name: '中国'
          }, {
            name: '美国'
          }, {
            name: '俄罗斯'
          }],
          cancelName: '取消',
          itemAction(item) {
            console.log(item.name);
            this.hide();
          },
          cancelAction() {
            console.log('取消');
            this.hide();
          }
        };
      },
      getInitialState() {
        return {
          visible: false
        };
      },
      show() {
        this.setState({visible: true});
      },
      render() {
        return (
          <div>
            <span onClick={this.show} className="btn-secondary">showLayerList</span>
            <LayerList visible={this.state.visible} {...this.props} />
          </div>
        )
      }
    })
    return <LayerListDemo />
  })(),
  (() => {
    // 巴拉巴拉
    return <Calendar />;
  })(),
];

// 遍历且render
let insertComponent = component => {
  let div = document.createElement("div");
  div.style.marginBottom = '10px';
  ReactDOM.render(component, document.body.appendChild(div));
}

components.forEach(component => insertComponent(component))