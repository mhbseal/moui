import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar, Slider, ImgSlider } from '../src/moUI.js';

// 组件依次这样定义下去（组件使用方法也看这里）
let components = [
  // Switch 默认 false
  (() => {
    let props = {
      defaultChecked: false,
      onChange(checked) {
        console.log(`switch1: ${checked}`);
      }
    };
    return <Switch {...props} />;
  })(),
  // Switch 默认 false，之前操作过为 true
  (() => {
    let props = {
      defaultChecked: false,
      checked: true,
      onChange(checked) {
        console.log(`switch2: ${checked}`);
      }
    };
    return <Switch {...props} />;
  })(),
  // Tab
  (() => {
    let props = {
      data: [
        { name: '中国' },
        { name: '美国' },
        { name: '俄罗斯' }
      ],
      defaultActive: 1,
      onChange(item) {
        console.log(item.name);
      }
    };
    return <Tab {...props} />;
  })(),
  // Num 可编辑，大小无限制，step = 3
  (() => {
    let props = {
      step: 3,
      editable: true,
      onChange(value) {
        console.log(value);
      }
    };
    return <Num {...props} />;
  })(),
  // Num 默认值3，最小0，最大5
  (() => {
    let props = {
      min: 0,
      max: 5,
      defaultValue: 3,
      onChange(value) {
        console.log(value);
      }
    };
    return <Num {...props} />;
  })(),
  // Loading
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
    let
      today = new Date(),
      tomorrow = new Date(+today + 1000 * 60 * 60 * 24),
      dayAfterTomorrow = new Date(+tomorrow + 1000 * 60 * 60 * 24),
      props =  {
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
            handler(key, value) {
              let matchs = key.match(/\d{2}/g);

              return {
                month: matchs[0],
                day: matchs[1],
                render(dayComponent) {
                  return (
                    <span>{dayComponent}<i>{value}</i></span>
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
              '20150927': '中秋'
            },
            handler(key, value) {
              let matchs = key.match(/(\d{4})(\d{2})(\d{2})/);

              return {
                year: matchs[1],
                month: matchs[2],
                day: matchs[3],
                render(dayComponent) {
                  return (
                    <span><em>{+matchs[3]}</em><i>{value}</i></span>
                  )
                }
              }
            }
          },
          {
            date: { // 今天、明天、后天
              '今天': today,
              '明天': tomorrow,
              '后天': dayAfterTomorrow
            },
            handler(key, value) {
              return {
                year: value.getFullYear(),
                month: value.getMonth() + 1,
                day: value.getDate(),
                render(dayComponent) {
                  return (
                    <span><em>{key}</em></span>
                  )
                }
              }
            }
          },
          {
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
            handler(key) {
              let matchs = key.match(/(\d{4})(\d{2})(\d{2})/);

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
          },
          {
            date: { // 班
              '20150104': '元旦_班',
              '20150215': '除夕班',
              '20150228': '春节班',
              '20151010': '国庆_班'
            },
            handler(key) {
              let matchs = key.match(/(\d{4})(\d{2})(\d{2})/);

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
  (() => {
    let props = {
      data: [
        {
          name: '中国',
          bg: 'red',
        },
        {
          name: '美国',
          bg: 'green'
        },
        {
          name: '日本',
          bg: 'blue'
        },
        {
          name: '中国1',
          bg: 'white',
        },
        {
          name: '美国1',
          bg: 'yellow'
        },
        {
          name: '日本1',
          bg: 'orange'
        }
      ],
      defaultActive: 2,
      wrapperRender(children) {
        return (
          <section ref="wrapper" style={{width: '302px', height:'102px', border: '1px solid black', margin: '0 auto', overflow: 'hidden'}}>{children}</section>
        )
      } ,
      itemRender(item) {
        return (
          <div style={{width: '100px', height: '100px', background: item.bg, textAlign: 'center', lineHeight: '100px'}}>{item.name}</div>
        )
      },
      iScroll: {
        scrollX: true,
        snap: 'li'
      },
      itemAction(item) {
        console.log(item.name);
      }
    };
    return <Slider {...props} />
  })(),
  (() => {
    let props = {
      data: [
        {
          src: 'http://images.cnitblog.com/blog/294743/201412/051803252488182.jpg'
        },
        {
          src: 'http://images.cnitblog.com/blog/294743/201412/051803075458022.jpg'
        },
        {
          src: 'http://images.cnitblog.com/blog/294743/201412/051803148429260.jpg'
        },
        {
          src: 'http://images.cnitblog.com/blog/294743/201412/051803198737858.jpg'
        }
      ],
      wrapperRender(children) {
        return (
          <section ref="wrapper" style={{width: '100%', overflow: 'hidden'}}>{children}</section>
        )
      },
      scale: 2,
      defaultActive: 1,
      itemRender(item) {
        return (
          <img src={item.src} />
        )
      },
      itemAction(item) {
        console.log(item.src);
      }
    };
    return <ImgSlider {...props} />
  })(),
];

// 组件insert到document中
let insertComponent = component => {
  let div = document.createElement("div");
  div.style.marginBottom = '10px';
  ReactDOM.render(component, document.body.appendChild(div));
}

// 遍历且render
components.forEach(component => insertComponent(component));