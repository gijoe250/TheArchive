# TheArchive
Repository for RowdyHacks project

Project Path

/TheArchive/

  api/
      models/
        boardgame.js
        user.js
      routes/
        boardgames.js
        users.js
       
  client/
      public/
        favicon.ico
        index.html
      src/
        assets/
          logo.png
        components/
          EditBoardGames.vue
          HelloWorld.vue
          Home.vue
          Items.vue
          Login.vue
          NewBoardGames.vue
          NewPost.vue
          Post.vue
          Register.vue
      App.vue
      main.js
  .gitignore
  README.md
  babel.config.js
  package-lock.json
  package.json
  
  config/
      database.js
      
  .env
  .gitignore
  README.md
  app.js
  package-lock.json
  package.json
  server.js

# TheArchive
Repository for RowdyHacks project

How to use the API:
  Login{ 
  Does not actually check stop access to boardgames. Cookies needed to check log in
      Username: type in username
      Password: type in password
      Go: checks if it exists
      Sign up: switches to register
      }
  Sign Up:{
      Username: type in username
      Password: type in password
      Verify Password: retype in password
      Submit: submits to database
      Login: switches to Login
  }
  Dashboard:{
    Add Board Game:
      When clicked, fill out the form by doing the following:
        NAME: type a string name of the board game
        PRICE: type the number price of the board game
        DURATION: type the number time in minutes of the game length
        DESCRIPTION: type the string description of the game
      ADD: adds board game to the database
    Edit: currently is not linked and does not work
    Delete: pressing delete will delete it from the database. A refresh is needed to see the change.
    }
