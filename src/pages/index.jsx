/**
 * title: Github Trending using umi ssr
 */
import React from 'react';
import { List, Avatar,  Pagination } from 'antd';
import { Helmet } from 'umi';
import {home} from '@/services';
import styles from './index.less';

class Page extends React.PureComponent {

  state = {
    data: this.props.data
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data !== this.props.data) {
      this.setState({
        data: nextProps.data
      })
    }
  }

  componentWillMount(){
    console.log('object')
  }

  handleChange = (current, pageSize)=>{
    home({current, pageSize}).then(res=>{
      console.log(res)
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    const { data } = this.state;
    console.log(this.props,'index页面')
    return (
      <div className={styles.normal}>
        <Helmet encodeSpecialCharacters={false}>
          <html lang="en" data-direction="666" />
          <meta name="keywords" content="关键词内容" />
          <meta name="description" content="描述内容" />
          <title>Hello Umi Bar Title</title>
        </Helmet>
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
    )
  }
}

Page.getInitialProps = async ({ store, isServer, history, match, route }) => {
    const res = await home({isServer})
    return {
      data: res && res.data || {}
    }
}

export default Page;
