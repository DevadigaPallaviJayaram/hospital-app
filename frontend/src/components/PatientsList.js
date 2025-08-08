import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientCard from './PatientCard';
import { Link } from 'react-router-dom';

export default function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {patients.length > 0 ? (
          patients.map(p => <PatientCard key={p._id} patient={p} />)
        ) : (
          <p>No patients found</p>
        )}
      </div>
      <Link to="/add">Add New Patient</Link>
    </div>
  );
}
