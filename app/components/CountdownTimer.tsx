"use client";

import { useState, useEffect } from "react";

// Target date: 48 hours from the current date
const TARGET_DATE = new Date(
  new Date().getTime() + 48 * 60 * 60 * 1000
).toISOString();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(TARGET_DATE).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsLive(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div
        className="text-4xl md:text-6xl font-bold text-cyan-400 animate-pulse"
        data-testid="timer-live-message"
      >
        We are Live!
      </div>
    );
  }

  return (
    <div
      className="flex flex-wrap justify-center gap-4 md:gap-8"
      data-testid="countdown-timer"
    >
      <TimeUnit label="Days" value={timeLeft.days} />
      <TimeUnit label="Hours" value={timeLeft.hours} />
      <TimeUnit label="Minutes" value={timeLeft.minutes} />
      <TimeUnit label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}

function TimeUnit({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="flex flex-col items-center space-y-2"
      data-testid={`timer-unit-${label.toLowerCase()}`}
    >
      <div
        className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg"
        data-testid={`timer-value-${label.toLowerCase()}`}
      >
        <span className="text-2xl md:text-4xl font-bold font-mono">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm md:text-base font-medium text-indigo-200 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
