import React from 'react/addons';
import Layer from './Layer';

const LayerList = React.createClass({
  mixins: [Layer],
  propTypes: {
    content: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      items: [{
        name: '中国'
      }, {
        name: '美国'
      }, {
        name: '俄罗斯'
      }],
      cancelName: '取消',
      itemAction(item) {
        console.log(item.name);
        this.hide();
      },
      cancelAction() {
        console.log('cancel');
        this.hide();
      }
    };
  },
  render() {
    let
      props = this.props,
      item = this.props.items.map(item => {
        return (
          <li onClick={props.itemAction.bind(this, item)}>{item.name}</li>
        )
      });
      return (
        <div style={{display: this.state.visible ? 'block' : 'none'}}>
          <div className="popup-operate">
            <ul className="list">
              {item}
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