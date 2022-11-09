# Multiple Role Select <Badge type="info" text="FREE" />

```js
const { MultipleRoleSelect } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Welcome role',
    description: 'Welcome role? You can select multiple roles!',
    type: new MultipleRoleSelect()
        .disallowEveryone()
        .setPlaceholder('Select roles')
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an strings' array
    },
    set: async (newData, {member, guild}) => {
        // newData is always a strings' array
    }
}
```

| Method                                                    | Default           | How does it work?                                                                                                       |
|-----------------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|
| disallowEveryone ()                                       |                   | Disallow everyone role from displaying.                                                                                 |
| setPlaceholder (val: string)                              | 'Select channels' | Placeholder to display with the option.                                                                                 |
| setGlobalDisabled (disabled: boolean, error_text: string) | (false, null)     | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
