import { useEffect, useRef, useState } from 'react';
import './CountdownTimer.css';

interface CountdownTimerProps {
  minutes?: number;
  seconds?: number;
  size?: number;
  totalSeconds?: number;
  onExpire?: () => void;
}

export function CountdownTimer({
  minutes = 5,
  seconds = 12,
  size = 56,
  totalSeconds: totalSecondsProp,
  onExpire,
}: CountdownTimerProps) {
  const initialSeconds = minutes * 60 + seconds;
  const totalSeconds = totalSecondsProp ?? initialSeconds;
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingSeconds((previous) => {
        if (previous <= 1) {
          window.clearInterval(intervalId);
          onExpireRef.current?.();
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const displayMinutes = Math.floor(remainingSeconds / 60);
  const displaySeconds = remainingSeconds % 60;
  const time = `${String(displayMinutes).padStart(2, '0')} : ${String(displaySeconds).padStart(2, '0')}`;
  const progress = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;

  const radius = 20.5 * (size / 50);
  const stroke = 4.5 * (size / 50);
  const circumference = 2 * Math.PI * radius;
  const dashLength = circumference * progress;
  const center = size / 2;

  return (
    <div
      className="countdown-timer"
      style={{ width: size, height: size }}
      aria-label={`${time} remaining`}
      aria-live="polite"
    >
      <svg
        className="countdown-timer__ring"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <circle
          className="countdown-timer__track"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="countdown-timer__progress"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dashLength} ${circumference}`}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <span className="countdown-timer__time" dir="ltr">
        {time}
      </span>
    </div>
  );
}
