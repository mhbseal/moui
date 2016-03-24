import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './num.css';

export default class Num extends Component {
  static defaultProps = {
    min: -Infinity,
    max: Infinity,
    step: 1,
    editable: false,
    defaultValue: 0,
    value: null,
    onChange: () => {}
  };
  static propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    editable: React.PropTypes.bool,
    defaultValue: React.PropTypes.number,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func
  };
  constructor(props) {
    super(props);

    let
      {value, defaultValue} = props,
      ret;

    if (value != null) {
      ret = value;
    } else {
      ret = defaultValue;
    }

    this.state = {
      value: ret
    };
  }
  render() {
    let
      classesMinus = classNames('cm-adjust-minus', {
        'disabled': this.props.min === this.state.value
      }),
      classesPlus = classNames('cm-adjust-plus', {
        'disabled': this.props.max === this.state.value
      }),
      input;

    if (this.props.editable) {
      input = <input ref="num" type="tel" className="cm-adjust-view" defaultValue={this.state.value} onBlur={this.onBlur} />
    } else {
      input = <span ref="num" className="cm-adjust-view">{this.state.value}</span>
    }

    return (
      <div className="cm-num-adjust">
        <span className={classesMinus} onClick={this.down}></span>
        {input}
        <span className={classesPlus} onClick={this.up}></span>
      </div>
    );
  }
  step = (type) => {
    let
      {step, max, min} = this.props,
      value = +this.state.value,
      stepNum = +step || 1;

    value = type === 'down' ? value - stepNum : value + stepNum;

    if (value > max || value < min) return;
    this.setValue(value);
  }
  down = () => {
    this.step('down');
  }
  up = () => {
    this.step('up');
  }
  setValue = (value) => {
    this.refs.num.value = value;
    this.setState({value: value});
    this.props.onChange(value);
  }
  onBlur = (e) => {
    let
      val = +e.target.value.trim(),
      {value, defaultValue, max, min} = this.props,
      ret;
    if (isNaN(val)) { // 如果无效数字
      if (value != null) {
        ret = value;
      } else {
        ret = defaultValue;
      }
    } else {
      if (val > max) { // 大于max
        ret = max;
      } else if (val < min) { // 小于min
        ret = min;
      } else {
        ret = val;
      }
    }
    this.setValue(ret);
  }
}