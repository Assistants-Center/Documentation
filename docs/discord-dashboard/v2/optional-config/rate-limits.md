# Rate Limits

The Dashboard allows you to add RateLimits for important endpoints. This allows you to protect against server load in the event of a DDOS attack on the server.

The Dashboard allows you to add RateLimits in 4 places, and doing so is trivially easy:

```js
rateLimits: {
    manage: RateLimitSettingsObject, 
    guildPage: RateLimitSettingsObject,
    settingsUpdatePostAPI: RateLimitSettingsObject,
    discordOAuth2: RateLimitSettingsObject
}
```

## Rate Limits Settings Object

```js
{
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Sorry, you are ratelimited!', // Message returned if user should be rate limited, could be also JSON/HTML
    store: null, // <Rate Limiter Store> - if null, new MemoryStore()
    // supported stores: https://www.npmjs.com/package/express-rate-limit#store
}
```
