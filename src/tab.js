import React from 'react/addons';
import './tab.css';

const Tab = React.createClass({
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
      classes = cx({
        'active': this.state.checked
      });
    return (
      <nav className="cm-tabs-nav">
        <ul className="cm-tabs-title-list">
          <li className="active">123</li>
          <li className={classes}>123</li>
          <li className={classes}>123</li>
        </ul>
        <i className="icon-active"></i>
      </nav>
    );
  },
  clickAction() {
    let checked = !this.state.checked;
    this.setState({ checked: checked });
    this.props.onChange(checked);
  }
});

export default Tab;