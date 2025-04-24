import $ from 'jquery';

	const prompt = "user@mothership$";
	const commands = [
		{ command: "./boot", result: ["> Initializing Knowledge Registers... Complete!", "> Loading Motivation Cache... Complete!", "> Priming Creativity... Primed!", "> Querying Leadership Roles... Found!", "> Referencing Experience Pointer... Referenced!", "> Complete! Ready To Problem Solve" ] },
		{ command: "./initialize-developer", result: ["> LETS GO"] }
	];

	// Delay helper
	const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

	async function typeCommand(command, result, index) {
		const html = `
			<div class="command-section" id="command-sec-${index}">
				<div class="command-group">
					<label class="command-prompt">${prompt}&nbsp</label>	
					<p class="command" id="command-${index}"></p>
				</div>
			</div>`;

		$("div.command-area").append(html);

		// Type the command
		for (const c of command) {
			$(`#command-${index}`).append(c);
			await sleep(25); // character delay
		}

		await sleep(300); // wait before printing result
		

		// Type the result
		for (let i = 0; i < result.length; i++) {
			$(`#command-sec-${index}`).append(`<p class="command-result" id="result-${index}-${i}"></p>`);
			for (const c of result[i]) {
				$(`#result-${index}-${i}`).append(c);
				await sleep(25);
			}
		}
	}

	// Run all commands in sequence
	async function runCommands() {
		for (let i = 0; i < commands.length; i++) {
			await typeCommand(commands[i].command, commands[i].result, i);
		}
	}	

		runCommands(); // kick things off
	
