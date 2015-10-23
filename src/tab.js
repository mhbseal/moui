import React from 'react';

const Tab = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    data: React.PropTypes.array.isRequired
  },
  getDefaultProps() {
    return {
      data: [],
      defaultActive: null,
      active: null,
      onChange: () => {}
    };
  },
  getInitialState() {
    let
      {active, defaultActive} = this.props,
      ret = 0;

    if (active != null) {
      ret = active;
    } else if (defaultActive != null) {
      ret = defaultActive;
    }

    return { active: ret};
  },
  render() {
    let data = this.props.data;

    return (
      <ul className="cui-tab-mod">
        {data.map((v, i) => {
          return (
            <li key={i} className={i === this.state.active ? 'cui-tab-current' : ''} onClick={this.onChange.bind(null, v, i)}>
              {v.name}
            </li>
          )
        })}
        <i className={`cui-tab-scrollbar cui-tabnum${data.length}`}></i>
      </ul>
    );
  },
  onChange(v, i) {
    this.setState({active: i});
    this.props.onChange(v);
  }
});

export default Tab;