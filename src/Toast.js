import React, { Component, PropTypes } from 'react';
import Mask from './Mask';
import './layer.css';
import './toast.css';

export default class Toast extends Component {
  static defaultProps = {
    needMask: true,
    maskToHide: true,
    visible: false,
    hideTime: 2000,
    content: ''
  };
  static propTypes = {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    hideTime: React.PropTypes.number,
    content: React.PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }
  componentDidMount = () => {
    let
      layer = this.refs.layer,
      h = layer.clientHeight,
      w = layer.clientWidth;

    this.setState({
      style: {
        marginTop: - h/2,
        marginLeft: - w/2
      },
      visible: this.props.visible
    })

    this.componentDidUpdate();
  }
  componentDidUpdate = () => {
    this.setTimer();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  }
  render() {
    let
      {content} = this.props,
      { visible, style } = this.state;
    return (
      <div style={{display: visible ? 'block' : 'none'}}>
        <div ref="layer" className="cui-layer cui-toast" style={style}>
          <div className="cui-layer-padding">{content}</div>
        </div>
        <Mask layer={this} callback={this.clearTimer} />
      </div>
    );
  }
  clearTimer = () => {
    this.timer && clearTimeout(this.timer);
  }
  setTimer = () => {
    if (this.state.visible) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({visible: false})
      }, this.props.hideTime);
    }
  }
}