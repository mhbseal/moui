import React from 'react/addons';

const Switch = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func
  },
  getDefaultProps() {
    return {
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
      cx = React.addons.classSet,
      classes1 = cx({
        'cui-switch': true,
        'current': this.state.checked
      }),
      classes2 = cx({
        'cui-switch-bg': true,
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