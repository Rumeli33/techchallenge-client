import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function Phones() {

    const [products, setProducts] = useState([]);
    const getAllProducts = () => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/phones`)
          .then((response) => {
            console.log("response is ....",response.data)
            setProducts(response.data)
    })
          .catch((error) => console.log(error));
      };
      useEffect(() => {
        getAllProducts();
      }, []);
    

return(
<>
<h1>
    phones
</h1>
 <div className="ProjectListPage">
        { products.map((product) => (
            <Link to={`/${product.id}`}  key={product.id}>
                <h2> Phone name : {product.name}</h2> </Link>
      ))}     
       
    </div>
</>
)

}

export default Phones;