import React, { Component, PropTypes } from 'react';
import Mask from './Mask';
import './layer.css';
import './layerlist.css';

export default class LayerList extends Component {
  static defaultProps = {
    needMask: true,
    maskToHide: true,
    visible: false,
    items: [],
    cancelName: '取消',
    itemAction: (item) => {},
    cancelAction: () => {},
  };
  static propTypes = {
    needMask: React.PropTypes.bool,
    maskToHide: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    items: React.PropTypes.array.isRequired,
    cancelName: React.PropTypes.string,
    itemAction: React.PropTypes.func.isRequired,
    cancelAction: React.PropTypes.func.isRequired,
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
    let { itemAction, cancelAction, cancelName, items } = this.props;
    return (
      <div style={{display: this.state.visible ? 'block' : 'none'}}>
        <div className="popup-operate">
          <ul className="list">
            {items.map(item => {
              return (
                <li key={item.name} onClick={itemAction.bind(this, item)}>{item.name}</li>
              )
            })}
          </ul>
          <ul>
            <li className="cancel" onClick={cancelAction.bind(this)}>{cancelName}</li>
          </ul>
        </div>
        <Mask layer={this} callback={cancelAction.bind(this)} />
      </div>
    );
  }
  hide = () => {
    this.setState({visible: false});
  }
}