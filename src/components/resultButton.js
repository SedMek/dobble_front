import React from "react";
import { Button, Intent } from "@blueprintjs/core";

const ResultButton = ({ gameStatus }) => {
	return (
		<Button
			intent={gameStatus == "winning" ? Intent.SUCCESS : Intent.DANGER}
			text={gameStatus == "winning" ? "You win, Champion!" : "you lose, Sucker!"}
			style={{ display: ["winning", "losing"].includes(gameStatus) ? "block" : "none" }}
			large
		/>
	);
};

export default ResultButton;
