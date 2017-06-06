import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import ListCompoent from '../../../components/List'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
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
            </div>
        )
    }
    componentDidMount(){
        const cityName = this.props.cityName;
        const result = getListData(cityName,1);
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json.data;//要先查看一下返回的是什么
            if(data.length){
                this.setState({
                    data:data
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