import React from 'react';
import Layer from './Layer';

const Alert = React.createClass({
  mixins: [Layer],
  propTypes: {
    title: React.PropTypes.string,
    content: React.PropTypes.string.isRequired,
    btns: React.PropTypes.array.isRequired
  },
  render() {
    let { btns, title, content } = this.props;

    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-pop-box">
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
        {this.createMask()}
      </div>
    );
  }
});

export default Alert;