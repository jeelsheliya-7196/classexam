import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { json, useNavigate } from 'react-router';


function getdata() {
    let data = JSON.parse(localStorage.getItem("stu_data"));
    console.log(data );
    if (data != null) {
        return data;
    }
    else {
        return [];
    }
}

function Viewdata() {
    const [inputList, setInputList] = useState({
        search: ""
    })
    const navigate = useNavigate();
    const [studentdet, setproductdet] = useState(getdata());
    const handleedit = (id, index) => {
        let u_data = getdata();
        let updata = u_data.filter((ustud) => {
            return ustud.id == id;
        })
        navigate("/edit", { state: { single: updata[0], index: index } });
    }
   
    const handledelete = (id) => {
        console.log(id, "de-id")
        let de_data = getdata();
        let deletedata = de_data.filter((d) => {
            return d.id != id;
        })
        console.log("....",deletedata );
        localStorage.setItem("stu_data", JSON.stringify(deletedata));
        setproductdet(deletedata);
    } 
    const handleview = (d) =>{
        // console.log(d);
        navigate ('/Productview',{state: d});
    }
   
 


    return (
        <>
            <Container>
                <Row>                 
                   
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>image</th>
                                <th>Product Name</th>
                                <th>Product details</th>
                                <th>Price</th>
                                {/* <th>Edit products</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentdet.map((d, index) => {

                                    return (
                                        <tr>
                                            <td>{d.id}</td>
                                            <td><img src={d.image} alt="" style={{width: '50px'}}/></td>
                                            <td>{d.name}</td>
                                            <td>{d.details}</td>
                                            <td>{d.price}</td>
                                            
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle className='moredata'>
                                                       ...
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => { handleedit(d.id, index) }}>Edit</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => { handledelete(d.id) }}>Delete</Dropdown.Item>
                                                        
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default Viewdata
