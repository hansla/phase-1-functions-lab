function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
  }
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;
  }
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  