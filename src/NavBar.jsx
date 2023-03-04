import styled from "styled-components/macro";

export default function Navbar() {
  return (
    <Wrapper>
      <NavLinks>
        <Link>
          <a href="#">Home</a>
        </Link>
        <Link>
          <a href="#">New</a>
        </Link>
        <Link>
          <a href="#">Popular</a>
        </Link>
        <Link>
          <a href="#">Trending</a>
        </Link>
        <Link>
          <a href="#">Categories</a>
        </Link>
      </NavLinks>
    </Wrapper>
  );
}

const Wrapper = styled.nav``;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  list-style-type: none;
`;

const Link = styled.li`
  a {
    color: var(--color-grayblue-dark);
    text-decoration: none;
  }
`;
