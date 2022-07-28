import React, { useState } from "react";
import Field from "./Field";
import Button from './Button';

function FormPart(props) {
   const { heading, formFields, linkTo, buttonLabel, errors, setErrors, values, setValue, name: pageName } = props;

   const allFieldsEntered = formFields.reduce((acc, field) => acc && Object.keys(values[pageName] || {}).includes(field.name), true);

   return <div>
      <h2 className="title">{heading}</h2>
      <form>
         {formFields.map(field => <Field {...field} errors={errors} setErrors={setErrors} setValue={setValue} value={values[pageName] && values[pageName][field.name] || ''} pageName={pageName} />)}
      </form>
      <div className="button-container">
      <div className="divider"/>
         <Button label={buttonLabel} linkTo={linkTo} disabled={errors[pageName] && Object.keys(errors[pageName]).length || !allFieldsEntered} />
      </div>
   </div>
}

export default FormPart;