import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import BuyAndStore from '../../../components/BuyAndStore'

import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js' 


import './style.less'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <BuyAndStore />
            </div>
        )
    }  
    componentDidMount(){
        const store = this
        if (cityName == null) {
            cityName = '北京'
        }
        //将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName: cityName
        })
        // 更改状态
        this.setState({
            initDone: true
        })
    }  
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo,
        store:state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)






