import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './switch.css';

export default class Switch extends Component {
  static defaultProps = {
    defaultChecked: null,
    checked: null,
    onChange: () => {}
  };
  static propTypes = {
    defaultChecked: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };
  constructor(props) {
    super(props);

    let
      {checked, defaultChecked} = props,
      ret = false;

    if (checked != null) {
      ret = checked;
    } else if (defaultChecked != null) {
      ret = defaultChecked;
    }

    this.state = {
      checked: ret
    };
  }
  render() {
    let
      classesSwitch = classNames('cui-switch', {
        'current': this.state.checked
      }),
      classesSwitchBg = classNames('cui-switch-bg', {
        'current': this.state.checked
      });
    return (
      <div className={classesSwitch} onClick={this.onChange}>
        <div className={classesSwitchBg}></div>
        <div className="cui-switch-scroll"></div>
      </div>
    );
  }
  onChange = () => {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
}