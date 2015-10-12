import React from 'react';
import Layer from './Layer';

const Loading = React.createClass({
  mixins: [Layer],
  propTypes: {
    closeBtn: React.PropTypes.bool,
    content: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      closeBtn: false
    };
  },
  render() {
    let
      props = this.props,
      hasText = props.content !== '',
      closeBtn = props.closeBtn,
      style;

    if (!hasText && !closeBtn) {
      style = {
        width: 80,
        height: 70,
      }
    };

    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-layer cui-loading">
          <div className="cui-grayload-text" style={style}>
            <div className="cui-i cui-w-loading"></div>
            <div className="cui-i cui-m-logo"></div>
            {closeBtn ? <div className="cui-grayload-close" onClick={this.onClick}></div> : ''}
            {hasText ? <div className="cui-grayload-bfont">{props.content}</div> : ''}
          </div>
        </div>
        {this.createMask()}
      </div>
    );
  },
  onClick() {
    this.hide();
  }
});

export default Loading;