import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';

class ImgSlider extends Slider {
  render() {
    let
      { active, itemWidth, itemHeight } = this.state,
      { wrapperRender, itemAction, itemRender } = this.props,
      data = this.props.data,
      len = data.length;

    return (
      <div style={{position: 'relative'}}>
        <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: (itemWidth - 18*len)/2}}>
          {data.map((item, i) => {
            return (
              <span key={i} className={`cui-slide-nav-item ${i === active ? 'cui-slide-nav-item-current' : ''}`}></span>
            )
          })}
        </div>
        {wrapperRender(<div className="cm-slide cm-slide--full-img" style={{width: itemWidth * len, height: itemHeight}}>
          <ul className="cm-slide-list">
            {data.map((item, i) => {
              return (
                <li style={{width: itemWidth}} key={i} onClick={itemAction.bind(this, item)} className="cm-slide-item">{itemRender(item)}</li>
              )
            })}
          </ul>
        </div>)}
      </div>
    )
  }
  getItemDom() {
    return this.refs.wrapper
  }
}

ImgSlider.defaultProps.iScroll.snap = true;

export default ImgSlider;