# Function Handler
## Reload Function
This reloads an existing function in the handler.
```js
<Handler>.reloadFunction(options);
```
### Options
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| `func` | `string` | The name of the function. | ✅ |
| `findSpecific` | `boolean` | Whether the functions are located in the same folder. | ❌ |
| `folder` | `string` | Name of the folder to search in. | ❌ |

## Example
```js
<Handler>.reloadFunction({
    func: 'ping'
});
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
    error: 'Function not found'
}
```
```js
{
    success: false,
    error: 'Function name not provided'
}
```
```js
{
    success: false,
    error: 'Folder name not provided'
}
```
