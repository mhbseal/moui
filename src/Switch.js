import React from 'react/addons';
import './switch.css';

let Switch = React.createClass({
  getDefaultProps() {
    return {
      disabled: false,
      defaultChecked: false,
      onChange: () => {}
    };
  },
  getInitialState() {
    return {
      checked: this.props.checked || this.props.defaultChecked || false
    };
  },
  render() {
    let
      disabled = this.props.disabled,
      cx = React.addons.classSet,
      classes = cx({
        'icon-switch': true,
        'active': this.state.checked,
        'disabled': disabled
      });
    return (
      <i className={classes} onClick = {disabled ? () => {} : this.toggle}></i>
    );
  },
  toggle() {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
});

export default Switch;