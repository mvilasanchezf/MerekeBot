const tmi = require('tmi.js');

// Define configuration options
const options = {
  options: {
    debug: true
  },
  identity: {
    username: 'merekebot',
    password: 'oauth:k08s31kdz0b3qu55rnhju9svwborlj'
  },
  channels: [
    'merekebot'
  ]
};
const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('merekebot', `Hello, connected to ${address}:${port}`);
});

client.on('chat', (target, ctx, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  // Do your stuff.
  console.log(target);
  console.log(ctx);

  const comandName = message.trim().toLowerCase();
  if (comandName === '!hello') {
    client.say(target, `Hello ${ctx.username}!`);
  }

  // Send a "chat" message to the target channel
  client.say(target, `Hello ${ctx.username}, I see you said: ${message}`);
});