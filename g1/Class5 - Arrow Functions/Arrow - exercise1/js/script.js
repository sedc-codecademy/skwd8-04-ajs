let numberDigits = num => Math.abs(num).toString().length;

let evenOrOdd = num => num % 2 === 0 ? 'even' : 'odd';

let positiveOrNegative = num => num > 0 ? 'positive' : 'negative';

let getNumberStats =
		(num => console.log(`
			${numberDigits(num)} Digits,
			${evenOrOdd(num)},
			${positiveOrNegative(num)}
		`))(-25)