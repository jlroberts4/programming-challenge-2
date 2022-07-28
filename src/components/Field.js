import React, { useState } from "react";
import Autocomplete from "./Autocomplete";

function Field({ name, label, valid, invalidMsg, errors, setErrors, value, setValue, pageName, auto }) {
   const [autoResults, setAutoResults] = useState([]);

   function validate(e) {
      const { value } = e.target;

      if (value === "" || valid && !valid.test(value)) {
         setErrors({ ...errors, [pageName]: { ...errors[pageName], [name]: invalidMsg || 'Please enter a valid value' } });
         setValue(value, name, pageName);
      } else {
         if (errors[pageName] && errors[pageName][name]) {
            const pageErrors = { ...errors[pageName] };
            delete pageErrors[name];
            setErrors({ ...errors, [pageName]: { ...pageErrors }});
         }
         setValue(value, name, pageName);
      }
      if (auto) {
         setAutoResults(auto.filter(item => item.match(value)));
      }
   }

   return <div className="field">
      <input type="text" name={name} placeholder={label} value={value} onChange={e => validate(e)} />
      { autoResults.length ? <Autocomplete matches={autoResults} onClick={e => { validate(e); setAutoResults([])}}/> : '' }
      { errors[pageName] && errors[pageName][name] ? <label for={name} className="field-error">{errors[pageName][name]}</label> : '' }
   </div>
}

export default Field;