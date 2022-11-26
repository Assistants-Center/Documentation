# Create Form Type

Form Types is something you will need in the settings for the Dashboard class. This is the method that defines what type of data will be presented.

## Select

```js
DBD.formTypes.select(list, disabled)
```

| Argument | Type      |                                                                                                |
|----------|-----------|------------------------------------------------------------------------------------------------|
| list     | Object    | Array presented as follows: `{ displayName: valueReturned, displayName2: valueReturned2 }` |
| disabled | Boolean   | Boolean check for if the select should be disabled or not.                                     |

### Data required for `getActualSet` function

String, `valueReturned` value for option actual set.

### Data returned

String, `valueReturned` value for option selected.








<hr>








## Multiple Select

```js
DBD.formTypes.multiSelect(list, disabled, required),
```

| Argument | Type      |                                                                                             |
|----------|-----------|---------------------------------------------------------------------------------------------|
| list     | Object    | Array presented as follows: `{ displayName: valueReturned, displayName2: valueReturned2 }`  |
| disabled | Boolean   | Boolean check for if the select should be disabled or not.                                  |
| required | Boolean   | Boolean check for if the select should be required or not.                                  |

### Data required for `getActualSet` function

Array, list of `valueReturned` to be selected.

**Important**: If any, return empty Array - no null or undefined.

### Data returned

Array, list of selected `valueReturned` values | or an empty Array.







<hr>








## Input

```js
DBD.formTypes.input(placeholder, min, max, disabled, required),
```

| Argument    | Type     |                                                           |
|-------------|----------|-----------------------------------------------------------|
| placeholder | String   | Input placeholder.                                        |
| min         | Number   | Minimum length.                                           |
| max         | Number   | Maximum length.                                           |
| disabled    | Boolean  | Boolean check for if the input should be disabled or not. |
| required    | Boolean  | Boolean check for if the input should be required or not. |

### Data required for `getActualSet` function

String, value to be displayed.

### Data returned

String, value set | or null.











<hr>








## Textarea

```js
DBD.formTypes.textarea(placeholder, min, max, disabled, required),
```

| Argument    | Type     |                                                              |
|-------------|----------|--------------------------------------------------------------|
| placeholder | String   | Textarea placeholder.                                        |
| min         | Number   | Minimum length.                                              |
| max         | Number   | Maximum length.                                              |
| disabled    | Boolean  | Boolean check for if the textarea should be disabled or not. |
| required    | Boolean  | Boolean check for if the textarea should be required or not. |

### Data required for `getActualSet` function

String, value to be displayed.

### Data returned

String, value set | or null.











<hr>








## Color Select

```js
DBD.formTypes.colorSelect(defaultState, disabled),
```

| Argument     | Type    |                                                                  |
|--------------|---------|------------------------------------------------------------------|
| defaultState | String  | Default state HEX color.                                         |
| disabled     | Boolean | Boolean check for if the color select should be disabled or not. |

### Data required for `getActualSet` function

String, actual set HEX color.

### Data returned

String, new HEX color.


## Embed Builder

```js
DBD.formTypes.embedBuilder(defaultSettings),
```

| Argument        | Type   |                                                                                         |
|-----------------|--------|-----------------------------------------------------------------------------------------|
| defaultSettings | Object | { username: string, avatarURL: string, defaultJson: {EMBED_BUILDER_Interface} } |


### Embed Builder Interface

```js
interface EmbedBuilder {
    content: string,
    embed: {
        title?: string,
        description?: string,
        color?: string | number,
        timestamp?: any,
        url?: string,
        author?: {
            name?: string,
            url?: string,
            icon_url?: string
        },
        thumbnail?: {
            url?: string
        },
        image?: {
            url?: string
        },
        footer?: {
            text?: string,
            icon_url?: string
        },
        fields?: [ EmbedBuilderField ],
    }
}

interface EmbedBuilderField {
    name?: string,
    value?: string,
    inline?: boolean
}
```


### Simple Embed Builder Example

```js
{
  username: null,
  avatarURL: null,
  defaultJson: {
        content: "Did you know that if you don't know something, you don't know it? This riddle was solved by me. Don't thank me.",
        embed: {
            timestamp: new Date().toISOString(),
            url: "https://discord.com",
            description: "There was a boar, everyone liked a boar. One day the boar ate my dinner and escaped through the chimney. I haven't seen a boar since then.",
            author: {
                name: "Assistants Center",
                url: "https://assistantscenter.com",
                icon_url: "https://media.discordapp.net/attachments/911644960590270484/934513385402413076/ac_fixed.png"
            },
            image: {
                url: "https://unsplash.it/380/200"
            },
            footer: {
                text: "Crated with Discord-Dashboard",
                icon_url: "https://cdn.discordapp.com/emojis/870635912437047336.png"
            },
            fields: [
                {
                    name: "Hello",
                    value: "Hi, Assistants Center loves you <:ac_love:806492057996230676>"
                },
                {
                    name: "Do you know that",
                    value: "You can use custom emojis there, even from server where bot isn't :Kekwlaugh:",
                    inline: false
                },
            ]
        }
    }
}
```


## Spacer

Usage is kinda different for this one. You don't need to define getActualSet, etc. Just define an option as:

```js
{
    optionType: 'spacer',
    title: string,
    description: string
}
```


| Argument    | Type     |                                                           |
|-------------|----------|-----------------------------------------------------------|
| title       | String   | Title string for spacer. You can use HTML there.          |
| description | String   | Description string for spacer. You can use HTML there.    |





















<hr>








## Switch

```js
DBD.formTypes.switch(disabled),
```

| Argument    | Type     |                                                            |
|-------------|----------|------------------------------------------------------------|
| disabled    | Boolean  | Boolean check for if the switch should be disabled or not. |

### Data required for `getActualSet` function

Boolean, to be turned on or not.

**Important:**

Please note that `if(saved.state)` will return false if data is not set. If you want to default state to be true, use this:

```js
getActualSet: ({guild,user}) => {
    return (SAVED_STATE == null || SAVED_STATE == undefined) ? DEFAULT_STATE : SAVED_STATE;
}
```

### Data returned

Boolean, true if turned on - false if turned off.












<hr>








## Checkbox

```js
DBD.formTypes.checkbox(disabled),
```

| Argument    | Type     |                                                              |
|-------------|----------|--------------------------------------------------------------|
| disabled    | Boolean  | Boolean check for if the checkbox should be disabled or not. |

### Data required for `getActualSet` function

Boolean, to be checked or not.

**Important:**

Please note that `if(saved.state)` will return false if data is not set. If you want to default state to be true, use this:

```js
getActualSet: ({guild,user}) => {
    return (SAVED_STATE == null || SAVED_STATE == undefined) ? DEFAULT_STATE : SAVED_STATE;
}
```

### Data returned

Boolean, true if ckecked - false if unchecked.


















<hr>








## Channels Select

```js
DBD.formTypes.channelsSelect(disabled, channelTypes = ['GUILD_TEXT'], hideNSW, onlyNSFW),
```

| Argument     | Type    |                                                                          |
|--------------|---------|--------------------------------------------------------------------------|
| disabled     | Boolean | Boolean check for if the channels select should be disabled or not.      |
| channelTypes | Array   | An Array (!) of types of channels to be included in the channels select. |
| hideNSFW     | Boolean | Hide channels that are marked as nsfw                                    |
| onlyNSFW     | Boolean | Only Show channels that are marked as nsfw                               |

### Data required for `getActualSet` function

String, channel ID.

### Data returned

String, channel ID | or null.











<hr>








## Channels Multi Select

```js
DBD.formTypes.channelsMultiSelect(disabled, required, channelTypes = ['GUILD_TEXT'], hideNSW, onlyNSFW),
```

| Argument     | Type    |                                                                                   |
|--------------|---------|-----------------------------------------------------------------------------------|
| disabled     | Boolean | Boolean check for if the multiple channels select should be disabled or not.      |
| required     | Boolean | Boolean check for if the multiple channels select should be required or not.      |
| channelTypes | Array   | An Array (!) of types of channels to be included in the multiple channels select. |
| hideNSFW     | Boolean | Hide channels that are marked as nsfw                                             |
| onlyNSFW     | Boolean | Only Show channels that are marked as nsfw                                        |

### Data required for `getActualSet` function

Array of Strings (Channels IDs) | or an empty Array.

### Data returned

Array of Strings (Channels IDs) | or an empty Array.


<hr>

## Roles Select

```js
DBD.formTypes.rolesSelect(disabled, includeBots),
```

| Argument     | Type    |                                                                  |
|--------------|---------|------------------------------------------------------------------|
| disabled     | Boolean | Boolean check for if the roles select should be disabled or not. |
| includeBots     | Boolean | Boolean include bot roles.                                    |

### Data required for `getActualSet` function

String, role ID.

### Data returned

String, role ID | or null.











<hr>








## Roles Multi Select

```js
DBD.formTypes.rolesMultiSelect(disabled, required, includeBots),
```

| Argument     | Type    |                                                                           |
|--------------|---------|---------------------------------------------------------------------------|
| disabled     | Boolean | Boolean check for if the multiple roles select should be disabled or not. |
| required     | Boolean | Boolean check for if the multiple roles select should be required or not. |
| includeBots     | Boolean | Boolean include bot roles.                                             |

### Data required for `getActualSet` function

Array of Strings (Roles IDs) | or an empty Array.

### Data returned

Array of Strings (Roles IDs) | or an empty Array.
