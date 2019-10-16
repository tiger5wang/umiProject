import React, { Component } from 'react';
import { Login } from 'ant-design-pro';
import {connect} from 'dva'

import styles from './index.css'

const { UserName, Password, Submit } = Login;

@connect()
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onSubmit = (err, value) => {
    // console.log(err, value)
    if(!err) {
      this.props.dispatch({
        type: 'user/login',
        payload: value
      })
    }
  }

  render() {
    return(
      <div className={styles.loginForm}>
        <img className={styles.logo} src="https://zos.alipayobjects.com/rmsportal/DuZnPddOZJNoNRH.png" alt=""/>
        <Login onSubmit={this.onSubmit}>
          <UserName
            name='username'
            placeholder='请输入用户名'
            rules={[{required: true, message: '请输入用户名'}]}
          />
          <Password
            name='password'
            placeholder='请输入密码'
            rules={[{required: true, message: '请输入密码'}]}
          />
          <Submit>登录</Submit>
        </Login>
      </div>
    )
  }
}

export default LoginPage
