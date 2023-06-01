import React, { useState, useEffect } from "react";

import LastGitPush from "../components/LastGitPush";

export default function WelcomeContent() {
  const [btcPrice, setBtcPrice] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [lastPushTime, setLastPushTime] = useState(null);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => data.bpi.USD.rate_float)
      .then((float) => float.toFixed(0))
      .then((fixed) => setBtcPrice(fixed));

    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => data.ethereum.usd)
      .then((rate) => setEthPrice(rate.toFixed(0)));

    LastGitPush().then((time) => {
      setLastPushTime(time);
    });
  }, []);

  return (
    <div className="text-whitefont-bold cursor-not-allowed">
      <pre className="text-white bg-black text-center">
        {`
               .__                               
__  _  __ ____ |  |   ____  ____   _____   ____  
\\ \\/ \\/ // __ \\|  | _/ ___\\/  _ \\ /     \\_/ __ \\ 
 \\     /\\  ___/|  |_\\  \\__(  <_> )  Y Y  \\  ___/ 
  \\/\\_/  \\___  >____/\\___  >____/|__|_|  /\\___  >
             \\/          \\/            \\/     \\/
      `}

        <div className="preextra">
          <div className="text-right">
            ₿: ${btcPrice !== null ? btcPrice : "Loading..."} Ξ: $
            {ethPrice !== null ? ethPrice : "Loading..."}
          </div>

          <p className="text-right">cherrydub©</p>

          <p></p>
          <p></p>
          <br />
          <p></p>
          <br />

          <p className="">
            C:\WINDOWS{">"}_Latest push:{" "}
            {lastPushTime !== null
              ? lastPushTime.split("T")[0] + " @ " + lastPushTime.split("T")[1]
              : "Loading..."}{" "}
          </p>
        </div>
      </pre>
    </div>
  );
}
