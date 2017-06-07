import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-ad">
                <h3 className="ad_title">超值特惠</h3>
                <ul className="ad-container clear-fix">
                    {this.props.data.map((item,index)=>{
                        return <li className="ad_item f-l" key={index} >
                            <a href={item.link} target="_blank" className="d-b">
                                <img src={item.img} alt={item.title} />
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        )
    }

}

 export default HomeAd