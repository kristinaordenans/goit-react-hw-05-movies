import { useState } from 'react';
import css from './SearchForm.module.css';

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
    <form className={css.form} onSubmit={handleSubmitForm}>
      <input className={css.input} onChange={handleChange} type="text" />
      <button className={css.btn} type="submit">Search</button>
    </form>
  );

}