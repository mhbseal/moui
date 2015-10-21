import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from './iscroll.js';

const Slider = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    data: React.PropTypes.array.isRequired
  },
  componentDidMount() {
    this.scroll = new IScroll(this.refs.wrapper, this.props.IScroll);
  },
  componentWillUnmount() {
    this.scroll.destroy();
    this.scroll = null;
  },
  render() {
    return this.props.wrapperRender(this.sliderRender());
  },
  sliderRender() {
    let
      props = this.props,
      items = props.data.map((item) => {
        return (
          <li key={item.name} onClick={props.onChange.bind(this, item)} className="cm-slide-item">{props.itemRender(item)}</li>
        )
      });

    return (
      <div className="cm-slide" style={{width: props.scrollerSize}}>
        <ul className="cm-slide-list">
          {items}
        </ul>
      </div>
    );
  }
});

export default Slider;