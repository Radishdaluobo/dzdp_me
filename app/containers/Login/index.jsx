import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import LocalStore from '../../util/localStore'
import { USERNAME } from '../../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js' 

import { getCityList } from '../../fetch/City/city'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking:true
        }
    }
    render() {
        return (
            <div>
                <Header pageTitle="登录" />
                { 
                    //等待验证之后再显示登录信息
                    this.state.checking
                    ? <div>{/*等待中*/}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)} />
                }             
            </div>
        )
    }
    componentDidMount(){
        this.doCheck()    
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            //已经登录,跳转到用户
            this.goUserPage()
        }else{
            //未登录,验证结束
            this.setState({
                checking:false
            })
        }  
    } 
    
    loginHandle(username){
        //修改redux
        let userinfo = this.props.userinfo;
        userinfo.userName = username;
        this.props.userInfoActions.update(userinfo);

        //修改cookie
        LocalStore.setItem(USERNAME,username)

        //跳转页面
        const params = this.props.params;
        const router = params.router;
        if(router){
            hashHistory.push(router);
        } else{
            this.goUserPage();
        }

    }
    goUserPage(){
        hashHistory.push('/User');
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo
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
)(Login)

