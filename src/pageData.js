import states from "./states";

const formFields = {
   basic: [
     {
       name: 'name',
       label: 'Name',
       valid: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
     },
     {
       name: 'age',
       label: 'Age',
       valid: /^100|[1-9]?\d$/
     }
   ],
   contact: [
     {
       name: 'phone',
       label: 'Phone Number',
       valid:  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
     },
     {
       name: 'email',
       label: 'Email Address',
       valid: /\S+@\S+\.\S+/,
       invalidMsg: 'Please enter a valid email address'
     }
   ],
   address: [
     {
       name: 'address1',
       label: 'Address'
     },
     {
       name: 'address2',
       label: 'Address 2'
     },
     {
       name: 'city',
       label: 'City'
     },
     {
       name: 'state',
       label: 'State',
       auto: states,
       valid: /^[a-z]{2}$/i
     },
     {
       name: 'zip',
       label: 'Zip Code',
       valid: /^\d{5}(?:[- ]?\d{4})?$/
     }
   ]
 }
 
 const pageData = {
   basic: {
     name: 'basic',
     formFields: formFields.basic,
     linkTo: 'contact',
     heading: 'Please enter basic info',
     buttonLabel: 'Continue'
   },
   contact: {
     name: 'contact',
     formFields: formFields.contact,
     linkTo: 'address',
     heading: 'Please enter contact info',
     buttonLabel: 'Continue'
   },
   address: {
     name: 'address',
     formFields: formFields.address,
     linkTo: 'review',
     heading: 'Please enter address info',
     buttonLabel: 'Continue'
   }
 }

 export default pageData;
 