import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            starNum: 0
        }
    }
    render() {
        let starNum = this.props.starNum;
        if(starNum > 5){
            starNum = starNum % 5
        }
        return (
            <div className="star">
                {
                    [1,2,3,4,5].map((item,index) => {
                        const active = starNum >= item ? ' active' : ''
                        return <i key={index} className={'icon-star' + active} onClick={this.clickHandle.bind(this.item)}></i>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        // this.setState({
        //   starNum: this.props.starNum  
        // })
    }
    clickHandle(){
        
    }

}

export default Star