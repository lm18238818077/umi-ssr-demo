
import { users } from '@/services';


export default {
  namespace: 'count',
  state: {
    data: [],
    title:''
  },
  reducers: {
    save(state, action) {
      console.log(action,'action')
      return {
        ...state,
        ...action.payload
      }
    }
  },
  effects: {
    *getData({ type, payload }, { put, call, select }) {
      console.log(payload,2222)
      const response = yield call(users, payload);
      console.log(response)
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
};
