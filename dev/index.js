import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar } from '../src/index.js';

// 组件依次这样定义下去
let components = [
  (() => {
    let props = {
      defaultChecked: true,
      onChange(checked) {
        console.log(checked);
      }
    };
    return <Switch {...props} />;
  })(),
  (() => {
    let props = {
      data: [
        { name: '中国' },
        { name: '美国' },
        { name: '日本' }
      ],
      defaultActive: '美国',
      onChange(item) {
        console.log(item.name);
      }
    };
    return <Tab {...props} />;
  })(),
  (() => {
    let props = {
      min: 0,
      max: 99,
      defaultValue: 3,
      onChange(value) {
        console.log(value);
      }
    };
    return <Num {...props} />;
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
    let props =  {
      selected: new Date(2015, 9, 13),
      itemAction(date, format) {
        console.log(date, format(date, 'YYYY年M月D日'));
      },
      specialDates: [
        {
          date: { // 阳历
            '0101': '元旦',
            '0214': '情人节',
            '0501': '劳动',
            '0601': '儿童节',
            '0910': '教师节',
            '1001': '国庆',
            '1225': '圣诞'
          },
          handler(date, name) {
            let matchs = date.match(/\d{2}/g);

            return {
              month: matchs[0],
              day: matchs[1],
              render(dayComponent) {
                return (
                  <span>{dayComponent}<i>{name}</i></span>
                )
              }
            }
          }
        },
        {
          date: { // 阴历
            '20150219': '春节',
            '20150305': '元宵',
            '20150405': '清明',
            '20150620': '端午',
            '20150927': '中秋',
            '20160208': '春节',
            '20160222': '元宵',
            '20160404': '清明',
            '20160609': '端午',
            '20160915': '中秋',
            '20170128': '春节',
            '20170211': '元宵',
            '20170404': '清明',
            '20170530': '端午',
            '20171004': '中秋',
            '20180216': '春节',
            '20180302': '元宵',
            '20180405': '清明',
            '20180618': '端午',
            '20180924': '中秋'
          },
          handler(date, name) {
            let matchs = date.match(/(\d{4})(\d{2})(\d{2})/);

            return {
              year: matchs[1],
              month: matchs[2],
              day: matchs[3],
              render(dayComponent) {
                return (
                  <span>{dayComponent}<i>{name}</i></span>
                )
              }
            }
          }
        },{
          date: { // 休
            '20150101': '元旦',
            '20150102': '元旦',
            '20150103': '元旦',

            '20150218': '春节',
            '20150219': '春节',
            '20150220': '春节',
            '20150221': '春节',
            '20150222': '春节',
            '20150223': '春节',
            '20150224': '春节',

            '20150404': '清明',
            '20150405': '清明',
            '20150406': '清明',

            '20150501': '劳动节',
            '20150502': '劳动节',
            '20150503': '劳动节',

            '20150620': '端午节',
            '20150621': '端午节',
            '20150622': '端午节',

            '20150926': '中秋节',
            '20150927': '中秋节',

            '20151001': '国庆',
            '20151002': '国庆',
            '20151003': '国庆',
            '20151004': '国庆',
            '20151005': '国庆',
            '20151006': '国庆',
            '20151007': '国庆'
          },
          handler(date, name) {
            let matchs = date.match(/(\d{4})(\d{2})(\d{2})/);

            return {
              year: matchs[1],
              month: matchs[2],
              day: matchs[3],
              render(dayComponent) {
                return (
                  <span>{dayComponent}<i className="icon-calendar-holiday">休</i></span>
                )
              }
            }
          }
        }, {
          date: { // 班
            '20150104': '元旦_班',
            '20150215': '除夕班',
            '20150228': '春节班',
            '20151010': '国庆_班'
          },
          handler(date, name) {
            let matchs = date.match(/(\d{4})(\d{2})(\d{2})/);

            return {
              year: matchs[1],
              month: matchs[2],
              day: matchs[3],
              render(dayComponent) {
                return (
                  <span>{dayComponent}<i className="icon-calendar-work">班</i></span>
                )
              }
            }
          }
        }
      ]
    };
    return <Calendar {...props} />
  })(),
];

// 遍历且render
let insertComponent = component => {
  let div = document.createElement("div");
  div.style.marginBottom = '10px';
  ReactDOM.render(component, document.body.appendChild(div));
}

components.forEach(component => insertComponent(component))