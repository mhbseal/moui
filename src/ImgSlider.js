import React, { Component, PropTypes } from 'react';
import Slider from './Slider';
import './imgSlider.css';

export default class ImgSlider extends Slider {
  render() {
    let
      { wrapperRender, data, itemAction, itemRender, iScroll, scale } = this.props,
      { active, itemWidth, itemHeight } = this.state,
      len = data.length,
      style  = {
        width: itemWidth * data.length,
        height: scale ? itemWidth/scale : itemHeight
      };

    return (
      <div style={{position: 'relative'}}>
        <div style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001', left: (itemWidth - 18*len)/2}}>
          {data.map((item, i) => {
            return (
              <span key={i} className={`cui-slide-nav-item ${i === active ? 'cui-slide-nav-item-current' : ''}`}></span>
            )
          })}
        </div>
        {wrapperRender(
          <div className="cm-slide cm-slide--full-img" style={style}>
            <ul className="cm-slide-list">
              {data.map((item, i) => {
                return (
                  <li style={{width: itemWidth}} key={i} onClick={itemAction.bind(this, item)} className="cm-slide-item">{itemRender(item)}</li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
  getItemDom = () => {
    return this.refs.wrapper
  }
}

ImgSlider.defaultProps.iScroll.snap = true;