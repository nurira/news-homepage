import styled from "styled-components/macro";

export default function MainArticle({ src, title, teaser }) {
  return (
    <Wrapper>
      <img src={src} />
      <Heading>{title}</Heading>
      <div>
        <Teaser>{teaser}</Teaser>
        <Button>READ MORE</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 34px;
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

const Button = styled.button`
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: none;
  font-weight: var(--font-weight-bold);
  padding: 16px 28px;
  text-transform: uppercase;
  letter-spacing: 5px;
`;
