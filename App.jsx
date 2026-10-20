import { useState } from 'react'
import{BrowserRouter,Routes,Route,useNavigate} from "react-router-dom";
import Admin from './Admin';
import Customer from './Customer';
import ProductDetails from "./ProductDetails";
import './App.css';
import axios from 'axios';

function Shopcrude() {
  const[f_name,setFname]=useState("");
  const[l_name,setLname]=useState("");
  const[age,setAge]=useState("");
  const[user,setUser]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  
  
  const navigate=useNavigate();
  
function register() {
  axios.post("http://localhost:5000/register", {
    f_name, l_name, age, user, email, password
  })
  .then((res) => {
    alert(res.data);

    if (res.data !== "Registration Successful") {
      return;
    }

    if (
      user === "admin" &&
      email === "admin@gmail.com" &&
      password === "admin.123"
    ) {
      navigate("/admin");
    }
    else if (user === "customer") {
      navigate("/customer");
    }
  })
  .catch((err) => {
    console.log(err);
    alert("Registration failed. Check the server.");
  });
}

 
  return(
    <div align="center">
      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td><input type="text" value={f_name} onChange={(e)=>setFname(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td><input type="text" value={l_name} onChange={(e)=>setLname(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Age:</td>
            <td><input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/></td>
          </tr>
          <tr>
            <td>User:</td>
            <td><select value={user} onChange={(e)=>setUser(e.target.value)}>
              <option value="">--Select a User Type</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
              </select></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
          </tr>
          <tr>
            <td>Password:</td>
            <td><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
          </tr>
        </tbody>
        


      </table>
      <br />
        <button type="button" onClick={register}>Register</button>
        <button type='button' onClick={()=>navigate("/customer")}>Login</button>
      <br />
      
      


    </div>

  );
  

  
}
function App(){
  
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shopcrude/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;

