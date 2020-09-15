import { useEffect, useState } from 'react';
import { List, Avatar, Tag, Icon, Button, Pagination } from 'antd';

import fetch from 'umi-request';

import styles from './users.less';

function Page(props) {
  const [data, setData] = useState({});
  useEffect(()=>{
    handleChange()
  },[])

  const handleChange = (current, pageSize)=>{
    fetch('/api/home',{
      params: {current, pageSize}
    }).then(res=>{
      setData(res.data)
    })
  }

  console.log(data)



  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <h2>users ddd</h2>
      <Pagination onChange={handleChange} {...data?.pagination}/>
      <ul>
        {(data.list || []).map(user => (
          <li key={user.num}>{user.num}</li>
        ))}
      </ul>
    </div>
  )
}


export default Page;
