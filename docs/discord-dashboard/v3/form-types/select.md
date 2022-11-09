# Select <Badge type="info" text="FREE" />

```js
const { Select } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Bot language',
    description: 'Which language do you want to use?',
    type: new Select()
        .setValues([
            {
                value: 'en',
                display_name: 'English',
            },
            {
                value: 'fr',
                display_name: 'French',
            },
            {
                value: 'de',
                display_name: 'German',
            },
        ])
        .setDefaultSelectedId('en')
        .setLabel('Language')
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an string or number
    },
    set: async (newData, {member, guild}) => {
        // newData is always a string or number
    }
}
```

| Method                                                        | Default       | How does it work?                                                                                                       |
|---------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| setValues (values: {value:string/bool,display_name:string}[]) | (null,'None') | The default value of the switch if 'null' is returned from the `get` function.                                          |
| setDefaultSelectedId (val: string)                            | null          | The ID (value) of the option selected by default. IT SHOULD EXIST.                                                      |
| setLabel (val: string)                                        | null          | Label to display with the option.                                                                                       |
| setGlobalDisabled (disabled: boolean, error_text: string)     | (false, null) | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
