class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distance, time) {
      if (distance < 0 || time < 0) {
        throw new Error("Distance and time must be non-negative values.");
      }
  
      const totalFare =
        this.baseFare +
        this.costPerMile * distance +
        this.costPerMinute * time +
        this.bookingFee;
  
      return Math.max(totalFare, this.baseFare); // Ensure the total fare is not less than the base fare
    }
  }
  
  // Example usage:
  const uberCalculator = new UberPriceCalculator(5.0, 1.5, 0.2, 2.0);
  
  try {
    const distance = 10.0; // in miles
    const time = 15.0; // in minutes
  
    const totalFare = uberCalculator.calculatePrice(distance, time);
  
    console.log(`The total Uber price for the ride is: $${totalFare.toFixed(2)}`);
  } catch (error) {
    console.error(error.message);
  }
  