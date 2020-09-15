/**
 * title: Github Trending using umi ssr
 */
import React from 'react';
import { List, Avatar, Tag, Icon, Button, Pagination } from 'antd';
import fetch from 'umi-request';
import styles from './index.less';
import Father from '@/components/Father'

class Page extends React.PureComponent {

  state = {
    data:{
      ...this.props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data !== this.props.data) {
      this.setState({
        data: nextProps.data
      })
    }
  }

  handleChange = (current, pageSize)=>{
    fetch('/api/home',{
      params: {current, pageSize}
    }).then(res=>{
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    const { data } = this.state;
    console.log(data,this.props.data)
    return (
      <div className={styles.normal}>
        <Button href="/" type="primary">
          全部
        </Button>
        <Father/>
        <h1>Github Trending Koa.js</h1>
        <Pagination onChange={this.handleChange} {...data?.pagination}/>
        <List
          itemLayout="horizontal"
          dataSource={data?.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.num}
                    >
                      {item.num}
                    </a>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

Page.getInitialProps = async (ctx) => {
    const res = await fetch(ctx.isServer ? 'http://localhost:3333/home' : '/api/home')
    return {
      data: res.data
    }
}

export default Page;
