import React from 'react';
import { useField } from 'formik';
 
export const SingleSelectField = ({ title, ...props }) => {
   
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  
   return (
     <div className='ui-single-select-field'>
       <label className='ui-single-select-field__label' htmlFor={props.id || props.name}>{title}</label>
       <select className="ui-single-select-field__input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

 // set display name
SingleSelectField.displayName = 'SingleSelectField';

// set default props
SingleSelectField.defaultProps = {
  name: 'single-select-field',
  type: 'singleSelect',
  title: '',
  placeholder: 'Enter here',
  primaryClassName: ''
};