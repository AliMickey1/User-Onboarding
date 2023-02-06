import Form from './Components/Form';
import React, { useState } from 'react';
import './App.css';
import schema from './validation/formSchema'
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  username: '',
  email: '',
  password: '',
  tos: false
};

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    //WIP
  }

  axios.post('https://reqres.in/api/users', formValues)
  .then(res => {
    // setUsers([res.data, ...users] )
    // <pre>{JSON.stringify(setUsers(res.data, ...users ))}</pre>
    console.log("success", res);
  })
  .catch(err => console.error(err))

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...setFormErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...setFormErrors, [name]: err.errors[0] }))
  }



  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }


  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      errors={formErrors}
      submit={handleSubmit}
      />
      {users.map(user =>(
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
