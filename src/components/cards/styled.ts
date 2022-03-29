import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
`;

export const CardStyled = styled(motion.div)`
  padding: 5px 8px;
  position: relative;
  width: 200px;
  height: 280px;
  border-radius: 8px;
  background-image: linear-gradient(
    to right top,
    #1f0811,
    #3d1221,
    #5f172e,
    #831c39,
    #a82141
  );
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  .numberHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      margin: 10px 0;
      font-size: 25px;
    }
    > p:first-child {
      display: flex;
      justify-content: center;
      color: #fff;
      background-color: goldenrod;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
`;

export const ImageMatch = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 100%;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  object-fit: cover;
`;
