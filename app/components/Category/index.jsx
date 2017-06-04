import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import './style.less'


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto:2500,
            callback: (index)=>{
                this.setState({
                    index: index
                })
            }
        }
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>
                        <ul className="clear-fix">
                            <li className="f-l jingdian">景点</li>
                            <li className="f-l ktv">KTV</li>
                            <li className="f-l gouwu">购物</li>
                            <li className="f-l shenghuofuwu">生活服务</li>
                            <li className="f-l jianshenyundong">健身运动</li>
                            <li className="f-l meifa">美发</li>
                            <li className="f-l qinzi">亲子</li>
                            <li className="f-l xiaochikuaican">小吃快餐</li>
                            <li className="f-l zizhucan">自助餐</li>
                            <li className="f-l jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <li className="f-l meishi">美食</li>
                            <li className="f-l dianying">电影</li>
                            <li className="f-l jiudian">酒店</li>
                            <li className="f-l xuixianyule">休闲娱乐</li>
                            <li className="f-l waimai">外卖</li>
                            <li className="f-l huoguo">火锅</li>
                            <li className="f-l liren">丽人</li>
                            <li className="f-l dujiachuxing">度假出行</li>
                            <li className="f-l zuliaoanmo">足疗按摩</li>
                            <li className="f-l zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <li className="f-l ribencai">日本菜</li>
                            <li className="f-l SPA">SPA</li>
                            <li className="f-l jiehun">结婚</li>
                            <li className="f-l xuexipeixun">学习培训</li>
                            <li className="f-l xican">西餐</li>
                            <li className="f-l huochejipiao">火车机票</li>
                            <li className="f-l shaokao">烧烤</li>
                            <li className="f-l jiazhuang">家装</li>
                            <li className="f-l chongwu">宠物</li>
                            <li className="f-l quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className="f-l">1</li>
                        <li className="f-l">1</li>
                        <li className="f-l">1</li>
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = Category