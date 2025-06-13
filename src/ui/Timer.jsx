import { useEffect, useState } from "react";

function Timer({ styles }) {
  const calcTimeLeft = () => {
    const diff = +new Date("2025-07-10") - +new Date();
    let timeLeft =
      diff > 0
        ? {
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
            2,
            "0"
          ),
          mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
            2,
            "0"
          ),
          secs: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        }
        : {};

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="text-center transition-all duration-700">
      <div
        className={`text-center items-center flex  transition-all duration-700 flex-row-reverse ${styles ? "text-xs" : "text-sm"
          }`}
      >
        {Object.entries(timeLeft).map((el, i) => (
          <div
            key={i}
            className="flex flex-col p-2 transition-all duration-700 w-fit font-semibold rounded-lg rounded-box text-neutral-content"
          >
            <span className={`${styles ? "text-lg" : "text-2xl"}`}>
              <span>{el.at(1)}</span>
            </span>
            <span
              className={`font-bold transition-all duration-700 ${styles ? "text-[0.60rem]" : "text-xs"
                } uppercase`}
            >
              {el[0]}
            </span>
          </div>
        ))}
      </div>
      <p
        className={`font-bold transition-all duration-700 ${styles ? "text-[0.60rem]" : ""
          }`}
      >
        Untill our big day
      </p>
    </div>
  );
}

export default Timer;
