const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((total, currentBatch) => {
    return total + currentBatch;
  }, 0);
  module.exports = totalBatteries;