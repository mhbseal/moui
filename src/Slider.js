import React from 'react';
import ReactDOM from 'react-dom';
import IScroll from 'iscroll';

const noop = () => {};

class Slider extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    wrapperRender: React.PropTypes.func.isRequired,
    itemRender: React.PropTypes.func.isRequired,
    iScroll: React.PropTypes.object,
    defaultActive: React.PropTypes.number,
    active: React.PropTypes.number,
    scale: React.PropTypes.number
  }
  static defaultProps = {
    data: [],
    wrapperRender: noop,
    itemRender: noop,
    iScroll: {
      scrollX: true
    },
    active: null,
    defaultActive: null,
    scale: null // w/h
  }
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active || this.props.defaultActive || 0,
      itemWidth: null,
      itemHeight: null,
    };
  }
  componentDidMount() {
    let
      {scale, iScroll} = this.props,
      itemWidth = parseInt(getComputedStyle(this.getItemDom()).width); // 计算单位宽度

    this.setState({
      itemWidth: itemWidth,
      itemHeight: itemWidth/scale
    }, () => {
      this.scroll = new IScroll(this.refs.wrapper, Object.assign({}, iScroll, {startX: -this.state.active * itemWidth}));
      this.scroll.on('scrollEnd', () => {
        this.setIndex(this.scroll.currentPage.pageX);
      });
    });
  }
  componentWillUnmount() {
    this.scroll.destroy();
  }
  render() {
    let {wrapperRender, data, itemAction, itemRender} = this.props;

    return (
      <div>
        {wrapperRender(<div className="cm-slide" style={{width: this.state.itemWidth * data.length}}>
          <ul ref="ul" className="cm-slide-list">
            {data.map((item) => {
              return (
                <li key={item.name} onClick={itemAction.bind(this, item)} className="cm-slide-item">{itemRender(item)}</li>
              )
            })}
          </ul>
        </div>)}
      </div>
    );
  }
  setIndex(index) {
    if (this.state.active !== index) {
      this.setState({active: index});
    }
  }
  getItemDom() {
    return this.refs.ul.children[0]
  }
};

export default Slider;