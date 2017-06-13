import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentList from '../../../components/CommentList/index'
import LoadMore from '../../../components/LoadMore'

import { getCommentList } from '../../../fetch/detail/detail'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[],
            page:0,
            hasMore:true,
            isLoadingMore:false
        }
    }
    render() {
        return (
            <div id="comment-list">
                <h3 className="list_title">用户点评</h3>
                {
                    this.state.data.length
                    ? <CommentList data={this.state.data}/>
                    : ''
                }
                <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.LoadMoreFn.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        const id = this.props.id;
        this.loadFirstPage(id);
    }
    loadFirstPage(id){
        this.setState({
          isLoadingMore:true  
        })
        const result = getCommentList(0,id);
        this.loadDataList(result);
        this.setState({
            isLoadingMore:false,
            page:this.state.page + 1,
        })
    }
    LoadMoreFn(page,id){
        this.setState({
          isLoadingMore:true  
        })
        const result = getCommentList(page,id);
        this.loadDataList(result);
        this.setState({
            isLoadingMore:false,
            page:this.state.page + 1
        })
    }
    loadDataList(result){
        result.then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json);
            const data = json.data;
            if(data){
                this.setState({
                    data:this.state.data.concat(data)
                })
            }
        }).catch(ex => {
            if(__DEV__){
                console.error('获取商户详情出错',ex.message)
            }
        })
    }
}

export default Comment
