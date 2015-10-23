import React from 'react';
import classNames from 'classnames';

const Switch = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      defaultChecked: null,
      checked: null,
      onChange: () => {}
    };
  },
  getInitialState() {
    let
      {checked, defaultChecked} = this.props,
      ret = false;

    if (checked != null) {
      ret = checked;
    } else if (defaultChecked != null) {
      ret = defaultChecked;
    }

    return { checked: ret};
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
      <div className={classes1} onClick={this.onChange}>
        <div className={classes2}></div>
        <div className="cui-switch-scroll"></div>
      </div>
    );
  },
  onChange() {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
});

export default Switch;