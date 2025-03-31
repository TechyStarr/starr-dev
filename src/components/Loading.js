import React, { useEffect, useState } from "react";

function Loading({ onFinish }) {
  const [percentage, setPercentage] = useState(0);
  const [liftOff, setLiftOff] = useState(false);

  useEffect(() => {
    // Increment the percentage over time
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 25; // Increment by 25% (10%, 35%, 60%, 100%)
        }
        clearInterval(interval); // Clear the interval when 100% is reached
        return prev;
      });
    }, 750); // Increment every 750ms

    // Trigger lift-off after the countdown completes
    const timeout = setTimeout(() => {
      setLiftOff(true);
      setTimeout(onFinish, 1000); // Call onFinish after animation ends
    }, 4000); // 4 seconds total

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div
      className={`h-screen w-screen justify-center items-center bg-primaryDark fixed -top-10 left-0 z-50 py-24 transition-transform duration-1000 ${
        liftOff ? "translate-y-[-100%]" : ""
      }`}
    >
        <h1 className="text-[32px] mx-20 mt-12 w-[24px] font-light text-primaryLight mb-4 font-bold">
          CALISTA IFENKWE.
        </h1>      
      <div className="flex flex-col items-center justify-center mt-20">

        <div className="text-white mx-auto text-[72px] font-hkgrotesk font-light">
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default Loading;
