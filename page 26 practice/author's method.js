const SPENDING_THRESHHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 100;
const ACCESSORY_PRICE = 10;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount){
	return amount*TAX_RATE;
}

/* if toFixed() can only work on numbers, he did not set amount as num, why does this work?*/
function formatAmount(amount){
	return "$" + amount.toFixed(2);
}


while(amount<bank_balance){
	amount = amount + PHONE_PRICE;

	if (amount<SPENDING_THRESHHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));

if (amount>bank_balance) {
	console.log("You can't afford this!!");
}
