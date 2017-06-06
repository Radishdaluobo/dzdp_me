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
            <div>
                <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png" alt=""/>
                <h3>汉堡大人<span>120m</span></h3>
                <p>叫我汉堡大人,还你多彩口味</p>
                <p><b>¥28</b><span>已售28</span></p>
            </div>
        )
    }

}

 export default Item