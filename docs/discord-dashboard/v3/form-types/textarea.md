# Text Area

```js
const { TextArea } = require('discord-dashboard').FormTypes

module.exports = {
    name: 'Text of the poetry',
    description: 'Long multi-line text',
    type: new TextInput()
        .setPlaceholder('Cóż tam, Panie, w polityce?')
        .setDefaultValue('Chińcyki trzymają się mocno!?')
        .setGlobalDisabled(false, '')
        .setMinLength(10)
        .setMaxLength(1000)
        .setRequired(true)
        .setClientSideValidation((value) => {
            if (value == 'Nie wiem, jestem inteligentem') 
                return "No przecież!"
        }),
    get: async ({member, guild}) => {
        // you need to always return an string
    },
    set: async (newData, {member, guild}) => {
        // newData is always a string
    }
}
```

| Method                                                         | Default       | How does it work?                                                                                                                                                                                                                |
|----------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| setPlaceholder (ph: string)                                    | null          | The text will be displayed as a placeholder (not a basic value) for the text input.                                                                                                                                              |
| setDefaultValue (val: string)                                  | null          | The default value of the text input if 'null' is returned from the `get` function.                                                                                                                                               |
| setGlobalDisabled (disabled: boolean, error_text: string)      | (false, null) | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text.                                                                                                          |
| setClientSideValidation( func: (value: string)=>string\null) ) | ()=>null      | Validation function for the value set for the function still on the client side. The function value is passed to the function. You cannot use anything in the function other than the values contained in the JS of the browser. |                                                                                       |
