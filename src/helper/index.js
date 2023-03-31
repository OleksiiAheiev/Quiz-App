const getFormattedTime = (sec) => {
  if (sec < 60) {
    return `00:${sec.toString().padStart(2, '0')}`;
  }
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default getFormattedTime;
