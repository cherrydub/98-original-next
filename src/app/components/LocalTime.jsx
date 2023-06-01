import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toUpperCase();

  return (
    <div className="flex">
      <div className="flex flex-col justify-center">
        <img
          src="https://win98icons.alexmeub.com/icons/png/time_and_date-1.png"
          alt=""
          style={{ marginRight: "5px" }}
          width="14px"
        />
      </div>
      <div className="">{formattedTime}</div>
    </div>
  );
}
