import React, { Component, PropTypes } from 'react';
import './tab.css';

export default class Tab extends Component {
  static defaultProps = {
    data: [],
    defaultActive: null,
    active: null,
    onChange: () => {}
  };
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    defaultChecked: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };
  constructor(props) {
    super(props);

    let
      {active, defaultActive} = props,
      ret = 0;

    if (active != null) {
      ret = active;
    } else if (defaultActive != null) {
      ret = defaultActive;
    }

    this.state = {
      active: ret
    };
  }
  render() {
    let data = this.props.data;

    return (
      <ul className="cui-tab-mod">
        {data.map((item, i) => {
          return (
            <li key={i} className={i === this.state.active ? 'cui-tab-current' : ''} onClick={this.onChange.bind(null, item, i)}>
              {item.name}
            </li>
          )
        })}
        <i className={`cui-tab-scrollbar cui-tabnum${data.length}`}></i>
      </ul>
    );
  }
  onChange = (item, i) => {
    this.setState({active: i});
    this.props.onChange(item);
  }
}