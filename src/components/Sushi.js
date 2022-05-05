import React, { useState } from "react";

function Sushi({ sushi, handleEatSushi, money }) {
  const [eaten, setEaten] = useState(sushi.eaten);

  function handleClickSushi() {
    if (money >= sushi.price) {
      handleEatSushi(sushi.id, sushi.price);
      setEaten(true);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickSushi}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
