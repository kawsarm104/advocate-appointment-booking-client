import React,{useEffect, useState} from "react";
import { Row,InputGroup,FormControl,Button } from "react-bootstrap";
import AllAdvocateChild from "../AllAdvocateChild/AllAdvocateChild";
// react spinner 
import { css } from "@emotion/react";
import {HashLoader} from "react-spinners";
import axios from "axios";
// react spinner 

const AllAdvocateParent = () => {

  // calling api to get advocate details  
  const [allAdvocate, setAllAdvocate] = useState([]);
  const [displayAdvocate, setDisplayAdvocate] = useState([]);

  useEffect(() => {
    const url = "https://fathomless-coast-82114.herokuapp.com/advocates";
    axios.get(url).then((res) => {
      // console.log(res.data);
      setAllAdvocate(res.data);
      setDisplayAdvocate(res.data);
    });
  }, []);
  
  // calling api to get advocate details  
  // react spinner 
  let [spinner, setSpinner] = useState(true);
  let [color, setColor] = useState("#36D7B7");
  const override = css`
  display: block;
  margin: 125px auto;
  border-color: red;
`;
  // react spinner 

  // handling Search 
  const handleSearch = event => {
    const searchText = event.target.value;
    // console.log(searchText)

    const matchedAdvocates = allAdvocate.filter(advocate =>{
      if(advocate.displayName.toLowerCase().includes(searchText.toLowerCase()) ||
      advocate.category.toLowerCase().includes(searchText.toLowerCase())){
        return true
      }
       
      });
    
        
    setDisplayAdvocate(matchedAdvocates);
    
    console.log(matchedAdvocates.length)
}
  // handling Search 
  // const advocates = allAdvocate.filter(advocate=>advocate.role==="advocate")
  // console.log(advocates)
  if(allAdvocate.length === 0){
    // return "Please wait your internet connection is slow....."
    return <HashLoader color={color} spinner={spinner} css={override}  size={65} />
 
  }
  return (
    <>
    <div className="">
    <InputGroup className="mb-3 w-25 ">
    <FormControl
    className=""
    onChange={handleSearch}
      placeholder="Search Advocate with Name or Category"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    
    {/* <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button> */}
  </InputGroup>
  </div>
      <Row>
      <h3>total addvocate found {allAdvocate.length} </h3>
      {displayAdvocate.map((advocate) => (
        <AllAdvocateChild
          key={advocate._id}
          advocate={advocate}
        ></AllAdvocateChild>
      ))}
      </Row>
    </>
  );
};

export default AllAdvocateParent;
