import styled from "styled-components/macro";

export default function Divider({ size = 1, width = "100%", spacing }) {
  return (
    <Wrapper style={{ height: size, width: width, marginBlock: spacing }} />
  );
}

const Wrapper = styled.div`
  height: 1px;
  background-color: var(--color-grayblue-dark);
`;
