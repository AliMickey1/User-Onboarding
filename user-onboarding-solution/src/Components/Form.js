import React from 'react';

const Form = (props) => {

    const { change, submit } = props;
    const { username, email, password, tos } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

  return (
    <div>
        <h1>My cool form!</h1>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>

            <form onSubmit={onSubmit}>
                <label>Name:
                <input 
                type="text" 
                name="username" 
                value={username}
                onChange={onChange}
                />
                </label> <br />
                
                <label>Email:
                <input 
                type="email" 
                name="email"
                value={email}
                onChange={onChange} 
                />
                </label><br />
                
                <label>Password:
                <input 
                type="password" 
                name="password" 
                value={password}
                onChange={onChange}
                />
                </label> <br />
                
                <label>Terms of Service:
                <input 
                type="checkbox" 
                name="tos"
                checked={tos}
                onChange={onChange} 
                />
                </label> <br />
                
                <input type="submit" value="Create a Friend" />
            </form>

    </div>
  )
}

export default Form;