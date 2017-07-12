import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div id="detail-info">
                <div className="clear-fix">
                    <img className="detail-info-img f-l" src={data.img} />
                    <div className="info f-l">
                        <h3 className="title">{data.title}</h3>
                        <div className="star-price">
                            {/*<Star starNum={data.star} />*/}
                            <span className="f-r price">{"¥"+data.price}</span>
                        </div>
                        <p>{data.subTitle}}</p>
                    </div>
                </div>
                    {/*设置 innerHTML*/}
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>*/}
            </div>
        )
    }
}

export default DetailInfo