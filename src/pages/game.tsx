import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ButtonNormal } from "../components/buttons/button";
import { Container } from "../components/container/container";
import styled from "styled-components";
import GameField from "../components/gameField";
import Modal from "../components/Modal";

const TimerWrapper = styled.div`
  width: 100%;
  height: 20px;
  background: transparent;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 8px;
  margin-right: 2rem;
`;

const Timer = styled.div<{ w: number }>`
  width: ${({ w }) => `${w}%`};
  height: 100%;
  border-radius: 8px;
  background: #fff;
`;

const TextTimer = styled.p`
  font-size: 42px;
  color: #fff;
`;

const Game: React.FC<any> = () => {
  const [time, setTime] = useState<number>(60);
  const [handleModal, setHandleModal] = useState(false);
  const [percentTime, setPercentTime] = useState<number>(100);
  const [onStart, setOnStart] = useState<boolean>(false);

  const handleModals = () => {
    setHandleModal(!handleModal);
  };

  const startTime = () => {
    setOnStart(true);
    const timer: any = setInterval(() => {
      var t = 0;
      setTime((prv) => (t = prv - 1));
      setPercentTime((prv) => prv - 1.67);
      if (t <= 0) {
        clearInterval(timer);
        setTime(60);
        setHandleModal(true);
      }
    }, 1000);
  };

  return (
    <>
      <Container md={true} w="100%" direction="column">
        <Box
          p={16}
          w="100%"
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <ButtonNormal f="18" p="10px 40px" onClick={startTime}>
            Play
          </ButtonNormal>
          <Box d="flex" alignItems="center" w="50%">
            <TimerWrapper>
              <Timer w={percentTime} />
            </TimerWrapper>
            <TextTimer>00:{time}</TextTimer>
          </Box>
        </Box>
        <GameField onStart={onStart} />
        {handleModal && <Modal handleModal={handleModals} />}
      </Container>
    </>
  );
};

export default Game;
