import React from 'react';

const Mask = React.createClass({
  render() {
    let style = {
      width: '100%',
      height: document.documentElement.scrollHeight || document.body.scrollHeight,
      position: 'absolute',
      left: 0,
      top: 0
    };
    return (
      <div className="cui-mask" style={style} onClick={this.props.onClick}></div>
    );
  },

});

export default Mask;