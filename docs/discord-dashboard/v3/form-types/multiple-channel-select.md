# Multiple Channel Select <Badge type="info" text="FREE" />

```js
const { MultipleChannelSelect } = require('discord-dashboard').FormTypes
const { ChannelType } = require('discord.js')

module.exports = {
    name: 'Logs channels',
    description: 'Where should we send logs? You can select multiple channels!',
    type: new MultipleChannelSelect()
        .allowTypes([
            ChannelType.GuildText,
        ])
        .setPlaceholder('Select channels')
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
| allowTypes (types: ChannelType[])                         | []                | Define which channel types do you want allow user to use.                                                               |
| setPlaceholder (val: string)                              | 'Select channels' | Placeholder to display with the option.                                                                                 |
| setGlobalDisabled (disabled: boolean, error_text: string) | (false, null)     | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text. |
