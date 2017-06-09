import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router'

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
                            <Link to="/search/jingdian"><li className="f-l jingdian">景点</li></Link>
                            <Link to="/search/ktv"><li className="f-l ktv">KTV</li></Link>
                            <Link to="/search/gouwu"><li className="f-l gouwu">购物</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="f-l shenghuofuwu">生活服务</li></Link>
                            <Link to="/search/jianshenyundong"><li className="f-l jianshenyundong">健身运动</li></Link>
                            <Link to="/search/meifa"><li className="f-l meifa">美发</li></Link>
                            <Link to="/search/qinzi"><li className="f-l qinzi">亲子</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="f-l xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/search/zizhucan"><li className="f-l zizhucan">自助餐</li></Link>
                            <Link to="/search/jiuba"><li className="f-l jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <Link to="/search/meishi"><li className="f-l meishi">美食</li></Link>
                            <Link to="/search/dianying"><li className="f-l dianying">电影</li></Link>
                            <Link to="/search/jiudian"><li className="f-l jiudian">酒店</li></Link>
                            <Link to="/search/xuixianyule"><li className="f-l xuixianyule">休闲娱乐</li></Link>
                            <Link to="/search/waimai"><li className="f-l waimai">外卖</li></Link>
                            <Link to="/search/huoguo"><li className="f-l huoguo">火锅</li></Link>
                            <Link to="/search/liren"><li className="f-l liren">丽人</li></Link>
                            <Link to="/search/dujiachuxing"><li className="f-l dujiachuxing">度假出行</li></Link>
                            <Link to="/search/zuliaoanmo"><li className="f-l zuliaoanmo">足疗按摩</li></Link>
                            <Link to="/search/zhoubianyou"><li className="f-l zhoubianyou">周边游</li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="f-l ribencai">日本菜</li></Link>
                            <Link to="/search/SPA"><li className="f-l SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="f-l jiehun">结婚</li></Link>
                            <Link to="/search/xuexipeixun"><li className="f-l xuexipeixun">学习培训</li></Link>
                            <Link to="/search/xican"><li className="f-l xican">西餐</li></Link>
                            <Link to="/search/huochejipiao"><li className="f-l huochejipiao">火车机票</li></Link>
                            <Link to="/search/shaokao"><li className="f-l shaokao">烧烤</li></Link>
                            <Link to="/search/jiazhuang"><li className="f-l jiazhuang">家装</li></Link>
                            <Link to="/search/chongwu"><li className="f-l chongwu">宠物</li></Link>
                            <Link to="/search/quanbufenlei"><li className="f-l quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? 'active' : ''}></li>
                        <li className={this.state.index === 1 ? 'active' : ''}></li>
                        <li className={this.state.index === 2 ? 'active' : ''}></li>
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