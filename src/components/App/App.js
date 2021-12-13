import React from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import ArticleList from '../ArticleList/ArticleList';
import ArticleView from '../ArticleView/ArticleView';
import AuthorView from '../AuthorView/AuthorView';

export default class App extends React.Component {
  render() {
    return (
     
      <Layout >
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
     <div style={{marginTop:"55px"}}>
       Logo
     </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
         Users
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to={'/'} className="nav-link">Posts</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content  style={{height:"80vh",overflow: "auto"}}>
        <div className="site-layout-background" style={{ padding: 24}}>
        {React.cloneElement(props.children, { ...props })}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    );
  }
}