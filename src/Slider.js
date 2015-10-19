import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from './iscroll-lite.js';

const Slider = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    data: React.PropTypes.array.isRequired
  },
  componentDidMount() {
    new IScroll(this.refs.wrapper, {
      scrollX: true
    });
  },
  render() {
    return this.props.wrapperRender(this.sliderRender());
  },
  sliderRender() {
    let
      props = this.props,
      items = props.data.map((item) => {
        return (
          <li key={item.name} className="cm-slide-item">{props.itemRender(item)}</li>
        )
      });

    return (
      <div className="cm-slide" style={{height: '100%', width: '600px'}}>
        <ul className="cm-slide-list">
          {items}
        </ul>
      </div>
    );
  }
});

export default Slider;