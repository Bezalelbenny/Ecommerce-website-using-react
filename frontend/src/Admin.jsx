import {useState} from "react";
import axios from "axios";

function Admin() {
  const[f_name,setFname]=useState("");
  const[l_name,setLname]=useState("");
  const[age,setAge]=useState("");
  const[user,setUser]=useState("");
  const[email,setEmail]=useState("");
  
  
  const[shop,setShop]=useState([]);
  
   function view()
  {
    axios.post("http://localhost:5000/view",{f_name,l_name,age,user}).then((res)=>{setShop(res.data);});

  }
  function update()
  {
    axios.post("http://localhost:5000/update",{f_name,l_name,age,user,email}).then((res)=>{alert(res.data);
      view();
    });

  }
  function deleteUser()
  {
    axios.post("http://localhost:5000/delete",{email}).then((res)=>{alert(res.data);
      view();
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
          
        </tbody>
      </table>
      <button type="button" onClick={view}>View</button>
      <button type="button" onClick={update}>Update</button>
      <button type="button" onClick={deleteUser}>Delete</button>
        <table border="1">
            <thead><tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>User</th>
                <th>Email</th>
                
                </tr>

            </thead>
            <tbody>
                {shop.map((row)=>(
                    <tr key={row.email}>
                        <td>{row.f_name}</td>
                        <td>{row.l_name}</td>
                        <td>{row.age}</td>
                        <td>{row.user}</td>
                        <td>{row.email}</td>
                    </tr>

                ))}
                

            </tbody>
        </table>
        

    </div>

  );


}

export default Admin;