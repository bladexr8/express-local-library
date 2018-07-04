# Project Title

Express Example App From Tutorial - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

## Getting Started

This is a sample application based on the Node/Express Tutorial on the Mozilla Developer Site.

### Prerequisites

What things you need to install the software and how to install them

```
- Nodejs
- A Mongo DB database (mLabs has a good free tier for dev/testing)
```

### Commands

Commands to get the application up and running

Install the Node Dependencies

```
$ npm install
```

Set Up the Required Environment Variables for the Mongo DB Connectivity.
Note that the DB Connect String is the host and database information after the "@" symbol in your Mongo DB Connect String

```
$ export LOCAL_LIBRARY_DB_USER="<your MongoDB Username>"
$ export LOCAL_LIBRARY_DB_PASSWORD="<your MongoDB Password>"
$ export LOCAL_LIBRARY_DB_STRING="<your DB Connect String>"
```

Populate the MongoDB with some test data (assumes all environment variables are set)

```
$ node populatedb mongodb://$LOCAL_LIBRARY_DB_USER:$LOCAL_LIBRARY_DB_PASSWORD@$LOCAL_LIBRARY_DB_STRING
```

To start in development mode with auto-refresh

```
$ DEBUG=express-local-library:* npm run devstart
```

To start in Production Mode

```
$ npm start
```

## Deployment

Add additional notes about how to deploy this on a live system
