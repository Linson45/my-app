import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import TableComponent from "../../components/Table";
import {Link} from "react-router-dom";
import {

  Spin
} from "antd";

function AuthorList() {
 
  const [authors,setAuthors]=useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    setLoading(true);
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(rawData => rawData.json())
      .then(data => setAuthors(data),setLoading(false))
      .catch(rejected => {
        console.log(rejected);
      });
      }, [])


 const columns = [
    
    {
      title: "Name",
      align: "center",
      dataIndex: "name",
      sorter: (a, b) => a["name"] - b["name"],
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Phone",
      align: "center",
      dataIndex: "phone",
      sorter: (a, b) => a["phone"] - b["phone"],
      responsive: ["md", "sm", "xs"],
    },
    // {
    //   title: "Address",
    //   align: "center",
    //   dataIndex: "address",
    //   sorter: (a, b) => a["address"] - b["address"],
    //   responsive: ["md", "sm", "xs"],
    // },
    {
      title: "Id",
      align: "center",
      dataIndex: "id",
      sorter: (a, b) => a["id"] - b["id"],
      render: (text, record) => (
        <span>
          <Link to={'/posts/' + record.id}>{record.id}
            </Link>
        </span>
      ),
      responsive: ["md", "sm", "xs"],
    },
    {
      title: "Username",
      align: "center",
      dataIndex: "username",
      sorter: (a, b) => a["username"] - b["username"],
      responsive: ["md", "sm", "xs"],
    },
    
  ];
    
    return (
      <>
      <TableComponent
          showSorterTooltip={false}
          className={"default-table"}
          columns={columns}
          data={authors}
          id={"mytable"}
          loading={loading}
          pagination={{
            
            pageSize: 10,
          }}
          // paginationDisplay={paginationDisplay}
        />
      </>
    );
  
}
export default AuthorList;