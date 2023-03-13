import { useState } from 'react';

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const getValue = (e) => {

    console.log(e.target.value);
    return e.target.value;
  };

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: getValue(event),
    }));
  };
  return [values, handleChange, setValues];
};
export default useInputs;
