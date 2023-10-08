import { calculateDistance } from "./calculateDistance";

export function checkDistance(userLatitude: any, userLongitude: any) {
  const targetLatitude = 6.8555495
  const targetLongitude = 7.4116402;

  const distance = calculateDistance(
    userLatitude,
    userLongitude,
    targetLatitude,
    targetLongitude
  );

  if (distance <= 0.05) {
    console.log("You are within a 50m radius of the target location.");
    // Do something here if the user is within the radius
    return true
  } else {
    console.log("You are outside the 50m radius of the target location.");
    // Do something else if the user is outside the radius
    return false
  }
}
