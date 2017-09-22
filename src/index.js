module.exports = function zeros(expression) {
  let array = expression.split('*');
	let prod = 1;
	for (let i = 0; i < array.length; i++) {
		prod = multiply(`${prod}`, `${fact(array[i])}`);
	}
	expression = `${prod}`;
	let i = expression.length - 1;
	let count = 0;
	while (expression[i] === '0') {
		i--;
		count++;
	}
	return count;
}


function multiply(strNum1, strNum2) {

	let a1 = strNum1.split('').reverse();
	let a2 = strNum2.split('').reverse();
	let res = [];
	for (let i = 0; i < a1.length; i++) {
		for (let j = 0; j < a2.length; j++) {
			let pos = i + j;
			if (pos >= res.length) {
				res[pos] = a1[i] * a2[j];
			}
			else {
				res[pos] = a1[i] * a2[j] + res[pos];
			}

			if (res[pos] > 9) {
				if (pos + 1 >= res.length) {
					res[pos + 1] = Math.floor(res[pos] / 10);
				}
				else {
					res[pos + 1] = Math.floor(res[pos] / 10) + res[pos + 1];
				}
				res[pos] -= Math.floor(res[pos] / 10) * 10;
			}
		}
	}
	return res.reverse().join("");
}

function fact(str) {
	if (str[str.length - 2] !== '!') {
		str = str.slice(0, -1);
		let prod = 1;
		for (let i = 1; i < +str; i++) {
			prod = multiply(`${prod}`, `${i + 1}`);
		}
		return prod;
	}
	else {
		let prod = 1;
		str = str.slice(0, -2);
		if (+str % 2 === 0) { // четное
			for (let i = 1; i < +str / 2 + 1; i++) {
				prod = multiply(`${prod}`, `${2 * i}`);
			}
		}
		else {
			for (let i = 1; i < +str / 2 + 1; i++) {
				prod = multiply(`${prod}`, `${2 * i - 1}`);
			}
		}

		return prod;
	}
}