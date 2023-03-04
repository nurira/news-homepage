import styled from "styled-components/macro";

import Navbar from "./NavBar";
import MainArticle from "./MainArticle";

const DATA = {
  mainArticle: {
    title: "The Bright Future of Web 3.0?",
    teaser: `We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?`,
    src: "/images/image-web-3-desktop.jpg",
  },
};

export default function App() {
  const { mainArticle } = DATA;
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
        <NewArticlesWrapper>
          <h2>New</h2>
          <NewArticle>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </NewArticle>
          <Divider />
          <NewArticle>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </NewArticle>
          <Divider />
          <NewArticle>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </NewArticle>
        </NewArticlesWrapper>
        <TopArticlesWrapper>
          <TopArticle>
            <img src="/images/image-retro-pcs.jpg" alt="" />
            <h2>Reviving Retro PCs</h2>
          </TopArticle>
          <TopArticle>
            <img src="/images/image-top-laptops.jpg" alt="" />
            <h2>Top 10 Laptops of 2022</h2>
          </TopArticle>
          <TopArticle>
            <img src="/images/image-gaming-growth.jpg" alt="" />
            <h2>The Growth of Gaming</h2>
          </TopArticle>
        </TopArticlesWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1080px;
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
  grid-column-gap: 2rem;
  grid-row-gap: 72px;
`;

const MainArticleWrapper = styled.div`
  grid-area: main-article;
`;

const NewArticlesWrapper = styled.section`
  h2 {
    font-size: 2.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
  }

  color: var(--color-white);
  background-color: var(--color-darkblue);
  padding: 2rem 1.5rem;
`;

const NewArticle = styled.article`
  padding-block: 24px;
  h3 {
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-grayblue);
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-grayblue-dark);
`;

const TopArticlesWrapper = styled.section`
  grid-area: top-stories;
  justify-content: space-between;
  display: flex;
`;

const TopArticle = styled.article``;
