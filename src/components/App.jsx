import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <Layout>
      <Searchbar />
      <GlobalStyle />
    </Layout>
  );
};
