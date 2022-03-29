import React, { useState } from "react";
import { Data } from "../../util/data";
import { CardStyled, ImageMatch, Wrapper } from "./styled";

interface Props {
  matchData: Data[];
  onStart: boolean;
}

const CardMatch: React.FC<Props> = (props) => {
  const [onClickMatchPic, setOnClickMatchPic] = useState<number[]>([]);
  const [idSame, setIdSame] = useState<number>();
  const handleMatch = (num: number, id: number) => {
    if (!props.onStart) {
      alert("Click Play to play");
      return;
    }
    if (onClickMatchPic.includes(num)) return;
    console.log(onClickMatchPic.length);
    setTimeout(() => {
      if (onClickMatchPic.length === 1) {
        if (idSame === id) {
          alert("correct");
        }
        setOnClickMatchPic([]);
        setIdSame(0);
        return;
      }
    }, 500);

    setOnClickMatchPic((prv) => [...prv, num]);
    setIdSame(id);
    console.log(onClickMatchPic);
  };

  return (
    <Wrapper>
      {props.matchData.map((match: Data) => (
        <CardStyled
          key={match.number}
          onClick={() => handleMatch(match.number, match.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {onClickMatchPic.includes(match.number) && (
            <>
              <div className="numberHeader">
                <p>{match.number}</p>
                <p>{match.name}</p>
              </div>
              <ImageMatch src={match.img} />
            </>
          )}
        </CardStyled>
      ))}
    </Wrapper>
  );
};

export default CardMatch;
