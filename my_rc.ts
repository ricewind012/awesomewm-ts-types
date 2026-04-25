function capture(cmd: string) {
	const [file] = assert(io.popen(cmd, "r"));
	if (!file) {
		print("no file");
		return;
	}

	const [output] = assert(file.read("*a"));
	file.close();

	return output;
}

function files(dir: string) {
	const files: string[] = [];
	const [file] = io.popen(`printf "%s\\n" ${dir}/*`);
	if (!file) {
		print("no file");
		return;
	}

	for (const [i] of file.lines()) {
		table.insert(files, i);
	}
	file.close();

	return files[0][0] === "*" ? [] : files;
}

const awesome_dir = gears.filesystem.get_configuration_dir();
if (awesome.startup) {
	const cmd = `sh -c "while inotifywait -e modify ${awesome_dir}; do printf "\n"; done`;
	awful.spawn.with_line_callback(cmd, {
		stdout: () => awesome.restart(),
	});
}
