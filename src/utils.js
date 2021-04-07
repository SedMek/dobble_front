export const choose = (io, symbolId, card) => {
	io.emit("choose", { symbolId: symbolId, card: card });
};

export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
