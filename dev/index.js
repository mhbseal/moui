import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Tab, Num, Loading, Toast, Alert, LayerList, Calendar, Slider, ImgSlider } from '../src/index.js';

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
  // Loading 默认状态，有蒙版，无关闭按钮，无loading文字，2秒后消失
  (() => {
    class LoadingDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
        setTimeout(() => {
          this.setState({visible: false});
        }, 2000)
      }
      render() {
        return (
          <div>
            <span onClick={this.show}>showLoading-1</span>
            <Loading visible={this.state.visible} />
          </div>
        )
      }
    };
    return <LoadingDemo />;
  })(),
  // Loading 带关闭按钮，有loading文字
  (() => {
    class LoadingDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
      }
      hide = () => {
        this.setState({visible: false});
      }
      render() {
        let props = {
          needMask: false,
          visible: this.state.visible,
          content: '加载中...',
          closeBtn: true
        }
        return (
          <div>
            <span onClick={this.show}>showLoading-2</span>&nbsp;
            <span onClick={this.hide}>hideLoading-2</span>
            <Loading {...props} />
          </div>
        )
      }
    };
    return <LoadingDemo />;
  })(),
  // Toast
  (() => {
    class ToastDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
      }
      render() {
        let props = {
          visible: this.state.visible,
          content: '输入的内容有误'
        }
        return (
          <div>
            <span onClick={this.show}>showToast</span>
            <Toast {...props} />
          </div>
        )
      }
    };
    return <ToastDemo />;
  })(),
  // Alert 带标题、2个按钮
  (() => {
    class AlertDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
      }
      render() {
        let props = {
          visible: this.state.visible,
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
        }
        return (
          <div>
            <span onClick={this.show}>showAlert-1</span>
            <Alert {...props} />
          </div>
        )
      }
    };
    return <AlertDemo />;
  })(),
  // Alert 无标题、1个按钮
  (() => {
    class AlertDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
      }
      render() {
        let props = {
          visible: this.state.visible,
          content: '恭喜你，中奖了！',
          btns: [{
            name: '确定',
            handler(btn) {
              console.log('确定');
              this.hide();
            }
          }],
        }
        return (
          <div>
            <span onClick={this.show}>showAlert-2</span>
            <Alert {...props} />
          </div>
        )
      }
    };
    return <AlertDemo />;
  })(),
  // LayerList
  (() => {
    class LayerListDemo extends Component {
      state = {
        visible: false
      }
      show = () => {
        this.setState({visible: true});
      }
      render() {
        let props = {
          visible: this.state.visible,
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
        }

        return (
          <div>
            <span onClick={this.show}>showLayerList</span>
            <LayerList {...props} />
          </div>
        )
      }
    };
    return <LayerListDemo />;
  })(),
  // Calendar
  (() => {
    let
      now = new Date(),
      today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      tomorrow = new Date(+today + 1000 * 60 * 60 * 24),
      dayAfterTomorrow = new Date(+tomorrow + 1000 * 60 * 60 * 24),
      props =  {
        selected: today,
        itemAction(date, format) {
          console.log(date, format(date, 'YYYY年M月D日'));
        },
        specialDates: [ // 特殊日期这个自由度较高，需要自定义设置，特殊日期可以覆盖或者叠加，自行定义。
          {
            date: { // 阳历
              '0101': '元旦节',
              '0214': '情人节',
              '0501': '劳动节',
              '0601': '儿童节',
              '0910': '教师节',
              '1001': '国庆节',
              '1225': '圣诞节'
            },
            handler(key, value) { // 参数为date中的key、value
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
              '20160207': '除夕',
              '20160208': '春节',
              '20160222': '元宵节',
              '20160404': '清明节',
              '20160609': '端午节',
              '20160915': '中秋节'
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
              '20160101': '元旦',
              '20160102': '元旦',
              '20160103': '元旦',

              '20160207': '除夕',
              '20160208': '春节',
              '20160209': '春节',
              '20160210': '春节',
              '20160211': '春节',
              '20160212': '春节',
              '20160213': '春节',

              '20160402': '清明节',
              '20160403': '清明节',
              '20160404': '清明节',

              '20160430': '劳动节',
              '20160501': '劳动节',
              '20160502': '劳动节',

              '20160609': '端午节',
              '20160610': '端午节',
              '20160611': '端午节',

              '20160915': '中秋节',
              '20160916': '中秋节',
              '20160917': '中秋节',

              '20161001': '国庆',
              '20161002': '国庆',
              '20161003': '国庆',
              '20161004': '国庆',
              '20161005': '国庆',
              '20161006': '国庆',
              '20161007': '国庆'
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
              '20160206': '除夕_班',
              '20160214': '春节_班',
              '20160612': '端午_班',
              '20160918': '中秋_班',
              '20161008': '国庆_班',
              '20161009': '国庆_班'
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
  // Slider
  (() => {
    let props = {
      data: [{
        name: '中国',
        bg: 'red',
      }, {
        name: '俄罗斯',
        bg: 'yellow'
      }, {
        name: '美国',
        bg: 'orange'
      }, {
        name: '韩国',
        bg: 'green'
      }, {
        name: '日本',
        bg: 'blue'
      }],
      wrapperRender(children) { // wrapper自定义DOM
        return (
          <section ref="wrapper" style={{width: '300px', height:'100px', border: '1px solid black', margin: '0 auto', overflow: 'hidden'}}>{children}</section>
        )
      } ,
      itemRender(item) { // item自定义DOM
        return (
          <div style={{width: '100px', height: '100px', background: item.bg, textAlign: 'center', lineHeight: '100px'}}>{item.name}</div>
        )
      },
      itemAction(item) {
        console.log(item.name);
      }
    };
    return <Slider {...props} />
  })(),
  // ImgSlider
  (() => {
    let props = {
      data: [{
        src: 'http://images.cnitblog.com/blog/294743/201412/051803252488182.jpg'
      }, {
        src: 'http://images.cnitblog.com/blog/294743/201412/051803075458022.jpg'
      }, {
        src: 'http://images.cnitblog.com/blog/294743/201412/051803148429260.jpg'
      }, {
        src: 'http://images.cnitblog.com/blog/294743/201412/051803198737858.jpg'
      }],
      wrapperRender(children) {
        return (
          <section ref="wrapper" style={{width: '100%', overflow: 'hidden'}}>{children}</section>
        )
      },
      itemRender(item) {
        return (
          <img src={item.src} />
        )
      },
      defaultActive: 2,
      itemAction(item) {
        console.log(item.src);
      },
      scale: 2
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