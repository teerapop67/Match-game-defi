import React, { Suspense } from "react";
import { Container } from "./components/container/container";
import { BandBg, BandVideos, GlobalStyle } from "./Global.style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <BandBg>
        <BandVideos
          autoPlay
          loop
          muted
          src="img/video/mountain_-_91757 (Original).mp4"
        />
      </BandBg>
      <Container md={true} direction="column" h="100vh">
        <Router>
          <Suspense fallback={<>Loading...</>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </Suspense>
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
