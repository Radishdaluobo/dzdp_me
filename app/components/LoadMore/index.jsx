import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="loadMore te-c" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle(){
        this.props.LoadMoreFn()
    }
    componentDidMount(){
        //滚动时加载 更多
        const loadMoreHandle = this.props.LoadMoreFn;
        const windowTop = window.screen.height;
        const wrapper = this.refs.wrapper
        let timeoutId;
        function callback(){
            const top = wrapper.getBoundingClientRect().top;//getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
            if(top && top < windowTop){
                loadMoreHandle()
            }
        }
        window.addEventListener('scroll',function(){
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(function() {
                callback()
            }.bind(this), 200);
             
        })
    }
}

export default LoadMore