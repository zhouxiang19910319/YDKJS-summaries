const threshold= 200;
const tax_rate= 0.08;
const phone_price=100;
const accessory_price=10;

var money_spent=0;
var bank_balance= 300.91;

do {
	if (phone_price<threshold) {
		money_spent=(phone_price+accessory_price)*(1+tax_rate);
	}
	else{
		money_spent=phone_price*tax_rate;
	}
	bank_balance=bank_balance-money_spent;

	money_spent= "$"+String(money_spent.toFixed(2));
	console.log(money_spent);

	console.log(bank_balance);
} while (bank_balance>phone_price);
