import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="buy-store te-c">
                <button onClick={this.storeHandle.bind(this)}>{this.props.isStore ? '已收藏':'收藏'}</button>
                <button onClick={this.buyHandle.bind(this)}>购买</button>
            </div>
        )
    }
    storeHandle(){
        this.props.storeHandle()
    }
    buyHandle(){
        this.props.buyHandle()
    }
}

export default BuyAndStore