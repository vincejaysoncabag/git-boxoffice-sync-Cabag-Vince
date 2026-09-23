function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, isPremium = false) {
  let total = quantity * basePrice;

  if (quantity >= 5) {
    total *= 0.90;
  }

  if (isPremium) {
    total *= 1.50;
  }

  total -= 10;

  return Math.round(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };