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
    <div className="text-white p-2 font-bold cursor-not-allowed">
      <p className="">C:\WINDOWS{">"}_welcome to my homepage 😎</p>
      <br />

      <p>₿: ${btcPrice !== null ? btcPrice : "Loading..."}</p>
      <p>eth: ${ethPrice !== null ? ethPrice : "Loading..."}</p>
      <br />
      <p>
        Latest Git push:{" "}
        {lastPushTime !== null
          ? lastPushTime.split("T")[0] + " @ " + lastPushTime.split("T")[1]
          : "Loading..."}
      </p>
      <br />
      <p className="text-right">cherrydub©</p>
    </div>
  );
}
