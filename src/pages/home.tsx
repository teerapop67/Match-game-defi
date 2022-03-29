import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../components/container/container";
import { ButtonNormal } from "../components/buttons/button";
import { Box } from "@chakra-ui/react";

const animate = keyframes`
0% { opacity: 1 }
 50% { transform: translateY(15px)}
 100% { transform: translateY(0px)}
`;

const Header = styled.h1`
  font-size: 100px;
  background-image: linear-gradient(
    to right top,
    #ffffff,
    #b9b9b9,
    #777777,
    #ffff,
    #ffff
  );
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  margin: 0;
  margin-top: -10rem;
  /* width: 300px;
  height: 300px; */
  animation: ${animate} 2s infinite;
`;

const Home: React.FC<any> = () => {
  return (
    <Container
      bg="transparent"
      md={true}
      h="100%"
      items="center"
      direction="column"
      justify="center"
    >
      <Box alignItems="center" d="flex" flexDirection="column">
        <Header>Match game</Header>
        <Link to="/game">
          <ButtonNormal f="40" p="10px 100px">
            Start
          </ButtonNormal>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
