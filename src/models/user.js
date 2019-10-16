import axios from 'axios';
import router from 'umi/router'

function login(payload) {
  return axios.post('/api/login', payload).then(res => res.data)
}

const info = JSON.parse(localStorage.getItem('userInfo')) || {
  token: '',
  role: '',
  username: '',
  balance: 0
};

export default {
  namespace: 'user',
  state: info,
  effects: {
    * login({payload}, {call, put}) {
      const res = yield call(login, payload)
      const {code, data} = res;
      if(code === 200) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        yield put({
          type: 'userInfo',
          data
        })
        router.push('/')
      }
    }
  },
  reducers: {
    userInfo(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

