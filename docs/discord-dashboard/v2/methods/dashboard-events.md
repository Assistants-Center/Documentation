# Dashboard Events

The Dashboard class allows you to listen for events in the Dashboard. For example, you can know when and what user has logged into the Dashboard and what settings they have changed in Bots.

```js
Dashboard.DBDEvents.on(EVENT_TYPE, (data) => {
    //
});
```

## User Logged In

```js
Dashboard.DBDEvents.on('userLoggedIn', (data)=>{
    //
});
```

- **Data returned**: `<DiscordOAuthUserResponse>` Object.

## Website Viewed

```js
Dashboard.DBDEvents.on('websiteView', (data)=>{
    //
});
```

- **Data returned**: `<UserSessionObject>` if user is logged in or `{loggedIn: false}` if not.

## Guild Settings Updated

```js
Dashboard.DBDEvents.on('guildSettingsUpdated', (data)=>{
    //
});
```
