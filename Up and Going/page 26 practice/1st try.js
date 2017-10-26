const ACCESSORY = 15.99;
const TAX_RATE = 0.05;
const PHONE_PRICE = 299.99;
const THRESHOLD= 320; 

var bankBalance= prompt("Bank balance please?");


if(bankBalance>PHONE_PRICE)
{
	if(PHONE_PRICE<THRESHOLD)
	{
		var moneySpent=PHONE_PRICE+ACCESSORY+PHONE_PRICE*TAX_RATE;
	}
	else{
		var moneySpent=PHONE_PRICE+PHONE_PRICE*TAX_RATE;	
	}


	/*Round up numbers*/
	moneySpent = (moneySpent*1).toFixed(2);
	/*Convert number to string*/
	moneySpent = "$" + String(moneySpent);

	console.log(moneySpent);
}
else
{
	console.log("Bring more money next time!!!");
}
