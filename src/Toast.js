import React from 'react';
import Layer from './Layer';

const Toast = React.createClass({
  mixins: [Layer],
  propTypes: {
    content: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    return {
      hideTime: 2000
    };
  },
  componentDidMount() {
    this.componentDidUpdate();
  },
  componentDidUpdate() {
    this.setTimer();
  },
  render() {
    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-layer cui-toast">
          <div className="cui-layer-padding">
            <div className="cui-layer-content">{this.props.content}</div>
          </div>
        </div>
        {this.createMask()}
      </div>
    );
  },
  setTimer() {
    if (this.state.visible) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => this.hide(), this.props.hideTime);
    }
  },
  onClick() {
    this.timer && clearTimeout(this.timer);
    this.hide();
  }
});

export default Toast;