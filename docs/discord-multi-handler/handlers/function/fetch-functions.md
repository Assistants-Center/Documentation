# Function Handler
## Fetch Functions
This function fetches, validates and sets the functions in the handler.
```js
<Handler>.fetchFunctions(options);
```
### Options
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| `directory` | `string` | The directory to fetch functions from. | ✅ |
| `singleFolder` | `boolean` | Whether the functions are located in the same folder. | ❌ |
| `useAlt` | `boolean` | Whether you'd like functions to be assigned to client.functions instead of client | ❌ |
| `useFolder` | `boolean` | Whether you'd like the functions to be assigned to client.FOLDER instead of client | ❌ |

::: info
If you use `useFolder` and `useAlt` at the same time, the functions will be assigned to client.functions.FOLDER.
:::

::: warning
You cannot use `singleFolder` and `useFolder` at the same time.
:::

## Example
```js
<Handler>.fetchFunctions({
    directory: './functions'
});
```

## Output
Returns void.
