import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchForm, SearchFormButton, SearchInput } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlerChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') {
      alert('enter your search');
      return;
    }

    onSubmit(search);
    e.currentTarget.reset();
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handlerSubmit}>
        <SearchFormButton type="submit">
          <span>{<BsSearch size="18px" />}</span>
        </SearchFormButton>

        <SearchInput
          type="text"
          placeholder="Search movies"
          onChange={handlerChange}
        />
      </SearchForm>
    </SearchBar>
  );
};

export default SearchBar;
