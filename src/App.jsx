import styled from "styled-components/macro";

import Navbar from "./NavBar";
import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";
import TopArticles from "./TopArticles";
import Divider from "./Divider";

import { DATA } from "./data";

export default function App() {
  const { mainArticle, newArticles, topArticles } = DATA;
  return (
    <Wrapper>
      <Header>
        <BrandWrapper>
          <img src="/images/logo.svg" alt="" />
        </BrandWrapper>
        <Navbar />
      </Header>
      <Main>
        <MainArticleWrapper>
          <MainArticle {...mainArticle} />
        </MainArticleWrapper>
        <NewArticles articles={newArticles} />
        <TopArticles articles={topArticles} />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding-block: 89px;
`;

const Header = styled.header`
  display: flex;
  margin-bottom: 3rem;
`;

const BrandWrapper = styled.div`
  margin-right: auto;
`;

const Main = styled.main`
  display: grid;
  grid-template-areas:
    "main-article main-article new-stories"
    "top-stories top-stories top-stories";
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 72px;
`;

const MainArticleWrapper = styled.div`
  grid-area: main-article;
`;
