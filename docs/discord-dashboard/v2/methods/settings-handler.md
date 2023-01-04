# Settings Handler

A quick and easy way to store and retrieve settings from your dashboard.

## Setup
Add these lines to your code to initialize the Storage Handler.
```js
(async () => {
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();

    const Handler = new DBD.Handler( // [!code focus] // [!code ++]
    /*
            Keyv storage instance
            Example: { store: new KeyvMongo('mongodb://user:pass@localhost:27017/dbname') }

            Can be left empty to use the default storage (Keyv with SQLite)
        */
    ); // [!code focus] // [!code ++]

    const { Category, Option } = Handler; // [!code focus] // [!code ++]
});
```
| Argument     | Type   |                                            |
|--------------|--------|--------------------------------------------|
| Keyv         | Keyv Storage Object | https://www.npmjs.com/package/keyv  |

## Configuring Settings
```js
settings: [
    new Category()
        .setId('setup') // Sets the id of the category - must be unique
        .setName("Setup") // Name of the category
        .setDescription("Setup your bot with default settings!") // Description of the category
        .setToggleable(true) // Sets the category to be toggleable
        .addOptions(
            new Option() // Creates a new option inside the category
                .setId('lang') // Sets the id of the option - must be unique
                .setName("Language Select") // Name of the option
                .setDescription("Change bot's language easily") // Description of the option
                .setType(DBD.formTypes.select({ "Polish": 'pl', "English": 'en', "French": 'fr' })), // The DBD form type function

            new Option()
                .setId('message')
                .setName("Join Message")
                .setDescription("Is the join message enabled?")
                .setType(DBD.formTypes.switch(false))
        )
]
```

### Fetching Data
```js
const data = await Handler.fetch('guildID', 'optionID');
```

| Argument     | Type   |                                            |
|--------------|--------|--------------------------------------------|
| guildID      | String | The guild you want to fetch the data from  |
| optionID     | String | The option ID you want the value for       |