import React from 'react';
import Layer from './Layer';

const Alert = React.createClass({
  mixins: [Layer],
  propTypes: {
    content: React.PropTypes.string.isRequired,
  },
  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  },
  render() {
    let
      props = this.props,
      btns = props.btns.map((btn) => {
        return (
          <div key={btn.name} className="cui-flexbd" onClick={btn.handler.bind(this)}>{btn.name}</div>
        )
      });

    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-pop-box">
          { props.title ? <div className="cui-hd">{props.title}</div> : ''}
          <div className="cui-bd">
            <div className="cui-error-tips">{props.content}</div>
            <div className="cui-roller-btns">
              {btns}
            </div>
          </div>
        </div>
        {this.createMask()}
      </div>
    );
  }
});

export default Alert;