import { Position, Toaster } from "@blueprintjs/core";

const OurToaster = Toaster.create({
	className: "my-toaster",
	position: Position.RIGHT_TOP,
	maxToasts: 1,
	autoFocus: true,
});

export default OurToaster;
