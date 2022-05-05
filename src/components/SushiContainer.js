import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleEatSushi, money }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  function buildSushis() {
    return (
      // <Sushi />
      // for (let i = sushiIndex; i < sushiIndex  + 4; i++) {
      //   return <Sushi />
      // }
      sushis.filter((_, index) => index - sushiIndex < 4 && index >= sushiIndex)
        .map(sushi => {
          return <Sushi
            key={sushi.id} 
            sushi={sushi} 
            handleEatSushi={handleEatSushi}
            money={money}
          />
        })
    )
  }

  function handleMoreSushi() {
    if (sushiIndex < sushis.length - 4) {
      setSushiIndex(sushiIndex + 4);
    } else setSushiIndex(0);
  }

  return (
    <div className="belt">
      {buildSushis()}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
