import React, { Component, PropTypes } from 'react';
import Mask from './Mask';
import './layer.css';
import './alert.css';

export default class Alert extends Component {
  static defaultProps = {
    needMask: true,
    maskToHide: false,
    visible: false,
    title: '',
    content: '',
    btns: []
  };
  static propTypes = {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    title: React.PropTypes.string,
    content: React.PropTypes.string.isRequired,
    btns: React.PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };
  }
  componentDidMount() {
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
  }
  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  }
  render() {
    let
      { btns, title, content } = this.props,
      { visible, style } = this.state;

    return (
      <div style={{display: visible ? 'block' : 'none'}}>
        <div ref="layer" className="cui-layer cui-pop-box" style={style}>
          { title ? <div className="cui-hd">{title}</div> : ''}
          <div className="cui-bd">
            <div className="cui-error-tips">{content}</div>
            <div className="cui-roller-btns">
              {btns.map((btn) => {
                return (
                  <div key={btn.name} className="cui-flexbd" onClick={btn.handler.bind(this, btn)}>{btn.name}</div>
                )
              })}
            </div>
          </div>
        </div>
        <Mask layer={this} />
      </div>
    );
  }
  hide = () => {
    this.setState({visible: false});
  }
}