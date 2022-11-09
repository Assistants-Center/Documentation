# Checkbox <Badge type="info" text="FREE" />

```js
const { Checkbox } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Welcome message',
    description: 'Should be welcome message module be sent?',
    type: new Checkbox()
        .setDefaultValue(false)
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an bool
    },
    set: async (newData, {member, guild}) => {
        // newData is always a bool
    }
}
```

| Method                                                    | Default       | How does it work?                                                                                                       |
|-----------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| setDefaultValue (val: boolean)                            | null          | The default value of the checkbox if 'null' is returned from the `get` function.                                        |
| setGlobalDisabled (disabled: boolean, error_text: string) | (false, null) | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
