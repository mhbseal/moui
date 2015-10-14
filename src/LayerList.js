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
  render() {
    let
      props = this.props,
      items = this.props.items.map(item => {
        return (
          <li key={item.name} onClick={props.itemAction.bind(this, item)}>{item.name}</li>
        )
      });
      return (
        <div style={{display: this.state.visible ? 'block' : 'none'}}>
          <div className="popup-operate">
            <ul className="list">
              {items}
            </ul>
            <ul>
              <li className="cancel" onClick={props.cancelAction.bind(this)}>{props.cancelName}</li>
            </ul>
          </div>
          {this.createMask()}
        </div>
      );
  }
});

export default LayerList;