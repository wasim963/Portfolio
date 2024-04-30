import React from 'react';
import { useField } from 'formik';
 
export const InputField = ({ title, primaryClassName, validations, ...props }) => {
   
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  const fieldClassName = `ui-input-field ${primaryClassName}`;
  
   return (
     <div className={fieldClassName}>
       <label className='ui-input-field__label' htmlFor={props.id || props.name}>{title}</label>
       <input className="ui-input-field__input" id={props.id || props.name} {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
   );
 };

 // set display name
InputField.displayName = 'InputField';

// set default props
InputField.defaultProps = {
  name: 'input-field',
  type: 'text',
  title: '',
  placeholder: 'Enter here',
  primaryClassName: ''
};