import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddPatient(){
  const [form, setForm] = useState({ name: '', age: '', gender: '', contact: '', address: '' });
  const nav = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/patients', form);
      nav('/');
    } catch (err) {
      console.error(err);
      alert('Error creating patient');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="contact" placeholder="Contact" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}
