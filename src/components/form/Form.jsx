import React, { useState } from 'react';
import { Btn, Input, SimpleForm } from './form.style';
import { useNavigate } from 'react-router-dom';

export const Form = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async e => {
    e.preventDefault();
    setQuery(inputValue);
    navigate(`/movies?query=${encodeURIComponent(inputValue)}`);
  };
  return (
    <SimpleForm onSubmit={handleFormSubmit}>
      <Input onInput={e => setInputValue(e.target.value)} />

      <Btn type="submit"> Search </Btn>
    </SimpleForm>
  );
};
