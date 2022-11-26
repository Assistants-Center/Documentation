# First Steps

## 1. Define Module

```js
let DBD = require("discord-dashboard");
```

## 2. Use License

To use the Dashboard, you must have a license generated for the project. You will generate one through your Assistants Center account on the https://assistantscenter.com/discord-dashboard/v2 website. There is an OpenSource license available for FREE.

```js
await DBD.useLicense('licenseId');
```

## 3. Update Dashboard Class

If your license is correct, a new class has just been added to the Dashboard. Therefore, you must redefine the Dashboard to access it.

```js
DBD.Dashboard = DBD.UpdatedClass();
```

## 4. Create a Dashboard Class

Now, to create a working Dashboard - you should create a Dashboard class. This is extremely simple.

```js
const Dashboard = new DBD.Dashboard({DiscordDashboardConfig});
```

## 5. Init Dashboard

To initialize the Dashboard, you must use the `init()` method.

```js
Dashboard.init();
```
