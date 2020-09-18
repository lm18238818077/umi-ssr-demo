/**
 * title: Count
 */
import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import { Helmet } from 'umi';
import styles from './count.less';

function Page(props) {
  const { data, title } = props.count
  return (
    <div className={styles.normal}>
      <h1>Page count</h1>
      <Helmet encodeSpecialCharacters={false}>
        <title>{title}</title>
      </Helmet>
      {
        data.map((v)=>(
          <div>{v.title}</div>
        ))
      }
    </div>
  );
}

Page.getInitialProps = (async ({ store, isServer, history, match, route }) => {
  await store.dispatch({
    type: 'count/getData',
    payload: { isServer }
  })
  return {
    count: store.getState().count
  }
})


export default connect(({count})=>({count}))(Page)
