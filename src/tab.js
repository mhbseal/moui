import React from 'react/addons';

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
      activeKey: this.props.activeKey || this.props.defaultActiveKey || this.props.data[0].key
    };
  },
  render() {
    let
      item = this.props.data.map(v => {
        return (
          <li className={v.key === this.state.activeKey ? 'cui-tab-current' : ''} onClick={this.clickAction.bind(null, v)}>
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
    this.setState({activeKey: v.key});
    this.props.onChange(v);
  }
});

export default Tab;