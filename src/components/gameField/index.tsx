import { Box } from "@chakra-ui/react";
import React from "react";
import { matchData } from "../../util/data";
import CardMatch from "../cards";

interface Props {
  onStart: boolean;
}

const GameField: React.FC<Props> = (props) => {
  return (
    <>
      <Box d="flex" flexDirection="column" p={10}>
        <CardMatch onStart={props.onStart} matchData={matchData} />
      </Box>
    </>
  );
};

export default GameField;
