const fetch = require('node-fetch');
const readline = require('readline');

let donuts = [
  {
    name: 'Cake',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
  {
    name: 'Old Fashioned',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
      ],
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' },
    ],
  },
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function postWebhook(endpoint, data) {
  return fetch(
    `http://localhost:5001/webhookbuddy-dev/us-central1/point/${endpoint}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
  );
}

let payload = { donuts };
let endpointId = 'bKA-ZgZz5YdQlSsSVi-Jz';
console.log('Webhook Buddy Poster');
console.log('Endpoint Name: Stripe');
console.log('Endpoint Id: ' + endpointId);
console.log('-------');
let promises = [];
const recursiveQuestion = () => {
  rl.question('How many webhooks would you like to send? ', num => {
    for (let i = 0; i < +num; i++) {
      promises.push(postWebhook(endpointId, payload));
    }
    Promise.all(promises).then(() => {
      console.log(`Sent ${num} webhooks.`);
      recursiveQuestion();
    });
  });
};

recursiveQuestion();
