import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Btn, Input, SimpleForm } from './form.style';

export const Form = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleFormSubmit = async e => {
    e.preventDefault();
    setQuery(inputValue);
    setSearchParams({query: inputValue});
  };
  return (
    <SimpleForm onSubmit={handleFormSubmit}>
      <Input onInput={e => setInputValue(e.target.value)} />

      <Btn type="submit"> Search </Btn>
    </SimpleForm>
  );
};
