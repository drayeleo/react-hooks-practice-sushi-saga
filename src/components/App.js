import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(200);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setSushis(data.map(sushi => {return { ...sushi, eaten: false}} ));
      })
  }, [])

  function handleEatSushi(sushiId, sushiPrice) {
    setSushis(sushis.map(sushi => {
      if (sushi.id === sushiId) {
        return {...sushi, eaten: true}
      } else { return sushi}
    }))
    setMoney(money - sushiPrice);
  }

  const eatenSushis = sushis.filter(sushi => sushi.eaten === true);
  //console.log("eaten sushis: ", eatenSushis);
  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatSushi={handleEatSushi} money={money} />
      <Table plates={eatenSushis} money={money} />
    </div>
  );
}

export default App;

/*
App
  SushiContainer
    Sushi
    MoreButton
  Table
*/