import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Mask from './Mask';
import './layer.css';
import './loading.css';

export default class Loading extends Component {
  static defaultProps = {
    needMask: true,
    maskToHide: false,
    visible: false,
    content: '',
    closeBtn: false
  };
  static propTypes = {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    content: React.PropTypes.string,
    closeBtn: React.PropTypes.bool
  };
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible});
  }
  render() {
    let
      {content, closeBtn} = this.props,
      hasText = content !== '',
      classesGrayload = classNames('cui-grayload-text', {
        'cui-grayload-text-min': !hasText && !closeBtn
      });

    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="cui-layer cui-loading">
          <div className={classesGrayload}>
            <div className="cui-i cui-w-loading"></div>
            <div className="cui-i cui-m-logo"></div>
            {closeBtn ? <div className="cui-grayload-close" onClick={this.hide}></div> : ''}
            {hasText ? <div className="cui-grayload-bfont">{content}</div> : ''}
          </div>
        </div>
        <Mask layer={this}/>
      </div>
    );
  }
  hide = () => {
    this.setState({visible: false});
  }
}