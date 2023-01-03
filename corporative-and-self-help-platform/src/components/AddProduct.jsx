import React,{useState} from "react";
import { useNavigate} from "react-router-dom";



function AddProduct(props) {

  //useHistory is useNavigate in react-router-dom v6
  const navigate = useNavigate();
  const [product,setProduct]= useState({
    category:"",name:"",pack:[],price:"",unit:"",details:""
  });

  let tname, value;

  const handleChange= (e)=>{
    tname = e.target.name;
    value = e.target.value;

    setProduct({...product, [tname]:value});
  }
  // {
//     "category":"Food",
//     "name":"burger",
//     "pack":[2,3,4],
//     "price":100,
//     "unit":"No.",
//     "details":"best burger ever"
// }

  const postData = async (e)=>{
    e.preventDefault();
    const {category,name,pack,price,unit,details}=product;

    const res = await fetch ("/addProducts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        category,name,pack,price,unit,details
      })
    })

    const data = await res.json();

      if(data.status === 422 || !data){
      window.alert(data.error);
      console.log(data.error);
    }else{
      window.alert(data.message)
      console.log(data.message);
      navigate("/");
    }
   

    
    
  }



  return (
    <div className="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
            <h1 class="mb-3 text-center">Add Product</h1>
            <form class="mb-3" method="POST">
              <div class="row">
                <div class="form-group col-12 col-sm-6">
                  <label for="category">Category:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="category"
                    id="category"
                    autoComplete="off"
                    value={product.category}
                    name="category"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group col-12 col-sm-6">
                  <label for="name">Product Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Product Name"
                    id="name"
                    autoComplete="off"
                    value={product.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group col-12 col-sm-6">
                  <label for="price">Product Price:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    id="price"
                    autoComplete="off"
                    value={product.price}
                    name="price"
                    onChange={handleChange}
                  />
                </div>
                
              <div class="form-group col-12 col-sm-6">
                  <label for="pack">Pack of:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="2,3,4"
                    id="pack"
                    autoComplete="off"
                    value={product.pack}
                    name="pack"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group col-12 col-sm-6">
                  <label for="unit">Unit:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="eg: Kg"
                    id="unit"
                    autoComplete="off"
                    value={product.unit}
                    name="unit"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group col-12 col-sm-6">
                  <label for="details">Product Details:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Detail"
                    id="details"
                    autoComplete="off"
                    value={product.details}
                    name="details"
                    onChange={handleChange}
                  />
                </div>
              <br></br>
              
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-block mb-3" value="Add Product" onClick={postData}>
                  Add Product
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
