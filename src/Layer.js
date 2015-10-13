import React from 'react';
import Mask from './Mask';

const Layer = {
  propTypes: {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
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
  maskToHide() {
    let props = this.props;
    props.needMask && props.maskToHide && this.setState({visible: false});
  },
  createMask() {
    if (this.props.needMask) {
      return <Mask onClick={this.maskToHide} />
    }
  }
};

export default Layer;