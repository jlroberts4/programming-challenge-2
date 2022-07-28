import React, { useState } from 'react';
import './App.css';
import FormPage from './components/FormPage';
import ReviewPage from './components/ReviewPage';
import pageData from './pageData';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  function setValue(value, name, page) {
    setValues({ ...values, [page]: { ...values[page], [name]: value }});
  }

  const commonProps = {
    errors,
    setErrors,
    values,
    setValue
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
        <Routes>
          <Route path="/" element={<FormPage {...pageData.basic} {...commonProps} key='basic' />}/>
          <Route path="/contact" element={<FormPage {...pageData.contact} {...commonProps} key='contact'/>}/>
          <Route path="/address" element={<FormPage {...pageData.address} {...commonProps} key='address'/>}/>
          <Route path="/review" element={<ReviewPage {...commonProps} key='review'/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
