# intro-nodejs-express

Branch "main": med Express
Branch "noExpress": utan Express

Forked from https://github.com/chasacademy-sandra-larsson/intro-nodejs-express
Inspelning:

- https://us06web.zoom.us/rec/share/U77vp0L-mOcTVJpa0TVl3mxRV85x_bp-kJpMbVhUiQq0GO2JCuo_EruR9fskHp1W.QVMr4IylDMGwyQMn%20%20
- Lösenkod: n7NKT\*7Q

1. npm init (skapar en package.json, säg ja till alla) Behövs egentligen inte pga vi kör node.
2. Skapade en fil med namnet server.js
3. Skapade en fil med namnet vanilla_api.js
4. Installerade Express: npm install express --save
5. Installerade Nodemon: npm i -g nodemon - -save -dev
6. Lade till detta i package.json: "type": "module",
7. FORTSÄTT VID 02.12.30!!!

Run: node server.js
Ska ge: Server on http://localhost:3000
Gå till: localhost:3000 i browsern
Ska ge: // 20240517164937 // http://localhost:3000/ { "message": "Hello from server!" }
Testa att gå till: localhost:3000/test i browsern (som ju inte finns).
Ska ge: // 20240517164937 // http://localhost:3000/test { "message": "Route not found" }
