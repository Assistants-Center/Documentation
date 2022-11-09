# Multiple Select <Badge type="info" text="FREE" />

```js
const { MultipleSelect } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Food in a backpack',
    description: 'What food should be put in the backpack?',
    type: new MultipleSelect()
        .setValues([
            {
                value: 'apples',
                display_name: 'Apples',
            },
            {
                value: 'onions',
                display_name: 'Onions',
            },
            {
                value: 'carrots',
                display_name: 'Carrots',
            },
            {
                value: 'sandwiches',
                display_name: 'Sandwiches',
            },
        ])
        .setDefaultSelectedIds(['apples','sandwiches'])
        .setPlaceholder('Select food')
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an strings' and/or numbers' array
    },
    set: async (newData, {member, guild}) => {
        // newData is always a strings' and/or numbers' array
    }
}
```

| Method                                                        | Default       | How does it work?                                                                                                       |
|---------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------|
| setValues (values: {value:string/bool,display_name:string}[]) | (null,'None') | The default value of the multiple select if 'null' is returned from the `get` function.                                 |
| setDefaultSelectedIds (val: string)                           | null          | The IDs (values) of the option selected by default. IT SHOULD EXIST.                                                    |
| setPlaceholder (val: string)                                  | null          | Placeholder to display with the option.                                                                                 |
| setGlobalDisabled (disabled: boolean, error_text: string)     | (false, null) | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
