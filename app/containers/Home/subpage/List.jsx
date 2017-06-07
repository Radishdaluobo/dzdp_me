import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore/index'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: true,
            isLoadingMore: false,
            page:0
        }
    }
    render() {
        return (
            <div id="home-list">
                <h2 className="list_title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div>{/*加载中*/}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)}/>
                    : ""
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData()      
    }
    loadFirstPageData(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.resultHandle(result);
        this.setState({
            page:this.state.page+1,
            isLoadingMore: false
        })
    }
    loadMoreData(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName,page);
        this.resultHandle(result);
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    resultHandle(result){
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json.data;//要先查看一下返回的是什么
            const hasMore = json.hasMore;
            if(data.length){
                this.setState({
                    data:this.state.data.concat(data),
                    hasMore:hasMore
                })
            }
        }).catch(ex => {
            if(__DEV__){
                console.error('首页广告模块获取数据出错',ex.message)
            }
        })
    }
}

 export default List