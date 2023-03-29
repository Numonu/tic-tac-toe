const winCases = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
export function getWinner(arr) {
	for (let index = 0; index < winCases.length; index++) {
		const slot1 = arr[winCases[index][0]];
		const slot2 = arr[winCases[index][1]];
		const slot3 = arr[winCases[index][2]];

		if (slot1 == slot2 && slot2 == slot3) return slot1;
	}
	return null;
}
