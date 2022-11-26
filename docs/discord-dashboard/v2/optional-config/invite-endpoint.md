# Invite Endpoint

Specify `/invite` endpoint behavior.

```js
...
    invite: {
        clientId: String=this.bot.user.id,
        scopes: Array=["bot"],
        permissions: String='0',
        redirectUri: String='',
        otherParams: String=''
    },
...
```
