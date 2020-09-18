
import { home } from '@/services';


export default {
  namespace: 'users',
  state: {
    data: {
      list:[],
      pagination:{}
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload
      }
    }
  },
  effects: {
    *getData({ type, payload }, { put, call, select }) {
      const response = yield call(home, payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
  },
};
