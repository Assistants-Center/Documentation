# Development Mode <Badge type="info" text="OPTIONAL" />
<br/>
<Badge type="danger" text="NOTE: Do not use this mode unless you are creating your own Theme. Using this with a Theme downloaded from NPM will cause an error as NPM module contains only build files." />

The Discord-Dashboard operates in 2 modes: Development and Production. During Development mode, no statistics are sent and dev mode is used (Fastify uses a logger and Next.js has hot-reload mode).

To define whether you want to use Development mode or not, define:

```js
const { Dashboard } = require('discord-dashboard')

new Dashboard(/*ENGINE*/)
    .setDev(true/false)
    ...
```
