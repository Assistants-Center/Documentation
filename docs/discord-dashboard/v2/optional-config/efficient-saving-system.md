# Efficient Saving System

Use a modified version of the save system to save all settings at once, rather than save each option individually.

To enable this, set **useCategorySet** to true inside the config.

```js
    useCategorySet: true,
```

By enabling this, you must make some changes to your settings.

```js
    ...
    settings: [
        {
            categoryId: 'setup',
            categoryName: "Setup",
            categoryDescription: "Setup your bot with default settings!",
            getActualSet: async ({guild}) => {
                return [
                    {
                        optionId: "lang", // optionId, must be EXACTLY the same
                        data: langsSettings[guild.id] || null // what you would normally return in getActualSet
                    }
                ]
            },
            setNew: async ({guild,data}) => {
                // data = [ { optionId: 'lang', data: 'fr' } ]

                for(const option of data) {
                    if(option.optionId === "lang") langsSettings[guild.id] = option.data;
                }

                // Errors still work!

                // Allowed check still works, but needs to be on the option itself, not the category.
                return;
            },
            categoryOptionsList: [
                {
                    optionId: 'lang',
                    optionName: "Language",
                    optionDescription: "Change bot's language easily",
                    optionType: DBD.formTypes.select({"Polish": 'pl', "English": 'en', "French": 'fr'})
                },
            ]
        },
    ],
```
