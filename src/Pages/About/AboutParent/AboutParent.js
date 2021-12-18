import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AboutChild from '../AboutChild/AboutChild';
const AboutParent = ({flag}) => {
    
    const [allDoctors, setAllDoctors] = useState([])
    const url = "https://fathomless-coast-82114.herokuapp.com/doctors"
   useEffect(() => {
      axios.get(url)
        .then(res => {
    setAllDoctors(res.data)
    console.log(res.data)
    })
       }
   , [flag])
  return (
      
    <>
       
      <div>
        
        <h3 className="text-success text-center">
          total doctors {allDoctors.length}
        </h3>
        <div className="container-fluid mx-auto row">
          {allDoctors.map((doctor) => (
            <AboutChild key={doctor._id} doctor={doctor}></AboutChild>
          ))}
        </div>
        </div>
      </>
    );
};

export default AboutParent;
