import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { getOrderListData, postComment } from '../../../fetch/user/orderlist'

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
        
    }
    // 获取列表数据
    loadOrderList() {
        
    }
    // 提交评价
    submitComment() {

    }
}

export default OrderList