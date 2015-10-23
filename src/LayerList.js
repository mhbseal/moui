import React from 'react';
import Layer from './Layer';

const LayerList = React.createClass({
  mixins: [Layer],
  propTypes: {
    items: React.PropTypes.array.isRequired,
    cancelName: React.PropTypes.string.isRequired,
    itemAction: React.PropTypes.func.isRequired,
    cancelAction: React.PropTypes.func.isRequired,
  },
  getDefaultProps() {
    return {
      cancelName: '取消'
    };
  },
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
          {this.createMask()}
        </div>
      );
  }
});

export default LayerList;