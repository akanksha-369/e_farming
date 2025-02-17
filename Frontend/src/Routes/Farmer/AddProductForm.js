import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useReducer, useEffect } from "react";

export default function AddProduct() {
  const init = {
    category: "",
    product: "",
    qty: "",
    price: ""   
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.value };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  const [uploaded, setUploaded] = useState({});
  const [file, setFile] = useState();
  const userId = localStorage.getItem("userId"); // Retrieve UID

  const [message, setMessage] = useState("");
const [messageType, setMessageType] = useState(""); // "success" or "error"


  useEffect(() => {
    fetch(`http://localhost:8020/products/getAllProducts`) 
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching Category:", error));
  }, []);

  useEffect(() => {
    if (info.category) {
      fetch(`http://localhost:8020/products/api/products/${info.category}/types`)
        .then((response) => response.json())
        .then((data) => {
          //if (Array.isArray(data)) {
           console.log(data);
            setProduct(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProduct([]);
        });
    } else {
      setProduct([]);
    }
  }, [info.category]);

  const sendData = async (e) => {
    console.log(JSON.stringify(info))
    e.preventDefault();
    try {
    const response = await fetch("http://localhost:8020/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: userId,
        ptid: info.product,
        qty: info.qty,
        price: info.price,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }  
    else {
      const data = await response.json(); 
      console.log(JSON.stringify(data))
      console.log(data.fptid)
      const fptid = data.fptid;
      setUploaded(data);
      console.log(JSON.stringify(uploaded))
      let imageUploaded = false;
      
        const formData = new FormData();
        formData.append("file", file);
        const imageResponse = await fetch(`http://localhost:8020/products/uploading/${fptid}`, {
          method: "POST",
          Headers: {
            "Content-Type":"multipart/form-data"
          },
          body: formData,
        });
        imageUploaded = await imageResponse.json();
        if (!imageUploaded) {
          throw new Error("Image upload failed");
        }
        else {
          alert("image uploaded")
        }
      
    }
    alert("Product Added Successfully!");
    dispatch({ type: "reset" });
  } catch (error) {
    console.error("Error:", error);
  }
}



  /*const sendData = async (e) => {
    e.preventDefault();
    try {
      let imageUploaded = false;
      if (info.imageFile) {
        const formData = new FormData();
        formData.append("file", info.imageFile);
        const imageResponse = await fetch(`http://localhost:8023/uploading/${userId}`, {
          method: "POST",
          body: formData,
        });
        imageUploaded = await imageResponse.json();
        if (!imageUploaded) {
          throw new Error("Image upload failed");
        }
      }
      const response = await fetch("http://localhost:8023/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: userId,
          ptid: info.product,
          qty: info.qty,
          price: info.price,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      alert("Product Added Successfully!");
      dispatch({ type: "reset" });
    } catch (error) {
      console.error("Error:", error);
    }
  }; */

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h2>Add Product</h2>
        </div>
        <div className="card-body p-4">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label>Category:</label>
              <select className="form-control" value={info.category} onChange={(e) => dispatch({ type: "update", fld: "category", value: e.target.value })} required>
                <option value="">-- Choose a Category --</option>
                {categories.map((category) => (<option key={category.pid} value={category.pid}>{category.pname}</option>))}
              </select>
            </div>
            <div className="mb-3">
              <label>Product:</label>
              <select className="form-control" value={info.product} onChange={(e) => dispatch({ type: "update", fld: "product", value: e.target.value })} required>
                <option value="">-- Choose a Product --</option>
                {products.map((product) => (<option key={product.ptid} value={product.ptid}>{product.ptname}</option>))}
              </select>
            </div>
            <div className="mb-3">
              <label>Quantity:</label>
              <input type="number" className="form-control" value={info.qty} placeholder="Enter Quantity" onChange={(e) => dispatch({ type: "update", fld: "qty", value: e.target.value })} />
            </div>
            <div className="mb-3">
              <label>Price:</label>
              <input type="number" className="form-control" value={info.price} placeholder="Enter Price" onChange={(e) => dispatch({ type: "update", fld: "price", value: e.target.value })} />
            </div>
            <div className="mb-3">
              <label>Upload Image:</label>
              <input type="file" className="form-control"  onChange={(e) => {
                setFile(e.target.files[0])
              }} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="reset" className="btn btn-secondary ms-3" onClick={() => dispatch({ type: "reset" })}>Reset</button>
          </form>
        </div>
        <p> {file && file.name}</p>
        <img src={`data:imgae/jpeg;base64,${file && file.name}`} width="100" height="100" />
      </div>
    </div>
  );
}
