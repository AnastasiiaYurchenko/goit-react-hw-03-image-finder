import {
  ButtonSearch,
  InputSearch,
  LabelBtn,
  SearchForm,
  SearchbarCont,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const Searchbar = () => {
  return (
    <SearchbarCont>
      <SearchForm>
        <ButtonSearch type="submit">
          <AiOutlineSearch size={48} />
          <LabelBtn>Search</LabelBtn>
        </ButtonSearch>

        <InputSearch
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarCont>
  );
};
