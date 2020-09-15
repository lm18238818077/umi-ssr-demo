function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
import { users } from '@/services';


export default {
  namespace: 'users',
  state: {
    count: 0,
    list:[]
  },
  reducers: {
    add(state) {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    reset(state) {
      return {
        ...state,
        count: 0,
      };
    },
    save(state, action) {
      return {
        ...state,
        list: action.payload
      }
    }
  },
  effects: {
    *getData({ type, payload }, { put, call, select }) {
      const response = yield call(users, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
  },
};
