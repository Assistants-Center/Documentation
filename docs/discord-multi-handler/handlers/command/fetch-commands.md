# Command Handler
## Fetch Commands
This function fetches, validates and sets the commands in the handler.
```js
<Handler>.fetchCommands(options);
```
### Options
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| `directory` | `string` | The directory to fetch commands from. | ✅ |
| `singleFolder` | `boolean` | Whether the commands are located in the same folder. | ❌ |

## Example
```js
<Handler>.fetchCommands({
    directory: './commands',
    singleFolder: false
});
```

## Output
Returns a [Collection](https://discord.js.org/#/docs/collection/main/class/Collection) of commands. (also accessible via `client.commands`)
