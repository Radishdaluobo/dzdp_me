import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="detail-info">
                <div className="clear-fix">
                    <img className="detail-info-img f-l" src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" alt=""/>
                    <div className="info f-l">
                        <h3 className="title">天下第一锅</h3>
                        <div className="star-price">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <span className="f-r price">88</span>
                        </div>
                        <p>重庆火锅</p>
                    </div>
                </div>
                <p className="time">营业时间</p>
            </div>
        )
    }
}

export default DetailInfo