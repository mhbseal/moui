import React, { Component, PropTypes } from 'react';
import './mask.css';

export default class Mask extends Component {
  render() {
    let mask;
    if (this.props.layer.props.needMask) {
      mask =  <div className="cui-mask" onClick={this.onClick}></div>
    } else {
      mask = <div></div>
    }
    return mask;
  }
  onClick = () => {
    let
      {layer, callback} = this.props,
      {maskToHide} = layer.props;
    maskToHide && layer.setState({visible: false});
    callback && callback();
  }
};