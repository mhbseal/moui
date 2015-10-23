import React from 'react';
import Mask from './Mask';

const Layer = {
  propTypes: {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
    visible: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      needMask: true,
      maskToHide: true
    };
  },
  getInitialState() {
    return {
      visible: this.props.visible
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  },
  maskToHide() {
    let {needMask, maskToHide} = this.props;
    needMask && maskToHide && this.setState({visible: false});
  },
  createMask() {
    if (this.props.needMask) {
      return <Mask onClick={this.maskToHide} />
    }
  },
  hide() {
    this.setState({visible: false});
  },
  show() {
    this.setState({visible: true});
  },
};

export default Layer;