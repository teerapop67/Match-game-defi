import styled from "styled-components";

export const ButtonNormal = styled.button<{ p: string; f: string }>`
  font-size: ${({ f }) => `${f}px`};
  cursor: pointer;
  color: #fff;
  padding: ${({ p }) => p};
  border: none;
  border-radius: 8px;
  background-image: linear-gradient(
    to left bottom,
    #290de3,
    #a900b3,
    #d50082,
    #e50058,
    #e32538
  );

  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);

  -webkit-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 purple;
  -moz-box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 purple;
  box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 purple;

  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  transition: all 1s ease;

  &:active {
    top: 10px;
    background-color: #f78900;
    -webkit-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
    -moz-box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3pxpx 0 #915100;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #915100;
  }

  :hover {
    bottom: 2px;
    box-shadow: 0px 0px 10px 1px #fff;
  }

  :after {
    content: "";
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
`;
