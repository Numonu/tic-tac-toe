import { useState } from "react";
import { getWinner } from "../js/winner";
export function useGrid() {
	const [grid, setGrid] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState("X");

	function renderSlotContent(order) {
		if (grid[order] != null || getWinner(grid)) return;

		const copyGrid = [...grid];
		copyGrid[order] = turn;

		setGrid(copyGrid);
		setTurn(turn === "X" ? "O" : "X");
	}

	function clearAllSlotContent() {
		setGrid(Array(9).fill(null));
	}

	return {
		grid,
		turn,
		renderSlotContent,
		clearAllSlotContent,
	};
}
