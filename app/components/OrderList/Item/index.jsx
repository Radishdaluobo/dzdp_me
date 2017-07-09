import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            // 0 .未评价,1.评价中,2.已评价
            commentState: 1
        }
    }
    render() {
        const data = this.props.data;
        return (
            <div className="item-container">
                <div className="item clear-fix">             
                    <div className="item-img f-l">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="item-infomation f-l">
                        <ul>
                            <li>商户: <span>{data.title}</span></li>
                            <li>数量: <span>{data.count}</span></li>
                            <li>价格: <span>{data.price}</span></li>
                        </ul>
                    </div>
                    <div className="item-commit f-r">
                        {this.state.commentState == 0 ? <button>评价</button>
                        :this.state.commentState == 2 ?<button className="hasCommented">已评价</button>
                        :''}
                    </div>
                </div>
                <div>
                    {this.state.commentState == 1 ? 
                    <div className="add-comment">
                        <textarea className="comment-text"></textarea>
                        <button>提交</button>
                        <button className="cancel">取消</button>
                    </div>
                    :''}
                </div>
            </div>
            
        )
    }

}

export default Item