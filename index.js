const { exec } = require('child_process')

exec('yarn run docs:build', (a,b,c)=>exec('yarn run docs:serve --port 3055', (d,e,f)=>console.log(a,b,c,d,e,f)))
