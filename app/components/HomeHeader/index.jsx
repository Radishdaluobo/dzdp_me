import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../../components/SearchInput'

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
                <Link to="/User">
                    <div className="home-header-right f-r te-c">
                        <i className="icon-user"></i>
                    </div>
                </Link>
                <div className="home-header-middle p-r f-l">
                    <i className="p-a icon-search"></i>
                    {/*<input type="text" placeholder="请输入关键字" />*/}
                    <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader