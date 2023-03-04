import styled from "styled-components/macro";
import Divider from "./Divider";

export default function NewArticles({ articles }) {
  return (
    <Wrapper>
      <h2>New</h2>
      {articles.map(({ title, teaser }, idx) => (
        <>
          <NewArticle>
            <h3>{title}</h3>
            <p>{teaser}</p>
          </NewArticle>
          {idx < articles.length - 1 && <Divider spacing={32} />}
        </>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  h2 {
    font-size: 2.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    padding-block: 1rem;
  }

  color: var(--color-white);
  background-color: var(--color-darkblue);
  padding: 1rem 1.5rem;
`;

const NewArticle = styled.article`
  h3 {
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: 0.8rem;
  }

  p {
    color: var(--color-grayblue);
    line-height: 2;
  }
`;
