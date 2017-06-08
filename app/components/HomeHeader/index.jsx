import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'


class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <Link to="/city">
                    <div className="home-header-left f-l"> 
                        <span>{this.props.cityName}</span>
                        &nbsp;
                         <i className="icon-angle-down"></i>
                    </div>
                </Link>
                <div className="home-header-right f-r te-c">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle p-r f-l">
                    <i className="p-a icon-search"></i>
                    <input type="text" placeholder="请输入关键字" />
                </div>

            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default HomeHeader
module.exports = HomeHeader