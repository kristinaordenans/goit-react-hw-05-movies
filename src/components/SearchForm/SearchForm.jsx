import { useState } from 'react';

export const SearchForm = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    const inputValue = e.currentTarget.value;
    setSearchValue(inputValue.trim());
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (!searchValue) return;
    handleSubmit(searchValue);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input onChange={handleChange} type="text" />
      <button type="submit">Search</button>
    </form>
  );

}