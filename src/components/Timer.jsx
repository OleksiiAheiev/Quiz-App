import React from 'react';

function Timer({ seconds }) {
  const totalSeconds = Math.max(0, seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds - minutes * 60;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes - hours * 60;

  return (
    <span>
      {hours > 0 ? `${hours}:` : ''}
      {remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </span>
  );
}

export default Timer;
