import React from "react";
import { Button, Intent } from "@blueprintjs/core";

const ResultButton = ({ gameResult }) => {
	return (
		<Button
			intent={gameResult === 1 ? Intent.SUCCESS : Intent.DANGER}
			text={gameResult === 1 ? "You win, Champion!" : "you lose, Sucker!"}
			style={{ display: gameResult !== 0 ? "block" : "none" }}
			large
		/>
	);
};

export default ResultButton;
