import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'

import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div>{/* loading */}</div>
                }
            </div>
        )
    }
    componentDidMount() {
        const userName = this.props.userName;
        if(userName){
            this.loadOrderList(userName)
        }
    }
    // 获取列表数据
    loadOrderList(userName) {
        const result = getOrderListData(userName);
        console.log('orderlist',result);
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log('data',json)
            this.setState({
                data:json
            })
        }).catch(ex => {
            if(__DEV__){
                console.error('订单列表模块获取数据出错',ex.message)
            }
        })
    }
    // 提交评价
    submitComment(id,value,callback) {
        const result = postComment(id,value);
        result.then((res)=>{
            return res.json()
        }).then((json)=>{
            if(json.errno == 0){
                callback()
            }
        })
    }
}

export default OrderList