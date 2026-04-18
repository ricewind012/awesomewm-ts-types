import * as naughty from "naughty";

/** @noSelf */
export default (notification: naughty.NaughtyNotification) => {
	naughty.layout.box({ notification });
};
