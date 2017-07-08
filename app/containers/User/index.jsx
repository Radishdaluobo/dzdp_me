import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as storeActionsFromFile from '../../actions/userinfo' 
import Header from '../../components/Header'
import Userinfo from '../../components/Userinfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header pageTitle="用户主页" backRouter="/home" />
                <Userinfo userName={this.props.userinfo.userName} userCity={this.props.userinfo.cityName} />
                <OrderList userName={this.props.userinfo.userName}/>
            </div>
        )
    }
    componentDidMount(){
        if(!this.props.userinfo.userName){            
            hashHistory.push('/Login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
