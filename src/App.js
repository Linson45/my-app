import logo from './demo-logo.jpg';
import './App.css';
import { Layout, Menu, Breadcrumb, Modal, Drawer, Button,Form,Input } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { BrowserRouter, NavLink, Switch, Route, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import ArticleList from './components/ArticleList/ArticleList';
import ArticleView from './components/ArticleView/ArticleView';
import AuthorView from './components/AuthorView/AuthorView';
import AuthorList from './components/AuthorList/AuthorList';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  return (
    <div>
      <Layout >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"

          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <div style={{ marginTop: "55px" }}>
            <img src={logo} width={"100%"}/>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              <Link to={'/'} className="nav-link">Posts</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <NavLink to={"/authors"}>
                Users
              </NavLink>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout>
          <Header >
            {/* <Button onClick={()=>setModalVisibile(true)}>
              Test
              </Button> */}
            </Header>
          <Content style={{ height: "80vh", overflow: "auto" }}>
            <Switch>
              <Route path="/posts/:postId" component={ArticleView} />
              <Route path="/author/:authorId" component={AuthorView} />
              <Route path="/authors" component={AuthorList} />
              <Route path="/" component={ArticleList} />
            </Switch>

          </Content>
          <Footer style={{ textAlign: 'center' }}>JSON typicode</Footer>
        </Layout>
      </Layout>
      
    </div>
  );
}

export default App;
