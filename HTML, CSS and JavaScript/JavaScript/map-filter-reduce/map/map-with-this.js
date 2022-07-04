const a  = {
	quantity: 2,
};

const x = [0,2,3,5,7];

function mapArray(array, thisArg) {
	return array.map(function (item) {
		return item * this.quantity;
	}, thisArg);
}

console.log(mapArray(x,a));