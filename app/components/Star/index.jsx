import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const starNum = this.props.starNum;
        return (
            <div className="star">
                {
                    [1,2,3,4,5].map((item,index) => {
                        const active = starNum >= item ? ' active' : ''
                        return <i key={index} className={'icon-star' + active} ></i>
                    })
                }
            </div>
        )
    }

}

export default Star