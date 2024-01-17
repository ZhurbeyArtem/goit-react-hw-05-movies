import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Btn, Input, SimpleForm } from './form.style.js';

export const Form = ({ updateQueryString }) => {
  const [inputValue, setInputValue] = useState('');

  const [, setSearchParams] = useSearchParams();

  const handleFormSubmit = async e => {
    e.preventDefault();
    updateQueryString(inputValue);
    setSearchParams({ query: inputValue });
  };
  return (
    <SimpleForm onSubmit={handleFormSubmit}>
      <Input onInput={e => setInputValue(e.target.value)} />

      <Btn type="submit"> Search </Btn>
    </SimpleForm>
  );
};
