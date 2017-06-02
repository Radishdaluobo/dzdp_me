import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                111
                {/*<div className="fl"> 
                    <span>深圳</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="fl">
                    <input type="text" placeholder="请输入关键字" />
                    <i className="icon-search"></i>
                </div>
                <div className="fr">
                    <i className="icon--user" ></i>
                </div>*/}
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = HomeHeader