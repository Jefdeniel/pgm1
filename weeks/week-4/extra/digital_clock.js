/* DIgital clock */

const tick = () => {
  const date = new Date();
  const timeStr = date.toTimeString().split(" ")[0];
  timeStr += date.getMilliseconds;
  console.log(timeStr);
};
tick();
setInterval(tick, 1000);
