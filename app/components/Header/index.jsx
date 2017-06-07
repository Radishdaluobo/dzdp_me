import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header" className="te-c">
                <span className="icon-chevron-left" onClick={this.props.backfn} ></span>
                <h2 className="common-header-title">{this.props.pageTitle}</h2>
            </div>
        )
    }
}

export default Header