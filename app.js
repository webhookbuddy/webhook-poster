const fetch = require('node-fetch');
const readline = require('readline');

let donuts = [
	{
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


function postWebhook(endpoint, data) {
	return fetch('http://localhost:8000/point/' + endpointId, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload)
	})
}

let payload = { donuts };
let endpointId = "2b09ec19-ebe4-4f53-8c42-0c1185556946";

console.log("This is the Webhook Buddy Poster");
console.log("The default endpoint to add webhooks to is Stripe ACME");
console.log("Endpoint Id: " + endpointId);
console.log("-------");
rl.question("How many webhooks would you like to send? ", (num) => {
	for (let i = 0; i < +num; i++) {
		postWebhook(endpointId, payload).then((res) => {
			console.log("Added webhook number " + i);
		});
	}
	rl.close();
});