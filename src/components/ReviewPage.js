import React, { useState } from "react";
import Field from "./Field";
import Button from './Button';

const ReviewField = ({ label, value }) => {
   return <div className="review-field">
      <label>{label}</label>
      <input type="text" value={value.charAt(0).toUpperCase() + value.slice(1)} disabled className="review-value" />
   </div>
}

function FormPart({ values }) {
   return <div>
      <h2 className="title">Review Details</h2>
      <form>
         {Object.keys(values).map(page => Object.keys(values[page]).map(field => <ReviewField label={field} value={values[page][field]} />)).flat()}
      </form>
      <div className="button-container">
      <div className="divider"/>
         <button onClick={() => console.log(`Submitted values: ${values}`)} className="button">Submit</button>
      </div>
   </div>
}

export default FormPart;