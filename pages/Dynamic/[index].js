import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Dynamic() {
  const router = useRouter();
  const dynamicParam = router.query
  const [data, setData] = useState(null);
  const [showFirstElement, setShowFirstElement] = useState(false);
  const [showSecondElement, setShowSecondElement] = useState(false);

  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);

  const toggleBothElements = () => {
    setShowFirstElement(!showFirstElement);
    setShowSecondElement(!showSecondElement);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/email-sendings/${dynamicParam.index}?populate=*`);
        const data = await response.json();
        console.log(data)
        console.log(data.data.attributes.text.Description)
        //  console.log()
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
    
      <MDBBtn onClick={toggleFirstElement}> Description</MDBBtn>
      <MDBBtn onClick={toggleSecondElement}>Video with link</MDBBtn>
      <MDBRow>
        <MDBCol>
          <MDBCollapse show={showFirstElement} className='mt-5 mx-5 m-5'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
        <MDBCol>
          <MDBCollapse show={showSecondElement} className='m-5'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MDBCollapse>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
