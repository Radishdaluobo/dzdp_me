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
            commentState: 0
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
                        {this.state.commentState == 0 ? <button onClick={this.commentHandle.bind(this)}>评价</button>
                        :this.state.commentState == 2 ?<button className="hasCommented">已评价</button>
                        :''}
                    </div>
                </div>
                <div>
                    {this.state.commentState == 1 ? 
                    <div className="add-comment">
                        <textarea className="comment-text" ref="commitText"></textarea>
                        <button onClick={this.submitHandle.bind(this)}>提交</button>
                        <button className="cancel" onClick={this.cancelHandle.bind(this)}>取消</button>
                    </div>
                    :''}
                </div>
            </div>
            
        )
    }
    commentHandle(){
        this.setState({
            commentState: 1
        })
    }
    cancelHandle(){
        this.setState({
            commentState: 0
        })
    }
    submitHandle(){ 
         const submitHandle = this.props.submitComment
         const id = this.props.data.id;
         const value = this.refs.commitText.value.trim();
         if(!value){
             return
         }
         submitHandle(id,value,this.commitOK.bind(this))
    }
    commitOK(){
        this.setState({
            commentState: 2
        })
    }
}

export default Item