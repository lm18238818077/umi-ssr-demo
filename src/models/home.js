function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
import { home } from '@/services';


export default {
  namespace: 'home',
  state: {
    data: {
      list: [],
        pagination: {
          cuttent: 1,
          pageSize: 10
        }
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
