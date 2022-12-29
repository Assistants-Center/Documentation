# Event Handler
## Fetch Events
This function fetches, validates and sets the events in the handler.
```js
<Handler>.fetchEvents(options);
```
### Options
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| `directory` | `string` | The directory to fetch events from. | ✅ |
| `singleFolder` | `boolean` | Whether the events are located in the same folder. | ❌ |

## Example
```js
<Handler>.fetchEvents({
    directory: './events',
    singleFolder: false
});
```

## Output
Returns void.
