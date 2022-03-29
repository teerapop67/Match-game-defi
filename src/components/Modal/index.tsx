import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Backdrop from "../Backdrop";

const ContainerModal = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
  width: clamp(100%, auto, 90%);
  height: min(100%, auto);
  background: #d84343;
  border-radius: 10px;
  padding: 3rem;
  border: 15px solid #222;
  border-radius: 12px;
  color: #fff;
`;

const dropIn = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

interface Props {
  handleModal: () => void;
}

const Modal: React.FC<Props> = ({ children, handleModal }) => {
  return (
    <Backdrop onClicked={handleModal}>
      <ContainerModal
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>Time up !</h1>
      </ContainerModal>
    </Backdrop>
  );
};

export default Modal;
