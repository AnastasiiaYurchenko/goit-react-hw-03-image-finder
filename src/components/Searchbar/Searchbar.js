import { ButtonSearch, SearchForm } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <Searchbar>
      <SearchForm>
        <ButtonSearch type="submit">
          <span className="button-label">Search</span>
        </ButtonSearch>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
};
