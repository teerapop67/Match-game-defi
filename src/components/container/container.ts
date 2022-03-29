import styled from "styled-components";

export const Container = styled.div<{
  md?: boolean;
  w?: string;
  bg?: string;
  h?: string;
  direction?: string;
  items?: string;
  justify?: string;
}>`
  position: relative;
  display: flex;
  align-items: ${({ items }) => items};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  height: ${({ h }) => h};
  max-width: ${(props) => (props.md ? "950px" : "1080px")};
  width: ${({ w }) => w};
  background: ${({ bg }) => bg};
  padding: 5px;
  margin: 0 auto;
`;
