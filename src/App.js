import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Button, ProgressBar, Intent } from "@blueprintjs/core";

import RoundCard from "./components/roundCard";
import OurToaster from "./components/toaster";
import BanToast from "./components/banToast";

function App({ socket }) {
	const [darkTheme, setDarkTheme] = useState(true);
	const [playerCard, setPlayerCard] = useState([1, 2, 3]);
	const [gameCard, setGameCard] = useState([1, 2, 3]);
	const [banEndDate, setBanEndDate] = useState(0);
	const [gameStatus, setGameStatus] = useState("waiting"); //-1 lose, 0 in progress, 1 win
	useEffect(() => {
		if (darkTheme) {
			console.log("going dark");
			document.body.classList.add("bp3-dark");
		} else {
			console.log("going light");
			document.body.classList.remove("bp3-dark");
		}
	}, [darkTheme]);

	useEffect(() => {
		socket.on("playerCard", (data) => {
			console.log(`recieved player card ${data["card"]}`);
			setPlayerCard(data["card"]);
		});
		socket.on("gameCard", (data) => {
			console.log(`recieved game card ${data["card"]}`);
			setGameCard(data["card"]);
		});
		socket.on("ban", (data) => {
			console.log(`recieved ban of ${data["duration"]}ms`);
			setBanEndDate(new Date().getTime() + data["duration"]);
			OurToaster.show({
				...BanToast,
				message: `Oups, wrong pick\nYou are banned for ${Math.floor(data["duration"] / 1000)}s`,
			});
		});

		socket.on("status", (data) => {
			console.log(`recieved game status: ${data["status"]}`);
			setGameStatus(data["status"]);
		});
	}, [socket]);

	return (
		<div className="App">
			<Button
				intent={
					gameStatus === "progressing"
						? Intent.PRIMARY
						: gameStatus === "waiting"
						? Intent.WARNING
						: gameStatus === "winning"
						? Intent.SUCCESS
						: Intent.DANGER
				}
			>
				{gameStatus}
			</Button>
			<ProgressBar
				stripes={gameStatus === "waiting"}
				intent={
					gameStatus === "progressing"
						? Intent.PRIMARY
						: gameStatus === "waiting"
						? Intent.WARNING
						: gameStatus === "winning"
						? Intent.SUCCESS
						: Intent.DANGER
				}
			></ProgressBar>
			<Switch large label="Dark/Light" onChange={() => setDarkTheme(darkTheme ? false : true)} />
			<Button
				onClick={() => {
					console.log("send trigger");
					socket.emit("trigger");
				}}
				intent={Intent.Primary}
			>
				{(gameStatus != "waiting" ? "Re" : "") + "Start Game"}
			</Button>

			<RoundCard //Player Card
				className="center-bottom"
				socket={socket}
				card={playerCard}
				playable={true}
				banEndDate={banEndDate}
				gameStatus={gameStatus}
			/>
			<RoundCard /// Game card
				className="center-top"
				socket={socket}
				card={gameCard}
				playable={false}
			/>
		</div>
	);
}

export default App;
