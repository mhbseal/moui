import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from 'iscroll';

const noop = () => {};

const ImgSlider = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    wrapperRender: React.PropTypes.func.isRequired,
    itemRender: React.PropTypes.func.isRequired,
    IScroll: React.PropTypes.object,
    defaultActive: React.PropTypes.number,
    active: React.PropTypes.number,
    scale: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      data: [],
      wrapperRender: noop,
      itemRender: noop,
      IScroll: {
        scrollX: true,
        snap: true
      },
      active: null,
      defaultActive: null,
      scale: null // w/h
    };
  },
  getInitialState() {
    return {
      active: this.props.active || this.props.defaultActive || 0,
      itemWidth: null,
      itemHeight: null,
    };
  },
  componentDidMount() {
    let
      props = this.props,
      itemWidth = parseInt(getComputedStyle(this.refs.wrapper).width); // 计算单位宽度

    this.setState({
      itemWidth: itemWidth,
      itemHeight: itemWidth/props.scale
    }, () => {
      this.scroll = new IScroll(this.refs.wrapper, Object.assign({}, props.IScroll, {startX: -this.state.active * itemWidth}));
      this.scroll.on('scrollEnd', () => {
        this.setIndex(this.scroll.currentPage.pageX);
      });
    });
  },
  componentWillUnmount() {
    this.scroll.destroy();
  },
  render() {
    let
      state = this.state,
      props = this.props,
      data = props.data,
      len = data.length;

    return (
      <div style={{position: 'relative'}}>
        <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: (state.itemWidth - 18*len)/2}}>
          {data.map((item, i) => {
            return (
              <span key={i} className={`cui-slide-nav-item ${i === state.active ? 'cui-slide-nav-item-current' : ''}`}></span>
            )
          })}
        </div>
        {props.wrapperRender(<div className="cm-slide cm-slide--full-img" style={{width: state.itemWidth * len, height: state.itemHeight}}>
          <ul className="cm-slide-list">
            {data.map((item, i) => {
              return (
                <li style={{width: state.itemWidth}} key={i} onClick={props.itemAction.bind(this, item)} className="cm-slide-item">{props.itemRender(item)}</li>
              )
            })}
          </ul>
        </div>)}
      </div>
    )
  },
  setIndex(index) {
    if (this.state.active !== index) {
      this.setState({active: index});
    }
  }
});

export default ImgSlider;