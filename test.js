const tickets = require('./tickets');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

assertEqual(tickets.isValidQuantity(4), true, 'a normal order quantity is valid');
assertEqual(tickets.isValidQuantity(0), false, 'a zero quantity is invalid');
assertEqual(tickets.isValidQuantity(25), false, 'an order over 20 tickets is invalid');

const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 37, 'price for 3 tickets at $15.50 after $10 discount');

const groupPrice = tickets.calculateTicketPrice(5, 15.5);
assertEqual(groupPrice, 60, '5 tickets receive a 10% group discount and $10 discount');

const vipPrice = tickets.calculateTicketPrice(2, 20, true);
assertEqual(vipPrice, 50, 'VIP premium seating adds a 50% surcharge with $10 discount');

process.exitCode = failures > 0 ? 1 : 0;