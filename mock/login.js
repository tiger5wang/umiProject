
export default {
  "post /api/login"(req, res) {
    const {username, password} = req.body;
    console.log('req', req)
    console.log(username, password);
    if(username === 'admin' && password === '123') {
      return res.json({
        code: 200,
        data: {
          token: 'thisisadmintoken',
          role: 'admin',
          username: 'Tiger',
          balance: 10000000000
        }
      })
    } else if(username === 'tom' && password === '123') {
      return res.json({
        code: 200,
        data: {
          token: 'thisisusertoken',
          role: 'admin',
          username: 'tom',
          balance: 10000
        }
      })
    }
    return res.json({
      code: 201,
      data: {msg: '登录失败'}
    })
  }
}

