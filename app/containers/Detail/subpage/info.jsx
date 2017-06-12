import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/DetailInfo'


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <DetailInfo />
            </div>
        )
    }
}

export default Info
