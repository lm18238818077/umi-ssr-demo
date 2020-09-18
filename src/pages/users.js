import { useEffect, useState } from 'react';
import { connect } from 'dva';
import { List, Avatar, Tag, Icon, Spin, Pagination } from 'antd';


import styles from './users.less';


function Page(props) {
  const { users:{data}, dispatch, loading } = props
  const handleChange = (current, pageSize)=>{
    dispatch({
      type: 'users/getData',
      payload: { current, pageSize }
    })
  }
  return (
    <Spin spinning={loading}>
      <div className={styles.normal}>
        <h1>Page users</h1>
        <ul>
          {(data?.list || []).map(user => (
            <li key={user.num}>{user.num}</li>
          ))}
        </ul>
        <Pagination onChange={handleChange} {...data?.pagination}/>
      </div>
    </Spin>
  )
}

Page.getInitialProps = (async ({ store, isServer, history, match, route }) => {
  await store.dispatch({
    type: 'users/getData',
    payload: { isServer }
  })
  return {
    users: store.getState().users
  }
})


export default connect(({users, loading})=>({users, loading: loading.models.users}))(Page);
