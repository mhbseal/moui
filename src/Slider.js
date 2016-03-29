import React, { Component, PropTypes } from 'react';
import IScroll from 'iscroll';
import './slider.css';

const noop = () => {};

export default class Slider extends Component {
  static defaultProps = {
    data: [],
    wrapperRender: noop,
    itemRender: noop,
    iScroll: { // iScorll中对应的参数
      eventPassthrough: true, // 非iScroll方向保持原生滚动
      scrollX: true,
      scrollY: false
    },
    active: null,
    defaultActive: null,
    itemAction: noop,
    scale: null // item宽高的比例(无特殊情况，一般用不到这个参数。。。在imgSlider中图片滚动中会用到)
  }
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    wrapperRender: React.PropTypes.func.isRequired,
    itemRender: React.PropTypes.func.isRequired,
    iScroll: React.PropTypes.object,
    defaultActive: React.PropTypes.number,
    active: React.PropTypes.number,
    itemAction: React.PropTypes.func,
    scale: React.PropTypes.number
  }
  constructor(props) {
    super(props);

    let
      {active, defaultActive} = props,
      ret = 0;

    if (active != null) {
      ret = active;
    } else if (defaultActive != null) {
      ret = defaultActive;
    }

    this.state = {
      active: ret,
      itemWidth: null,
      itemHeight: null
    };
  }
  componentDidMount() {
    let
      {scale, iScroll} = this.props,
      itemCss = getComputedStyle(this.getItemDom()),
      itemWidth = parseInt(itemCss.width),
      itemHeight = parseInt(itemCss.height);

      this.setState({
        itemWidth: itemWidth,
        itemHeight: itemHeight
      }, () => {
        iScroll.options = iScroll.scrollX ? {startX: -this.state.active * itemWidth} : {startY: -this.state.active * itemHeight};
        this.scroll = new IScroll(this.refs.wrapper, iScroll);

        if (iScroll.snap) {
          this.scroll.on('scrollEnd', () => {
            this.setIndex(iScroll.scrollX ? this.scroll.currentPage.pageX : this.scroll.currentPage.pageY);
          });
        }
      });
  }
  componentWillUnmount() {
    this.scroll.destroy();
  }
  render() {
    let
      {wrapperRender, data, itemAction, itemRender, iScroll, scale} = this.props,
      {itemWidth, itemHeight} = this.state,
      style;

    if (iScroll.scrollX) {
      style  = {
        width: itemWidth * data.length,
        height: scale ? itemWidth/scale : itemHeight
      }
    } else {
      style  = {
        width: scale ? itemHeight/scale : itemWidth,
        height: itemHeight * data.length
      }
    }

    return (
      <div>
        {wrapperRender(
          <div className="cm-slide" style={style}>
            <ul ref="ul" className="cm-slide-list">
              {data.map((item, i) => {
                return (
                  <li key={i} onClick={itemAction.bind(this, item)} className="cm-slide-item">{itemRender(item)}</li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
  setIndex = (index) => {
    if (this.state.active !== index) {
      this.setState({active: index});
    }
  }
  getItemDom = () => {
    return this.refs.ul.children[0]
  }
};