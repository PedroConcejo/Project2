# Reboot BackendEnd Sample

## Introduction

## Directory Structure

## Setup

### Install & Update Dependencies
The first time you start the server you may want to make sure you have the dependencies installed, in the right versions. To do so, just go to the terminal and type:

```
$ npm install
```
### Install StandardJS Linter
[StandardJS](https://standardjs.com/) is a JavaScript style guide, linter, and formatter.

#### VSCode Extension
You may want to install [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)

> VSCODE `SETTINGS.JSON`:
```
  "javascript.validate.enable": false,
  "standard.enable": true,
  "standard.run": "onType",
  "standard.autoFixOnSave": false,
  "standard.usePackageJson": true
```

*Make sure you don't have duplicate rules!*

### Environment Variables

The next setup step is to create an `Environment Variable` file `.env` in this folder. We have provided a `.env.example` for you with a sample configuration for both **development** and **production** environments.

Make your own copy_
```
$ cp .env.example .env
```

And customize the sample params to your needs

- mongoURL: "mongodb://localhost/",
- mongoDBName: 'reboot',
- apiKeys : "fakeapikey",
- port : 5000

## Start local Server

You can start your server anytime with:

```
$ npm run dev
```

You should see something like:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.43.142:8080
Hit CTRL-C to stop the server
```

# RUTAS

### AUTH

METHOD | URL                        | What does it do
-------|----------------------------|---------------------------------
POST   | `api/auth/signup`          | Create an account
POST   | `api/auth/login`           | Login User & Return Token

### USER PROFILE (auth)
METHOD | URL         | What does it do
-------|-------------|---------------------------------
GET    | `api/me`    | Get user details
PUT    | `api/me`    | Update user details
DELETE | `api/me`    | Delete User


### USER CLUB FAVOURITES (auth)

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `api/me/clubs`         | Get user's favourite clubs
POST   | `api/me/clubs/:clubId` | Add club to favourite
DELETE | `api/me/clubs/:clubId` | Delete club from favourite


### USER EVENTS FAVOURITES (auth)
METHOD | URL                      | What does it do
-------|--------------------------|---------------------------------
GET    | `api/me/events`          | Get user's favourite events
PUT    | `api/me/events/:eventId` | Add event to favourite
DELETE | `api/me/events/:eventId` | Delete event from favourite


### CLUBS
METHOD | URL                 | What does it do
-------|---------------------|---------------------------------
GET    | `api/clubs`         | Get all clubs
POST   | `api/clubs`         | Create club
GET    | `api/clubs/:clubId` | Get one club info
DELETE | `api/clubs/:clubId` | Delete club

### EVENTS
METHOD | URL                 | What does it do
-------|---------------------|---------------------------------
GET    | `api/events`        | Get all events

### EVENTS FROM CLUB

METHOD | URL                 | What does it do
-------|---------------------|---------------------------------
GET    | `api/clubs/:clubId/events` | Get one club events
POST   | `api/clubs/:clubId/events` | Create Club Event
PUT    | `api/clubs/:clubId/events/:eventId` | Update Club Event
DELETE | `api/clubs/:clubId/events/:eventId` | Delete Club Event


Happy coding!
