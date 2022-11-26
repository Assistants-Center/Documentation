# Dashboard Config Settings

Dashboard settings are simply a complex list of options that the user will be able to change in it. Our module allows the user to divide settings into categories, so this list should contain a category object. The category object itself also contains a list of settings for the category.

```js
...
settings: [
    categoryObject,
    categoryObject,
],
...
```

## Category Object

```js
{
    categoryId: '',
        categoryName: "",
        categoryDescription: "",
        categoryOptionsList: [
        categoryOptionObject,
        categoryOptionObject,
    ]
}
```

| Option              | Type   |                                                 |
|---------------------|--------|-------------------------------------------------|
| categoryId          | String | Category ID (must be lowercase and unique).     |
| categoryName        | String | Category name. Can include HTML code.           |
| categoryDescription | String | Category description. Can include HTML code.    |
| categoryOptionsList | Array  | An Array of the `categoryOptionObject` Objects. |


## Category Option Object

```js
{
    /*Required options*/
    optionId: '',
    optionName: "",
    optionDescription: "",
    optionType: <DBDFormType>,
    getActualSet: async ({guild,user}) => {
        return <DBDFormTypeValueType>;
    },
    setNew: async ({guild,user,newData}) => {
        return <DBDFormTypeValueType>;
    },
            
    /*Optional options*/
            
    allowedCheck: async ({guild,user}) => {
        if(guild.id == "123456789876")
            return {
                allowed: false, 
                errorMessage: 'You cannot use this option - guild is blacklisted for it.'
            };
        
        if(user.id == "123456789876")
            return {
                allowed: false, 
                errorMessage: 'You cannot use this option - user is blacklisted for.'
            };
        
        return {
            allowed: true, 
                errorMessage: null
            };
    }
}
```

- **Options:**

| Option                  | Type                   |                                                                                                                                                            |
|-------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| optionId                | String                 | Option ID (must be lowercase and unique).                                                                                                                  |
| optionName              | String                 | Option name. Can include HTML code.                                                                                                                        |
| optionDescription       | String                 | Option description. Can include HTML code.                                                                                                                 |
| optionType              | Object (DBD Form Type) | DBD Option Type. Options Types listed in the <a href="/discord-dashboard/v2/methods/create-form-type">Form Types</a> section.                              |
| getActualSet            | async Function         | The function for which you should return the currently set value for the option. The function passes you a `user` and a `guild` Objects.                   |
| setNew                  | async Function         | A function that the Dashboard performs whenever a `user` user changes the settings of an option. It passes you the `user`, `guild`, and `newData` Objects. |
| allowedCheck (optional) | async Function         | A function that checks if option should be enabled to be changed by user on guild. It passes you the `user` and `guild` Objects.                           |
- **Objects**:


| Object  | Type                                                         |                                                                                          |
|---------|--------------------------------------------------------------|------------------------------------------------------------------------------------------|
| guild   | Object: `{id: DiscordGuildID, object: <GuildObject>}`        | GUILD ID where the settings were updated (String).                                       |
| user    | Object: `{id: DiscordUserID, object: <GuildMemberObject>}`   | User ID who has updated settings on GUILD (String).                                      |
| newData | Depends on the type of the Form Type.                        | This is something that `user` has set as a wanted value for a new option on the `guild`. |

## Errors Handling

### Server-Side

The Dashboard provides a limit on the availability of options for a given recipient, or set of recipients. This can be a restriction to a list of users, or to a requirement to have a role on a given server.

If the user tries to change the settings despite not having permission, the server will return an error.

```js
...
    allowedCheck: async ({guild,user}) => {
        return {allowed: Boolean, errorMessage: String | null};
    },
...
```

### setNew Function-Side

If you want to return an error when setting a new option value, return the Object containing the error option and set its value as the text that should be displayed. The user will be notified of the error when setting the new value (e.g., is too long, no permissions).

```js
...
    setNew: async ({guild,user,newData}) => {
        return {error: "Error text."};
    },
...
```

If you don't want to send any error, return nothing or return an empty Object.

```js
...
    setNew: async ({guild,user,newData}) => {
        return; //or return {};
    },
...
```
