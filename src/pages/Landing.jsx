import { Description } from "../components/Description";
import { Grid } from "../components/Grid";
import { Slot } from "../components/Slot";
import { useGrid } from "../hooks/useGrid";
import "./landing.css";

export function Landing() {
	const { grid, turn, renderSlotContent, clearAllSlotContent } = useGrid();

	return (
		<div className="landing">
			<h1 className="landing_title">Tic-Tac-Toe</h1>
			<Description turn={turn} grid={grid} />
			<Grid>
				{grid.map((e, i) => (
					<Slot order={i} content={e} callback={renderSlotContent} />
				))}
			</Grid>
			<button className="landing_btn" onClick={clearAllSlotContent}>restart</button>
		</div>
	);
}
