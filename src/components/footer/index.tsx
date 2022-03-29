import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../container/container";

const LinkSocial = styled.a`
  color: #fff;
  margin-right: 2rem;
  :hover {
    color: #00ff7f;
  }
`;

const Footer: React.FC<any> = () => {
  return (
    <>
      <Container md={true} w="100%">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Text d={{ base: "none", md: "inline-block" }}>
            &copy; 2021 Teerapop All right reversed
          </Text>
          <Box>
            <LinkSocial
              href="https://www.facebook.com/benz.acdemy/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </LinkSocial>
            <LinkSocial
              href="https://twitter.com/benzztj"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </LinkSocial>
            <LinkSocial
              href="https://www.instagram.com/benzztj/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </LinkSocial>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
