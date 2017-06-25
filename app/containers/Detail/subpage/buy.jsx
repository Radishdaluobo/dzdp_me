import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 import { hashHistory } from 'react-router'
// import LocalStore from '../../util/localStore'
// import { CITYNAME } from '../../config/localStoreKey'
import * as storeActionsFromFile from '../../../actions/store' 
import './style.less'
import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    componentDidMount(){
        //验证当前商户是否收藏
        this.checkStoreState()
    }
    //检验当前商户是否被收藏
    checkStoreState(){
        const id  = this.props.id;
        const store = this.props.store;  
        console.log(store); 
        // store.forEach( item => {
        //     if(item.id === id){
        //         //已被收藏
        //         this.setState({
        //             isStore: true
        //         })
        //         return false
        //     }
        // }) 
    }
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo
        console.log('userinfo',userinfo.userName)
        if(!userinfo.userName){
            //跳转到登录页面的时候,要传入目标router,以便登录完了,可以自己跳转回来
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

    buyHandle(){
        //验证是否登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        //购买
        console.log('购买成功')
        //跳转到用户主页
        hashHistory.push('/User')
    }

    //收藏事件
    storeHandle(){
        //验证登录,未登录则return
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        const id = this.props.id;
        const storeActions = this.props.storeActions
        console.log('storeActions',storeActions)
        if(this.state.isStore){
            storeActions.rm({id: id})
            console.log('isStore',this.props.store)
        }else{
            storeActions.add({id: id})
            console.log('isStore',this.props.store)
        }
        this.setState({
            isStore: !this.state.isStore        
        })
    }
   
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
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
)(Buy)
