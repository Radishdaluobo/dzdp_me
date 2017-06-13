import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentList from '../../../components/CommentList'


class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[]
        }
    }
    render() {
        return (
            <div>
                <CommentList data={this.state.data}/>
            </div>
        )
    }
    componentDidMount(){
        const id = this.props.id;
        const result = getDetailInfo(id);
        result.then((res) => {
            return res.json()
        }).then((json) => {
            const data = json;
            if(data){
                this.setState({
                    data:data
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
