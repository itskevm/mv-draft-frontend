import React from 'react'
import { css } from '@emotion/react'
import { Layout, Menu } from 'antd'
import FormLayoutDemo from './../comps/Suggest'
import Lost from './../comps/Lost'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
const { Header, Content, Footer } = Layout

const footerCss = css`
  text-align: center;
`

const divCss = css`
  padding: 10px 0;
`

const CustomLayout = (props) => {
  return (
    <Layout className="layout">
      <Router>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/view">View List</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/submit">Submission</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Route exact path='/submit' component={FormLayoutDemo}/>
        <Route exact path='/view'>
        <div className="site-layout-content" css={divCss}>
          <h1>View List</h1>
          <p>Do you think it's petty if you begin telling people, "No, stop.
            Instead of telling me what movie to watch, because I obviously will
            not remember, please direct yourself to my website and submit your plea
            as to what you think I should watch"? The answer: Yes. But, it was a 
            cool idea for an app, so I'll leave it at that. Check out what I've seen.</p>
          <hr />
          {props.children}
        </div>
        </Route>
        <Route exact path='/' component={Lost} />
      </Content>
      <Footer css={footerCss}>Ant Design ©2018 Created by Ant UED</Footer>
    </Router>
    </Layout>
  )
}

export default CustomLayout