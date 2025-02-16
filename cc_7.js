// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"


// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    const hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
  };
  
  calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
  calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"


  // Task 3: Arrow Function - Customer Loyalty Discount
  const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) {
      discount = 0.15;
    } else if (years >= 3) {
      discount = 0.10;
    } else {
      discount = 0.05;
    }
    const discountedPrice = amount - (amount * discount);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
  };
  
  calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
  calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"