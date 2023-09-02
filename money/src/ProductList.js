import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setproducts] = useState([]);
    const [eventvalue, setEventvalue] = useState();

    useEffect(() => {

        getproduct();

    }, []
    )
    const getproduct = async () => {
        let result = await fetch('http://localhost:5000/Productlist')
        result = await result.json();
        setproducts(result)
        console.log(result)
    }
    const Delete = async (id) => {
        let result = await fetch(`http://localhost:5000/Product/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json",
            }
        }
        );
        result = await result.json();
        if (result) {
            console.log(id);
            getproduct();
        } else {

            console.log(id)
        }

    }
    const event_value = (event) => {
        let key = event;
        // console.warn(key);
        setEventvalue(key);
    // console.warn(eventvalue)
         
    }
    const searchHandle = async () => {
        if (eventvalue) {

            console.warn(eventvalue)
            let result = await fetch(`http://localhost:5000/search/${eventvalue}`)
            result = await result.json();
            if (result) {
                setproducts(result)
            }
        } else {
            getproduct();
        }



    }



    return (
        <div className="productlist">
            <div className="searchbar">
                <h1>product list</h1>
                <input onChange={event_value} className="Searchbox" type="text" placeholder="Search Products Here" />
                <button onClick={searchHandle} ><img className="SearchIcon" src="search-icon-sign-design-260nw-730234714.png" alt=""/></button>



            </div>
            <ul className="productlist-ul">
                <li>S.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>category</li>
                <li>Opertaion</li>

            </ul>
            {products.length > 0 ?
                products.map((item, index) =>
                    <ul className="productlist-ul" key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={() => Delete(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}  >update</Link>
                        </li>



                    </ul>




                ) : <h1>no result found </h1>
            }
        </div>



    )

}
export default ProductList