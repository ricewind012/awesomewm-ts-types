import * as naughty from "naughty";

export default (notification: NaughtyNotification) => {
	naughty.layout.box({ notification });
};
