import React, { Component } from 'react';

export default class Mask extends Component {
  render() {
    let style = {
      width: '100%',
      height: document.documentElement.scrollHeight || document.body.scrollHeight,
      position: 'absolute',
      left: 0,
      top: 0
    };
    return (
      <div className="cui-mask" style={style} onClick={this.props.onClick}></div>
    );
  }
}