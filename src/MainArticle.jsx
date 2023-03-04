import styled from "styled-components/macro";

export default function MainArticle({ src, title, teaser }) {
  return (
    <Wrapper>
      <img src={src} />
      <Heading>{title}</Heading>
      <Info>
        <Teaser>{teaser}</Teaser>
        <Button>
          <a href="#">READ MORE</a>
        </Button>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 36px;

  img {
    grid-column: 1 / -1;
  }
`;

const Heading = styled.h1`
  font-size: calc(64rem / 16);
  font-weight: var(--font-weight-bolder);
  line-height: 1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Teaser = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--color-grayblue-dark);
`;

const Button = styled.button`
  background-color: var(--color-secondary);
  color: var(--color-white);
  border: none;
  font-weight: var(--font-weight-bold);

  text-transform: uppercase;
  letter-spacing: 5px;

  a {
    text-decoration: none;
    display: block;
    color: inherit;
    padding: 16px 28px;

    &:hover {
      background-color: var(--color-darkblue);
    }
  }
`;
