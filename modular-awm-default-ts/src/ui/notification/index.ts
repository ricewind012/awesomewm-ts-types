import * as naughty from "naughty";

/** @noSelf */
export default (notification: NaughtyNotification) => {
	naughty.layout.box({ notification });
};
