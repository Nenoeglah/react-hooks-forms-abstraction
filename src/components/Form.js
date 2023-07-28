

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: false,
  });

  const [tableData, setTableData] = useState([]); 

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTableData([...tableData, formData]); 
    setFormData({ 
      firstName: "",
      lastName: "",
      admin: false,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          placeholder="Last Name"
        />
        <input
          type="checkbox"
          name="admin"
          onChange={handleChange}
          checked={formData.admin}
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.admin ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;