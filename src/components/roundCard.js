import React from "react";
import { Card, Elevation, Intent } from "@blueprintjs/core";

import Symbol from "./symbol";
import ResultButton from "./resultButton";

const RoundCard = ({
	socket,
	card,
	className = [],
	playable = false,
	banEndDate = 0,
	gameStatus = "waiting",
}) => {
	// const url = "http://placekitten.com/83/83/";

	return (
		// 7 symbol version
		// <Card className={["round-card", "container"]} interactive={false} elevation={Elevation.TWO}>
		// 	<Symbol socket={socket} src={url} rotation="180" left="145" top="40" id="1" />
		// 	<Symbol socket={socket} src={url} rotation="-130" left="250" top="85" id="2" />
		// 	<Symbol socket={socket} src={url} rotation="-90" left="275" top="180" id="3" />
		// 	<Symbol socket={socket} src={url} rotation="-40" left="232" top="270" id="4" />
		// 	<Symbol socket={socket} src={url} rotation="0" left="125" top="270" id="5" />
		// 	<Symbol socket={socket} src={url} rotation="50" left="40" top="205" id="6" />
		// 	<Symbol socket={socket} src={url} rotation="130" left="55" top="105" id="7" />
		// 	<Symbol socket={socket} src={url} rotation="-10" left="154" top="163" id="8" />
		// </Card>

		// 3 symbol version
		<Card
			className={[
				"try",
				"round-card",
				"centering-container",
				...(typeof className === "string" ? [className] : className),
			]}
			interactive={false}
			elevation={Elevation.TWO}
			intent={Intent.SUCCESS}
		>
			<Symbol
				socket={socket}
				card={card}
				rotation="180"
				left="135"
				top="40"
				id={card[0]}
				playable={playable}
				banEndDate={banEndDate}
				display={!["winning", "losing"].includes(gameStatus)}
			/>
			<Symbol
				socket={socket}
				card={card}
				rotation="-90"
				left="230"
				top="180"
				id={card[1]}
				playable={playable}
				banEndDate={banEndDate}
				display={!["winning", "losing"].includes(gameStatus)}
			/>
			<Symbol
				socket={socket}
				card={card}
				rotation="50"
				left="60"
				top="190"
				id={card[2]}
				playable={playable}
				banEndDate={banEndDate}
				display={!["winning", "losing"].includes(gameStatus)}
			/>
			<ResultButton gameStatus={gameStatus} />
		</Card>
	);
};

export default RoundCard;
