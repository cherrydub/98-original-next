import React, { useState, useEffect } from "react";

export default function WelcomeContent() {
  const [btcPrice, setBtcPrice] = useState(null);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => data.bpi.USD.rate_float)
      .then((float) => float.toFixed(0))
      .then((fixed) => setBtcPrice(fixed));
    //   .then((string) => Number(string))
    //   .then((rate) => setBtcPrice(rate));
  }, []);

  return (
    <div className="text-white p-2 font-bold">
      <p className="">C:\WINDOWS{">"}_welcome to my homepage</p>
      <br />
      <p>cherrydub</p>
      <br />

      <p>BTC: ${btcPrice !== null ? btcPrice : "Loading..."}</p>
      <p>ETH: $1897</p>
    </div>
  );
}
