import styled from "styled-components/macro";

import Navbar from "./NavBar";
import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";
import Divider from "./Divider";

const DATA = {
  mainArticle: {
    title: "The Bright Future of Web 3.0?",
    teaser: `We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?`,
    src: "/images/image-web-3-desktop.jpg",
  },
  newArticles: [
    {
      title: "Hydrogen VS Electric Cars",
      teaser: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      teaser:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      teaser:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ],
};

export default function App() {
  const { mainArticle, newArticles } = DATA;
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
  grid-column-gap: 34px;
  grid-row-gap: 72px;
`;

const MainArticleWrapper = styled.div`
  grid-area: main-article;
`;

const TopArticlesWrapper = styled.section`
  grid-area: top-stories;
  justify-content: space-between;
  display: flex;
`;

const TopArticle = styled.article``;
