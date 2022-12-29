# Basic Setup
This is a basic setup for the Discord Multi Handler. This is not a full guide, but a basic setup to get you started.

::: info
This guide assumes you've already installed the package and have an understanding of discord.js.
:::
## Creating the File
First, we need to create a file to put our code in. This can be named anything you want, but for this guide, we'll be using `index.js`.

## Creating the Client
First, we need to create our discord.js client.
```js
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: []
});
```

### Assigning the Intents
We need to assign intents to our client, these vary depending on discord.js version and what you want to do with your bot.
```js
const client = new Client({
    intents: [ // The intents below only work on v14 of discord.js
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
```

## Setting up the Handler
Now we need to prepare the handler, we can do this by requiring the package.
```js
const { CommandHandler, EventHandler } = require('discord-multi-handler');
```

## Creating the Handlers
Now, we must select which handlers we are going to use. In this guide, we'll be using command and event.

### Defining the Handlers
```js
const commandHandler = new CommandHandler(client);
const eventHandler = new EventHandler(client);
```
### Setting up the Handlers
```js
commandHandler.fetchCommands({
    directory: `${__dirname}/commands`,
    singleFolder: true
});

eventHandler.fetchEvents({
    directory: `${__dirname}/events`,
    singleFolder: true
});
```

## Logging in
Finally, we can log in to our bot.
```js
client.login('token');
```

## Creating the Folders
Now we need to create the folders for our commands and events. We can do this by creating a folder called `commands` and `events` in the same directory as our `index.js` file.

## Creating the Message Event
Now we need to create our message event. We can do this by creating a file called `messageCreate.js` in the `events` folder.
::: info
The name of the file does not matter, but it is recommended to name it the same as the event for organisation.
:::

### Defining the Event
```js
module.exports = {
    name: 'messageCreate',
    async execute(client, message) {}
};
```

### Checking if the Message is a Command
```js
if (message.author.bot || !message.content?.length || !message.content.startsWith("!")) return;
```

### Getting the Arguments and Command
```js
const args = message.content.slice(1).trim().split(/ +/g);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName);
if(!command) return;
```

### Executing the Command
```js
command.execute(client, message, args);
```

### Putting it all together
```js
module.exports = {
    name: 'messageCreate',
    execute(client, message) {
        if(!message.content || !message.content.startsWith("!")) return;

        const args = message.content.slice(1).split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);
        
        if (!command) return;
        
        command.execute(client, message, args);
    }
}
```

## Creating the Ping Command
Now we need to create our ping command. We can do this by creating a file called `ping.js` in the `commands` folder.
::: info
The name of the file does not matter, but it is recommended to name it the same as the command for organisation.
:::

### Defining the Command
```js
module.exports = {
    name: 'ping',
    async execute(client, message, args) {}
}
```

### Sending the Reply
```js
message.reply('Pong!');
```

### Putting it all together
```js
module.exports = {
    name: 'ping',
    execute(client, message, args) {
        message.reply('Pong!');
    }
}
```

## Final Result
And that's it! You've now created a basic bot with the Discord Multi Handler. You can now add more commands and events to your bot.
To run your bot, you can use the command `node index.js` in your terminal.

If you wish to view the full code, you can view it [here](https://github.com/Assistants-Center/discord-handler/tree/main/example/basic-cjs/).

## Next Steps
Now that you've created a basic bot, you can now move onto the [full example](/discord-multi-handler/getting-started/full-example) to introduce functions and a reload command to your bot!