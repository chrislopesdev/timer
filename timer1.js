const numSeconds = process.argv;
const alarmTimers = numSeconds.slice(2).map(x => x * 1);

for (let i = 0; i < alarmTimers.length; i++) {
  if (!Number.isInteger(alarmTimers[i]) || alarmTimers[i] <= 0) {
    // console.log(alarmTimers[i]) // print invalid entries
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
      // console.log(alarmTimers[i]) // print i at beep
    }, alarmTimers[i] * 1000);
  }
}