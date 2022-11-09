# Role Select <Badge type="info" text="FREE" />

```js
const { RoleSelect } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Welcome role',
    description: 'Which role should be assigned to user on join?',
    type: new RoleSelect()
        .disallowEveryone()
        .addNoneWithText('None')
        .setLabel('Role')
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an string
    },
    set: async (newData, {member, guild}) => {
        // newData is always a string
    }
}
```

| Method                                                    | Default          | How does it work?                                                                                                       |
|-----------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|
| disallowEveryone ()                                       |                  | Disallow everyone role from displaying.                                                                                 |
| addNoneWithText (val: string)                             | null             | If user should have an option to select NONE channel with null value and val text displayed.                            |
| setLabel (val: string)                                    | 'Select channel' | Label to display with the option.                                                                                       |
| setGlobalDisabled (disabled: boolean, error_text: string) | (false, null)    | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
