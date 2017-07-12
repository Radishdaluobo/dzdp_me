import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/info'
import Comment from './subpage/Comment'
import Buy from './subpage/buy'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <Header pageTitle="商户详情" />
                <Info id={params.id} />
                <Buy id={params.id} />
                <Comment id={params.id} />
            </div>
        )
    }
}

export default Detail