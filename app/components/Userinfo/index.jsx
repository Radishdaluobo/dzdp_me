import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Userinfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const starNum = this.props.starNum;
        return (
            <div className="user-info">
                <p><span className="icon-user"></span>{this.props.userName}</p>
                <p><span className="icon-map-marker"></span>{this.props.userCity}</p>
            </div>
        )
    }

}

export default Userinfo