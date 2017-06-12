import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getSearchData } from '../../../fetch/Search/search'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore/index'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page:0
        }
    }
    render() {
        return (
            <div id="home-list">
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : ""
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
        const keyword = this.props.keyword;
        const category =  this.props.category;
        const result = getSearchData(cityName, 0, category, keyword);
        this.resultHandle(result);
        this.setState({
            page:this.state.page+1,
            isLoadingMore: false,
            hasMore: true
        })
    }
    loadMoreData(){
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const keyword = this.props.keyword;
        const category =  this.props.category;
        const result = getSearchData(cityName, page, category, keyword);
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