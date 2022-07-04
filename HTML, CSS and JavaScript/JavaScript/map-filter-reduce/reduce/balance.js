function balanceCalc(balance, items) {
	const finalBalance = items.reduce((acc, item) => acc - item.price, balance);
	return `$${finalBalance}`;
}

list = [
	{
		price: 2,
		name: 'apple',
	},
	{
		price: 4,
		name: 'orange',
	},
	{
		price: 10,
		name: 'chocolate',
	},
];

balance = 30;

console.log(balanceCalc(balance, list));