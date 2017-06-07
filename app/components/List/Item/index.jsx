import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="item clear-fix">
                <div className="item-img f-l">
                    <img src={this.props.data.img} alt=""/>
                </div>
                <div className="item-info f-l">
                    <h3 className="item-info-title">{this.props.data.title}<span className="f-r">{this.props.data.distance}m</span></h3>
                    <p>{this.props.data.subTitle}</p>
                    <p><b className="price">¥{this.props.data.price}</b><span className="f-r">已售{this.props.data.mumber}</span></p>
                </div>
            </div>
        )
    }

}

export default Item