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
                <Link to={'/detail/' + data.id}>
                    <div className="item-img f-l">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="item-info f-l">
                        <h3 className="item-info-title">{data.title}<span className="f-r">{data.distance}m</span></h3>
                        <p>{this.props.data.subTitle}</p>
                        <p><b className="price">¥{data.price}</b><span className="f-r">已售{data.mumber}</span></p>
                    </div>
                </Link>
            </div>
        )
    }

}

export default Item