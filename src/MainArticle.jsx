import styled from "styled-components/macro";

export default function MainArticle({ src, title, teaser }) {
  return (
    <Wrapper>
      <img src={src} />
      <Heading>{title}</Heading>
      <div>
        <Teaser>{teaser}</Teaser>
        <button>READ MORE</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;

  img {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.h1`
  font-size: calc(56rem / 16);
  font-weight: var(--font-weight-bolder);
  line-height: 1;
`;

const Teaser = styled.p`
  line-height: 1.5;
  color: var(--color-grayblue-dark);
`;
