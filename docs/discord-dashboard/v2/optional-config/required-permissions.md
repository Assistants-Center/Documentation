# Required Permissions

You can restrict the availability of the Dashboard to only users with reassurance data on the server. This is done with this option.

It must be an Array of `DISCORD_FLAGS.Permissions` that you want to require users to have in order to allow them to use the Dashboard.

`DISCORD_FLAGS.Permissions` is accesible from:

```js
DBD.DISCORD_FLAGS.Permissions.PERMISSION_NAME
```

Discord-Dashboard allows to use multiple permissions required:

```js
requiredPermissions: [
    DBD.DISCORD_FLAGS.Permissions.MANAGE_GUILD, 
    DBD.DISCORD_FLAGS.Permissions.BAN_MEMBERS, 
    ...
]
```

`PERMISSION_NAME`s available:

```js
CREATE_INSTANT_INVITE
KICK_MEMBERS
BAN_MEMBERS
ADMINISTRATOR
MANAGE_CHANNELS
MANAGE_GUILD
ADD_REACTIONS
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
STREAM
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES
EMBED_LINKS
ATTACH_FILES
READ_MESSAGE_HISTORY
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS
VIEW_GUILD_INSIGHTS
CONNECT
SPEAK
MUTE_MEMBERS
DEAFEN_MEMBERS
MOVE_MEMBERS
USE_VAD
CHANGE_NICKNAME
MANAGE_NICKNAMES
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS_AND_STICKERS
USE_APPLICATION_COMMANDS
REQUEST_TO_SPEAK
MANAGE_EVENTS
MANAGE_THREADS
CREATE_PUBLIC_THREADS
CREATE_PRIVATE_THREADS
USE_EXTERNAL_STICKERS
SEND_MESSAGES_IN_THREADS
START_EMBEDDED_ACTIVITIES
MODERATE_MEMBERS
```

Each permission is described on [Discord OAuth2 Documentation](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags).

**Default value**:

```js
requiredPermissions: [ DBD.DISCORD_FLAGS.Permissions.MANAGE_GUILD ],
```
