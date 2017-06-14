import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div className="login">
                <div className="login-container">
                    <div className="login-form">
                        <i className="icon-tablet"></i>
                        <input type="text" placeholder="请输入手机号" 
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.username} />
                    </div>
                    <div className="login-form">
                        <i className="icon-key"></i>
                        <input type="text" placeholder="请输入验证码" />
                        <span className="checkCode" >发送验证码</span>
                    </div>
                    <button className="loginBtn" onClick={this.clickHandle.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
    changeHandle(e){
        this.setState({
            username:e.target.value//输入框，“约束性组件”
        })
    }
    clickHandle(){
        const username = this.state.username;
        const loginHandle = this.props.loginHandle;
        loginHandle(username)
    }
}

export default Login