import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [count, setcount] = useState(0);
  const [search, setsearch] = useState("smartphones")
  const [hover, sethover] = useState(false)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${search}?skip=${(count)*1}&limit=4`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.products);
      });
  }, [count,search]);
  const Counhandlerprev=()=>{
    if(count > 0){
      setcount(count - 1)
    }
  }
  const Counthandlernext=()=>{
    if(count < 2){
      setcount(count + 1)
    }
  }
  console.log(data);
  return (
    <div className="data-container">
      <div style={{"textAlign":"center",margin:"20px"}}>
        <select onChange={(e)=>setsearch(e.target.value)}>
          <option selected>smartphones</option>
          <option>laptops</option>
          <option>fragrances</option>
          <option>skincare</option>
          <option>groceries</option>
          <option>home-decoration</option>
          <option>furniture</option>
          <option>tops</option>
          <option>womens-dresses</option>
          <option>womens-shoes</option>
          <option>mens-shirts</option>
          <option>mens-shoes</option>
          <option>mens-watches</option>
          <option>womens-watches</option>
          <option>womens-bags</option>
          <option>womens-jewellery</option>
          <option>sunglasses</option>
          <option>automotive</option>
          <option>motorcycle</option>
          <option>lighting</option>
        </select>
      </div>
      <div style={{display:"flex"}}>
        {data.map((item, i) => {
          return (
            <span key={i} style={{"height":"300px","width":"300px","border":"2px solid black",margin:"10px auto 0",justifyContent:"space-around",display:"flex",background:"#cccc",textAlign:"center",flexDirection:"row"}}>
              {hover?<span><img src={item.thumbnail} alt="thumbnails" style={{"height":"150px","width":"150px",margin:"20px"}} onClick={()=>{sethover(false)}}/><span>{item.description}</span></span>:
              <img src={item.thumbnail} alt="thumbnails" style={{"height":"250px","width":"250px",margin:"20px"}} onClick={()=>{sethover(true)}}/>}
            </span>  
          );
        })}
      </div>
      <div style={{"textAlign":"center",margin:"50px"}}>
      <button onClick={Counhandlerprev}>prev</button><span>{count+1}</span><button onClick={Counthandlernext}>next</button>
      </div>
    </div>
  );
}

export default App;
