# Library Mgmt

This project is about managing the library including listing and burrowing books... This is the api server of the [frontend repo]

You can visit [Here]()

## How to use

1. Clone the project by running `git clone <repo link>` in your terminal
2. Run `cd <foldername>` to go inside the project folder or open the project in your fav code editor
3. Install dependencies `npm i` from the terminal within the root directory of the project
4. Rename `.env.sample` to `.env` and pass the value accordingly
5. Run the project `npm run dev` for the dev environment and `npm  start` in the production. Please note that `npm rund dev` will use `nodemon` behind. So, run `npm i nodemon -g` to install nodemon package in your system level if you dont have yet.
6. The server should be running at [`http://localhost:8000`](http://localhost:8000)

## Available apis

All the apis segmentation path are followed by `http://localhost:8000/api/v1`

### User API

All the User api will follow the following patterns `http://localhost:8000/api/v1/users`

| #   | PATH          | METHOD | PRIVATE | DESCRIPTION                                                                                                             |
| --- | ------------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1.  | `/`           | `GET`  | TRUE    | It returns the user object                                                                                              |
| 2.  | `/`           | `POST` | FALSE   | Server expects the user object and create a new user in the DB                                                          |
| 3.  | `/admin-user` | `POST` | TRUE    | Server expects the user object and create a new admin user in the DB. Only authenticated admin can create another admin |

### Books API

All the Book api will follow the following patterns `http://localhost:8000/api/v1/users`

| #   | PATH | METHOD | PRIVATE | DESCRIPTION |
| --- | ---- | ------ | ------- | ----------- |
| 1.  |      |        |         |             |
