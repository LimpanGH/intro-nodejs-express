# intro-nodejs-express

- Branch "main": med Express
- Branch "noExpress": utan Express

- Forked from https://github.com/chasacademy-sandra-larsson/intro-nodejs-express

- Inspelning:

  - https://us06web.zoom.us/rec/share/U77vp0L-mOcTVJpa0TVl3mxRV85x_bp-kJpMbVhUiQq0GO2JCuo_EruR9fskHp1W.QVMr4IylDMGwyQMn%20%20
  - Lösenkod: n7NKT\*7Q

## Dagens uppgift:

1. npm init (skapar en package.json, säg ja till alla).
2. Skapade en fil med namnet server.js
3. Skapade en fil med namnet vanilla_api.js
4. Installerade Express:
   ```
   npm install express --save
   ```
5. Installerade Nodemon:
   ```
   npm i -g nodemon - -save -dev
   ```
6. Lade till detta i package.json:
   ```
   "type": "module",
   ```
7. Lade till detta i package.json för att starta både server.js och nodemon (startar om servern vid ändringar i kod):
   ```
   "scripts": {
   "start": "nodemon server.js"
   },
   ```
8. Run:
   ```
   node server.js för servern
   ```
   Ska ge: Server on http://localhost:3000
9. Run:
   ```
   npm start
   ```
   för servern OCH Nodemon. Ska ge: Server on http://localhost:3000 OCH info om Nodemon
10. Gå till: localhost:3000 i browsern som ska visa: Hello from route '

11. Kör igång en New Request i extension Thunder Client för att kunna se även kunna testa POST, PUT och DELETE utan
    en fungerande frontend, (annat alternativ är Postman).
    1. GET: Skriv in: localhost:3000 i Thunder Client. Ska ge: Hello from route '/
    2. POST: Skriv in: localhost:3000/whatever i Thunder Client. Ska ge: A POST-request
    3. PUT: Skriv in: localhost:3000/whatever i Thunder Client. Ska ge: A PUT-request
    4. DELETE: Skriv in: localhost:3000/whatever i Thunder Client. Ska ge: A DELETE-request
12. Installera Body Parser, behövs om man vill göra tex en PUT i Thunder Client med tex en user i body:

    ```
    npm install body-parser

    ```

13. Lägg till denna kod i server.js:
    ```
    import bodyparser from 'body-parser';
    app.use(bodyparser.json());
    ```
14. Installera CORS, öppnar upp så att alla kan göra tester:

```
npm install cors
```

15. Lägg till denna kod i server.js:

    ```
    import cors from 'cors';
    app.use(cors());
    ```

16. Put this object in body in Thunder-Client:

```
 {
   "username": "Linus",
   "password": "lösenord"
 }

```

17. Use method POST and click on send.
