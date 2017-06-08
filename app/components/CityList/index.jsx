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
                    {this.props.cityList.map((item,index) =>{
                        return <li className="city-list-item" key={item.id} onClick={this.clickHandle.bind(this,item.cityName)}>
                            <a>{item.cityName}</a>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
        const changeFn = this.props.changeCityFn;
        changeFn(newCity);
    }
}

export default CityList