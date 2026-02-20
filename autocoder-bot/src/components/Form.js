import React, { useState } from 'react';

const Form = () => {
 const [formData, setFormData] = useState({});

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // Add form submission logic here
 };

 return (
 <form onSubmit={handleSubmit}>
 <input type='text' name='username' onChange={handleChange} />
 <button type='submit'>Submit</button>
 </form>
 );
};

export default Form;
