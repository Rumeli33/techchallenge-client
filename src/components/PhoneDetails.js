import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function PhoneDetails() {
    const [product, setProduct] = useState("");
    const  {phoneId}  = useParams();
    console.log("product id:",phoneId);
   
      useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/phones/${phoneId}`)
        .then((response) => {
          const oneProduct = response.data;
          console.log(response);
          setProduct(oneProduct);
        })
        .catch((error) => console.log(error));
    
      },[]);

      return(
        <>
            <h3>{product.name}</h3>
            <h3>{product.manufacturer}</h3>
            <h3>{product.price}</h3>


        </>


      )


}
export default PhoneDetails
