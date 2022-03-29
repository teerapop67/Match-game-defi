import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    body {
        margin: 0;
        padding: 0;
        background:#202023;
        color: #fff;
    }

    * {
        box-sizing: border-box;
        font-family: 'Teko', sans-serif;    
    }
`;

export const BandBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 0;
  }
`;

export const BandVideos = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
