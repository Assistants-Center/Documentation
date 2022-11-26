# Generate Sample Dashboard

This method allows you to create a sample, fully functioning Dashboard for the Discord Bot with *discord-dashboard*.

```js
DBD.initDashboard({
    fileName, 
    domain, 
    port, 
    token, 
    clientSecret, 
    clientId, 
    licenseId
});
```

| Argument     | Type   |                                                                                             |
|--------------|--------|---------------------------------------------------------------------------------------------|
| fileName     | String | It's the file Name to which example Dashboard is saved (pass it without the `.js` suffix).  |
| domain       | String | Your project domain. If hosted on localhost, `http://localhost/`.                           |
| port         | Number | Port on which the Dashboard will be listening.                                              |
| token        | String | Your Bot Token.                                                                             |
| clientSecret | String | Your Client Secret.                                                                         |
| clientId     | String | Your Client ID.                                                                             |
| licenseId    | String | Your project license from Assistants Center: Licenses.                                      |
