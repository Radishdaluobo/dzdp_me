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
                <button>收藏</button>
                <button>购买</button>
            </div>
        )
    }
}

export default BuyAndStore