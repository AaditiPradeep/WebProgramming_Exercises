import React, { useState } from "react"; 
 
function NovellServicesLogin() { 
  const [formData, setFormData] = useState({ 
    username: "", 
    password: "", 
    cityOfEmployment: "", 
    webServer: "", 
    role: "", 
    singleSignOn: [], 
  }); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
  }; 
 
  const handleCheckboxChange = (e) => { 
    const { name, checked } = e.target; 
    setFormData({ 
      ...formData, 
      singleSignOn: checked 
        ? [...formData.singleSignOn, name] 
        : formData.singleSignOn.filter((item) => item !== name), 
    }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log("Form submitted:", formData); 
  }; 
 
  const handleReset = () => { 
    setFormData({ 
      username: "", 
      password: "", 
      cityOfEmployment: "", 
      webServer: "", 
      role: "", 
      singleSignOn: [], 
    }); 
  }; 
 
  return ( 
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}> 
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2> 
      <form onSubmit={handleSubmit}> 
        <label> 
          Username: 
          <input type="text" name="username" value={formData.username} 
            onChange={handleChange} /> 
        </label> 
        <label> <br/><br/>
          Password: 
          <input type="password" name="password" value={formData.password} 
            onChange={handleChange} /> 
        </label> <br/><br/>
        <label> 
          City of Employment: 
          <input type="text" name="cityOfEmployment" value={formData.cityOfEmployment} 
            onChange={handleChange} /> 
        </label> <br/><br/>
        <label> 
          Web Server: 
          <select name="webServer" value={formData.webServer} onChange={handleChange}> 
            <option value="">-- Choose a server --</option> 
            <option value="server1">Server 1</option> 
            <option value="server2">Server 2</option> 
            <option value="server3">Server 3</option> 
          </select> 
        </label> <br/><br/>
        <fieldset> 
          <legend>Please specify your role:</legend> 
          {['admin', 'engineer', 'manager', 'client'].map((role) => ( 
            <label key={role}> 
              <input 
                type="radio" 
                name="role" 
                value={role} 
                checked={formData.role === role} 
                onChange={handleChange} 
              /> 
              {role.charAt(0).toUpperCase() + role.slice(1)} 
            </label>  
          ))} 
          <br/><br/>
        </fieldset> 
        <fieldset> 
          <legend>Single Sign-on:</legend> 
          {['mail', 'payroll', 'selfService'].map((item) => ( 
            <label key={item}> 
              <input 
                type="checkbox" 
                name={item} 
                checked={formData.singleSignOn.includes(item)} 
                onChange={handleCheckboxChange} 
              /> 
              {item.charAt(0).toUpperCase() + item.slice(1)} 
            </label> 
          ))} 
          <br/><br/>
        </fieldset> 
        <div style={{ textAlign: "center", marginTop: 20 }}> 
          <button type="submit">Login</button> 
          <button type="button" onClick={handleReset} style={{ marginLeft: 10 }}> 
            Reset 
          </button> 
        </div> 
      </form> 
    </div> 
  ); 
} 
 
export default NovellServicesLogin;