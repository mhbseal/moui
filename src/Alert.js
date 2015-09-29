import React from 'react/addons';
import Layer from './Layer';

const Alert = React.createClass({
  mixins: [Layer],
  propTypes: {
    content: React.PropTypes.string.isRequired,
  },
  getDefaultProps() {
    let self = this;
    return {
      btns: [{
        name: '知道了',
        handler: () => {
          self.hide();
        }
      }]
    };
  },
  render() {
    let
      props = this.props,
      btns = props.btns.map((btn) => {
        return (
          <div className="cui-flexbd" onClick={btn.handler}>{btn.name}</div>
        )
      });

    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-pop-box">
          {props.titile ? <div className="cui-hd">{props.titile}</div> : ''}
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