import styled from "styled-components/macro";

export default function TopArticles({ articles }) {
  return (
    <Wrapper>
      {articles.map(({ title, teaser, src }, idx) => (
        <TopArticle key={idx}>
          <img src={src} alt="" />
          <div>
            <span>{`0${idx + 1}`}</span>
            <h2>{title}</h2>
            <p>{teaser}</p>
          </div>
        </TopArticle>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: top-stories;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 36px;
`;

const TopArticle = styled.article`
  display: flex;
  gap: 1.5rem;

  img {
    max-width: 110px;
  }

  h2 {
    line-height: 2;
    font-size: 1.3rem;
    color: var(--color-darkblue);
  }

  p {
    color: var(--color-grayblue-dark);
    line-height: 1.8;
  }

  span {
    color: var(--color-grayblue);
    font-size: 2.2rem;
    font-weight: var(--font-weight-bold);
  }
`;
