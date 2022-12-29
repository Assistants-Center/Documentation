# Command Handler
## Reload Command
This reloads an existing command in the handler.
```js
<Handler>.reloadCommand(cmd);
```
### Command
The name of the command to reload.

## Example
```js
<Handler>.reloadCommand('ping');
```

## Output
Returns an object depending on outcome.
```js
{
    success: true,
    error: false
}
```
```js
{
    success: false,
    error: 'Command not found'
}
```
```js
{
    success: false,
    error: 'Command is missing name or execute function'
}
```