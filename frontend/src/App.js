import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import AddPatient from './components/AddPatient';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Patients</Link>
        <Link to="/add">Add Patient</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PatientsList />} />
        <Route path="/add" element={<AddPatient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
