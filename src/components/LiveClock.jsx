import { useState, useEffect } from "react";
import NepaliDate from "nepali-date-converter";

export default function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = now.toLocaleDateString("en-US", {
    timeZone: "Asia/Kathmandu",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeStr = now.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let bsDateStr = "";
  try {
    const npDate = new NepaliDate(now);
    bsDateStr = npDate.format("DD MMMM YYYY", "np");
  } catch (e) {
    bsDateStr = "";
  }

  return (
    <div className="live-clock">
      <span className="clock-date">📅 {dateStr}</span>
      <span className="clock-divider">|</span>
      {bsDateStr && (
        <>
          <span className="clock-bs">🇳🇵 वि.सं. {bsDateStr}</span>
          <span className="clock-divider">|</span>
        </>
      )}
      <span className="clock-time">🕐 {timeStr} (Nepal Time)</span>
    </div>
  );
}