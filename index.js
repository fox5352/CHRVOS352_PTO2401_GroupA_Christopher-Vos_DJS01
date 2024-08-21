/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// ---------------- Given Parameters ----------------
/** velocity in (km/h) */
const velocity_in_kmh = 10_000;
/** acceleration in (m/s^2) */
const acceleration_in_ms_squared = 3;
/** seconds in (1 hour) */
const time_in_second = 3_600;
/** distance in (km) */
const distance_in_km = 0;
/** remaining fuel in(kg) */
const fuel_amount_in_kg = 5_000;
/** fuel burn rate in(kg/s) */
const fuel_burn_rate_in_kgs = 0.5;

// ---------------- Util Functions ----------------
/**
 * Calculates the new velocity of a ship.
 * 
 * @param {Object} props - The properties object.
 * @param {number} props.velocity - The current velocity of the ship in (km/h).
 * @param {number} props.acceleration - The acceleration of the ship in (m/s^2).
 * @param {number} props.timeInSeconds - The time in seconds over which the acceleration is applied (Seconds).
 * @returns {number} The new velocity of the ship.
 */
const calcNewVelocity = (props) => {
  const {initialVelocity, acceleration, timeInSeconds} = props;
  
  if (typeof initialVelocity !== 'number' || initialVelocity < 0) throw new Error("Invalid or missing velocity parameter");
  if (typeof acceleration !== 'number') throw new Error("Invalid or missing acceleration parameter");
  if (typeof timeInSeconds !== 'number' || timeInSeconds < 0) throw new Error("Invalid or missing timeInSeconds parameter");

  return initialVelocity + ((acceleration * timeInSeconds) * 3.6);
}


// ---------------- Calculations ----------------

const time_in_hours = time_in_second / 3600;
const newDistance = distance_in_km + (velocity_in_kmh * time_in_hours); //calculates new distance of the ship

const fuel_burnt = fuel_burn_rate_in_kgs * time_in_second;// calculates the amount of fuel used
const remainingFuel = fuel_amount_in_kg - fuel_burnt //calculates remaining fuel


const newVelocity = calcNewVelocity({
  acceleration: acceleration_in_ms_squared,
  initialVelocity: velocity_in_kmh,
  timeInSeconds: time_in_second
});

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






