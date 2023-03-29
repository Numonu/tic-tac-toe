import { getWinner } from "../js/winner";
import "./description.css";

export function Description({ turn, grid }) {
	const turnMessage = `Es el turno de ${turn}`;
	const winnerMessage = `El ganador es ${getWinner(grid)}`;
	return <p className="description">{getWinner(grid) ? winnerMessage : turnMessage}</p>;
}

