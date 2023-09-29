const EventEmitter = require('events')

const emitter = new EventEmitter()

function generateRandomHeartRate(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Simulate a heart rate monitoring system
setInterval(() => {
  const MIN = 30;
  const MAX = 240;

  const heartRate = generateRandomHeartRate(MIN, MAX);
  emitter.emit("heartRateTracking", heartRate)
}, 2000)


emitter.on('heartRateTracking', (heartRate) => {
  if (heartRate < 60) {
    console.log(`Low heart rate detected: ${heartRate} bpm. Please pay attention!`);
  } else if (heartRate > 210) {
    setTimeout(() => {
      emitter.emit('emergency');
    }, 1000);
  }
  else if (heartRate > 100) {
    console.log(`High heart rate detected: ${heartRate} bpm. Are you exercising?`);
  } else {
    console.log(`Normal heart rate: ${heartRate} bpm.`);
  }
})

emitter.on('emergency', () => {
  console.log('EMERGENCY!');
  console.log('Abnormal heart rate detected. Seek medical attention immediately!');
});
