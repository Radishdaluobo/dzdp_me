import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header" className="te-c">
                <span className="icon-chevron-left" onClick={this.backfn.bind(this)} ></span>
                <h2 className="common-header-title">{this.props.pageTitle}</h2>
            </div>
        )
    }
    backfn(){
        const backRouter = this.props.backRouter;
        if(backRouter){
            hashHistory.push(hashHistory)
        }else{
            window.history.back()
        }
    }
}

export default Header