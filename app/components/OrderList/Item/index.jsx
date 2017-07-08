import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="item clear-fix">             
                    <div className="item-img f-l">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="item-infomation f-l">
                        <ul>
                            <li>商户: <span>{data.title}</span></li>
                            <li>数量: <span>{data.count}</span></li>
                            <li>价格: <span>{data.price}</span></li>
                        </ul>
                    </div>
                    <div className="item-commit f-r">
                        <button>评价</button>
                    </div>
            </div>
        )
    }

}

export default Item