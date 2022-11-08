const { exec } = require('child_process')

exec('yarn run docs:serve --port 3055', (a,b,c)=>console.log(a,b,c))
