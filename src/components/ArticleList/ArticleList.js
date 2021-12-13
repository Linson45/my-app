import React, { useEffect, useMemo, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import TableComponent from "../../components/Table";
import {Link} from "react-router-dom";
import {
  Input,
  InputNumber,
  List,
  Avatar,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Spin
} from "antd";


function ArticleList(){
const [articles, setArticles] = useState([]);
const [modalVisible, setModalVisibile] = useState(false);
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [loading, setLoading] = useState(true);


useEffect(()=> {
  setLoading(true);
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(rawData => rawData.json())
  .then(data => setArticles(data),setLoading(false))
  .catch(rejected => {
    console.log(rejected);
  });
  }, [])
  const columns = [
    {
      title: "Id",
      align: "center",
      dataIndex: "id",
      sorter: (a, b) => a["Id"] - b["Id"],
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Title",
      align: "center",
      dataIndex: "title",
      sorter: (a, b) => a["title"] - b["title"],
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Child Subject",
      align: "center",
      dataIndex: "Child Subject",
      sorter: (a, b) => a["Child Subject"] - b["Child Subject"],
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Course Name",
      align: "center",
      dataIndex: "Course Name",
      sorter: (a, b) => a["Course Name"] - b["Course Name"],
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Next Session Date",
      align: "center",
      dataIndex: "Next Session Date",
      sorter: (a, b) => a["Next Session Date"] - b["Next Session Date"],
      responsive: ["md", "sm", "xs"],
    },
    
  ];
  useMemo(() => {
    
   }, [])
  const createPost = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method:"POST",
      body:JSON.stringify({
        title:title,
        body:body
      })
    })
         .then(res => {
             if (res.status === 201) {
                // Swal.fire(
                //     'Post Create',
                //     'It is created correctly.',
                //     'success'
                // )
   
                let postId = {id: res.id};
                const newPost = Object.assign({}, {
                  title:title,
                  body:body
                }, postId)
   
                setArticles([ newPost,...articles,]);
               
                
                setModalVisibile(false);
               
             }
         })
         setLoading(false);
   }
  
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(rawData => rawData.json())
    //   .then(data => setArticles(data))
    //   .catch(rejected => {
    //     console.log(rejected);
    // });
  

  

    return (
      <>
       <Spin size="large" spinning={loading} >
       
      <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={articles}

          renderItem={item => (
            <List.Item
              key={item['Course Id']}
              style={{
                color: "#fff",
                width: "760px",
                height: "150px",
                margin: "50px auto",
                display: "-webkit - box",
                display: "-ms - flexbox",
                display: "flex",
                maxWidth: "770px",
                background: "#00C9FF",
                background: "-webkit-linear-gradient(to right, #92FE9D, #00C9FF)",
                background: "-webkit-gradient(linear, left top, right top, from(#92FE9D), to(#00C9FF))",
                background: "-webkit-linear-gradient(left, #92FE9D, #00C9FF)",
                background: "-o-linear-gradient(left, #92FE9D, #00C9FF)",
                background: "linear-gradient(to right, #92FE9D, #00C9FF)",
                boxShadow: "0 0 40px rgba(0,0,0,0.3)",
              }}
            >
              
        <List.Item.Meta
          avatar={item["id"]}
          title={<Link to={'/posts/'+item.id}>{item["title"]} </Link>}
          description={<span>
            <p>{item["body"]}</p>
          </span>}
        />
              
            </List.Item>
          )
          }
                />
                </Spin>
               ,
                
                <Modal
        className="m-archive discard-changes"
        title="Add Posts"
        visible={modalVisible}
        closable={true}
        style={{ top: 20 }}
        centered
        onCancel={() => setModalVisibile(false)}
        footer={[
          <Button key="submit" type="primary" onClick={() =>createPost()}>
            Yes
          </Button>,
          <Button key="back" onClick={() => setModalVisibile(false)}>
            Cancel
          </Button>,
        ]}
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input onChange={(e)=>setTitle(e.currentTarget.value)}/>
        </Form.Item>
        <Form.Item name="body" label="Body" rules={[{ required: true }]}>
          <Input onChange={(e)=>setBody(e.currentTarget.value)} />
        </Form.Item>
        <Form.Item name="user" label="User Id" rules={[{ required: true }]}>
          <InputNumber onChange={(e)=>setBody(e.currentTarget.value)} />
        </Form.Item>
      </Modal>
      
      </>
    );
  }
  export default ArticleList;