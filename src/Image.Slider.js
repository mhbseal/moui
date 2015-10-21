import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from './iscroll.js';

const Slider = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    data: React.PropTypes.array.isRequired
  },
  getInitialState() {
    return {
      active: this.props.active || this.props.defaultActive || 0
    };
  },
  componentDidMount() {
    let itemWidth = parseInt(getComputedStyle(this.refs.wrapper).width);
    this.setState({
      itemWidth: itemWidth,
      itemsWidth: itemWidth * this.props.data.length,
      navLeft: itemWidth/2 - 36
    }, () => {
      this.scroll = new IScroll(this.refs.wrapper, this.props.IScroll);
      this.scroll.on('scrollEnd', () => {
        this.setState({active: this.scroll.currentPage.pageX});
      });
    });
  },
  componentWillUnmount() {
    this.scroll.destroy();
    this.scroll = null;
  },
  render() {
    let itemsNav = [];
    this.props.data.forEach((item, i) => {
      itemsNav.push(<span key={i} className={i === this.state.active ? 'cui-slide-nav-item cui-slide-nav-item-current' : 'cui-slide-nav-item'}></span>);
    });
    return (
      <div style={{position: 'relative'}}>
        <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: this.state.navLeft}}>
          {itemsNav}
        </div>
        {this.props.wrapperRender(this.sliderRender())}
      </div>
    )
  },
  sliderRender() {
    let
      props = this.props,
      items = [], itemsNav = [];

    props.data.forEach((item, i) => {
      items.push(<li style={{width: this.state.itemWidth}} key={i} onClick={props.onChange.bind(this, item)} className="cm-slide-item">{props.itemRender(item)}</li>)
    });

    return (
      <div className="cm-slide cm-slide--full-img" style={{width: this.state.itemsWidth}}>
        <ul className="cm-slide-list">
          {items}
        </ul>
      </div>
    );
  }
});

export default Slider;