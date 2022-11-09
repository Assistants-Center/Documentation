# Channel Select <Badge type="info" text="FREE" />

```js
const { ChannelSelect } = require('discord-dashboard').FormTypes
const { ChannelType } = require('discord.js')

module.exports = {
    name: 'Welcome channel',
    description: 'Where should we send the welcome message?',
    type: new ChannelSelect()
        .allowTypes([ 
            ChannelType.GuildText,
        ])
        .addNoneWithText('None')
        .setLabel('Channel')
        .setGlobalDisabled(false, ''),
    get: async ({member, guild}) => {
        // you need to always return an string
    },
    set: async (newData, {member, guild}) => {
        // newData is always a string
    }
}
```

| Method                                                    | Default          | How does it work?                                                                                                        |
|-----------------------------------------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------|
| allowTypes (types: ChannelType[])                         | []               | Define which channel types do you want allow user to use.                                                                |
| addNoneWithText (val: string)                             | null             | If user should have an option to select NONE channel with null value and val text displayed.                             |
| setLabel (val: string)                                    | 'Select channel' | Label to display with the option.                                                                                        |
| setGlobalDisabled (disabled: boolean, error_text: string) | (false, null)    | Whether the option is globally disabled (for all, always) but still displayed (but blocked). If so, display error text.  |
