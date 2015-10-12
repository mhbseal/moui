import React from 'react';

const Tab = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    data: React.PropTypes.array.isRequired
  },
  getDefaultProps() {
    return {
      onChange: () => {}
    };
  },
  getInitialState() {
    return {
      active: this.props.active || this.props.defaultActive || this.props.data[0].key
    };
  },
  render() {
    let
      item = this.props.data.map(v => {
        return (
          <li key={v.name} className={v.name === this.state.active ? 'cui-tab-current' : ''} onClick={this.clickAction.bind(null, v)}>
            {v.name}
          </li>
        )
      });

    return (
      <ul className="cui-tab-mod">
        {item}
        <i className={`cui-tab-scrollbar cui-tabnum${this.props.data.length}`}></i>
      </ul>
    );
  },
  clickAction(v) {
    this.setState({active: v.name});
    this.props.onChange(v);
  }
});

export default Tab;