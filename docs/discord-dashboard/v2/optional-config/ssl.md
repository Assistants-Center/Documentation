# SSL

If you want to use the https protocol, you must provide us with a certificate and an SSL key String. This can also be `fs.readFileSync`.

```js
...
    SSL: {
        enabled: Boolean=false, 
        key: String='',
        cert: String=''
    },
...
```
