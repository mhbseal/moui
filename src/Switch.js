import React from 'react';
import classNames from 'classnames';

const Switch = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool
  },
  getInitialState() {
    return {
      checked: this.props.checked || this.props.defaultChecked || false
    };
  },
  render() {
    let
      classes1 = classNames('cui-switch', {
        'current': this.state.checked
      }),
      classes2 = classNames('cui-switch-bg', {
        'current': this.state.checked
      });
    return (
      <div className={classes1} onClick={this.toggle}>
        <div className={classes2}></div>
        <div className="cui-switch-scroll"></div>
      </div>
    );
  },
  toggle() {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
});

export default Switch;