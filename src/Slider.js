import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from 'iscroll';

const noop = () => {};

const Slider = React.createClass({
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
        scrollX: true
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
      itemWidth = parseInt(getComputedStyle(this.refs.ul.children[0]).width); // 计算单位宽度

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
    let props = this.props;

    return (
      <div>
        {props.wrapperRender(<div className="cm-slide" style={{width: this.state.itemWidth * props.data.length}}>
          <ul ref="ul" className="cm-slide-list">
            {props.data.map((item) => {
              return (
                <li key={item.name} onClick={props.itemAction.bind(this, item)} className="cm-slide-item">{props.itemRender(item)}</li>
              )
            })}
          </ul>
        </div>)}
      </div>
    );
  },
  setIndex(index) {
    if (this.state.active !== index) {
      this.setState({active: index});
    }
  }
});

export default Slider;