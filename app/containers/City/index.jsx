import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js' 

import { getCityList } from '../../fetch/City/city'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import './style.less'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        return (
            <div>
                <Header pageTitle="选择城市" />
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList cityList={this.state.data} changeCityFn={this.changeCityFn.bind(this)}/>
            </div>
        )
    }
    changeCityFn(newCity){
        if(newCity == null){
            return
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)    

        //修改cookie
        LocalStore.setItem(CITYNAME,newCity)

        //跳转页面
        hashHistory.push('/')    

    }
    componentDidMount(){
        const result = getCityList();
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json;
            if(data.length){
                this.setState({
                    data:data
                })
            }
        }).catch(ex => {
            if(__DEV__){
                console.error('城市页面获取数据出错',ex.message)
            }
        })
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
)(City)

