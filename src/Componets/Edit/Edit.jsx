import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';


function getdata(){
  let data = JSON.parse(localStorage.getItem("stu_data"));
  if(data != null){
    return data;
  }
  else{
    return [];
  }
}


function Edit() {

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [inputvalue, setinputvalue] = useState(
    location.state.single
    
    )
    // console.log(location);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputvalue({ ...inputvalue, [name]: value })
  }

  const handlesubmit = (e) =>{
    e.preventDefault();

    const gdata = getdata();
    gdata[location.state.index]=inputvalue

    localStorage.setItem("stu_data", JSON.stringify(gdata));
    navigate("/view");
  }


  return (
    <>
      {/* <form > */}
      <Container>
        <Row>
        <Form onSubmit={handlesubmit}>
            <div className='d-flex'>
           <div className="mb-3 col-6" >
                <label className="form-label">Product image</label>
                <input type="text" className="form-control" name='image' value={inputvalue.image} onChange={handleChange} />
              </div>
              <div className="mb-3 col-6" >
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" name='name' value={inputvalue.name} onChange={handleChange} />
              </div>
              <div className="mb-3 col-6">
                <label className="form-label"> Product details</label>
                <input type="text" className="form-control" name='details' value={inputvalue.details} onChange={handleChange} />
              </div>
            </div>
            <div className='d-flex'>
              <div className="mb-3 col-6">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" name='price' value={inputvalue.price} onChange={handleChange} />
              </div>

            </div>
              <button type="submit" className="btn btn-primary">Submit</button>

            </Form>
        </Row>

      </Container>
      {/* </form> */}
    </>
  )
}

export default Edit
