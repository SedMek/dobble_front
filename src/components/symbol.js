import React from "react";
import OurToaster from "./toaster";
import BanToast from "./banToast";

import { choose, getRandomInt } from "../utils";

const Symbol = ({ socket, id, left, top, rotation, card, playable, banEndDate, display = true }) => {
	return (
		<img
			className={playable ? "border-hover" : ""}
			src={process.env.PUBLIC_URL + `/cards/${id}.png`}
			style={{
				transform: `rotate(${getRandomInt(360)}deg)`,
				// transform: `rotate(${rotation}deg)`,
				borderRadius: "50%",
				position: "absolute",
				left: `${left}px`,
				top: `${top}px`,
				width: `128px`,
				height: `128px`,
				display: display ? "block" : "none",
			}}
			alt={`Symbol${id}`}
			onClick={() => {
				if (playable) {
					console.log(`clicked ${id}`);
					if (banEndDate > new Date().getTime()) {
						OurToaster.show(BanToast);
					} else {
						choose(socket, id, card);
					}
				}
			}}
			id={id}
		/>
	);
};

export default Symbol;
