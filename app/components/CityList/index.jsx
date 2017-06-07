import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="city-list">
                <h3 className="city-list-title">热门城市</h3>
                <ul className="clear-fix">
                    <li className="city-list-item"><a>北京</a></li>
                    <li className="city-list-item"><a>北京</a></li>
                    <li className="city-list-item"><a>北京</a></li>
                    <li className="city-list-item"><a>北京</a></li>
                    <li className="city-list-item"><a>北京</a></li>
                    <li className="city-list-item"><a>北京</a></li>
                </ul>
            </div>
        )
    }
}

export default CityList